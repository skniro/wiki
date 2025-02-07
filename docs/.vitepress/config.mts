import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Skniro Wiki",
  description: "Skniro Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
          { text: 'Home', link: 'https://www.skniro.org' },
          { text: 'Project', link: 'https://www.skniro.org/project.html' },
          { text: 'Mod LifeCycle', link: 'https://lifecycle.skniro.org' },
          { text: 'Wiki', link: '/' },
    ],
          markdown: {
            languageAlias: {
              'svg': 'html',
              'gradle': 'txt'
            }
          },

        sidebar: generateSidebar({
           documentRootPath: '/docs/',
           collapsed: false,
           capitalizeFirst: true
           }),

    socialLinks: [
        { icon: 'github', link: 'https://github.com/skniro' },
        { icon: 'discord', link: 'https://discord.com/invite/pDaMyHDfBy' }
    ]
  },
  lastUpdated: true
})
