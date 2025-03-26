import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

//一些多语言通用配置
const commonLocales: object = {
    displayFooter: true,
    copyright: "",
    contributors: false,//隐藏页面的"贡献者"Header
    footer: "MIT Licensed | " +
        "Copyright © 2024 <a href='https://github.com/zjkal' target='_blank' style='font-weight: normal'>zjkal</a> | " +
        "Powered by <a href='https://vercel.com/' target='_blank' style='font-weight: normal'>Vercel</a> | " +
        "Built with <a href='https://github.com/vuejs/vuepress' target='_blank' style='font-weight: normal'>VuePress</a> | " +
        "Theme by <a href='https://github.com/vuepress-theme-hope/vuepress-theme-hope' target='_blank' style='font-weight: normal'>Hope</a> | " +
        "Sponsored by <a href='https://www.jetbrains.com/' target='_blank' style='font-weight: normal'>JetBrains</a> | " +
        "CDN by <a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral' target='_blank'><img src='https://cdn.0x1.site/upyun.png' alt='upyun' style='vertical-align: middle;width: 60px'></a>"
}

export default hopeTheme({
    hostname: "https://time.0x1.site",
    author: {
        name: "zjkal",
        url: "https://github.com/zjkal",
    },
    logo: "https://cdn.0x1.site/logo-time-helper.svg",
    repo: "zjkal/time-helper",
    repoDisplay: false,
    docsDir: "docs/src",
    locales: {
        "/": {
            ...commonLocales,
            // navbar
            navbar: zhNavbar,
            // sidebar
            sidebar: zhSidebar,
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },

        /**
         * English locale config
         */
        "/en/": {
            ...commonLocales,
            // navbar
            navbar: enNavbar,
            // sidebar
            sidebar: enSidebar,
            // page meta
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
    },
    markdown: {
        align: true,
        attrs: true,
        codeTabs: true,
        demo: true,
        figure: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        playground: {
            presets: ["ts", "vue"],
        },

        // install reveal.js before enabling it
        revealjs: {
            plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        stylize: [
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
    },

    plugins: {
        icon: {
            assets: "fontawesome-with-brands",
        },
        slimsearch: true,
        comment: {
            provider: "Giscus",
            repo: "zjkal/time-helper",
            repoId: "R_kgDOH4BKSg",
            category: "Announcements",
            categoryId: "DIC_kwDOH4BKSs4CRG_O",
            inputPosition: "top",
        }
    },
});
