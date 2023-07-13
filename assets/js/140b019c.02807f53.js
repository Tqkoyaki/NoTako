"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[7131],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1581:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"page-2",title:"Cross Product Table",sidebar_position:2},i=void 0,o={unversionedId:"turing-tako/complex-data/page-2",id:"turing-tako/complex-data/page-2",title:"Cross Product Table",description:"Typically before coding, it is often helpful to create a model which is more abstract and often a non-code representation of the function we are coding. Being able to simplify and design the code at a model level is a valuable skill to have.",source:"@site/docs/turing-tako/complex-data/cross-table.mdx",sourceDirName:"turing-tako/complex-data",slug:"/turing-tako/complex-data/page-2",permalink:"/NoTako/docs/turing-tako/complex-data/page-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/complex-data/cross-table.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"page-2",title:"Cross Product Table",sidebar_position:2},sidebar:"turingSidebar",previous:{title:"Mutual Reference",permalink:"/NoTako/docs/turing-tako/complex-data/page-1"},next:{title:"Encapsulation",permalink:"/NoTako/docs/turing-tako/complex-data/page-3"}},s={},p=[{value:"Cross Product Table",id:"cross-product-table",level:2},{value:"Completing the Table",id:"completing-the-table",level:3},{value:"Coding With Models",id:"coding-with-models",level:2},{value:"Simplication",id:"simplication",level:3}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Typically before coding, it is often helpful to create a model which is more abstract and often a non-code representation of the function we are coding. Being able to simplify and design the code at a model level is a valuable skill to have."),(0,r.kt)("h2",{id:"cross-product-table"},"Cross Product Table"),(0,r.kt)("p",null,"Cross Product Tables are a great modeling tool for when we are designing functions with two one-of types as our input. One example of an one-of type we often use are lists. They can be one of: ",(0,r.kt)("inlineCode",{parentName:"p"},"empty")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cons"),"."),(0,r.kt)("p",null,"Let's see this in action by designing a function that consumes two lists of strings and produces true in the first list is a prefix of the second. In the cross table below, the columns are ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," and the rows are ",(0,r.kt)("inlineCode",{parentName:"p"},"List B"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"empty"),(0,r.kt)("th",{parentName:"tr",align:null},"(cons String ListOfString)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(cons String ListOfString)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"completing-the-table"},"Completing the Table"),(0,r.kt)("p",null,"Let's look at the first case where both ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"List B")," are empty, this should mean that the function should produce true because an empty prefix is always met."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"empty"),(0,r.kt)("th",{parentName:"tr",align:null},"(cons String ListOfString)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(cons String ListOfString)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Now let's look at the case where ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," is not empty ",(0,r.kt)("inlineCode",{parentName:"p"},"List B")," is empty. This means ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," which is the prefix is longer than the phrase in ",(0,r.kt)("inlineCode",{parentName:"p"},"List B")," meaning the prefix was not found making this statement false."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"empty"),(0,r.kt)("th",{parentName:"tr",align:null},"(cons String ListOfString)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(cons String ListOfString)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"The next situation is when ",(0,r.kt)("inlineCode",{parentName:"p"},"List B")," is not empty but ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," is empty. Here the prefix is nothing but there are letters left in the phrase so this has to be true as the prefix exists in any statement if its empty."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"empty"),(0,r.kt)("th",{parentName:"tr",align:null},"(cons String ListOfString)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(cons String ListOfString)")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Finally, the bottom right corner is typically the most complex section in cross product tables and it is also the case here. If both lists are not empty, we need to look at if they are equal and that the rest of the list of string is equal."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"empty"),(0,r.kt)("th",{parentName:"tr",align:null},"(cons String ListOfString)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(cons String ListOfString)")),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True if equal, go through rest of list")))),(0,r.kt)("p",null,"Now that we have a model, we can code with it."),(0,r.kt)("h2",{id:"coding-with-models"},"Coding With Models"),(0,r.kt)("p",null,"As we can see from the cross product table, there are four conditions we need to look at. We can begin using that to create tests that fit all cases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Product Table Test" showLineNumbers',title:'"Product',Table:!0,'Test"':!0,showLineNumbers:!0},'; ListOfString ListOfString -> Boolean\n; produce true if lsta is a prefix of lstb\n\n(define (prefix=? lsta lstb) false) ; stub\n\n; List A: empty and List B: empty\n(check-expect (prefix=? empty empty) true)\n\n; List A: (cons String ListOfString) and List B: empty\n(check-expect (prefix=? (list "x") empty) false)\n\n; List A: empty and List B: (cons String ListOfString)\n(check-expect (prefix=? empty (list "x")) true)\n\n; List A: (cons String ListOfString) and List B: (cons String ListOfString)\n(check-expect (prefix=? (list "x") (list "x")) true)\n(check-expect (prefix=? (list "x" "y") (list "x" "y")) true)\n(check-expect (prefix=? (list "x" "x") (list "x" "y")) false)\n(check-expect (prefix=? (list "x") (list "x" "y" "z")) true)\n(check-expect (prefix=? (list "x" "y" "z") (list "x" "y")) false)\n')),(0,r.kt)("p",null,"The last case has many tests due to the fact it is more complex. Now that we have tests, we can use a cond to solve for each condition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Product Table Function" showLineNumbers',title:'"Product',Table:!0,'Function"':!0,showLineNumbers:!0},"(define (prefix=? lsta lstb)\n  (cond [(and (empty? lsta) (empty? lstb)) true]\n        [(and (empty? lsta) (cons? lstb)) true]\n        [(and (empty? lstb) (cons? lsta)) false]\n        [else (and (string=? (first lsta)\n                             (first lstb))\n                   (prefix=? (rest lsta)\n                             (rest lstb)))]))\n")),(0,r.kt)("h3",{id:"simplication"},"Simplication"),(0,r.kt)("p",null,"The benefit of working with a model beforehand is simplication. We can look at the model and simplify our function even further to make our code cleaner."),(0,r.kt)("p",null,"Looking at the function, we notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"List A: empty")," column is all ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," meaning we can elimate both the cells in one go by checking if just ",(0,r.kt)("inlineCode",{parentName:"p"},"List: A")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"empty"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"empty"),(0,r.kt)("th",{parentName:"tr",align:null},"(cons String ListOfString)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(cons String ListOfString)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"True if equal, go through rest of list")))),(0,r.kt)("p",null,"After that we are able to eliminate the idea that ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," can be ",(0,r.kt)("inlineCode",{parentName:"p"},"empty"),". Now if ",(0,r.kt)("inlineCode",{parentName:"p"},"List B")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"empty")," after we check ",(0,r.kt)("inlineCode",{parentName:"p"},"List A")," then the whole function is ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". After that we only need to worry about the last cell. In this fashion we were able to elimate four conditions to three and were able to simplify each condition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Simplication" showLineNumbers',title:'"Simplication"',showLineNumbers:!0},"(define (prefix=? lsta lstb)\n  (cond [(empty? lsta) true]\n        [(empty? lstb) false]\n        [else (and (string=? (first lsta)\n                             (first lstb))\n                   (prefix=? (rest lsta)\n                             (rest lstb)))]))\n")))}d.isMDXComponent=!0}}]);