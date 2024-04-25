import {defineUserConfig} from "vuepress";
import {hopeTheme} from "vuepress-theme-hope";

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
    theme: hopeTheme({
        plugins: {
            searchPro: true,
            // searchPro: {
            //   插件选项
            // },
        },
    }),
    markdown: {
        code: {
            lineNumbers: false
        }
    }
});
