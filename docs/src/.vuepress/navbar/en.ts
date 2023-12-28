import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/en/",
    {
        text: "Documentation",
        icon: "laptop-code",
        link: "/en/getting-started/introduction.md",
    },
    {
        text: "Changlog",
        icon: "book",
        link: "/en/appendices/chang-log.md",
    },
    {
        text: "Code Repository",
        icon: "cube",
        children: [
            {
                text: "Github",
                link: "https://github.com/zjkal/time-helper"
            },
            {
                text: "Gitee",
                link: "https://gitee.com/zjkal/time-helper"
            }
        ],
    },
]);
