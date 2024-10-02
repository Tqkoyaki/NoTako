"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[2200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),r=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=r(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=B(e,["components","mdxType","originalType","parentName"]),u=r(t),p=i,b=u["".concat(l,".").concat(p)]||u[p]||c[p]||s;return t?a.createElement(b,o(o({ref:n},d),{},{components:t})):a.createElement(b,o({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=u;var B={};for(var l in n)hasOwnProperty.call(n,l)&&(B[l]=n[l]);B.originalType=e,B.mdxType="string"==typeof e?e:i,o[1]=B;for(var r=2;r<s;r++)o[r]=t[r];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},231:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294);function i(e){return a.createElement("figure",{style:{textAlign:"center"}},a.createElement("img",{src:e.src,alt:e.caption}),a.createElement("figcaption",null,a.createElement("i",null,"Fig. ",e.num," - ",e.caption)))}},9583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(7462),i=(t(7294),t(3905)),s=t(231);const o=t.p+"assets/images/complex-data-4-28a92692958b5bf7682560f63da2bf1b.png",B=t.p+"assets/images/complex-data-5-b86a38b6d235573070887a362c985b32.png",l={id:"page-7",title:"Sudoku",sidebar_position:7},r=void 0,d={unversionedId:"turing-tako/complex-data/page-7",id:"turing-tako/complex-data/page-7",title:"Sudoku",description:"Sudoku is a popular logic puzzle where the objective is to fill a 9 x 9 grid with digits so that each column, each row, and each of the boxes contain digits from 1 - 9 with no repeats in each.",source:"@site/docs/turing-tako/complex-data/sudoku.mdx",sourceDirName:"turing-tako/complex-data",slug:"/turing-tako/complex-data/page-7",permalink:"/NoTako/docs/turing-tako/complex-data/page-7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/complex-data/sudoku.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"page-7",title:"Sudoku",sidebar_position:7},sidebar:"turingSidebar",previous:{title:"Lambda",permalink:"/NoTako/docs/turing-tako/complex-data/page-6"},next:{title:"Accumulators",permalink:"/NoTako/docs/turing-tako/complex-data/page-8"}},c={},u=[{value:"Data Definitions",id:"data-definitions",level:2},{value:"Constants",id:"constants",level:2},{value:"Functions",id:"functions",level:2},{value:"Template Blending",id:"template-blending",level:3},{value:"Position Functions",id:"position-functions",level:3},{value:"Generating Boards",id:"generating-boards",level:3},{value:"Pruning Boards",id:"pruning-boards",level:3},{value:"Checking for Solutions",id:"checking-for-solutions",level:3},{value:"Completed Program",id:"completed-program",level:2}],p={toc:u};function b(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sudoku is a popular logic puzzle where the objective is to fill a 9 x 9 grid with digits so that each column, each row, and each of the boxes contain digits from 1 - 9 with no repeats in each."),(0,i.kt)(s.Z,{src:o,caption:"Sudoku Board",num:1,mdxType:"Fig"}),(0,i.kt)("p",null,"The program we are creating is a Sudoku solver that uses brute force (testing every combination) to solve any legal sudoku board given."),(0,i.kt)("h2",{id:"data-definitions"},"Data Definitions"),(0,i.kt)("p",null,"Before we can create the program, we need to make some data definitions to interpret what a sudoku board is. A board is comprised of 81 cells that are either empty or have a value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Board" showLineNumbers',title:'"Board"',showLineNumbers:!0},";; Val is Natural[1, 9]\n\n;; Board is (listof Val|false) that is 81 elements long\n;; interp.\n;; Visually a board that is a 9x9 array of squares, where each square\n;; has a row and column number. But we represent it as a \n;; single flast list, in which the rows are layed out one after \n;; another in linear fashion.\n")),(0,i.kt)("p",null,"Now that we have a board, we need to be able to reference a specific cell of the board at anytime so that we can read and change it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Position" showLineNumbers',title:'"Position"',showLineNumbers:!0},";; Pos is Natural[0, 80]\n;; interp.\n;; the position of a square on the board, for a given p, then\n;;      - the row is (quotient p 9)\n;;      - the column is (remainder p 9)\n")),(0,i.kt)("p",null,"Finally, the last data definition that will come in handy are the units (rows, columns, and boxes). This will be useful later on for checking if all the units are valid and don't break the rule."),(0,i.kt)("h2",{id:"constants"},"Constants"),(0,i.kt)("p",null,"We mainly need boards as constants so that we can use them for tests later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Board Constants" showLineNumbers',title:'"Board','Constants"':!0,showLineNumbers:!0},"(define B false) ;B stands for blank\n\n\n(define BD1 \n  (list B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B))\n\n(define BD2 \n  (list 1 2 3 4 5 6 7 8 9 \n        B B B B B B B B B \n        B B B B B B B B B \n        B B B B B B B B B \n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B))\n\n(define BD3 \n  (list 1 B B B B B B B B\n        2 B B B B B B B B\n        3 B B B B B B B B\n        4 B B B B B B B B\n        5 B B B B B B B B\n        6 B B B B B B B B\n        7 B B B B B B B B\n        8 B B B B B B B B\n        9 B B B B B B B B))\n\n(define BD4                ;easy\n  (list 2 7 4 B 9 1 B B 5\n        1 B B 5 B B B 9 B\n        6 B B B B 3 2 8 B\n        B B 1 9 B B B B 8\n        B B 5 1 B B 6 B B\n        7 B B B 8 B B B 3\n        4 B 2 B B B B B 9\n        B B B B B B B 7 B\n        8 B B 3 4 9 B B B))\n\n(define BD4s               ;solution to 4\n  (list 2 7 4 8 9 1 3 6 5\n        1 3 8 5 2 6 4 9 7\n        6 5 9 4 7 3 2 8 1\n        3 2 1 9 6 4 7 5 8\n        9 8 5 1 3 7 6 4 2\n        7 4 6 2 8 5 9 1 3\n        4 6 2 7 5 8 1 3 9\n        5 9 3 6 1 2 8 7 4\n        8 1 7 3 4 9 5 2 6))\n\n(define BD5                ;hard\n  (list 5 B B B B 4 B 7 B\n        B 1 B B 5 B 6 B B\n        B B 4 9 B B B B B\n        B 9 B B B 7 5 B B\n        1 8 B 2 B B B B B \n        B B B B B 6 B B B \n        B B 3 B B B B B 8\n        B 6 B B 8 B B B 9\n        B B 8 B 7 B B 3 1))\n\n(define BD5s               ;solution to 5\n  (list 5 3 9 1 6 4 8 7 2\n        8 1 2 7 5 3 6 9 4\n        6 7 4 9 2 8 3 1 5\n        2 9 6 4 1 7 5 8 3\n        1 8 7 2 3 5 9 4 6\n        3 4 5 8 9 6 1 2 7\n        9 2 3 5 4 1 7 6 8\n        7 6 1 3 8 2 4 5 9\n        4 5 8 6 7 9 2 3 1))\n\n(define BD6                ;hardest ever? (Dr Arto Inkala)\n  (list B B 5 3 B B B B B \n        8 B B B B B B 2 B\n        B 7 B B 1 B 5 B B \n        4 B B B B 5 3 B B\n        B 1 B B 7 B B B 6\n        B B 3 2 B B B 8 B\n        B 6 B 5 B B B B 9\n        B B 4 B B B B 3 B\n        B B B B B 9 7 B B))\n\n(define BD7                 ; no solution \n  (list 1 2 3 4 5 6 7 8 B \n        B B B B B B B B 2 \n        B B B B B B B B 3 \n        B B B B B B B B 4 \n        B B B B B B B B 5\n        B B B B B B B B 6\n        B B B B B B B B 7\n        B B B B B B B B 8\n        B B B B B B B B 9))\n")),(0,i.kt)("p",null,"We also need constants of all the 27 units on the board. This refers to the positions of the 9 columns, 9 rows, and 9 boxes on every board."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Units" showLineNumbers',title:'"Units"',showLineNumbers:!0},"(define ROWS\n  (list (list  0  1  2  3  4  5  6  7  8)\n        (list  9 10 11 12 13 14 15 16 17)\n        (list 18 19 20 21 22 23 24 25 26)\n        (list 27 28 29 30 31 32 33 34 35)\n        (list 36 37 38 39 40 41 42 43 44)\n        (list 45 46 47 48 49 50 51 52 53)\n        (list 54 55 56 57 58 59 60 61 62)\n        (list 63 64 65 66 67 68 69 70 71)\n        (list 72 73 74 75 76 77 78 79 80)))\n\n(define COLS\n  (list (list 0  9 18 27 36 45 54 63 72)\n        (list 1 10 19 28 37 46 55 64 73)\n        (list 2 11 20 29 38 47 56 65 74)\n        (list 3 12 21 30 39 48 57 66 75)\n        (list 4 13 22 31 40 49 58 67 76)\n        (list 5 14 23 32 41 50 59 68 77)\n        (list 6 15 24 33 42 51 60 69 78)\n        (list 7 16 25 34 43 52 61 70 79)\n        (list 8 17 26 35 44 53 62 71 80)))\n\n(define BOXES\n  (list (list  0  1  2  9 10 11 18 19 20)\n        (list  3  4  5 12 13 14 21 22 23)\n        (list  6  7  8 15 16 17 24 25 26)\n        (list 27 28 29 36 37 38 45 46 47)\n        (list 30 31 32 39 40 41 48 49 50)\n        (list 33 34 35 42 43 44 51 52 53)\n        (list 54 55 56 63 64 65 72 73 74)\n        (list 57 58 59 66 67 68 75 76 77)\n        (list 60 61 62 69 70 71 78 79 80)))\n\n(define UNITS (append ROWS COLS BOXES))\n")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"To solve a given sudoku board using brute force, we need to find the next empty position and try all the possible values from 1 to 9. We can keep repeating this for all the boards and removing all the boards that become invalid like if there are two duplicates in the same column. Using this method, we should end up with a valid solution where all the numbers work."),(0,i.kt)(s.Z,{src:B,caption:"Brute Force Algorithm",num:2,mdxType:"Fig"}),(0,i.kt)("p",null,"Our algorithm as seen above ",(0,i.kt)("strong",{parentName:"p"},"generates")," an ",(0,i.kt)("strong",{parentName:"p"},"arbitrary-arity tree")," and doing ",(0,i.kt)("strong",{parentName:"p"},"backtracking search")," over it in order to prune the invalid boards."),(0,i.kt)("h3",{id:"template-blending"},"Template Blending"),(0,i.kt)("p",null,"We want to begin with an arbitrary arity tree template because that is the data structure our algorithm is working with. Each branch can have anywhere between 0 to 9 valid boards and we do not know how deep the tree is."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Arb-Arity Tree" showLineNumbers',title:'"Arb-Arity','Tree"':!0,showLineNumbers:!0},";; Board -> Board or false\n;; produce a solution for bd; or false if bd is unsolvable\n;; Assume: bd is valid\n#;\n(define (solve bd) false) ; stub\n\n(check-expect (solve BD4) BD4s)\n(check-expect (solve BD5) BD5s)\n(check-expect (solve BD7) false)\n\n(define (solve bd)\n  (local [(define (solve--bd bd)\n            (... (solve--lobd (bd-subs bd))))\n\n          (define (solve--lobd lobd)\n            (cond [(empty? lobd) (...)]\n                  [else\n                    (...  (solve--bd (first lobd))\n                          (solve--lobd (rest lobd)))]))]\n    (solve--bd bd)))\n")),(0,i.kt)("p",null,"Now we can work around the current template and blend in generative recursion. We want to generate a new set of valid boards during each iteration. Due to the complexity, we will use helpers and focus on the bigger picture here. We will need ",(0,i.kt)("inlineCode",{parentName:"p"},"solved?")," which will tell us if the board is full meaning the solved board has been found causing us to return it. We will also need ",(0,i.kt)("inlineCode",{parentName:"p"},"next-boards")," to take our current board and return a list of valid boards."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Generative recursive" showLineNumbers',title:'"Generative','recursive"':!0,showLineNumbers:!0},"(define (solve bd)\n  (local [(define (solve--bd bd)\n            (if (solved? bd)\n                bd\n                (solve--lobd (next-boards bd))))\n\n          (define (solve--lobd lobd)\n            (cond [(empty? lobd) (...)]\n                  [else\n                    (...  (solve--bd (first lobd))\n                          (solve--lobd (rest lobd)))]))]\n    (solve--bd bd)))\n")),(0,i.kt)("p",null,"The last step is to go through all the boards using backtracking search and make sure there are still valid boards left in the branch. If there are no valid boards left in the current branch, we need to look at a different branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Backtracking Search" showLineNumbers',title:'"Backtracking','Search"':!0,showLineNumbers:!0},"(define (solve bd)\n  (local [(define (solve--bd bd)\n            (if (solved? bd)\n                bd\n                (solve--lobd (next-boards bd))))\n\n          (define (solve--lobd lobd)\n            (cond [(empty? lobd) false]\n                  [else\n                   (local [(define try (solve--bd (first lobd)))]\n                     (if (not (false? try))\n                         try\n                         (solve--lobd (rest lobd))))]))]\n    (solve--bd bd)))\n")),(0,i.kt)("h3",{id:"position-functions"},"Position Functions"),(0,i.kt)("p",null,"Before we continue on working on our helper functions, we need functions to help us manipulate the board. The first function we want is to be able to read the value in whatever position on the board."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Reading Board" showLineNumbers',title:'"Reading','Board"':!0,showLineNumbers:!0},"(require racket/list)\n\n;; Board Pos -> Val or false\n;; Produce value at given position on board.\n(check-expect (read-square BD2 5) 6)\n(check-expect (read-square BD3 63) 8)\n\n(define (read-square bd p)\n  (list-ref bd p))\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We are using a new library using ",(0,i.kt)("inlineCode",{parentName:"p"},"(require racket/list)")," to code these functions faster. They are not necessary but they definitely make it easier to code. This library provides ",(0,i.kt)("inlineCode",{parentName:"p"},"list-ref")," which takes a list and a position and returns the value in that position. The library also includes ",(0,i.kt)("inlineCode",{parentName:"p"},"take")," which takes a list and position and returns all the elements in the list up to the position. Finally, it also includes ",(0,i.kt)("inlineCode",{parentName:"p"},"drop")," which takes a list and a position and returns a new list of all the elements in that position till the end of the list.")),(0,i.kt)("p",null,"Our second function needs to be able to edit a value using a position and we will do this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"take")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"drop")," functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Writing Board" showLineNumbers',title:'"Writing','Board"':!0,showLineNumbers:!0},";; Board Pos Val -> Board\n;; produce new board with val at given position\n(check-expect (fill-square BD1 0 1)\n              (cons 1 (rest BD1)))\n\n(define (fill-square bd p nv)\n  (append (take bd p)\n          (list nv)\n          (drop bd (add1 p))))\n")),(0,i.kt)("h3",{id:"generating-boards"},"Generating Boards"),(0,i.kt)("p",null,"Our first goal is to generate a new set of boards by filling the next empty position from 1 to 9. After this is done, we need to remove all the invalid boards leaving only valid boards generated. Due to the fact, this is a complex task, we can use function composition and solve each problem individually."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Generating Valid Boards" showLineNumbers',title:'"Generating',Valid:!0,'Boards"':!0,showLineNumbers:!0},";; Board -> (listof Board)\n;; produce list of valid next boards from board\n;; finds first empty square, fills it with Natural[1, 9], keeps only valid boards\n#;\n(define (next-boards bd) empty) ; stub\n\n(check-expect (next-boards (cons 1 (rest BD1)))\n              (list (cons 1 (cons 2 (rest (rest BD1))))\n                    (cons 1 (cons 3 (rest (rest BD1))))\n                    (cons 1 (cons 4 (rest (rest BD1))))\n                    (cons 1 (cons 5 (rest (rest BD1))))\n                    (cons 1 (cons 6 (rest (rest BD1))))\n                    (cons 1 (cons 7 (rest (rest BD1))))\n                    (cons 1 (cons 8 (rest (rest BD1))))\n                    (cons 1 (cons 9 (rest (rest BD1))))))\n\n(define (next-boards bd)\n  (keep-only-valid (fill-with-1-9 (find-blank bd) bd)))\n")),(0,i.kt)("p",null,"Our first step is to find the first blank position which we can do by searching the list till we find the first ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Each time we go deeper into the list, the position increases by 1 till we arrive to our position."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Find Blank" showLineNumbers',title:'"Find','Blank"':!0,showLineNumbers:!0},';; Board -> Pos\n;; produces the position of the first blank square\n;; Assume: the board has at least one blank square\n#;\n(define (find-blank bd) 0) ; stub\n\n(check-expect (find-blank BD1) 0)\n(check-expect (find-blank (cons 2 (rest BD1))) 1)\n(check-expect (find-blank (cons 2 (cons 4 (rest (rest BD1))))) 2)\n\n(define (find-blank bd)\n  (cond [(empty? bd) (error "The board didn\'t have a blank space.")]\n        [else\n         (if (false? (first bd))\n             0\n             (+ 1 (find-blank (rest bd))))]))\n')),(0,i.kt)("p",null,"Now that we have the position we need to fill, we need to generate 9 different boards by changing what value goes in that empty cell. We can do this by using ",(0,i.kt)("inlineCode",{parentName:"p"},"build-list")," which is a built-in function that allows us to create lists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Filling Squares" showLineNumbers',title:'"Filling','Squares"':!0,showLineNumbers:!0},";; Pos Board -> (listof Board)\n;; produce 9 boards, with blank filled with Natural[1, 9]\n#;\n(define (fill-with-1-9 p bd) empty) ; stub\n\n(check-expect (fill-with-1-9 0 BD1)\n              (list (cons 1 (rest BD1))\n                    (cons 2 (rest BD1))\n                    (cons 3 (rest BD1))\n                    (cons 4 (rest BD1))\n                    (cons 5 (rest BD1))\n                    (cons 6 (rest BD1))\n                    (cons 7 (rest BD1))\n                    (cons 8 (rest BD1))\n                    (cons 9 (rest BD1))))\n\n(define (fill-with-1-9 p bd)\n  (local [(define (build-one n)\n            (fill-square bd p (+ n 1)))]\n    (build-list 9 build-one)))\n")),(0,i.kt)("p",null,"The last step to completing our board generator is to remove all the boards that are not valid which can be done using ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Keeping Valid Boards" showLineNumbers',title:'"Keeping',Valid:!0,'Boards"':!0,showLineNumbers:!0},";; (listof Board) -> (listof Board)\n;; produce list containing only valid boards\n#;\n(define (keep-only-valid lobd) empty) ; stub\n\n(check-expect (keep-only-valid (list (cons 1 (cons 1 (rest (rest BD1))))))\n              empty)\n\n(define (keep-only-valid lobd)\n  (filter valid-board? lobd))\n")),(0,i.kt)("h3",{id:"pruning-boards"},"Pruning Boards"),(0,i.kt)("p",null,"As you can see, we still need ",(0,i.kt)("inlineCode",{parentName:"p"},"valid-board?")," in order to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"next-boards")," function working. Figuring out if a board is valid is the most difficult task. We know a board is valid when every position in every unit on the board has no values that are repeating."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Checking for Valid Boards" showLineNumbers',title:'"Checking',for:!0,Valid:!0,'Boards"':!0,showLineNumbers:!0},";; Board -> Boolean\n;; produce true if board is valid, false otherwise\n;; valid means no unit on the board has the same value twice; false otherwise\n#;\n(define (valid-board? bd) false)\n\n(check-expect (valid-board? BD1) true)\n(check-expect (valid-board? BD2) true)\n(check-expect (valid-board? BD3) true)\n(check-expect (valid-board? BD4) true)\n(check-expect (valid-board? BD5) true)\n(check-expect (valid-board? (cons 2 (rest BD2))) false)\n(check-expect (valid-board? (cons 2 (rest BD3))) false)\n(check-expect (valid-board? (fill-square BD4 1 6)) false)\n\n(define (valid-board? bd)\n  (local [; Is true only if all the units are valid\n          (define (valid-units? lou)\n            (andmap valid-unit? lou))\n\n          ; Gets the values from a unit keeping only the numbers and checks for duplicates.\n          ; If there is a duplicate, this function returns false because it is not valid.\n          (define (valid-unit? u)\n            (no-duplicates?\n             (keep-only-values\n              (read-unit u))))\n\n          ; Maps each position in a unit to its cooresponding value\n          (define (read-unit u)\n            (map read-pos u))\n\n          ; Returns the value from a given position (used to map)\n          (define (read-pos p)\n            (read-square bd p))\n\n          ; Only keeps the numbers in a unit by using filter\n          (define (keep-only-values lovf)\n            (filter number? lovf))\n\n          ; Is true if the no duplicates\n          (define (no-duplicates? lov)\n            (cond [(empty? lov) true]\n                  [else\n                   (if (member (first lov) (rest lov))\n                       false\n                       (no-duplicates? (rest lov)))]))]\n    (valid-units? UNITS)))\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"no-duplicates?")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," which checks if a value is in a list. If the first value appears in the rest of the list, this meant we found a duplicate. If it didn't we just needed to check the rest of the list until no values are left in the list.")),(0,i.kt)("h3",{id:"checking-for-solutions"},"Checking for Solutions"),(0,i.kt)("p",null,"We have been making sure that during generation, only valid boards are placed in the tree so that means a solved board is one that is full. If every value in the board is a number, then we know its full meaning the board has been solved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Checking for Solved" showLineNumbers',title:'"Checking',for:!0,'Solved"':!0,showLineNumbers:!0},";; Board -> Boolean\n;; produce true if board is solved\n;; Assume: board is valid, so it is solved if it is full\n#;\n(define (solved? bd) false) ; stub\n\n(check-expect (solved? BD1) false)\n(check-expect (solved? BD2) false)\n(check-expect (solved? BD4s) true)\n\n(define (solved? bd)\n  (andmap number? bd))\n")),(0,i.kt)("h2",{id:"completed-program"},"Completed Program"),(0,i.kt)("p",null,"We completed our brute force sudoku solver! Here is the complete program..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-racket",metastring:'title="Complete Program" showLineNumbers',title:'"Complete','Program"':!0,showLineNumbers:!0},'(require racket/list)\n\n;; ======================================\n;; Data Definition:\n\n;; Val is Natural[1, 9]\n\n;; Board is (listof Val|false) that is 81 elements long\n;; interp.\n;; Visually a board that is a 9x9 array of squares, where each square\n;; has a row and column number. But we represent it as a \n;; single flast list, in which the rows are layed out one after \n;; another in linear fashion.\n\n;; Pos is Natural[0, 80]\n;; interp.\n;; the position of a square on the board, for a given p, then\n;;      - the row is (quotient p 9)\n;;      - the column is (remainder p 9)\n\n;; ======================================\n;; Constants:\n\n(define B false) ;B stands for blank\n\n\n(define BD1 \n  (list B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B))\n\n(define BD2 \n  (list 1 2 3 4 5 6 7 8 9 \n        B B B B B B B B B \n        B B B B B B B B B \n        B B B B B B B B B \n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B\n        B B B B B B B B B))\n\n(define BD3 \n  (list 1 B B B B B B B B\n        2 B B B B B B B B\n        3 B B B B B B B B\n        4 B B B B B B B B\n        5 B B B B B B B B\n        6 B B B B B B B B\n        7 B B B B B B B B\n        8 B B B B B B B B\n        9 B B B B B B B B))\n\n(define BD4                ;easy\n  (list 2 7 4 B 9 1 B B 5\n        1 B B 5 B B B 9 B\n        6 B B B B 3 2 8 B\n        B B 1 9 B B B B 8\n        B B 5 1 B B 6 B B\n        7 B B B 8 B B B 3\n        4 B 2 B B B B B 9\n        B B B B B B B 7 B\n        8 B B 3 4 9 B B B))\n\n(define BD4s               ;solution to 4\n  (list 2 7 4 8 9 1 3 6 5\n        1 3 8 5 2 6 4 9 7\n        6 5 9 4 7 3 2 8 1\n        3 2 1 9 6 4 7 5 8\n        9 8 5 1 3 7 6 4 2\n        7 4 6 2 8 5 9 1 3\n        4 6 2 7 5 8 1 3 9\n        5 9 3 6 1 2 8 7 4\n        8 1 7 3 4 9 5 2 6))\n\n(define BD5                ;hard\n  (list 5 B B B B 4 B 7 B\n        B 1 B B 5 B 6 B B\n        B B 4 9 B B B B B\n        B 9 B B B 7 5 B B\n        1 8 B 2 B B B B B \n        B B B B B 6 B B B \n        B B 3 B B B B B 8\n        B 6 B B 8 B B B 9\n        B B 8 B 7 B B 3 1))\n\n(define BD5s               ;solution to 5\n  (list 5 3 9 1 6 4 8 7 2\n        8 1 2 7 5 3 6 9 4\n        6 7 4 9 2 8 3 1 5\n        2 9 6 4 1 7 5 8 3\n        1 8 7 2 3 5 9 4 6\n        3 4 5 8 9 6 1 2 7\n        9 2 3 5 4 1 7 6 8\n        7 6 1 3 8 2 4 5 9\n        4 5 8 6 7 9 2 3 1))\n\n(define BD6                ;hardest ever? (Dr Arto Inkala)\n  (list B B 5 3 B B B B B \n        8 B B B B B B 2 B\n        B 7 B B 1 B 5 B B \n        4 B B B B 5 3 B B\n        B 1 B B 7 B B B 6\n        B B 3 2 B B B 8 B\n        B 6 B 5 B B B B 9\n        B B 4 B B B B 3 B\n        B B B B B 9 7 B B))\n\n(define BD7                 ; no solution \n  (list 1 2 3 4 5 6 7 8 B \n        B B B B B B B B 2 \n        B B B B B B B B 3 \n        B B B B B B B B 4 \n        B B B B B B B B 5\n        B B B B B B B B 6\n        B B B B B B B B 7\n        B B B B B B B B 8\n        B B B B B B B B 9))\n\n(define ROWS\n  (list (list  0  1  2  3  4  5  6  7  8)\n        (list  9 10 11 12 13 14 15 16 17)\n        (list 18 19 20 21 22 23 24 25 26)\n        (list 27 28 29 30 31 32 33 34 35)\n        (list 36 37 38 39 40 41 42 43 44)\n        (list 45 46 47 48 49 50 51 52 53)\n        (list 54 55 56 57 58 59 60 61 62)\n        (list 63 64 65 66 67 68 69 70 71)\n        (list 72 73 74 75 76 77 78 79 80)))\n\n(define COLS\n  (list (list 0  9 18 27 36 45 54 63 72)\n        (list 1 10 19 28 37 46 55 64 73)\n        (list 2 11 20 29 38 47 56 65 74)\n        (list 3 12 21 30 39 48 57 66 75)\n        (list 4 13 22 31 40 49 58 67 76)\n        (list 5 14 23 32 41 50 59 68 77)\n        (list 6 15 24 33 42 51 60 69 78)\n        (list 7 16 25 34 43 52 61 70 79)\n        (list 8 17 26 35 44 53 62 71 80)))\n\n(define BOXES\n  (list (list  0  1  2  9 10 11 18 19 20)\n        (list  3  4  5 12 13 14 21 22 23)\n        (list  6  7  8 15 16 17 24 25 26)\n        (list 27 28 29 36 37 38 45 46 47)\n        (list 30 31 32 39 40 41 48 49 50)\n        (list 33 34 35 42 43 44 51 52 53)\n        (list 54 55 56 63 64 65 72 73 74)\n        (list 57 58 59 66 67 68 75 76 77)\n        (list 60 61 62 69 70 71 78 79 80)))\n\n(define UNITS (append ROWS COLS BOXES))\n\n;; ======================================\n;; Functions:\n\n;; Board -> Board or false\n;; produce a solution for bd; or false if bd is unsolvable\n;; Assume: bd is valid\n#;\n(define (solve bd) false) ; stub\n\n(check-expect (solve BD4) BD4s)\n(check-expect (solve BD5) BD5s)\n(check-expect (solve BD7) false)\n\n(define (solve bd)\n  (local [(define (solve--bd bd)\n            (if (solved? bd)\n                bd\n                (solve--lobd (next-boards bd))))\n\n          (define (solve--lobd lobd)\n            (cond [(empty? lobd) false]\n                  [else\n                   (local [(define try (solve--bd (first lobd)))]\n                     (if (not (false? try))\n                         try\n                         (solve--lobd (rest lobd))))]))]\n    (solve--bd bd)))\n\n\n;; Board Pos -> Val or false\n;; Produce value at given position on board.\n(check-expect (read-square BD2 5) 6)\n(check-expect (read-square BD3 63) 8)\n\n(define (read-square bd p)\n  (list-ref bd p))\n\n\n;; Board Pos Val -> Board\n;; produce new board with val at given position\n(check-expect (fill-square BD1 0 1)\n              (cons 1 (rest BD1)))\n\n(define (fill-square bd p nv)\n  (append (take bd p)\n          (list nv)\n          (drop bd (add1 p))))\n\n\n;; Board -> (listof Board)\n;; produce list of valid next boards from board\n;; finds first empty square, fills it with Natural[1, 9], keeps only valid boards\n#;\n(define (next-boards bd) empty) ; stub\n\n(check-expect (next-boards (cons 1 (rest BD1)))\n              (list (cons 1 (cons 2 (rest (rest BD1))))\n                    (cons 1 (cons 3 (rest (rest BD1))))\n                    (cons 1 (cons 4 (rest (rest BD1))))\n                    (cons 1 (cons 5 (rest (rest BD1))))\n                    (cons 1 (cons 6 (rest (rest BD1))))\n                    (cons 1 (cons 7 (rest (rest BD1))))\n                    (cons 1 (cons 8 (rest (rest BD1))))\n                    (cons 1 (cons 9 (rest (rest BD1))))))\n\n(define (next-boards bd)\n  (keep-only-valid (fill-with-1-9 (find-blank bd) bd)))\n\n\n;; Board -> Pos\n;; produces the position of the first blank square\n;; Assume: the board has at least one blank square\n#;\n(define (find-blank bd) 0) ; stub\n\n(check-expect (find-blank BD1) 0)\n(check-expect (find-blank (cons 2 (rest BD1))) 1)\n(check-expect (find-blank (cons 2 (cons 4 (rest (rest BD1))))) 2)\n\n(define (find-blank bd)\n  (cond [(empty? bd) (error "The board didn\'t have a blank space.")]\n        [else\n         (if (false? (first bd))\n             0\n             (+ 1 (find-blank (rest bd))))]))\n\n\n;; Pos Board -> (listof Board)\n;; produce 9 boards, with blank filled with Natural[1, 9]\n#;\n(define (fill-with-1-9 p bd) empty) ; stub\n\n(check-expect (fill-with-1-9 0 BD1)\n              (list (cons 1 (rest BD1))\n                    (cons 2 (rest BD1))\n                    (cons 3 (rest BD1))\n                    (cons 4 (rest BD1))\n                    (cons 5 (rest BD1))\n                    (cons 6 (rest BD1))\n                    (cons 7 (rest BD1))\n                    (cons 8 (rest BD1))\n                    (cons 9 (rest BD1))))\n\n(define (fill-with-1-9 p bd)\n  (local [(define (build-one n)\n            (fill-square bd p (+ n 1)))]\n    (build-list 9 build-one)))\n\n\n;; (listof Board) -> (listof Board)\n;; produce list containing only valid boards\n#;\n(define (keep-only-valid lobd) empty) ; stub\n\n(check-expect (keep-only-valid (list (cons 1 (cons 1 (rest (rest BD1))))))\n              empty)\n\n(define (keep-only-valid lobd)\n  (filter valid-board? lobd))\n\n\n;; Board -> Boolean\n;; produce true if board is valid, false otherwise\n;; valid means no unit on the board has the same value twice; false otherwise\n#;\n(define (valid-board? bd) false)\n\n(check-expect (valid-board? BD1) true)\n(check-expect (valid-board? BD2) true)\n(check-expect (valid-board? BD3) true)\n(check-expect (valid-board? BD4) true)\n(check-expect (valid-board? BD5) true)\n(check-expect (valid-board? (cons 2 (rest BD2))) false)\n(check-expect (valid-board? (cons 2 (rest BD3))) false)\n(check-expect (valid-board? (fill-square BD4 1 6)) false)\n\n(define (valid-board? bd)\n  (local [; Is true only if all the units are valid\n          (define (valid-units? lou)\n            (andmap valid-unit? lou))\n\n          ; Gets the values from a unit keeping only the numbers and checks for duplicates.\n          ; If there is a duplicate, this function returns false because it is not valid.\n          (define (valid-unit? u)\n            (no-duplicates?\n             (keep-only-values\n              (read-unit u))))\n\n          ; Maps each position in a unit to its cooresponding value\n          (define (read-unit u)\n            (map read-pos u))\n\n          ; Returns the value from a given position (used to map)\n          (define (read-pos p)\n            (read-square bd p))\n\n          ; Only keeps the numbers in a unit by using filter\n          (define (keep-only-values lovf)\n            (filter number? lovf))\n\n          ; Is true if the no duplicates\n          (define (no-duplicates? lov)\n            (cond [(empty? lov) true]\n                  [else\n                   (if (member (first lov) (rest lov))\n                       false\n                       (no-duplicates? (rest lov)))]))]\n    (valid-units? UNITS)))\n\n\n;; Board -> Boolean\n;; produce true if board is solved\n;; Assume: board is valid, so it is solved if it is full\n#;\n(define (solved? bd) false) ; stub\n\n(check-expect (solved? BD1) false)\n(check-expect (solved? BD2) false)\n(check-expect (solved? BD4s) true)\n\n(define (solved? bd)\n  (andmap number? bd))\n')))}b.isMDXComponent=!0}}]);