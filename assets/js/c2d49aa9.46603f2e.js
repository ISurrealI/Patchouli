"use strict";(self.webpackChunkpatchouli_docs=self.webpackChunkpatchouli_docs||[]).push([[655],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),h=s(n),c=o,d=h["".concat(p,".").concat(c)]||h[c]||m[c]||l;return n?a.createElement(d,r(r({ref:e},u),{},{components:n})):a.createElement(d,r({ref:e},u))}));function c(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,r=new Array(l);r[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3920:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={},p="Default Template Components",s={unversionedId:"patchouli-advanced/default-components",id:"patchouli-advanced/default-components",isDocsHomePage:!1,title:"Default Template Components",description:"This page specifies the various template components provided by Patchouli. These",source:"@site/docs/patchouli-advanced/default-components.md",sourceDirName:"patchouli-advanced",slug:"/patchouli-advanced/default-components",permalink:"/Patchouli/docs/patchouli-advanced/default-components",editUrl:"https://github.com/VazkiiMods/Patchouli/edit/1.18.x/web/docs/patchouli-advanced/default-components.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Component Processors",permalink:"/Patchouli/docs/patchouli-advanced/component-processors"},next:{title:"ItemStack String Format",permalink:"/Patchouli/docs/patchouli-advanced/itemstack-format"}},u=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Text Components",id:"text-components",children:[]},{value:"Item Components",id:"item-components",children:[]},{value:"Image Components",id:"image-components",children:[]},{value:"Header Components",id:"header-components",children:[]},{value:"Entity Components",id:"entity-components",children:[]},{value:"Separator Components",id:"separator-components",children:[]},{value:"Frame Components",id:"frame-components",children:[]},{value:"Tooltip Components",id:"tooltip-components",children:[]},{value:"Custom Components",id:"custom-components",children:[]}],m={toc:u};function h(t){var e=t.components,n=(0,o.Z)(t,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"default-template-components"},"Default Template Components"),(0,l.kt)("p",null,'This page specifies the various template components provided by Patchouli. These\ncomponents should be used in Templates, in the "components" array, via specifying which\ntype you want by using "type" on each object. You can read more in ',(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/templates"},"Using\nTemplates"),"."),(0,l.kt)("p",null,"The following attributes are common to every component type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (String, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,'What type this component is. This isn\'t used by the component itself, but rather by the\nloader to determine what component should be loaded. For example, if you want a text\ncomponent, you set this to "patchouli:text". This should be fully-qualified and of the\nform ',(0,l.kt)("inlineCode",{parentName:"p"},"domain:name")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," is the same as the domain of your Book ID."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"x")," (integer)")),(0,l.kt)("p",null,"Defaults to 0. The horizontal position of this component in the page."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"y")," (integer)")),(0,l.kt)("p",null,"Defaults to 0. The vertical position of this component in the page."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"advancement")," (String)")),(0,l.kt)("p",null,"A resource location to point at, to make a component appear when that advancement is\ncompleted. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/advancement-locking"},"Locking Content with\nAdvancements")," for more info on locking\ncontent. Excluding this attribute or leaving it empty will make the component always\ndisplay."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"negate_advancement")," (boolean)")),(0,l.kt)("p",null,"Defaults to false. If set to true, the ",(0,l.kt)("em",{parentName:"p"},"advancement")," field will be negated, making the\ncomponent only show if the advancement hasn't been gotten yet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"guard")," (String)")),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/template-variable-usage#string-derivation"},"Variable Function"),'\nthat determines whether the component should show. If this function resolves to "false" or\nan empty string, the component will not display.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"flag")," (String)")),(0,l.kt)("p",null,"A config flag expression that determines whether this component should show or not. See\n",(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/config-gating"},"Using Config Flags")," for more info on config flags."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," (String)")),(0,l.kt)("p",null,"Modders only: The group this element belongs to. Groups are only used to allow ",(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/component-processors"},"Component\nProcessors")," to hide individual components\nbased on code-level conditions."),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("p",null,"Here's an example of using a text component:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "patchouli:text",\n    "text": "This is an example",\n    "x": 20,\n    "y": 30\n}\n')),(0,l.kt)("h2",{id:"text-components"},"Text Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:text"')),(0,l.kt)("p",null,"Draws a text block, which supports ",(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-basics/text-formatting"},"formatting"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," (String, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"The text to display: Can be a variable."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color")," (String)")),(0,l.kt)("p",null,'The color of the text, in hex (e.g. "FF0000" would be pure red). If not set it defaults to\nthe book\'s text color. Can be a variable.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max_width")," (integer)")),(0,l.kt)("p",null,"The maximum width allowed for a line in this block. If not set, it defaults to the full\nwidth of a page."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"line_height")," (integer)")),(0,l.kt)("p",null,"The height of each line. The default is 9, which is what patchouli uses everywhere\nelse. If you set this to more than that, there will be space between the text lines. If\nyou set it to less, the lines will overlap and look bad."),(0,l.kt)("h2",{id:"item-components"},"Item Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:item"')),(0,l.kt)("p",null,"Draws an item, which you can hover over to see its tooltip, or click to open the page that\nshows how to craft it, if there's one."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"item")," (String, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/itemstack-format"},"ItemStack String")," representing the item you\nwant to show. Can be a variable."),(0,l.kt)("p",null,"Advanced usage of this value is possible. You may use ",(0,l.kt)("inlineCode",{parentName:"p"},"ore:ORENAME"),", to display all items\nmatching the ore dictionary key ORENAME, or you may display multiple stacks at once by\nseparating them with commas (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"minecraft:diamond,minecraft:emerald"),"). In both cases,\nthey alternate with time."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"framed")," (boolean)")),(0,l.kt)("p",null,"Defaults to false. If true, it'll draw a small frame around the item in the same way that\nthe recipe pages does for the output."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"link_recipe")," (boolean)")),(0,l.kt)("p",null,'Defaults to false. Set this to true to mark any page this component is used in as the\n"recipe page" for the item being shown. If you do so, when looking at pages that display\nthe item, you can shift-click the item to be taken to the page that uses this component.'),(0,l.kt)("h2",{id:"image-components"},"Image Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:image"')),(0,l.kt)("p",null,"Draws an image, or part of it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"image")," (String, _mandatory)")),(0,l.kt)("p",null,"A resource location pointing to the image you want to draw. Can be a\nvariable. ",(0,l.kt)("strong",{parentName:"p"},"Warning"),": Using images whose width and height aren't powers of two (16, 32,\n64, 128, 256, 1024...) will cause things to break. Do not do it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," (integer, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"The width of the area that you want to draw from your image. This starts counting from the\nleft."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," (integer, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"The width of the area that you want to draw from your image. This starts counting from the\ntop."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"u")," (integer)")),(0,l.kt)("p",null,"How many pixels to shift rightwards before reading the image's pixel data. Default is 0,\nmeaning to start at the very left of the image."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"v")," (integer)")),(0,l.kt)("p",null,"How many pixels to shift downwards before reading the image's pixel data. Default is 0,\nmeaning to start at the very top of the image."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"texture_width")," (integer)")),(0,l.kt)("p",null,"The width of the image you want to draw. If you don't set this it'll default to 256. If\nyour image's width is different from 256, you need to set the value, or it'll look weird."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"texture_height")," (integer)")),(0,l.kt)("p",null,"The height of the image you want to draw. If you don't set this it'll default to 256. If\nyour image's height is different from 256, you need to set the value, or it'll look weird."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scale")," (float)")),(0,l.kt)("p",null,"The scale at which you want to display this image. Defaults to 1."),(0,l.kt)("h2",{id:"header-components"},"Header Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:header"')),(0,l.kt)("p",null,"Draws a text header, much like you'd see in the titles of categories and entries. Does not\ndraw the separator line that appears below those."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," (String, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"The text to show here. This ",(0,l.kt)("em",{parentName:"p"},"can't")," be formatted. Can be a variable."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color")," (String)")),(0,l.kt)("p",null,'The color of the text, in hex (e.g. "FF0000" would be pure red). If not set it defaults to\nthe book\'s header color. Can be a variable.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"centered")," (boolean)")),(0,l.kt)("p",null,"Defaults to true. Set to false to align the text to the left rather than center."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scale")," (float)")),(0,l.kt)("p",null,"The scale at which you want to display this headear. Defaults to 1."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "x" value of this component can be set to -1, and it\'ll default to the horizontal\ncenter of the page.'),(0,l.kt)("li",{parentName:"ul"},'The "y" value can also be set to -1, and if you do, it\'ll default to the same position\nwhere headers are for the default pages.')),(0,l.kt)("h2",{id:"entity-components"},"Entity Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:entity"')),(0,l.kt)("p",null,"Renders an entity which rotates around."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"entity")," (String, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,'The ID of the entity you want to display. To display a chicken you\'d use\n"minecraft:chicken". You can also add NBT data to the entity, in the same way you would in\nan ',(0,l.kt)("a",{parentName:"p",href:"/docs/patchouli-advanced/itemstack-format"},"ItemStack String"),". Can be a variable."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"render_size")," (integer)")),(0,l.kt)("p",null,"The size of the canvas to render this entity on. Defaults to 100, which means the entity\nwill be rendered in a 100x100 box."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rotate")," (boolean)")),(0,l.kt)("p",null,"Defaults to true. Set this to false to make the entity not rotate."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"default_rotation")," (float)")),(0,l.kt)("p",null,'The rotation at which this entity should be rendered. This value is only used if "rotate"\nis false. The default is -45.'),(0,l.kt)("h2",{id:"separator-components"},"Separator Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:separator"')),(0,l.kt)("p",null,"Draws a separator line using your book's texture."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Does not have any additional attributes.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "x" value of this component can be set to -1, and it\'ll default to the horizontal\ncenter of the page.'),(0,l.kt)("li",{parentName:"ul"},'The "y" value can also be set to -1, and if you do, it\'ll default to the same position\nwhere separators are for the default pages.')),(0,l.kt)("h2",{id:"frame-components"},"Frame Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:frame"')),(0,l.kt)("p",null,"Draws a frame for a 200x200 image using your book's texture. This looks just like the\nframe on framed images in image pages."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Does not have any additional attributes.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The "x" value of this component can be set to -1, and it\'ll default to the horizontal\ncenter of the page.'),(0,l.kt)("li",{parentName:"ul"},'The "y" value can also be set to -1, and if you do, it\'ll default to the same position\nwhere frames are for the default pages.')),(0,l.kt)("h2",{id:"tooltip-components"},"Tooltip Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:tooltip"')),(0,l.kt)("p",null,"Makes the GUI render a tooltip when the cursor is over the section specified here."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltip")," (String Array, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"An array of lines for the tooltip to display. All strings inside the array can be\nvariables individually. Empty strings or missing variables are ignored. You can use\ncontrol/color codes by using & instead of \xa7."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," (integer, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"The width of this tooltip area."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," (integer, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"The height of this tooltip area."),(0,l.kt)("h2",{id:"custom-components"},"Custom Components"),(0,l.kt)("p",null,"Component type: ",(0,l.kt)("strong",{parentName:"p"},'"patchouli:custom"')),(0,l.kt)("p",null,"Modders only: Does whatever you'd like! You can pass in an instance of an interface in the\npatchouli API for it to instantiate and pass stuff to."),(0,l.kt)("p",null,"Here's a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Vazkii/Patchouli/blob/master/Common/src/main/java/vazkii/patchouli/client/book/template/test/ComponentCustomTest.java"},"test\nexample"),"\nyou can refer to."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"class")," (String, ",(0,l.kt)("em",{parentName:"li"},"mandatory"),")")),(0,l.kt)("p",null,"A full class name (package.name.ClassName) pointing to a subtype of\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Vazkii/Patchouli/blob/master/Common/src/main/java/vazkii/patchouli/api/ICustomComponent.java"},"ICustomComponent"),". There's\nno need to register this class anywhere in code, just create it and the loader will take\ncare of finding and loading it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More values! Any non-transient values you put in your ICustomComponent implementation\nwill also be read as component values.")))}h.isMDXComponent=!0}}]);