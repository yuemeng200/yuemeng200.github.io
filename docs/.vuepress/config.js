module.exports = {
  title: 'yuemeng',
  description: '回忆录',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['script', { src: '/scripts/scrollToHash.js' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'v1.x',
        link:
          'https://github.com/nklayman/vue-cli-plugin-electron-builder/tree/v1'
      },
    ],
    sidebar: {
      '/guide/': [
        '',
        'guide',
        'configuration',
        'recipes',
        'security',
        'testingAndDebugging',
        'commonIssues'
      ]
    },
    docsDir: 'docs',
  }
}
