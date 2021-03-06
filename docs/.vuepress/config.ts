import { defineConfig } from "vuepress/config";
export default defineConfig({
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
    lastUpdated: "上次更新",
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
      {
        text: "算法",
        link: "/algorithm/",
        items: [
          {
            text: "题解",
            link: "/algorithm/leetcode/",
          },
          {
            text: "总结",
            link: "/algorithm/summary/",
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
            text: "rust",
            link: "/others/rust/",
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
      {
        text: "计算机科学",
        link: "/cs/",
        items: [
          {
            text: "编译原理",
            link: "/cs/cp/",
          },
          {
            text: "操作系统",
            link: "/cs/os/",
          },
          {
            text: "计算机网络",
            link: "/cs/cn",
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
        "1-basic",
        "2-object",
        "3-array",
        "4-function",
        "5-class",
        "6-module",
        "7-iterator",
        "8-async",
        "9-meta",
      ],
      "/topics/vue/": [
        "",
        "1-basic",
        "2-router",
        "3-store",
        "4-theory",
        "5-cli",
        "6-tools",
        "7-other",
        "8-vue3",
        "9-vite",
      ],
      "/topics/broswer/": [
        "",
        "1-cross-origin",
        "2-cache",
        "3-security",
        "4-storage",
        "5-dom",
      ],
      "/topics/css/": ["", "1-selector", "2-display", "3-box-model", "4-theme"],
      "/others/rust/": ["", "1-basic", "2-owners-ship", "3-datatype"],
      "/algorithm/leetcode/": [
        "",
        "1-linked-list",
        "2-array",
        "3-tree",
        "4-graph",
        "5-bits",
        "6-dp",
        "7-backtrack",
        "8-induction",
        "9-binary-search",
        "10-geometry",
        '11-bigdata',
        '12-regex',
        '13-greedy',
        '14-stack-and-queue',
      ],
      "/algorithm/summary/": ["", "1-dp"],
      "/cs/cp": ["", "cp"],
      "/tools/": ["", "regexp"],
      "/thoughts/": [""],
    },
  },
});
