"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[6633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={id:"page-6",title:"Lambda",sidebar_position:6},i=void 0,l={unversionedId:"turing-tako/complex-data/page-6",id:"turing-tako/complex-data/page-6",title:"Lambda",description:"We often look for shortcuts we can use in code to make it faster and cleaner to write code and one such shortcut can be found using the lambda primitive. This allows us to write simple functions in one expression.",source:"@site/docs/turing-tako/complex-data/lambda.mdx",sourceDirName:"turing-tako/complex-data",slug:"/turing-tako/complex-data/page-6",permalink:"/NoTako/docs/turing-tako/complex-data/page-6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/complex-data/lambda.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"page-6",title:"Lambda",sidebar_position:6},sidebar:"turingSidebar",previous:{title:"Generative Recursion",permalink:"/NoTako/docs/turing-tako/complex-data/page-5"},next:{title:"Sudoku",permalink:"/NoTako/docs/turing-tako/complex-data/page-7"}},s={},u=[{value:"Uses of Lambda",id:"uses-of-lambda",level:2},{value:"When to Use?",id:"when-to-use",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We often look for shortcuts we can use in code to make it faster and cleaner to write code and one such shortcut can be found using the ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," primitive. This allows us to write simple functions in one expression."),(0,r.kt)("h2",{id:"uses-of-lambda"},"Uses of Lambda"),(0,r.kt)("p",null,"The syntax for lambda is ",(0,r.kt)("inlineCode",{parentName:"p"},"(lambda (args ...) (body...))"),". The first parameter asks us to state all the parameters needed for this function and body is the expression that uses the parameters stated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Simple Function" showLineNumbers',title:'"Simple','Function"':!0,showLineNumbers:!0},";; Number (listof Number) -> (listof Number)\n;; produce only elements of lon > threshold\n\n(define (only-bigger threshold lon)\n  (local [(define (pred n) \n            (> n threshold))]\n    (filter pred lon)))\n")),(0,r.kt)("p",null,"We want to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," primitive to write the ",(0,r.kt)("inlineCode",{parentName:"p"},"pred")," function which will allow us to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," argument all together making it easier to read."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Lambda Version" showLineNumbers',title:'"Lambda','Version"':!0,showLineNumbers:!0},"(define (only-bigger threshold lon)\n    (filter (lambda (n) (> n threshold)) lon))\n")),(0,r.kt)("p",null,"As you can see this makes the function a lot cleaner as it only takes two lines. Let's look at one more example where it cleans up code significantly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Quick Sort" showLineNumbers',title:'"Quick','Sort"':!0,showLineNumbers:!0},";; (listof Number)  ->  (listof Number)\n;; produce list of numbers sorted in ASCENDING order\n;; ASSUMPTION: lon contains no duplicates\n\n(define (qsort lon)\n  (if (empty? lon) \n      empty\n      (local [(define p (first lon))\n              (define (<p? n) (< n p))\n              (define (>p? n) (> n p))]\n        (append (qsort (filter <p? lon))\n                (list p) \n                (qsort (filter >p? lon))))))\n\n\n;; Lambda Version\n(define (qsort lon)\n  (if (empty? lon)\n      empty\n      (append (qsort (filter (lambda (n) (< n (first lon))) lon))\n              (list (first lon))\n              (qsort (filter (lambda (n) (> n (first lon))) lon)))))\n")),(0,r.kt)("h2",{id:"when-to-use"},"When to Use?"),(0,r.kt)("p",null,"This new primitive is very useful but it should not be used for every situation. ",(0,r.kt)("inlineCode",{parentName:"p"},"Lambda")," should be used when a locally defined function is only used in one place and the body is so easily understood that naming the function doesn't make the code easier to understand."))}d.isMDXComponent=!0}}]);