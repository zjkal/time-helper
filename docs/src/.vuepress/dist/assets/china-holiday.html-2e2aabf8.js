import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,f as n}from"./app-ca05fde7.js";const s={},c=n(`<h1 id="🍏-判断国内节假日" tabindex="-1"><a class="header-anchor" href="#🍏-判断国内节假日" aria-hidden="true">#</a> 🍏 判断国内节假日</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>专门针对国内的节假日进行判断, 目前包含<code>2020年-2024年</code>的节假日数据, 后续也会持续更新. 为了便于维护和使用, 另起一个类<code>ChinaHoliday</code></p></div><h2 id="isworkday" tabindex="-1"><a class="header-anchor" href="#isworkday" aria-hidden="true">#</a> isWorkday()</h2><h3 id="判断日期是否为国内的工作日" tabindex="-1"><a class="header-anchor" href="#判断日期是否为国内的工作日" aria-hidden="true">#</a> 判断日期是否为国内的工作日</h3><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意格式的时间字符串或时间戳</td><td style="text-align:center;">可选, 默认为当前时间</td></tr></tbody></table><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><blockquote><p>如果是工作日则返回<code>true</code>, 否则返回<code>false</code></p></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断以下日期是否为国内工作日 */</span>
<span class="token class-name static-context">ChinaHoliday</span><span class="token operator">::</span><span class="token function">isWorkday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2023-01-29&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>

<span class="token comment">/* 判断今天是否为国内工作日 */</span>
<span class="token class-name static-context">ChinaHoliday</span><span class="token operator">::</span><span class="token function">isWorkday</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre></div><h2 id="isholiday" tabindex="-1"><a class="header-anchor" href="#isholiday" aria-hidden="true">#</a> isHoliday()</h2><h3 id="判断日期是否为国内的节假日" tabindex="-1"><a class="header-anchor" href="#判断日期是否为国内的节假日" aria-hidden="true">#</a> 判断日期是否为国内的节假日</h3><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">datetime</td><td style="text-align:center;">任意格式的时间字符串或时间戳</td><td style="text-align:center;">可选, 默认为当前时间</td></tr></tbody></table><h4 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值</h4><blockquote><p>如果是节假日则返回<code>true</code>, 否则返回<code>false</code></p></blockquote><h4 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 判断以下日期是否为国内的节假日 */</span>
<span class="token class-name static-context">ChinaHoliday</span><span class="token operator">::</span><span class="token function">isHoliday</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2023-01-28&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
</code></pre></div>`,18),o=[c];function d(i,r){return e(),t("div",null,o)}const p=a(s,[["render",d],["__file","china-holiday.html.vue"]]);export{p as default};