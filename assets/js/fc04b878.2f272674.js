"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[2105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),m=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,h=p["".concat(i,".").concat(c)]||p[c]||u[c]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(7462),a=(n(7294),n(3905));const r={title:"CommonJS Modules",description:"How to add JSDoc comments to CommonJS and Node.js modules.",related:["about-namepaths.html","tags-exports.html","tags-module.html"]},l=void 0,s={unversionedId:"howto-commonjs-modules",id:"howto-commonjs-modules",title:"CommonJS Modules",description:"How to add JSDoc comments to CommonJS and Node.js modules.",source:"@site/docs/howto-commonjs-modules.md",sourceDirName:".",slug:"/howto-commonjs-modules",permalink:"/howto-commonjs-modules",draft:!1,tags:[],version:"current",frontMatter:{title:"CommonJS Modules",description:"How to add JSDoc comments to CommonJS and Node.js modules.",related:["about-namepaths.html","tags-exports.html","tags-module.html"]},sidebar:"docsSidebar",previous:{title:"ES 2015 Modules",permalink:"/howto-es2015-modules"},next:{title:"AMD Modules",permalink:"/howto-amd-modules"}},i={},m=[{value:"Overview",id:"overview",level:2},{value:"Module identifiers",id:"module-identifiers",level:2},{value:"Properties of the &#39;exports&#39; object",id:"properties-of-the-exports-object",level:2},{value:"Values assigned to &#39;module.exports&#39;",id:"values-assigned-to-moduleexports",level:2},{value:"Object literal assigned to &#39;module.exports&#39;",id:"object-literal-assigned-to-moduleexports",level:3},{value:"Function assigned to &#39;module.exports&#39;",id:"function-assigned-to-moduleexports",level:3},{value:"String, number, or boolean assigned to &#39;module.exports&#39;",id:"string-number-or-boolean-assigned-to-moduleexports",level:3},{value:"Values assigned to &#39;module.exports&#39; and local variables",id:"values-assigned-to-moduleexports-and-local-variables",level:2},{value:"Properties added to &#39;this&#39;",id:"properties-added-to-this",level:2}],d={toc:m},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"To help you document ",(0,a.kt)("a",{parentName:"p",href:"http://wiki.commonjs.org/wiki/Modules/1.1"},"CommonJS modules"),", JSDoc 3 understands many of the\nconventions used in the CommonJS specification (for example, adding properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"exports"),"\nobject). In addition, JSDoc recognizes the conventions of ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/api/modules.html"},"Node.js modules"),", which\nextend the CommonJS standard (for example, assigning a value to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),"). Depending on the\ncoding conventions you follow, you may need to provide some additional tags to help JSDoc understand\nyour code."),(0,a.kt)("p",null,'This page explains how to document CommonJS and Node.js modules that use several different coding\nconventions. If you\'re documenting Asynchronous Module Definition (AMD) modules (also\nknown as "RequireJS modules"), see ',(0,a.kt)("a",{parentName:"p",href:"howto-amd-modules"},"AMD Modules"),"."),(0,a.kt)("h2",{id:"module-identifiers"},"Module identifiers"),(0,a.kt)("p",null,"In most cases, your CommonJS or Node.js module should include a standalone JSDoc comment that\ncontains a ",(0,a.kt)("a",{parentName:"p",href:"tags-module"},(0,a.kt)("inlineCode",{parentName:"a"},"@module")," tag"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"@module")," tag's value should be the module identifier\nthat's passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," function. For example, if users load the module by calling\n",(0,a.kt)("inlineCode",{parentName:"p"},"require('my/shirt')"),", your JSDoc comment would contain the tag ",(0,a.kt)("inlineCode",{parentName:"p"},"@module my/shirt"),"."),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@module")," tag without a value, JSDoc will try to guess the correct module identifier\nbased on the filepath."),(0,a.kt)("p",null,"When you use a JSDoc ",(0,a.kt)("a",{parentName:"p",href:"about-namepaths"},"namepath")," to refer to a module from another JSDoc comment, you must\nadd the prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"module:"),". For example, if you want the documentation for the module ",(0,a.kt)("inlineCode",{parentName:"p"},"my/pants")," to\nlink to the module ",(0,a.kt)("inlineCode",{parentName:"p"},"my/shirt"),", you could use the ",(0,a.kt)("a",{parentName:"p",href:"tags-see"},(0,a.kt)("inlineCode",{parentName:"a"},"@see")," tag")," to document ",(0,a.kt)("inlineCode",{parentName:"p"},"my/pants")," as\nfollows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Pants module.\n * @module my/pants\n * @see module:my/shirt\n */\n")),(0,a.kt)("p",null,"Similarly, the namepath for each member of the module will start with ",(0,a.kt)("inlineCode",{parentName:"p"},"module:"),", followed by the\nmodule name. For example, if your ",(0,a.kt)("inlineCode",{parentName:"p"},"my/pants")," module exports a ",(0,a.kt)("inlineCode",{parentName:"p"},"Jeans")," constructor, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Jeans")," has\nan instance method named ",(0,a.kt)("inlineCode",{parentName:"p"},"hem"),", the instance method's longname is ",(0,a.kt)("inlineCode",{parentName:"p"},"module:my/pants.Jeans#hem"),"."),(0,a.kt)("h2",{id:"properties-of-the-exports-object"},"Properties of the 'exports' object"),(0,a.kt)("p",null,"It's easiest to document symbols that are directly assigned to a property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"exports")," object.\nJSDoc will automatically recognize that the module exports these symbols."),(0,a.kt)("p",null,"In the following example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"my/shirt")," module exports the methods ",(0,a.kt)("inlineCode",{parentName:"p"},"button")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unbutton"),". JSDoc\nwill automatically detect that the module exports these methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Methods added to the exports object"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Shirt module.\n * @module my/shirt\n */\n\n/** Button the shirt. */\nexports.button = function() {\n    // ...\n};\n\n/** Unbutton the shirt. */\nexports.unbutton = function() {\n    // ...\n};\n")),(0,a.kt)("a",{name:"local-vars"}),"## Values assigned to local variables",(0,a.kt)("p",null,"In some cases, an exported symbol may be assigned to a local variable before it's added to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"exports")," object. For example, if your module exports a ",(0,a.kt)("inlineCode",{parentName:"p"},"wash")," method, and the module itself often\ncalls the ",(0,a.kt)("inlineCode",{parentName:"p"},"wash")," method, you might write the module as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Method assigned to a local variable and added to the exports object"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Shirt module.\n * @module my/shirt\n */\n\n/** Wash the shirt. */\nvar wash = exports.wash = function() {\n    // ...\n};\n")),(0,a.kt)("p",null,"In this case, JSDoc will ",(0,a.kt)("em",{parentName:"p"},"not")," automatically document ",(0,a.kt)("inlineCode",{parentName:"p"},"wash")," as an exported method, because the\nJSDoc comment appears immediately before the local variable ",(0,a.kt)("inlineCode",{parentName:"p"},"wash")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"exports.wash"),". One\nsolution is to add an ",(0,a.kt)("a",{parentName:"p",href:"tags-alias"},(0,a.kt)("inlineCode",{parentName:"a"},"@alias")," tag")," that defines the correct longname for the method. In\nthis case, the method is a static member of the module ",(0,a.kt)("inlineCode",{parentName:"p"},"my/shirt"),", so the correct longname is\n",(0,a.kt)("inlineCode",{parentName:"p"},"module:my/shirt.wash"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Longname defined in an @alias tag"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Shirt module.\n * @module my/shirt\n */\n\n/**\n * Wash the shirt.\n * @alias module:my/shirt.wash\n */\nvar wash = exports.wash = function() {\n    // ...\n};\n")),(0,a.kt)("p",null,"Another solution is to move the method's JSDoc comment so it comes immediately before\n",(0,a.kt)("inlineCode",{parentName:"p"},"exports.wash"),". This change allows JSDoc to detect that ",(0,a.kt)("inlineCode",{parentName:"p"},"wash")," is exported by the module ",(0,a.kt)("inlineCode",{parentName:"p"},"my/shirt"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JSDoc comment immediately before exports.wash"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Shirt module.\n * @module my/shirt\n */\n\nvar wash =\n/** Wash the shirt. */\nexports.wash = function() {\n    // ...\n};\n")),(0,a.kt)("h2",{id:"values-assigned-to-moduleexports"},"Values assigned to 'module.exports'"),(0,a.kt)("p",null,"In a Node.js module, you can assign a value directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),". This section explains how\nto document different types of values when they are assigned to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),"."),(0,a.kt)("h3",{id:"object-literal-assigned-to-moduleexports"},"Object literal assigned to 'module.exports'"),(0,a.kt)("p",null,"If a module assigns an object literal to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),". JSDoc automatically recognizes that the\nmodule exports only this value. In addition, JSDoc automatically sets the correct longname for each\nproperty:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Object literal assigned to module.exports"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Color mixer.\n * @module color/mixer\n */\n\nmodule.exports = {\n    /**\n     * Blend two colors together.\n     * @param {string} color1 - The first color, in hexadecimal format.\n     * @param {string} color2 - The second color, in hexadecimal format.\n     * @return {string} The blended color.\n     */\n    blend: function(color1, color2) {\n        // ...\n    },\n\n    /**\n     * Darken a color by the given percentage.\n     * @param {string} color - The color, in hexadecimal format.\n     * @param {number} percent - The percentage, ranging from 0 to 100.\n     * @return {string} The darkened color.\n     */\n    darken: function(color, percent) {\n        // ..\n    }\n};\n")),(0,a.kt)("p",null,"You can also use this pattern if you add properties to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports")," outside of the object\nliteral:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Assignment to module.exports followed by property definition"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Color mixer.\n * @module color/mixer\n */\n\nmodule.exports = {\n    /**\n     * Blend two colors together.\n     * @param {string} color1 - The first color, in hexadecimal format.\n     * @param {string} color2 - The second color, in hexadecimal format.\n     * @return {string} The blended color.\n     */\n    blend: function(color1, color2) {\n        // ...\n    }\n};\n\n/**\n * Darken a color by the given percentage.\n * @param {string} color - The color, in hexadecimal format.\n * @param {number} percent - The percentage, ranging from 0 to 100.\n * @return {string} The darkened color.\n */\nmodule.exports.darken = function(color, percent) {\n    // ..\n};\n")),(0,a.kt)("h3",{id:"function-assigned-to-moduleexports"},"Function assigned to 'module.exports'"),(0,a.kt)("p",null,"If you assign a function to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),", JSDoc will automatically set the correct longname for\nthe function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function assigned to 'module.exports'"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Color mixer.\n * @module color/mixer\n */\n\n/**\n * Blend two colors together.\n * @param {string} color1 - The first color, in hexadecimal format.\n * @param {string} color2 - The second color, in hexadecimal format.\n * @return {string} The blended color.\n */\nmodule.exports = function(color1, color2) {\n    // ...\n};\n")),(0,a.kt)("p",null,"The same pattern works for constructor functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Constructor assigned to 'module.exports'"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Color mixer.\n * @module color/mixer\n */\n\n/** Create a color mixer. */\nmodule.exports = function ColorMixer() {\n    // ...\n};\n")),(0,a.kt)("h3",{id:"string-number-or-boolean-assigned-to-moduleexports"},"String, number, or boolean assigned to 'module.exports'"),(0,a.kt)("p",null,"For value types (strings, numbers, and booleans) assigned to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),", you must document the\nexported value's type by using the ",(0,a.kt)("a",{parentName:"p",href:"tags-type"},(0,a.kt)("inlineCode",{parentName:"a"},"@type")," tag")," in the same JSDoc comment as the\n",(0,a.kt)("inlineCode",{parentName:"p"},"@module")," tag:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"String assigned to module.exports"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Module representing the word of the day.\n * @module wotd\n * @type {string}\n */\n\nmodule.exports = 'perniciousness';\n")),(0,a.kt)("h2",{id:"values-assigned-to-moduleexports-and-local-variables"},"Values assigned to 'module.exports' and local variables"),(0,a.kt)("p",null,"If your module exports symbols that are not directly assigned to ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports"),", you can use the\n",(0,a.kt)("a",{parentName:"p",href:"tags-exports"},(0,a.kt)("inlineCode",{parentName:"a"},"@exports")," tag")," in place of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@module")," tag. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@exports")," tag tells JSDoc that a\nsymbol represents the value exported by a module."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Object literal assigned to a local variable and module.exports"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Color mixer.\n * @exports color/mixer\n */\nvar mixer = module.exports = {\n    /**\n     * Blend two colors together.\n     * @param {string} color1 - The first color, in hexadecimal format.\n     * @param {string} color2 - The second color, in hexadecimal format.\n     * @return {string} The blended color.\n     */\n    blend: function(color1, color2) {\n        // ...\n    }\n};\n\n")),(0,a.kt)("h2",{id:"properties-added-to-this"},"Properties added to 'this'"),(0,a.kt)("p",null,"When a module adds a property to its ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," object, JSDoc 3 automatically recognizes that the new\nproperty is exported by the module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Properties added to a module's 'this' object"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Module for bookshelf-related utilities.\n * @module bookshelf\n */\n\n/**\n * Create a new Book.\n * @class\n * @param {string} title - The title of the book.\n */\nthis.Book = function(title) {\n    /** The title of the book. */\n    this.title = title;\n}\n")))}u.isMDXComponent=!0}}]);