var X=Object.defineProperty;var G=(d,n,t)=>n in d?X(d,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[n]=t;var D=(d,n,t)=>(G(d,typeof n!="symbol"?n+"":n,t),t);function tt(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let E={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Q=/[&<>"']/,et=new RegExp(Q.source,"g"),W=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,nt=new RegExp(W.source,"g"),it={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U=d=>it[d];function b(d,n){if(n){if(Q.test(d))return d.replace(et,U)}else if(W.test(d))return d.replace(nt,U);return d}const st=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function K(d){return d.replace(st,(n,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const rt=/(^|[^\[])\^/g;function k(d,n){d=typeof d=="string"?d:d.source,n=n||"";const t={replace:(e,i)=>(i=(i=i.source||i).replace(rt,"$1"),d=d.replace(e,i),t),getRegex:()=>new RegExp(d,n)};return t}const at=/[^\w:]/g,ot=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Z(d,n,t){if(d){let e;try{e=decodeURIComponent(K(t)).replace(at,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}n&&!ot.test(t)&&(t=function(e,i){I[" "+e]||(lt.test(e)?I[" "+e]=e+"/":I[" "+e]=M(e,"/",!0)),e=I[" "+e];const a=e.indexOf(":")===-1;return i.substring(0,2)==="//"?a?i:e.replace(ct,"$1")+i:i.charAt(0)==="/"?a?i:e.replace(pt,"$1")+i:e+i}(n,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const I={},lt=/^[^:]+:\/*[^/]*$/,ct=/^([^:]+:)[\s\S]*$/,pt=/^([^:]+:\/*[^/]*)[\s\S]*$/,P={exec:function(){}};function H(d,n){const t=d.replace(/\|/g,(i,a,r)=>{let s=!1,o=a;for(;--o>=0&&r[o]==="\\";)s=!s;return s?"|":" |"}).split(/ \|/);let e=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;e<t.length;e++)t[e]=t[e].trim().replace(/\\\|/g,"|");return t}function M(d,n,t){const e=d.length;if(e===0)return"";let i=0;for(;i<e;){const a=d.charAt(e-i-1);if(a!==n||t){if(a===n||!t)break;i++}else i++}return d.slice(0,e-i)}function B(d,n){if(n<1)return"";let t="";for(;n>1;)1&n&&(t+=d),n>>=1,d+=d;return t+d}function J(d,n,t,e){const i=n.href,a=n.title?b(n.title):null,r=d[1].replace(/\\([\[\]])/g,"$1");if(d[0].charAt(0)!=="!"){e.state.inLink=!0;const s={type:"link",raw:t,href:i,title:a,text:r,tokens:e.inlineTokens(r)};return e.state.inLink=!1,s}return{type:"image",raw:t,href:i,title:a,text:b(r)}}class q{constructor(n){this.options=n||E}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:M(e,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const e=t[0],i=function(a,r){const s=a.match(/^(\s+)(?:```)/);if(s===null)return r;const o=s[1];return r.split(`
`).map(c=>{const h=c.match(/^\s+/);if(h===null)return c;const[l]=h;return l.length>=o.length?c.slice(o.length):c}).join(`
`)}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){const i=M(e,"#");this.options.pedantic?e=i.trim():i&&!/ $/.test(i)||(e=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:a,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,i,a,r,s,o,c,h,l,p,x,S,y=t[1].trim();const T=y.length>1,f={type:"list",raw:"",ordered:T,start:T?+y.slice(0,-1):"",loose:!1,items:[]};y=T?`\\d{1,9}\\${y.slice(-1)}`:`\\${y}`,this.options.pedantic&&(y=T?y:"[*+-]");const A=new RegExp(`^( {0,3}${y})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(S=!1,t=A.exec(n))&&!this.rules.block.hr.test(n);){if(e=t[0],n=n.substring(e.length),h=t[2].split(`
`,1)[0].replace(/^\t+/,v=>" ".repeat(3*v.length)),l=n.split(`
`,1)[0],this.options.pedantic?(r=2,x=h.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,x=h.slice(r),r+=t[1].length),o=!1,!h&&/^ *$/.test(l)&&(e+=l+`
`,n=n.substring(l.length+1),S=!0),!S){const v=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),_=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),w=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),R=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;n&&(p=n.split(`
`,1)[0],l=p,this.options.pedantic&&(l=l.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!w.test(l))&&!R.test(l)&&!v.test(l)&&!_.test(n);){if(l.search(/[^ ]/)>=r||!l.trim())x+=`
`+l.slice(r);else{if(o||h.search(/[^ ]/)>=4||w.test(h)||R.test(h)||_.test(h))break;x+=`
`+l}o||l.trim()||(o=!0),e+=p+`
`,n=n.substring(p.length+1),h=l.slice(r)}}f.loose||(c?f.loose=!0:/\n *\n *$/.test(e)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(x),i&&(a=i[0]!=="[ ] ",x=x.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:e,task:!!i,checked:a,loose:!1,text:x}),f.raw+=e}f.items[f.items.length-1].raw=e.trimRight(),f.items[f.items.length-1].text=x.trimRight(),f.raw=f.raw.trimRight();const L=f.items.length;for(s=0;s<L;s++)if(this.lexer.state.top=!1,f.items[s].tokens=this.lexer.blockTokens(f.items[s].text,[]),!f.loose){const v=f.items[s].tokens.filter(w=>w.type==="space"),_=v.length>0&&v.some(w=>/\n.*\n/.test(w.raw));f.loose=_}if(f.loose)for(s=0;s<L;s++)f.items[s].loose=!0;return f}}html(n){const t=this.rules.block.html.exec(n);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):b(t[0]);e.type="paragraph",e.text=i,e.tokens=this.lexer.inline(i)}return e}}def(n){const t=this.rules.block.def.exec(n);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:a}}}table(n){const t=this.rules.block.table.exec(n);if(t){const e={type:"table",header:H(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let i,a,r,s,o=e.align.length;for(i=0;i<o;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(o=e.rows.length,i=0;i<o;i++)e.rows[i]=H(e.rows[i],e.header.length).map(c=>({text:c}));for(o=e.header.length,a=0;a<o;a++)e.header[a].tokens=this.lexer.inline(e.header[a].text);for(o=e.rows.length,a=0;a<o;a++)for(s=e.rows[a],r=0;r<s.length;r++)s[r].tokens=this.lexer.inline(s[r].text);return e}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:b(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):b(t[0]):t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const r=M(e.slice(0,-1),"\\");if((e.length-r.length)%2==0)return}else{const r=function(s,o){if(s.indexOf(o[1])===-1)return-1;const c=s.length;let h=0,l=0;for(;l<c;l++)if(s[l]==="\\")l++;else if(s[l]===o[0])h++;else if(s[l]===o[1]&&(h--,h<0))return l;return-1}(t[2],"()");if(r>-1){const s=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let i=t[2],a="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],a=r[3])}else a=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(e)?i.slice(1):i.slice(1,-1)),J(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const a=e[0].charAt(0);return{type:"text",raw:a,text:a}}return J(e,i,e[0],this.lexer)}}emStrong(n,t,e=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(e===""||this.rules.inline.punctuation.exec(e))){const r=i[0].length-1;let s,o,c=r,h=0;const l=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*n.length+r);(i=l.exec(t))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(o=s.length,i[3]||i[4]){c+=o;continue}if((i[5]||i[6])&&r%3&&!((r+o)%3)){h+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+h);const p=n.slice(0,r+i.index+(i[0].length-s.length)+o);if(Math.min(r,o)%2){const S=p.slice(1,-1);return{type:"em",raw:p,text:S,tokens:this.lexer.inlineTokens(S)}}const x=p.slice(2,-2);return{type:"strong",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),a=/^ /.test(e)&&/ $/.test(e);return i&&a&&(e=e.substring(1,e.length-1)),e=b(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){const e=this.rules.inline.autolink.exec(n);if(e){let i,a;return e[2]==="@"?(i=b(this.options.mangle?t(e[1]):e[1]),a="mailto:"+i):(i=b(e[1]),a=i),{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let i,a;if(e[2]==="@")i=b(this.options.mangle?t(e[0]):e[0]),a="mailto:"+i;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(r!==e[0]);i=b(e[0]),a=e[1]==="www."?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(n,t){const e=this.rules.inline.text.exec(n);if(e){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):b(e[0]):e[0]:b(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:i}}}}const m={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:P,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};m.def=k(m.def).replace("label",m._label).replace("title",m._title).getRegex(),m.bullet=/(?:[*+-]|\d{1,9}[.)])/,m.listItemStart=k(/^( *)(bull) */).replace("bull",m.bullet).getRegex(),m.list=k(m.list).replace(/bull/g,m.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+m.def.source+")").getRegex(),m._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",m._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,m.html=k(m.html,"i").replace("comment",m._comment).replace("tag",m._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),m.paragraph=k(m._paragraph).replace("hr",m.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m._tag).getRegex(),m.blockquote=k(m.blockquote).replace("paragraph",m.paragraph).getRegex(),m.normal={...m},m.gfm={...m.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},m.gfm.table=k(m.gfm.table).replace("hr",m.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m._tag).getRegex(),m.gfm.paragraph=k(m._paragraph).replace("hr",m.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",m.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m._tag).getRegex(),m.pedantic={...m.normal,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",m._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(m.normal._paragraph).replace("hr",m.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",m.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const u={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:P,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:P,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ut(d){return d.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function j(d){let n,t,e="";const i=d.length;for(n=0;n<i;n++)t=d.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}u._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",u.punctuation=k(u.punctuation).replace(/punctuation/g,u._punctuation).getRegex(),u.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,u.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,u._comment=k(m._comment).replace("(?:-->|$)","-->").getRegex(),u.emStrong.lDelim=k(u.emStrong.lDelim).replace(/punct/g,u._punctuation).getRegex(),u.emStrong.rDelimAst=k(u.emStrong.rDelimAst,"g").replace(/punct/g,u._punctuation).getRegex(),u.emStrong.rDelimUnd=k(u.emStrong.rDelimUnd,"g").replace(/punct/g,u._punctuation).getRegex(),u._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,u._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,u._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,u.autolink=k(u.autolink).replace("scheme",u._scheme).replace("email",u._email).getRegex(),u._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,u.tag=k(u.tag).replace("comment",u._comment).replace("attribute",u._attribute).getRegex(),u._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,u._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,u._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,u.link=k(u.link).replace("label",u._label).replace("href",u._href).replace("title",u._title).getRegex(),u.reflink=k(u.reflink).replace("label",u._label).replace("ref",m._label).getRegex(),u.nolink=k(u.nolink).replace("ref",m._label).getRegex(),u.reflinkSearch=k(u.reflinkSearch,"g").replace("reflink",u.reflink).replace("nolink",u.nolink).getRegex(),u.normal={...u},u.pedantic={...u.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",u._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",u._label).getRegex()},u.gfm={...u.normal,escape:k(u.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},u.gfm.url=k(u.gfm.url,"i").replace("email",u.gfm._extended_email).getRegex(),u.breaks={...u.gfm,br:k(u.br).replace("{2,}","*").getRegex(),text:k(u.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class z{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||E,this.options.tokenizer=this.options.tokenizer||new q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:m.normal,inline:u.normal};this.options.pedantic?(t.block=m.pedantic,t.inline=u.pedantic):this.options.gfm&&(t.block=m.gfm,this.options.breaks?t.inline=u.breaks:t.inline=u.gfm),this.tokenizer.rules=t}static get rules(){return{block:m,inline:u}}static lex(n,t){return new z(t).lex(n)}static lexInline(n,t){return new z(t).inlineTokens(n)}lex(n){let t;for(n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){let e,i,a,r;for(n=this.options.pedantic?n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n.replace(/^( *)(\t+)/gm,(s,o,c)=>o+"    ".repeat(c.length));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>!!(e=s.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.space(n))n=n.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);else if(e=this.tokenizer.code(n))n=n.substring(e.raw.length),i=t[t.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?t.push(e):(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(e=this.tokenizer.fences(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.heading(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.hr(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.blockquote(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.list(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.html(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.def(n))n=n.substring(e.raw.length),i=t[t.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title}):(i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(e=this.tokenizer.table(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.lheading(n))n=n.substring(e.raw.length),t.push(e);else{if(a=n,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const o=n.slice(1);let c;this.options.extensions.startBlock.forEach(function(h){c=h.call({lexer:this},o),typeof c=="number"&&c>=0&&(s=Math.min(s,c))}),s<1/0&&s>=0&&(a=n.substring(0,s+1))}if(this.state.top&&(e=this.tokenizer.paragraph(a)))i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(e),r=a.length!==n.length,n=n.substring(e.raw.length);else if(e=this.tokenizer.text(n))n=n.substring(e.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(e);else if(n){const s="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,i,a,r,s,o,c=n;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)h.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,r.index)+"["+B("a",r[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,r.index)+"["+B("a",r[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,r.index+r[0].length-2)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(s||(o=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>!!(e=h.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.escape(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.tag(n))n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):t.push(e);else if(e=this.tokenizer.link(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(e.raw.length),i=t[t.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):t.push(e);else if(e=this.tokenizer.emStrong(n,c,o))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.codespan(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.br(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.del(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.autolink(n,j))n=n.substring(e.raw.length),t.push(e);else if(this.state.inLink||!(e=this.tokenizer.url(n,j))){if(a=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const l=n.slice(1);let p;this.options.extensions.startInline.forEach(function(x){p=x.call({lexer:this},l),typeof p=="number"&&p>=0&&(h=Math.min(h,p))}),h<1/0&&h>=0&&(a=n.substring(0,h+1))}if(e=this.tokenizer.inlineText(a,ut))n=n.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(o=e.raw.slice(-1)),s=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):t.push(e);else if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else n=n.substring(e.raw.length),t.push(e);return t}}class O{constructor(n){this.options=n||E}code(n,t,e){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(n,i);a!=null&&a!==n&&(e=!0,n=a)}return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+b(i)+'">'+(e?n:b(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:b(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,t,e,i){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+i.slug(e)}">${n}</h${t}>
`:`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,e){const i=t?"ol":"ul";return"<"+i+(t&&e!==1?' start="'+e+'"':"")+`>
`+n+"</"+i+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if((n=Z(this.options.sanitize,this.options.baseUrl,n))===null)return e;let i='<a href="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=">"+e+"</a>",i}image(n,t,e){if((n=Z(this.options.sanitize,this.options.baseUrl,n))===null)return e;let i=`<img src="${n}" alt="${e}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(n){return n}}class V{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class F{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[n];do i++,e=n+"-"+i;while(this.seen.hasOwnProperty(e))}return t||(this.seen[n]=i,this.seen[e]=0),e}slug(n,t={}){const e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class ${constructor(n){this.options=n||E,this.options.renderer=this.options.renderer||new O,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new V,this.slugger=new F}static parse(n,t){return new $(t).parse(n)}static parseInline(n,t){return new $(t).parseInline(n)}parse(n,t=!0){let e,i,a,r,s,o,c,h,l,p,x,S,y,T,f,A,L,v,_,w="";const R=n.length;for(e=0;e<R;e++)if(p=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(_=this.options.extensions.renderers[p.type].call({parser:this},p),_!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))w+=_||"";else switch(p.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(p.tokens),p.depth,K(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(h="",c="",r=p.header.length,i=0;i<r;i++)c+=this.renderer.tablecell(this.parseInline(p.header[i].tokens),{header:!0,align:p.align[i]});for(h+=this.renderer.tablerow(c),l="",r=p.rows.length,i=0;i<r;i++){for(o=p.rows[i],c="",s=o.length,a=0;a<s;a++)c+=this.renderer.tablecell(this.parseInline(o[a].tokens),{header:!1,align:p.align[a]});l+=this.renderer.tablerow(c)}w+=this.renderer.table(h,l);continue;case"blockquote":l=this.parse(p.tokens),w+=this.renderer.blockquote(l);continue;case"list":for(x=p.ordered,S=p.start,y=p.loose,r=p.items.length,l="",i=0;i<r;i++)f=p.items[i],A=f.checked,L=f.task,T="",f.task&&(v=this.renderer.checkbox(A),y?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=v+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=v+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:v}):T+=v),T+=this.parse(f.tokens,y),l+=this.renderer.listitem(T,L,A);w+=this.renderer.list(l,x,S);continue;case"html":w+=this.renderer.html(p.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(l=p.tokens?this.parseInline(p.tokens):p.text;e+1<R&&n[e+1].type==="text";)p=n[++e],l+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);w+=t?this.renderer.paragraph(l):l;continue;default:{const N='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(N);throw new Error(N)}}return w}parseInline(n,t){t=t||this.renderer;let e,i,a,r="";const s=n.length;for(e=0;e<s;e++)if(i=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(a=this.options.extensions.renderers[i.type].call({parser:this},i),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))r+=a||"";else switch(i.type){case"escape":case"text":r+=t.text(i.text);break;case"html":r+=t.html(i.text);break;case"link":r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":r+=t.image(i.href,i.title,i.text);break;case"strong":r+=t.strong(this.parseInline(i.tokens,t));break;case"em":r+=t.em(this.parseInline(i.tokens,t));break;case"codespan":r+=t.codespan(i.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(i.tokens,t));break;default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(o);throw new Error(o)}}return r}}class C{constructor(n){this.options=n||E}preprocess(n){return n}postprocess(n){return n}}D(C,"passThroughHooks",new Set(["preprocess","postprocess"]));function Y(d,n){return(t,e,i)=>{typeof e=="function"&&(i=e,e=null);const a={...e},r=function(s,o,c){return h=>{if(h.message+=`
Please report this to https://github.com/markedjs/marked.`,s){const l="<p>An error occurred:</p><pre>"+b(h.message+"",!0)+"</pre>";return o?Promise.resolve(l):c?void c(null,l):l}if(o)return Promise.reject(h);if(!c)throw h;c(h)}}((e={...g.defaults,...a}).silent,e.async,i);if(t==null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(function(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(e),e.hooks&&(e.hooks.options=e),i){const s=e.highlight;let o;try{e.hooks&&(t=e.hooks.preprocess(t)),o=d(t,e)}catch(l){return r(l)}const c=function(l){let p;if(!l)try{e.walkTokens&&g.walkTokens(o,e.walkTokens),p=n(o,e),e.hooks&&(p=e.hooks.postprocess(p))}catch(x){l=x}return e.highlight=s,l?r(l):i(null,p)};if(!s||s.length<3||(delete e.highlight,!o.length))return c();let h=0;return g.walkTokens(o,function(l){l.type==="code"&&(h++,setTimeout(()=>{s(l.text,l.lang,function(p,x){if(p)return c(p);x!=null&&x!==l.text&&(l.text=x,l.escaped=!0),h--,h===0&&c()})},0))}),void(h===0&&c())}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(t):t).then(s=>d(s,e)).then(s=>e.walkTokens?Promise.all(g.walkTokens(s,e.walkTokens)).then(()=>s):s).then(s=>n(s,e)).then(s=>e.hooks?e.hooks.postprocess(s):s).catch(r);try{e.hooks&&(t=e.hooks.preprocess(t));const s=d(t,e);e.walkTokens&&g.walkTokens(s,e.walkTokens);let o=n(s,e);return e.hooks&&(o=e.hooks.postprocess(o)),o}catch(s){return r(s)}}}function g(d,n,t){return Y(z.lex,$.parse)(d,n,t)}g.options=g.setOptions=function(d){var n;return g.defaults={...g.defaults,...d},n=g.defaults,E=n,g},g.getDefaults=tt,g.defaults=E,g.use=function(...d){const n=g.defaults.extensions||{renderers:{},childTokens:{}};d.forEach(t=>{const e={...t};if(e.async=g.defaults.async||e.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const a=n.renderers[i.name];n.renderers[i.name]=a?function(...r){let s=i.renderer.apply(this,r);return s===!1&&(s=a.apply(this,r)),s}:i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[i.level]?n[i.level].unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),e.extensions=n),t.renderer){const i=g.defaults.renderer||new O;for(const a in t.renderer){const r=i[a];i[a]=(...s)=>{let o=t.renderer[a].apply(i,s);return o===!1&&(o=r.apply(i,s)),o}}e.renderer=i}if(t.tokenizer){const i=g.defaults.tokenizer||new q;for(const a in t.tokenizer){const r=i[a];i[a]=(...s)=>{let o=t.tokenizer[a].apply(i,s);return o===!1&&(o=r.apply(i,s)),o}}e.tokenizer=i}if(t.hooks){const i=g.defaults.hooks||new C;for(const a in t.hooks){const r=i[a];C.passThroughHooks.has(a)?i[a]=s=>{if(g.defaults.async)return Promise.resolve(t.hooks[a].call(i,s)).then(c=>r.call(i,c));const o=t.hooks[a].call(i,s);return r.call(i,o)}:i[a]=(...s)=>{let o=t.hooks[a].apply(i,s);return o===!1&&(o=r.apply(i,s)),o}}e.hooks=i}if(t.walkTokens){const i=g.defaults.walkTokens;e.walkTokens=function(a){let r=[];return r.push(t.walkTokens.call(this,a)),i&&(r=r.concat(i.call(this,a))),r}}g.setOptions(e)})},g.walkTokens=function(d,n){let t=[];for(const e of d)switch(t=t.concat(n.call(g,e)),e.type){case"table":for(const i of e.header)t=t.concat(g.walkTokens(i.tokens,n));for(const i of e.rows)for(const a of i)t=t.concat(g.walkTokens(a.tokens,n));break;case"list":t=t.concat(g.walkTokens(e.items,n));break;default:g.defaults.extensions&&g.defaults.extensions.childTokens&&g.defaults.extensions.childTokens[e.type]?g.defaults.extensions.childTokens[e.type].forEach(function(i){t=t.concat(g.walkTokens(e[i],n))}):e.tokens&&(t=t.concat(g.walkTokens(e.tokens,n)))}return t},g.parseInline=Y(z.lexInline,$.parseInline),g.Parser=$,g.parser=$.parse,g.Renderer=O,g.TextRenderer=V,g.Lexer=z,g.lexer=z.lex,g.Tokenizer=q,g.Slugger=F,g.Hooks=C,g.parse=g,g.options,g.setOptions,g.use,g.walkTokens,g.parseInline,$.parse,z.lex;const ht=()=>{let d,n,t=null;function e(){if(t&&!t.closed)t.focus();else{if(t=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),t.marked=g,t.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!t)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const s=n.getConfig().url,o=typeof s=="string"?s:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;d=setInterval(function(){t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:n.getState(),url:o}),"*")},500),window.addEventListener("message",a)})()}}function i(s){let o=n.getCurrentSlide(),c=o.querySelectorAll("aside.notes"),h=o.querySelector(".current-fragment"),l={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:n.getState()};if(o.hasAttribute("data-notes")&&(l.notes=o.getAttribute("data-notes"),l.whitespace="pre-wrap"),h){let p=h.querySelector("aside.notes");p?(l.notes=p.innerHTML,l.markdown=typeof p.getAttribute("data-markdown")=="string",c=null):h.hasAttribute("data-notes")&&(l.notes=h.getAttribute("data-notes"),l.whitespace="pre-wrap",c=null)}c&&c.length&&(c=Array.from(c).filter(p=>p.closest(".fragment")===null),l.notes=c.map(p=>p.innerHTML).join(`
`),l.markdown=c[0]&&typeof c[0].getAttribute("data-markdown")=="string"),t.postMessage(JSON.stringify(l),"*")}function a(s){if(function(o){try{return window.location.origin===o.source.location.origin}catch{return!1}}(s)){let o=JSON.parse(s.data);o&&o.namespace==="reveal-notes"&&o.type==="connected"?(clearInterval(d),r()):o&&o.namespace==="reveal-notes"&&o.type==="call"&&function(c,h,l){let p=n[c].apply(n,h);t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:p,callId:l}),"*")}(o.methodName,o.arguments,o.callId)}}function r(){n.on("slidechanged",i),n.on("fragmentshown",i),n.on("fragmenthidden",i),n.on("overviewhidden",i),n.on("overviewshown",i),n.on("paused",i),n.on("resumed",i),i()}return{id:"notes",init:function(s){n=s,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?e():window.addEventListener("message",o=>{if(!t&&typeof o.data=="string"){let h;try{h=JSON.parse(o.data)}catch{}h&&h.namespace==="reveal-notes"&&h.type==="heartbeat"&&(c=o.source,t&&!t.closed?t.focus():(t=c,window.addEventListener("message",a),r()))}var c}),n.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){e()}))},open:e}};export{ht as default};
