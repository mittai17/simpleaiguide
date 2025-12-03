import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, l as decodeKey } from './chunks/astro/server_5nTOXfPx.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ggiri/Documents/new-vs-code/website/","adapterName":"","routes":[{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/api/search.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search.json.ts","pathname":"/api/search.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/debug/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/debug","isIndex":false,"type":"page","pattern":"^\\/debug\\/?$","segments":[[{"content":"debug","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/debug.astro","pathname":"/debug","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/learn/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/learn","isIndex":true,"type":"page","pattern":"^\\/learn\\/?$","segments":[[{"content":"learn","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/learn/index.astro","pathname":"/learn","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/privacy-policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy-policy","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\/?$","segments":[[{"content":"privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.astro","pathname":"/privacy-policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://simpleaiguide.tech","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/components/LearnSidebar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/learn/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/learn/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/learn/[category]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/learn/[category]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/learn/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/learn/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/blog/[category]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[category]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/debug.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/debug@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/privacy-policy.astro",{"propagation":"none","containsHead":true}],["C:/Users/ggiri/Documents/new-vs-code/website/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/search.json@_@ts":"pages/api/search.json.astro.mjs","\u0000@astro-page:src/pages/blog/[category]/index@_@astro":"pages/blog/_category_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/debug@_@astro":"pages/debug.astro.mjs","\u0000@astro-page:src/pages/learn/[category]/index@_@astro":"pages/learn/_category_.astro.mjs","\u0000@astro-page:src/pages/learn/index@_@astro":"pages/learn.astro.mjs","\u0000@astro-page:src/pages/learn/[...slug]@_@astro":"pages/learn/_---slug_.astro.mjs","\u0000@astro-page:src/pages/privacy-policy@_@astro":"pages/privacy-policy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DP38OdzP.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/blog/best-ai-tools/i-tried-289-ai-tools.mdx?astroContentCollectionEntry=true":"chunks/i-tried-289-ai-tools_B7ROn3As.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/blog/welcome.md?astroContentCollectionEntry=true":"chunks/welcome_CuQzUcux.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-1-what-is-ai.mdx?astroContentCollectionEntry=true":"chunks/1-1-what-is-ai_BtwhPQnG.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-10-your-first-ai-project.mdx?astroContentCollectionEntry=true":"chunks/1-10-your-first-ai-project_DMeurFoe.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-2-why-now.mdx?astroContentCollectionEntry=true":"chunks/1-2-why-now_8JzNRy17.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-3-history.mdx?astroContentCollectionEntry=true":"chunks/1-3-history_DLMwVJW8.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-4-types-of-ai.mdx?astroContentCollectionEntry=true":"chunks/1-4-types-of-ai_B_nALsuk.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-5-secret-life-of-ai.mdx?astroContentCollectionEntry=true":"chunks/1-5-secret-life-of-ai_B_2Ypzw9.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-6-ai-vs-ml-vs-dl.mdx?astroContentCollectionEntry=true":"chunks/1-6-ai-vs-ml-vs-dl_DK5ZU2B_.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-7-neural-networks.mdx?astroContentCollectionEntry=true":"chunks/1-7-neural-networks_DIeo5zuW.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-8-ai-in-real-world.mdx?astroContentCollectionEntry=true":"chunks/1-8-ai-in-real-world_rFhGx0OO.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-9-myths-about-ai.mdx?astroContentCollectionEntry=true":"chunks/1-9-myths-about-ai_ucWnRetx.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-1-what-is-ml.mdx?astroContentCollectionEntry=true":"chunks/2-1-what-is-ml_DtRpqpY0.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-2-why-ml-matters.mdx?astroContentCollectionEntry=true":"chunks/2-2-why-ml-matters_y4xQ87R7.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-3-history-of-ml.mdx?astroContentCollectionEntry=true":"chunks/2-3-history-of-ml_0ErRDOV4.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-4-ml-vs-traditional.mdx?astroContentCollectionEntry=true":"chunks/2-4-ml-vs-traditional_BMkc9FUY.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-5-why-ml-works.mdx?astroContentCollectionEntry=true":"chunks/2-5-why-ml-works_BoxV_Ef5.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-6-types-of-ml.mdx?astroContentCollectionEntry=true":"chunks/2-6-types-of-ml_Cfo1ZQXo.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/blog/best-ai-tools/i-tried-289-ai-tools.mdx?astroPropagatedAssets":"chunks/i-tried-289-ai-tools_CVXHQC-x.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/blog/welcome.md?astroPropagatedAssets":"chunks/welcome_BntK1zMq.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-1-what-is-ai.mdx?astroPropagatedAssets":"chunks/1-1-what-is-ai_DeCfnVL9.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-10-your-first-ai-project.mdx?astroPropagatedAssets":"chunks/1-10-your-first-ai-project_-LIQxegn.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-2-why-now.mdx?astroPropagatedAssets":"chunks/1-2-why-now_BTA1zaEr.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-3-history.mdx?astroPropagatedAssets":"chunks/1-3-history_RFHdLmR0.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-4-types-of-ai.mdx?astroPropagatedAssets":"chunks/1-4-types-of-ai_B1l_JFUu.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-5-secret-life-of-ai.mdx?astroPropagatedAssets":"chunks/1-5-secret-life-of-ai_SBzX7gLA.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-6-ai-vs-ml-vs-dl.mdx?astroPropagatedAssets":"chunks/1-6-ai-vs-ml-vs-dl_D-5S65uR.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-7-neural-networks.mdx?astroPropagatedAssets":"chunks/1-7-neural-networks_C4PvmtPy.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-8-ai-in-real-world.mdx?astroPropagatedAssets":"chunks/1-8-ai-in-real-world_DoSOtAit.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-9-myths-about-ai.mdx?astroPropagatedAssets":"chunks/1-9-myths-about-ai_DJhh_SCZ.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-1-what-is-ml.mdx?astroPropagatedAssets":"chunks/2-1-what-is-ml_Cmlzc_hq.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-2-why-ml-matters.mdx?astroPropagatedAssets":"chunks/2-2-why-ml-matters_Ctpxdj0i.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-3-history-of-ml.mdx?astroPropagatedAssets":"chunks/2-3-history-of-ml_CTCOmLFD.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-4-ml-vs-traditional.mdx?astroPropagatedAssets":"chunks/2-4-ml-vs-traditional_CGSJYNbK.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-5-why-ml-works.mdx?astroPropagatedAssets":"chunks/2-5-why-ml-works_xOhvuP6V.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-6-types-of-ml.mdx?astroPropagatedAssets":"chunks/2-6-types-of-ml_pmR8nm49.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/blog/best-ai-tools/i-tried-289-ai-tools.mdx":"chunks/i-tried-289-ai-tools_BbA0KQFD.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/blog/welcome.md":"chunks/welcome_B0gbDoU9.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-1-what-is-ai.mdx":"chunks/1-1-what-is-ai_nHJ55mDn.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-10-your-first-ai-project.mdx":"chunks/1-10-your-first-ai-project_DksQpLd5.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-2-why-now.mdx":"chunks/1-2-why-now_Tyw9tapL.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-3-history.mdx":"chunks/1-3-history_Yd1uNdQg.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-4-types-of-ai.mdx":"chunks/1-4-types-of-ai_DlJUTVCL.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-5-secret-life-of-ai.mdx":"chunks/1-5-secret-life-of-ai_CQNUoORc.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-6-ai-vs-ml-vs-dl.mdx":"chunks/1-6-ai-vs-ml-vs-dl_DaGAhoue.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-7-neural-networks.mdx":"chunks/1-7-neural-networks_DYaC0AZK.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-8-ai-in-real-world.mdx":"chunks/1-8-ai-in-real-world_eaQ-fnkr.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/ai-basics/module-1/1-9-myths-about-ai.mdx":"chunks/1-9-myths-about-ai_D7BiYzNn.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-1-what-is-ml.mdx":"chunks/2-1-what-is-ml_BlzsouSe.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-2-why-ml-matters.mdx":"chunks/2-2-why-ml-matters_DUiF4GkV.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-3-history-of-ml.mdx":"chunks/2-3-history-of-ml_Ca2XlBeC.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-4-ml-vs-traditional.mdx":"chunks/2-4-ml-vs-traditional_Bk-nMXKX.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-5-why-ml-works.mdx":"chunks/2-5-why-ml-works_D-URLaNb.mjs","C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-6-types-of-ml.mdx":"chunks/2-6-types-of-ml_DqejC3j5.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.rCG0fbG7.js","/astro/hoisted.js?q=3":"_astro/hoisted.DZzUO2JP.js","/astro/hoisted.js?q=1":"_astro/hoisted.CphIHXpJ.js","/astro/hoisted.js?q=2":"_astro/hoisted.QTHIkVIn.js","/astro/hoisted.js?q=4":"_astro/hoisted.C-GQz0Ye.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/404.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/about/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/api/search.json","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/blog/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/contact/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/debug/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/learn/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/privacy-policy/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/terms/index.html","/file:///C:/Users/ggiri/Documents/new-vs-code/website/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9or0wV++QkQfFbNUkbFjpugOYncF1VNDF8EoZjyjwxE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
