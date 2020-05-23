[webpack4.0](https://webpack.js.org/) + [Vue2.6](https://cn.vuejs.org/) + [Vuex](https://vuex.vuejs.org/zh/) + [Vue-Router](https://router.vuejs.org/zh/)

# 工程指南
1. npm install
2. npm run dev
3. npm run build

# 工程项目结构
```
├─.babelrc       // babel 配置
├─.eslintrc.js   // eslint 配置
├─.gitignore     // git 忽略
├─.postcssrc.js  // postcss 配置
├─.prettierrc.js // prettierrc 配置
├─package-lock.json
├─package.json   // 项目配置
├─readme.md      // 项目指南
├─template
|    └index.html // 打包入口html文件
├─static         // 项目静态资源（如iconfont等在html可导入等资源）
├─src
|  ├─index.js    // 打包入口js文件
|  ├─index.vue   // 入口js文件加载的入口vue文件
|  ├─store
|  |   └index.js // vuex入口文件
|  ├─router
|  |   └index.js // vue-router入口文件
|  ├─pages
|  |   ├─a.vue
|  |   ├─b.vue
|  |   └...      // 具体路由页面
|  ├─common
|  |   ├─js      // 公共js文件
|  |   | ├─index.js
|  |   | └request.js
|  |   ├─css     // 公共css文件
|  |   |  ├─index.scss
|  |   |  └normalize.scss
|  ├─assets      // 项目静态资源（如路由页面引入的图片资源）
├─dist           // 打包后文件夹
├─build          // 打包脚本
|   ├─webpack.common.js
|   ├─webpack.dev.js
|   └webpack.prod.js
└.vscode          // 项目vscode统一代码风格设置
    └settings.json
```