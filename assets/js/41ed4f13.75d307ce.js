"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[4702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={tag:"this",description:"What does the 'this' keyword refer to here?",related:["tags-memberof.html"]},i=void 0,s={unversionedId:"tags-this",id:"tags-this",title:"tags-this",description:"What does the 'this' keyword refer to here?",source:"@site/docs/tags-this.md",sourceDirName:".",slug:"/tags-this",permalink:"/tags-this",draft:!1,tags:[],version:"current",frontMatter:{tag:"this",description:"What does the 'this' keyword refer to here?",related:["tags-memberof.html"]},sidebar:"docsSidebar",previous:{title:"tags-summary",permalink:"/tags-summary"},next:{title:"tags-throws",permalink:"/tags-throws"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@this <namePath>")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The @this tag indicates what the ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," keyword refers to when used within another symbol."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'In the following example, the @this tag causes "this.name" to be documented as "Greeter#name"\nrather than a global symbol called "name".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/** @constructor */\nfunction Greeter(name) {\n    setName.apply(this, name);\n}\n\n/** @this Greeter */\nfunction setName(name) {\n    /** document me */\n    this.name = name;\n}\n")))}m.isMDXComponent=!0}}]);