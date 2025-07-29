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
      { text: 'Contributing', link: '/contributing' }
    ],

    sidebar: [
      {
        text: 'Meta',
        items: [
          { text: 'Contributing', link: '/contributing'}
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/hypercore-one/meta/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hypercore-one/meta' }
    ]
  }
})
