import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-ffCHDBmD.js";const s={},c=e(`<h1 id="🍈-友好的日期格式" tabindex="-1"><a class="header-anchor" href="#🍈-友好的日期格式" aria-hidden="true">#</a> 🍈 友好的日期格式</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一般用于社交类平台,评论,论坛等</p></div><h2 id="tofriendly" tabindex="-1"><a class="header-anchor" href="#tofriendly" aria-hidden="true">#</a> toFriendly()</h2><h3 id="返回友好的日期格式-如n秒前" tabindex="-1"><a class="header-anchor" href="#返回友好的日期格式-如n秒前" aria-hidden="true">#</a> 返回友好的日期格式,如N秒前</h3><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">描述</th><th style="text-align:center;">是否必须</th></tr></thead><tbody><tr><td style="text-align:center;">time</td><td style="text-align:center;">任意类型的字符串时间或时间戳</td><td style="text-align:center;">必须</td></tr><tr><td style="text-align:center;">lang</td><td style="text-align:center;">语言: 中文是zh, 英文是en</td><td style="text-align:center;">可选, 默认值为zh</td></tr></tbody></table><h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h4><blockquote><p>友好的日期格式</p></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token comment">/* 转换为友好的日期格式 */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">toFriendly</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2022-3-2 10:15:33&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3天前</span>

<span class="token comment">/* 转换为友好的日期格式(英文) */</span>
<span class="token class-name static-context">TimeHelper</span><span class="token operator">::</span><span class="token function">toFriendly</span><span class="token punctuation">(</span><span class="token number">1646186290</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;en&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 6 hours ago</span>
</code></pre></div>`,10),o=[c];function r(i,l){return n(),a("div",null,o)}const h=t(s,[["render",r],["__file","friendly-format.html.vue"]]);export{h as default};