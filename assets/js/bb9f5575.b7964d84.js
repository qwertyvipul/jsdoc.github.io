"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[4887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={inlineTag:"link",description:"Link to another item in the documentation.",version:">=3.0.0",synonyms:["linkcode","linkplain"],related:["about-configuring-jsdoc.html","about-namepaths.html"]},i=void 0,r={unversionedId:"tags-inline-link",id:"tags-inline-link",title:"tags-inline-link",description:"Link to another item in the documentation.",source:"@site/docs/tags-inline-link.md",sourceDirName:".",slug:"/tags-inline-link",permalink:"/jsdoc.github.io/tags-inline-link",draft:!1,tags:[],version:"current",frontMatter:{inlineTag:"link",description:"Link to another item in the documentation.",version:">=3.0.0",synonyms:["linkcode","linkplain"],related:["about-configuring-jsdoc.html","about-namepaths.html"]},sidebar:"docsSidebar",previous:{title:"tags-yields",permalink:"/jsdoc.github.io/tags-yields"},next:{title:"tags-inline-tutorial",permalink:"/jsdoc.github.io/tags-inline-tutorial"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:2},{value:"Link formatting",id:"link-formatting",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{@link namepathOrURL}\n[link text]{@link namepathOrURL}\n{@link namepathOrURL|link text}\n{@link namepathOrURL link text (after the first space)}\n")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"{@link}")," inline tag creates a link to the namepath or URL that you specify. When you use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"{@link}")," tag, you can also provide link text, using one of several different formats. If you don't\nprovide any link text, JSDoc uses the namepath or URL as the link text."),(0,l.kt)("p",null,"If you need to link to a tutorial, use the ",(0,l.kt)("a",{parentName:"p",href:"tags-inline-tutorial"},(0,l.kt)("inlineCode",{parentName:"a"},"{@tutorial}")," inline tag")," instead\nof the ",(0,l.kt)("inlineCode",{parentName:"p"},"{@link}")," tag."),(0,l.kt)("h2",{id:"link-formatting"},"Link formatting"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"{@link}")," generates standard HTML anchor tags. However, you may prefer to render certain\nlinks in a monospace font, or to specify the format of individual links. You can use the following\nsynonyms for the ",(0,l.kt)("inlineCode",{parentName:"p"},"{@link}")," tag to control the formatting of links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{@linkcode}"),": Forces the link's text to use a monospace font."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{@linkplain}"),": Forces the link's text to appear as normal text, without a monospace font.")),(0,l.kt)("p",null,"You can also set one of the following options in JSDoc's configuration file; see\n",(0,l.kt)("a",{parentName:"p",href:"about-configuring-jsdoc"},"Configuring JSDoc")," for more details:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"templates.cleverLinks"),": When set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", links to URLs use normal text, and links to code use\na monospace font."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"templates.monospaceLinks"),": When set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", all links use a monospace font, except for links\ncreated with the ",(0,l.kt)("inlineCode",{parentName:"li"},"{@linkplain}")," tag.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": Although the default JSDoc template renders all of these tags correctly, other templates\nmay not recognize the ",(0,l.kt)("inlineCode",{parentName:"p"},"{@linkcode}")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"{@linkplain}")," tags. In addition, other templates may ignore\nthe configuration options for link rendering."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following example shows all of the ways to provide link text for the ",(0,l.kt)("inlineCode",{parentName:"p"},"{@link}")," tag:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Providing link text"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.\n * Also, check out {@link http://www.google.com|Google} and\n * {@link https://github.com GitHub}.\n */\nfunction myFunction() {}\n")),(0,l.kt)("p",null,"By default, the example above produces output similar to the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Output for {@link} tags"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'See &lt;a href="MyClass.html">MyClass&lt;/a> and &lt;a href="MyClass.html#foo">MyClass\'s foo\nproperty&lt;/a>. Also, check out &lt;a href="http://www.google.com">Google&lt;/a> and\n&lt;a href="https://github.com">GitHub&lt;/a>.\n')),(0,l.kt)("p",null,"If the configuration property ",(0,l.kt)("inlineCode",{parentName:"p"},"templates.cleverLinks")," were set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the example above would\nproduce the following output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Output with clever links enabled"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'See &lt;a href="MyClass.html">&lt;code>MyClass&lt;/code>&lt;/a> and &lt;a href="MyClass.html#foo">\n&lt;code>MyClass\'s foo property&lt;/code>&lt;/a>. Also, check out\n&lt;a href="http://www.google.com">Google&lt;/a> and &lt;a href="https://github.com">GitHub&lt;/a>.\n')))}m.isMDXComponent=!0}}]);