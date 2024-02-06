import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar";
import {enSidebar, zhSidebar} from "./sidebar";

const footer: string = "Copyright © 2024 <a href='https://github.com/zjkal' target='_blank' style='color:var(--dark-grey);font-weight: normal'>zjkal</a> | <a href='https://github.com/zjkal/time-helper/blob/main/LICENSE' target='_blank' style='color:var(--dark-grey);font-weight: normal'>MIT LICENSE</a>"

export default hopeTheme({
    hostname: "https://time.0x1.site",
    author: {
        name: "zjkal",
        url: "https://github.com/zjkal",
    },
    iconAssets: "fontawesome-with-brands",
    logo: "/logo.svg",
    repo: "zjkal/time-helper",
    repoDisplay: false,
    docsDir: "docs/src",
    locales: {
        "/": {
            // navbar
            navbar: zhNavbar,
            // sidebar
            sidebar: zhSidebar,
            displayFooter: true,
            copyright: "",
            footer: footer,
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },

        /**
         * English locale config
         */
        "/en/": {
            // navbar
            navbar: enNavbar,
            // sidebar
            sidebar: enSidebar,
            displayFooter: true,
            copyright: "",
            footer: footer,
            // page meta
            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
    },

    plugins: {
        // All features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
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
            revealJs: {
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
    },
});
