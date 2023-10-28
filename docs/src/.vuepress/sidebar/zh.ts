import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "开始",
      icon: "laptop-code",
      prefix: "getting-started/",
      children: "structure",
    },
    {
      text: "使用",
      icon: "book",
      prefix: "usage/",
      children: "structure",
    }
  ],
});
