module.exports = {
  lang: 'zh-CN',
  title: '极客营前端基础教程',
  description: '该教材仅用于极客营前端基础课程',
  themeConfig: {
    logo: 'http://www.igeekhome.com/Public/Home/default/bundles/frontend/images/header_logo.png',
    navbar: [
      // NavbarItem
      {
        text: 'Html',
        link: '/html', 
        children: [
          '/html',
        ]
      },
      // NavbarGroup
      {
        text: 'Css',
        link: '/css',
      },
      {
        text: 'JavaScript',
        link: '/javascript',
        children: [
          {
            text: '入门 ',
            link: '/javascript/basic'
          },
          {
            text: '数据类型 ',
            link: '/javascript/types'
          },
          {
            text: '标准库',
            link: '/javascript/stdlib'
          }
        ]
      },
    ],
    sidebar: {
      '/javascript/stdlib': [
        {
          text: 'JavaScript基础-标准库',
          children: [
            '/javascript/stdlib/README.md',
            '/javascript/stdlib/object.md',
            '/javascript/stdlib/attributes-object.md',
            '/javascript/stdlib/array.md',
            '/javascript/stdlib/wrapper.md',
            '/javascript/stdlib/boolean.md',
            '/javascript/stdlib/number.md',
            '/javascript/stdlib/string.md',
          ]
        },

      ]
    },
    plugins: [
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/javascript/': {
              placeholder: 'Search',
            },
          },
        },
      ],
    ],
  },
}