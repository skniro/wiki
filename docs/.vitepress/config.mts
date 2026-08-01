import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Skniro Wiki",
  description: "Skniro Wiki",
  locales: {
  root: {
    label: 'English',
    lang: 'en_us'
  },
  fr_fr: {
    label: 'French',
    lang: 'fr_fr'
  },
  zh_cn: {
    label: '简体中文',
    lang: 'zh_cn'
  }
},
  themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
    nav: [
          { text: 'Home', link: 'https://www.skniro.org' },
          { text: 'Project', link: 'https://www.skniro.org/project.html' },
          { text: 'Mod LifeCycle', link: 'https://lifecycle.skniro.org' },
          { text: 'Wiki', link: '/en_us' },
    ],
          markdown: {
            languageAlias: {
              'svg': 'html',
              'gradle': 'txt'
            }
          },
    sidebar: {
      '/': generateSidebar({
        documentRootPath: '/docs',
        collapsed: true,
        collapseDepth:2,
        capitalizeFirst: true,
        excludeByGlobPattern: [
          'fr_fr/**',
          'zh_cn/**'
        ]
      }),

      '/fr_fr/': generateSidebar({
        documentRootPath: '/docs/',
        scanStartPath:'/fr_fr/', 
        collapsed: true,
        collapseDepth:2,
        capitalizeFirst: true
      }),

      '/zh_cn/': generateSidebar({
        documentRootPath: '/docs/',
        scanStartPath:'/zh_cn/', 
        collapsed: true,
        collapseDepth:2,
        capitalizeFirst: true
      })
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/skniro' },
        { icon: 'discord', link: 'https://discord.com/invite/pDaMyHDfBy' }
    ]
  },
    lastUpdated: true,
    head: [
        [
            'script',
            {
                async: '',
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9004356343429206',
                crossorigin: 'anonymous'
            }
        ],
        [
            'script', {},
        `
            window['addAds'] = function(){
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        `
        ],
    ],
    vite: {
        resolve: {
            alias: {
                '@components': fileURLToPath(new URL('../../components', import.meta.url))
            }
        }
    }
})
