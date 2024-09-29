import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BaNIGOBK.mjs';
import { manifest } from './manifest_AbQ21vLN.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/dataset/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/dataset/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5ca61c5b-d488-45d9-8802-eeac74ce469f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
