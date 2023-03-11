"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[9353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={tag:"protected",description:"This symbol is meant to be protected.",related:["tags-access.html","tags-global.html","tags-instance.html","tags-package.html","tags-private.html","tags-public.html","tags-static.html"]},i=void 0,l={unversionedId:"tags-protected",id:"tags-protected",title:"tags-protected",description:"This symbol is meant to be protected.",source:"@site/docs/tags-protected.md",sourceDirName:".",slug:"/tags-protected",permalink:"/jsdoc.github.io/tags-protected",draft:!1,tags:[],version:"current",frontMatter:{tag:"protected",description:"This symbol is meant to be protected.",related:["tags-access.html","tags-global.html","tags-instance.html","tags-package.html","tags-private.html","tags-public.html","tags-static.html"]},sidebar:"docsSidebar",previous:{title:"tags-property",permalink:"/jsdoc.github.io/tags-property"},next:{title:"tags-public",permalink:"/jsdoc.github.io/tags-public"}},p={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"With the JSDoc tag dictionary (enabled by default):"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@protected")),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags"},"Closure Compiler")," tag dictionary:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@protected [{typeExpression}]")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@protected")," tag marks a symbol as protected. Typically, this tag indicates that a symbol is\nonly available, or should only be used, within the current module."),(0,a.kt)("p",null,"By default, symbols marked with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@protected")," tag will appear in your documentation. In JSDoc\n3.3.0 and later, you can use the ",(0,a.kt)("a",{parentName:"p",href:"about-commandline"},(0,a.kt)("inlineCode",{parentName:"a"},"-a/--access")," command-line option")," to change this\nbehavior."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@protected")," tag is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"@access protected"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In the following example, the instance member ",(0,a.kt)("inlineCode",{parentName:"p"},"Thingy#_bar")," appears in the generated documentation,\nbut with an annotation indicating that it is protected:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using the @protected tag"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/** @constructor */\nfunction Thingy() {\n    /** @protected */\n    this._bar = 1;\n}\n")))}d.isMDXComponent=!0}}]);