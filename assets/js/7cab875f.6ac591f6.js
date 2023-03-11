"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={tag:"kind",description:"What kind of symbol is this?",related:["tags-type.html"]},l=void 0,o={unversionedId:"tags-kind",id:"tags-kind",title:"tags-kind",description:"What kind of symbol is this?",source:"@site/docs/tags-kind.md",sourceDirName:".",slug:"/tags-kind",permalink:"/jsdoc.github.io/tags-kind",draft:!1,tags:[],version:"current",frontMatter:{tag:"kind",description:"What kind of symbol is this?",related:["tags-type.html"]},sidebar:"docsSidebar",previous:{title:"tags-interface",permalink:"/jsdoc.github.io/tags-interface"},next:{title:"tags-lends",permalink:"/jsdoc.github.io/tags-lends"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@kind <kindName>")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"<kindName>")," is one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"class"),(0,r.kt)("li",{parentName:"ul"},"constant"),(0,r.kt)("li",{parentName:"ul"},"event"),(0,r.kt)("li",{parentName:"ul"},"external"),(0,r.kt)("li",{parentName:"ul"},"file"),(0,r.kt)("li",{parentName:"ul"},"function"),(0,r.kt)("li",{parentName:"ul"},"member"),(0,r.kt)("li",{parentName:"ul"},"mixin"),(0,r.kt)("li",{parentName:"ul"},"module"),(0,r.kt)("li",{parentName:"ul"},"namespace"),(0,r.kt)("li",{parentName:"ul"},"typedef")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The @kind tag is used to document what ",(0,r.kt)("em",{parentName:"p"},"kind")," of symbol is being documented (for example, a class or\na module). The ",(0,r.kt)("em",{parentName:"p"},"kind")," of symbol differs from a symbol's ",(0,r.kt)("em",{parentName:"p"},"type")," (for example, string or boolean)."),(0,r.kt)("p",null,'Usually you do not need the @kind tag, because the symbol\'s kind is determined by other tags in the\ndoclet. For example, using the @class tag automatically implies "@kind class", and using the\n@namespace tag implies "@kind namespace".'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using @kind"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// The following examples produce the same result:\n\n/**\n * A constant.\n * @kind constant\n */\nconst asdf = 1;\n\n/**\n * A constant.\n * @constant\n */\nconst asdf = 1;\n")),(0,r.kt)("p",null,'In the case of tags with conflicting kinds (for example, using both @module, which sets the kind to\n"module", and "@kind constant" which sets the kind to "constant"), the last tag determines the kind.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Conflicting @kind statements"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * This will show up as a constant\n * @module myModule\n * @kind constant\n */\n\n/**\n * This will show up as a module.\n * @kind constant\n * @module myModule\n */\n")))}d.isMDXComponent=!0}}]);