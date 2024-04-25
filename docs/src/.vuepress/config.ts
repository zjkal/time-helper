import {defineUserConfig} from "vuepress";
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
    markdown: {
        code: {
            lineNumbers: false
        }
    }
});

