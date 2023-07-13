"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[5712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"page-7",title:"Reference",sidebar_position:7},s=void 0,a={unversionedId:"turing-tako/simple-data/page-7",id:"turing-tako/simple-data/page-7",title:"Reference",description:"Previously, we worked with self reference where we referenced the function inside of itself. This came in handy when working with lists. For complex data definitions, references just as useful.",source:"@site/docs/turing-tako/simple-data/ref.mdx",sourceDirName:"turing-tako/simple-data",slug:"/turing-tako/simple-data/page-7",permalink:"/NoTako/docs/turing-tako/simple-data/page-7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/simple-data/ref.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"page-7",title:"Reference",sidebar_position:7},sidebar:"turingSidebar",previous:{title:"Self Reference",permalink:"/NoTako/docs/turing-tako/simple-data/page-6"},next:{title:"Natural Numbers",permalink:"/NoTako/docs/turing-tako/simple-data/page-8"}},l={},u=[{value:"Data Definition",id:"data-definition",level:2},{value:"Functions",id:"functions",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Previously, we worked with self reference where we referenced the function inside of itself. This came in handy when working with lists. For complex data definitions, references just as useful."),(0,o.kt)("h2",{id:"data-definition"},"Data Definition"),(0,o.kt)("p",null,"References are useful when working with complex data definitions like lists of compound data."),(0,o.kt)("p",null,"Let's begin with a simple data definition for a student."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Students" showLineNumbers',title:'"Students"',showLineNumbers:!0},'(define-struct student (first-name last-name gpa))\n; A Student is a (make-student String String Number)\n; interp. a student with a first name, last name, and gpa\n\n(define S1 (make-student "John" "Doe" 4))\n(define S2 (make-student "Jane" "Doe" 3))\n\n#;\n(define (fn-for-student s)\n  (... (student-first-name s)   ; String\n       (student-last-name s)    ; String\n       (student-id s)))         ; Number\n\n; Template rules used:\n; - compound: 3 fields\n')),(0,o.kt)("p",null,"Now we can reference this data definition in another data definition so that we can have a list of students."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="List of Students" showLineNumbers',title:'"List',of:!0,'Students"':!0,showLineNumbers:!0},"; A ListOfStudent is one of:\n; - empty\n; - (cons Student ListOfStudent)\n; interp. a list of students\n\n(define LOS1 empty)\n(define LOS2 (cons S1 empty))\n(define LOS3 (cons S1 (cons S2 empty)))\n\n#;\n(define (fn-for-los los)\n  (cond [(empty? los) (...)]\n        [else\n         (... (fn-for-student (first los))\n              (fn-for-los (rest los)))]))\n\n; Template rules used:\n; - one of: 2 cases\n; - atomic distinct: empty\n; - compound: (cons Student ListOfStudent)\n; - reference: (first los) is Student\n; - self-reference: (rest los) is ListOfStudent\n")),(0,o.kt)("p",null,"We referenced the ",(0,o.kt)("inlineCode",{parentName:"p"},"Student")," data definition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListOfStudent")," data definition making it possible to create complex data definitions."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"These data definitions can be used as usual with the How to Design Functions (HtDF) recipe."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Function" showLineNumbers',title:'"Function"',showLineNumbers:!0},"; ListOfStudent -> Number\n; produces the number of students with a gpa greater than 3.5\n\n#;\n(define (honors-count los) 0) ; stub\n\n(check-expect (honors-count empty) 0)\n(check-expect (honors-count (cons S1 empty)) 1)\n(check-expect (honors-count (cons S1 (cons S2 empty))) 1)\n\n(define (honors-count los)\n  (cond [(empty? los) 0]\n        [else (if (honors? (first los))\n                  (+ 1 (honors-count (rest los)))\n                  (honors-count (rest los)))]))\n")),(0,o.kt)("p",null,"Typically, for complex data definitions, we can break the problem down into multiple parts. The template had a ",(0,o.kt)("inlineCode",{parentName:"p"},"fn-for-student")," which refers to a secondary helper function. This helper function is called ",(0,o.kt)("inlineCode",{parentName:"p"},"honors?")," and determines if a student is on the honors list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Helper Function" showLineNumbers',title:'"Helper','Function"':!0,showLineNumbers:!0},'; Student -> Boolean\n; produces true if the student is on the honors list\n\n#;\n(define (honors? s) false) ; stub\n\n(check-expect (honors? (make-student "John" "Doe" 4)) true)\n(check-expect (honors? (make-student "Jane" "Doe" 3)) false)\n\n(define (honors? s)\n  (> (student-gpa s) 3.5))\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The helper function will be more complex problems than this dummy exam question. Reference is useful for breaking down complex problems into smaller parts enabling us to solve large and complex problems.")))}d.isMDXComponent=!0}}]);