import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/en/",
    {
        text: "使用文档",
        icon: "laptop-code",
        link: "/getting-started/introduction.md",
    },
    {
        text: "更新日志",
        icon: "book",
        link: "/appendices/chang-log.md",
    },
    {
        text: "支持作者",
        icon: "heart",
        link: "https://zjkal.cn/sponsor/",
    },
]);
