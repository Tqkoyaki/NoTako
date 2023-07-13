"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[9736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,c=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?i.createElement(c,s(s({ref:t},u),{},{components:n})):i.createElement(c,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={id:"page-1",title:"Beginner Student Language",sidebar_position:1},s=void 0,o={unversionedId:"turing-tako/simple-data/page-1",id:"turing-tako/simple-data/page-1",title:"Beginner Student Language",description:"The Beginner Student Language (BSL) is a small and simple programming language which forms the core of nearly every other language you will ever use. It is built on top of racket but the design method using BSL can be adapted to fit any other programming language.",source:"@site/docs/turing-tako/simple-data/bsl.mdx",sourceDirName:"turing-tako/simple-data",slug:"/turing-tako/simple-data/page-1",permalink:"/NoTako/docs/turing-tako/simple-data/page-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/simple-data/bsl.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"page-1",title:"Beginner Student Language",sidebar_position:1},sidebar:"turingSidebar",previous:{title:"Searching and Sorting",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-10"},next:{title:"How to Design Functions",permalink:"/NoTako/docs/turing-tako/simple-data/page-2"}},l={},d=[{value:"Expressions",id:"expressions",level:2},{value:"More Primitives",id:"more-primitives",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Strings",id:"strings",level:2},{value:"Images",id:"images",level:2},{value:"Constants",id:"constants",level:2},{value:"Functions",id:"functions",level:2},{value:"Booleans",id:"booleans",level:2},{value:"If Expressions",id:"if-expressions",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Beginner Student Language (BSL) is a small and simple programming language which forms the core of nearly every other language you will ever use. It is built on top of racket but the design method using BSL can be adapted to fit any other programming language. "),(0,a.kt)("h2",{id:"expressions"},"Expressions"),(0,a.kt)("p",null,"The first thing we can do with BSL is to evaluate arthemetic expressions. These include adding, subtracting, multiplying, and dividing numbers together."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Arithmetic Expressions" showLineNumbers',title:'"Arithmetic','Expressions"':!0,showLineNumbers:!0},"(+ 1 5) ; 6\n(- 10 3) ; 7\n(* 2 4) ; 8\n(/ 10 2) ; 5\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},";")," to write a comment. A comment is a line of text that is ignored by the computer meaning everything on the line after a semicolon is ignored. This is a great tool for writing notes to yourself or others.")),(0,a.kt)("p",null,"For BSL, the syntax we used was ",(0,a.kt)("inlineCode",{parentName:"p"},"(<primitive> <expression> ...)"),". The primitive is the name of the operation we want to perform and that includes ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),". The expression is the values or other expressions we want to perform the operation on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Nested Expressions" showLineNumbers',title:'"Nested','Expressions"':!0,showLineNumbers:!0},"; You can have as many expressions in a single primitive\n(+ 1 2 3) ; 6\n\n; These expressions happen in order\n(- 10 2 3)\n(- 8 3)\n5\n\n; You can nest expressions where the inside expression is evaluated first\n(+ 1 (* 2 3))\n(+ 1 6)\n7\n")),(0,a.kt)("h3",{id:"more-primitives"},"More Primitives"),(0,a.kt)("p",null,"BSL has more primitives than just arithmetic. Here are some of the other primitives you can use in BSL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="More Primitives" showLineNumbers',title:'"More','Primitives"':!0,showLineNumbers:!0},"; Square root\n(sqrt 9) ; 3\n\n; Squared\n(sqr 3) ; 9\n\n; Absolute value\n(abs -5) ; 5\n\n; Remainder\n(remainder 10 3) ; 1\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"More primitives can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://download.racket-lang.org/docs/5.1/html/htdp-langs/beginner-prim-ops.html"},"BSL Primitive Reference"),".")),(0,a.kt)("h3",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"Nested expressions and expressions with multiple arguments show that there need to be well defined rules for how these expressions are evaluated so that the language is consistent. The rules for evaluating expressions in BSL are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reduce operands to values"),(0,a.kt)("li",{parentName:"ol"},"Apply primitive to values from left to right")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Evaluation" showLineNumbers',title:'"Evaluation"',showLineNumbers:!0},"; 1. Reduce operands to values\n(+ (* 2 (/ 10 5) 2) (sqr 3))\n(+ (* 2 5 2) (sqr 3)) ; Evaluated (/ 10 5)\n(+ (* 10 2) (sqr 3)) ; Evaluted (* 2 5)\n(+ 20 (sqr 3)) ; Evaluated (* 10 2)\n(+ 20 9) ; Evaluated (sqr 3)\n29 ; Evaluated (+ 20 9)\n")),(0,a.kt)("h2",{id:"strings"},"Strings"),(0,a.kt)("p",null,"Strings are a sequence of characters surrounded by double quotes. These strings can be used to represent text."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Strings" showLineNumbers',title:'"Strings"',showLineNumbers:!0},'"Hello World!"\n\n"123" ; Numbers are also characters (text if surrounded by quotes)\n')),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"string-append")," primitive to combine as many strings together and you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"string-length")," primitive to get the length of a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="String Primitives" showLineNumbers',title:'"String','Primitives"':!0,showLineNumbers:!0},'(string-append "Hello " "World!") ; "Hello World!"\n(string-append "Hello " "Wor" "ld!") ; "Hello World!"\n\n(string-length "Hello World!") ; 11\n')),(0,a.kt)("p",null,"You can get a subset of the string using the ",(0,a.kt)("inlineCode",{parentName:"p"},"substring")," primitive. The first argument is the string, the second argument is the starting index, and the third argument is the ending index. The ending index is not included in the substring."),(0,a.kt)("p",null,"The index of a character refers to its position in the string. The first character has an index of 0 and the last character has an index of the length of the string minus 1. This is caleld ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"zero-based indexing")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Substring" showLineNumbers',title:'"Substring"',showLineNumbers:!0},'; The index of the string\n; H e l l o   W o r l d\n; 0 1 2 3 4 5 6 7 8 9 10\n\n(substring "Hello World" 0 5) ; "Hello"\n(substring "Hello World" 6 11) ; "World"\n(substring "Hello World" 1 2) ; "e"\n')),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"BSL provides many tools for working with images. The first primitives allow you to create images of different shapes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Image Primitives" showLineNumbers',title:'"Image','Primitives"':!0,showLineNumbers:!0},'; You need this at the top of your file to use images\n(require 2htdp/image)\n\n; Create a red solid circle with radius 10\n(circle 10 "solid" "red")\n\n; Create a red outline circle with radius 20\n(circle 20 "outline" "red")\n\n; Create a red solid rectangle with width 10 and height 20\n(rectangle 10 20 "solid" "red")\n')),(0,a.kt)("p",null,"You can combine images together using the ",(0,a.kt)("inlineCode",{parentName:"p"},"beside")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"above")," primitives. The first primitive places the images side by side and the second places the images on top of each other."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Beside and Above" showLineNumbers',title:'"Beside',and:!0,'Above"':!0,showLineNumbers:!0},'; You need this at the top of your file to use images\n(require 2htdp/image)\n\n; Place two circles side by side\n(beside (circle 10 "solid" "red") (circle 10 "solid" "blue"))\n\n; You can place as many images as you want\n(beside (circle 10 "solid" "red") (circle 10 "solid" "blue") (circle 10 "solid" "green"))\n\n; Place two circles on top of each other\n(above (circle 10 "solid" "red") (circle 10 "solid" "blue"))\n\n; Same concept where you can place as many images as you want\n(above (circle 10 "solid" "red") (circle 10 "solid" "blue") (circle 10 "solid" "green"))\n')),(0,a.kt)("p",null,"You can also get the width and height of an image using the ",(0,a.kt)("inlineCode",{parentName:"p"},"image-width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"image-height")," primitives."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Image Width and Height" showLineNumbers',title:'"Image',Width:!0,and:!0,'Height"':!0,showLineNumbers:!0},'; You need this at the top of your file to use images\n(require 2htdp/image)\n\n; Create a red solid circle with radius 10\n(define CIRCLE (circle 10 "solid" "red"))\n\n; Get the width of the image\n(image-width CIRCLE) ; 20\n\n; Get the height of the image\n(image-height CIRCLE) ; 20\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Future examples will not include the ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," statement at the top of the file. You will need to add it to your file if you want to use the image primitives.")),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("p",null,"Constants are values that are given a name so that they can be used multiple times and they cannot be changed. Constants are defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," primitive. The syntax is ",(0,a.kt)("inlineCode",{parentName:"p"},"(define <name> <expression>)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Constants" showLineNumbers',title:'"Constants"',showLineNumbers:!0},'; Examples of simple constants\n(define RADIUS 10)\n(define WIDTH 20)\n(define HEIGHT 30)\n\n; You can have constants that are expressions and use constants in expressions\n(define RED_CIRCLE (circle RADIUS "solid" "red"))\n(define BLUE_CIRCLE (circle RADIUS "solid" "blue"))\n')),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Functions are a way to group a set of expressions together so that they can be used multiple times. Functions are defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"define")," primitive. The syntax is ",(0,a.kt)("inlineCode",{parentName:"p"},"(define (<name> <parameter> ...) <expression>)"),". Then you can call the function using the name and passing in the arguments using the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"(<name> <argument> ...)"),". The arguments are evaluated before being passed into the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Functions" showLineNumbers',title:'"Functions"',showLineNumbers:!0},'; Define a function that takes a radius and returns a red circle\n(define (red-circle radius)\n  (circle radius "solid" "red"))\n\n; Call the function\n(red-circle 10) ; This is the same as (circle 10 "solid" "red")\n\n; Define a function that takes a width and height and returns a red rectangle\n(define (red-rectangle width height)\n  (rectangle width height "solid" "red"))\n\n; Call the function\n(red-rectangle 10 20) ; This is the same as (rectangle 10 20 "solid" "red")\n(red-rectangle 20 30) ; This is the same as (rectangle 20 30 "solid" "red")\n')),(0,a.kt)("h2",{id:"booleans"},"Booleans"),(0,a.kt)("p",null,"Booleans are a type of data that can be either ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". They are used to represent the truth value of a statement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Boolean Primitives" showLineNumbers',title:'"Boolean','Primitives"':!0,showLineNumbers:!0},'; These are the boolean primitives\n(= 1 2) ; Checks if they are equal\n(< 1 2) ; Checks if the first is less than the second\n(> 1 2) ; Checks if the first is greater than the second\n(<= 1 2) ; Checks if the first is less than or equal to the second\n(>= 1 2) ; Checks if the first is greater than or equal to the second\n\n; Example of booleans is checking if two images are the same width\n(define I1 (circle 10 "solid" "red"))\n(define I2 (rectangle 20 30 "solid" "red"))\n(= (image-width I1) (image-width I2)) ; true\n(= (image-width I1) (image-height I2)) ; false\n\n; You can check if two strings are equal using a different primitive\n(string=? "Hello" "Hello") ; true\n')),(0,a.kt)("p",null,"You can combine booleans together using the ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," primitives. The ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," primitive returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if all of the arguments are ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise. The ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," primitive returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if at least one of the arguments is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise. You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"not")," primitive to negate a boolean."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="And, Or, and Not" showLineNumbers',title:'"And,',"Or,":!0,and:!0,'Not"':!0,showLineNumbers:!0},'(define I1 (circle 10 "solid" "red"))\n(define I2 (rectangle 20 30 "solid" "red"))\n\n(define BOOL_WIDTH (= (image-width I1) (image-width I2)))\n(define BOOL_HEIGHT (= (image-height I1) (image-height I2)))\n\n; Only true if both boolean expressions are true\n(and BOOL_WIDTH BOOL_HEIGHT) ; false\n\n; True if at least one boolean expression is true\n(or BOOL_WIDTH BOOL_HEIGHT) ; true\n\n; Negates the boolean expression\n(not true) ; false\n(not false) ; true\n')),(0,a.kt)("h3",{id:"if-expressions"},"If Expressions"),(0,a.kt)("p",null,"If expressions are a way to conditionally execute code based on a boolean expression. The syntax is ",(0,a.kt)("inlineCode",{parentName:"p"},"(if <boolean-expression> <expression> <expression>)"),". If the boolean expression is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," then the first expression is evaluated and returned. If the boolean expression is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," then the second expression is evaluated and returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="If Expressions" showLineNumbers',title:'"If','Expressions"':!0,showLineNumbers:!0},'(define I1 (circle 10 "solid" "red"))\n(define I2 (rectangle 20 30 "solid" "red"))\n\n; Only one string is produced \n(if (= (image-width I1) (image-width I2))\n    "The images have the same width"\n    "The images do not have the same width")\n\n; In this case: "The images have the same width" because the boolean expression is true\n')))}p.isMDXComponent=!0}}]);