import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "離塵指引．卷之一．試結丹",
  description: "咒法分析與真言運行",
  base: "/compiler_tutorial/",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/mros/compiler_tutorial" },
    ],
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
            link: "/零．一版/音界咒零．一版設計與定義",
          },
          {
            text: "編譯目標：精五門（RISC-V）真言極簡子集",
            link: "/零．一版/編譯目標：精五門（RISC-V）真言極簡子集",
          },
          {
            text: "分詞",
            link: "/零．一版/分詞",
          },
          {
            text: "剖析（語法分析）",
            link: "/零．一版/剖析（語法分析）",
          },
          {
            text: "符號檢查",
            link: "/零．一版/符號檢查",
          },
          {
            text: "精五真言生成",
            link: "/零．一版/精五真言生成",
          },
          {
            text: "優化",
            link: "/零．一版/優化",
          },
        ],
      },
      {
        text: "音界咒零．二版：極簡圖靈完備",
        items: [
          {
            text: "設計與概述",
            link: "/零．二版/設計與概述.md",
          },
          {
            text: "再遇分詞",
            link: "/零．二版/再遇分詞.md",
          },
          {
            text: "再遇剖析（一）決定算子優先級",
            link: "/零．二版/再遇剖析（一）決定算子優先級.md",
          },
          {
            text: "再遇剖析（二）組合子剖析器",
            link: "/零．二版/再遇剖析（二）組合子剖析器.md",
          },
          {
            text: "語義分析：類型檢查",
            link: "/零．二版/語義分析：類型檢查.md",
          },
          {
            text: "精五真言生成（一）施術",
            link: "/零．二版/精五真言生成（一）施術.md",
          },
        ],
      },
      {
        text: "雜項",
        items: [
          { text: "全形字體選擇", link: "/全形字體選擇" },
          {
            text: "精五組語除錯器介紹",
            link: "/雜項/精五組語除錯器介紹.md",
          },
        ],
      },
      {
        text: "用語",
        items: [
          {
            text: "用語對照",
            link: "用語對照.md",
          },
        ],
      },
    ],
  },
});
