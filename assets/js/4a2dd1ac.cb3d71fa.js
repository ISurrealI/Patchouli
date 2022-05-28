"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[876],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6035:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:0},c="Prerequisites",u={unversionedId:"patchouli-basics/prerequisites",id:"patchouli-basics/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"This page covers knowledge and tools you must have in order to be effective at authoring",source:"@site/docs/patchouli-basics/prerequisites.md",sourceDirName:"patchouli-basics",slug:"/patchouli-basics/prerequisites",permalink:"/Patchouli/docs/patchouli-basics/prerequisites",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/patchouli-basics/prerequisites.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Patchouli/docs/intro"},next:{title:"Getting Started",permalink:"/Patchouli/docs/patchouli-basics/getting-started"}},l=[{value:"Tools",id:"tools",children:[{value:"Text Editor",id:"text-editor",children:[]}]},{value:"Knowledge",id:"knowledge",children:[{value:"JSON",id:"json",children:[]},{value:"Namespaced ID&#39;s",id:"namespaced-ids",children:[]},{value:"Pack Layout",id:"pack-layout",children:[]}]}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This page covers knowledge and tools you must have in order to be effective at authoring\ncontent with Patchouli. All later documentation on this site will assume you have\nthese tools at hand and this knowledge in mind."),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("h3",{id:"text-editor"},"Text Editor"),(0,i.kt)("p",null,"A competent text editor such as Sublime Text, Visual Studio Code, vim, or emacs is a must.\nDo ",(0,i.kt)("em",{parentName:"p"},"not")," use software such as notepad, WordPad, Word, or Pages.\nPreferably, your editor should have highlighting support for JSON, which will save you\nfrom common typos that are made when working with the format."),(0,i.kt)("h2",{id:"knowledge"},"Knowledge"),(0,i.kt)("h3",{id:"json"},"JSON"),(0,i.kt)("p",null,"You should know the basics of the JSON data format, including the core data types and syntax.\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON#Syntax"},"Wikipedia page")," provides a good overview."),(0,i.kt)("h3",{id:"namespaced-ids"},"Namespaced ID's"),(0,i.kt)("p",null,"Namespaced ID's are how Minecraft gives things unique names. Please read the ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Resource_location"},"vanilla wiki\npage")," on the subject carefully."),(0,i.kt)("h3",{id:"pack-layout"},"Pack Layout"),(0,i.kt)("p",null,"You should have a basic understanding of how resource packs and data packs are laid out,\nfrom the root folder to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/assets/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/data/")," directories. The corresponding vanilla\nwiki pages have more information about this for ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Resource_Pack#Folder_structure"},"resource\npacks")," and ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Data_Pack#Folder_structure"},"data\npacks")," respectively."))}d.isMDXComponent=!0}}]);