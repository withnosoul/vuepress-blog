(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{356:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"概览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("node")])]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm"),n("OutboundLink")],1),s._v(": node 的版本管理器")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://docs.npmjs.com/cli/v8/commands/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nrm"),n("OutboundLink")],1),s._v(": npm 的源管理器，可以用来方便的切换 npm 源")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cnpm/cnpm",target:"_blank",rel:"noopener noreferrer"}},[s._v("cnpm"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://classic.yarnpkg.com/lang/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),n("OutboundLink")],1),s._v(": npm的升级版")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pnpm"),n("OutboundLink")],1),s._v(": npm 和 yarn 的升级版")]),s._v(" "),n("li",[n("a",{attrs:{href:""}},[s._v("npx")]),s._v(": 一个 npm 的包执行器。我们可以使用 npx 来执行各种命令。")])]),s._v(" "),n("h2",{attrs:{id:"npm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),n("h3",{attrs:{id:"npm-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-常用命令"}},[s._v("#")]),s._v(" npm 常用命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化项目")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据 package.json 下载依赖")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本机 npm 的版本")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" package_name\n--save, "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v("\n--save-dev, "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n--global, "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" update package_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 npm 全局的配置（C:\\Users\\username\\.npmrc）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全局安装的一级包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--depth")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个包的最新版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view package_name version\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看某个包的所有发布版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view package_name versions\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看安装模块的安装路径")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" root "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev/build/test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h3",{attrs:{id:"npm-高级命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-高级命令"}},[s._v("#")]),s._v(" npm 高级命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"yarn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" yarn")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" remove\n\nn\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"pnpm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pnpm"}},[s._v("#")]),s._v(" pnpm")]),s._v(" "),n("p",[n("strong",[s._v("安装")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"nvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" nvm")]),s._v(" "),n("p",[n("strong",[s._v("安装")])]),s._v(" "),n("p",[s._v("到 "),n("code",[s._v("github")]),s._v(" 上下载 .exe 文件进行安装即可，和安装 "),n("code",[s._v("node")]),s._v(" 一样。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要以管理员运行 CMD")]),s._v("\nnvm root\nnvm off\nnvm on\nnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nnvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" latest\nnvm uninstall "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nnvm list\nnvm list available\nnvm use "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"nrm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nrm"}},[s._v("#")]),s._v(" nrm")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" nrm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可选的源")]),s._v("\nnrm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换源")]),s._v("\nnrm use taobao\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加自定义的源")]),s._v("\nnrm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" registry_name https://"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除源")]),s._v("\nnrm del registry_name\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试源")]),s._v("\nnrm "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" registry_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"npx-和-npm-之间的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npx-和-npm-之间的区别"}},[s._v("#")]),s._v(" npx 和 npm 之间的区别")]),s._v(" "),n("p",[s._v("主要特点：")]),s._v(" "),n("ol",[n("li",[s._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),s._v(" "),n("li",[s._v("可以执行依赖包中的命令，安装完成自动运行。")]),s._v(" "),n("li",[s._v("自动加载node_modules中依赖包，不用指定$PATH。")]),s._v(" "),n("li",[s._v("可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);