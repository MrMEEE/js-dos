(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(87)),i=r(89),s={id:"estimating-performance",title:"Esitmating emulators performance"},c={unversionedId:"estimating-performance",id:"estimating-performance",isDocsHomePage:!1,title:"Esitmating emulators performance",description:"Performance testing",source:"@site/docs/estimating-performance.md",slug:"/estimating-performance",permalink:"/v7/build/docs/estimating-performance",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/estimating-performance.md",version:"current",sidebar:"someSidebar",previous:{title:"DOS Sokol",permalink:"/v7/build/docs/dos-sokol"},next:{title:"Contributing",permalink:"/v7/build/docs/contributing-emulators"}},l=[{value:"Performance testing",id:"performance-testing",children:[]},{value:"Running the test",id:"running-the-test",children:[]},{value:"Implementing the test",id:"implementing-the-test",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"performance-testing"},"Performance testing"),Object(a.b)("p",null,"To measure performance we used variant of Dhrystone 2 Test originally taken from this ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.roylongbottom.org.uk/dhrystone%20results.htm"}),"page"),". Original version used ",Object(a.b)("inlineCode",{parentName:"p"},"clock()")," to calculate delta time. Which is good for real pc, but does not very accurate for dosbox emulator. When ",Object(a.b)("inlineCode",{parentName:"p"},"clock()")," call happened modified version send ",Object(a.b)("inlineCode",{parentName:"p"},"~>dtime")," marker to stdout which intercepted by test page and used to calculate delta time with ",Object(a.b)("inlineCode",{parentName:"p"},"performance.now()")," from browser. Source code of modified test is ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/caiiiycuk/js-dos/tree/6.22/programms/dhry2"}),"here"),"."),Object(a.b)("p",null,"Basically this test produce a lot of int operations and measure amount of operations (Dhrystones) produced per second. Output is a ",Object(a.b)("inlineCode",{parentName:"p"},"VAX MIPS RATING")," which is Drhystones per second divided by 1757 (is as DEC VAX 11/780 result)."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"js-dos bundle")," with this test can be found on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://talks.dos.zone/t/dhrystone-2-test-jul-2020/37086"}),"Test")," page."),Object(a.b)("h2",{id:"running-the-test"},"Running the test"),Object(a.b)("p",null,"You can estimate performance of your device ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://dos.zone/en/player/https%3A%2F%2Fdoszone-uploads.s3.dualstack.eu-central-1.amazonaws.com%2Foriginal%2F2X%2Fb%2Fb4b5275904d86a4ab8a20917b2b7e34f0df47bf7.jsdos"}),"here"),"."),Object(a.b)("p",null,"Example output:"),Object(a.b)("img",{alt:"Result",src:Object(i.a)("img/emulators-logo.jpg")}),Object(a.b)("h2",{id:"implementing-the-test"},"Implementing the test"),Object(a.b)("p",null,"To run this test we should use ",Object(a.b)("inlineCode",{parentName:"p"},"emulators.js")," (from emulators) and use our ",Object(a.b)("inlineCode",{parentName:"p"},"js-dos bundle")," to start test."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script src="/v7/build/releases/latest/emulators/emulators.js"><\/script>\n// ...\n<script>\n  emulators.pathPrefix = "/v7/build/releases/latest/emulators/";\n')),Object(a.b)("p",null,"You can start test in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/v7/build/docs/dos-worker"}),"worker")," or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/v7/build/docs/dos-direct"}),"direct")," mode:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// promise is resolved when emulator is started\nconst ci = await (options.worker ?\n  emulators.dosWorker(bundle) :\n  emulators.dosDirect(bundle));\n")),Object(a.b)("p",null,"In worker mode each test will run in new worker. If you press ",Object(a.b)("inlineCode",{parentName:"p"},"Start Worker")," multiple times,\nthen you will see output from multiple threads. In direct mode browser will probably hangs.\nIn theory direct mode is faster, but browser will be unstable. Our recomendation is to use worker\nmode all time."),Object(a.b)("p",null,"Complete example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/dhry2.html"',title:'"examples/dhry2.html"'}),"{}\n")))}p.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(d,s(s({ref:t},l),{},{components:r})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},89:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(88),o=r(90);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=!r.startsWith(t)?t+r.replace(/^\//,""):r;return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},90:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);