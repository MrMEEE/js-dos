(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=r,b=m["".concat(i,".").concat(p)]||m[p]||l[p]||a;return t?o.a.createElement(b,s(s({ref:n},u),{},{components:t})):o.a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(108)),i={id:"command-interface",title:"Command Interface (CI)"},s={unversionedId:"command-interface",id:"command-interface",isDocsHomePage:!1,title:"Command Interface (CI)",description:"The Command Interface is only one object that allows you to communicate with js-dos instance.",source:"@site/docs/command-interface.md",slug:"/command-interface",permalink:"/v7/build/docs/command-interface",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/command-interface.md",version:"current",sidebar:"someSidebar",previous:{title:"Backward compatibility",permalink:"/v7/build/docs/backward-compability"},next:{title:"Mobile support",permalink:"/v7/build/docs/mobile-support"}},c=[],u={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Command Interface")," is only one object that allows you to communicate with js-dos instance.\nOnce you run some ",Object(a.b)("a",{parentName:"p",href:"/v7/build/docs/#js-dos-bundle"},"js-dos bundle")," you will recive ",Object(a.b)("inlineCode",{parentName:"p"},"Command Interface")," instance."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const ci = await Dos(/*element*/).run(/*bundle url*/);\n")),Object(a.b)("p",null,"CI interface:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export interface CommandInterface {\n    // * get bundle config\n    config: () => Promise<DosConfig>;\n\n    // * current render buffer width\n    height: () => number;\n\n    // * current render buffer height\n    width: () => number;\n\n    // * sound frequency\n    soundFrequency: () => number;\n\n    // * `screenshot()` - get screnshot of canvas as ImageData\n    screenshot: () => Promise<ImageData>;\n\n    // * `exit()` - exit from runtime\n    exit: () => Promise<void>;\n\n    // * `simulateKeyPress(...keyCodes)` - allows to simulate key press **AND** release event for key code\n    // see `sendKeyPress` to find meaning of keyCode. Key combination is suported when more than 1 keyCode is set.\n    simulateKeyPress: (...keyCodes: number[]) => void;\n\n    // * `sendKeyEvent(keyCode, pressed)` - sends single key (press or release) event to backend\n    sendKeyEvent: (keyCode: number, pressed: boolean) => void;\n\n    // * `simulateMouseMotion` - sends mouse motion event to backend\n    sendMouseMotion: (x: number, y: number) => void;\n\n    // * `simulateMouseButton` - sends mouse button event (press or release) to backend\n    sendMouseButton: (button: number, pressed: boolean) => void;\n\n    // dump **changed** FS as Uint8Array <zip archive>\n    persist(): Promise<Uint8Array>;\n\n    // events\n    events(): CommandInterfaceEvents;\n}\n")),Object(a.b)("p",null,"Events interface:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'export type MessageType = "log" | "warn" | "error" | string;\n\nexport interface CommandInterfaceEvents {\n    onStdout: (consumer: (message: string) => void) => void;\n    onFrameSize: (consumer: (width: number, height: number) => void) => void;\n    onFrame: (consumer: (rgb: Uint8Array) => void) => void;\n    onSoundPush: (consumer: (samples: Float32Array) => void) => void;\n    onExit: (consumer: () => void) => void;\n\n    onMessage: (consumer: (msgType: MessageType, ...args: any[]) => void) => void;\n}\n')))}d.isMDXComponent=!0}}]);