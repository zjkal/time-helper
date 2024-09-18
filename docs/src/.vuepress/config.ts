import {defineUserConfig, viteBundler} from "vuepress";
import {hopeTheme} from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "TimeHelper手册",
            description: "",
        },
        "/en/": {
            lang: "en-US",
            title: "TimeHelper Docs",
            description: "",
        },
    },
    theme: hopeTheme({}),
    bundler: viteBundler({}),
    markdown: {
        code: {
            lineNumbers: false
        }
    }
});

