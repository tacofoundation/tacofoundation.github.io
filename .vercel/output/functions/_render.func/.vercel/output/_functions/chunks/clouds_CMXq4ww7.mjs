import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CSitQMZA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>The <code>clouds</code> dataset offers high-quality human-labeled cloud masks from satellite imagery, which is crucial for training models in cloud detection and removal. It can also enhance model performance in atmospheric correction tasks. The dataset supports Sentinel-2 and Landsat sensors.</p>";

				const frontmatter = {"title":"Clouds","img":"clouds.png","description":".","huggingface":"https://huggingface.co/datasets/tacofoundation/clouds"};
				const file = "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/content/dataset/clouds.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe `clouds` dataset offers high-quality human-labeled cloud masks from satellite imagery, which is crucial for training models in cloud detection and removal. It can also enhance model performance in atmospheric correction tasks. The dataset supports Sentinel-2 and Landsat sensors.\r\n";
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
