"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),p=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,d=h["".concat(r,".").concat(c)]||h[c]||m[c]||s;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const s={id:"page-5",title:"Tuples and Lists",sidebar_position:5},o=void 0,l={unversionedId:"turing-tako/intro-to-cs/page-5",id:"turing-tako/intro-to-cs/page-5",title:"Tuples and Lists",description:"Typically we want to hold more than one data in a variable like a sequence of numbers or names. To be able to do that we need to use tuples or lists. Both hold a sequence of data but they treat the data differently.",source:"@site/docs/turing-tako/intro-to-cs/tuplelist.mdx",sourceDirName:"turing-tako/intro-to-cs",slug:"/turing-tako/intro-to-cs/page-5",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/intro-to-cs/tuplelist.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"page-5",title:"Tuples and Lists",sidebar_position:5},sidebar:"turingSidebar",previous:{title:"Functions",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-4"},next:{title:"Recursion and Dictionaries",permalink:"/NoTako/docs/turing-tako/intro-to-cs/page-6"}},r={},p=[{value:"Tuples",id:"tuples",level:2},{value:"Features of Tuples",id:"features-of-tuples",level:3},{value:"Lists",id:"lists",level:2},{value:"Aliasing",id:"aliasing",level:3},{value:"Cloning",id:"cloning",level:3},{value:"Looping Through Lists",id:"looping-through-lists",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Typically we want to hold more than one data in a variable like a sequence of numbers or names. To be able to do that we need to use tuples or lists. Both hold a sequence of data but they treat the data differently."),(0,a.kt)("h2",{id:"tuples"},"Tuples"),(0,a.kt)("p",null,"Tuples are an ordered sequence of elements where you can mix types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Creating Tuples" showLineNumbers',title:'"Creating','Tuples"':!0,showLineNumbers:!0},'# Create an empty tuple\nempty_tuple = ()\n\n# Creating a tuple with elements\ntuple_with_elements = (1, 2, 3, 4, 5)\ntuple_with_different_types = (1, "Hello", 3.14, True)\ntuple_without_parentheses = 1, 2, 3, 4, 5\n\n# Creating a tuple with a single element\ntuple_with_single_element = (1,)\n')),(0,a.kt)("p",null,"The tuple itself is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"immutable"))," which means you can't change the elements in the tuple once it is created, you can only access them. The only way to change a tuple is to create a new one and replace the old one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Tuple Operations" showLineNumbers',title:'"Tuple','Operations"':!0,showLineNumbers:!0},"# Creating a tuple\nsamp_tuple = (1, 2, 3, 4, 5)\n\n# Accessing elements\nprint(samp_tuple[0]) # 1\nprint(samp_tuple[4]) # 5\nprint(samp_tuple[-1]) # 5\nprint(samp_tuple[6]) # ERROR!!!\n\n# Getting the length of the tuple\nprint(len(samp_tuple)) # 5\n\n# Slicing the tuple\nprint(samp_tuple[1:3]) # (2, 3)\nprint(samp_tuple[2:]) # (3, 4, 5)\n\n# YOU CAN'T CHANGE THE ELEMENTS IN THE TUPLE\nsamp_tuple[0] = 10 # ERROR!!!\n")),(0,a.kt)("p",null,"As you can see from above, tuples behave like strings where you index the elements and slice the tuples. Both also cannot be changed once created. The only difference is that tuples can hold different types of data but strings can only hold characters."),(0,a.kt)("h3",{id:"features-of-tuples"},"Features of Tuples"),(0,a.kt)("p",null,"Tuples provide a few crucial features that are useful in Python. Firstly, it enables you to return multiple values from a function. Secondly, it enables you to assign multiple variables in a single line. One convenient side effect of this second feature is that it allows you to swap variable values in a clean way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Tuple Features" showLineNumbers',title:'"Tuple','Features"':!0,showLineNumbers:!0},'# Returning multiple values from a function\ndef get_user_info():\n    return ("John", "Doe", 25)\n\n# Assigning multiple variables in a single line\nfirst_name, last_name, age = get_user_info()\n\nprint(first_name) # John\nprint(last_name) # Doe\nprint(age) # 25\n\n# Another example of assigning multiple variables\nx, y = 10, 20\n\nprint(x) # 10\nprint(y) # 20\n\n# Swapping variable values\nx, y = y, x\n')),(0,a.kt)("p",null,"You can also iterate over a tuple and you can do the same with the characters in a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Iterating over a Tuple" showLineNumbers',title:'"Iterating',over:!0,a:!0,'Tuple"':!0,showLineNumbers:!0},'# Iterating over a tuple\ntotal = 0\nfor num in (1, 2, 3):\n    total += num\nprint(total) # 6\n\n# Iterating over a string\nfor char in "Hello":\n    print(char) # Prints each character in the string\n')),(0,a.kt)("h2",{id:"lists"},"Lists"),(0,a.kt)("p",null,"Another way to do sequences is to use a list which is also an ordered sequence of elements and is denoted by square brackets ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," instead of parantheses ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,a.kt)("p",null,"Everything you can do with tuples you can also do with lists including mixing data types, slicing, indexing, and iterating."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="List and Tuple Operations" showLineNumbers',title:'"List',and:!0,Tuple:!0,'Operations"':!0,showLineNumbers:!0},'# Creating a list\nempty_list = []\nsamp_list = [1, 2, 3, 4, 5]\nmix_list = [1, "Hello", 3.14, True]\nsingle_element_list = [1]\n\n# Accessing elements\nprint(samp_list[0]) # 1\nprint(samp_list[4]) # 5\nprint(samp_list[-1]) # 5\n\n# Getting the length of the list\nprint(len(samp_list)) # 5\n\n# Slicing the list\nprint(samp_list[1:3]) # (2, 3)\n\n# Iterating over a list\ntotal = 0\nfor num in [1, 2, 3]:\n    total += num\nprint(total) # 6\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Typically even though lists can also hold mixed types, they are homogeneous which means they are usually used to hold the same type of data. Examples include a list of numbers for grades or a list of strings for class roster.")),(0,a.kt)("p",null,"Both tuples and lists do the same things so why use lists? The main reason is that lists are ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"mutable"))," which means you can change the elements in the list once it is created. You can add, remove, or change elements in the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="List Specific Operations" showLineNumbers',title:'"List',Specific:!0,'Operations"':!0,showLineNumbers:!0},"# Creating a list\nsamp_list = [1, 2, 3, 4, 5]\n\n# Adding an element to the end of the list\nsamp_list.append(6)\nprint(samp_list) # [1, 2, 3, 4, 5, 6]\n\n# Adding an element at a specific index\nsamp_list[0] = 10\n\n# Removing an element from the list\nsamp_list.remove(6) # Removes the first 6 it finds\n\n# Remove the last element from the list\nsamp_list.pop() # Removes the last element\n\n# Remove an element at a specific index\ndel samp_list[0]\n\n# Add another list to the end of the list\nsamp_list.extend([7, 8, 9])\n\n# Sorts the list in place\nsamp_list.sort()\nprint(samp_list) # [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# Reverse the list in place\nsamp_list.reverse() # [9, 8, 7, 6, 5, 4, 3, 2, 1]\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We are doing list.method_name() which is new. As mentioned before everything in Python is an object and lists are no exception. The ",(0,a.kt)("inlineCode",{parentName:"p"},".")," notation is used to access the data and functions an object has. In this case, we are accessing the functions of the list object.")),(0,a.kt)("p",null,"All the actions above mutate the list which means they change the list itself. However, lists also have a few methods that don't mutate the list but instead return a new list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="None Mutating Lists" showLineNumbers',title:'"None',Mutating:!0,'Lists"':!0,showLineNumbers:!0},"# Creating a list\nsamp_list = [1, 2, 3, 4, 5]\n\n# Adding lists together\nnew_list = samp_list + [6, 7, 8]\n\n# Sorting the list\nnew_list = sorted(samp_list)\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Remember that just because you can mutate a list doesn't mean you always need to. Python gives you the flexibility to choose the best option for your situation. However, you should be aware of if you are mutating a list or not because it can cause unexpected behavior.")),(0,a.kt)("p",null,"Just like tuples, strings are also immutable but Python has convinient methods to convert between the two allowing for more flexibility."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Lists and Strings" showLineNumbers',title:'"Lists',and:!0,'Strings"':!0,showLineNumbers:!0},'samp_string = "Hello World"\n\n# Converting a string to a list\nsamp_list = list(samp_string)\nprint(samp_list) # [\'H\', \'e\', \'l\', \'l\', \'o\', \' \', \'W\', \'o\', \'r\', \'l\', \'d\']\n\n# Splitting a string into a list\nsamp_list = samp_string.split() # Splits the string into a list of words (separated by spaces)\nprint(samp_list) # [\'Hello\', \'World\']\nsamp_list = samp_string.split("e") # Splits the string into a list of words (separated by "l")\nprint(samp_list) # [\'H\', \'llo World\']\nsamp_list = "first-name".split("-") # Splits the string into a list of words (separated by "-")\nprint(samp_list) # [\'first\', \'name\']\n\n# You can also convert a list to a string\nsamp_list = ["Hel", "l", "o", " ", "W", "o", "r", "l", "d"]\nsamp_string = "".join(samp_list)\nprint(samp_string) # Hello World\n\n# You can decide what to join the list with\nsamp_string = "-".join(["first", "last"])\nprint(samp_string) # first-last\nsamp_string = "+++".join(["first", "last", "middle"])\nprint(samp_string) # first+++last+++middle\n')),(0,a.kt)("h3",{id:"aliasing"},"Aliasing"),(0,a.kt)("p",null,"Aliasing is when you have more than one variable that points to the same object in memory. This can cause unexpected behavior if you mutate aliased objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Aliasing" showLineNumbers',title:'"Aliasing"',showLineNumbers:!0},"# Creating a list\nsamp_list = [1, 2, 3, 4, 5]\n\n# Aliasing the list\nalias_list = samp_list # Both variables point to the same list in memory\n\n# Mutating the list\nsamp_list.append(6)\nprint(samp_list) # [1, 2, 3, 4, 5, 6]\n\n# The alias is also mutated\nprint(alias_list) # [1, 2, 3, 4, 5, 6]\n")),(0,a.kt)("p",null,"Because both variables point to the same list in memory, when you mutate the list, the alias is also mutated. This can cause unexpected behavior if you don't realize that you are mutating an aliased object. Any list method that mutates the list will cause this behavior."),(0,a.kt)("h3",{id:"cloning"},"Cloning"),(0,a.kt)("p",null,"Aliasing can be avoided by cloning the list. This creates a copy of the list in memory so each variable points to a different list in memory even though they have the same values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Cloning" showLineNumbers',title:'"Cloning"',showLineNumbers:!0},"# Creating a list\nsamp_list = [1, 2, 3, 4, 5]\n\n# Cloning the list\nclone_list = samp_list[:] # Creates a copy of the list\n\n# Mutating the list\nsamp_list.append(6)\nprint(samp_list) # [1, 2, 3, 4, 5, 6]\n\n# The clone is not mutated\nprint(clone_list) # [1, 2, 3, 4, 5]\n")),(0,a.kt)("p",null,"The ability to mutate is heavily dependent on the situation. Most of the time you are going to mutate a list but there are times when you don't want to or need to. It is always important to understand the drawbacks and side effects of both options to better debug your code."),(0,a.kt)("h3",{id:"looping-through-lists"},"Looping Through Lists"),(0,a.kt)("p",null,"Just like tuples, you can loop through lists using a for loop. However, you need to be cautious when mutating a list while looping through it because the values the loop is iterating over is decided before the loop starts which means if you mutate the list while looping through it, you will miss some values, loop over the same value multiple times, or cause an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Looping Through Lists" showLineNumbers',title:'"Looping',Through:!0,'Lists"':!0,showLineNumbers:!0},"# Creating a list\nsamp_list = [1, 2, 3, 4, 5]\n\n# Looping through the list\nfor i in samp_list:\n    samp_list.append(i)\n    print(i)\n")),(0,a.kt)("p",null,"The output is..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\n2\n3\n4\n5\n")),(0,a.kt)("p",null,"Logically speaking this loop should run infinitely because you are adding a new value to the list every time so there is always a new value for the loop to look at. However, the loop only runs 5 times because the amount the loop iterates over is decided before the loop starts. The list had 5 values to begin with so the loop iterates over those 5 values. Usually, mutating a list that you are looping through can cause very unexpected behaviors because the loop does not update with the changing list."))}m.isMDXComponent=!0}}]);