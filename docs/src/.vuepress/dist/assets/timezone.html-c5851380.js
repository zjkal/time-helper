import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c,a as n,b as t,d as i,f as p}from"./app-ca05fde7.js";const r={},l=p(`<h1 id="🍎-时区相关" tabindex="-1"><a class="header-anchor" href="#🍎-时区相关" aria-hidden="true">#</a> 🍎 时区相关</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>主要提供获取不同时区的时间和转换不同时区的时间的方法</p></div><h2 id="timezoneformat" tabindex="-1"><a class="header-anchor" href="#timezoneformat" aria-hidden="true">#</a> timezoneFormat()</h2><h3 id="时区转换" tabindex="-1"><a class="header-anchor" href="#时区转换" aria-hidden="true">#</a> 时区转换</h3><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">toTimezone</td><td style="text-align:center;">目标时区</td><td style="text-align:center;">必须</td></tr><tr><td style="text-align:center;">fromTimezone</td><td style="text-align:center;">原时区</td><td style="text-align:center;">可选, 默认为当前PHP运行环境所设置的时区</td></tr><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意格式的时间字符串或时间戳</td><td style="text-align:center;">可选, 默认为当前时间</td></tr><tr><td style="text-align:center;">format</td><td style="text-align:center;">日期格式,用法与系统函数date()的一致</td><td style="text-align:center;">可选, 默认为Y-m-d H:i:s</td></tr></tbody></table><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><blockquote><p>返回值为目标时区的时间字符串</p></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 将中国时区的指定时间转换为伦敦时间 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">timezoneFormat</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Europe/London&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Asia/Shanghai&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2023-8-5 19:16:43&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;H:i:s&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 11:16:43</span>

<span class="token comment">/* 获取当前洛杉矶的时间 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">timezoneFormat</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;America/Los_Angeles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 04:16:43</span>

<span class="token comment">/* 将时间戳转换为伦敦时间 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">timezoneFormat</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Europe/London&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">1692097543</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 11:19:03</span>
</code></pre></div>`,10),d={class:"hint-container info"},h=n("p",{class:"hint-container-title"},"相关信息",-1),u={href:"https://www.php.net/manual/zh/timezones.php",target:"_blank",rel:"noopener noreferrer"};function m(k,g){const e=s("ExternalLinkIcon");return o(),c("div",null,[l,n("div",d,[h,n("p",null,[t("支持时区列表请参考"),n("a",u,[t("PHP支持的时区列表"),i(e)])])])])}const _=a(r,[["render",m],["__file","timezone.html.vue"]]);export{_ as default};