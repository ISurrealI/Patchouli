"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[758],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8629:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=["components"],i={},s="Templating",p={unversionedId:"patchouli-basics/templates",id:"patchouli-basics/templates",isDocsHomePage:!1,title:"Templating",description:"Aside from the Default Page Types shipped with",source:"@site/docs/patchouli-basics/templates.md",sourceDirName:"patchouli-basics",slug:"/patchouli-basics/templates",permalink:"/Patchouli/docs/patchouli-basics/templates",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/patchouli-basics/templates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Specifying Crafting Recipes for Books",permalink:"/Patchouli/docs/patchouli-basics/recipe"},next:{title:"Text Formatting 101",permalink:"/Patchouli/docs/patchouli-basics/text-formatting"}},u=[{value:"Your First Template",id:"your-first-template",children:[]},{value:"Template JSON Format",id:"template-json-format",children:[]}],c={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"templating"},"Templating"),(0,r.kt)("p",null,"Aside from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/page-types"},"Default Page Types")," shipped with\nPatchouli for you to use, you can also create your own! Creating new page types can be\ndone through Patchouli's template system."),(0,r.kt)("p",null,"Templates are created and referenced in a similar manner to entries and categories, and as\nsuch, they go in ",(0,r.kt)("inlineCode",{parentName:"p"},"/patchouli_books/YOURBOOK/en_us/templates/yourtemplate.json"),", and they can\nbe sorted in sub-folders of ",(0,r.kt)("inlineCode",{parentName:"p"},"/templates/"),"."),(0,r.kt)("h2",{id:"your-first-template"},"Your First Template"),(0,r.kt)("p",null,"Let's start with a small tutorial on how to create a template."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"/patchouli_books/YOURBOOK/en_us/templates"),", create a file,\nand fill it as such:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/patchouli_books/YOURBOOK/en_us/templates/test_template.json"',title:'"/patchouli_books/YOURBOOK/en_us/templates/test_template.json"'},'{\n    "components": [\n        {\n            "type": "patchouli:text",\n            "text": "Hello this is a test of the template system!",\n            "x": 20,\n            "y": 30\n        }\n    ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new entry for your book, and lay it out in any way you like. In one of the\npages, set the page type to be ",(0,r.kt)("inlineCode",{parentName:"li"},"yourbooknamespace:test_template"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "yourbooknamespace:test_template"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try it out ingame. Your page should show the text you set it to. Feel free to change the\ntext and the x and y positions."),(0,r.kt)("li",{parentName:"ul"},"Go back to your ",(0,r.kt)("inlineCode",{parentName:"li"},"test_template.json")," file, and change the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"text")," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"#text"'),". This\nis a ",(0,r.kt)("em",{parentName:"li"},"variable"),", and we can set its value from the entry!"),(0,r.kt)("li",{parentName:"ul"},"Go back to the entry that's using your template, and change the page to this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "yourbooknamespace:test_template",\n    "text": "We just passed in the text from a variable!"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try the edited look ingame, and you'll see your template took the ",(0,r.kt)("inlineCode",{parentName:"li"},'"text"')," value from your\npage and put it where ",(0,r.kt)("inlineCode",{parentName:"li"},'"#text"')," was. This is how you load in variable values onto your\ntemplate.\n")),(0,r.kt)("p",null,"Some notes on variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can have as many variables as you want, so you could have two text components in\ndifferent positions with either the same ",(0,r.kt)("inlineCode",{parentName:"li"},'"#text"')," value (if you want them to say the\nsame thing), or for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"#upper_text")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"#lower_text"),"."),(0,r.kt)("li",{parentName:"ul"},"You can't use any variables such that their names are already common keys for\npages. This means you can't use any of the names described in the first section of\n",(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-basics/page-types"},"Default Page Types"),"."),(0,r.kt)("li",{parentName:"ul"},"You can learn about more advanced variable usage such as inlining them in strings or\nderiving them in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/patchouli-advanced/template-variable-usage"},"Template Variable\nUsage")," page.")),(0,r.kt)("h2",{id:"template-json-format"},"Template JSON Format"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"components")," (Object Array, ",(0,r.kt)("em",{parentName:"li"},"mandatory"),")")),(0,r.kt)("p",null,"The array of components this template comes with. In the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n    {\n        "type": "TYPE",\n        (type specific data ...)\n    },\n    {\n        "type": "TYPE",\n        (type specific data...)\n    }\n    (...)\n]\n')),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/default-components"},"Template Components")," for the components\nthat Patchouli comes with and what data each one requires."),(0,r.kt)("p",null,"Note that the components are drawn in the order they appear here, so if you want one to\noverlap another, put them in the right order."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"include")," (Object Array)")),(0,r.kt)("p",null,"A list of templates to include in this one. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/template-nesting"},"Template\nNesting")," for how to do this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"processor")," (String)")),(0,r.kt)("p",null,"For modders only: A class name for the processor class that takes care of this template. A\nprocessor class can derive data from your code into variables defined in the template. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/component-processors"},"Component Processors")," for how to use them."))}m.isMDXComponent=!0}}]);