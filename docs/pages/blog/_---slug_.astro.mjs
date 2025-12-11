/* empty css                                    */
import { c as createAstro, a as createComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_CA1TwRfu.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BvDoZ0G6.mjs';
import { $ as $$Sidebar } from '../../chunks/Sidebar_CBc2q-X5.mjs';
import { $ as $$TableOfContents } from '../../chunks/TableOfContents_Czcj60-K.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$YouTubeEmbed } from '../../chunks/YouTubeEmbed_4H6jTnRn.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_D-xmABt7.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DdzvcV8-.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro("https://simpleaiguide.tech");
const $$AdPlaceholder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AdPlaceholder;
  const { slotId = "1234567890", format = "auto", label = "Advertisement", className = "" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<div", ' data-astro-cid-njgxqwbk> <div class="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-mono" data-astro-cid-njgxqwbk>', '</div> <div class="w-full bg-slate-50 border border-slate-100 rounded-lg overflow-hidden relative group min-h-[250px] flex items-center justify-center" data-astro-cid-njgxqwbk> <!-- Placeholder Visuals for Dev Mode --> <div class="absolute inset-0 bg-slate-100/50 pattern-grid-lg opacity-20" data-astro-cid-njgxqwbk></div> <div class="text-slate-300 font-mono text-sm relative z-10 flex flex-col items-center gap-2" data-astro-cid-njgxqwbk> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 opacity-50" data-astro-cid-njgxqwbk> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-njgxqwbk></path> </svg> <span data-astro-cid-njgxqwbk>Ad Space</span> </div> <!-- Actual AdSense Code (Commented out for now or active if slotId provided) --> <!-- \n    <ins class="adsbygoogle"\n         style="display:block"\n         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"\n         data-ad-slot={slotId}\n         data-ad-format={format}\n         data-full-width-responsive="true"></ins>\n    <script>\n         (adsbygoogle = window.adsbygoogle || []).push({});\n    <\/script>\n    --> </div> </div> '])), maybeRenderHead(), addAttribute(`ad-container my-8 flex flex-col items-center justify-center ${className}`, "class"), label);
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/AdPlaceholder.astro", void 0);

const $$Astro$3 = createAstro("https://simpleaiguide.tech");
const $$RelatedPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${posts.length > 0 && renderTemplate`${maybeRenderHead()}<div class="mt-16 pt-10 border-t border-slate-100"><h3 class="text-2xl font-bold text-slate-900 mb-8">
Related Articles
</h3><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group block"><div class="bg-slate-50 rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100 h-full flex flex-col"><div class="flex items-center gap-2 mb-3"><span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
Read
</span><time${addAttribute(post.data.pubDate.toISOString(), "datetime")} class="text-xs text-slate-400 font-medium">${post.data.pubDate.toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  )}</time></div><h4 class="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2"><span>${post.data.title}</span></h4><p class="text-sm text-slate-500 line-clamp-3 mb-4 flex-grow">${post.data.description}</p><span class="text-sm font-semibold text-indigo-600 flex items-center gap-1 mt-auto">
Read more
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg></span></div></a>`)}</div></div>`}`;
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/RelatedPosts.astro", void 0);

const $$Astro$2 = createAstro("https://simpleaiguide.tech");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { headings } = Astro2.props;
  const filteredHeadings = headings.filter((h) => h.depth === 2 || h.depth === 3);
  return renderTemplate`${maybeRenderHead()}<div class="xl:hidden mb-8"> <details class="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"> <summary class="flex items-center justify-between p-4 cursor-pointer list-none text-slate-900 font-bold select-none group-open:bg-slate-100 transition-colors"> <span class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-indigo-600"> <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path> </svg>
Table of Contents
</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180"> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path> </svg> </summary> <div class="p-4 border-t border-slate-200 bg-white"> <ul class="space-y-3 text-sm"> ${filteredHeadings.map((heading) => renderTemplate`<li${addAttribute(`transition-colors hover:text-indigo-600 ${heading.depth === 3 ? "pl-4 text-slate-500" : "text-slate-700 font-medium"}`, "class")}> <a${addAttribute(`#${heading.slug}`, "href")} class="block py-1"> ${heading.text} </a> </li>`)} </ul> </div> </details> </div>`;
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/MobileTableOfContents.astro", void 0);

const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-4xl mx-auto my-16 px-4" data-astro-cid-motrwrji> <div class="relative overflow-hidden rounded-3xl bg-slate-900 border border-indigo-500/30 p-8 md:p-12 text-center shadow-2xl" data-astro-cid-motrwrji> <!-- Background Effects --> <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0" data-astro-cid-motrwrji> <div class="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-motrwrji></div> <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-motrwrji></div> </div> <div class="relative z-10" data-astro-cid-motrwrji> <span class="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6" data-astro-cid-motrwrji>
Join 10,000+ Explorers
</span> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" data-astro-cid-motrwrji>
Master AI Before It Masters You
</h2> <p class="text-slate-300 mb-8 max-w-lg mx-auto text-lg" data-astro-cid-motrwrji>
Get weekly guides, free tools, and no-nonsense AI news delivered
                to your inbox. Zero spam, 100% signal.
</p> <!-- Success Message (Hidden by default) --> <div id="newsletter-success" class="hidden max-w-md mx-auto bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-6 animate-fade-in" data-astro-cid-motrwrji> <div class="flex flex-col items-center gap-2 text-green-400" data-astro-cid-motrwrji> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 mb-2" data-astro-cid-motrwrji> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" data-astro-cid-motrwrji></path> </svg> <h3 class="text-xl font-bold text-white" data-astro-cid-motrwrji>
Welcome Aboard!
</h3> <p class="text-sm" data-astro-cid-motrwrji>
You're in. Keep an eye on your inbox for the next drop.
</p> </div> </div> <!-- Form --> <form id="newsletter-form" action="https://formsubmit.co/ajax/contact@simpleaiguide.tech" method="POST" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto transition-all duration-300" data-astro-cid-motrwrji> <input type="hidden" name="_subject" value="New Newsletter Subscriber!" data-astro-cid-motrwrji> <!-- Anti-spam honeypot --> <input type="text" name="_honey" style="display:none" data-astro-cid-motrwrji> <input type="email" name="email" required placeholder="Enter your email" class="flex-grow px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-motrwrji> <button type="submit" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:from-indigo-500 hover:to-purple-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all shadow-lg hover:shadow-indigo-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]" data-astro-cid-motrwrji> <span class="btn-text" data-astro-cid-motrwrji>Subscribe</span> <svg class="btn-spinner hidden animate-spin ml-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-astro-cid-motrwrji> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-motrwrji></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-motrwrji></path> </svg> </button> </form> <p id="error-message" class="hidden mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-2" data-astro-cid-motrwrji>
Something went wrong. Please try again.
</p> <p class="mt-4 text-xs text-slate-500 form-footer" data-astro-cid-motrwrji>
Unsubscribe at any time. We respect your inbox.
</p> </div> </div> </section>  `;
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/Newsletter.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="w-full max-w-3xl mx-auto mt-16 px-4"> <div class="flex items-center gap-4 mb-8"> <div class="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div> <span class="text-slate-400 dark:text-slate-500 font-medium text-sm uppercase tracking-widest">Discussion</span> <div class="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div> </div> <!-- Giscus Container --> <div class="giscus-frame min-h-[160px]"> <script src="https://giscus.app/client.js" data-repo="mittai17/simpleaiguide" data-repo-id="R_kgDOQgWPhg" data-category="Announcements" data-category-id="DIC_kwDOQgWPhs4CzphA" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="transparent_dark" data-lang="en" crossorigin="anonymous" async><\/script> </div> <p class="text-center text-xs text-slate-400 mt-4">\nPowered by <a href="https://giscus.app" target="_blank" rel="noreferrer" class="hover:text-indigo-500 transition-colors">Giscus</a>. Comments are stored on GitHub.\n</p> </section> '])), maybeRenderHead());
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/Comments.astro", void 0);

const $$Astro$1 = createAstro("https://simpleaiguide.tech");
const $$FloatingShare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FloatingShare;
  const { url, title } = Astro2.props;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return renderTemplate`${maybeRenderHead()}<div id="smart-dock" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform translate-y-0"> <!-- Main Dock Capsule --> <div class="flex items-center gap-2 p-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/60 dark:border-slate-700/60 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] ring-1 ring-slate-900/5 dark:ring-white/10 group/dock relative"> <!-- Progress + Scroll Top --> <button id="scroll-top-btn" class="relative w-10 h-10 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-all active:scale-95 bg-slate-50/50 dark:bg-slate-800/50" aria-label="Scroll to Top"> <!-- Progress Ring SVG --> <svg class="absolute inset-0 -rotate-90 w-full h-full pointer-events-none" viewBox="0 0 36 36"> <path class="text-slate-200 dark:text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"></path> <path id="progress-ring" class="text-indigo-600 dark:text-indigo-500 transition-all duration-100 ease-out" stroke-dasharray="100, 100" stroke-dashoffset="100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path> </svg> <!-- Arrow Icon --> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path> </svg> </button> <div class="w-px h-5 bg-slate-300/50 dark:bg-slate-700/50 mx-0.5"></div> <!-- Text Size --> <button id="text-size-btn" class="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 group relative" aria-label="Toggle Text Size"> <span class="text-sm font-bold">Aa</span> <span class="absolute bottom-full mb-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Text Size</span> </button> <!-- Like Button --> <button id="like-btn" class="w-10 h-10 flex items-center justify-center rounded-full text-slate-400 dark:text-slate-500 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all active:scale-95 group relative" aria-label="Like Post"> <svg id="heart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path> </svg> <svg id="heart-filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-pink-500 hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path> </svg> <span class="absolute bottom-full mb-2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Like</span> </button> <div class="w-px h-5 bg-slate-300/50 dark:bg-slate-700/50 mx-0.5"></div> <!-- Share Toggle --> <div class="relative"> <button id="share-toggle-btn" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-700 text-white hover:bg-indigo-600 transition-all active:scale-95 shadow-md" aria-label="Open Share Menu"> <svg id="share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path> </svg> <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Expanded Share Menu (Tooltip Style) --> <div id="share-menu" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col gap-2 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 rounded-2xl shadow-xl transition-all duration-300 opacity-0 translate-y-4 pointer-events-none scale-90 origin-bottom"> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors whitespace-nowrap"> <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 text-[#1DA1F2]"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
Twitter
</a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors whitespace-nowrap"> <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 text-[#4267B2]"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
Facebook
</a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors whitespace-nowrap"> <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 text-[#0077b5]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
LinkedIn
</a> <button id="copy-link-btn" class="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors whitespace-nowrap w-full text-left"> <svg id="link-icon" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-400 dark:text-slate-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path> </svg> <svg id="check-icon" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-green-500 hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path> </svg> <span id="copy-text">Copy Link</span> </button> </div> </div> </div> </div>  `;
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/components/FloatingShare.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://simpleaiguide.tech");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content, headings } = await post.render();
  const wordsPerMinute = 200;
  const wordCount = post.body.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  const allPosts = await getCollection("blog");
  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.data.category === post.data.category
  ).slice(0, 3);
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.metaTitle ?? post.data.title, "description": post.data.description }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", " ", '<div class="container mx-auto px-6 md:px-4 py-8"> <div class="flex flex-col lg:flex-row gap-8"> <!-- Sidebar (Desktop: Left) --> <aside class="hidden lg:block w-64 flex-shrink-0"> <div class="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-2"> ', ' </div> </aside> <!-- Mobile Sidebar Toggle & Drawer --> <div class="lg:hidden w-full mb-6"> <button id="blog-menu-btn" class="flex items-center justify-between w-full px-5 py-4 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-900 font-bold hover:border-indigo-300 hover:shadow-md transition-all active:scale-[0.99]"> <span class="flex items-center gap-3"> <span class="p-1.5 bg-indigo-50 rounded-lg text-indigo-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </span>\nBlog Menu\n</span> <span class="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Tap to navigate</span> </button> </div> <div id="mobile-blog-menu" class="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm hidden transition-opacity duration-300"> <div class="absolute left-0 top-0 bottom-0 w-3/4 max-w-xs bg-white shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300 -translate-x-full" id="mobile-blog-menu-content"> <div class="flex justify-between items-center mb-6"> <h2 class="font-bold text-lg text-slate-900">\nNavigation\n</h2> <button id="close-blog-menu" class="p-2 text-slate-400 hover:text-slate-900 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> ', ' </div> </div>  <!-- Main Content --> <main class="flex-grow min-w-0"> <div class="mb-6"> ', ' </div> <header class="mb-8 md:mb-12 text-center"> <div class="flex items-center justify-center flex-wrap gap-4 text-sm text-slate-500 mb-6"> <span class="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-wider"> ', " </span> <span>\u2022</span> <time", ' class="font-medium"> ', " </time> <span>\u2022</span> <span>", ' min read</span> </div> <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-slate-900 max-w-4xl mx-auto"> ', " </h1> <!-- Mobile Table of Contents --> ", ' <!-- Social Share --> <div class="flex items-center justify-center gap-3 mb-8"> <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Share:</span> <a', ' target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-slate-100 hover:bg-[#1DA1F2] hover:text-white transition-colors text-slate-600" aria-label="Share on Twitter"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg> </a> <a', ' target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-slate-100 hover:bg-[#4267B2] hover:text-white transition-colors text-slate-600" aria-label="Share on Facebook"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg> </a> <a', ' target="_blank" rel="noopener noreferrer" class="p-2 rounded-full bg-slate-100 hover:bg-[#0077b5] hover:text-white transition-colors text-slate-600" aria-label="Share on LinkedIn"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg> </a> </div> </header> <article class="w-full min-w-0"> <div class="prose prose-slate dark:prose-invert max-w-4xl mx-auto prose-lg md:prose-xl prose-p:leading-relaxed prose-li:leading-relaxed prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-200 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-strong:text-slate-900 dark:prose-strong:text-white prose-li:text-slate-700 dark:prose-li:text-slate-200 prose-pre:bg-slate-900 prose-pre:rounded-xl prose-pre:shadow-lg prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto prose-img:max-h-[500px] prose-img:w-auto prose-img:max-w-full prose-a:no-underline hover:prose-a:underline bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-transparent dark:border-slate-800/50"> ', " ", " </div> </article> <!-- Post-Content Ad --> ", ' <!-- Next/Prev Navigation --> <div class="mt-12 pt-8 border-t border-slate-100 grid sm:grid-cols-2 gap-6"> ', " ", " </div> <!-- Newsletter --> ", " <!-- Comments --> ", " <!-- Related Posts --> ", ' </main> <!-- Table of Contents (Desktop: Right Sticky) --> <aside class="hidden xl:block w-64 flex-shrink-0"> <div class="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar"> ', " </div> </aside> </div> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.data.title,
        description: post.data.description,
        datePublished: post.data.pubDate.toISOString(),
        author: {
          "@type": "Organization",
          name: "Simple AI Guide",
          url: "https://simpleaiguide.tech"
        },
        publisher: {
          "@id": "https://simpleaiguide.tech/#organization"
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://simpleaiguide.tech/blog/${post.slug}`
        },
        image: post.data.heroImage ? `https://simpleaiguide.tech${post.data.heroImage}` : "https://simpleaiguide.tech/social-image.png",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".prose > p:first-of-type"]
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://simpleaiguide.tech/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://simpleaiguide.tech/blog"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.data.title,
            item: `https://simpleaiguide.tech/blog/${post.slug}`
          }
        ]
      }
    ]
  })), renderComponent($$result2, "FloatingShare", $$FloatingShare, { "title": post.data.title, "url": `https://simpleaiguide.tech/blog/${post.slug}` }), maybeRenderHead(), renderComponent($$result2, "Sidebar", $$Sidebar, { "currentSlug": post.slug, "currentCategory": post.data.category }), renderComponent($$result2, "Sidebar", $$Sidebar, { "currentSlug": post.slug, "currentCategory": post.data.category }), renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.data.title }
  ] }), post.data.category, addAttribute(post.data.pubDate.toISOString(), "datetime"), post.data.pubDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), readingTime, post.data.title, renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "headings": headings }), addAttribute(`https://twitter.com/intent/tweet?text=${post.data.title}&url=https://simpleaiguide.tech/blog/${post.slug}`, "href"), addAttribute(`https://www.facebook.com/sharer/sharer.php?u=https://simpleaiguide.tech/blog/${post.slug}`, "href"), addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=https://simpleaiguide.tech/blog/${post.slug}`, "href"), post.data.keyTakeaways && post.data.keyTakeaways.length > 0 && renderTemplate`<div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-8 rounded-r-xl not-prose"> <h3 class="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"> <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path> </svg>
