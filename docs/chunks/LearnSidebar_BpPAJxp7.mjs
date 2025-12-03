import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_5nTOXfPx.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_aYTV2eim.mjs';
/* empty css                          */

const $$Astro = createAstro("https://simpleaiguide.tech");
const $$LearnSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LearnSidebar;
  const { activeSlug, activeCategory } = Astro2.props;
  const allPosts = await getCollection("learn");
  const categories = [
    { id: "ai-basics", title: "AI Basics" },
    { id: "machine-learning", title: "Machine Learning" },
    { id: "deep-learning", title: "Deep Learning" },
    { id: "math-for-ai", title: "Math for AI" },
    { id: "python-for-ai", title: "Python for AI" }
  ];
  const groupedPosts = categories.map((cat) => ({
    ...cat,
    posts: allPosts.filter((p) => p.data.category === cat.id).sort((a, b) => a.data.order - b.data.order)
  }));
  return renderTemplate`${maybeRenderHead()}<nav class="h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-2 pb-10" data-astro-cid-gumytaxc> <div class="space-y-4" data-astro-cid-gumytaxc> ${groupedPosts.map(
    (category) => category.posts.length > 0 ? renderTemplate`<div class="group"${addAttribute(category.id, "data-category")}${addAttribute(activeCategory === category.id, "data-active")} data-astro-cid-gumytaxc> <button class="w-full flex items-center justify-between text-left mb-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20 category-toggle"${addAttribute(
      activeCategory === category.id ? "true" : "false",
      "aria-expanded"
    )} data-astro-cid-gumytaxc> <h3 class="font-bold text-slate-800 uppercase tracking-wider text-xs flex items-center gap-2" data-astro-cid-gumytaxc> ${category.title} <span class="bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded-full border border-slate-200" data-astro-cid-gumytaxc> ${category.posts.length} </span> </h3> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${addAttribute(`w-4 h-4 text-slate-400 transition-transform duration-200 chevron ${activeCategory === category.id ? "rotate-180" : ""}`, "class")} data-astro-cid-gumytaxc> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" data-astro-cid-gumytaxc></path> </svg> </button> <div${addAttribute(`overflow-hidden transition-all duration-300 ease-in-out category-content ${activeCategory === category.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`, "class")} data-astro-cid-gumytaxc> <ul class="space-y-1 border-l-2 border-slate-100 ml-2 pl-2" data-astro-cid-gumytaxc> ${category.posts.map((post) => {
      const isActive = activeSlug === post.slug;
      return renderTemplate`<li data-astro-cid-gumytaxc> <a${addAttribute(`/learn/${post.slug}`, "href")}${addAttribute([
        "relative block px-3 py-2 rounded-md text-sm transition-all duration-200 group/link",
        isActive ? "bg-indigo-50 text-indigo-700 font-semibold shadow-sm ring-1 ring-indigo-200" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
      ], "class:list")} data-astro-cid-gumytaxc> ${isActive && renderTemplate`<span class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1" data-astro-cid-gumytaxc> <span class="relative flex h-2 w-2" data-astro-cid-gumytaxc> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" data-astro-cid-gumytaxc></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" data-astro-cid-gumytaxc></span> </span> </span>`} <span${addAttribute(
        isActive ? "pr-4" : "",
        "class"
      )} data-astro-cid-gumytaxc> ${post.data.title} </span> </a> </li>`;
    })} </ul> </div> </div>` : null
  )} </div> </nav>  `;
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/LearnSidebar.astro", void 0);

export { $$LearnSidebar as $ };
