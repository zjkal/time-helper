import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "使用文档",
        icon: "book",
        link: "/getting-started/introduction.md",
    },
    {
        text: "更新日志",
        icon: "book",
        link: "https://theme-hope.vuejs.press/",
    },
    {
        text: "支持作者",
        icon: "book",
        link: "https://zjkal.cn/sponsor/",
    },
]);
