const { resolve } = require("path");

module.exports = {
  base: '/',
  title: '我的博客',
  configureWebpack: {
    resolve: {
      alias: {
        '@imgRoot': resolve("http://mufeng.web3v.work/imgs"),
      }
    }
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3'],
  },
  theme: 'vdoing',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/pages/d657ad/' },
      // {
      //   text: '前端核心',
      //   link: '/nav1/',
      //   // items: [
      //   //   { text: 'HTML', link: '/pages/6610c3/' },
      //   // ]
      // },
      { text: 'C++', link: '/pages/e0e155/' },
      {
        text: 'Algorithm',
        link: '/pages/67419f/',
        // items: [
        //   { text: '数据结构与算法', link: '/pages/67419f/' },
        //   { text: '设计模式', link: '/pages/b9afd2/' },
        // ]
      },
      { text: 'Common', link: '/nav7/' },
      { text: 'Favorites', link: '/pages/3894e9/' },
      { text: 'Github', link: 'https://github.com/' },
    ],

    searchMaxSuggestions: 10,

    category: false,
    tag: false,
    archive: false,
    pageStyle: 'line',
    contentBgStyle: 6,
    sidebar: {
      mode: 'structuring',
      collapsable: true,
    },
    sidebarDepth: 4,
    updateBar: {
      showToArticle: false,
    },
    footer: {
      createYear: 2022,
      copyrightInfo: `<a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE">MIT Licence</a>`
    },
    author: {
      name: '行尸走肉',
      link: 'https://github.com/',
    },

    lastUpdated: '上次更新',
  },
  plugins: [
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      }
    ],
    [
      'one-click-copy',
      {
        copyMessage: '复制成功',
      }
    ],
    [
      'fulltext-search',
    ]
  ],
  extraWatchFiles: [
    '.vuepress/config.js'
  ],
}
