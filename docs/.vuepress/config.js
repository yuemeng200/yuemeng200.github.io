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
        text: "前端专题",
        link: "/topics",
        items: [
          {
            text: "vue原理",
            link: "/topics/vue/",
          },
          {
            text: "浏览器相关",
            link: "/topics/broswer/",
          },
        ],
      },
      { text: "工具", link: "/tools/" },
      {
        text: "随想",
        link: "/thoughts",
        items: [
          {
            text: "2022",
            link: "/thoughts/2022/",
          },
        ],
      },
    ],
    sidebar: {
      "/topics/vue/": [""],
      "/topics/broswer/": [""],
      "/tools/": ["", "regexp"],
      "/thoughts/2022/": [""],
    },
    smoothScroll: true,
  },
};
