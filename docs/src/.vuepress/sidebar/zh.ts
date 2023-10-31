import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            text: "开始",
            icon: "rainbow",
            prefix: "getting-started/",
            children: "structure",
        },
        {
            text: "使用",
            icon: "laptop-code",
            prefix: "usage/",
            children: "structure",
        },
        {
            text: "附录",
            icon: "book",
            prefix: "appendices/",
            children: "structure",
        }
    ],
});
