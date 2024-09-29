/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_CSitQMZA.mjs';
import 'kleur/colors';
import { g as getCollection, r as renderEntry, $ as $$Layout } from '../../chunks/Layout_BKKEzO8a.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const dataset = await getCollection("dataset");
  console.log("Dataset en getStaticPaths:", dataset);
  return dataset.map((collection) => ({
    params: { id: collection.slug }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const dataset = await getCollection("dataset");
  const Collection = dataset.find((collection) => collection.slug === id);
  if (!Collection) {
    throw new Error("Collection no est\xE1 definida");
  }
  const { slug, data } = Collection;
  if (!data) {
    throw new Error("Data no est\xE1 definida en la colecci\xF3n");
  }
  const { title, img, description, huggingface } = data;
  const { Content } = await renderEntry(Collection);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="hover:underline opacity-70 mb-4">← Back to Previous</a> <div class="flex flex-col md:flex-row gap-12"> <aside class="flex flex-col items-center gap-4 order-1 md:order-none"> <img class="rounded w-72 h-auto"${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")}${addAttribute(renderTransition($$result2, "xbqzl4fl", "", `img-${slug}`), "data-astro-transition-scope")}> <div class="flex flex-col items-start gap-3 mt-2"> <!-- Hugging Face --> <a${addAttribute(huggingface, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2"> <img src="/hf-logo.png" alt="Hugging Face" class="w-8 h-8"> <span><b>Hugging Face</b></span> </a> </div> </aside> <main class="max-w-3xl order-2 md:order-none"> <h1 class="text-5xl font-bold mb-4"${addAttribute(renderTransition($$result2, "4drtjciu", "", `title-${slug}`), "data-astro-transition-scope")}>${title}</h1> <div class="prose prose-invert prose-lg"> ${renderComponent($$result2, "Content", Content, {})} </div> </main> </div> ` })}`;
}, "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/pages/dataset/[id].astro", "self");

const $$file = "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/pages/dataset/[id].astro";
const $$url = "/dataset/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
