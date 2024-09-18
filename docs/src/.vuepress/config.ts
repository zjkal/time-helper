import {defineUserConfig} from "vuepress";
import {hopeTheme} from "vuepress-theme-hope";
import {viteBundler} from '@vuepress/bundler-vite'

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

