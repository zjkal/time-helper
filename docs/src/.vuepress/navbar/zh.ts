import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
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
        text: "代码仓库",
        icon: "cube",
        children: [
            {
                text: "Github",
                link: "https://github.com/zjkal/time-helper"
            },
            {
                text: "Gitee",
                link: "https://gitee.com/zjkal/time-helper"
            },
            {
                text: "GitCode",
                link: "https://gitcode.com/zjkal/time-helper"
            }
        ],
    },
]);
