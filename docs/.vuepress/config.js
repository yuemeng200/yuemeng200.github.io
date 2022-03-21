module.exports = {
  title: "yuemeng",
  description: "Truelove always keeps one upward.",
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.svg" }],
    ["script", { src: "/scripts/scrollToHash.js" }],
  ],
  themeConfig: {
    logo: "/favicon.svg",
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
            text: "vue.js",
            link: "/topics/vue/",
          },
          {
            text: "浏览器",
            link: "/topics/broswer/",
          },
        ],
      },
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
            link: "/others/electron",
          },
          {
            text: "Nest.js",
            link: "/others/nest",
          },
        ],
      },
      { text: "工具", link: "/tools/" },
      { text: "算法", link: "/algorithm/" },
      {
        text: "随想",
        link: "/thoughts",
      },
    ],
    sidebar: {
      "/topics/vue/": [""],
      "/topics/broswer/": [""],
      "/tools/": ["", "regexp"],
      "/thoughts/": [""],
    },
    smoothScroll: true,
  },
};
