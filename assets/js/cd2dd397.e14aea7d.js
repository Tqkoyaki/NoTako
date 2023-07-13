"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[5242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},231:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);function i(e){return a.createElement("figure",{style:{textAlign:"center"}},a.createElement("img",{src:e.src,alt:e.caption}),a.createElement("figcaption",null,a.createElement("i",null,"Fig. ",e.num," - ",e.caption)))}},6353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),r=n(231);const o=n.p+"assets/images/comp-5-01d6d45bbc763dd38b2a89c8962776f3.png",s=n.p+"assets/images/comp-6-9ee6a4a090e8dfe60e005771d68d9a86.png",l={id:"page-6",title:"Recursion and Dictionaries",sidebar_position:6},c=void 0,u={unversionedId:"turing-tako/intro-to-cs/page-6",id:"turing-tako/intro-to-cs/page-6",title:"Recursion and Dictionaries",description:"Looping with for loops and while loops are iterative however, there are other ways to repeat items which could end up simplifying code even further. We call this other method recursion. Our lists and tuples are great ways to store large amounts of data however there are also more flexible options like dictionaries which may be better for some use cases.",source:"@site/docs/turing-tako/intro-to-cs/recursion.mdx",sourceDirName:"turing-tako/intro-to-cs",slug:"/turing-tako/intro-to-cs/page-6",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/intro-to-cs/recursion.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"page-6",title:"Recursion and Dictionaries",sidebar_position:6},sidebar:"turingSidebar",previous:{title:"Tuples and Lists",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-5"},next:{title:"Debugging and Testing",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-7"}},p={},m=[{value:"Recursion",id:"recursion",level:2},{value:"Factorials",id:"factorials",level:3},{value:"Scope",id:"scope",level:3},{value:"More Examples",id:"more-examples",level:3},{value:"Dictionaries",id:"dictionaries",level:2},{value:"Recursion with Dictionaries",id:"recursion-with-dictionaries",level:2}],d={toc:m};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Looping with for loops and while loops are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"iterative"))," however, there are other ways to repeat items which could end up simplifying code even further. We call this other method ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"recursion")),". Our lists and tuples are great ways to store large amounts of data however there are also more flexible options like ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"dictionaries"))," which may be better for some use cases."),(0,i.kt)("h2",{id:"recursion"},"Recursion"),(0,i.kt)("p",null,"Recursion is the process of repeating items in a self-similar way where algorithmically it is a way to design solutions to problems by divide and conquer or decrease and conquer. On the other hand, semantically it is a programming technique where a function calls itself using a base case which is easy to solve and the other inputs given are able to be simplified."),(0,i.kt)("p",null,"For example, lets say we want a method to multiply two non negative numbers together using only addition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Multiplication Iterative" showLineNumbers',title:'"Multiplication','Iterative"':!0,showLineNumbers:!0},"# a * b = a + a + ... b times\ndef multiply(a, b):\n    total = 0\n    for i in range(b):\n        total += a\n    return a\n")),(0,i.kt)("p",null,"This function uses a and loops through it b times to solve the problem. This would be an iterative approach but it can look cleaner using recursion. Let's say I want to do 2 ","*"," 5, another way we can look at it is ",(0,i.kt)("inlineCode",{parentName:"p"},"(2 * 4) + 2"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"(2 * 4)")," is a simplier version of the bigger problem and if we keep going down, we get to the simplist case where 2 ","*"," 0 = 0. This is our ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"base case")),". The base case is the simplist form of the problem."),(0,i.kt)("p",null,"Now with recursion, you keep feeding a smaller problem back into your function until you get to the base case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Multiplication Recursion" showLineNumbers',title:'"Multiplication','Recursion"':!0,showLineNumbers:!0},"# a * b = a + (a * (b - 1))\ndef multiply(a, b):\n    if b < 1:\n        return 0\n    return a + multiply(a, b - 1)\n")),(0,i.kt)("p",null,"Let's ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"trace"))," this code which means go through it line by line to see what it is doing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Let's give a = 3, b = 3 which should return 9.\n\n2. First 3 < 1 is checked which is false.\n\n3. We return 3 + multiply(3, 2). We can't return anything till we solve this smaller problem.\n\n4. Now 2 < 1 is checked because b is now 2 and that returns false.\n\n5. We return 3 + multiply(3, 1). We still cannot return anything and keep doing a smaller problem.\n\n6. Now 1 < 1 is checked which is also false.\n\n7. We return 3 + multiply(3, 0).\n\n8. Now 0 < 1 is checked which is true!!! So 0 gets returned.\n\n9. Now we now that multiply(3, 0) = 0 so multiply(3, 1) can return 3 + 0.\n\n10. multiply(3, 2) returns 3 + 3 because multiply(3, 1) = 1.\n\n11. multiply(3, 3) returns 3 + 6 because multiply(3, 2) = 6.\n\n12. The final solution given is 9.\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"multiply()")," function showed how to use recursion however, it wasn't a very practical use of recursion. One widely used case for recursion is solving for factorials."),(0,i.kt)("h3",{id:"factorials"},"Factorials"),(0,i.kt)("p",null,"Factorials are numbers denoted by ",(0,i.kt)("inlineCode",{parentName:"p"},"n! = n * (n - 1) * ..."),". This means ",(0,i.kt)("inlineCode",{parentName:"p"},"3! = 3 * 2 * 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"5! = 5 * 4 * 3 * 2 * 1"),". Our base cases for factorials are ",(0,i.kt)("inlineCode",{parentName:"p"},"1! = 1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0! = 1"),"."),(0,i.kt)("p",null,"It makes more sense to code factorials recursively than to do it iteratively because there is a clear way to divide up the problem to a smaller problem. Doing ",(0,i.kt)("inlineCode",{parentName:"p"},"3! = 3 * 2 * 1")," but also ",(0,i.kt)("inlineCode",{parentName:"p"},"3! = 3 * 2!"),"."),(0,i.kt)(r.Z,{src:o,caption:"Recursive Call",num:1,mdxType:"Fig"}),(0,i.kt)("p",null,"Each call is slowly building up the solution by solving a simplier version of the problem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Recursive Factorials" showLineNumbers',title:'"Recursive','Factorials"':!0,showLineNumbers:!0},"def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)\n")),(0,i.kt)("p",null,"Recursion can make code look cleaner and simplier but it is important to note that may not be efficient from a computer's prespective because of all the different calls you are making on top of each other."),(0,i.kt)("h3",{id:"scope"},"Scope"),(0,i.kt)("p",null,"Scope plays a crucial factor in recursion because each recursive call to a function creates a new scope. This means any variable you bind in one function scope cannot be accessed by another function scope."),(0,i.kt)("p",null,"In the code for factorial, let's give a n of 5. The first function can see that n = 5 in its scope. When it calls the function again with n - 1. The new scope creates a brand new n with the value 4 and thats all it thinks n is. This way variables between each recursive call don't interfere with each other."),(0,i.kt)("h3",{id:"more-examples"},"More Examples"),(0,i.kt)("p",null,"Recursion can be a very abstract concept at the start. A few more examples can show the potential recursion has to writing cleaner, more understandable code."),(0,i.kt)("p",null,"We can use recursion for the fibonacci sequence. The sequence works by adding the previous two numbers to get a new number. So the first ten numbers in the sequence are ",(0,i.kt)("inlineCode",{parentName:"p"},"0, 1, 1, 2, 3, 5, 8, 13, 21, 34"),". To get a number like ",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", we needed to add ",(0,i.kt)("inlineCode",{parentName:"p"},"8")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"13")," which were the previous numbers to get that value."),(0,i.kt)("p",null,"This is a recursive problem because the new solution relies on simplier solutions. The function is ",(0,i.kt)("inlineCode",{parentName:"p"},"f(n) = f(n - 1) + f(n - 2)")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"f(n - 1)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"f(n - 2)")," are smaller problems to the bigger problem ",(0,i.kt)("inlineCode",{parentName:"p"},"f(n)"),". We also can say our base case is ",(0,i.kt)("inlineCode",{parentName:"p"},"n <= 0")," because the simpliest n is 0 which equals 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Recursive Fibonacci" showLineNumbers',title:'"Recursive','Fibonacci"':!0,showLineNumbers:!0},"def fib(n):\n    if n <= 0:\n        return 0\n    return fib(n - 1) + fib(n - 2)\n")),(0,i.kt)("p",null,"Another example of recursion is finding is a string is a palidrome because the simpliest case you can get is a single letter or no letters. Every other size can check the first and last letters to see if they are the same and then remove them from the string. In this way we are slowly simplifying the problem to get to the answer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Recursive Palidrome" showLineNumbers',title:'"Recursive','Palidrome"':!0,showLineNumbers:!0},"def pali(word):\n    # We have to remote all punctionation\n    word = word.strip()\n\n    # Base case\n    if len(word) <= 1:\n        return True\n    \n    # Checks last two letters\n    if word[0] != word[-1]:\n        return False\n    \n    # Shortens word and recursively checks\n    return pali(word[1:-1])\n")),(0,i.kt)("p",null,"As long as this call reaches the base case it is true because all the letters passed their checks. If at any point two letters are different, it will immediately exit."),(0,i.kt)("h2",{id:"dictionaries"},"Dictionaries"),(0,i.kt)("p",null,"Dictionaries are another way to store data but with dictionaries we have more control over the indicies. With lists and tuples, we use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"zero-based indexing"))," meaning we start counting by zero and to get a value, we specify its position in the list. With dictionaries, store them in no particular order, instead we do key-value pairs. Every unique key we create acts as the index to some value. The benefit being the key doesn't have to be integers only."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Dictionaries Functions" showLineNumbers',title:'"Dictionaries','Functions"':!0,showLineNumbers:!0},"# Creates an empty dictionary\nempty_dict = {}\n\n# Creates a dictionary\n# The key and value are seperated using a colon (:)\n# Each pair is seperated by a comma (,)\ngrades = {'Ana':'B', 'John', 'A+'}\ngrades_num = {'Ana': 80, 'John': 99}\n\n# The key can be almost anything\nposition = {1:\"First\", 2:\"Second\"}\n\n# Access a value\nprint(grades['Ana']) # B\n\n# Change a key value pair (Dictionaries are mutable)\ngrades['Ana'] = 'B+'\nprint(grades['Ana']) # B+\n\n# You can check if a key exists\nprint('Ana' in grades) # True\nprint('Anastic' in grades) # False\nprint('A+' in grades) # False (Only key checks)\n\n# Delete a pair\ndel grades['Ana']\n\n# Get a list of all the keys\ngrades.keys()\n\n# Get a list of all the values\ngrades.values()\n")),(0,i.kt)("p",null,"As noted above that, dictionaries are mutable meaning they can be changed just like lists. However, it should also be noted that not all key types are valid. Any data type that is ",(0,i.kt)("strong",{parentName:"p"},"immutable")," can be used as a key. The final most important thing to note is that there is no order to dictionaries meaning pairs can be ordered randomly in memory."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Just to reiterate the point that even though dictionaries are mutable, keys must be immutable.")),(0,i.kt)("h2",{id:"recursion-with-dictionaries"},"Recursion with Dictionaries"),(0,i.kt)("p",null,"You can combine both recursion with dictionaries to improve the performance of recursion for problems like fibonacci."),(0,i.kt)(r.Z,{src:s,caption:"Fibonacci Recursion",num:2,mdxType:"Fig"}),(0,i.kt)("p",null,"As seen here, if we recursively do the fibonacci sequence of 5, it recalculates ",(0,i.kt)("inlineCode",{parentName:"p"},"fib(0), fib(1), fib(2)")," and so on many times. As our n gets bigger, the number of repeated calculations increases extremely fast. One way to solve this is to save results that are already computed in a dictionary so calculations do not have to occur multiple times. If we already know wat ",(0,i.kt)("inlineCode",{parentName:"p"},"fib(3)")," is in this figure then we wouldn't need to calculate ",(0,i.kt)("inlineCode",{parentName:"p"},"fib(2)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fib(1)")," again, we could just use the result we already stored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Saving Results" showLineNumbers',title:'"Saving','Results"':!0,showLineNumbers:!0},"# No saving (old fibonacci sequence)\ndef fib(n):\n    # Use two base cases to slightly improve performance\n    if n <= 0:\n        return 0\n    elif n == 1:\n        return 1\n    # Recursively calculate new values\n    return fib(n - 1) + fib(n - 2)\n\n# With saving\nresults = {}\ndef new_fib(n):\n    # Checks if we already know the answer before calculating\n    if n in results:\n        # Returns stored answer\n        return results[n]\n    \n    # Goes back to base case\n    if n <= 0:\n        return 0\n    elif n == 1:\n        return 1\n    \n    # Saves result after calculating for future use\n    results[n] = new_fib(n - 1) + new_fib(n - 2)\n\n    # Returns result\n    return results[n]\n")),(0,i.kt)("p",null,"The second method is called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"memoization"))," which is the process of saving results to speed up programs. If we did something like ",(0,i.kt)("inlineCode",{parentName:"p"},"fib(34)")," it would take 11,405,773 recursive calls to arrive at the answer but with ",(0,i.kt)("inlineCode",{parentName:"p"},"new_fib(n)")," it only takes 65 because the results are saved."))}h.isMDXComponent=!0}}]);