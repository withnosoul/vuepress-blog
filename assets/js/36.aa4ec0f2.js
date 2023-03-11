(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{354:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"工程化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[t._v("#")]),t._v(" 工程化")]),t._v(" "),s("h2",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),s("h3",{attrs:{id:"cjs-commonjs-【重点】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cjs-commonjs-【重点】"}},[t._v("#")]),t._v(" CJS (CommonJS)【重点】")]),t._v(" "),s("p",[s("strong",[t._v("特点：")])]),t._v(" "),s("ul",[s("li",[t._v("所有代码都运行在模块作用域内，不会污染全局作用域；")]),t._v(" "),s("li",[t._v("模块加载的顺序，按照其在代码中引入的顺序；")]),t._v(" "),s("li",[t._v("模块可以多次加载，但是只会在第一次加载时运行依次，然后运行结果会被缓存，之后不论加载几次，都会直接读取缓存。清楚缓存后方可再次运行；")]),t._v(" "),s("li",[t._v("module.exports 属性输出的是值的拷贝，一旦输出操作完成，模块内发生的任何变化不会影响一输出的值；")]),t._v(" "),s("li",[t._v("注意 module.exports 和 exports 的用法以及区别；")])]),t._v(" "),s("h3",{attrs:{id:"esm【重点】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esm【重点】"}},[t._v("#")]),t._v(" ESM【重点】")]),t._v(" "),s("p",[s("strong",[t._v("特点：")])]),t._v(" "),s("ul",[s("li",[t._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；")]),t._v(" "),s("li",[t._v("静态化，编译时就确定模块之间的关系，每个模块的输入和输出变量也是确定的；")]),t._v(" "),s("li",[t._v("tree shaking")])]),t._v(" "),s("p",[t._v("静态页面使用"),s("code",[t._v('<script type="module" src=""><\/script>')]),t._v("引入ESM文件，浏览器是可以解析的；")]),t._v(" "),s("p",[t._v("但引入CommonJS文件，浏览器是不能解析的。（在 Node 环境下运行是可以 CommonJS 文件）")]),t._v(" "),s("h3",{attrs:{id:"umd【重点】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#umd【重点】"}},[t._v("#")]),t._v(" UMD【重点】")]),t._v(" "),s("p",[t._v("UMD 叫做通用模块定义规范，全称为："),s("code",[t._v("Universal Module Definition")]),t._v("。")]),t._v(" "),s("p",[t._v("它可以通过运行编译时让同一个代码模块在使用 CommonJS、CMD 甚至是 AMD 的项目中运行。\n这样就使得 JavaScript 包运行在浏览器端、服务区端甚至是 APP 端都只需要遵守同一个写法就行了。")]),t._v(" "),s("h3",{attrs:{id:"amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),s("p",[t._v("AMD规范，全称为："),s("code",[t._v("Asynchronous Module Definition")]),t._v("。")]),t._v(" "),s("p",[t._v("由于 CommonJS 是作用于服务端的，是同步加载。这个放到浏览器环境中显然就不太合适了，AMD 规范就是解决这一问题的。")]),t._v(" "),s("p",[t._v("目前，我们只有知道这个是异步加载即可。")]),t._v(" "),s("p",[t._v("想了解更多可以看一下 require.js。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数是导入的模块，第2个参数为函数，函数形参是导入模块的引用。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对外暴露的内容")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载模块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),s("p",[t._v("CMD规范，全称为："),s("code",[t._v("Common Module Definition")]),t._v("。综合了 CommonJS 和 AMD 的特点。")]),t._v(" "),s("p",[t._v("CMD 规范和 AMD 规范的不同指出：")]),t._v(" "),s("ul",[s("li",[t._v("AMD 需要异步加载模块，而 CMD 可以同步可以异步；")]),t._v(" "),s("li",[t._v("CMD 推崇依赖就近，AMD 推崇依赖前置；")])]),t._v(" "),s("blockquote",[s("p",[t._v("【CMD 没接触过】")])]),t._v(" "),s("h2",{attrs:{id:"组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),s("h2",{attrs:{id:"others"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" others")]),t._v(" "),s("ul",[s("li",[t._v("IIFE：自执行函数，可通过 "),s("code",[t._v("<script>")]),t._v(" 标签加载")]),t._v(" "),s("li",[t._v("AMD：通过 requireJS 加载")]),t._v(" "),s("li",[t._v("CommonJS：Node 默认的模块规范，可通过 webpack 加载")]),t._v(" "),s("li",[t._v("UMD：兼容 IIFE，AMD，CJS 三种模块规范")]),t._v(" "),s("li",[t._v("ESM：ES2015 Module 规范，可用 webpack 和 rollup 加载")])]),t._v(" "),s("p",[s("strong",[t._v("在开发应用时使用 Webpack，开发库时使用 Rollup。")])]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_42397257/article/details/105842633",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS模块化浅谈【CommonJS、AMD、CMD、UMD、ESM】"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903544756109319",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tree-Shaking性能优化实践 - 原理篇"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);