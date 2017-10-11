export default function() {
	return [
		{firstCard: true,
    currentDeck: [],
    currentCard: false,
    
// Javascript: Foundations 

    title: 'Javascript: Foundations', image: '../style/images/js.png', 

			cards: [ 
				{q: 'What do we call data types copied by VALUE?', a: 'Primitives (or primitive types)'
				},
				{q: 'What do we call data types copied by REFERENCE?', a: 'Objects'
				},
				{q: 'What are the five primitives?', a: 'Boolean, null, undefined, string, and number'
				},
				{q: 'What are the three object data types?', a: 'Array, Function, and Object'
				},
				{q: 'How can you read properties of an Object in JavaScript?', a: 'Using the dot notation − Getting:\nemp.name  // ==> Zara\nSetting:\nemp.name = "Daisy"  // <== Daisy'
				},
				{q: 'How to read elements of an array in JavaScript?', a: 'x[i]'
				},
				{q: 'Difference between call() and apply()?', a: 'CALL() takes a regular listing of parameters and APPLY() requires the parameters to be in an array.'
				},
				{q: 'What is a named function in JavaScript? How to define a named function?', a: 'A named function has a name when it is defined. A named function can be defined using function keyword as follows −\nfunction named(){\n// do some stuff here\n}'
				},
				{q: 'How many types of functions JavaScript supports?', a: 'A function in JavaScript can be either named or anonymous.'
				},
				{q: 'How to define a anonymous function?', a: 'An anonymous function can be defined in similar way as a normal function but it would not have any name.'
				},
				{q: 'Can you assign a anonymous function to a variable?', a: 'Yes'
				},
				{q: 'Can you pass a anonymous function as an argument to another function?', a: 'Yes'
				},
				{q: 'What is arguments object in JavaScript?', a: 'Yes'
				},
				{q: 'What is the purpose of -this- operator in JavaScript?', a: 'always refers to the current context.'
				},
				{q: 'What is the purpose of -this- operator in JavaScript?', a: 'always refers to the current context.'
				},
				{q: 'What are the valid scopes of a variable in JavaScript?', a: 'The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.\n -Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.\n-Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function'
				},
				{q: 'Which type of variable among global and local, takes precedence over other if names are same?', a: 'A local variable takes precedence over a global variable with the same name.'
				},
				{q: 'What is callback?', a: 'A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.'
				},
        {q: 'Explain Lexical Scoping', a: 'Lexical Scoping describes how a parser resolves variable names when functions are nested. \nThe word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. \nE.G. Nested functions have access to variables declared in their outer scope.'
        },
				{q: 'What is closure?', a: 'Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.'
				},
				{q: 'Give an example of closure?', a: 'Following example shows how the variable counter is visible within the create, increment, and print functions, but not outside of them −\nfunction create() {\nvar counter = 0;\nreturn {\nincrement: function() {\ncounter++;\n},\n\nprint: function() {\nconsole.log(counter);\n}\n}\n}\nvar c = create();\nc.increment();\nc.print();     // ==> 1\n'
				},
				{q: 'Adding a number and a string, result is...?', a: 'Coercion: converting a value from one type to another. This happens because JS is dynamically typed.'
				}
			]
		},


// Javascript: Common built-in methods

		{title: 'Javascript: Common built-in methods', image: '../style/images/js.png',
			cards: [ 
				{q: 'Returns the character at the specified index?', a: 'charAt()'
				},
				{q: 'Combines the text of two strings and returns a new string?', a: 'concat()'
				},
				{q: 'Calls a function for each element in the array?', a: 'forEach()'
				},
				{q: 'Returns the index within the calling String object of the first occurrence of the specified value?', a: 'indexOf()'
				},
				{q: 'Returns the length of the string?', a: 'length()'
				},
				{q: 'Removes the last element from an array and returns that element?', a: 'pop()'
				},
				{q: 'Adds one or more elements to the end of an array and returns the new length of the array?', a: 'push()'
				},
				{q: 'Reverses the order of the elements of an array?', a: 'reverse()'
				},
				{q: 'Sorts the elements of an array?', a: 'sort()'
				},
				{q: 'Returns the characters in a string beginning at the specified location?', a: 'substr()'
				},
				{q: 'Returns the calling string value converted to lower case?', a: 'toLowerCase()'
				},
				{q: 'Returns the calling string value converted to upper case?', a: 'toUpperCase()'
				},
				{q: 'Returns the string representation of the numbers value?', a: 'toString() '
				}
			]},


// CSS
		{title: 'CSS', image: '../style/images/css3.svg',
			cards: [ 
				{q: 'What is CSS?', a: 'Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.'
				},
				{q: 'What are the components of a CSS Style?', a: 'Selector − an HTML tag like <h1> or <table> \nProperty − attribute of HTML tag, ex. color, border \nValue − assigned to properties, ex. color property can have red or #F1F1F1'
				},
				{q: 'What is type selector?', a: 'matches the name of an element type. To give a color to all level 1 headings −\nh1 {\ncolor:\n#36CFFF;\n}'
				},
				{q: 'What is universal selector?', a: 'matches the name of any element type −\n* { \ncolor: #000000; \n}'
				},
				{q: 'What is Descendant Selector?', a: 'apply a style rule to a particular element only when it lies inside a particular element. As given in the following example, style rule will apply to <em> element only when it lies inside <ul> tag. \nul em {\ncolor: #000000; \n}'
				},
				{q: 'What is "Z-index"', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},

// HTML

		{title: 'HTML', image: '../style/images/html5.png',
			cards: [ 
				{q: 'What is "placeholder" attribute?', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},

// ReactJS

		{title: 'React', image: '../style/images/react.svg',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},


// Angular

		{title: 'Angular', image: '../style/images/ang.png',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},


// Javascript: 3

		{title: 'Javascript: 3', image: '../style/images/js.png',
			cards: [ 
				{q: 'What is Date object in JavaScript?', a: 'The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ).\nOnce a Date object is created, a number of methods allow you to operate on it. Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, using either local time or UTC (universal, or GMT) time.'
				},
				{q: 'How do cookies translate/move to the browser?', a: ''
				}
		]},

// Vue

		{title: 'Vue', image: '../style/images/vue.png',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				}
			]},

// DOM

		{title: 'DOM Fundamentals', image: '../style/images/dom.png',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				}
			]}
	]

// webpack

		{title: 'Webpack Basic Concepts', image: '../style/images/webpack.png',
			cards: [ 
				{q: 'What is Webpack?', a: 'Webpack is the go-to web development tool nowadays for getting all of your CSS and JavaScript files to become one.'
				},
				{q: 'Result of Webpack called as? ', a: '«bundle»'
				},
				{q: 'which script automatically generated by webpack?', a: 'dist/bundle.js Webpack is going to create this file'
				},
				{q: 'How many commands line option takes in webpacks?', a: 'two params: the entry and the output'
				},
				{q: 'Commands for watch in webpacks?' a: 'webpack --watch or webpack -w'
				},
				{q: 'Only language that webpack speak is?' a: 'JavaScript that’s the only language webpack speaks'
				},
				{q: 'which preprocessor loader refer?' a: 'preprocessor such as Sass, or a transpiler such as Babel'
				},
				{q: 'If you install any new package webpack know where is that package?' a: 'yes'
				},
				{q: 'What is a new in webpack 2?' a: 'webpack 2 brings native support ES6 Modules. This means webpack now understands import and export without them being transformed to CommonJS'
				},
				{q:
				},
				{q:
				},
				{q:
				},

			]}

// LESS

		{title: 'LESS Basic', image: '../style/images/less.png',
			cards: [ 
				{q: 'What is LESS?', a: 'LESS is a CSS pre-processor that enables customizable, manageable and reusable style sheet for website.'
				},
				{q: 'Who is the inventor of Less?', a: 'Less is designed and developed by Alexis Sellier and Dmitry Fadeyev.'
				},
				{q: 'LESS is Cross Browser friendly? ', a: 'Yes'
				},
				{q: 'In LESS you can define variables?', a: 'Yes'
				},
				{q: 'What is "Mixins" in LESS?', a: "In LESS it's enables us to use an existing class or ids and apply all it's styles directly to another selector"
				},
				{q: 'You can use Nesting and Scope In Less?' a: 'Yes'
				},
				{q: 'What is nesting in LESS programming?' a: 'Nesting in LESS programming specifies the clustering of statements inside other statements.'
				},
				{q: 'How to create a Less file and where to store and compile it?' a: 'You can create a Less file with a ".less" extension'
				},
				{q: 'What is the use of data URI in LESS?' a: "Data URI is a technique that allows developers to avoid external image referencing and instead embed them directly into a stylesheet."
				},
				{q: 'Less uses JavaScript and processed which side?' a: 'at client-side'
				},
				{q: 'How to define Variable Name in LESS?' a: 'Variable names are prefaced with the @symbol'
				},
				{q: 'What is the use of &combinator in Less?' a: '&combinator concatenates nested selector with the parent selector'
				},
				{q: 'What is the use of e() function in Less?' a: 'The e() function is used to escape a value so that it passes straight through to the compiled CSS, without being noticed by the LESS compiler.'
				},
				{q:
				},

			]}
	]	
}


