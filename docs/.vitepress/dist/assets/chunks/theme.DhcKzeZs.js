import{d as P,c as d,r as f,n as V,o as l,a as fe,t as F,b as A,w as h,T as wt,e as k,_ as x,u as ka,i as Pa,f as $a,g as At,h as L,j as p,k as u,l as de,m as ot,p as E,q as J,s as Be,v as le,x as Lt,y as xt,z as Sa,A as wa,F as z,B as R,C as he,D as wn,E as He,G as w,H as K,I as An,J as je,K as oe,L as Re,M as Aa,N as Ln,O as La,P as xn,Q as In,R as Ue,S as xa,U as Cn,V as Mn,W as Ia,X as Ca,Y as Ma,Z as Na,$ as Ta,a0 as $e}from"./framework.BjlC_BXf.js";const Oa=P({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(e,n)=>(l(),d("span",{class:V(["VPBadge",e.type])},[f(e.$slots,"default",{},()=>[fe(F(e.text),1)])],2))}}),Ea={key:0,class:"VPBackdrop"},Va=P({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(e,n)=>(l(),A(wt,{name:"fade"},{default:h(()=>[e.show?(l(),d("div",Ea)):k("",!0)]),_:1}))}}),Fa=x(Va,[["__scopeId","data-v-c79a1216"]]),M=ka;function Da(t,e){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(t,e):(t(),(a=!0)&&setTimeout(()=>a=!1,e))}}function st(t){return t.startsWith("/")?t:`/${t}`}function It(t){const{pathname:e,search:n,hash:a,protocol:o}=new URL(t,"http://a.com");if(Pa(t)||t.startsWith("#")||!o.startsWith("http")||!$a(e))return t;const{site:s}=M(),r=e.endsWith("/")||e.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,s.value.cleanUrls?"":".html")}${n}${a}`);return At(r)}function Ae({correspondingLink:t=!1}={}){const{site:e,localeIndex:n,page:a,theme:o,hash:s}=M(),r=L(()=>{var c,m;return{label:(c=e.value.locales[n.value])==null?void 0:c.label,link:((m=e.value.locales[n.value])==null?void 0:m.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:L(()=>Object.entries(e.value.locales).flatMap(([c,m])=>r.value.label===m.label?[]:{text:m.label,link:za(m.link||(c==="root"?"/":`/${c}/`),o.value.i18nRouting!==!1&&t,a.value.relativePath.slice(r.value.link.length-1),!e.value.cleanUrls)+s.value})),currentLang:r}}function za(t,e,n,a){return e?t.replace(/\/$/,"")+st(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,a?".html":"")):t}const Ba={class:"NotFound"},Ha={class:"code"},ja={class:"title"},Ra={class:"quote"},Ua={class:"action"},Ga=["href","aria-label"],Wa=P({__name:"NotFound",setup(t){const{theme:e}=M(),{currentLang:n}=Ae();return(a,o)=>{var s,r,i,c,m;return l(),d("div",Ba,[p("p",Ha,F(((s=u(e).notFound)==null?void 0:s.code)??"404"),1),p("h1",ja,F(((r=u(e).notFound)==null?void 0:r.title)??"PAGE NOT FOUND"),1),o[0]||(o[0]=p("div",{class:"divider"},null,-1)),p("blockquote",Ra,F(((i=u(e).notFound)==null?void 0:i.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),p("div",Ua,[p("a",{class:"link",href:u(At)(u(n).link),"aria-label":((c=u(e).notFound)==null?void 0:c.linkLabel)??"go to home"},F(((m=u(e).notFound)==null?void 0:m.linkText)??"Take me home"),9,Ga)])])}}}),Ya=x(Wa,[["__scopeId","data-v-d6be1790"]]);function Nn(t,e){if(Array.isArray(t))return Te(t);if(t==null)return[];e=st(e);const n=Object.keys(t).sort((o,s)=>s.split("/").length-o.split("/").length).find(o=>e.startsWith(st(o))),a=n?t[n]:[];return Array.isArray(a)?Te(a):Te(a.items,a.base)}function qa(t){const e=[];let n=0;for(const a in t){const o=t[a];if(o.items){n=e.push(o);continue}e[n]||e.push({items:[]}),e[n].items.push(o)}return e}function Ka(t){const e=[];function n(a){for(const o of a)o.text&&o.link&&e.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&n(o.items)}return n(t),e}function rt(t,e){return Array.isArray(e)?e.some(n=>rt(t,n)):de(t,e.link)?!0:e.items?rt(t,e.items):!1}function Te(t,e){return[...t].map(n=>{const a={...n},o=a.base||e;return o&&a.link&&(a.link=o+a.link),a.items&&(a.items=Te(a.items,o)),a})}function te(){const{frontmatter:t,page:e,theme:n}=M(),a=ot("(min-width: 960px)"),o=E(!1),s=L(()=>{const N=n.value.sidebar,I=e.value.relativePath;return N?Nn(N,I):[]}),r=E(s.value);J(s,(N,I)=>{JSON.stringify(N)!==JSON.stringify(I)&&(r.value=s.value)});const i=L(()=>t.value.sidebar!==!1&&r.value.length>0&&t.value.layout!=="home"),c=L(()=>m?t.value.aside==null?n.value.aside==="left":t.value.aside==="left":!1),m=L(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:n.value.aside!==!1),g=L(()=>i.value&&a.value),b=L(()=>i.value?qa(r.value):[]);function y(){o.value=!0}function C(){o.value=!1}function T(){o.value?C():y()}return{isOpen:o,sidebar:r,sidebarGroups:b,hasSidebar:i,hasAside:m,leftAside:c,isSidebarEnabled:g,open:y,close:C,toggle:T}}function Xa(t,e){let n;Be(()=>{n=t.value?document.activeElement:void 0}),le(()=>{window.addEventListener("keyup",a)}),Lt(()=>{window.removeEventListener("keyup",a)});function a(o){o.key==="Escape"&&t.value&&(e(),n==null||n.focus())}}function Ja(t){const{page:e,hash:n}=M(),a=E(!1),o=L(()=>t.value.collapsed!=null),s=L(()=>!!t.value.link),r=E(!1),i=()=>{r.value=de(e.value.relativePath,t.value.link)};J([e,t,n],i),le(i);const c=L(()=>r.value?!0:t.value.items?rt(e.value.relativePath,t.value.items):!1),m=L(()=>!!(t.value.items&&t.value.items.length));Be(()=>{a.value=!!(o.value&&t.value.collapsed)}),xt(()=>{(r.value||c.value)&&(a.value=!1)});function g(){o.value&&(a.value=!a.value)}return{collapsed:a,collapsible:o,isLink:s,isActiveLink:r,hasActiveLink:c,hasChildren:m,toggle:g}}function Za(){const{hasSidebar:t}=te(),e=ot("(min-width: 960px)"),n=ot("(min-width: 1280px)");return{isAsideEnabled:L(()=>!n.value&&!e.value?!1:t.value?n.value:e.value)}}const Qa=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,it=[];function Tn(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function Ct(t){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const a=Number(n.tagName[1]);return{element:n,title:eo(n),link:"#"+n.id,level:a}});return to(e,t)}function eo(t){let e="";for(const n of t.childNodes)if(n.nodeType===1){if(Qa.test(n.className))continue;e+=n.textContent}else n.nodeType===3&&(e+=n.textContent);return e.trim()}function to(t,e){if(e===!1)return[];const n=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[a,o]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return oo(t,a,o)}function no(t,e){const{isAsideEnabled:n}=Za(),a=Da(s,100);let o=null;le(()=>{requestAnimationFrame(s),window.addEventListener("scroll",a)}),Sa(()=>{r(location.hash)}),Lt(()=>{window.removeEventListener("scroll",a)});function s(){if(!n.value)return;const i=window.scrollY,c=window.innerHeight,m=document.body.offsetHeight,g=Math.abs(i+c-m)<1,b=it.map(({element:C,link:T})=>({link:T,top:ao(C)})).filter(({top:C})=>!Number.isNaN(C)).sort((C,T)=>C.top-T.top);if(!b.length){r(null);return}if(i<1){r(null);return}if(g){r(b[b.length-1].link);return}let y=null;for(const{link:C,top:T}of b){if(T>i+wa()+4)break;y=C}r(y)}function r(i){o&&o.classList.remove("active"),i==null?o=null:o=t.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);const c=o;c?(c.classList.add("active"),e.value.style.top=c.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function ao(t){let e=0;for(;t!==document.body;){if(t===null)return NaN;e+=t.offsetTop,t=t.offsetParent}return e}function oo(t,e,n){it.length=0;const a=[],o=[];return t.forEach(s=>{const r={...s,children:[]};let i=o[o.length-1];for(;i&&i.level>=r.level;)o.pop(),i=o[o.length-1];if(r.element.classList.contains("ignore-header")||i&&"shouldIgnore"in i){o.push({level:r.level,shouldIgnore:!0});return}r.level>n||r.level<e||(it.push({element:r.element,link:r.link}),i?i.children.push(r):a.push(r),o.push(r))}),a}const so=["href","title"],ro=P({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function e({target:n}){const a=n.href.split("#")[1],o=document.getElementById(decodeURIComponent(a));o==null||o.focus({preventScroll:!0})}return(n,a)=>{const o=he("VPDocOutlineItem",!0);return l(),d("ul",{class:V(["VPDocOutlineItem",n.root?"root":"nested"])},[(l(!0),d(z,null,R(n.headers,({children:s,link:r,title:i})=>(l(),d("li",null,[p("a",{class:"outline-link",href:r,onClick:e,title:i},F(i),9,so),s!=null&&s.length?(l(),A(o,{key:0,headers:s},null,8,["headers"])):k("",!0)]))),256))],2)}}}),On=x(ro,[["__scopeId","data-v-b933a997"]]),io={class:"content"},lo={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},co=P({__name:"VPDocAsideOutline",setup(t){const{frontmatter:e,theme:n}=M(),a=wn([]);He(()=>{a.value=Ct(e.value.outline??n.value.outline)});const o=E(),s=E();return no(o,s),(r,i)=>(l(),d("nav",{"aria-labelledby":"doc-outline-aria-label",class:V(["VPDocAsideOutline",{"has-outline":a.value.length>0}]),ref_key:"container",ref:o},[p("div",io,[p("div",{class:"outline-marker",ref_key:"marker",ref:s},null,512),p("div",lo,F(u(Tn)(u(n))),1),w(On,{headers:a.value,root:!0},null,8,["headers"])])],2))}}),uo=x(co,[["__scopeId","data-v-a5bbad30"]]),fo={class:"VPDocAsideCarbonAds"},mo=P({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const e=()=>null;return(n,a)=>(l(),d("div",fo,[w(u(e),{"carbon-ads":n.carbonAds},null,8,["carbon-ads"])]))}}),po={class:"VPDocAside"},ho=P({__name:"VPDocAside",setup(t){const{theme:e}=M();return(n,a)=>(l(),d("div",po,[f(n.$slots,"aside-top",{},void 0,!0),f(n.$slots,"aside-outline-before",{},void 0,!0),w(uo),f(n.$slots,"aside-outline-after",{},void 0,!0),a[0]||(a[0]=p("div",{class:"spacer"},null,-1)),f(n.$slots,"aside-ads-before",{},void 0,!0),u(e).carbonAds?(l(),A(mo,{key:0,"carbon-ads":u(e).carbonAds},null,8,["carbon-ads"])):k("",!0),f(n.$slots,"aside-ads-after",{},void 0,!0),f(n.$slots,"aside-bottom",{},void 0,!0)]))}}),vo=x(ho,[["__scopeId","data-v-3f215769"]]);function go(){const{theme:t,page:e}=M();return L(()=>{const{text:n="Edit this page",pattern:a=""}=t.value.editLink||{};let o;return typeof a=="function"?o=a(e.value):o=a.replace(/:path/g,e.value.filePath),{url:o,text:n}})}function bo(){const{page:t,theme:e,frontmatter:n}=M();return L(()=>{var m,g,b,y,C,T,N,I;const a=Nn(e.value.sidebar,t.value.relativePath),o=Ka(a),s=yo(o,_=>_.link.replace(/[?#].*$/,"")),r=s.findIndex(_=>de(t.value.relativePath,_.link)),i=((m=e.value.docFooter)==null?void 0:m.prev)===!1&&!n.value.prev||n.value.prev===!1,c=((g=e.value.docFooter)==null?void 0:g.next)===!1&&!n.value.next||n.value.next===!1;return{prev:i?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((b=s[r-1])==null?void 0:b.docFooterText)??((y=s[r-1])==null?void 0:y.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((C=s[r-1])==null?void 0:C.link)},next:c?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((T=s[r+1])==null?void 0:T.docFooterText)??((N=s[r+1])==null?void 0:N.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((I=s[r+1])==null?void 0:I.link)}}})}function yo(t,e){const n=new Set;return t.filter(a=>{const o=e(a);return n.has(o)?!1:n.add(o)})}const X=P({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const e=t,n=L(()=>e.tag??(e.href?"a":"span")),a=L(()=>e.href&&An.test(e.href)||e.target==="_blank");return(o,s)=>(l(),A(K(n.value),{class:V(["VPLink",{link:o.href,"vp-external-link-icon":a.value,"no-icon":o.noIcon}]),href:o.href?u(It)(o.href):void 0,target:o.target??(a.value?"_blank":void 0),rel:o.rel??(a.value?"noreferrer":void 0)},{default:h(()=>[f(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),_o={class:"VPLastUpdated"},ko=["datetime"],Po=P({__name:"VPDocFooterLastUpdated",setup(t){const{theme:e,page:n,lang:a}=M(),o=L(()=>new Date(n.value.lastUpdated)),s=L(()=>o.value.toISOString()),r=E("");return le(()=>{Be(()=>{var i,c,m;r.value=new Intl.DateTimeFormat((c=(i=e.value.lastUpdated)==null?void 0:i.formatOptions)!=null&&c.forceLocale?a.value:void 0,((m=e.value.lastUpdated)==null?void 0:m.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(o.value)})}),(i,c)=>{var m;return l(),d("p",_o,[fe(F(((m=u(e).lastUpdated)==null?void 0:m.text)||u(e).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:s.value},F(r.value),9,ko)])}}}),$o=x(Po,[["__scopeId","data-v-e98dd255"]]),So={key:0,class:"VPDocFooter"},wo={key:0,class:"edit-info"},Ao={key:0,class:"edit-link"},Lo={key:1,class:"last-updated"},xo={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Io={class:"pager"},Co=["innerHTML"],Mo=["innerHTML"],No={class:"pager"},To=["innerHTML"],Oo=["innerHTML"],Eo=P({__name:"VPDocFooter",setup(t){const{theme:e,page:n,frontmatter:a}=M(),o=go(),s=bo(),r=L(()=>e.value.editLink&&a.value.editLink!==!1),i=L(()=>n.value.lastUpdated),c=L(()=>r.value||i.value||s.value.prev||s.value.next);return(m,g)=>{var b,y,C,T;return c.value?(l(),d("footer",So,[f(m.$slots,"doc-footer-before",{},void 0,!0),r.value||i.value?(l(),d("div",wo,[r.value?(l(),d("div",Ao,[w(X,{class:"edit-link-button",href:u(o).url,"no-icon":!0},{default:h(()=>[g[0]||(g[0]=p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),fe(" "+F(u(o).text),1)]),_:1,__:[0]},8,["href"])])):k("",!0),i.value?(l(),d("div",Lo,[w($o)])):k("",!0)])):k("",!0),(b=u(s).prev)!=null&&b.link||(y=u(s).next)!=null&&y.link?(l(),d("nav",xo,[g[1]||(g[1]=p("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),p("div",Io,[(C=u(s).prev)!=null&&C.link?(l(),A(X,{key:0,class:"pager-link prev",href:u(s).prev.link},{default:h(()=>{var N;return[p("span",{class:"desc",innerHTML:((N=u(e).docFooter)==null?void 0:N.prev)||"Previous page"},null,8,Co),p("span",{class:"title",innerHTML:u(s).prev.text},null,8,Mo)]}),_:1},8,["href"])):k("",!0)]),p("div",No,[(T=u(s).next)!=null&&T.link?(l(),A(X,{key:0,class:"pager-link next",href:u(s).next.link},{default:h(()=>{var N;return[p("span",{class:"desc",innerHTML:((N=u(e).docFooter)==null?void 0:N.next)||"Next page"},null,8,To),p("span",{class:"title",innerHTML:u(s).next.text},null,8,Oo)]}),_:1},8,["href"])):k("",!0)])])):k("",!0)])):k("",!0)}}}),Vo=x(Eo,[["__scopeId","data-v-e257564d"]]),Fo={class:"container"},Do={class:"aside-container"},zo={class:"aside-content"},Bo={class:"content"},Ho={class:"content-container"},jo={class:"main"},Ro=P({__name:"VPDoc",setup(t){const{theme:e}=M(),n=je(),{hasSidebar:a,hasAside:o,leftAside:s}=te(),r=L(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(i,c)=>{const m=he("Content");return l(),d("div",{class:V(["VPDoc",{"has-sidebar":u(a),"has-aside":u(o)}])},[f(i.$slots,"doc-top",{},void 0,!0),p("div",Fo,[u(o)?(l(),d("div",{key:0,class:V(["aside",{"left-aside":u(s)}])},[c[0]||(c[0]=p("div",{class:"aside-curtain"},null,-1)),p("div",Do,[p("div",zo,[w(vo,null,{"aside-top":h(()=>[f(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[f(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[f(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[f(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[f(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[f(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):k("",!0),p("div",Bo,[p("div",Ho,[f(i.$slots,"doc-before",{},void 0,!0),p("main",jo,[w(m,{class:V(["vp-doc",[r.value,u(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),w(Vo,null,{"doc-footer-before":h(()=>[f(i.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),f(i.$slots,"doc-after",{},void 0,!0)])])]),f(i.$slots,"doc-bottom",{},void 0,!0)],2)}}}),Uo=x(Ro,[["__scopeId","data-v-39a288b8"]]),Go=P({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const e=t,n=L(()=>e.href&&An.test(e.href)),a=L(()=>e.tag||(e.href?"a":"button"));return(o,s)=>(l(),A(K(a.value),{class:V(["VPButton",[o.size,o.theme]]),href:o.href?u(It)(o.href):void 0,target:e.target??(n.value?"_blank":void 0),rel:e.rel??(n.value?"noreferrer":void 0)},{default:h(()=>[fe(F(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),Wo=x(Go,[["__scopeId","data-v-fa7799d5"]]),Yo=["src","alt"],qo=P({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(e,n)=>{const a=he("VPImage",!0);return e.image?(l(),d(z,{key:0},[typeof e.image=="string"||"src"in e.image?(l(),d("img",oe({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:u(At)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,Yo)):(l(),d(z,{key:1},[w(a,oe({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),w(a,oe({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):k("",!0)}}}),Ve=x(qo,[["__scopeId","data-v-8426fc1a"]]),Ko={class:"container"},Xo={class:"main"},Jo={class:"heading"},Zo=["innerHTML"],Qo=["innerHTML"],es=["innerHTML"],ts={key:0,class:"actions"},ns={key:0,class:"image"},as={class:"image-container"},os=P({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const e=Re("hero-image-slot-exists");return(n,a)=>(l(),d("div",{class:V(["VPHero",{"has-image":n.image||u(e)}])},[p("div",Ko,[p("div",Xo,[f(n.$slots,"home-hero-info-before",{},void 0,!0),f(n.$slots,"home-hero-info",{},()=>[p("h1",Jo,[n.name?(l(),d("span",{key:0,innerHTML:n.name,class:"name clip"},null,8,Zo)):k("",!0),n.text?(l(),d("span",{key:1,innerHTML:n.text,class:"text"},null,8,Qo)):k("",!0)]),n.tagline?(l(),d("p",{key:0,innerHTML:n.tagline,class:"tagline"},null,8,es)):k("",!0)],!0),f(n.$slots,"home-hero-info-after",{},void 0,!0),n.actions?(l(),d("div",ts,[(l(!0),d(z,null,R(n.actions,o=>(l(),d("div",{key:o.link,class:"action"},[w(Wo,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):k("",!0),f(n.$slots,"home-hero-actions-after",{},void 0,!0)]),n.image||u(e)?(l(),d("div",ns,[p("div",as,[a[0]||(a[0]=p("div",{class:"image-bg"},null,-1)),f(n.$slots,"home-hero-image",{},()=>[n.image?(l(),A(Ve,{key:0,class:"image-src",image:n.image},null,8,["image"])):k("",!0)],!0)])])):k("",!0)])],2))}}),ss=x(os,[["__scopeId","data-v-4f9c455b"]]),rs=P({__name:"VPHomeHero",setup(t){const{frontmatter:e}=M();return(n,a)=>u(e).hero?(l(),A(ss,{key:0,class:"VPHomeHero",name:u(e).hero.name,text:u(e).hero.text,tagline:u(e).hero.tagline,image:u(e).hero.image,actions:u(e).hero.actions},{"home-hero-info-before":h(()=>[f(n.$slots,"home-hero-info-before")]),"home-hero-info":h(()=>[f(n.$slots,"home-hero-info")]),"home-hero-info-after":h(()=>[f(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":h(()=>[f(n.$slots,"home-hero-actions-after")]),"home-hero-image":h(()=>[f(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):k("",!0)}}),is={class:"box"},ls={key:0,class:"icon"},cs=["innerHTML"],us=["innerHTML"],fs=["innerHTML"],ds={key:4,class:"link-text"},ms={class:"link-text-value"},ps=P({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(e,n)=>(l(),A(X,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:h(()=>[p("article",is,[typeof e.icon=="object"&&e.icon.wrap?(l(),d("div",ls,[w(Ve,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(l(),A(Ve,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(l(),d("div",{key:2,class:"icon",innerHTML:e.icon},null,8,cs)):k("",!0),p("h2",{class:"title",innerHTML:e.title},null,8,us),e.details?(l(),d("p",{key:3,class:"details",innerHTML:e.details},null,8,fs)):k("",!0),e.linkText?(l(),d("div",ds,[p("p",ms,[fe(F(e.linkText)+" ",1),n[0]||(n[0]=p("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):k("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),hs=x(ps,[["__scopeId","data-v-a3976bdc"]]),vs={key:0,class:"VPFeatures"},gs={class:"container"},bs={class:"items"},ys=P({__name:"VPFeatures",props:{features:{}},setup(t){const e=t,n=L(()=>{const a=e.features.length;if(a){if(a===2)return"grid-2";if(a===3)return"grid-3";if(a%3===0)return"grid-6";if(a>3)return"grid-4"}else return});return(a,o)=>a.features?(l(),d("div",vs,[p("div",gs,[p("div",bs,[(l(!0),d(z,null,R(a.features,s=>(l(),d("div",{key:s.title,class:V(["item",[n.value]])},[w(hs,{icon:s.icon,title:s.title,details:s.details,link:s.link,"link-text":s.linkText,rel:s.rel,target:s.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):k("",!0)}}),_s=x(ys,[["__scopeId","data-v-a6181336"]]),ks=P({__name:"VPHomeFeatures",setup(t){const{frontmatter:e}=M();return(n,a)=>u(e).features?(l(),A(_s,{key:0,class:"VPHomeFeatures",features:u(e).features},null,8,["features"])):k("",!0)}}),Ps=P({__name:"VPHomeContent",setup(t){const{width:e}=Aa({initialWidth:0,includeScrollbar:!1});return(n,a)=>(l(),d("div",{class:"vp-doc container",style:Ln(u(e)?{"--vp-offset":`calc(50% - ${u(e)/2}px)`}:{})},[f(n.$slots,"default",{},void 0,!0)],4))}}),$s=x(Ps,[["__scopeId","data-v-8e2d4988"]]),Ss=P({__name:"VPHome",setup(t){const{frontmatter:e,theme:n}=M();return(a,o)=>{const s=he("Content");return l(),d("div",{class:V(["VPHome",{"external-link-icon-enabled":u(n).externalLinkIcon}])},[f(a.$slots,"home-hero-before",{},void 0,!0),w(rs,null,{"home-hero-info-before":h(()=>[f(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[f(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[f(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[f(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[f(a.$slots,"home-hero-image",{},void 0,!0)]),_:3}),f(a.$slots,"home-hero-after",{},void 0,!0),f(a.$slots,"home-features-before",{},void 0,!0),w(ks),f(a.$slots,"home-features-after",{},void 0,!0),u(e).markdownStyles!==!1?(l(),A($s,{key:0},{default:h(()=>[w(s)]),_:1})):(l(),A(s,{key:1}))],2)}}}),ws=x(Ss,[["__scopeId","data-v-8b561e3d"]]),As={},Ls={class:"VPPage"};function xs(t,e){const n=he("Content");return l(),d("div",Ls,[f(t.$slots,"page-top"),w(n),f(t.$slots,"page-bottom")])}const Is=x(As,[["render",xs]]),Cs=P({__name:"VPContent",setup(t){const{page:e,frontmatter:n}=M(),{hasSidebar:a}=te();return(o,s)=>(l(),d("div",{class:V(["VPContent",{"has-sidebar":u(a),"is-home":u(n).layout==="home"}]),id:"VPContent"},[u(e).isNotFound?f(o.$slots,"not-found",{key:0},()=>[w(Ya)],!0):u(n).layout==="page"?(l(),A(Is,{key:1},{"page-top":h(()=>[f(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[f(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):u(n).layout==="home"?(l(),A(ws,{key:2},{"home-hero-before":h(()=>[f(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[f(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[f(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[f(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[f(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[f(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[f(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[f(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[f(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):u(n).layout&&u(n).layout!=="doc"?(l(),A(K(u(n).layout),{key:3})):(l(),A(Uo,{key:4},{"doc-top":h(()=>[f(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[f(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":h(()=>[f(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[f(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[f(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":h(()=>[f(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":h(()=>[f(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[f(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[f(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[f(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":h(()=>[f(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Ms=x(Cs,[["__scopeId","data-v-1428d186"]]),Ns={class:"container"},Ts=["innerHTML"],Os=["innerHTML"],Es=P({__name:"VPFooter",setup(t){const{theme:e,frontmatter:n}=M(),{hasSidebar:a}=te();return(o,s)=>u(e).footer&&u(n).footer!==!1?(l(),d("footer",{key:0,class:V(["VPFooter",{"has-sidebar":u(a)}])},[p("div",Ns,[u(e).footer.message?(l(),d("p",{key:0,class:"message",innerHTML:u(e).footer.message},null,8,Ts)):k("",!0),u(e).footer.copyright?(l(),d("p",{key:1,class:"copyright",innerHTML:u(e).footer.copyright},null,8,Os)):k("",!0)])],2)):k("",!0)}}),Vs=x(Es,[["__scopeId","data-v-e315a0ad"]]);function Fs(){const{theme:t,frontmatter:e}=M(),n=wn([]),a=L(()=>n.value.length>0);return He(()=>{n.value=Ct(e.value.outline??t.value.outline)}),{headers:n,hasLocalNav:a}}const Ds={class:"menu-text"},zs={class:"header"},Bs={class:"outline"},Hs=P({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const e=t,{theme:n}=M(),a=E(!1),o=E(0),s=E(),r=E();function i(b){var y;(y=s.value)!=null&&y.contains(b.target)||(a.value=!1)}J(a,b=>{if(b){document.addEventListener("click",i);return}document.removeEventListener("click",i)}),La("Escape",()=>{a.value=!1}),He(()=>{a.value=!1});function c(){a.value=!a.value,o.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function m(b){b.target.classList.contains("outline-link")&&(r.value&&(r.value.style.transition="none"),xn(()=>{a.value=!1}))}function g(){a.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(b,y)=>(l(),d("div",{class:"VPLocalNavOutlineDropdown",style:Ln({"--vp-vh":o.value+"px"}),ref_key:"main",ref:s},[b.headers.length>0?(l(),d("button",{key:0,onClick:c,class:V({open:a.value})},[p("span",Ds,F(u(Tn)(u(n))),1),y[0]||(y[0]=p("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(l(),d("button",{key:1,onClick:g},F(u(n).returnToTopLabel||"Return to top"),1)),w(wt,{name:"flyout"},{default:h(()=>[a.value?(l(),d("div",{key:0,ref_key:"items",ref:r,class:"items",onClick:m},[p("div",zs,[p("a",{class:"top-link",href:"#",onClick:g},F(u(n).returnToTopLabel||"Return to top"),1)]),p("div",Bs,[w(On,{headers:b.headers},null,8,["headers"])])],512)):k("",!0)]),_:1})],4))}}),js=x(Hs,[["__scopeId","data-v-8a42e2b4"]]),Rs={class:"container"},Us=["aria-expanded"],Gs={class:"menu-text"},Ws=P({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:e,frontmatter:n}=M(),{hasSidebar:a}=te(),{headers:o}=Fs(),{y:s}=In(),r=E(0);le(()=>{r.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),He(()=>{o.value=Ct(n.value.outline??e.value.outline)});const i=L(()=>o.value.length===0),c=L(()=>i.value&&!a.value),m=L(()=>({VPLocalNav:!0,"has-sidebar":a.value,empty:i.value,fixed:c.value}));return(g,b)=>u(n).layout!=="home"&&(!c.value||u(s)>=r.value)?(l(),d("div",{key:0,class:V(m.value)},[p("div",Rs,[u(a)?(l(),d("button",{key:0,class:"menu","aria-expanded":g.open,"aria-controls":"VPSidebarNav",onClick:b[0]||(b[0]=y=>g.$emit("open-menu"))},[b[1]||(b[1]=p("span",{class:"vpi-align-left menu-icon"},null,-1)),p("span",Gs,F(u(e).sidebarMenuLabel||"Menu"),1)],8,Us)):k("",!0),w(js,{headers:u(o),navHeight:r.value},null,8,["headers","navHeight"])])],2)):k("",!0)}}),Ys=x(Ws,[["__scopeId","data-v-a6f0e41e"]]);function qs(){const t=E(!1);function e(){t.value=!0,window.addEventListener("resize",o)}function n(){t.value=!1,window.removeEventListener("resize",o)}function a(){t.value?n():e()}function o(){window.outerWidth>=768&&n()}const s=je();return J(()=>s.path,n),{isScreenOpen:t,openScreen:e,closeScreen:n,toggleScreen:a}}const Ks={},Xs={class:"VPSwitch",type:"button",role:"switch"},Js={class:"check"},Zs={key:0,class:"icon"};function Qs(t,e){return l(),d("button",Xs,[p("span",Js,[t.$slots.default?(l(),d("span",Zs,[f(t.$slots,"default",{},void 0,!0)])):k("",!0)])])}const er=x(Ks,[["render",Qs],["__scopeId","data-v-1d5665e3"]]),tr=P({__name:"VPSwitchAppearance",setup(t){const{isDark:e,theme:n}=M(),a=Re("toggle-appearance",()=>{e.value=!e.value}),o=E("");return xt(()=>{o.value=e.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(s,r)=>(l(),A(er,{title:o.value,class:"VPSwitchAppearance","aria-checked":u(e),onClick:u(a)},{default:h(()=>r[0]||(r[0]=[p("span",{class:"vpi-sun sun"},null,-1),p("span",{class:"vpi-moon moon"},null,-1)])),_:1,__:[0]},8,["title","aria-checked","onClick"]))}}),Mt=x(tr,[["__scopeId","data-v-5337faa4"]]),nr={key:0,class:"VPNavBarAppearance"},ar=P({__name:"VPNavBarAppearance",setup(t){const{site:e}=M();return(n,a)=>u(e).appearance&&u(e).appearance!=="force-dark"&&u(e).appearance!=="force-auto"?(l(),d("div",nr,[w(Mt)])):k("",!0)}}),or=x(ar,[["__scopeId","data-v-6c893767"]]),Nt=E();let En=!1,Je=0;function sr(t){const e=E(!1);if(Ue){!En&&rr(),Je++;const n=J(Nt,a=>{var o,s,r;a===t.el.value||(o=t.el.value)!=null&&o.contains(a)?(e.value=!0,(s=t.onFocus)==null||s.call(t)):(e.value=!1,(r=t.onBlur)==null||r.call(t))});Lt(()=>{n(),Je--,Je||ir()})}return xa(e)}function rr(){document.addEventListener("focusin",Vn),En=!0,Nt.value=document.activeElement}function ir(){document.removeEventListener("focusin",Vn)}function Vn(){Nt.value=document.activeElement}const lr={class:"VPMenuLink"},cr=["innerHTML"],ur=P({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:e}=M();return(n,a)=>(l(),d("div",lr,[w(X,{class:V({active:u(de)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon},{default:h(()=>[p("span",{innerHTML:n.item.text},null,8,cr)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),Ge=x(ur,[["__scopeId","data-v-35975db6"]]),fr={class:"VPMenuGroup"},dr={key:0,class:"title"},mr=P({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(e,n)=>(l(),d("div",fr,[e.text?(l(),d("p",dr,F(e.text),1)):k("",!0),(l(!0),d(z,null,R(e.items,a=>(l(),d(z,null,["link"in a?(l(),A(Ge,{key:0,item:a},null,8,["item"])):k("",!0)],64))),256))]))}}),pr=x(mr,[["__scopeId","data-v-69e747b5"]]),hr={class:"VPMenu"},vr={key:0,class:"items"},gr=P({__name:"VPMenu",props:{items:{}},setup(t){return(e,n)=>(l(),d("div",hr,[e.items?(l(),d("div",vr,[(l(!0),d(z,null,R(e.items,a=>(l(),d(z,{key:JSON.stringify(a)},["link"in a?(l(),A(Ge,{key:0,item:a},null,8,["item"])):"component"in a?(l(),A(K(a.component),oe({key:1,ref_for:!0},a.props),null,16)):(l(),A(pr,{key:2,text:a.text,items:a.items},null,8,["text","items"]))],64))),128))])):k("",!0),f(e.$slots,"default",{},void 0,!0)]))}}),br=x(gr,[["__scopeId","data-v-b98bc113"]]),yr=["aria-expanded","aria-label"],_r={key:0,class:"text"},kr=["innerHTML"],Pr={key:1,class:"vpi-more-horizontal icon"},$r={class:"menu"},Sr=P({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const e=E(!1),n=E();sr({el:n,onBlur:a});function a(){e.value=!1}return(o,s)=>(l(),d("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:s[1]||(s[1]=r=>e.value=!0),onMouseleave:s[2]||(s[2]=r=>e.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":o.label,onClick:s[0]||(s[0]=r=>e.value=!e.value)},[o.button||o.icon?(l(),d("span",_r,[o.icon?(l(),d("span",{key:0,class:V([o.icon,"option-icon"])},null,2)):k("",!0),o.button?(l(),d("span",{key:1,innerHTML:o.button},null,8,kr)):k("",!0),s[3]||(s[3]=p("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(l(),d("span",Pr))],8,yr),p("div",$r,[w(br,{items:o.items},{default:h(()=>[f(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Tt=x(Sr,[["__scopeId","data-v-cf11d7a2"]]),wr=["href","aria-label","innerHTML"],Ar=P({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const e=t,n=E();le(async()=>{var s;await xn();const o=(s=n.value)==null?void 0:s.children[0];o instanceof HTMLElement&&o.className.startsWith("vpi-social-")&&(getComputedStyle(o).maskImage||getComputedStyle(o).webkitMaskImage)==="none"&&o.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const a=L(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(o,s)=>(l(),d("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:o.link,"aria-label":o.ariaLabel??(typeof o.icon=="string"?o.icon:""),target:"_blank",rel:"noopener",innerHTML:a.value},null,8,wr))}}),Lr=x(Ar,[["__scopeId","data-v-bd121fe5"]]),xr={class:"VPSocialLinks"},Ir=P({__name:"VPSocialLinks",props:{links:{}},setup(t){return(e,n)=>(l(),d("div",xr,[(l(!0),d(z,null,R(e.links,({link:a,icon:o,ariaLabel:s})=>(l(),A(Lr,{key:a,icon:o,link:a,ariaLabel:s},null,8,["icon","link","ariaLabel"]))),128))]))}}),Ot=x(Ir,[["__scopeId","data-v-7bc22406"]]),Cr={key:0,class:"group translations"},Mr={class:"trans-title"},Nr={key:1,class:"group"},Tr={class:"item appearance"},Or={class:"label"},Er={class:"appearance-action"},Vr={key:2,class:"group"},Fr={class:"item social-links"},Dr=P({__name:"VPNavBarExtra",setup(t){const{site:e,theme:n}=M(),{localeLinks:a,currentLang:o}=Ae({correspondingLink:!0}),s=L(()=>a.value.length&&o.value.label||e.value.appearance||n.value.socialLinks);return(r,i)=>s.value?(l(),A(Tt,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:h(()=>[u(a).length&&u(o).label?(l(),d("div",Cr,[p("p",Mr,F(u(o).label),1),(l(!0),d(z,null,R(u(a),c=>(l(),A(Ge,{key:c.link,item:c},null,8,["item"]))),128))])):k("",!0),u(e).appearance&&u(e).appearance!=="force-dark"&&u(e).appearance!=="force-auto"?(l(),d("div",Nr,[p("div",Tr,[p("p",Or,F(u(n).darkModeSwitchLabel||"Appearance"),1),p("div",Er,[w(Mt)])])])):k("",!0),u(n).socialLinks?(l(),d("div",Vr,[p("div",Fr,[w(Ot,{class:"social-links-list",links:u(n).socialLinks},null,8,["links"])])])):k("",!0)]),_:1})):k("",!0)}}),zr=x(Dr,[["__scopeId","data-v-bb2aa2f0"]]),Br=["aria-expanded"],Hr=P({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(e,n)=>(l(),d("button",{type:"button",class:V(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=a=>e.$emit("click"))},n[1]||(n[1]=[p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)]),10,Br))}}),jr=x(Hr,[["__scopeId","data-v-e5dd9c1c"]]),Rr=["innerHTML"],Ur=P({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:e}=M();return(n,a)=>(l(),A(X,{class:V({VPNavBarMenuLink:!0,active:u(de)(u(e).relativePath,n.item.activeMatch||n.item.link,!!n.item.activeMatch)}),href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,tabindex:"0"},{default:h(()=>[p("span",{innerHTML:n.item.text},null,8,Rr)]),_:1},8,["class","href","target","rel","no-icon"]))}}),Gr=x(Ur,[["__scopeId","data-v-e56f3d57"]]),Wr=P({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const e=t,{page:n}=M(),a=s=>"component"in s?!1:"link"in s?de(n.value.relativePath,s.link,!!e.item.activeMatch):s.items.some(a),o=L(()=>a(e.item));return(s,r)=>(l(),A(Tt,{class:V({VPNavBarMenuGroup:!0,active:u(de)(u(n).relativePath,s.item.activeMatch,!!s.item.activeMatch)||o.value}),button:s.item.text,items:s.item.items},null,8,["class","button","items"]))}}),Yr={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},qr=P({__name:"VPNavBarMenu",setup(t){const{theme:e}=M();return(n,a)=>u(e).nav?(l(),d("nav",Yr,[a[0]||(a[0]=p("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(l(!0),d(z,null,R(u(e).nav,o=>(l(),d(z,{key:JSON.stringify(o)},["link"in o?(l(),A(Gr,{key:0,item:o},null,8,["item"])):"component"in o?(l(),A(K(o.component),oe({key:1,ref_for:!0},o.props),null,16)):(l(),A(Wr,{key:2,item:o},null,8,["item"]))],64))),128))])):k("",!0)}}),Kr=x(qr,[["__scopeId","data-v-dc692963"]]);function Xr(t){const{localeIndex:e,theme:n}=M();function a(o){var T,N,I;const s=o.split("."),r=(T=n.value.search)==null?void 0:T.options,i=r&&typeof r=="object",c=i&&((I=(N=r.locales)==null?void 0:N[e.value])==null?void 0:I.translations)||null,m=i&&r.translations||null;let g=c,b=m,y=t;const C=s.pop();for(const _ of s){let $=null;const O=y==null?void 0:y[_];O&&($=y=O);const B=b==null?void 0:b[_];B&&($=b=B);const H=g==null?void 0:g[_];H&&($=g=H),O||(y=$),B||(b=$),H||(g=$)}return(g==null?void 0:g[C])??(b==null?void 0:b[C])??(y==null?void 0:y[C])??""}return a}const Jr=["aria-label"],Zr={class:"DocSearch-Button-Container"},Qr={class:"DocSearch-Button-Placeholder"},Wt=P({__name:"VPNavBarSearchButton",setup(t){const n=Xr({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(a,o)=>(l(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":u(n)("button.buttonAriaLabel")},[p("span",Zr,[o[0]||(o[0]=p("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),p("span",Qr,F(u(n)("button.buttonText")),1)]),o[1]||(o[1]=p("span",{class:"DocSearch-Button-Keys"},[p("kbd",{class:"DocSearch-Button-Key"}),p("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Jr))}}),ei={class:"VPNavBarSearch"},ti={id:"local-search"},ni={key:1,id:"docsearch"},ai=P({__name:"VPNavBarSearch",setup(t){const e=()=>null,n=()=>null,{theme:a}=M(),o=E(!1),s=E(!1);le(()=>{});function r(){o.value||(o.value=!0,setTimeout(i,16))}function i(){const g=new Event("keydown");g.key="k",g.metaKey=!0,window.dispatchEvent(g),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||i()},16)}const c=E(!1),m="";return(g,b)=>{var y;return l(),d("div",ei,[u(m)==="local"?(l(),d(z,{key:0},[c.value?(l(),A(u(e),{key:0,onClose:b[0]||(b[0]=C=>c.value=!1)})):k("",!0),p("div",ti,[w(Wt,{onClick:b[1]||(b[1]=C=>c.value=!0)})])],64)):u(m)==="algolia"?(l(),d(z,{key:1},[o.value?(l(),A(u(n),{key:0,algolia:((y=u(a).search)==null?void 0:y.options)??u(a).algolia,onVnodeBeforeMount:b[2]||(b[2]=C=>s.value=!0)},null,8,["algolia"])):k("",!0),s.value?k("",!0):(l(),d("div",ni,[w(Wt,{onClick:r})]))],64)):k("",!0)])}}}),oi=P({__name:"VPNavBarSocialLinks",setup(t){const{theme:e}=M();return(n,a)=>u(e).socialLinks?(l(),A(Ot,{key:0,class:"VPNavBarSocialLinks",links:u(e).socialLinks},null,8,["links"])):k("",!0)}}),si=x(oi,[["__scopeId","data-v-0394ad82"]]),ri=["href","rel","target"],ii=["innerHTML"],li={key:2},ci=P({__name:"VPNavBarTitle",setup(t){const{site:e,theme:n}=M(),{hasSidebar:a}=te(),{currentLang:o}=Ae(),s=L(()=>{var c;return typeof n.value.logoLink=="string"?n.value.logoLink:(c=n.value.logoLink)==null?void 0:c.link}),r=L(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.rel}),i=L(()=>{var c;return typeof n.value.logoLink=="string"||(c=n.value.logoLink)==null?void 0:c.target});return(c,m)=>(l(),d("div",{class:V(["VPNavBarTitle",{"has-sidebar":u(a)}])},[p("a",{class:"title",href:s.value??u(It)(u(o).link),rel:r.value,target:i.value},[f(c.$slots,"nav-bar-title-before",{},void 0,!0),u(n).logo?(l(),A(Ve,{key:0,class:"logo",image:u(n).logo},null,8,["image"])):k("",!0),u(n).siteTitle?(l(),d("span",{key:1,innerHTML:u(n).siteTitle},null,8,ii)):u(n).siteTitle===void 0?(l(),d("span",li,F(u(e).title),1)):k("",!0),f(c.$slots,"nav-bar-title-after",{},void 0,!0)],8,ri)],2))}}),ui=x(ci,[["__scopeId","data-v-1168a8e4"]]),fi={class:"items"},di={class:"title"},mi=P({__name:"VPNavBarTranslations",setup(t){const{theme:e}=M(),{localeLinks:n,currentLang:a}=Ae({correspondingLink:!0});return(o,s)=>u(n).length&&u(a).label?(l(),A(Tt,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:u(e).langMenuLabel||"Change language"},{default:h(()=>[p("div",fi,[p("p",di,F(u(a).label),1),(l(!0),d(z,null,R(u(n),r=>(l(),A(Ge,{key:r.link,item:r},null,8,["item"]))),128))])]),_:1},8,["label"])):k("",!0)}}),pi=x(mi,[["__scopeId","data-v-88af2de4"]]),hi={class:"wrapper"},vi={class:"container"},gi={class:"title"},bi={class:"content"},yi={class:"content-body"},_i=P({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const e=t,{y:n}=In(),{hasSidebar:a}=te(),{frontmatter:o}=M(),s=E({});return xt(()=>{s.value={"has-sidebar":a.value,home:o.value.layout==="home",top:n.value===0,"screen-open":e.isScreenOpen}}),(r,i)=>(l(),d("div",{class:V(["VPNavBar",s.value])},[p("div",hi,[p("div",vi,[p("div",gi,[w(ui,null,{"nav-bar-title-before":h(()=>[f(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[f(r.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",bi,[p("div",yi,[f(r.$slots,"nav-bar-content-before",{},void 0,!0),w(ai,{class:"search"}),w(Kr,{class:"menu"}),w(pi,{class:"translations"}),w(or,{class:"appearance"}),w(si,{class:"social-links"}),w(zr,{class:"extra"}),f(r.$slots,"nav-bar-content-after",{},void 0,!0),w(jr,{class:"hamburger",active:r.isScreenOpen,onClick:i[0]||(i[0]=c=>r.$emit("toggle-screen"))},null,8,["active"])])])])]),i[1]||(i[1]=p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1))],2))}}),ki=x(_i,[["__scopeId","data-v-6aa21345"]]),Pi={key:0,class:"VPNavScreenAppearance"},$i={class:"text"},Si=P({__name:"VPNavScreenAppearance",setup(t){const{site:e,theme:n}=M();return(a,o)=>u(e).appearance&&u(e).appearance!=="force-dark"&&u(e).appearance!=="force-auto"?(l(),d("div",Pi,[p("p",$i,F(u(n).darkModeSwitchLabel||"Appearance"),1),w(Mt)])):k("",!0)}}),wi=x(Si,[["__scopeId","data-v-b44890b2"]]),Ai=["innerHTML"],Li=P({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const e=Re("close-screen");return(n,a)=>(l(),A(X,{class:"VPNavScreenMenuLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:u(e)},{default:h(()=>[p("span",{innerHTML:n.item.text},null,8,Ai)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),xi=x(Li,[["__scopeId","data-v-df37e6dd"]]),Ii=["innerHTML"],Ci=P({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const e=Re("close-screen");return(n,a)=>(l(),A(X,{class:"VPNavScreenMenuGroupLink",href:n.item.link,target:n.item.target,rel:n.item.rel,"no-icon":n.item.noIcon,onClick:u(e)},{default:h(()=>[p("span",{innerHTML:n.item.text},null,8,Ii)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Fn=x(Ci,[["__scopeId","data-v-3e9c20e4"]]),Mi={class:"VPNavScreenMenuGroupSection"},Ni={key:0,class:"title"},Ti=P({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(e,n)=>(l(),d("div",Mi,[e.text?(l(),d("p",Ni,F(e.text),1)):k("",!0),(l(!0),d(z,null,R(e.items,a=>(l(),A(Fn,{key:a.text,item:a},null,8,["item"]))),128))]))}}),Oi=x(Ti,[["__scopeId","data-v-8133b170"]]),Ei=["aria-controls","aria-expanded"],Vi=["innerHTML"],Fi=["id"],Di={key:0,class:"item"},zi={key:1,class:"item"},Bi={key:2,class:"group"},Hi=P({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const e=t,n=E(!1),a=L(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(s,r)=>(l(),d("div",{class:V(["VPNavScreenMenuGroup",{open:n.value}])},[p("button",{class:"button","aria-controls":a.value,"aria-expanded":n.value,onClick:o},[p("span",{class:"button-text",innerHTML:s.text},null,8,Vi),r[0]||(r[0]=p("span",{class:"vpi-plus button-icon"},null,-1))],8,Ei),p("div",{id:a.value,class:"items"},[(l(!0),d(z,null,R(s.items,i=>(l(),d(z,{key:JSON.stringify(i)},["link"in i?(l(),d("div",Di,[w(Fn,{item:i},null,8,["item"])])):"component"in i?(l(),d("div",zi,[(l(),A(K(i.component),oe({ref_for:!0},i.props,{"screen-menu":""}),null,16))])):(l(),d("div",Bi,[w(Oi,{text:i.text,items:i.items},null,8,["text","items"])]))],64))),128))],8,Fi)],2))}}),ji=x(Hi,[["__scopeId","data-v-b9ab8c58"]]),Ri={key:0,class:"VPNavScreenMenu"},Ui=P({__name:"VPNavScreenMenu",setup(t){const{theme:e}=M();return(n,a)=>u(e).nav?(l(),d("nav",Ri,[(l(!0),d(z,null,R(u(e).nav,o=>(l(),d(z,{key:JSON.stringify(o)},["link"in o?(l(),A(xi,{key:0,item:o},null,8,["item"])):"component"in o?(l(),A(K(o.component),oe({key:1,ref_for:!0},o.props,{"screen-menu":""}),null,16)):(l(),A(ji,{key:2,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):k("",!0)}}),Gi=P({__name:"VPNavScreenSocialLinks",setup(t){const{theme:e}=M();return(n,a)=>u(e).socialLinks?(l(),A(Ot,{key:0,class:"VPNavScreenSocialLinks",links:u(e).socialLinks},null,8,["links"])):k("",!0)}}),Wi={class:"list"},Yi=P({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:e,currentLang:n}=Ae({correspondingLink:!0}),a=E(!1);function o(){a.value=!a.value}return(s,r)=>u(e).length&&u(n).label?(l(),d("div",{key:0,class:V(["VPNavScreenTranslations",{open:a.value}])},[p("button",{class:"title",onClick:o},[r[0]||(r[0]=p("span",{class:"vpi-languages icon lang"},null,-1)),fe(" "+F(u(n).label)+" ",1),r[1]||(r[1]=p("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),p("ul",Wi,[(l(!0),d(z,null,R(u(e),i=>(l(),d("li",{key:i.link,class:"item"},[w(X,{class:"link",href:i.link},{default:h(()=>[fe(F(i.text),1)]),_:2},1032,["href"])]))),128))])],2)):k("",!0)}}),qi=x(Yi,[["__scopeId","data-v-858fe1a4"]]),Ki={class:"container"},Xi=P({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const e=E(null),n=Cn(Ue?document.body:null);return(a,o)=>(l(),A(wt,{name:"fade",onEnter:o[0]||(o[0]=s=>n.value=!0),onAfterLeave:o[1]||(o[1]=s=>n.value=!1)},{default:h(()=>[a.open?(l(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[p("div",Ki,[f(a.$slots,"nav-screen-content-before",{},void 0,!0),w(Ui,{class:"menu"}),w(qi,{class:"translations"}),w(wi,{class:"appearance"}),w(Gi,{class:"social-links"}),f(a.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):k("",!0)]),_:3}))}}),Ji=x(Xi,[["__scopeId","data-v-f2779853"]]),Zi={key:0,class:"VPNav"},Qi=P({__name:"VPNav",setup(t){const{isScreenOpen:e,closeScreen:n,toggleScreen:a}=qs(),{frontmatter:o}=M(),s=L(()=>o.value.navbar!==!1);return Mn("close-screen",n),Be(()=>{Ue&&document.documentElement.classList.toggle("hide-nav",!s.value)}),(r,i)=>s.value?(l(),d("header",Zi,[w(ki,{"is-screen-open":u(e),onToggleScreen:u(a)},{"nav-bar-title-before":h(()=>[f(r.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[f(r.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[f(r.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[f(r.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),w(Ji,{open:u(e)},{"nav-screen-content-before":h(()=>[f(r.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[f(r.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):k("",!0)}}),el=x(Qi,[["__scopeId","data-v-ae24b3ad"]]),tl=["role","tabindex"],nl={key:1,class:"items"},al=P({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const e=t,{collapsed:n,collapsible:a,isLink:o,isActiveLink:s,hasActiveLink:r,hasChildren:i,toggle:c}=Ja(L(()=>e.item)),m=L(()=>i.value?"section":"div"),g=L(()=>o.value?"a":"div"),b=L(()=>i.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),y=L(()=>o.value?void 0:"button"),C=L(()=>[[`level-${e.depth}`],{collapsible:a.value},{collapsed:n.value},{"is-link":o.value},{"is-active":s.value},{"has-active":r.value}]);function T(I){"key"in I&&I.key!=="Enter"||!e.item.link&&c()}function N(){e.item.link&&c()}return(I,_)=>{const $=he("VPSidebarItem",!0);return l(),A(K(m.value),{class:V(["VPSidebarItem",C.value])},{default:h(()=>[I.item.text?(l(),d("div",oe({key:0,class:"item",role:y.value},Ia(I.item.items?{click:T,keydown:T}:{},!0),{tabindex:I.item.items&&0}),[_[1]||(_[1]=p("div",{class:"indicator"},null,-1)),I.item.link?(l(),A(X,{key:0,tag:g.value,class:"link",href:I.item.link,rel:I.item.rel,target:I.item.target},{default:h(()=>[(l(),A(K(b.value),{class:"text",innerHTML:I.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(l(),A(K(b.value),{key:1,class:"text",innerHTML:I.item.text},null,8,["innerHTML"])),I.item.collapsed!=null&&I.item.items&&I.item.items.length?(l(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:N,onKeydown:Ca(N,["enter"]),tabindex:"0"},_[0]||(_[0]=[p("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):k("",!0)],16,tl)):k("",!0),I.item.items&&I.item.items.length?(l(),d("div",nl,[I.depth<5?(l(!0),d(z,{key:0},R(I.item.items,O=>(l(),A($,{key:O.text,item:O,depth:I.depth+1},null,8,["item","depth"]))),128)):k("",!0)])):k("",!0)]),_:1},8,["class"])}}}),ol=x(al,[["__scopeId","data-v-b3fd67f8"]]),sl=P({__name:"VPSidebarGroup",props:{items:{}},setup(t){const e=E(!0);let n=null;return le(()=>{n=setTimeout(()=>{n=null,e.value=!1},300)}),Ma(()=>{n!=null&&(clearTimeout(n),n=null)}),(a,o)=>(l(!0),d(z,null,R(a.items,s=>(l(),d("div",{key:s.text,class:V(["group",{"no-transition":e.value}])},[w(ol,{item:s,depth:0},null,8,["item"])],2))),128))}}),rl=x(sl,[["__scopeId","data-v-c40bc020"]]),il={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},ll=P({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:e,hasSidebar:n}=te(),a=t,o=E(null),s=Cn(Ue?document.body:null);J([a,o],()=>{var i;a.open?(s.value=!0,(i=o.value)==null||i.focus()):s.value=!1},{immediate:!0,flush:"post"});const r=E(0);return J(e,()=>{r.value+=1},{deep:!0}),(i,c)=>u(n)?(l(),d("aside",{key:0,class:V(["VPSidebar",{open:i.open}]),ref_key:"navEl",ref:o,onClick:c[0]||(c[0]=Na(()=>{},["stop"]))},[c[2]||(c[2]=p("div",{class:"curtain"},null,-1)),p("nav",il,[c[1]||(c[1]=p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),f(i.$slots,"sidebar-nav-before",{},void 0,!0),(l(),A(rl,{items:u(e),key:r.value},null,8,["items"])),f(i.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):k("",!0)}}),cl=x(ll,[["__scopeId","data-v-319d5ca6"]]),ul=P({__name:"VPSkipLink",setup(t){const{theme:e}=M(),n=je(),a=E();J(()=>n.path,()=>a.value.focus());function o({target:s}){const r=document.getElementById(decodeURIComponent(s.hash).slice(1));if(r){const i=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",i)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",i),r.focus(),window.scrollTo(0,0)}}return(s,r)=>(l(),d(z,null,[p("span",{ref_key:"backToTop",ref:a,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:o},F(u(e).skipToContentLabel||"Skip to content"),1)],64))}}),fl=x(ul,[["__scopeId","data-v-0b0ada53"]]),dl=P({__name:"Layout",setup(t){const{isOpen:e,open:n,close:a}=te(),o=je();J(()=>o.path,a),Xa(e,a);const{frontmatter:s}=M(),r=Ta(),i=L(()=>!!r["home-hero-image"]);return Mn("hero-image-slot-exists",i),(c,m)=>{const g=he("Content");return u(s).layout!==!1?(l(),d("div",{key:0,class:V(["Layout",u(s).pageClass])},[f(c.$slots,"layout-top",{},void 0,!0),w(fl),w(Fa,{class:"backdrop",show:u(e),onClick:u(a)},null,8,["show","onClick"]),w(el,null,{"nav-bar-title-before":h(()=>[f(c.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":h(()=>[f(c.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":h(()=>[f(c.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":h(()=>[f(c.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":h(()=>[f(c.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":h(()=>[f(c.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),w(Ys,{open:u(e),onOpenMenu:u(n)},null,8,["open","onOpenMenu"]),w(cl,{open:u(e)},{"sidebar-nav-before":h(()=>[f(c.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":h(()=>[f(c.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),w(Ms,null,{"page-top":h(()=>[f(c.$slots,"page-top",{},void 0,!0)]),"page-bottom":h(()=>[f(c.$slots,"page-bottom",{},void 0,!0)]),"not-found":h(()=>[f(c.$slots,"not-found",{},void 0,!0)]),"home-hero-before":h(()=>[f(c.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":h(()=>[f(c.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":h(()=>[f(c.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":h(()=>[f(c.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":h(()=>[f(c.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":h(()=>[f(c.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":h(()=>[f(c.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":h(()=>[f(c.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":h(()=>[f(c.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":h(()=>[f(c.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":h(()=>[f(c.$slots,"doc-before",{},void 0,!0)]),"doc-after":h(()=>[f(c.$slots,"doc-after",{},void 0,!0)]),"doc-top":h(()=>[f(c.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":h(()=>[f(c.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":h(()=>[f(c.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":h(()=>[f(c.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":h(()=>[f(c.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":h(()=>[f(c.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":h(()=>[f(c.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":h(()=>[f(c.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),w(Vs),f(c.$slots,"layout-bottom",{},void 0,!0)],2)):(l(),A(g,{key:1}))}}}),ml=x(dl,[["__scopeId","data-v-5d98c3a5"]]),Yt={Layout:ml,enhanceApp:({app:t})=>{t.component("Badge",Oa)}};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pl=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),hl=t=>{const e=pl(t);return e.charAt(0).toUpperCase()+e.slice(1)},vl=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ce={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:a,iconNode:o,name:s,class:r,...i},{slots:c})=>$e("svg",{...Ce,width:t||Ce.width,height:t||Ce.height,stroke:a||Ce.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:vl("lucide",...s?[`lucide-${qt(hl(s))}-icon`,`lucide-${qt(s)}`]:["lucide-icon"]),...i},[...o.map(m=>$e(...m)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(t,e)=>(n,{slots:a})=>$e(gl,{...n,iconNode:e,name:t},a);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=U("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=U("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=U("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=U("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=U("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=U("file-x",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=U("git-branch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=U("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=U("repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=U("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=U("shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=U("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=U("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=U("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=U("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function $l(t,e,n){return(e=wl(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kt(Object(n),!0).forEach(function(a){$l(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Sl(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wl(t){var e=Sl(t,"string");return typeof e=="symbol"?e:e+""}const Xt=()=>{};let Et={},Dn={},zn=null,Bn={mark:Xt,measure:Xt};try{typeof window<"u"&&(Et=window),typeof document<"u"&&(Dn=document),typeof MutationObserver<"u"&&(zn=MutationObserver),typeof performance<"u"&&(Bn=performance)}catch{}const{userAgent:Jt=""}=Et.navigator||{},se=Et,D=Dn,Zt=zn,Me=Bn;se.document;const ne=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",Hn=~Jt.indexOf("MSIE")||~Jt.indexOf("Trident/");var Al=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ll=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,jn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},xl={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Rn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],j="classic",We="duotone",Il="sharp",Cl="sharp-duotone",Un=[j,We,Il,Cl],Ml={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Nl={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Tl=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ol={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},El=["fak","fa-kit","fakd","fa-kit-duotone"],Qt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vl=["kit"],Fl={kit:{"fa-kit":"fak"}},Dl=["fak","fakd"],zl={kit:{fak:"fa-kit"}},en={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bl=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Hl=["fak","fa-kit","fakd","fa-kit-duotone"],jl={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Rl={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ul={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},lt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Gl=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ct=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Bl,...Gl],Wl=["solid","regular","light","thin","duotone","brands"],Gn=[1,2,3,4,5,6,7,8,9,10],Yl=Gn.concat([11,12,13,14,15,16,17,18,19,20]),ql=[...Object.keys(Ul),...Wl,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ne.GROUP,Ne.SWAP_OPACITY,Ne.PRIMARY,Ne.SECONDARY].concat(Gn.map(t=>"".concat(t,"x"))).concat(Yl.map(t=>"w-".concat(t))),Kl={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Q="___FONT_AWESOME___",ut=16,Wn="fa",Yn="svg-inline--fa",me="data-fa-i2svg",ft="data-fa-pseudo-element",Xl="data-fa-pseudo-element-pending",Vt="data-prefix",Ft="data-icon",tn="fontawesome-i2svg",Jl="async",Zl=["HTML","HEAD","STYLE","SCRIPT"],qn=(()=>{try{return!0}catch{return!1}})();function Le(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[j]}})}const Kn=v({},jn);Kn[j]=v(v(v(v({},{"fa-duotone":"duotone"}),jn[j]),Qt.kit),Qt["kit-duotone"]);const Ql=Le(Kn),dt=v({},Ol);dt[j]=v(v(v(v({},{duotone:"fad"}),dt[j]),en.kit),en["kit-duotone"]);const nn=Le(dt),mt=v({},lt);mt[j]=v(v({},mt[j]),zl.kit);const Dt=Le(mt),pt=v({},Rl);pt[j]=v(v({},pt[j]),Fl.kit);Le(pt);const ec=Al,Xn="fa-layers-text",tc=Ll,nc=v({},Ml);Le(nc);const ac=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ze=xl,oc=[...Vl,...ql],ke=se.FontAwesomeConfig||{};function sc(t){var e=D.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}D&&typeof D.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const o=rc(sc(n));o!=null&&(ke[a]=o)});const Jn={styleDefault:"solid",familyDefault:j,cssPrefix:Wn,replacementClass:Yn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ke.familyPrefix&&(ke.cssPrefix=ke.familyPrefix);const be=v(v({},Jn),ke);be.autoReplaceSvg||(be.observeMutations=!1);const S={};Object.keys(Jn).forEach(t=>{Object.defineProperty(S,t,{enumerable:!0,set:function(e){be[t]=e,Pe.forEach(n=>n(S))},get:function(){return be[t]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){be.cssPrefix=t,Pe.forEach(e=>e(S))},get:function(){return be.cssPrefix}});se.FontAwesomeConfig=S;const Pe=[];function ic(t){return Pe.push(t),()=>{Pe.splice(Pe.indexOf(t),1)}}const ae=ut,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lc(t){if(!t||!ne)return;const e=D.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=D.head.childNodes;let a=null;for(let o=n.length-1;o>-1;o--){const s=n[o],r=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(a=s)}return D.head.insertBefore(e,a),t}const cc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Se(){let t=12,e="";for(;t-- >0;)e+=cc[Math.random()*62|0];return e}function ye(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zt(t){return t.classList?ye(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Zn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Zn(t[n]),'" '),"").trim()}function Ye(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Bt(t){return t.size!==Y.size||t.x!==Y.x||t.y!==Y.y||t.rotate!==Y.rotate||t.flipX||t.flipY}function fc(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const o={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(r," ").concat(i)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:c,path:m}}function dc(t){let{transform:e,width:n=ut,height:a=ut,startCentered:o=!1}=t,s="";return o&&Hn?s+="translate(".concat(e.x/ae-n/2,"em, ").concat(e.y/ae-a/2,"em) "):o?s+="translate(calc(-50% + ".concat(e.x/ae,"em), calc(-50% + ").concat(e.y/ae,"em)) "):s+="translate(".concat(e.x/ae,"em, ").concat(e.y/ae,"em) "),s+="scale(".concat(e.size/ae*(e.flipX?-1:1),", ").concat(e.size/ae*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var mc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Qn(){const t=Wn,e=Yn,n=S.cssPrefix,a=S.replacementClass;let o=mc;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),r=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");o=o.replace(s,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(i,".".concat(a))}return o}let an=!1;function Qe(){S.autoAddCss&&!an&&(lc(Qn()),an=!0)}var pc={mixout(){return{dom:{css:Qn,insertCss:Qe}}},hooks(){return{beforeDOMElementCreation(){Qe()},beforeI2svg(){Qe()}}}};const ee=se||{};ee[Q]||(ee[Q]={});ee[Q].styles||(ee[Q].styles={});ee[Q].hooks||(ee[Q].hooks={});ee[Q].shims||(ee[Q].shims=[]);var q=ee[Q];const ea=[],ta=function(){D.removeEventListener("DOMContentLoaded",ta),Fe=1,ea.map(t=>t())};let Fe=!1;ne&&(Fe=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Fe||D.addEventListener("DOMContentLoaded",ta));function hc(t){ne&&(Fe?setTimeout(t,0):ea.push(t))}function xe(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Zn(t):"<".concat(e," ").concat(uc(n),">").concat(a.map(xe).join(""),"</").concat(e,">")}function on(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var et=function(e,n,a,o){var s=Object.keys(e),r=s.length,i=n,c,m,g;for(a===void 0?(c=1,g=e[s[0]]):(c=0,g=a);c<r;c++)m=s[c],g=i(g,e[m],m,e);return g};function vc(t){const e=[];let n=0;const a=t.length;for(;n<a;){const o=t.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((o&1023)<<10)+(s&1023)+65536):(e.push(o),n--)}else e.push(o)}return e}function ht(t){const e=vc(t);return e.length===1?e[0].toString(16):null}function gc(t,e){const n=t.length;let a=t.charCodeAt(e),o;return a>=55296&&a<=56319&&n>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function sn(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function vt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,o=sn(e);typeof q.hooks.addPack=="function"&&!a?q.hooks.addPack(t,sn(e)):q.styles[t]=v(v({},q.styles[t]||{}),o),t==="fas"&&vt("fa",e)}const{styles:we,shims:bc}=q,na=Object.keys(Dt),yc=na.reduce((t,e)=>(t[e]=Object.keys(Dt[e]),t),{});let Ht=null,aa={},oa={},sa={},ra={},ia={};function _c(t){return~oc.indexOf(t)}function kc(t,e){const n=e.split("-"),a=n[0],o=n.slice(1).join("-");return a===t&&o!==""&&!_c(o)?o:null}const la=()=>{const t=a=>et(we,(o,s,r)=>(o[r]=et(s,a,{}),o),{});aa=t((a,o,s)=>(o[3]&&(a[o[3]]=s),o[2]&&o[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=s}),a)),oa=t((a,o,s)=>(a[s]=s,o[2]&&o[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=s}),a)),ia=t((a,o,s)=>{const r=o[2];return a[s]=s,r.forEach(i=>{a[i]=s}),a});const e="far"in we||S.autoFetchSvg,n=et(bc,(a,o)=>{const s=o[0];let r=o[1];const i=o[2];return r==="far"&&!e&&(r="fas"),typeof s=="string"&&(a.names[s]={prefix:r,iconName:i}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:r,iconName:i}),a},{names:{},unicodes:{}});sa=n.names,ra=n.unicodes,Ht=qe(S.styleDefault,{family:S.familyDefault})};ic(t=>{Ht=qe(t.styleDefault,{family:S.familyDefault})});la();function jt(t,e){return(aa[t]||{})[e]}function Pc(t,e){return(oa[t]||{})[e]}function ue(t,e){return(ia[t]||{})[e]}function ca(t){return sa[t]||{prefix:null,iconName:null}}function $c(t){const e=ra[t],n=jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Ht}const ua=()=>({prefix:null,iconName:null,rest:[]});function Sc(t){let e=j;const n=na.reduce((a,o)=>(a[o]="".concat(S.cssPrefix,"-").concat(o),a),{});return Un.forEach(a=>{(t.includes(n[a])||t.some(o=>yc[a].includes(o)))&&(e=a)}),e}function qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=j}=e,a=Ql[n][t];if(n===We&&!t)return"fad";const o=nn[n][t]||nn[n][a],s=t in q.styles?t:null;return o||s||null}function wc(t){let e=[],n=null;return t.forEach(a=>{const o=kc(S.cssPrefix,a);o?n=o:a&&e.push(a)}),{iconName:n,rest:e}}function rn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const o=ct.concat(Hl),s=rn(t.filter(b=>o.includes(b))),r=rn(t.filter(b=>!ct.includes(b))),i=s.filter(b=>(a=b,!Rn.includes(b))),[c=null]=i,m=Sc(s),g=v(v({},wc(r)),{},{prefix:qe(c,{family:m})});return v(v(v({},g),Ic({values:t,family:m,styles:we,config:S,canonical:g,givenPrefix:a})),Ac(n,a,g))}function Ac(t,e,n){let{prefix:a,iconName:o}=n;if(t||!a||!o)return{prefix:a,iconName:o};const s=e==="fa"?ca(o):{},r=ue(a,o);return o=s.iconName||r||o,a=s.prefix||a,a==="far"&&!we.far&&we.fas&&!S.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}const Lc=Un.filter(t=>t!==j||t!==We),xc=Object.keys(lt).filter(t=>t!==j).map(t=>Object.keys(lt[t])).flat();function Ic(t){const{values:e,family:n,canonical:a,givenPrefix:o="",styles:s={},config:r={}}=t,i=n===We,c=e.includes("fa-duotone")||e.includes("fad"),m=r.familyDefault==="duotone",g=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(c||m||g)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Lc.includes(n)&&(Object.keys(s).find(y=>xc.includes(y))||r.autoFetchSvg)){const y=Tl.get(n).defaultShortPrefixId;a.prefix=y,a.iconName=ue(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=re()||"fas"),a}class Cc{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(s=>{this.definitions[s]=v(v({},this.definitions[s]||{}),o[s]),vt(s,o[s]);const r=Dt[j][s];r&&vt(r,o[s]),la()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(o=>{const{prefix:s,iconName:r,icon:i}=a[o],c=i[2];e[s]||(e[s]={}),c.length>0&&c.forEach(m=>{typeof m=="string"&&(e[s][m]=i)}),e[s][r]=i}),e}}let ln=[],ve={};const ge={},Mc=Object.keys(ge);function Nc(t,e){let{mixoutsTo:n}=e;return ln=t,ve={},Object.keys(ge).forEach(a=>{Mc.indexOf(a)===-1&&delete ge[a]}),ln.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(s=>{typeof o[s]=="function"&&(n[s]=o[s]),typeof o[s]=="object"&&Object.keys(o[s]).forEach(r=>{n[s]||(n[s]={}),n[s][r]=o[s][r]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(r=>{ve[r]||(ve[r]=[]),ve[r].push(s[r])})}a.provides&&a.provides(ge)}),n}function gt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return(ve[t]||[]).forEach(r=>{e=r.apply(null,[e,...a])}),e}function pe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(ve[t]||[]).forEach(s=>{s.apply(null,n)})}function ie(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ge[t]?ge[t].apply(null,e):void 0}function bt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||re();if(e)return e=ue(n,e)||e,on(fa.definitions,n,e)||on(q.styles,n,e)}const fa=new Cc,Tc=()=>{S.autoReplaceSvg=!1,S.observeMutations=!1,pe("noAuto")},Oc={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ne?(pe("beforeI2svg",t),ie("pseudoElements2svg",t),ie("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,hc(()=>{Vc({autoReplaceSvgRoot:e}),pe("watch",t)})}},Ec={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ue(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=qe(t[0]);return{prefix:n,iconName:ue(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(ec))){const e=Ke(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||re(),iconName:ue(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=re();return{prefix:e,iconName:ue(e,t)||t}}}},W={noAuto:Tc,config:S,dom:Oc,parse:Ec,library:fa,findIconDefinition:bt,toHtml:xe},Vc=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=D}=t;(Object.keys(q.styles).length>0||S.autoFetchSvg)&&ne&&S.autoReplaceSvg&&W.dom.i2svg({node:e})};function Xe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>xe(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ne)return;const n=D.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Fc(t){let{children:e,main:n,mask:a,attributes:o,styles:s,transform:r}=t;if(Bt(r)&&n.found&&!a.found){const{width:i,height:c}=n,m={x:i/c/2,y:.5};o.style=Ye(v(v({},s),{},{"transform-origin":"".concat(m.x+r.x/16,"em ").concat(m.y+r.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function Dc(t){let{prefix:e,iconName:n,children:a,attributes:o,symbol:s}=t;const r=s===!0?"".concat(e,"-").concat(S.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},o),{},{id:r}),children:a}]}]}function Rt(t){const{icons:{main:e,mask:n},prefix:a,iconName:o,transform:s,symbol:r,title:i,maskId:c,titleId:m,extra:g,watchable:b=!1}=t,{width:y,height:C}=n.found?n:e,T=Dl.includes(a),N=[S.replacementClass,o?"".concat(S.cssPrefix,"-").concat(o):""].filter(H=>g.classes.indexOf(H)===-1).filter(H=>H!==""||!!H).concat(g.classes).join(" ");let I={children:[],attributes:v(v({},g.attributes),{},{"data-prefix":a,"data-icon":o,class:N,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(C)})};const _=T&&!~g.classes.indexOf("fa-fw")?{width:"".concat(y/C*16*.0625,"em")}:{};b&&(I.attributes[me]=""),i&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(m||Se())},children:[i]}),delete I.attributes.title);const $=v(v({},I),{},{prefix:a,iconName:o,main:e,mask:n,maskId:c,transform:s,symbol:r,styles:v(v({},_),g.styles)}),{children:O,attributes:B}=n.found&&e.found?ie("generateAbstractMask",$)||{children:[],attributes:{}}:ie("generateAbstractIcon",$)||{children:[],attributes:{}};return $.children=O,$.attributes=B,r?Dc($):Fc($)}function cn(t){const{content:e,width:n,height:a,transform:o,title:s,extra:r,watchable:i=!1}=t,c=v(v(v({},r.attributes),s?{title:s}:{}),{},{class:r.classes.join(" ")});i&&(c[me]="");const m=v({},r.styles);Bt(o)&&(m.transform=dc({transform:o,startCentered:!0,width:n,height:a}),m["-webkit-transform"]=m.transform);const g=Ye(m);g.length>0&&(c.style=g);const b=[];return b.push({tag:"span",attributes:c,children:[e]}),s&&b.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),b}function zc(t){const{content:e,title:n,extra:a}=t,o=v(v(v({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Ye(a.styles);s.length>0&&(o.style=s);const r=[];return r.push({tag:"span",attributes:o,children:[e]}),n&&r.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),r}const{styles:tt}=q;function yt(t){const e=t[0],n=t[1],[a]=t.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(Ze.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Ze.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Ze.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}const Bc={found:!1,width:512,height:512};function Hc(t,e){!qn&&!S.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _t(t,e){let n=e;return e==="fa"&&S.styleDefault!==null&&(e=re()),new Promise((a,o)=>{if(n==="fa"){const s=ca(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&tt[e]&&tt[e][t]){const s=tt[e][t];return a(yt(s))}Hc(t,e),a(v(v({},Bc),{},{icon:S.showMissingIcons&&t?ie("missingIconAbstract")||{}:{}}))})}const un=()=>{},kt=S.measurePerformance&&Me&&Me.mark&&Me.measure?Me:{mark:un,measure:un},_e='FA "6.7.2"',jc=t=>(kt.mark("".concat(_e," ").concat(t," begins")),()=>da(t)),da=t=>{kt.mark("".concat(_e," ").concat(t," ends")),kt.measure("".concat(_e," ").concat(t),"".concat(_e," ").concat(t," begins"),"".concat(_e," ").concat(t," ends"))};var Ut={begin:jc,end:da};const Oe=()=>{};function fn(t){return typeof(t.getAttribute?t.getAttribute(me):null)=="string"}function Rc(t){const e=t.getAttribute?t.getAttribute(Vt):null,n=t.getAttribute?t.getAttribute(Ft):null;return e&&n}function Uc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(S.replacementClass)}function Gc(){return S.autoReplaceSvg===!0?Ee.replace:Ee[S.autoReplaceSvg]||Ee.replace}function Wc(t){return D.createElementNS("http://www.w3.org/2000/svg",t)}function Yc(t){return D.createElement(t)}function ma(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Wc:Yc}=e;if(typeof t=="string")return D.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(ma(s,{ceFn:n}))}),a}function qc(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ee={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ma(n),e)}),e.getAttribute(me)===null&&S.keepOriginalSource){let n=D.createComment(qc(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~zt(e).indexOf(S.replacementClass))return Ee.replace(t);const a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((r,i)=>(i===S.replacementClass||i.match(a)?r.toSvg.push(i):r.toNode.push(i),r),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const o=n.map(s=>xe(s)).join(`
`);e.setAttribute(me,""),e.innerHTML=o}};function dn(t){t()}function pa(t,e){const n=typeof e=="function"?e:Oe;if(t.length===0)n();else{let a=dn;S.mutateApproach===Jl&&(a=se.requestAnimationFrame||dn),a(()=>{const o=Gc(),s=Ut.begin("mutate");t.map(o),s(),n()})}}let Gt=!1;function ha(){Gt=!0}function Pt(){Gt=!1}let De=null;function mn(t){if(!Zt||!S.observeMutations)return;const{treeCallback:e=Oe,nodeCallback:n=Oe,pseudoElementsCallback:a=Oe,observeMutationsRoot:o=D}=t;De=new Zt(s=>{if(Gt)return;const r=re();ye(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!fn(i.addedNodes[0])&&(S.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&S.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&fn(i.target)&&~ac.indexOf(i.attributeName))if(i.attributeName==="class"&&Rc(i.target)){const{prefix:c,iconName:m}=Ke(zt(i.target));i.target.setAttribute(Vt,c||r),m&&i.target.setAttribute(Ft,m)}else Uc(i.target)&&n(i.target)})}),ne&&De.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Kc(){De&&De.disconnect()}function Xc(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,o)=>{const s=o.split(":"),r=s[0],i=s.slice(1);return r&&i.length>0&&(a[r]=i.join(":").trim()),a},{})),n}function Jc(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let o=Ke(zt(t));return o.prefix||(o.prefix=re()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=Pc(o.prefix,t.innerText)||jt(o.prefix,ht(t.innerText))),!o.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o}function Zc(t){const e=ye(t.attributes).reduce((o,s)=>(o.name!=="class"&&o.name!=="style"&&(o[s.name]=s.value),o),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return S.autoA11y&&(n?e["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(a||Se()):(e["aria-hidden"]="true",e.focusable="false")),e}function Qc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:o}=Jc(t),s=Zc(t),r=gt("parseNodeAttributes",{},t);let i=e.styleParser?Xc(t):[];return v({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:i,attributes:s}},r)}const{styles:eu}=q;function va(t){const e=S.autoReplaceSvg==="nest"?pn(t,{styleParser:!1}):pn(t);return~e.extra.classes.indexOf(Xn)?ie("generateLayersText",t,e):ie("generateSvgReplacementMutation",t,e)}function tu(){return[...El,...ct]}function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ne)return Promise.resolve();const n=D.documentElement.classList,a=g=>n.add("".concat(tn,"-").concat(g)),o=g=>n.remove("".concat(tn,"-").concat(g)),s=S.autoFetchSvg?tu():Rn.concat(Object.keys(eu));s.includes("fa")||s.push("fa");const r=[".".concat(Xn,":not([").concat(me,"])")].concat(s.map(g=>".".concat(g,":not([").concat(me,"])"))).join(", ");if(r.length===0)return Promise.resolve();let i=[];try{i=ye(t.querySelectorAll(r))}catch{}if(i.length>0)a("pending"),o("complete");else return Promise.resolve();const c=Ut.begin("onTree"),m=i.reduce((g,b)=>{try{const y=va(b);y&&g.push(y)}catch(y){qn||y.name==="MissingIcon"&&console.error(y)}return g},[]);return new Promise((g,b)=>{Promise.all(m).then(y=>{pa(y,()=>{a("active"),a("complete"),o("pending"),typeof e=="function"&&e(),c(),g()})}).catch(y=>{c(),b(y)})})}function nu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;va(t).then(n=>{n&&pa([n],e)})}function au(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:bt(e||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:bt(o||{})),t(a,v(v({},n),{},{mask:o}))}}const ou=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,symbol:a=!1,mask:o=null,maskId:s=null,title:r=null,titleId:i=null,classes:c=[],attributes:m={},styles:g={}}=e;if(!t)return;const{prefix:b,iconName:y,icon:C}=t;return Xe(v({type:"icon"},t),()=>(pe("beforeDOMElementCreation",{iconDefinition:t,params:e}),S.autoA11y&&(r?m["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(i||Se()):(m["aria-hidden"]="true",m.focusable="false")),Rt({icons:{main:yt(C),mask:o?yt(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:y,transform:v(v({},Y),n),symbol:a,title:r,maskId:s,titleId:i,extra:{attributes:m,styles:g,classes:c}})))};var su={mixout(){return{icon:au(ou)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=hn,t.nodeCallback=nu,t}}},provides(t){t.i2svg=function(e){const{node:n=D,callback:a=()=>{}}=e;return hn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:o,titleId:s,prefix:r,transform:i,symbol:c,mask:m,maskId:g,extra:b}=n;return new Promise((y,C)=>{Promise.all([_t(a,r),m.iconName?_t(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[N,I]=T;y([e,Rt({icons:{main:N,mask:I},prefix:r,iconName:a,transform:i,symbol:c,maskId:g,title:o,titleId:s,extra:b,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:o,transform:s,styles:r}=e;const i=Ye(r);i.length>0&&(a.style=i);let c;return Bt(s)&&(c=ie("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(c||o.icon),{children:n,attributes:a}}}},ru={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Xe({type:"layer"},()=>{pe("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(o=>{Array.isArray(o)?o.map(s=>{a=a.concat(s.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},iu={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:o={},styles:s={}}=e;return Xe({type:"counter",content:t},()=>(pe("beforeDOMElementCreation",{content:t,params:e}),zc({content:t.toString(),title:n,extra:{attributes:o,styles:s,classes:["".concat(S.cssPrefix,"-layers-counter"),...a]}})))}}}},lu={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,title:a=null,classes:o=[],attributes:s={},styles:r={}}=e;return Xe({type:"text",content:t},()=>(pe("beforeDOMElementCreation",{content:t,params:e}),cn({content:t,transform:v(v({},Y),n),title:a,extra:{attributes:s,styles:r,classes:["".concat(S.cssPrefix,"-layers-text"),...o]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:o,extra:s}=n;let r=null,i=null;if(Hn){const c=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();r=m.width/c,i=m.height/c}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,cn({content:e.innerHTML,width:r,height:i,transform:o,title:a,extra:s,watchable:!0})])}}};const cu=new RegExp('"',"ug"),vn=[1105920,1112319],gn=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),Nl),Kl),jl),$t=Object.keys(gn).reduce((t,e)=>(t[e.toLowerCase()]=gn[e],t),{}),uu=Object.keys($t).reduce((t,e)=>{const n=$t[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function fu(t){const e=t.replace(cu,""),n=gc(e,0),a=n>=vn[0]&&n<=vn[1],o=e.length===2?e[0]===e[1]:!1;return{value:ht(o?e[0]:e),isSecondary:a||o}}function du(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),o=isNaN(a)?"normal":a;return($t[n]||{})[o]||uu[n]}function bn(t,e){const n="".concat(Xl).concat(e.replace(":","-"));return new Promise((a,o)=>{if(t.getAttribute(n)!==null)return a();const r=ye(t.children).filter(y=>y.getAttribute(ft)===e)[0],i=se.getComputedStyle(t,e),c=i.getPropertyValue("font-family"),m=c.match(tc),g=i.getPropertyValue("font-weight"),b=i.getPropertyValue("content");if(r&&!m)return t.removeChild(r),a();if(m&&b!=="none"&&b!==""){const y=i.getPropertyValue("content");let C=du(c,g);const{value:T,isSecondary:N}=fu(y),I=m[0].startsWith("FontAwesome");let _=jt(C,T),$=_;if(I){const O=$c(T);O.iconName&&O.prefix&&(_=O.iconName,C=O.prefix)}if(_&&!N&&(!r||r.getAttribute(Vt)!==C||r.getAttribute(Ft)!==$)){t.setAttribute(n,$),r&&t.removeChild(r);const O=Qc(),{extra:B}=O;B.attributes[ft]=e,_t(_,C).then(H=>{const Ie=Rt(v(v({},O),{},{icons:{main:H,mask:ua()},prefix:C,iconName:$,extra:B,watchable:!0})),ce=D.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ce,t.firstChild):t.appendChild(ce),ce.outerHTML=Ie.map(_a=>xe(_a)).join(`
`),t.removeAttribute(n),a()}).catch(o)}else a()}else a()})}function mu(t){return Promise.all([bn(t,"::before"),bn(t,"::after")])}function pu(t){return t.parentNode!==document.head&&!~Zl.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function yn(t){if(ne)return new Promise((e,n)=>{const a=ye(t.querySelectorAll("*")).filter(pu).map(mu),o=Ut.begin("searchPseudoElements");ha(),Promise.all(a).then(()=>{o(),Pt(),e()}).catch(()=>{o(),Pt(),n()})})}var hu={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=yn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=D}=e;S.searchPseudoElements&&yn(n)}}};let _n=!1;var vu={mixout(){return{dom:{unwatch(){ha(),_n=!0}}}},hooks(){return{bootstrap(){mn(gt("mutationObserverCallbacks",{}))},noAuto(){Kc()},watch(t){const{observeMutationsRoot:e}=t;_n?Pt():mn(gt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const kn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const o=a.toLowerCase().split("-"),s=o[0];let r=o.slice(1).join("-");if(s&&r==="h")return n.flipX=!0,n;if(s&&r==="v")return n.flipY=!0,n;if(r=parseFloat(r),isNaN(r))return n;switch(s){case"grow":n.size=n.size+r;break;case"shrink":n.size=n.size-r;break;case"left":n.x=n.x-r;break;case"right":n.x=n.x+r;break;case"up":n.y=n.y-r;break;case"down":n.y=n.y+r;break;case"rotate":n.rotate=n.rotate+r;break}return n},e)};var gu={mixout(){return{parse:{transform:t=>kn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=kn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:o,iconWidth:s}=e;const r={transform:"translate(".concat(o/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),m="rotate(".concat(a.rotate," 0 0)"),g={transform:"".concat(i," ").concat(c," ").concat(m)},b={transform:"translate(".concat(s/2*-1," -256)")},y={outer:r,inner:g,path:b};return{tag:"g",attributes:v({},y.outer),children:[{tag:"g",attributes:v({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),y.path)}]}]}}}};const nt={x:0,y:0,width:"100%",height:"100%"};function Pn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function bu(t){return t.tag==="g"?t.children:[t]}var yu={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Ke(n.split(" ").map(o=>o.trim())):ua();return a.prefix||(a.prefix=re()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:o,mask:s,maskId:r,transform:i}=e;const{width:c,icon:m}=o,{width:g,icon:b}=s,y=fc({transform:i,containerWidth:g,iconWidth:c}),C={tag:"rect",attributes:v(v({},nt),{},{fill:"white"})},T=m.children?{children:m.children.map(Pn)}:{},N={tag:"g",attributes:v({},y.inner),children:[Pn(v({tag:m.tag,attributes:v(v({},m.attributes),y.path)},T))]},I={tag:"g",attributes:v({},y.outer),children:[N]},_="mask-".concat(r||Se()),$="clip-".concat(r||Se()),O={tag:"mask",attributes:v(v({},nt),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,I]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:bu(b)},O]};return n.push(B,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(_,")")},nt)}),{children:n,attributes:a}}}},_u={provides(t){let e=!1;se.matchMedia&&(e=se.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=v(v({},o),{},{attributeName:"opacity"}),r={tag:"circle",attributes:v(v({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||r.children.push({tag:"animate",attributes:v(v({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(r),n.push({tag:"path",attributes:v(v({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:v(v({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ku={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Pu=[pc,su,ru,iu,lu,hu,vu,gu,yu,_u,ku];Nc(Pu,{mixoutsTo:W});W.noAuto;W.config;const $u=W.library;W.dom;const St=W.parse;W.findIconDefinition;W.toHtml;const Su=W.icon;W.layer;W.text;W.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Au={prefix:"fas",iconName:"face-smile-beam",icon:[512,512,[128522,"smile-beam"],"f5b8","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53.5-96.7s0 0 0 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0zm160 0c0 0 0 0 0 0l-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0z"]},Lu={prefix:"fas",iconName:"book-open",icon:[576,512,[128214,128366],"f518","M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"]};function $n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$n(Object(n),!0).forEach(function(a){G(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$n(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xu(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Iu(t){var e=xu(t,"string");return typeof e=="symbol"?e:e+""}function ze(t){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ze(t)}function G(t,e,n){return e=Iu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cu(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Mu(t,e){if(t==null)return{};var n=Cu(t,e),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)a=s[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ga={exports:{}};(function(t){(function(e){var n=function(_,$,O){if(!m($)||b($)||y($)||C($)||c($))return $;var B,H=0,Ie=0;if(g($))for(B=[],Ie=$.length;H<Ie;H++)B.push(n(_,$[H],O));else{B={};for(var ce in $)Object.prototype.hasOwnProperty.call($,ce)&&(B[_(ce,O)]=n(_,$[ce],O))}return B},a=function(_,$){$=$||{};var O=$.separator||"_",B=$.split||/(?=[A-Z])/;return _.split(B).join(O)},o=function(_){return T(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function($,O){return O?O.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var $=o(_);return $.substr(0,1).toUpperCase()+$.substr(1)},r=function(_,$){return a(_,$).toLowerCase()},i=Object.prototype.toString,c=function(_){return typeof _=="function"},m=function(_){return _===Object(_)},g=function(_){return i.call(_)=="[object Array]"},b=function(_){return i.call(_)=="[object Date]"},y=function(_){return i.call(_)=="[object RegExp]"},C=function(_){return i.call(_)=="[object Boolean]"},T=function(_){return _=_-0,_===_},N=function(_,$){var O=$&&"process"in $?$.process:$;return typeof O!="function"?_:function(B,H){return O(B,_,H)}},I={camelize:o,decamelize:r,pascalize:s,depascalize:r,camelizeKeys:function(_,$){return n(N(o,$),_)},decamelizeKeys:function(_,$){return n(N(r,$),_,$)},pascalizeKeys:function(_,$){return n(N(s,$),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(Nu)})(ga);var Tu=ga.exports,Ou=["class","style"];function Eu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),o=Tu.camelize(n.slice(0,a)),s=n.slice(a+1).trim();return e[o]=s,e},{})}function Vu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ba(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return ba(c)}),o=Object.keys(t.attributes||{}).reduce(function(c,m){var g=t.attributes[m];switch(m){case"class":c.class=Vu(g);break;case"style":c.style=Eu(g);break;default:c.attrs[m]=g}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,r=s===void 0?{}:s,i=Mu(n,Ou);return $e(t.tag,Z(Z(Z({},e),{},{class:o.class,style:Z(Z({},o.style),r)},o.attrs),i),a)}var ya=!1;try{ya=!0}catch{}function Fu(){if(!ya&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function at(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?G({},t,e):{}}function Du(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},G(G(G(G(G(G(G(G(G(G(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),G(G(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Sn(t){if(t&&ze(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(St.icon)return St.icon(t);if(t===null)return null;if(ze(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var zu=P({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,o=L(function(){return Sn(e.icon)}),s=L(function(){return at("classes",Du(e))}),r=L(function(){return at("transform",typeof e.transform=="string"?St.transform(e.transform):e.transform)}),i=L(function(){return at("mask",Sn(e.mask))}),c=L(function(){return Su(o.value,Z(Z(Z(Z({},s.value),r.value),i.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});J(c,function(g){if(!g)return Fu("Could not find one or more icon(s)",o.value,i.value)},{immediate:!0});var m=L(function(){return c.value?ba(c.value.abstract[0],{},a):null});return function(){return m.value}}});$u.add(wu,Lu,Au);const Ju={extends:Yt,Layout:()=>$e(Yt.Layout),enhanceApp({app:t}){t.component("lucide-alert-triangle",Pl),t.component("lucide-shuffle",kl),t.component("lucide-file-x",yl),t.component("lucide-git-branch",_l),t.component("lucide-database",bl),t.component("FontAwesomeIcon",zu)}};export{Hu as C,bl as D,zu as F,Gu as L,Ju as R,Yu as S,qu as T,Ku as U,Xu as Z,Ru as a,ju as b,Wu as c,Uu as d,Lu as e,wu as f};
