module.exports = {
  title: "yuemeng",
  description: "Truelove always keeps one upward.",
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.svg" }],
    ["script", { src: "/scripts/scrollToHash.js" }],
  ],
  themeConfig: {
    logo: "/favicon.svg",
    sidebarDepth: 3,
    smoothScroll: true,
    // INFO 导航栏设置
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端技术专题",
        link: "/topics/",
        items: [
          {
            text: "Javascript",
            link: "/topics/js/",
          },
          {
            text: "CSS",
            link: "/topics/css/",
          },
          {
            text: "Typescript",
            link: "/topics/ts/",
          },
          {
            text: "Vue.js",
            link: "/topics/vue/",
          },
          {
            text: "浏览器",
            link: "/topics/broswer/",
          },
        ],
      },
      { text: "算法", link: "/algorithm/" },
      {
        text: "其他专题",
        link: "/others/",
        items: [
          {
            text: "Node.js",
            link: "/others/node/",
          },
          {
            text: "Electron",
            link: "/others/electron/",
          },
          {
            text: "Nest.js",
            link: "/others/nest/",
          },
        ],
      },
      { text: "工具", link: "/tools/" },
      {
        text: "随想",
        link: "/thoughts/",
      },
    ],
    // INFO 侧边栏设置
    sidebar: {
      "/topics/js/": [
        "",
        "basic",
        "object",
        "array",
        "function",
        "class",
        "module",
        "api",
        "iterator",
        "async",
      ],
      "/topics/vue/": [
        "",
        "basic",
        "router",
        "store",
        "theory",
        "cli",
        "tools",
        "other",
        "vue3",
      ],
      "/topics/broswer/": [""],
      "/tools/": ["", "regexp"],
      "/thoughts/": [""],
    },
  },
};
