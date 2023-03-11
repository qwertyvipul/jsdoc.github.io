"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[55],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,k=s["".concat(l,".").concat(d)]||s[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Including a Package File",description:"How to show package details in your documentation."},i=void 0,c={unversionedId:"about-including-package",id:"about-including-package",title:"Including a Package File",description:"How to show package details in your documentation.",source:"@site/docs/about-including-package.md",sourceDirName:".",slug:"/about-including-package",permalink:"/about-including-package",draft:!1,tags:[],version:"current",frontMatter:{title:"Including a Package File",description:"How to show package details in your documentation."},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/about-tutorials"},next:{title:"Including a README File",permalink:"/about-including-readme"}},l={},p=[{value:"Examples",id:"examples",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Package files contain information that can be useful for your project's documentation, such as\nthe project's name and version number. JSDoc can automatically use information from your project's\n",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file when it generates documentation. For example, the default template shows\nthe project's name and version number in the documentation."),(0,o.kt)("p",null,"There are two ways to incorporate a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file into your documentation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the source paths to your JavaScript files, include the path to a ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file. JSDoc\nwill use the first ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," file that it finds in your source paths."),(0,o.kt)("li",{parentName:"ol"},"Run JSDoc with the ",(0,o.kt)("inlineCode",{parentName:"li"},"-P/--package")," command-line option, specifying the path to your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"\nfile. This option is available in JSDoc 3.3.0 and later.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-P/--package")," command-line option takes precedence over your source paths. If you use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"-P/--package")," command-line option, JSDoc will ignore any ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," files in your source paths."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file must use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"npm's package format"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Including a package file in your source paths"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jsdoc path/to/js path/to/package/package.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using the -P/--package option"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jsdoc --package path/to/package/package-docs.json path/to/js\n")))}m.isMDXComponent=!0}}]);