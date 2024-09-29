/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_CSitQMZA.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_BKKEzO8a.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const dataset = await getCollection("dataset");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to TacoFundation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
The TACO Foundation 🌮
</h1> <p class="text-center text-lg mt-4 mb-10">
Every EO problem deserves a TACO.
<a href="https://geoparquet.org/releases/v1.1.0/" class="text-blue-500 text-lg underline hover:text-blue-700">
Click here to read the full specification
</a> </p> </main> <section aria-label="dataset"> <div class="px-4 mx-auto max-w-screen-xl"> <div class="grid gap-6 md:grid-cols-2"> ${dataset.map((Collection) => {
    const { slug, data } = Collection;
    const { title, img, description } = data;
    if (!slug || !data) {
      console.error("Error en collection:", Collection);
      return null;
    }
    return renderTemplate`<article class="flex flex-col md:flex-row items-center md:items-start ml-6"> <a${addAttribute(`/dataset/${slug}`, "href")} class="mb-4 md:mb-0 transition hover:scale-110"> <img class="mb-4 md:mb-0 mr-0 md:mr-5 w-48 rounded"${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")}${addAttribute(renderTransition($$result2, "ayvyqfnr", "", `img-${slug}`), "data-astro-transition-scope")}> </a> <div class="flex flex-col justify-center ml-0 md:ml-5 text-center md:text-left"> <h2 class="mb-2 text-2xl font-bold leading-tight text-white"${addAttribute(renderTransition($$result2, "2t6smker", "", `title-${slug}`), "data-astro-transition-scope")}> ${title} </h2> <p class="mb-4 text-gray-300 max-w-sm"> ${description} </p> </div> </article>`;
  })} </div> </div> </section> ` })}`;
}, "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/pages/index.astro", "self");

const $$file = "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
