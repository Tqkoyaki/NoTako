"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[4938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,c=d["".concat(r,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(c,s(s({ref:t},u),{},{components:n})):a.createElement(c,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={id:"page-1",title:"Programming in ML",sidebar_position:1},s=void 0,l={unversionedId:"turing-tako/prog-lang-a/page-1",id:"turing-tako/prog-lang-a/page-1",title:"Programming in ML",description:"ML is a functional programming language which means it emphasizes immutable data and functions that take and return other functions. This style of programming is powerful and allows us to do things object-oriented languages can't.",source:"@site/docs/turing-tako/prog-lang-a/ml.mdx",sourceDirName:"turing-tako/prog-lang-a",slug:"/turing-tako/prog-lang-a/page-1",permalink:"/NoTako/docs/turing-tako/prog-lang-a/page-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/prog-lang-a/ml.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"page-1",title:"Programming in ML",sidebar_position:1},sidebar:"turingSidebar",previous:{title:"Graphs",permalink:"/NoTako/docs/turing-tako/complex-data/page-9"},next:{title:"Week 2",permalink:"/NoTako/docs/turing-tako/prog-lang-a/page-2"}},r={},p=[{value:"Bindings",id:"bindings",level:2},{value:"Variable Bindings",id:"variable-bindings",level:3},{value:"Constants",id:"constants",level:3},{value:"Arthemetic Expressions",id:"arthemetic-expressions",level:3},{value:"Boolean Expressions",id:"boolean-expressions",level:3},{value:"String Expressions",id:"string-expressions",level:3},{value:"Function Bindings",id:"function-bindings",level:3},{value:"Using Files",id:"using-files",level:2},{value:"Compound Data",id:"compound-data",level:2},{value:"Tuples",id:"tuples",level:3},{value:"Lists",id:"lists",level:3},{value:"Lack of Mutation",id:"lack-of-mutation",level:3},{value:"Let Expressions",id:"let-expressions",level:2},{value:"Options",id:"options",level:2},{value:"Pieces of a Language",id:"pieces-of-a-language",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ML is a functional programming language which means it emphasizes immutable data and functions that take and return other functions. This style of programming is powerful and allows us to do things object-oriented languages can't."),(0,i.kt)("h2",{id:"bindings"},"Bindings"),(0,i.kt)("p",null,"A program in ML is built up of a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"sequence of bindings")),". Each binding follows two steps during evaluation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It firstly gets ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"type-checked"))," by the compiler. The binding depended on a ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"static environment"))," (also refered to as the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"context")),") which holds the types of all the preceding bindings in the file. A new static environment is then created with this new binding added."),(0,i.kt)("li",{parentName:"ol"},"The second step is to actually ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"evaluate"))," the binding. This is done using a ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"dynamic environment"))," (also refered to as the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"environment")),") which holds all the evaluated values of the preceding bindings in the file. A new dynamic environment is then created with this new binding added.")),(0,i.kt)("h3",{id:"variable-bindings"},"Variable Bindings"),(0,i.kt)("p",null,"There are several types of bindings in ML. The first type is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"variable binding"))," which is used to bind a value to a variable name. The syntax for a variable binding is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Variable Binding" showLineNumbers=true',title:'"Variable','Binding"':!0,showLineNumbers:"true"},"val x = e;\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," is a keyword to indicate it is a variable binding, ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is a variable name and ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," is an expression. The expression ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," is type-checked and the type of the expression is bound to the variable name. The expression is then evaluated to the point it becomes a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"value"))," which is an expression that cannot be evaluated any further. This value is then bound to the variable name in the dynamic environment."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The semi-colon ",(0,i.kt)("inlineCode",{parentName:"p"},";")," is optional in a file but required in the REPL (Read-Eval-Print-Loop). This is because the REPL needs to know when to evaluate the expression as it is typed in. This also means that you can seperate a binding into multiple lines in a REPL as long as you end it with a semi-colon.")),(0,i.kt)("p",null,"Bindings in ML are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"immutable")),"  which means a variable will always bound to the same value. Let's say ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," maps to ",(0,i.kt)("inlineCode",{parentName:"p"},"17")," in the dynamic environment, it will always map to ",(0,i.kt)("inlineCode",{parentName:"p"},"17"),". We can still have another binding later in the file called ",(0,i.kt)("inlineCode",{parentName:"p"},"val x = 19;")," but as previously mentioned, a new dynamic environment is created for each binding. So ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," maps to ",(0,i.kt)("inlineCode",{parentName:"p"},"19")," in the new dynamic environment but still maps to ",(0,i.kt)("inlineCode",{parentName:"p"},"17")," in the old dynamic environment. This is reffered to as ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"shadowing"))," because we aren't actually changing the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," in the old dynamic environment, we are just creating a new binding with the same name."),(0,i.kt)("h3",{id:"constants"},"Constants"),(0,i.kt)("p",null,"All constants are values which means they evaluate to themselves in any dynamic environment. Some examples of constants are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Integer Constants:")," A sequence of digits such as ",(0,i.kt)("inlineCode",{parentName:"li"},"17")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". It has the type ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," in the static environment."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Real Constants:")," A sequence of digits with a decimal point such as ",(0,i.kt)("inlineCode",{parentName:"li"},"3.14")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0"),". It has the type ",(0,i.kt)("inlineCode",{parentName:"li"},"real")," in the static environment."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Boolean Constants:")," The keywords ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". It has the type ",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," in the static environment."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"String Constants:")," A sequence of characters surrounded by double quotes such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello World!"'),". It has the type ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," in the static environment.")),(0,i.kt)("h3",{id:"arthemetic-expressions"},"Arthemetic Expressions"),(0,i.kt)("p",null,"In ML addition, subtraction, and multiplication are the same for both integers and reals. Both expressions have to be either of these types and they need to have the same type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Addition, Subtraction, Multiplication" showLineNumbers=true',title:'"Addition,',"Subtraction,":!0,'Multiplication"':!0,showLineNumbers:"true"},"(* Addition *)\nval add_int = 17 + 3; (* 20 *)\nval add_real = 12.0 + 7.0; (* 19.0 *)\n\n(* Subtraction *)\nval sub_int = 16 - 7; (* 9 *)\nval sub_real = 12.0 - 3.0; (* 9.0 *)\n\n(* Multiplication *)\nval mul_int = 3 * 5; (* 15 *)\nval mul_real = 2.0 * 3.0; (* 6.0 *)\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As shown above, comments in ML are surrounded by ",(0,i.kt)("inlineCode",{parentName:"p"},"(*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"*)")," and can span multiple lines. These are ignored by the compiler.")),(0,i.kt)("p",null,"The division operator is different because dividing two integers and two reals are different operations. The division operator ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," is used for reals and is the division we are typically used to. The division operator ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," is used for integers and is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"integer division"))," which means it rounds down to the nearest integer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Division" showLineNumbers=true',title:'"Division"',showLineNumbers:"true"},"(* Real Division *)\nval div_real = 17.0 / 3.0; (* 5.666666666666667 *)\n\n(* Integer Division *)\nval div_int = 17 div 3; (* 5 *)\n")),(0,i.kt)("p",null,"Due to the fact that integer division rounds down, there is a remainder operator ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," which returns the remainder of the division."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Modulus" showLineNumbers=true',title:'"Modulus"',showLineNumbers:"true"},"val mod_int = 17 mod 3; (* 2 *)\n")),(0,i.kt)("h3",{id:"boolean-expressions"},"Boolean Expressions"),(0,i.kt)("p",null,"Boolean expressions are expressions that will always evaluate to either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". For equality, the two expressions must be of the same type but can be any of the four types mentioned earlier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Equality" showLineNumbers=true',title:'"Equality"',showLineNumbers:"true"},'(* Equality *)\nval eq_int = 17 = 17; (* true *)\nval eq_real = 3.14 = 3.14; (* true *)\nval eq_bool = true = false; (* false *)\nval eq_string = "Hello" = "World"; (* false *)\n\n(* Inequality *)\nval neq_int = 17 <> 17; (* false *)\nval neq_real = 3.14 <> 3.14; (* false *)\nval neq_bool = true <> false; (* true *)\nval neq_string = "Hello" <> "World"; (* true *)\n')),(0,i.kt)("p",null,"Some other boolean operators are greater than ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", less than ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", greater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},">="),", and less than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),". These operators can only be used with numbers (integers and reals)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Comparisons" showLineNumbers=true',title:'"Comparisons"',showLineNumbers:"true"},"(* Greater Than *)\nval gt_int = 17 > 3; (* true *)\nval gt_real = 3.14 > 3.0; (* true *)\n\n(* Less Than *)\nval lt_int = 17 < 3; (* false *)\nval lt_real = 3.14 < 3.0; (* false *)\n\n(* Greater Than or Equal To *)\nval gte_int = 17 >= 3; (* true *)\nval gte_real = 3.14 >= 3.0; (* true *)\n\n(* Less Than or Equal To *)\nval lte_int = 17 <= 3; (* false *)\nval lte_real = 3.14 <= 3.0; (* false *)\n")),(0,i.kt)("p",null,"The last few boolean operators allow us to combine boolean expressions. The first operator is ",(0,i.kt)("inlineCode",{parentName:"p"},"andalso")," which is true if both expressions are true. The second operator is ",(0,i.kt)("inlineCode",{parentName:"p"},"orelse")," which is true if either expression is true. The last operator only applies to one boolean expression and is ",(0,i.kt)("inlineCode",{parentName:"p"},"not")," which is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if the expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Boolean Operators" showLineNumbers=true',title:'"Boolean','Operators"':!0,showLineNumbers:"true"},"(* And *)\nval andalso_true = true andalso true; (* true *)\nval andalso_false = true andalso false; (* false *)\n\n(* Or *)\nval orelse_true = true orelse false; (* true *)\nval orelse_false = false orelse false; (* false *)\n\n(* Not *)\nval not_true = not false; (* true *)\nval not_false = not true; (* false *)\n")),(0,i.kt)("p",null,"Finally, we can use all these boolean operators in conditional expressions. A conditional expression is an expression that evaluates to one of two values depending on the value of a boolean expression. The syntax for a conditional expression is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Conditional Expression" showLineNumbers=true',title:'"Conditional','Expression"':!0,showLineNumbers:"true"},"val x = if e1 then e2 else e3\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"e1")," is a boolean expression and both ",(0,i.kt)("inlineCode",{parentName:"p"},"e2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"e3")," are expressions of the same type. The whole expression has the same type as ",(0,i.kt)("inlineCode",{parentName:"p"},"e2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"e3"),". The boolean expression ",(0,i.kt)("inlineCode",{parentName:"p"},"e1")," is evaluated and if it is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," then ",(0,i.kt)("inlineCode",{parentName:"p"},"e2")," is evaluated and returned. If ",(0,i.kt)("inlineCode",{parentName:"p"},"e1")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," then ",(0,i.kt)("inlineCode",{parentName:"p"},"e3")," is evaluated and returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Conditional Expression" showLineNumbers=true',title:'"Conditional','Expression"':!0,showLineNumbers:"true"},"val x = if 17 > 3 then 17 else 3; (* 17 *)\n\nval y = if 17 < 3 then 17 else 3; (* 3 *)\n")),(0,i.kt)("h3",{id:"string-expressions"},"String Expressions"),(0,i.kt)("p",null,"When we are working with strings, it is convenient to be able to combine two strings together. This is called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"string concatenation"))," and is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," operator. The two expressions must be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and the result is also of type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="String Concatenation" showLineNumbers=true',title:'"String','Concatenation"':!0,showLineNumbers:"true"},'val x = "Hello" ^ "World"; (* "HelloWorld" *)\n')),(0,i.kt)("p",null,"It can also be useful to convert a integer to a string which is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Int.toString")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Integer to String" showLineNumbers=true',title:'"Integer',to:!0,'String"':!0,showLineNumbers:"true"},'val x = Int.toString 17; (* "17" *)\n')),(0,i.kt)("h3",{id:"function-bindings"},"Function Bindings"),(0,i.kt)("p",null,"Another type of binding is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"function binding"))," which is used to bind a function to a function name. A function in ML is similar to a method in Java because it is called with arguments and has a body that produces a result. The syntax for a function binding is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Function Binding" showLineNumbers=true',title:'"Function','Binding"':!0,showLineNumbers:"true"},"fun x0 (x1 : t1, ..., xn : tn) = e;\n\n(* Example of a function binding *)\nfun pow (x: int, y: int) = (* correct only for y >= 0 *)\n    if y = 0\n    then 1\n    else x * pow(x, y - 1);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"fun")," is a keyword to indicate it is a function binding, ",(0,i.kt)("inlineCode",{parentName:"p"},"x0")," is a function name, ",(0,i.kt)("inlineCode",{parentName:"p"},"x1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"xn")," are argument names, ",(0,i.kt)("inlineCode",{parentName:"p"},"t1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"tn")," are argument types, and ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," is an expression. The reason for ",(0,i.kt)("inlineCode",{parentName:"p"},"x1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"xn")," is to signify that a function can have as many arguments as you want, you just need to specify the types of each argument."),(0,i.kt)("p",null,"In order to type-check a function binding, we type-check the body of the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," using a static environment that maps the argument names to their types. The type of the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," is then bound to the function name in the static environment. In terms of evaluation, a function is a value which means we simply add ",(0,i.kt)("inlineCode",{parentName:"p"},"x0")," to the dynamic environment as a function that we can call later."),(0,i.kt)("p",null,"For function bindings, we need to also look at the syntax for calling a function. The syntax is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Calling a Function" showLineNumbers=true',title:'"Calling',a:!0,'Function"':!0,showLineNumbers:"true"},"e0 (e1, ..., en);\n\n(* Example of calling a function *)\nval ans = pow(2, 3); (* 8 *)\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"e0")," is the name of the function we would like to call and ",(0,i.kt)("inlineCode",{parentName:"p"},"e1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"en")," are the arguments we would like to pass to the functions. These arguments must have the same type as the argument types specified in the function binding and the order of the arguments must match the order of the argument names. To evaluate a function call, we extend the environments by adding bindings for the argument names to the argument values and then once the body of the function is evaluated, we go back to the environment before the function call."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the function call only has one argument, then the parentheses are optional.")),(0,i.kt)("h2",{id:"using-files"},"Using Files"),(0,i.kt)("p",null,"Sometimes we want to use bindings from other files in our current file. We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," keyword to do this. The syntax for using a file is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Using a File" showLineNumbers=true',title:'"Using',a:!0,'File"':!0,showLineNumbers:"true"},'use "filename.sml";\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"filename.sml")," is the name of the file we would like to use. The file must be in the same directory as the file we are using it in. The file is then type-checked and evaluated in the current file."),(0,i.kt)("h2",{id:"compound-data"},"Compound Data"),(0,i.kt)("p",null,"Sometimes constants are not enough to represent the data we want to work with. For example, we might want to represent a point in 2D space or a person with a name and age. In order to do this, we need to use compound data which is data that is made up of other data."),(0,i.kt)("h3",{id:"tuples"},"Tuples"),(0,i.kt)("p",null,"The first type of compound data is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"tuple"))," which is a sequence of values which can be of different types. The syntax for a tuple is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Tuple" showLineNumbers=true',title:'"Tuple"',showLineNumbers:"true"},'val x = (e1, ..., en);\n\n(* Example of tuples *)\nval point = (3, 4); (* (3, 4) *)\nval person = ("John", 21, true); (* ("John", 21, true) *)\n')),(0,i.kt)("p",null,"The type of a tuple is a sequence of the types of the values in the tuple seperated by ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". For example, the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"point")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"int * int")," and the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"person")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"string * int * bool"),"."),(0,i.kt)("p",null,"We can access the values in a tuple using the ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," operator. The syntax for accessing a value in a tuple is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Accessing a Tuple" showLineNumbers=true',title:'"Accessing',a:!0,'Tuple"':!0,showLineNumbers:"true"},'val person = ("John", 21, true);\n\nval name = #1 person; (* "John" *)\nval age = #2 person; (* 21 *)\nval isMale = #3 person; (* true *)\n')),(0,i.kt)("p",null,"The number after the ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," operator is the index of the value we want to access. The index starts at ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and goes up to the number of values in the tuple. The type of value we get back is the type of the value at that index."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can nest tuples inside of tuples. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"((1, 2), (3, 4))")," is a tuple of two tuples. The type of this tuple is ",(0,i.kt)("inlineCode",{parentName:"p"},"(int * int) * (int * int)"),".")),(0,i.kt)("h3",{id:"lists"},"Lists"),(0,i.kt)("p",null,"The second type of compound data is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"list")),". It is similar to a tuple because it is a sequence of values but all the values must be of the same type. The benefits of a list is that it can be of any length so we don't need to know how many values we want to store in the list. The syntax for a list is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="List" showLineNumbers=true',title:'"List"',showLineNumbers:"true"},'val x = [e1, ..., en];\n\n(* Example of lists *)\nval numbers = [1, 2, 3, 4, 5]; (* [1, 2, 3, 4, 5] *)\nval names = ["John", "Jane", "Jack"]; (* ["John", "Jane", "Jack"] *)\n')),(0,i.kt)("p",null,"The type of a list is the type of the values in the list followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),". For example, the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"numbers")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"int list")," and the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"names")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"string list"),". If the list is empty, then it can be any type which ML denotes using ",(0,i.kt)("inlineCode",{parentName:"p"},"'a list"),' (pronounced "alpha list").'),(0,i.kt)("p",null,"We can also add an element to the front of a list using the ",(0,i.kt)("inlineCode",{parentName:"p"},"::")," operator. The first operand must be a value of the same type as the values in the list and the second operand must be the list we are adding to. The syntax for adding an element to the front of a list is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Adding to a List" showLineNumbers=true',title:'"Adding',to:!0,a:!0,'List"':!0,showLineNumbers:"true"},'val x = e :: l;\n\n(* Example of adding to a list *)\nval numbers = 1 :: [2, 3, 4, 5]; (* [1, 2, 3, 4, 5] *)\nval names = "John" :: ["Jane", "Jack"]; (* ["John", "Jane", "Jack"] *)\n')),(0,i.kt)("p",null,"Another operator we can use with lists is the ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," operator which allows us to combine two lists together. The syntax for combining two lists is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Combining Lists" showLineNumbers=true',title:'"Combining','Lists"':!0,showLineNumbers:"true"},"val x = l1 @ l2;\n\n(* Example of combining lists *)\nval numbers = [1, 2, 3] @ [4, 5]; (* [1, 2, 3, 4, 5] *)\n")),(0,i.kt)("p",null,"Finally, there are also three functions in ML that we commonly use when working with lists. These functions are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"hd")),": Returns the first element of a list. An error is thrown if the list is empty."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"tl")),": Returns the list without the first element. An error is thrown if the list is empty."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"null")),": Returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the list is empty and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," otherwise.")),(0,i.kt)("p",null,"It is important to note that these functions allow us to work with lists using recursive functions. We can break down the list and work with the head of the list one at a time. We then can pass the tail of the list to the recursive function and repeat till we reach the base case which is when the list is empty."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Working with Lists" showLineNumbers=true',title:'"Working',with:!0,'Lists"':!0,showLineNumbers:"true"},"fun sum_list (l: int list) =\n    if null l\n    then 0\n    else hd l + sum_list (tl l);\n\nfun append (xs : int list, ys : int list) = \n    if null xs\n    then ys\n    else hd xs :: append (tl xs, ys);\n\nfun countdown (x: int) = \n    if x = 0\n    then []\n    else x :: countdown (x - 1);\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We can have a list of tuples or a tuple of lists. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[(1, 2), (3, 4)]")," is a list of tuples and ",(0,i.kt)("inlineCode",{parentName:"p"},"([1, 2], [3, 4])")," is a tuple of lists. The type of the list of tuples is ",(0,i.kt)("inlineCode",{parentName:"p"},"(int * int) list")," and the type of the tuple of lists is ",(0,i.kt)("inlineCode",{parentName:"p"},"int list * int list"),".")),(0,i.kt)("h3",{id:"lack-of-mutation"},"Lack of Mutation"),(0,i.kt)("p",null,"In many languages, we can pass around mutable data structures and mutate (change) the data it is holding as we please. We can have multiple variables pointing to the same data structure (called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"aliasing")),") and if we change the data in one variable, it will change the data in the other variable. This can be useful but it can also lead to bugs that are hard to find because it is hard to keep track of all the variables that are pointing to the same data structure. What is nice about ML is that there is no mutation so when we pass around data structures, we are not actually passing around the data structure, we are passing around a copy of the data structure. We never actually change any data, we just create new data structures with the changes we want."),(0,i.kt)("h2",{id:"let-expressions"},"Let Expressions"),(0,i.kt)("p",null,"Let expressions are another type of expression which can be used anywhere we can use a typical expression. The syntax for a let expression is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Let Expression" showLineNumbers=true',title:'"Let','Expression"':!0,showLineNumbers:"true"},"let b1 b2 ... bn in e end;\n\n(* Example of a let expression *)\nval y = 16;\nval x = let\n            val y = 17\n            val z = 3\n        in\n            y + z\n        end; (* 20 *)\nval z = y; (* 16 *)\n")),(0,i.kt)("p",null,"It allows us to create a larger enviornment which holds the bindings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," expression which we can use in the expression. After the expression ends, we go back to the environment before the ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," expression. This ability to have scope and local variables allows us to write more complex functions."),(0,i.kt)("p",null,"Having local variables can be useful in writing clean and efficient code. Recursive functions can sometimes take a lot of computation espically if the function is repeated. We can stop these repeated computations by using local variables to store the result of the function. This is called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"memoization"))," and is a common technique in functional programming."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Without Memoization" showLineNumbers=true',title:'"Without','Memoization"':!0,showLineNumbers:"true"},"fun bad_max (xs: int list) =\n    if null xs\n    then 0\n    else if null (tl xs)\n    then hd xs\n    else if hd xs > bad_max (tl xs)\n    then hd xs\n    else bad_max (tl xs);\n")),(0,i.kt)("p",null,"Above we can see we are calling ",(0,i.kt)("inlineCode",{parentName:"p"},"bad_max (tl xs)")," twice if ",(0,i.kt)("inlineCode",{parentName:"p"},"bad_max (tl xs) >= hd xs"),". This can get extremely expensive espically in large lists. We can fix this with memoization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="With Memoization" showLineNumbers=true',title:'"With','Memoization"':!0,showLineNumbers:"true"},"fun good_max (xs : int list) =\n    if null xs\n    then 0\n    else if null (tl xs)\n    then hd xs\n    else\n        let val tl_ans = good_max(tl xs)\n        in\n            if hd xs > tl_ans\n            then hd xs\n            else tl_ans\n        end;\n")),(0,i.kt)("p",null,"The result of ",(0,i.kt)("inlineCode",{parentName:"p"},"good_max (tl xs)")," gets stored in a local variable ",(0,i.kt)("inlineCode",{parentName:"p"},"tl_ans")," so we don't need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"good_max (tl xs)")," twice."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"good_max")," function still has one issue and that is if we give the function a list of negative numbers. It will state that the maximum is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," which is not true. It is not the greatest to return if we are given an empty list. We can instead return ",(0,i.kt)("inlineCode",{parentName:"p"},"NONE")," which means nothing using an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"option")),". An option is a type that can either be ",(0,i.kt)("inlineCode",{parentName:"p"},"SOME")," value or ",(0,i.kt)("inlineCode",{parentName:"p"},"NONE"),". Now due to the fact that options can be ",(0,i.kt)("inlineCode",{parentName:"p"},"NONE"),", we have some functions to help us work with them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"valOf")),": Returns the value of an option. An error is thrown if the option is ",(0,i.kt)("inlineCode",{parentName:"li"},"NONE"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"isSome")),": Returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the option is ",(0,i.kt)("inlineCode",{parentName:"li"},"SOME")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," if the option is ",(0,i.kt)("inlineCode",{parentName:"li"},"NONE"),".")),(0,i.kt)("p",null,"Using these functions, we can rewrite the ",(0,i.kt)("inlineCode",{parentName:"p"},"good_max")," function to return an option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sml",metastring:'title="Good Max with Options" showLineNumbers=true',title:'"Good',Max:!0,with:!0,'Options"':!0,showLineNumbers:"true"},"fun better_max (xs : int list) =\n    if null xs\n    then NONE\n    else let (* fine to assume argument nonempty because it is local *)\n        fun max_nonempty (xs : int list) =\n            if null (tl xs) (* xs must not be [] *)\n            then hd xs\n            else let val tl_ans = max_nonempty(tl xs)\n                in\n                    if hd xs > tl_ans\n                    then hd xs\n                    else tl_ans\n                end;\n")),(0,i.kt)("p",null,"Through the use of let expressions, options, and recursion, we were able to write a complex function cleanly and efficiently."),(0,i.kt)("h2",{id:"pieces-of-a-language"},"Pieces of a Language"),(0,i.kt)("p",null,"For any programming language there are five questions we need to ask to better understand the language:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Syntax:")," How do you write parts of the language?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Semantics:")," What do the parts of the language mean?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Idioms:")," What are common ways to use the language?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Libraries:")," What libraries are available to make programming easier?"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Tools:")," What tools are available to make programming easier?")),(0,i.kt)("p",null,"Even though libraries and tools are not required to write a program, they are still important to becoming a better programmer in that language."))}m.isMDXComponent=!0}}]);