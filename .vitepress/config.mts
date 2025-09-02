import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/meta/',
  title: "HyperCore One Meta",
  description: "HyperCore One Records & Governance Documents",
  rewrites: {
    'README.md': 'index.md',
    '(.*)/README.md': '(.*)/index.md'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Matrix', link: 'https://matrix.to/#/#zenon-sigs:zenon.chat' },
      { text: 'Forum', link: 'https://forum.hypercore.one/' }
    ],

    sidebar: [
      {
        text: 'Meta',
        items: [
          { text: 'README', link: '/'},
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
