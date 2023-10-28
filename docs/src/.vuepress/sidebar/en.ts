import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Demo1",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs1",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
