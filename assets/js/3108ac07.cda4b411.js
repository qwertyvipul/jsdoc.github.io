"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[3389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,h=d["".concat(u,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"AMD Modules",description:"How to add JSDoc comments to AMD and RequireJS modules.",related:["about-namepaths.html","tags-exports.html","tags-module.html"]},l=void 0,i={unversionedId:"howto-amd-modules",id:"howto-amd-modules",title:"AMD Modules",description:"How to add JSDoc comments to AMD and RequireJS modules.",source:"@site/docs/howto-amd-modules.md",sourceDirName:".",slug:"/howto-amd-modules",permalink:"/howto-amd-modules",draft:!1,tags:[],version:"current",frontMatter:{title:"AMD Modules",description:"How to add JSDoc comments to AMD and RequireJS modules.",related:["about-namepaths.html","tags-exports.html","tags-module.html"]},sidebar:"docsSidebar",previous:{title:"CommonJS Modules",permalink:"/howto-commonjs-modules"},next:{title:"tags-abstract",permalink:"/tags-abstract"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Module identifiers",id:"module-identifiers",level:2},{value:"Function that returns an object literal",id:"function-that-returns-an-object-literal",level:2},{value:"Function that returns another function",id:"function-that-returns-another-function",level:2},{value:"Module declared in a return statement",id:"module-declared-in-a-return-statement",level:2},{value:"Module object passed to a function",id:"module-object-passed-to-a-function",level:2},{value:"Multiple modules defined in one file",id:"multiple-modules-defined-in-one-file",level:2}],m={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"JSDoc 3 makes it possible to document modules that use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amdjs/amdjs-api/blob/master/AMD.md"},"Asynchronous Module Definition (AMD)\nAPI"),", which is implemented by libraries such as ",(0,o.kt)("a",{parentName:"p",href:"http://requirejs.org/"},"RequireJS"),". This page explains\nhow to document an AMD module for JSDoc, based on the coding conventions that your module uses."),(0,o.kt)("p",null,"If you're documenting CommonJS or Node.js modules, see ",(0,o.kt)("a",{parentName:"p",href:"howto-commonjs-modules"},"CommonJS Modules")," for\ninstructions."),(0,o.kt)("h2",{id:"module-identifiers"},"Module identifiers"),(0,o.kt)("p",null,"When you document an AMD module, you'll use an ",(0,o.kt)("a",{parentName:"p",href:"tags-exports"},(0,o.kt)("inlineCode",{parentName:"a"},"@exports")," tag")," or\n",(0,o.kt)("a",{parentName:"p",href:"tags-module"},(0,o.kt)("inlineCode",{parentName:"a"},"@module")," tag")," to document the identifier that's passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," function.\nFor example, if users load the module by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"require('my/shirt', /* callback */)"),", you'll write\na JSDoc comment that contains the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"@exports my/shirt")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@module my/shirt"),". The examples below\ncan help you decide which of these tags to use."),(0,o.kt)("p",null,"If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@exports")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@module")," tag without a value, JSDoc will try to guess the correct\nmodule identifier based on the filepath."),(0,o.kt)("p",null,"When you use a JSDoc ",(0,o.kt)("a",{parentName:"p",href:"about-namepaths"},"namepath")," to refer to a module from another JSDoc comment, you must\nadd the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"module:"),". For example, if you want the documentation for the module ",(0,o.kt)("inlineCode",{parentName:"p"},"my/pants")," to\nlink to the module ",(0,o.kt)("inlineCode",{parentName:"p"},"my/shirt"),", you could use the ",(0,o.kt)("a",{parentName:"p",href:"tags-see"},(0,o.kt)("inlineCode",{parentName:"a"},"@see")," tag")," to document ",(0,o.kt)("inlineCode",{parentName:"p"},"my/pants")," as\nfollows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Pants module.\n * @module my/pants\n * @see module:my/shirt\n */\n")),(0,o.kt)("p",null,"Similarly, the namepath for each member of the module will start with ",(0,o.kt)("inlineCode",{parentName:"p"},"module:"),", followed by the\nmodule name. For example, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"my/pants")," module exports a ",(0,o.kt)("inlineCode",{parentName:"p"},"Jeans")," constructor, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Jeans")," has\nan instance method named ",(0,o.kt)("inlineCode",{parentName:"p"},"hem"),", the instance method's longname is ",(0,o.kt)("inlineCode",{parentName:"p"},"module:my/pants.Jeans#hem"),"."),(0,o.kt)("h2",{id:"function-that-returns-an-object-literal"},"Function that returns an object literal"),(0,o.kt)("p",null,"If you define your AMD module as a function that returns an object literal, use the\n",(0,o.kt)("a",{parentName:"p",href:"tags-exports"},(0,o.kt)("inlineCode",{parentName:"a"},"@exports")," tag")," to document the module's name. JSDoc will automatically detect that\nthe object's properties are members of the module."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Function that returns an object literal"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define('my/shirt', function() {\n   /**\n    * A module representing a shirt.\n    * @exports my/shirt\n    */\n    var shirt = {\n        /** The module's `color` property. */\n        color: 'black',\n\n        /**\n         * Create a new Turtleneck.\n         * @class\n         * @param {string} size - The size (`XS`, `S`, `M`, `L`, `XL`, or `XXL`).\n         */\n        Turtleneck: function(size) {\n            /** The class's `size` property. */\n            this.size = size;\n        }\n    };\n\n    return shirt;\n});\n")),(0,o.kt)("h2",{id:"function-that-returns-another-function"},"Function that returns another function"),(0,o.kt)("p",null,"If you define your module as a function that exports another function, such as a constructor, you\ncan use a standalone comment with a ",(0,o.kt)("a",{parentName:"p",href:"tags-module"},(0,o.kt)("inlineCode",{parentName:"a"},"@module")," tag")," to document the module. You can then\nuse an ",(0,o.kt)("a",{parentName:"p",href:"tags-alias"},(0,o.kt)("inlineCode",{parentName:"a"},"@alias")," tag")," to tell JSDoc that the function uses the same longname as the\nmodule."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Function that returns a constructor"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * A module representing a jacket.\n * @module my/jacket\n */\ndefine('my/jacket', function() {\n    /**\n     * Create a new jacket.\n     * @class\n     * @alias module:my/jacket\n     */\n    var Jacket = function() {\n        // ...\n    };\n\n    /** Zip up the jacket. */\n    Jacket.prototype.zip = function() {\n        // ...\n    };\n\n    return Jacket;\n});\n")),(0,o.kt)("h2",{id:"module-declared-in-a-return-statement"},"Module declared in a return statement"),(0,o.kt)("p",null,"If you declare your module object in a function's ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," statement, you can use a standalone\ncomment with a ",(0,o.kt)("a",{parentName:"p",href:"tags-module"},(0,o.kt)("inlineCode",{parentName:"a"},"@module")," tag")," to document the module. You can then add an\n",(0,o.kt)("a",{parentName:"p",href:"tags-alias"},(0,o.kt)("inlineCode",{parentName:"a"},"@alias")," tag")," to tell JSDoc that the module object has the same longname as the module."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module declared in a return statement"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Module representing a shirt.\n * @module my/shirt\n */\n\ndefine('my/shirt', function() {\n    // Do setup work here.\n\n    return /** @alias module:my/shirt */ {\n        /** Color. */\n        color: 'black',\n        /** Size. */\n        size: 'unisize'\n    };\n});\n")),(0,o.kt)("h2",{id:"module-object-passed-to-a-function"},"Module object passed to a function"),(0,o.kt)("p",null,"If the module object is passed into the function that defines your module, you can document the\nmodule by adding an ",(0,o.kt)("a",{parentName:"p",href:"tags-exports"},(0,o.kt)("inlineCode",{parentName:"a"},"@exports")," tag")," to the function parameter. This pattern is\nsupported in JSDoc 3.3.0 and later."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module object passed to a function"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define('my/jacket', function(\n    /**\n     * Utility functions for jackets.\n     * @exports my/jacket\n     */\n    module) {\n\n    /**\n     * Zip up a jacket.\n     * @param {Jacket} jacket - The jacket to zip up.\n     */\n    module.zip = function(jacket) {\n        // ...\n    };\n});\n")),(0,o.kt)("h2",{id:"multiple-modules-defined-in-one-file"},"Multiple modules defined in one file"),(0,o.kt)("p",null,"If you define more than one AMD module in a single JavaScript file, use the\n",(0,o.kt)("a",{parentName:"p",href:"tags-exports"},(0,o.kt)("inlineCode",{parentName:"a"},"@exports")," tag")," to document each module object."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple AMD modules defined in one file"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// one module\ndefine('html/utils', function() {\n    /**\n     * Utility functions to ease working with DOM elements.\n     * @exports html/utils\n     */\n    var utils = {\n        /**\n         * Get the value of a property on an element.\n         * @param {HTMLElement} element - The element.\n         * @param {string} propertyName - The name of the property.\n         * @return {*} The value of the property.\n         */\n        getStyleProperty: function(element, propertyName) { }\n    };\n\n    /**\n     * Determine if an element is in the document head.\n     * @param {HTMLElement} element - The element.\n     * @return {boolean} Set to `true` if the element is in the document head,\n     * `false` otherwise.\n     */\n    utils.isInHead = function(element) { }\n\n    return utils;\n    }\n);\n\n// another module\ndefine('tag', function() {\n    /** @exports tag */\n    var tag = {\n        /**\n         * Create a new Tag.\n         * @class\n         * @param {string} tagName - The name of the tag.\n         */\n        Tag: function(tagName) {\n            // ...\n        }\n    };\n\n    return tag;\n});\n")))}p.isMDXComponent=!0}}]);