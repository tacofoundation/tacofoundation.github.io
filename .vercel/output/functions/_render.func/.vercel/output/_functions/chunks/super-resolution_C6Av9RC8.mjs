import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CSitQMZA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>The <code>super-resolution</code> dataset offers curated pairs of low- and high-resolution satellite images, enabling machine learning models to upscale imagery by factors of x2 or x4. This enhanced resolution improves applications such as land use mapping, vegetation monitoring, and urban planning, leading to more precise decision-making and environmental assessments. Sentinel-2 and Landsat sensors are supported.</p>";

				const frontmatter = {"title":"Super Resolution","img":"super-resolution.png","description":".","huggingface":"https://huggingface.co/datasets/tacofoundation/super-resolution"};
				const file = "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/content/dataset/super-resolution.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe `super-resolution` dataset offers curated pairs of low- and high-resolution satellite images, enabling machine learning models to upscale imagery by factors of x2 or x4. This enhanced resolution improves applications such as land use mapping, vegetation monitoring, and urban planning, leading to more precise decision-making and environmental assessments. Sentinel-2 and Landsat sensors are supported.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