Key Takeaways
</h3> <ul class="space-y-2"> ${post.data.keyTakeaways.map(
    (takeaway) => renderTemplate`<li class="flex items-start gap-2 text-indigo-800"> <span class="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span> <span>${takeaway}</span> </li>`
  )} </ul> </div>`, renderComponent($$result2, "Content", Content, { "components": { YouTubeEmbed: $$YouTubeEmbed } }), renderComponent($$result2, "AdPlaceholder", $$AdPlaceholder, { "label": "Sponsored Content", "className": "mt-16" }), prevPost ? renderTemplate`<a${addAttribute(`/blog/${prevPost.slug}`, "href")} class="flex flex-col p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-md transition-all group text-left h-full"> <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path> </svg>
Previous Post
</span> <span class="text-lg font-bold text-slate-900 group-hover:text-indigo-700 line-clamp-2"> ${prevPost.data.title} </span> </a>` : renderTemplate`<div></div>`, nextPost && renderTemplate`<a${addAttribute(`/blog/${nextPost.slug}`, "href")} class="flex flex-col p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:shadow-md transition-all group text-right h-full items-end"> <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
Next Post
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path> </svg> </span> <span class="text-lg font-bold text-slate-900 group-hover:text-indigo-700 line-clamp-2"> ${nextPost.data.title} </span> </a>`, renderComponent($$result2, "Newsletter", $$Newsletter, {}), renderComponent($$result2, "Comments", $$Comments, {}), renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "posts": relatedPosts }), renderComponent($$result2, "TableOfContents", $$TableOfContents, { "headings": headings })) })}`;
}, "C:/Users/ggiri/Documents/new-vs-code/website/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/ggiri/Documents/new-vs-code/website/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
