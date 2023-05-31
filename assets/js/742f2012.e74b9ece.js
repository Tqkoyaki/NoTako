"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"page-5",title:"Compound Data",sidebar_position:5},o=void 0,s={unversionedId:"turing-tako/simple-data/page-5",id:"turing-tako/simple-data/page-5",title:"Compound Data",description:"There are many times when two pieces of data are related to each other. For example, a person's name and their age. We can store these two pieces of data in a single variable using a struct in racket.",source:"@site/docs/turing-tako/simple-data/compound.mdx",sourceDirName:"turing-tako/simple-data",slug:"/turing-tako/simple-data/page-5",permalink:"/NoTako/docs/turing-tako/simple-data/page-5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/simple-data/compound.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"page-5",title:"Compound Data",sidebar_position:5},sidebar:"turingSidebar",previous:{title:"How to Design Worlds",permalink:"/NoTako/docs/turing-tako/simple-data/page-4"}},l={},c=[{value:"Creating a Struct",id:"creating-a-struct",level:3},{value:"Working with Structs",id:"working-with-structs",level:3},{value:"Data Definition",id:"data-definition",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are many times when two pieces of data are related to each other. For example, a person's name and their age. We can store these two pieces of data in a single variable using a struct in racket."),(0,r.kt)("h3",{id:"creating-a-struct"},"Creating a Struct"),(0,r.kt)("p",null,"The syntax to define a struct is ",(0,r.kt)("inlineCode",{parentName:"p"},"(define-struct name (field1 field2 ...))"),". The name of the struct is the name of the variable that will hold the struct. The fields are the names of the pieces of data that will be stored in the struct. For example, to create a struct to store a person's name and age, we would use the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Creating a Struct" showLineNumbers',title:'"Creating',a:!0,'Struct"':!0,showLineNumbers:!0},"(define-struct person (name age))\n")),(0,r.kt)("p",null,"A struct can hold as many fields as you want. The goal is to combine data that relate to each other together. The benefit of creating a struct is that it creates new primitives to work with the new struct."),(0,r.kt)("p",null,"To create a new struct, we use the syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"(make-name field1 field2 ...)"),". This is the constructor for the struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Creating a Struct" showLineNumbers',title:'"Creating',a:!0,'Struct"':!0,showLineNumbers:!0},'(define-struct person (name age))\n\n(define p1 (make-person "John" 20))\n(define p2 (make-person "Jane" 19))\n')),(0,r.kt)("h3",{id:"working-with-structs"},"Working with Structs"),(0,r.kt)("p",null,"When a struct is created, we can access each individual field using selectors. The syntax for a selector is ",(0,r.kt)("inlineCode",{parentName:"p"},"(name-field struct)"),". For example, to access the name of a person, we would use ",(0,r.kt)("inlineCode",{parentName:"p"},"(person-name struct)"),". To access the age of a person, we would use ",(0,r.kt)("inlineCode",{parentName:"p"},"(person-age struct)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Working with Structs" showLineNumbers',title:'"Working',with:!0,'Structs"':!0,showLineNumbers:!0},'(define-struct person (name age))\n\n(define p1 (make-person "John" 20))\n\n(person-name p1) ; "John"\n(person-age p1) ; 20\n')),(0,r.kt)("p",null,"We can also check if a variable is a struct that we created using a predicate. The syntax is ",(0,r.kt)("inlineCode",{parentName:"p"},"(name? struct)"),". For example, to check if a variable is a person, we would use ",(0,r.kt)("inlineCode",{parentName:"p"},"(person? struct)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Working with Structs" showLineNumbers',title:'"Working',with:!0,'Structs"':!0,showLineNumbers:!0},'(define-struct person (name age))\n\n(define p1 (make-person "John" 20))\n(define num 100)\n\n(person? p1) ; true\n(person? num) ; false\n')),(0,r.kt)("h3",{id:"data-definition"},"Data Definition"),(0,r.kt)("p",null,"Due to the fact that structs are a new way to define data, we will create a data definition for it. For the How to Design Worlds recipe, everything is done the same way as before just following the new data definition template for the functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Data Definition for Player" showLineNumbers',title:'"Data',Definition:!0,for:!0,'Player"':!0,showLineNumbers:!0},'; Problem: We need to represent a hockey player by storing their first and last name.\n\n(define-struct player (fn ln)) ; Possible structure definition\n\n; Player is (make-player String String)\n; interp. (make-player fn ln) is a hockey player with\n;           fn is the first name of the player\n;           ln is the last name of the player\n\n(define P1 (make-player "Bobby" "Orr"))\n(define P2 (make-player "Wayne" "Gretzky"))\n\n; Template\n(define (fn-for-player p)\n  (... (player-fn p) ; String\n       (player-ln p))) ; String\n\n; Template rules used:\n; - Compound: 2 fields\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This data definition is for a compound data so we needed to do step 1 of the How to Design Data recipe. This step was to create a possible structure definition which we did not have to do before.")))}u.isMDXComponent=!0}}]);