import {defineUserConfig} from "vuepress";
//import {searchProPlugin} from "vuepress-plugin-search-pro";
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
    theme,
    plugins: [
        // searchProPlugin({
        //     // 索引全部内容
        //     indexContent: true,
        // }),
    ],
    markdown: {
        code: {
            lineNumbers: false
        }
    }

    // Enable it with pwa
    // shouldPrefetch: false,
});
