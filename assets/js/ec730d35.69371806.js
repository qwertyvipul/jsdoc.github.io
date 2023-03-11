"use strict";(self.webpackChunkjsdoc_github_io=self.webpackChunkjsdoc_github_io||[]).push([[265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,d=c["".concat(p,".").concat(y)]||c[y]||m[y]||r;return n?l.createElement(d,o(o({ref:t},s),{},{components:n})):l.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={tag:"type",description:"Document the type of an object.",related:["tags-callback.html","tags-typedef.html","tags-param.html","tags-property.html"]},o=void 0,i={unversionedId:"tags-type",id:"tags-type",title:"tags-type",description:"Document the type of an object.",source:"@site/docs/tags-type.md",sourceDirName:".",slug:"/tags-type",permalink:"/jsdoc.github.io/tags-type",draft:!1,tags:[],version:"current",frontMatter:{tag:"type",description:"Document the type of an object.",related:["tags-callback.html","tags-typedef.html","tags-param.html","tags-property.html"]},sidebar:"docsSidebar",previous:{title:"tags-tutorial",permalink:"/jsdoc.github.io/tags-tutorial"},next:{title:"tags-typedef",permalink:"/jsdoc.github.io/tags-typedef"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@type {typeName}")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The @type tag allows you to provide a type expression identifying the type of value that a symbol\nmay contain, or the type of value returned by a function. You can also include type expressions with\nmany other JSDoc tags, such as the ",(0,a.kt)("a",{parentName:"p",href:"tags-param"},"@param tag"),"."),(0,a.kt)("p",null,"A type expression can include the JSDoc namepath to a symbol (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"myNamespace.MyClass"),"); a\nbuilt-in JavaScript type (for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"); or a combination of these. You can use any\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#type-expressions"},"Google Closure Compiler type expression"),", as well as several other formats that are\nspecific to JSDoc."),(0,a.kt)("p",null,"If JSDoc determines that a type expression is invalid, it will display an error and stop running.\nYou can turn this error into a warning by running JSDoc with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--lenient")," option."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Full support for Google Closure Compiler-style type expressions is available\nin JSDoc 3.2 and later. Earlier versions of JSDoc included partial support for Closure Compiler type\nexpressions."),(0,a.kt)("p",null,"Each type is specified by providing a type expression, using one of the formats described below.\nWhere appropriate, JSDoc will automatically create links to the documentation for other symbols. For\nexample, ",(0,a.kt)("inlineCode",{parentName:"p"},"@type {MyClass}")," will link to the MyClass documentation if that symbol has been\ndocumented."),(0,a.kt)("table",{id:"jsdoc-types",name:"jsdoc-types"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"Type name"),(0,a.kt)("th",null,"Syntax examples"),(0,a.kt)("th",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Symbol name (name expression)"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"{boolean}\n{myNamespace.MyClass}"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Specifies the name of a symbol. If you have documented the symbol, JSDoc creates a link to the documentation for that symbol."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Multiple types (type union)"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* This can be a number or a boolean.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"{(number|boolean)}"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"This means a value can have one of several types, with the entire list of types enclosed in parentheses and separated by ",(0,a.kt)("code",null,"|"),"."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Arrays and objects (type applications and record types)"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* An array of MyClass instances.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"{Array.<MyClass>}\n// or:\n{MyClass[]}")),(0,a.kt)("b",null,(0,a.kt)("i",null,"* An object with string keys and number values.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"{Object.<string, number>}")),(0,a.kt)("b",null,(0,a.kt)("i",null,"* An object called 'myObj' with properties 'a' (a number), 'b' (a string) and 'c' (any type).")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"{{a: number, b: string, c}} myObj\n// or:\n{Object} myObj\n{number} myObj.a\n{string} myObj.b\n{*} myObj.c"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"JSDoc supports Closure Compiler's syntax for defining array and object types."),(0,a.kt)("p",null,"You can also indicate an array by appending ",(0,a.kt)("code",null,"[]")," to the type that is contained in the array. For example, the expression ",(0,a.kt)("code",null,"string[]")," indicates an array of strings."),(0,a.kt)("p",null,"For objects that have a known set of properties, you can use Closure Compiler's syntax for documenting record types. You can document each property individually, which enables you to provide more detailed information about each property."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Nullable type"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* A number or null.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"{?number}"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"This indicates that the type is either the specified type, or ",(0,a.kt)("code",null,"null"),"."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Non-nullable type"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* A number, but never null.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"{!number}"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Indicates that the value is of the specified type, but cannot be ",(0,a.kt)("code",null,"null"),"."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Variable number of that type"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* This function accepts a variable number of numeric parameters.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"@param {...number} num"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Indicates that the function accepts a variable number of parameters, and specifies a type for the parameters. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"/**\n* Returns the sum of all numbers passed to the function.\n* @param {...number} num A positive or negative number\n*/\nfunction sum(num) {\n    var i=0, n=arguments.length, t=0;\n    for (; i < n; i++) {\n        t += arguments[i];\n    }\n    return t;\n}")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Optional parameter"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* An optional parameter named foo.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"@param {number} [foo]\n// or:\n@param {number=} foo")),(0,a.kt)("b",null,(0,a.kt)("i",null,"* An optional parameter foo with default value 1.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"@param {number} [foo=1]"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Indicates that the parameter is optional. When using JSDoc's syntax for optional parameters, you can also indicate the value that will be used if a parameter is omitted."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Callbacks"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"/**\n* @callback myCallback\n* @param {number} x - ...\n* /\n","\n/** @type {myCallback} */\nvar cb;\n"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"Document a callback using the ",(0,a.kt)("a",{href:"tags-callback"},"@callback"),' tag. The syntax is identical to the @typedef tag, except that a callback\'s type is always "function."'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Type definitions"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("i",null,"* Documenting a type with properties 'id', 'name', 'age'.")),(0,a.kt)("pre",null,(0,a.kt)("code",null,"/**\n* @typedef PropertiesHash\n* @type {object}\n* @property {string} id - an ID.\n* @property {string} name - your name.\n* @property {number} age - your age.\n*/ \n","\n/** @type {PropertiesHash} */\nvar props;\n"))),(0,a.kt)("td",null,(0,a.kt)("p",null,"You can document complex types using the ",(0,a.kt)("a",{href:"tags-typedef"},"@typedef")," tag, then refer to the type definition elsewhere in your documentation.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {(string|Array.<string>)} */\nvar foo;\n/** @type {number} */\nvar bar = 1;\n")),(0,a.kt)("p",null,"In many cases, you can include a type expression as part of another tag, rather than including a\nseparate @type tag in your JSDoc comment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type expressions can accompany many tags.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @type {number}\n * @const\n */\nvar FOO = 1;\n\n// same as:\n\n/** @const {number} */\nvar FOO = 1;\n")))}m.isMDXComponent=!0}}]);