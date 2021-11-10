module.exports = {
    title: 'Neptune Blog',
    description: 'Ignoring game update restrictions, using Neptune to unlock more hidden functions of the creator.',
    theme: 'reco',
    base:'/',
    themeConfig: {
        startYear: '2018',
        author: 'NeptuneDev',
        codeTheme: 'okaidia',
        subSidebar: 'auto',
        type: 'blog',
        authorAvatar: '/GlobalAvatar.png',
        permalink: "/:year/:month/:day/:slug",
        sidebar: {
          '/documentation/': getGuideSidebar('Guide','Sources'),
          '/zh/documentation/': getGuideSidebar('指南','资源库')
        },
        logo: '/NepLogo.png',
        locales: {
          '/': {
            selectText: 'Languages',
            label: 'English',
            ariaLabel: 'Languages',
            serviceWorker: {
              updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
              }
            },
            nav : [
              { text: 'Home', link: '/' },
              { text: 'Documentation', link: '/documentation/' },
              { text: 'Soruces', link: '/documentation/sources-introduction/' },
              { text: 'Neptune.work', link: 'https://www.neptune.work', target:'_blank' }
            ],
          },
          '/zh/': {
            selectText: '选择语言',
            label: '简体中文',
            serviceWorker: {
              updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
              }
            },
            nav : [
              { text: '主页', link: '/zh/' },
              { text: '文档', link: '/zh/documentation/' },
              { text: '资源库', link: '/zh/documentation/sources-introduction/' },
              { text: 'Neptune.work', link: 'https://www.neptune.work', target:'_blank' }
            ],
          }
        }
      },
      head: [
        ['link', { rel: 'icon', href: '/NepLogo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#1890ff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'Neptune Creator Menu Blog' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/NepBlogLogo-192.png"' }],
        ['meta', { name: 'msapplication-TileImage', content: '/NepBlogLogo-192.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#1890ff' }]
      ],
      plugins: [
        [
          '@vuepress/pwa',
          {
            serviceWorker: true,
            updatePopup: true
          }
        ],
      ],
      locales: {
        '/': {
          lang: 'en-US',
          title: 'Neptune Blog',
          description: 'Ignoring game update restrictions, using Neptune to unlock more hidden functions of the creator.',
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'Neptune 博客',
          description: '无视游戏更新限制，使用 Neptune 以解锁更多 GTA 5 原版内容制作器的隐藏功能。',
        }
      }
  }
  
  function getGuideSidebar (groupA, groupB) {
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          '',
          'guide-start',
          'guide-custom-thumbnails',
          'guide-dev-only-functions',
          'guide-ipls'
        ]
        
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'sources-introduction',
          'sources-ipls',
          'sources-gametypes'
        ]
      }
    ]
  }