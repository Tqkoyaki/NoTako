"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[1143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},231:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){return a.createElement("figure",{style:{textAlign:"center"}},a.createElement("img",{src:e.src,alt:e.caption}),a.createElement("figcaption",null,a.createElement("i",null,"Fig. ",e.num," - ",e.caption)))}},799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(231);const i=n.p+"assets/images/complex-data-1-1d85e4da5da0adca0dbaeb12821634a7.png",s={id:"page-1",title:"Mutual Reference",sidebar_position:1},d=void 0,l={unversionedId:"turing-tako/complex-data/page-1",id:"turing-tako/complex-data/page-1",title:"Mutual Reference",description:"As data gets more complex, we need better data structures to store and use it. So far we have worked with lists and then built up to binary trees. Binary trees can be as arbitrary in depth as possible but they can only have two children maximum per node. Arbitrary arity tree is an evolution to binary trees where each node can have as many children so the tree has arbitrary size in depth and width.",source:"@site/docs/turing-tako/complex-data/ref.mdx",sourceDirName:"turing-tako/complex-data",slug:"/turing-tako/complex-data/page-1",permalink:"/NoTako/docs/turing-tako/complex-data/page-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/complex-data/ref.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"page-1",title:"Mutual Reference",sidebar_position:1},sidebar:"turingSidebar",previous:{title:"Binary Search Tree",permalink:"/NoTako/docs/turing-tako/simple-data/page-10"},next:{title:"Cross Product Table",permalink:"/NoTako/docs/turing-tako/complex-data/page-2"}},c={},p=[{value:"Data Definition",id:"data-definition",level:2},{value:"Functions",id:"functions",level:2},{value:"Backtracking Search",id:"backtracking-search",level:2}],u={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As data gets more complex, we need better data structures to store and use it. So far we have worked with lists and then built up to binary trees. Binary trees can be as arbitrary in depth as possible but they can only have two children maximum per node. Arbitrary arity tree is an evolution to binary trees where each node can have as many children so the tree has arbitrary size in depth and width."),(0,r.kt)(o.Z,{src:i,caption:"Arbitary Arity Tree",num:1,mdxType:"Fig"}),(0,r.kt)("h2",{id:"data-definition"},"Data Definition"),(0,r.kt)("p",null,"Arbitrary Arity Trees can have an arbitrary number of children so we need to represent it as a list. The other thing to note is that the data definition needs to be a struct because each node has both data about the node and a list of the children."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Node" showLineNumbers',title:'"Node"',showLineNumbers:!0},"(define-struct node (name data children))\n; Element is (make-node String Integer ListOfNode)\n; interp. A node in an arbitrary arity tree\n;         name is the name given to the node\n;         data is the data that the node holds\n;         ListOfNode are the children to the node\n")),(0,r.kt)("p",null,"As we can see, this data definition also needs ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," to be defined as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="ListOfNode" showLineNumbers',title:'"ListOfNode"',showLineNumbers:!0},"; ListOfNode is one of:\n; - empty\n; - (cons Node ListOfNode)\n; interp. a list of nodes in the tree\n")),(0,r.kt)("p",null,"Now that we have a defined this data, we can create a tree using our definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Examples" showLineNumbers',title:'"Examples"',showLineNumbers:!0},'(define T1 (make-node "T1" 1 empty))\n(define T2 (make-node "T2" 2 empty))\n(define T3 (make-node "T3" 3 empty))\n(define T4 (make-node "T4" 4 (list T1 T2)))\n(define T5 (make-node "T5" 5 (list T3)))\n(define T6 (make-node "T6" 6 (list T4 T5)))\n')),(0,r.kt)("p",null,"The only component left for this data definition are the templates. For our case there are two templates we need to create, one for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," definition and another one for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Templates" showLineNumbers',title:'"Templates"',showLineNumbers:!0},"(define (fn-for-node n)\n  (... (node-name n) ; String\n       (node-data n) ; Integer\n       (fn-for-lon (node-children e))))\n\n(define (fn-for-lon lon)\n  (cond [(empty? lon) (...)]\n        [else\n         (... (fn-for-node (first lon))\n              (fn-for-lon (rest lon)))]))\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"One important thing to note here are the references. Node references ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," references both ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode"),". Due to the fact that ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," references ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," references ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", we call this a mutual reference because they reference each other. Besides a mutual reference there is also a self reference when ",(0,r.kt)("inlineCode",{parentName:"p"},"ListOfNode")," references itself.")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"To create functions for trees, it is just like with simple data where we follow the templates. What is important here is to trust like recursion will do it's job because there are multiple recursions that occur with the template."),(0,r.kt)("p",null,"For this case, let's create a program that goes through the whole tree and sums up the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Functions" showLineNumbers',title:'"Functions"',showLineNumbers:!0},"; Node -> Integer (For First Function)\n; ListOfNode -> Integer (For Second Function)\n; produce the sum of all the data in element (and its children)\n\n#;\n(define (sum-data--node n) 0) ; stub\n#;\n(define (sum-data--lon lon) 0) ; stub\n\n(check-expect (sum-data--node T1) 1)\n(check-expect (sum-data--lon empty) 0)\n(check-expect (sum-data--node T5) (+ 5 3))\n(check-expect (sum-data--node T4) (+ 4 1 2))\n(check-expect (sum-data--node T6) (+ 6 4 1 2 5 3))\n\n\n(define (sum-data--node n)\n  (+ (node-data n)\n     (sum-data--lon (node-children n))))\n\n(define (sum-data--lon lon)\n  (cond [(empty? lon) 0]\n        [else\n         (+ (sum-data--node (first lon))\n              (sum-data--lon (rest lon)))]))\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Typically both functions output the same datatype like how both of these functions both output an Integer. This is usually the case but there can be cases where they are not the same.")),(0,r.kt)("h2",{id:"backtracking-search"},"Backtracking Search"),(0,r.kt)("p",null,"A common problem we will tackle is searching for a node in the tree so let's look at an example with the current tree we have."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Searching" showLineNumbers',title:'"Searching"',showLineNumbers:!0},'; String Node -> Integer or false\n; String ListOfNode -> Integer or false\n; search the given tree for a node with the given name, produce data if found; false otherwise\n\n#;\n(define (find--node val n) false) ; stub\n#;\n(define (find--lon val lon) false) ; stub\n\n(check-expect (find--lon "T1" empty) false)\n(check-expect (find--node "T2" T1) false)\n(check-expect (find--node "T3" T3) 3)\n(check-expect (find--node "T4" T4) 4)\n(check-expect (find--lon "T2" (cons T1 (cons T2 empty))) 2)\n(check-expect (find--lon "T3" (cons T1 (cons T2 empty))) false)\n(check-expect (find--node "T3" T4) false)\n(check-expect (find--node "T1" T4) 1)\n(check-expect (find--node "T2" T4) 2)\n(check-expect (find--node "T4" T4) 4)\n(check-expect (find--node "T3" T6) 3)\n\n(define (find--node val n)\n  (if (string=? (node-name n) val)\n      (node-data n)\n      (find--lon val (node-children n))))\n\n(define (find--lon val lon)\n  (cond [(empty? lon) false]\n        [else\n         (if (not (false? (find--node val (first lon))))\n             (find--node val (first lon))\n             (find--lon val (rest lon)))])) \n')),(0,r.kt)("p",null,"This function can be referenced and adjusted to solve various search problems with arbitrary arity trees."))}f.isMDXComponent=!0}}]);