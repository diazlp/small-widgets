(this.webpackJsonpwidgets=this.webpackJsonpwidgets||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),i=n(2),l=n(0),o=function(e){var t=e.items,n=Object(c.useState)(null),s=Object(i.a)(n,2),r=s[0],o=s[1],u=t.map((function(e,t){var n=t===r?"active":"";return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsxs)("div",{className:"title ".concat(n),onClick:function(){return function(e){o(e)}(t)},children:[Object(l.jsx)("i",{className:"dropdown icon"}),e.title]}),Object(l.jsx)("div",{className:"content ".concat(n),children:Object(l.jsx)("p",{children:e.content})})]},t)}));return Object(l.jsx)("div",{className:"ui styled accordion",children:u})},u=n(4),j=n.n(u),d=n(7),b=n(8),h=n.n(b),O=function(){var e=Object(c.useState)("programming"),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(n),r=Object(i.a)(s,2),o=r[0],u=r[1],b=Object(c.useState)([]),O=Object(i.a)(b,2),f=O[0],v=O[1];Object(c.useEffect)((function(){var e=setTimeout((function(){u(n)}),1e3);return function(){clearTimeout(e)}}),[n]),Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://en.wikipedia.org/w/api.php",{params:{action:"query",format:"json",list:"search",origin:"*",srsearch:o}});case 2:t=e.sent,n=t.data,v(n.query.search);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]);var m=f.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"right floated content",children:Object(l.jsx)("a",{className:"ui button",href:"https://en.wikipedia.org?curid=".concat(e.pageid," "),children:"GO!"})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"header",children:e.title}),Object(l.jsx)("span",{dangerouslySetInnerHTML:{__html:e.snippet}})]})]},e.pageid)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Enter Search Term"}),Object(l.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},className:"input"})]})}),Object(l.jsx)("div",{className:"ui celled list",children:m})]})},f=function(e){var t=e.label,n=e.options,a=e.selected,s=e.onSelectedChange,r=Object(c.useState)(!1),o=Object(i.a)(r,2),u=o[0],j=o[1],d=Object(c.useRef)();Object(c.useEffect)((function(){var e=function(e){d.current&&d.current.contains(e.target)||j(!1)};return document.body.addEventListener("click",e,{capture:!0}),function(){document.body.removeEventListener("click",e)}}));var b=n.map((function(e){return e.value===a.value?null:Object(l.jsx)("div",{onClick:function(){s(e)},className:"item",children:e.label},e.value)}));return Object(l.jsx)("div",{ref:d,className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",children:t}),Object(l.jsxs)("div",{onClick:function(){j(!u)},className:"ui selection dropdown ".concat(u?"visible active":""," "),children:[Object(l.jsx)("i",{className:"dropdown icon"}),Object(l.jsx)("div",{className:"text",children:a.label}),Object(l.jsx)("div",{className:"menu ".concat(u?"visible transition":""," "),children:b})]})]})})},v=function(e){var t=e.language,n=e.text,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],o=s[1],u=Object(c.useState)(n),b=Object(i.a)(u,2),O=b[0],f=b[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){f(n)}),500);return function(){clearTimeout(e)}}),[n]),Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("https://translation.googleapis.com/language/translate/v2",{},{params:{q:O,target:t.value,key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"}});case 2:n=e.sent,c=n.data,o(c.data.translations[0].translatedText);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,O]),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"ui header",children:r})})},m=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"Hindi",value:"hi"},{label:"Dutch",value:"nl"}],p=function(){var e=Object(c.useState)(m[0]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],u=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"ui form",children:Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{children:"Enter Text"}),Object(l.jsx)("input",{value:o,onChange:function(e){return u(e.target.value)}})]})}),Object(l.jsx)(f,{label:"Select a Language",options:m,selected:n,onSelectedChange:a}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{className:"ui header",children:"Output"}),Object(l.jsx)(v,{language:n,text:o})]})},x=function(e){var t=e.path,n=e.children,a=Object(c.useState)(window.location.pathname),s=Object(i.a)(a,2),r=s[0],l=s[1],o=function(){l(window.location.pathname)};return Object(c.useEffect)((function(){return window.addEventListener("popstate",o),function(){window.removeEventListener("popstate",o)}}),[]),r===t?n:null},g=function(e){var t=e.href,n=e.className,c=e.children;return Object(l.jsx)("a",{onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",t);var n=new PopStateEvent("popstate");window.dispatchEvent(n)}},href:t,className:n,children:c})},w=function(){return Object(l.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(l.jsx)(g,{href:"/",className:"item",children:"Accordion"}),Object(l.jsx)(g,{href:"/list",className:"item",children:"Search"}),Object(l.jsx)(g,{href:"/dropdown",className:"item",children:"Dropdown"}),Object(l.jsx)(g,{href:"/translate",className:"item",children:"Translate"})]})},N=[{title:"What is React?",content:"React is a front end javascript framework"},{title:"Why use React?",content:"React is a favorite JS library among engineers"},{title:"How do you use React?",content:"You use React by creating componenets"}],S=[{label:"The Color Red",value:"red"},{label:"Grass Green",value:"green"},{label:"A Shade of Blue",value:"blue"}],y=function(){var e=Object(c.useState)(S[0]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(w,{}),Object(l.jsx)(x,{path:"/",children:Object(l.jsx)(o,{items:N})}),Object(l.jsx)(x,{path:"/list",children:Object(l.jsx)(O,{})}),Object(l.jsx)(x,{path:"/dropdown",children:Object(l.jsx)(f,{label:"Select a color",options:S,selected:n,onSelectedChange:a})}),Object(l.jsx)(x,{path:"/translate",children:Object(l.jsx)(p,{})})]})};r.a.render(Object(l.jsx)(y,{}),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a9b4b8f8.chunk.js.map