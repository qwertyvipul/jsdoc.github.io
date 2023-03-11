"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[7239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={tag:"implements",description:"This symbol implements an interface.",version:">=3.3.0",related:["tags-interface.html"]},i=void 0,l={unversionedId:"tags-implements",id:"tags-implements",title:"tags-implements",description:"This symbol implements an interface.",source:"@site/docs/tags-implements.md",sourceDirName:".",slug:"/tags-implements",permalink:"/jsdoc.github.io/tags-implements",draft:!1,tags:[],version:"current",frontMatter:{tag:"implements",description:"This symbol implements an interface.",version:">=3.3.0",related:["tags-interface.html"]},sidebar:"docsSidebar",previous:{title:"tags-ignore",permalink:"/jsdoc.github.io/tags-ignore"},next:{title:"tags-inheritdoc",permalink:"/jsdoc.github.io/tags-inheritdoc"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@implements {typeExpression}")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@implements")," tag indicates that a symbol implements an interface."),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@implements")," tag to the top-level symbol that implements the interface (for example, a\nconstructor function). You do not need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@implements")," tag to each member of the\nimplementation (for example, the implementation's instance methods)."),(0,a.kt)("p",null,"If you do not document one of the symbols in the implementation, JSDoc will automatically use the\ninterface's documentation for that symbol."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In the following example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TransparentColor")," class implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"Color")," interface and adds\na ",(0,a.kt)("inlineCode",{parentName:"p"},"TransparentColor#rgba")," method."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using the @implements tag"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Interface for classes that represent a color.\n *\n * @interface\n */\nfunction Color() {}\n\n/**\n * Get the color as an array of red, green, and blue values, represented as\n * decimal numbers between 0 and 1.\n *\n * @returns {Array&lt;number>} An array containing the red, green, and blue values,\n * in that order.\n */\nColor.prototype.rgb = function() {\n    throw new Error('not implemented');\n};\n\n/**\n * Class representing a color with transparency information.\n *\n * @class\n * @implements {Color}\n */\nfunction TransparentColor() {}\n\n// inherits the documentation from `Color#rgb`\nTransparentColor.prototype.rgb = function() {\n    // ...\n};\n\n/**\n * Get the color as an array of red, green, blue, and alpha values, represented\n * as decimal numbers between 0 and 1.\n *\n * @returns {Array&lt;number>} An array containing the red, green, blue, and alpha\n * values, in that order.\n */\nTransparentColor.prototype.rgba = function() {\n    // ...\n};\n")))}u.isMDXComponent=!0}}]);