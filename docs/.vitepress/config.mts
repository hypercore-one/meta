import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/meta/',
  title: "Hypercore One Meta",
  description: "Hypercore One Records & Governance Documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Documentation', link: '/' },
      { text: 'Writing', link: '/markdown' }
    ],

    sidebar: [
      {
        text: 'Meta'
      },
      {
        text: 'Writing',
        items: [
          { text: 'Contributing', link: '/contributing'},
          { text: 'Markdown Examples', link: '/markdown' },
          { text: 'Frontmatter Examples', link: '/frontmatter' }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/hypercore-one/meta/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/meta' }
    ]
  }
})
