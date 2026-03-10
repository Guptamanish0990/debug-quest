export const experiencedQuestions = [
  {
    id: 'e1',
    category: 'javascript',
    question: 'What is closure in JavaScript?',
    answer: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are created every time a function is created. They are useful for data privacy and creating function factories.',
    difficulty: 'Medium',
    tags: ['closure', 'javascript', 'advanced'],
    tips: 'Closures remember their outer variables, even after outer function execution'
  },
  {
    id: 'e2',
    category: 'javascript',
    question: 'Explain event delegation in JavaScript.',
    answer: 'Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to child elements. It works due to event bubbling. This improves performance and handles dynamically added elements.',
    difficulty: 'Medium',
    tags: ['events', 'javascript', 'performance'],
    tips: 'Use event.target to identify which child triggered the event'
  },
  {
    id: 'e3',
    category: 'react',
    question: 'What is the Virtual DOM and how does it work?',
    answer: 'The Virtual DOM is a lightweight copy of the actual DOM kept in memory. React creates a virtual DOM, compares it with the previous version (diffing), calculates what changed, and updates only those parts in the real DOM (reconciliation). This makes updates efficient.',
    difficulty: 'Medium',
    tags: ['virtual-dom', 'react', 'performance'],
    tips: 'Virtual DOM diffing is why React is fast for UI updates'
  },
  {
    id: 'e4',
    category: 'react',
    question: 'What are React hooks and why were they introduced?',
    answer: 'React Hooks are functions that let you use state and lifecycle features in function components. They were introduced to avoid class components, reduce code complexity, make logic reusable, and improve code organization. Common hooks: useState, useEffect, useContext.',
    difficulty: 'Medium',
    tags: ['hooks', 'react'],
    tips: 'Hooks must be called at the top level of components'
  },
  {
    id: 'e5',
    category: 'javascript',
    question: 'What is the difference between == and === in JavaScript?',
    answer: '== is loose equality that performs type coercion (converts types before comparison). === is strict equality that checks both value and type without conversion. Always prefer === to avoid unexpected behavior.',
    difficulty: 'Easy',
    tags: ['operators', 'javascript'],
    tips: '0 == false is true, but 0 === false is false'
  },
  {
    id: 'e6',
    category: 'javascript',
    question: 'What is event bubbling and capturing?',
    answer: 'Event bubbling is when an event propagates from the target element up to the root. Event capturing is the opposite - from root down to target. By default, events bubble. You can use the third parameter of addEventListener to use capturing phase.',
    difficulty: 'Medium',
    tags: ['events', 'javascript'],
    tips: 'stopPropagation() stops event from bubbling or capturing'
  },
  {
    id: 'e7',
    category: 'react',
    question: 'What is useEffect and when do you use it?',
    answer: 'useEffect is a React hook for side effects like data fetching, subscriptions, or manual DOM manipulation. It runs after render. The dependency array controls when it runs: empty array = once, no array = every render, with dependencies = when dependencies change.',
    difficulty: 'Medium',
    tags: ['hooks', 'useEffect', 'react'],
    tips: 'Cleanup function in useEffect prevents memory leaks'
  },
  {
    id: 'e8',
    category: 'css',
    question: 'What is CSS Grid and how is it different from Flexbox?',
    answer: 'CSS Grid is a two-dimensional layout system for rows and columns. Flexbox is one-dimensional (row or column). Grid is better for overall page layout, Flexbox for component layout. Grid lets you position items anywhere in the grid, Flexbox flows items sequentially.',
    difficulty: 'Medium',
    tags: ['grid', 'css', 'layout'],
    tips: 'Grid for layouts, Flexbox for components within grid cells'
  },
  {
    id: 'e9',
    category: 'javascript',
    question: 'What is a Promise in JavaScript?',
    answer: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, rejected. Promises help avoid callback hell and make async code more readable with .then(), .catch(), and async/await.',
    difficulty: 'Medium',
    tags: ['promise', 'async', 'javascript'],
    tips: 'Promises are eager - they start executing immediately'
  },
  {
    id: 'e10',
    category: 'javascript',
    question: 'What is the difference between null and undefined?',
    answer: 'undefined means a variable has been declared but not assigned a value. null is an assignment value that represents "no value" intentionally. typeof undefined is "undefined", typeof null is "object" (historical bug in JavaScript).',
    difficulty: 'Easy',
    tags: ['datatypes', 'javascript'],
    tips: 'Use null when you want to explicitly say "no value"'
  },
  {
    id: 'e11',
    category: 'react',
    question: 'What is React Context API?',
    answer: 'Context API is a way to pass data through the component tree without passing props manually at every level. It is useful for global data like theme, user authentication, or language. Create context with createContext, provide with Provider, consume with useContext.',
    difficulty: 'Medium',
    tags: ['context', 'react', 'state-management'],
    tips: 'Context triggers re-renders for all consuming components'
  },
  {
    id: 'e12',
    category: 'javascript',
    question: 'What is the "this" keyword in JavaScript?',
    answer: 'The "this" keyword refers to the object that is executing the current function. Its value depends on how the function is called: in methods it refers to the owner object, alone it refers to global object, in arrow functions it inherits from parent scope.',
    difficulty: 'Hard',
    tags: ['this', 'javascript', 'advanced'],
    tips: 'Arrow functions dont have their own "this", they inherit it'
  },
  {
    id: 'e13',
    category: 'react',
    question: 'What is prop drilling and how do you solve it?',
    answer: 'Prop drilling is passing props through multiple nested components to reach a deeply nested child. Solutions: Context API (for global state), component composition (children props), state management libraries (Redux, Zustand), or custom hooks.',
    difficulty: 'Medium',
    tags: ['props', 'react', 'patterns'],
    tips: 'Prop drilling isnt always bad - it makes data flow explicit'
  },
  {
    id: 'e14',
    category: 'javascript',
    question: 'What is async/await in JavaScript?',
    answer: 'async/await is syntactic sugar for working with Promises. "async" declares an async function that returns a Promise. "await" pauses execution until the Promise resolves. It makes async code look and behave like synchronous code, improving readability.',
    difficulty: 'Medium',
    tags: ['async', 'javascript', 'es8'],
    tips: 'await can only be used inside async functions'
  },
  {
    id: 'e15',
    category: 'css',
    question: 'What are CSS preprocessors? Name a few.',
    answer: 'CSS preprocessors extend CSS with features like variables, nesting, mixins, and functions. They compile to regular CSS. Popular preprocessors: Sass/SCSS (most popular), Less, Stylus. Modern CSS now has native variables (custom properties).',
    difficulty: 'Medium',
    tags: ['preprocessors', 'css', 'tools'],
    tips: 'CSS custom properties (variables) are becoming more powerful'
  },
  {
    id: 'e16',
    category: 'react',
    question: 'What are controlled and uncontrolled components?',
    answer: 'Controlled components: form data is handled by React state, input value is controlled by React. Uncontrolled components: form data is handled by the DOM itself, accessed via refs. Controlled components are preferred for better control and validation.',
    difficulty: 'Medium',
    tags: ['forms', 'react'],
    tips: 'Use uncontrolled components for file inputs or integration'
  },
  {
    id: 'e17',
    category: 'javascript',
    question: 'What is the spread operator in JavaScript?',
    answer: 'The spread operator (...) expands iterables (arrays, objects, strings) into individual elements. Uses: copying arrays/objects, merging arrays, passing array elements as function arguments, and creating shallow copies. Introduced in ES6.',
    difficulty: 'Easy',
    tags: ['spread', 'javascript', 'es6'],
    tips: 'Spread creates shallow copies, not deep copies'
  },
  {
    id: 'e18',
    category: 'react',
    question: 'What is useMemo and when should you use it?',
    answer: 'useMemo is a React hook that memoizes expensive calculations. It returns a cached value and only recalculates when dependencies change. Use it to optimize performance by avoiding unnecessary recalculations, not for every computation.',
    difficulty: 'Hard',
    tags: ['hooks', 'performance', 'react'],
    tips: 'Dont overuse useMemo - the memoization itself has cost'
  },
  {
    id: 'e19',
    category: 'javascript',
    question: 'What is destructuring in JavaScript?',
    answer: 'Destructuring is a syntax for extracting values from arrays or properties from objects into distinct variables. It makes code more readable and concise. Examples: const [a, b] = array; const {name, age} = object;',
    difficulty: 'Easy',
    tags: ['destructuring', 'javascript', 'es6'],
    tips: 'You can rename variables during destructuring: const {name: userName}'
  },
  {
    id: 'e20',
    category: 'react',
    question: 'What is the difference between useCallback and useMemo?',
    answer: 'useMemo memoizes the result value of a function. useCallback memoizes the function itself. Use useMemo for expensive calculations, useCallback to prevent unnecessary re-renders by maintaining function reference equality across renders.',
    difficulty: 'Hard',
    tags: ['hooks', 'performance', 'react'],
    tips: 'useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)'
  }
];