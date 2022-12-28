"use strict";(self.webpackChunknotako=self.webpackChunknotako||[]).push([[543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"page-2",title:"Data",sidebar_position:2},i=void 0,s={unversionedId:"turing-tako/python-basics/page-2",id:"turing-tako/python-basics/page-2",title:"Data",description:"A fundamental aspect of programming is working with data and manipulating it to produce a desired result. In this section, we will look at the different types of data that can be used in a program and how to manipulate it.",source:"@site/docs/turing-tako/python-basics/data.mdx",sourceDirName:"turing-tako/python-basics",slug:"/turing-tako/python-basics/page-2",permalink:"/NoTako/docs/turing-tako/python-basics/page-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/turing-tako/python-basics/data.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"page-2",title:"Data",sidebar_position:2},sidebar:"turingSidebar",previous:{title:"Introduction",permalink:"/NoTako/docs/turing-tako/python-basics/page-1"},next:{title:"Sequences",permalink:"/NoTako/docs/turing-tako/python-basics/page-3"}},l={},p=[{value:"Data Types",id:"data-types",level:2},{value:"Variables",id:"variables",level:2},{value:"Basic Expressions",id:"basic-expressions",level:2},{value:"More Operators",id:"more-operators",level:3},{value:"Order of Operations",id:"order-of-operations",level:3},{value:"Other Data Types",id:"other-data-types",level:2},{value:"Casting",id:"casting",level:3},{value:"Stored Values",id:"stored-values",level:2},{value:"Taking Input",id:"taking-input",level:2},{value:"Comments",id:"comments",level:2},{value:"Choosing Variable Names",id:"choosing-variable-names",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A fundamental aspect of programming is working with data and manipulating it to produce a desired result. In this section, we will look at the different types of data that can be used in a program and how to manipulate it."),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"In programming, data is classified into different types and the type determines how the data can be used. It is also vital to know what data type to use where. For example, you normally do not want to use a letter to keep track of money."),(0,r.kt)("p",null,"The various data types are (there are more, but these are mostly used in Python):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Integer:"),(0,r.kt)("br",{parentName:"p"}),"\n","This is a whole number. Python refers to it as int. An example of an integer is 1.  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Floating Point Number:"),(0,r.kt)("br",{parentName:"p"}),"\n","This is a number with a decimal point. Python refers to it as float. An example of a floating point number is 1.0.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"String:"),(0,r.kt)("br",{parentName:"p"}),"\n",'This is text. Python refers to it as str. An example of a string is "Hello World".')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Boolean:"),(0,r.kt)("br",{parentName:"p"}),"\n","This is a True or False value. Python refers to it as bool.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Variables" showLineNumbers',title:'"Variables"',showLineNumbers:!0},'type(1) # int\ntype(1.0) # float\ntype("Hello World") # str\ntype(True) # bool\n\nprint(type(1)) # To print the type on the console\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"type()")," function to check the type of value you are working with."),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"Variables are used to store data. They are like containers that hold data and usually give data meaning."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Variables" showLineNumbers',title:'"Variables"',showLineNumbers:!0},'apples = 1 # (1) Creates a variable\nisCandy = False\ncost = 1.0\ngoodbyeMessage = "Thank you for buying!"\n\napples = 6 # (2) Overides the value \nbananas = 2\n\nbananas = apples # (3) Copies the value of apples to bananas\nprint(bananas) # (4) Prints the value of bananas\nprint(type(bananas)) # (5) Prints the type of bananas\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The syntax for creating a variable is ",(0,r.kt)("inlineCode",{parentName:"li"},"<variable name> = <value>"),".  "),(0,r.kt)("li",{parentName:"ol"},"You can reassign a variable by using the same syntax. The variable will use the new value you store. "),(0,r.kt)("li",{parentName:"ol"},"When using a variable, it is just a placeholder for a value. So you can use it to store the value of another variable.  "),(0,r.kt)("li",{parentName:"ol"},"You can print the value of a variable by using the print function."),(0,r.kt)("li",{parentName:"ol"},"You can check the type of a variable by using the type function.")),(0,r.kt)("p",null,"The name of the variable is always on the left side of the equal sign, the equal sign means we are giving a value to the variable on the left. The value is always on the right side of the equal sign. Like shown above, you can put a variable on the right side as well and it will refer to the value stored in that variable. This whole process is called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"assignment")),"."),(0,r.kt)("h2",{id:"basic-expressions"},"Basic Expressions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Expressions"))," are calculations that can be done to data. They are used to manipulate data. Expressions include addition, subtraction, multiplication, and division."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Expressions" showLineNumbers',title:'"Expressions"',showLineNumbers:!0},"1 + 1 # (1) The basics operations in Python\n2 - 1\n2 * 2\n4 / 2\n\nvariable = 1 + 1 # (2) The result of an expression can be stored in a variable\n\napple = 1\nbanana = 2\nfruits = apple + banana # (3) Expressions can use variables\n\nbanana = banana + 1 # (4) Adds 1 to the previous value of banana\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The operations are just like in math.  "),(0,r.kt)("li",{parentName:"ol"},"Expresssions are evaluated first and the result is used.  "),(0,r.kt)("li",{parentName:"ol"},"Expressions can use variables because variables are just placeholders for values.  "),(0,r.kt)("li",{parentName:"ol"},"Values on the right are evaluated first and then assigned so this is valid.  ")),(0,r.kt)("p",null,"Expressions will have ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"operators"))," which are the symbols that perform operations. This includes things like the plus sign (+). The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"operands"))," are the values that are being operated on. Variables can be used as operands because they store values."),(0,r.kt)("p",null,"When an expression is assigned to a variable, the expressions on the right side will be evaluated first and then the result will be stored in the variable on the left side. This means the variable on the left can be assigned to the same variable on the right. Like the example ",(0,r.kt)("inlineCode",{parentName:"p"},"banana = banana + 1")," above. Here the banana was 2. The stuff on the right is evaluated first which ends up equaling 3. Then the value of 3 is stored in the variable banana."),(0,r.kt)("h3",{id:"more-operators"},"More Operators"),(0,r.kt)("p",null,"Two more operators that are commonly used are the modulus operator (%) and the exponent operator (**). The modulus operator returns the remainder of a division. The exponent operator raises a number to a power."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="More Operators" showLineNumbers',title:'"More','Operators"':!0,showLineNumbers:!0},"print(5 % 2) # (1) Returns the remainder of 5 divided by 2\nprint(2 ** 3) # (2) Raises 2 to the power of 3\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The modulus operator is used to get the remainder of a division."),(0,r.kt)("li",{parentName:"ol"},"The exponent operator is used to raise a number to a power.")),(0,r.kt)("h3",{id:"order-of-operations"},"Order of Operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Order of Operations" showLineNumbers',title:'"Order',of:!0,'Operations"':!0,showLineNumbers:!0},"(1 + 1) * 2 - 1 + 3 / 1 # Valid complex expression\n")),(0,r.kt)("p",null,"Expressions can have more than one operator. In this case, the order of operations is used to determine which operation is done first and the order is similar to math. The order of operations is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Parantheses ()\n- Exponents **\n- Negation -\n- Multiplication *, Division /, Modulus % [Left to right]\n- Addition +, Subtraction - [Left to right]\n")),(0,r.kt)("p",null,"Negation refers to the negative sign on numbers."),(0,r.kt)("h2",{id:"other-data-types"},"Other Data Types"),(0,r.kt)("p",null,"Operations can be done on other data types as well."),(0,r.kt)("p",null,"Floats can do all the operations that integers can do. They can also do the modulus operator. The only difference is that the result will be a float. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"5.5 % 2.5")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"2.5 * 2")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," and the remainder that remains is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Float Expressions" showLineNumbers',title:'"Float','Expressions"':!0,showLineNumbers:!0},"1.3 + 1.0 # Equals 2.3\n2.7 - 1.6 # Equals 1.1\n3.7 * 2.0 # Equals 7.4\n7.4 / 3.1 # Equals 2.3870967741935485\n7.2 % 3.0 # Equals 1.2\n")),(0,r.kt)("p",null,"Strings can be added together. This is called concatenation. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello" + " World"')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello World"'),". Strings can also be multiplied by an integer. This will repeat the string that many times. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello" * 3')," will return ",(0,r.kt)("inlineCode",{parentName:"p"},'"HelloHelloHello"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="String Expressions" showLineNumbers',title:'"String','Expressions"':!0,showLineNumbers:!0},'"Hello" + " World" # Equals "Hello World"\n"Hello" * 3 # Equals "HelloHelloHello"\n')),(0,r.kt)("p",null,"Integers can also do integer division which is division that returns an integer. This is done by using the double slash operator (//). For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"5 // 2")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"2 * 2")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"5 - 4")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". The remainder is ignored."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Integer Division" showLineNumbers',title:'"Integer','Division"':!0,showLineNumbers:!0},"5 // 2\n")),(0,r.kt)("h3",{id:"casting"},"Casting"),(0,r.kt)("p",null,"When working with data, sometimes it is common to convert data from one type to another. This is called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"casting")),"."),(0,r.kt)("p",null,"Examples of casting involve converting a number to a string to add it to a string or converting a float to an integer to get rid of the decimal point or even converting a string to an integer to use it in an math expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Casting" showLineNumbers',title:'"Casting"',showLineNumbers:!0},'str(1) # (1) string casting\nstr(1.0)\n\nint(1.0) # (2) integer casting\nint("1")\n\nfloat(1) # (3) float casting\nfloat("1.0")\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It will convert any value to a string if possible."),(0,r.kt)("li",{parentName:"ol"},"It will convert any value to an integer if possible."),(0,r.kt)("li",{parentName:"ol"},"It will convert any value to a float if possible.")),(0,r.kt)("p",null,"Casting will give an error if the value cannot be converted to a new type. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'int("Hello")')," will give an error because ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello"')," cannot be converted to an integer."),(0,r.kt)("h2",{id:"stored-values"},"Stored Values"),(0,r.kt)("p",null,"One common mistake is writing expressions or values but not storing them in a variable or using them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Stored Values" showLineNumbers',title:'"Stored','Values"':!0,showLineNumbers:!0},'1 # (1) Not stored values\nfloat(1)\n"Hello" + " World"\n\nvar = 1 # (2) Stored values\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"These values are not stored in a variable so they are not used."),(0,r.kt)("li",{parentName:"ol"},"This value is stored in a variable so it is used.")),(0,r.kt)("p",null,"All the lines in the example above are legal so no errors will be thrown. However, the first three lines are not stored in a variable so they will be lost. Python will evaluate the expression but you cannot use that value for anything."),(0,r.kt)("h2",{id:"taking-input"},"Taking Input"),(0,r.kt)("p",null,"Usually we build programs that take in some sort of input from the user and do calculates to come up with a result or output to show to the user. An example of this is a calculator. The user will input two numbers and the program will add them together and show the result."),(0,r.kt)("p",null,"So far we have worked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," method that prints out a value to a console. Python has a ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," method that similarly prints a value to the console but also waits for the user to input a value. The inputted value is always a String."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Input" showLineNumbers',title:'"Input"',showLineNumbers:!0},'input("Enter a number: ") # Gets input from the user\nvar2 = input("Enter a word: ") # Stores the input in a variable\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Both inputs are strings even if we ask for a number! To take a number as input, we need to just cast the string to a number.")),(0,r.kt)("p",null,"Also do note that we can get input from the user but there is no value if we don't store it in a variable to do something with it."),(0,r.kt)("h2",{id:"comments"},"Comments"),(0,r.kt)("p",null,"Now that the programs are getting longer and more complex, it is good habit to write comments. These are lines of text that are ignored by the program and are used as useful notes for the programmer. It is good practice to explain what the program is doing because it is easy to forget while writing complex programs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Comments" showLineNumbers',title:'"Comments"',showLineNumbers:!0},'# (1) This is a comment\nprint("Hello World") # (2) This is also a comment\n\nvar = 12\n# var = 13 (3)\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Comments start with a hash ",(0,r.kt)("inlineCode",{parentName:"li"},"#")," and continue to the end of the line."),(0,r.kt)("li",{parentName:"ol"},"Only text after the hash ",(0,r.kt)("inlineCode",{parentName:"li"},"#")," is ignored."),(0,r.kt)("li",{parentName:"ol"},"The variable still holds a value of 12 because line 5 is ignored by the program.")),(0,r.kt)("h2",{id:"choosing-variable-names"},"Choosing Variable Names"),(0,r.kt)("p",null,"Variable names can be any length and can contain letters, numbers, and underscores. They cannot start with a number. They cannot contain spaces or special characters. They cannot be the same as a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"keyword"))," (A word reserved by python)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Valid Names"),(0,r.kt)("th",{parentName:"tr",align:null},"Invalid Names"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1var"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var 1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var_1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var_one")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var.one"))))),(0,r.kt)("p",null,"A good rule of thumb is to make variable short names which describe its purpose. It makes it easier to read and understand the code. "),(0,r.kt)("p",null,"In Python, it is common to keep variable names in lowercase and use underscores to separate words. This is called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"snake case")),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"my_variable"),"."))}m.isMDXComponent=!0}}]);