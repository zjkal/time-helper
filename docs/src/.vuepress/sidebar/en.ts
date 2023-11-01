import {sidebar} from "vuepress-theme-hope";

export const enSidebar = sidebar({
    "/en/": [
        {
            text: "Getting Started",
            icon: "rainbow",
            prefix: "getting-started/",
            children: "structure",
        },
        {
            text: "Usage",
            icon: "laptop-code",
            prefix: "usage/",
            children: "structure",
        },
        {
            text: "Appendices",
            icon: "book",
            prefix: "appendices/",
            children: "structure",
        }
    ],
});
