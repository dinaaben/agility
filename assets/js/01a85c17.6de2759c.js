"use strict";(self.webpackChunkagility=self.webpackChunkagility||[]).push([[8209],{16669:(e,t,s)=>{s.d(t,{A:()=>j});s(96540);var a=s(34164),i=s(653),r=s(24581),l=s(28774),n=s(21312),c=s(84255);const o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var d=s(74848);function m(e){let{sidebar:t}=e;const s=(0,c.G)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,a.A)(o.sidebar,"thin-scrollbar"),"aria-label":(0,n.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,a.A)(o.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,d.jsx)("ul",{className:(0,a.A)(o.sidebarItemList,"clean-list"),children:s.map((e=>(0,d.jsx)("li",{className:o.sidebarItem,children:(0,d.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=s(75600);function b(e){let{sidebar:t}=e;const s=(0,c.G)(t.items);return(0,d.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function g(e){return(0,d.jsx)(u.GX,{component:b,props:e})}function h(e){let{sidebar:t}=e;const s=(0,r.l)();return t?.items.length?"mobile"===s?(0,d.jsx)(g,{sidebar:t}):(0,d.jsx)(m,{sidebar:t}):null}function j(e){const{sidebar:t,toc:s,children:r,...l}=e,n=t&&t.items.length>0;return(0,d.jsx)(i.A,{...l,children:(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)(h,{sidebar:t}),(0,d.jsx)("main",{className:(0,a.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:r}),s&&(0,d.jsx)("div",{className:"col col--2",children:s})]})})})}},92463:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});s(96540);var a=s(34164),i=s(26820),r=s(45500),l=s(17559),n=s(16669),c=s(56133),o=s(51107);const d={tag:"tag_Nnez"};var m=s(74848);function u(e){let{letterEntry:t}=e;return(0,m.jsxs)("article",{children:[(0,m.jsx)(o.A,{as:"h2",id:t.letter,children:t.letter}),(0,m.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,m.jsx)("li",{className:d.tag,children:(0,m.jsx)(c.A,{...e})},e.permalink)))}),(0,m.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=(0,i.Q)(t);return(0,m.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,m.jsx)(u,{letterEntry:e},e.letter)))})}var g=s(41463);function h(e){let{tags:t,sidebar:s}=e;const c=(0,i.b)();return(0,m.jsxs)(r.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,m.jsx)(r.be,{title:c}),(0,m.jsx)(g.A,{tag:"blog_tags_list"}),(0,m.jsxs)(n.A,{sidebar:s,children:[(0,m.jsx)(o.A,{as:"h1",children:c}),(0,m.jsx)(b,{tags:t})]})]})}},56133:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var a=s(34164),i=s(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(74848);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,l.jsxs)(i.A,{href:t,title:c,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},84255:(e,t,s)=>{s.d(t,{G:()=>l});var a=s(96540),i=s(56347),r=s(99169);function l(e){const{pathname:t}=(0,i.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,r.ys)(e.permalink,t))}(e,t)))),[e,t])}},26820:(e,t,s)=>{s.d(t,{Q:()=>r,b:()=>i});var a=s(21312);const i=()=>(0,a.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);