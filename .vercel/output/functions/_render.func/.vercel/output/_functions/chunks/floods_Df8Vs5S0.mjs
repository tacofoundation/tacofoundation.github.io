import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CSitQMZA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>The <code>floods</code> dataset provides high-quality flood extent labels across different periods derived from satellite observations. Detecting water presence during flood events aids flood risk management, emergency response, and long-term planning for flood-prone areas. Sentinel-1, Sentinel-2, and Landsat sensors are supported.</p>";

				const frontmatter = {"title":"Floods","img":"floods.png","description":".","huggingface":"https://huggingface.co/datasets/tacofoundation/floods"};
				const file = "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/content/dataset/floods.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe `floods` dataset provides high-quality flood extent labels across different periods derived from satellite observations. Detecting water presence during flood events aids flood risk management, emergency response, and long-term planning for flood-prone areas. Sentinel-1, Sentinel-2, and Landsat sensors are supported.";
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
