import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "離塵指引．卷之一．試結丹",
  description: "咒法分析與真言運行",
  base: "/compiler_tutorial/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "修行", link: "/大品天仙訣之臆想" },
    ],

    sidebar: [
      {
        text: "緣起",
        items: [
          { text: "大品天仙訣之臆想", link: "/大品天仙訣之臆想" },
          { text: "序・去往新世界", link: "/序・去往新世界" },
          { text: "離塵第一步：自舉", link: "/離塵第一步：自舉" },
        ],
      },
      {
        text: "金丹概覽",
        items: [
          { text: "什麼語言容易自舉", link: "/什麼語言容易自舉" },
          {
            text: "結丹流程概覽（通用編譯流程）",
            link: "/結丹流程概覽（通用編譯流程）",
          },
        ],
      },
      {
        text: "音界咒零．一版",
        items: [
          {
            text: "音界咒零．一版設計與定義",
            link: "/音界咒零．一版設計與定義",
          },
          { text: "全形字體選擇", link: "/全形字體選擇" },
          {
            text: "零．一版編譯目標：精五門（RISC-V）真言極簡子集",
            link: "/零．一版編譯目標：精五門（RISC-V）真言極簡子集",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
