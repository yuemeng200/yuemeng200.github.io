module.exports = {
  title: "yuemeng",
  description: "Truelove always keeps one upward.",
  head: [
    ["link", { rel: "shortcut icon", href: "/favicon.svg" }],
    ["script", { src: "/scripts/scrollToHash.js" }],
  ],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端专题",
        link: "/Topics",
        items: [
          {
            text: "vue原理",
            link: "/Topics/vue/",
          },
          {
            text: "浏览器相关",
            link: "/Topics/broswer/",
          },
        ],
      },
      { text: "工具", link: "/Tools/" },
      {
        text: "随想",
        link: "/Thoughts",
        items: [
          {
            text: "2022",
            link: "/Thoughts/2022/",
          },
        ],
      },
    ],
    sidebar: {
      "/Topics/vue/": [""],
      "/Topics/broswer/": [""],
      "/Tools/": ["", "regexp"],
      "/Thoughts/2022/": [""],
    },
  },
};
