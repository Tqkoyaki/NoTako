"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[90],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={id:"page-2",title:"Branching and Iteration",sidebar_position:2},a=void 0,l={unversionedId:"turing-tako/intro-to-cs/page-2",id:"turing-tako/intro-to-cs/page-2",title:"Branching and Iteration",description:"A computer executes a program line by line from top to bottom. However, there are times when we want to execute a block of code multiple times or skip a block of code. This is where branching and iteration come in.",source:"@site/docs/turing-tako/intro-to-cs/controlflow.mdx",sourceDirName:"turing-tako/intro-to-cs",slug:"/turing-tako/intro-to-cs/page-2",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/intro-to-cs/controlflow.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"page-2",title:"Branching and Iteration",sidebar_position:2},sidebar:"turingSidebar",previous:{title:"Introduction to Computation",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-1"},next:{title:"Strings and Algorithms",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-3"}},s={},p=[{value:"Strings",id:"strings",level:2},{value:"Input",id:"input",level:2},{value:"Branching",id:"branching",level:2},{value:"Comparison and Logical Operators",id:"comparison-and-logical-operators",level:3},{value:"Conditionals",id:"conditionals",level:3},{value:"Iteration",id:"iteration",level:2},{value:"While Loops",id:"while-loops",level:3},{value:"For Loops",id:"for-loops",level:3},{value:"Break",id:"break",level:3},{value:"Types of Loops",id:"types-of-loops",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A computer executes a program line by line from top to bottom. However, there are times when we want to execute a block of code multiple times or skip a block of code. This is where branching and iteration come in."),(0,i.kt)("h2",{id:"strings"},"Strings"),(0,i.kt)("p",null,"Before we go into control flow, let's look at more Python code first. As seen before, strings are a sequence of characters (letters, special characters, spaces, digits) enclosed in either quotation marks or single quotes."),(0,i.kt)("p",null,"Like with numbers, we can perform operations on strings. Adding strings together is called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"concatenation"))," and it joins the strings together. We can also multiply strings by a number which repeats the string that many times."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Strings" showLineNumbers',title:'"Strings"',showLineNumbers:!0},'# Creating a string\n"Hello World"\n\'Hello World\'\n\n# String operations\nprint("Hello" + "World") # Prints "HelloWorld"\nprint("Hello" * 3) # Prints "HelloHelloHello"\n\n# Order of operations still applies\nprint("Hello")\n')),(0,i.kt)("h2",{id:"input"},"Input"),(0,i.kt)("p",null,"The second way to interact with the outside world is to take input. In python you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"input()")," command to get an input from the console. You can also provide a string to ",(0,i.kt)("inlineCode",{parentName:"p"},"input()")," which will be printed to the console before the user inputs their value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Input" showLineNumbers',title:'"Input"',showLineNumbers:!0},'# Getting input from the user\ninput() # Waits for the user to input a value\ninp = input("Enter a number: ") # Prints "Enter a number: " and waits for the user to input a value\n\n# Printing the input\nprint(inp)\n\n# Casting the input (Input is always given as a string)\ninp = int(input("Enter a number: "))\nprint(inp + 1)\n')),(0,i.kt)("h2",{id:"branching"},"Branching"),(0,i.kt)("p",null,"The first way to control the flow of a program is with conditionals. They allow you to execute a block of code only if a certain condition is met and so code can be skipped if the condition is not met."),(0,i.kt)("h3",{id:"comparison-and-logical-operators"},"Comparison and Logical Operators"),(0,i.kt)("p",null,"Before we can use conditionals, we need to be able to compare values using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"comparison operators")),". These operators compare two values and return a boolean value (True or False). The comparison operators are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Greater than: >\nLess than: <\nGreater than or equal to: >=\nLess than or equal to: <=\nEqual to: == (Note: This is not the same as the assignment operator =)\nNot equal to: !=\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Logical operators"))," are used to combine multiple comparisons. The logical operators are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"And (both comparisons must be true): and\nOr (at least one comparison must be true): or\nNot (inverts the boolean value): not\n")),(0,i.kt)("p",null,"Examples in Python:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Conditionals" showLineNumbers',title:'"Conditionals"',showLineNumbers:!0},"# Comparison operators\nprint(1 > 2) # Prints False\nprint(1 < 2) # Prints True\nprint(1 >= 2) # Prints False\nprint(1 <= 2) # Prints True\nprint(1 == 2) # Prints False\nprint(1 != 2) # Prints True\n\n# Logical operators\nprint(1 > 2 and 1 < 2) # Prints False\nprint(1 > 2 or 1 < 2) # Prints True\nprint(not 1 > 2) # Prints True\n")),(0,i.kt)("h3",{id:"conditionals"},"Conditionals"),(0,i.kt)("p",null,"There are three types of branching in Python: ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"elif"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"else"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," is used to execute a block of code if a condition is met. ",(0,i.kt)("inlineCode",{parentName:"p"},"elif")," is used to execute a block of code if a condition is met and the previous conditions were not met. ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," is used to execute a block of code if none of the previous conditions were met."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement always comes first and is followed by zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"elif")," statements and an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," statement at the end. Only one block of code will be executed and it is always the first condition that is met so the order of ",(0,i.kt)("inlineCode",{parentName:"p"},"elif")," matters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Branching" showLineNumbers',title:'"Branching"',showLineNumbers:!0},'# Just an if statement\nif 1 > 2:\n    print("This will not be printed")\n\n# If and else\nif 1 > 2:\n    print("This will not be printed")\nelse:\n    print("This will be printed")\n\n# If, elif, and else\nif 1 > 2:\n    print("This will not be printed")\nelif 1 < 2:\n    print("This will be printed")\nelse:\n    print("This will not be printed")\n\n# If, elif, and else with multiple conditions\nif 1 > 2:\n    print("This will not be printed")\nelif 1 < 2 and 2 > 3:\n    print("This will not be printed")\nelif 1 < 2:\n    print("This will be printed")\nelse:\n    print("This will not be printed")\n\n# You don\'t have to use else\nif 1 > 2:\n    print("This will not be printed")\nelif 1 < 2:\n    print("This will be printed")\n\n# Body of a conditional must be indented and can be as many lines as you want\nif 1 > 2:\n    print("This will not be printed")\n    print("This will not be printed")\n    print("This will not be printed")\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The body of a condition must be indented in Python. Anything that is not indented is not part of the conditional.")),(0,i.kt)("h2",{id:"iteration"},"Iteration"),(0,i.kt)("p",null,"The second way to control the flow of a program is with loops. They allow you to run the same block of code multiple times."),(0,i.kt)("h3",{id:"while-loops"},"While Loops"),(0,i.kt)("p",null,"While loops execute a block of code repeatedly using a condition like with if statements. The block of code will be executed if the condition is true and once the block of code is executed, the condition is checked again. This process repeats until the condition is false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="While Loops" showLineNumbers',title:'"While','Loops"':!0,showLineNumbers:!0},"# This while loop will run five times\n# i will eventually be equal to 5 which makes the condition false\ni = 0\nwhile i < 5:\n    print(i)\n    i += 1\n")),(0,i.kt)("p",null,"The output is..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n1\n2\n3\n4\n")),(0,i.kt)("p",null,"This also means that if the condition is never false, the loop will run forever. This is called an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"infinite loop"))," and is usually not what you want."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Infinite Loops" showLineNumbers',title:'"Infinite','Loops"':!0,showLineNumbers:!0},"# This while loop will run forever\n# i is never changed so it is always 0 which makes the condition true forever\ni = 0\nwhile i < 5:\n    print(i)\n")),(0,i.kt)("h3",{id:"for-loops"},"For Loops"),(0,i.kt)("p",null,"For loops are used to iterate if you know how many times you want to iterate. They are similar to while loops but instead of using a condition, they use a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"counter")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="For Loops" showLineNumbers',title:'"For','Loops"':!0,showLineNumbers:!0},"# This for loop will run five times\nfor i in range(5): # The counter changes from 0 to 4\n    print(i)\n")),(0,i.kt)("p",null,"The output is..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n1\n2\n3\n4\n")),(0,i.kt)("p",null,"As you can see, the code does the same thing as the while loop earlier but the difference is the while loop does not need a counter but if you want to use one, you have to create it yourself. The for loop immediately gives you a counter that you can use and does not rely on a condition."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"range()")," function is what controls the counter. If it is only given one argument, it will start at 0 and go up to but not including the argument."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"range()")," is given two arguments, it will start at the first argument and go up to but not including the second argument."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"range()")," is given three arguments, it will start at the first argument and go up to but not including the second argument and increment by the third argument. It is the step argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="For Loops" showLineNumbers',title:'"For','Loops"':!0,showLineNumbers:!0},"# The counter changes from 0 to 4\nfor i in range(5):\n    print(i) # The output is 0, 1, 2, 3, and 4\n\n# The counter changes from 1 to 5\nfor i in range(1, 6):\n    print(i) # The output is 1, 2, 3, 4, and 5\n\n# The counter changes from 1 to 5 and increments by 2\nfor i in range(1, 6, 2):\n    print(i) # The output is 1, 3, and 5\n")),(0,i.kt)("h3",{id:"break"},"Break"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," keyword can be used to exit a loop early. It can be used in both while and for loops."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Break" showLineNumbers',title:'"Break"',showLineNumbers:!0},"# This while loop will run until i is equal to 3\ni = 0\nwhile i < 5:\n    print(i)\n    if i == 2: # If i is equal to 3, the loop will exit\n        break\n    i += 1\n")),(0,i.kt)("p",null,"The output is..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n1\n2\n")),(0,i.kt)("p",null,"Even though the loop was supposed to run till i was 5, it ended early because of the break."),(0,i.kt)("h3",{id:"types-of-loops"},"Types of Loops"),(0,i.kt)("p",null,"When deciding whether to use a while loop or a for loop, you should ask yourself if you know how many times you want to iterate. If you do, use a for loop. If you don't, use a while loop."))}c.isMDXComponent=!0}}]);