import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CSitQMZA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>The <code>methane</code> dataset identifies methane concentrations from large emitters, such as oil and gas facilities, landfills, and agricultural sites, using satellite observations. With methane leak human-interpretation labeling, it can assist in training machine learning models to detect methane emissions automatically, crucial for reducing greenhouse gas emissions and assessing climate impact mitigation efforts. Sentinel-2, Landsat, PRISMA, and EnMAP sensors are supported.</p>";

				const frontmatter = {"title":"Methane","img":"methane.png","description":".","huggingface":"https://huggingface.co/datasets/tacofoundation/methane"};
				const file = "C:/Users/Ingrid/OneDrive/Escritorio/tacofoundation/src/content/dataset/methane.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThe `methane` dataset identifies methane concentrations from large emitters, such as oil and gas facilities, landfills, and agricultural sites, using satellite observations. With methane leak human-interpretation labeling, it can assist in training machine learning models to detect methane emissions automatically, crucial for reducing greenhouse gas emissions and assessing climate impact mitigation efforts. Sentinel-2, Landsat, PRISMA, and EnMAP sensors are supported.";
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
