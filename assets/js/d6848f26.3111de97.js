"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[1583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"page-4",title:"Functions",sidebar_position:4},i=void 0,s={unversionedId:"turing-tako/intro-to-cs/page-4",id:"turing-tako/intro-to-cs/page-4",title:"Functions",description:"As programs get larger, they become more difficult to understand and maintain. In computer science, we take two approaches to break down complex programs into smaller, more manageable pieces.",source:"@site/docs/turing-tako/intro-to-cs/function.mdx",sourceDirName:"turing-tako/intro-to-cs",slug:"/turing-tako/intro-to-cs/page-4",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/intro-to-cs/function.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"page-4",title:"Functions",sidebar_position:4},sidebar:"turingSidebar",previous:{title:"Strings and Algorithms",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-3"},next:{title:"Tuples and Lists",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-5"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"Calling Functions",id:"calling-functions",level:3},{value:"Docstring",id:"docstring",level:3},{value:"Scope",id:"scope",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As programs get larger, they become more difficult to understand and maintain. In computer science, we take two approaches to break down complex programs into smaller, more manageable pieces."),(0,o.kt)("p",null,"The first approach is to use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"abstraction")),". The idea is to hide the details of a complex process behind a simple interface. For example, every car has a steering wheel to drive it. You don't need to know how the car works to drive it, just how to use the steering wheel. The steering wheel is an abstraction that hides the details of the car's internal complexity."),(0,o.kt)("p",null,"The second approach is to use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"decomposition")),". We can break down a complex program into smaller, more manageable pieces and then combine them to solve the problem. For example, we can write a program to draw simple shapes like circles and rectangles. Then we can combine these simple shapes to draw more complex shapes like a house or a car."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"Instead of using one of these approaches, we use both of them using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"functions")),". A function helps divide a program into smaller, reusable pieces. This lets our code be more organized and easier to understand."),(0,o.kt)("p",null,"The syntax for a function is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"def <function_name>(<parameters>):\n    <statements>\n    ...\n    <statements>\n    return <value>\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The keyword ",(0,o.kt)("inlineCode",{parentName:"li"},"def")," tells Python that we are defining a function."),(0,o.kt)("li",{parentName:"ol"},"The function name is the name of the function. Like variable names, function names should be descriptive and give functions meaning."),(0,o.kt)("li",{parentName:"ol"},"The parameters are the values that the function needs to its job. It is the input to the function and is optional. You can seperate multiple parameters with commas."),(0,o.kt)("li",{parentName:"ol"},"You can have any number of statements in the body of the function. The statements are the code that the function will execute."),(0,o.kt)("li",{parentName:"ol"},"The keyword ",(0,o.kt)("inlineCode",{parentName:"li"},"return")," tells Python what value to return to the caller. The value is optional. If you don't use ",(0,o.kt)("inlineCode",{parentName:"li"},"return"),", the function will return ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,o.kt)("p",null,"Here is an example of a function that adds two numbers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example Functions" showLineNumbers',title:'"Example','Functions"':!0,showLineNumbers:!0},"# Adds two numbers and returns the result\ndef add(a, b):\n    return a + b\n\n# Prints hello five times\ndef five_hello(): # This function doesn't take any inputs\n    for i in range(5):\n        print(\"Hello\") # This function doesn't return anything\n")),(0,o.kt)("h3",{id:"calling-functions"},"Calling Functions"),(0,o.kt)("p",null,"You can use these functions by calling them. The syntax for calling a function is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<function_name>(<arguments>)\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The function name is the name of the function you want to call."),(0,o.kt)("li",{parentName:"ol"},"The arguments are the values that you want to pass to the function. Each argument corresponds to a parameter in the function so the order matters.")),(0,o.kt)("p",null,"Formal parameters get bounded to the value of the actual parameters when the function is called."),(0,o.kt)("p",null,"Here is an example of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example Function Calls" showLineNumbers',title:'"Example',Function:!0,'Calls"':!0,showLineNumbers:!0},"# Adds 2 and 3 and prints the result\nprint(add(2, 3)) # Prints 5\nprint(add(7, 2)) # Prints 9\n\n# Prints hello fifteen times\nfive_hello()\nfive_hello()\nfive_hello()\n")),(0,o.kt)("p",null,"The benefit of using functions is that you can reuse them, recall them many times and you decompose your code into smaller pieces so you can debug each function individually which is easier than debugging a whole program in one go."),(0,o.kt)("h3",{id:"docstring"},"Docstring"),(0,o.kt)("p",null,"To add more abstraction to a function, you can add a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"docstring")),". It is written right after the colon with triple quotes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Docstring" showLineNumbers',title:'"Docstring"',showLineNumbers:!0},'def add(a, b):\n    """\n    Input: a and b are numbers\n    Output: the sum of a and b\n    """\n    return a + b\n')),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"Variables behave differently inside and outside of functions. Variables defined inside a function are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"local"))," to the function. This means that they only exist inside the function and cannot be accessed outside of it. Variables defined outside of a function are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"global")),". This means that they can be accessed inside and outside of the function."),(0,o.kt)("p",null,"Here is an example of local and global variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Scope" showLineNumbers',title:'"Scope"',showLineNumbers:!0},"# Global variable\nx = 5\n\n# Function that prints the value of x\ndef print_x():\n    # Can access global variable x\n    print(x)\n    y = 10 # Local variable\n\n# Cannot access local variable y\nprint(y) # ERROR\n")),(0,o.kt)("p",null,"You can name the local variable the same as the global variable but it will not affect the global variable. This is called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"shadowing")),". When you access that variable, it will access the local variable instead of the global variable. Local variables cannot change global variable."),(0,o.kt)("p",null,"Here is an example of shadowing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Shadowing" showLineNumbers',title:'"Shadowing"',showLineNumbers:!0},"# Global variable\nx = 5\n\n# Function that prints the value of x\ndef print_x():\n    # Shadowing\n    x = 10 # Cannot access global variable x\n    print(x)\n\nprint_x() # Prints 10\nprint(x) # Prints 5 because the global x cannot be changed inside the function\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"global")," keyword that you can use to change global variables inside a function. However, it is frowned upon and should be avoided because it makes your code more difficult to understand.")))}p.isMDXComponent=!0}}]);