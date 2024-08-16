import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "離塵指引．卷之一．試結丹",
  description: "咒法分析與真言運行",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "修行", link: "/大品天仙訣之臆想" },
    ],

    sidebar: [
      {
        text: "緣起",
        items: [{ text: "大品天仙訣之臆想", link: "/大品天仙訣之臆想" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
