export const LEVELS_REACT = [
  // ========== EASY (1-50) ==========
  {
    id: 1,
    title: "Missing React Import",
    difficulty: "Easy",
    language: "React",
    description: "Older JSX setups require React in scope.",
    buggyCode: `function App() {
  return <h1>Hello</h1>;
}

export default App;`,
    fixedCode: `import React from "react";

function App() {
  return <h1>Hello</h1>;
}

export default App;`,
    hint: "Older builds need React imported for JSX.",
    bugLine: 1,
    explanation: "Without React import, JSX may fail in some setups."
  },
  {
    id: 2,
    title: "Incorrect useState Initialization",
    difficulty: "Easy",
    language: "React",
    description: "Destructuring useState incorrectly.",
    buggyCode: `const count = useState(0);`,
    fixedCode: `const [count, setCount] = useState(0);`,
    hint: "useState returns an array.",
    bugLine: 1,
    explanation: "Must use array destructuring."
  },
  {
    id: 3,
    title: "Missing Return Statement in Component",
    difficulty: "Easy",
    language: "React",
    description: "Component function doesn't return JSX.",
    buggyCode: `function Welcome() {
  <h1>Hello World</h1>;
}`,
    fixedCode: `function Welcome() {
  return <h1>Hello World</h1>;
}`,
    hint: "React components must return JSX or null.",
    bugLine: 2,
    explanation: "Missing return keyword before JSX."
  },
  {
    id: 4,
    title: "Incorrect Event Handler Syntax",
    difficulty: "Easy",
    language: "React",
    description: "Wrong syntax for onClick handler.",
    buggyCode: `<button onclick={() => console.log("Clicked")}>
  Click me
</button>`,
    fixedCode: `<button onClick={() => console.log("Clicked")}>
  Click me
</button>`,
    hint: "React uses camelCase for event handlers.",
    bugLine: 1,
    explanation: "Should be onClick (capital C), not onclick."
  },
  {
    id: 5,
    title: "Missing Closing Tag",
    difficulty: "Easy",
    language: "React",
    description: "Self-closing tag not used for void element.",
    buggyCode: `<img src="image.jpg"></img>`,
    fixedCode: `<img src="image.jpg" />`,
    hint: "Self-closing tags end with '/>' in JSX.",
    bugLine: 1,
    explanation: "img is a void element, should use self-closing syntax."
  },
  {
    id: 6,
    title: "Wrong useState Usage",
    difficulty: "Easy",
    language: "React",
    description: "Using state setter incorrectly.",
    buggyCode: `const [count, setCount] = useState(0);

const increment = () => {
  count = count + 1;
};`,
    fixedCode: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
};`,
    hint: "Use the setter function to update state.",
    bugLine: 4,
    explanation: "Cannot assign to count directly; must use setCount."
  },
  {
    id: 7,
    title: "Class Component Syntax Error",
    difficulty: "Easy",
    language: "React",
    description: "Missing render method in class component.",
    buggyCode: `class Welcome extends React.Component {
  <h1>Hello</h1>
}`,
    fixedCode: `class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}`,
    hint: "Class components need a render() method.",
    bugLine: 2,
    explanation: "Class components must have a render method that returns JSX."
  },
  {
    id: 8,
    title: "Wrong import Statement",
    difficulty: "Easy",
    language: "React",
    description: "Importing default export incorrectly.",
    buggyCode: `import { useState } from 'react';`,
    fixedCode: `import React, { useState } from 'react';`,
    hint: "React is the default export from 'react'.",
    bugLine: 1,
    explanation: "Need to import React when using older JSX transforms."
  },
  {
    id: 9,
    title: "Missing Fragment Wrapper",
    difficulty: "Easy",
    language: "React",
    description: "Multiple elements without wrapper.",
    buggyCode: `function Component() {
  return (
    <h1>Title</h1>
    <p>Description</p>
  );
}`,
    fixedCode: `function Component() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}`,
    hint: "Wrap multiple elements in a Fragment or div.",
    bugLine: 3,
    explanation: "React components can only return a single element."
  },
  {
    id: 10,
    title: "Incorrect JSX Comment",
    difficulty: "Easy",
    language: "React",
    description: "Wrong comment syntax in JSX.",
    buggyCode: `<div>
  <!-- This is a comment -->
  <p>Content</p>
</div>`,
    fixedCode: `<div>
  {/* This is a comment */}
  <p>Content</p>
</div>`,
    hint: "Use curly braces with JavaScript comment syntax.",
    bugLine: 2,
    explanation: "JSX comments use {/* */} syntax, not HTML comment syntax."
  },
  {
    id: 11,
    title: "Missing Props Default Value",
    difficulty: "Easy",
    language: "React",
    description: "Destructuring without default value.",
    buggyCode: `function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}`,
    fixedCode: `function Greeting({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}`,
    hint: "Provide default values for optional props.",
    bugLine: 1,
    explanation: "Adding default value prevents 'undefined' display."
  },
  {
    id: 12,
    title: "Wrong Conditional Rendering",
    difficulty: "Easy",
    language: "React",
    description: "Using if statement directly in JSX.",
    buggyCode: `function UserStatus({ isLoggedIn }) {
  return (
    <div>
      if (isLoggedIn) {
        <span>Welcome back!</span>
      } else {
        <span>Please log in</span>
      }
    </div>
  );
}`,
    fixedCode: `function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <span>Welcome back!</span>
      ) : (
        <span>Please log in</span>
      )}
    </div>
  );
}`,
    hint: "Use ternary operator or && for conditional rendering.",
    bugLine: 4,
    explanation: "Regular JavaScript if statements don't work inside JSX."
  },
  {
    id: 13,
    title: "className Instead of class",
    difficulty: "Easy",
    language: "React",
    description: "Using HTML class attribute in JSX.",
    buggyCode: `<div class="container">Content</div>`,
    fixedCode: `<div className="container">Content</div>`,
    hint: "JSX uses className instead of class.",
    bugLine: 1,
    explanation: "class is a reserved word in JavaScript, use className."
  },
  {
    id: 14,
    title: "Missing Key Prop in List",
    difficulty: "Easy",
    language: "React",
    description: "Rendering list without keys.",
    buggyCode: `{items.map(item => <li>{item.name}</li>)}`,
    fixedCode: `{items.map(item => <li key={item.id}>{item.name}</li>)}`,
    hint: "Add unique key prop to list items.",
    bugLine: 1,
    explanation: "React needs keys to track list items efficiently."
  },
  {
    id: 15,
    title: "Wrong Style Attribute Syntax",
    difficulty: "Easy",
    language: "React",
    description: "Using string for style attribute.",
    buggyCode: `<div style="color: red; font-size: 20px;">Text</div>`,
    fixedCode: `<div style={{ color: 'red', fontSize: '20px' }}>Text</div>`,
    hint: "Style attribute expects an object, not string.",
    bugLine: 1,
    explanation: "JSX style requires JavaScript object with camelCase properties."
  },
  {
    id: 16,
    title: "Missing Export Default",
    difficulty: "Easy",
    language: "React",
    description: "Component not exported properly.",
    buggyCode: `function App() {
  return <div>App</div>;
}`,
    fixedCode: `function App() {
  return <div>App</div>;
}

export default App;`,
    hint: "Need export default to use component elsewhere.",
    bugLine: 1,
    explanation: "Component must be exported to be imported in other files."
  },
  {
    id: 17,
    title: "Wrong Component Naming",
    difficulty: "Easy",
    language: "React",
    description: "Component name not capitalized.",
    buggyCode: `function myComponent() {
  return <div>Content</div>;
}`,
    fixedCode: `function MyComponent() {
  return <div>Content</div>;
}`,
    hint: "React component names must start with capital letter.",
    bugLine: 1,
    explanation: "Lowercase names are treated as HTML tags."
  },
  {
    id: 18,
    title: "Missing Curly Braces for JS Expression",
    difficulty: "Easy",
    language: "React",
    description: "JavaScript expression not wrapped in {}.",
    buggyCode: `<div>Count: count</div>`,
    fixedCode: `<div>Count: {count}</div>`,
    hint: "Use {} to embed JavaScript expressions in JSX.",
    bugLine: 1,
    explanation: "Without curly braces, 'count' is treated as text."
  },
  {
    id: 19,
    title: "Wrong Event Object Usage",
    difficulty: "Easy",
    language: "React",
    description: "Not accessing event target value.",
    buggyCode: `<input onChange={handleChange} />`,
    fixedCode: `<input onChange={e => setValue(e.target.value)} />`,
    hint: "Event handlers receive event object as parameter.",
    bugLine: 1,
    explanation: "handleChange function needs to receive event parameter."
  },
  {
    id: 20,
    title: "Missing Parentheses in Return",
    difficulty: "Easy",
    language: "React",
    description: "Multi-line JSX without parentheses.",
    buggyCode: `function Component() {
  return
    <div>
      <h1>Title</h1>
    </div>;
}`,
    fixedCode: `function Component() {
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
}`,
    hint: "Wrap multi-line JSX in parentheses.",
    bugLine: 2,
    explanation: "JavaScript automatically inserts semicolon after return."
  },
  {
    id: 21,
    title: "Using var Instead of const/let",
    difficulty: "Easy",
    language: "React",
    description: "Old variable declaration in component.",
    buggyCode: `function Component() {
  var count = 0;
  return <div>{count}</div>;
}`,
    fixedCode: `function Component() {
  const count = 0;
  return <div>{count}</div>;
}`,
    hint: "Use const or let instead of var in modern React.",
    bugLine: 2,
    explanation: "var has function scope, const/let have block scope."
  },
  {
    id: 22,
    title: "Wrong useEffect Import",
    difficulty: "Easy",
    language: "React",
    description: "Missing useEffect import.",
    buggyCode: `function Component() {
  useEffect(() => {
    console.log('mounted');
  }, []);
  return <div>Content</div>;
}`,
    fixedCode: `import React, { useEffect } from 'react';

function Component() {
  useEffect(() => {
    console.log('mounted');
  }, []);
  return <div>Content</div>;
}`,
    hint: "Import useEffect from 'react'.",
    bugLine: 2,
    explanation: "useEffect is a named export from react."
  },
  {
    id: 23,
    title: "Direct DOM Manipulation",
    difficulty: "Easy",
    language: "React",
    description: "Manipulating DOM directly instead of using state.",
    buggyCode: `function Component() {
  const handleClick = () => {
    document.getElementById('text').innerHTML = 'Clicked';
  };
  return (
    <div>
      <div id="text">Original</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}`,
    fixedCode: `function Component() {
  const [text, setText] = useState('Original');
  
  const handleClick = () => {
    setText('Clicked');
  };
  
  return (
    <div>
      <div>{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}`,
    hint: "Use React state instead of direct DOM manipulation.",
    bugLine: 3,
    explanation: "Direct DOM manipulation bypasses React's rendering system."
  },
  {
    id: 24,
    title: "Missing Prop Types",
    difficulty: "Easy",
    language: "React",
    description: "No prop type validation.",
    buggyCode: `function User({ name, age }) {
  return <div>{name} is {age} years old</div>;
}`,
    fixedCode: `import PropTypes from 'prop-types';

function User({ name, age }) {
  return <div>{name} is {age} years old</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};`,
    hint: "Add PropTypes for better debugging.",
    bugLine: 1,
    explanation: "PropTypes catch bugs by validating props at runtime."
  },
  {
    id: 25,
    title: "Wrong Boolean Attribute",
    difficulty: "Easy",
    language: "React",
    description: "Boolean attribute with string value.",
    buggyCode: `<input disabled="true" />`,
    fixedCode: `<input disabled={true} />`,
    hint: "Boolean attributes should have boolean values.",
    bugLine: 1,
    explanation: "disabled={true} or just disabled, not disabled='true'."
  },
  {
    id: 26,
    title: "Component Inside Component",
    difficulty: "Easy",
    language: "React",
    description: "Nested component definition.",
    buggyCode: `function App() {
  function Child() {
    return <div>Child</div>;
  }
  
  return <Child />;
}`,
    fixedCode: `function Child() {
  return <div>Child</div>;
}

function App() {
  return <Child />;
}`,
    hint: "Define components at top level, not inside other components.",
    bugLine: 2,
    explanation: "Nested components re-create on every render, losing state."
  },
  {
    id: 27,
    title: "Wrong Array Map Usage",
    difficulty: "Easy",
    language: "React",
    description: "Forgetting to return from map.",
    buggyCode: `{items.map(item => {
  <li>{item.name}</li>
})}`,
    fixedCode: `{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}`,
    hint: "Arrow functions need explicit return or parentheses.",
    bugLine: 2,
    explanation: "Block body arrow function needs return statement."
  },
  {
    id: 28,
    title: "Missing Dependency Array",
    difficulty: "Easy",
    language: "React",
    description: "useEffect without dependency array.",
    buggyCode: `useEffect(() => {
  console.log('Running effect');
});`,
    fixedCode: `useEffect(() => {
  console.log('Running effect');
}, []);`,
    hint: "Add empty dependency array for mount-only effects.",
    bugLine: 1,
    explanation: "Without dependency array, effect runs after every render."
  },
  {
    id: 29,
    title: "Wrong SetState in Class Component",
    difficulty: "Easy",
    language: "React",
    description: "Direct state mutation in class component.",
    buggyCode: `class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => {
    this.state.count = this.state.count + 1;
  };
}`,
    fixedCode: `class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
}`,
    hint: "Use setState() to update state in class components.",
    bugLine: 5,
    explanation: "Direct state mutation doesn't trigger re-render."
  },
  {
    id: 30,
    title: "Missing Children Prop",
    difficulty: "Easy",
    language: "React",
    description: "Not rendering children in wrapper component.",
    buggyCode: `function Container(props) {
  return <div className="container"></div>;
}`,
    fixedCode: `function Container({ children }) {
  return <div className="container">{children}</div>;
}`,
    hint: "Access and render children prop.",
    bugLine: 2,
    explanation: "Wrapper components should render their children."
  },
  {
    id: 31,
    title: "Wrong Import Path",
    difficulty: "Easy",
    language: "React",
    description: "Incorrect relative import path.",
    buggyCode: `import Component from './Component';`,
    fixedCode: `import Component from './Component.jsx';`,
    hint: "Check file extensions and paths.",
    bugLine: 1,
    explanation: "Some setups require explicit file extensions."
  },
  {
    id: 32,
    title: "Using innerHTML Dangerously",
    difficulty: "Easy",
    language: "React",
    description: "Using dangerouslySetInnerHTML without caution.",
    buggyCode: `<div>{htmlContent}</div>`,
    fixedCode: `<div dangerouslySetInnerHTML={{ __html: htmlContent }} />`,
    hint: "Use dangerouslySetInnerHTML for HTML strings.",
    bugLine: 1,
    explanation: "Regular JSX escapes HTML, need dangerouslySetInnerHTML for raw HTML."
  },
  {
    id: 33,
    title: "Missing Error Boundary in Production",
    difficulty: "Easy",
    language: "React",
    description: "No error handling for component failures.",
    buggyCode: `function App() {
  return <BuggyComponent />;
}`,
    fixedCode: `function App() {
  try {
    return <BuggyComponent />;
  } catch (error) {
    return <div>Something went wrong</div>;
  }
}`,
    hint: "Wrap error-prone components in try-catch.",
    bugLine: 2,
    explanation: "Uncaught errors crash the entire app."
  },
  {
    id: 34,
    title: "Wrong Ref Usage",
    difficulty: "Easy",
    language: "React",
    description: "Using string refs (deprecated).",
    buggyCode: `<input ref="myInput" />`,
    fixedCode: `const inputRef = useRef();
<input ref={inputRef} />`,
    hint: "Use useRef hook for functional components.",
    bugLine: 1,
    explanation: "String refs are deprecated in modern React."
  },
  {
    id: 35,
    title: "Missing React Router Import",
    difficulty: "Easy",
    language: "React",
    description: "Using Router components without import.",
    buggyCode: `<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>`,
    fixedCode: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>`,
    hint: "Import components from react-router-dom.",
    bugLine: 1,
    explanation: "Components must be imported before use."
  },
  {
    id: 36,
    title: "Wrong Controlled Input",
    difficulty: "Easy",
    language: "React",
    description: "Controlled input without onChange.",
    buggyCode: `<input value={value} />`,
    fixedCode: `<input value={value} onChange={e => setValue(e.target.value)} />`,
    hint: "Controlled inputs need onChange handler.",
    bugLine: 1,
    explanation: "Input with value but no onChange becomes read-only."
  },
  {
    id: 37,
    title: "Missing CSS Import",
    difficulty: "Easy",
    language: "React",
    description: "CSS file not imported.",
    buggyCode: `// In component file
function Component() {
  return <div className="my-style">Content</div>;
}`,
    fixedCode: `import './Component.css';

function Component() {
  return <div className="my-style">Content</div>;
}`,
    hint: "Import CSS files in component files.",
    bugLine: 1,
    explanation: "CSS files need to be imported to apply styles."
  },
  {
    id: 38,
    title: "Wrong Lifecycle Method Name",
    difficulty: "Easy",
    language: "React",
    description: "Misspelled lifecycle method.",
    buggyCode: `class Component extends React.Component {
  componentdidmount() {
    console.log('mounted');
  }
}`,
    fixedCode: `class Component extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }
}`,
    hint: "Lifecycle methods use camelCase.",
    bugLine: 2,
    explanation: "Should be componentDidMount (capital D and M)."
  },
  {
    id: 39,
    title: "Missing Default Export",
    difficulty: "Easy",
    language: "React",
    description: "Component file missing export.",
    buggyCode: `function Button() {
  return <button>Click</button>;
}`,
    fixedCode: `function Button() {
  return <button>Click</button>;
}

export default Button;`,
    hint: "Export component to use in other files.",
    bugLine: 1,
    explanation: "Functions need to be exported to be used as components."
  },
  {
    id: 40,
    title: "Wrong Context Provider Usage",
    difficulty: "Easy",
    language: "React",
    description: "Using Context without Provider.",
    buggyCode: `const ThemeContext = React.createContext();

function App() {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
}`,
    fixedCode: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}`,
    hint: "Wrap components with Context.Provider.",
    bugLine: 4,
    explanation: "useContext needs a Provider ancestor in the tree."
  },
  {
    id: 41,
    title: "Missing npm/yarn Package",
    difficulty: "Easy",
    language: "React",
    description: "Using library without installation.",
    buggyCode: `import axios from 'axios';

function Component() {
  useEffect(() => {
    axios.get('/api/data');
  }, []);
}`,
    fixedCode: `// First run: npm install axios
import axios from 'axios';

function Component() {
  useEffect(() => {
    axios.get('/api/data');
  }, []);
}`,
    hint: "Install packages before importing.",
    bugLine: 1,
    explanation: "Missing package installation causes module not found error."
  },
  {
    id: 42,
    title: "Wrong Prop Passing",
    difficulty: "Easy",
    language: "React",
    description: "Passing wrong prop type.",
    buggyCode: `<User name={user} />`,
    fixedCode: `<User name={user.name} />`,
    hint: "Check what props the component expects.",
    bugLine: 1,
    explanation: "Passing entire user object when component expects name string."
  },
  {
    id: 43,
    title: "Missing React Version",
    difficulty: "Easy",
    language: "React",
    description: "Using feature in wrong React version.",
    buggyCode: `// Trying to use Concurrent Features in React 16`,
    fixedCode: `// Update to React 18+ for Concurrent Features`,
    hint: "Check React version compatibility.",
    bugLine: 1,
    explanation: "Some features require specific React versions."
  },
  {
    id: 44,
    title: "Wrong File Extension",
    difficulty: "Easy",
    language: "React",
    description: "JSX file with .js extension.",
    buggyCode: `// In App.js
function App() {
  return <div>Content</div>;
}`,
    fixedCode: `// Rename to App.jsx or configure bundler
// In App.jsx
function App() {
  return <div>Content</div>;
}`,
    hint: "Use .jsx extension for JSX files.",
    bugLine: 1,
    explanation: "Some tools require .jsx extension for JSX syntax."
  },
  {
    id: 45,
    title: "Missing Build Step",
    difficulty: "Easy",
    language: "React",
    description: "Running JSX without transpilation.",
    buggyCode: `// Directly including JSX in browser`,
    fixedCode: `// Use create-react-app or build tool
// JSX needs to be transpiled to JavaScript`,
    hint: "JSX needs to be compiled to JavaScript.",
    bugLine: 1,
    explanation: "Browsers don't understand JSX, need Babel/TypeScript compiler."
  },
  {
    id: 46,
    title: "Wrong State Initialization",
    difficulty: "Easy",
    language: "React",
    description: "State initialized with wrong type.",
    buggyCode: `const [items, setItems] = useState();`,
    fixedCode: `const [items, setItems] = useState([]);`,
    hint: "Initialize state with appropriate default value.",
    bugLine: 1,
    explanation: "Undefined state causes errors when accessing properties."
  },
  {
    id: 47,
    title: "Missing Node.js",
    difficulty: "Easy",
    language: "React",
    description: "Trying to run React without Node.js.",
    buggyCode: `// No Node.js installed
npx create-react-app my-app`,
    fixedCode: `// Install Node.js first from nodejs.org
// Then run create-react-app`,
    hint: "React development requires Node.js.",
    bugLine: 2,
    explanation: "React build tools run on Node.js runtime."
  },
  {
    id: 48,
    title: "Wrong Port Configuration",
    difficulty: "Easy",
    language: "React",
    description: "Port already in use.",
    buggyCode: `// package.json
"scripts": {
  "start": "react-scripts start"
}`,
    fixedCode: `// package.json
"scripts": {
  "start": "PORT=3001 react-scripts start"
}`,
    hint: "Change port if default (3000) is busy.",
    bugLine: 3,
    explanation: "Port 3000 might be used by another application."
  },
  {
    id: 49,
    title: "Missing Browser Support",
    difficulty: "Easy",
    language: "React",
    description: "React not working in older browsers.",
    buggyCode: `// Trying to run in IE 11`,
    fixedCode: `// Add polyfills or use modern browsers
// Update package.json with browserslist`,
    hint: "React requires modern JavaScript support.",
    bugLine: 1,
    explanation: "Older browsers don't support ES6+ features React uses."
  },
  {
    id: 50,
    title: "Wrong Environment Variables",
    difficulty: "Easy",
    language: "React",
    description: "Using Node.js environment variables incorrectly.",
    buggyCode: `const apiKey = process.env.API_KEY;`,
    fixedCode: `const apiKey = process.env.REACT_APP_API_KEY;`,
    hint: "React environment variables need REACT_APP_ prefix.",
    bugLine: 1,
    explanation: "Only variables starting with REACT_APP_ are embedded in build."

  // ========== MEDIUM (51-100) ==========
  },
  {
    id: 51,
    title: "Direct State Mutation",
    difficulty: "Medium",
    language: "React",
    description: "State should not be mutated directly.",
    buggyCode: `const [user, setUser] = useState({ name: "A" });

user.name = "B";
setUser(user);`,
    fixedCode: `const [user, setUser] = useState({ name: "A" });

setUser({ ...user, name: "B" });`,
    hint: "Always create a new object/array when updating state.",
    bugLine: 3,
    explanation: "Mutating state directly can cause bugs and no re-render."
  },
  {
    id: 52,
    title: "Missing Dependency in useEffect",
    difficulty: "Medium",
    language: "React",
    description: "Effect doesn't re-run when it should.",
    buggyCode: `useEffect(() => {
  console.log(value);
}, []);`,
    fixedCode: `useEffect(() => {
  console.log(value);
}, [value]);`,
    hint: "Put all external values used inside effect in dependency array.",
    bugLine: 1,
    explanation: "value is missing from dependency array."
  },
  {
    id: 53,
    title: "Infinite Re-Render in useEffect",
    difficulty: "Medium",
    language: "React",
    description: "Effect updates state without dependencies.",
    buggyCode: `const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
});`,
    fixedCode: `const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
}, []);`,
    hint: "Without dependency array, effect runs after every render.",
    bugLine: 3,
    explanation: "Updating state on every render causes infinite loop."
  },
  {
    id: 54,
    title: "useEffect Missing Dependency - Function",
    difficulty: "Medium",
    language: "React",
    description: "Callback function in dependency array.",
    buggyCode: `const fetchData = () => {
  // fetch logic
};

useEffect(() => {
  fetchData();
}, [fetchData]);`,
    fixedCode: `const fetchData = useCallback(() => {
  // fetch logic
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]);`,
    hint: "Wrap functions with useCallback to prevent infinite loops.",
    bugLine: 6,
    explanation: "Function recreated on every render, causing useEffect to run infinitely."
  },
  {
    id: 55,
    title: "Stale Closure in useEffect",
    difficulty: "Medium",
    language: "React",
    description: "State value is stale in effect.",
    buggyCode: `const [count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    console.log(count);
  }, 1000);
  return () => clearInterval(interval);
}, []);`,
    fixedCode: `const [count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    console.log(count);
  }, 1000);
  return () => clearInterval(interval);
}, [count]);`,
    hint: "Effects capture values from the render they were created in.",
    bugLine: 4,
    explanation: "count value is stale; add it to dependency array or use ref."
  },
  {
    id: 56,
    title: "Props Changing Too Frequently",
    difficulty: "Medium",
    language: "React",
    description: "Inline function causing unnecessary re-renders.",
    buggyCode: `<Child onClick={() => handleClick(item.id)} />`,
    fixedCode: `const handleChildClick = useCallback((id) => {
  handleClick(id);
}, []);

<Child onClick={handleChildClick} />`,
    hint: "Inline functions create new function on every render.",
    bugLine: 1,
    explanation: "Creates new function each render, causing child to re-render."
  },
  {
    id: 57,
    title: "State Update Based on Previous State",
    difficulty: "Medium",
    language: "React",
    description: "Race condition in state updates.",
    buggyCode: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1);
  setCount(count + 1);
};`,
    fixedCode: `const [count, setCount] = useState(0);

const increment = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};`,
    hint: "Use functional updates when state depends on previous state.",
    bugLine: 4,
    explanation: "Both setCount calls use the same stale count value."
  },
  {
    id: 58,
    title: "Unnecessary Re-renders",
    difficulty: "Medium",
    language: "React",
    description: "Component re-renders when props haven't changed.",
    buggyCode: `function Child({ data }) {
  console.log('Child rendered');
  return <div>{data.value}</div>;
}`,
    fixedCode: `const Child = React.memo(function Child({ data }) {
  console.log('Child rendered');
  return <div>{data.value}</div>;
});`,
    hint: "Use React.memo for expensive components.",
    bugLine: 1,
    explanation: "Component re-renders even when data hasn't changed."
  },
  {
    id: 59,
    title: "useMemo Missing Dependency",
    difficulty: "Medium",
    language: "React",
    description: "Expensive calculation runs every render.",
    buggyCode: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
});`,
    fixedCode: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
    hint: "useMemo requires dependency array.",
    bugLine: 1,
    explanation: "Without dependency array, calculation runs on every render."
  },
  {
    id: 60,
    title: "Event Handler with Wrong Context",
    difficulty: "Medium",
    language: "React",
    description: "this is undefined in class component method.",
    buggyCode: `class Button extends React.Component {
  handleClick() {
    console.log('Clicked');
  }
  
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}`,
    fixedCode: `class Button extends React.Component {
  handleClick = () => {
    console.log('Clicked');
  };
  
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}`,
    hint: "Use arrow function or bind method in constructor.",
    bugLine: 6,
    explanation: "this context is lost when method is used as callback."
  },
  {
    id: 61,
    title: "useRef Not Initialized",
    difficulty: "Medium",
    language: "React",
    description: "Accessing ref before it's set.",
    buggyCode: `const ref = useRef();

useEffect(() => {
  ref.current.focus();
}, []);`,
    fixedCode: `const ref = useRef(null);

useEffect(() => {
  if (ref.current) {
    ref.current.focus();
  }
}, []);`,
    hint: "Initialize ref with null and check before accessing.",
    bugLine: 4,
    explanation: "ref.current might be null on initial render."
  },
  {
    id: 62,
    title: "Conditional Hook Call",
    difficulty: "Medium",
    language: "React",
    description: "Hook called conditionally.",
    buggyCode: `function Component({ condition }) {
  if (condition) {
    const [value, setValue] = useState('');
  }
  // ...
}`,
    fixedCode: `function Component({ condition }) {
  const [value, setValue] = useState('');
  // ...
}`,
    hint: "Hooks must be called at the top level.",
    bugLine: 3,
    explanation: "React hooks cannot be called conditionally."
  },
  {
    id: 63,
    title: "Multiple State Updates in Async",
    difficulty: "Medium",
    language: "React",
    description: "Batching issues with async state updates.",
    buggyCode: `const [data, setData] = useState([]);

const fetchData = async () => {
  const result = await apiCall();
  setData(result);
  console.log(data); // still old data
};`,
    fixedCode: `const [data, setData] = useState([]);

const fetchData = async () => {
  const result = await apiCall();
  setData(result);
  // Use useEffect to respond to data changes
};

useEffect(() => {
  console.log('Data updated:', data);
}, [data]);`,
    hint: "State updates are asynchronous.",
    bugLine: 7,
    explanation: "Cannot access updated state immediately after setState."
  },
  {
    id: 64,
    title: "Missing useCallback Dependencies",
    difficulty: "Medium",
    language: "React",
    description: "Stale closure in useCallback.",
    buggyCode: `const [count, setCount] = useState(0);

const increment = useCallback(() => {
  setCount(count + 1);
}, []);`,
    fixedCode: `const [count, setCount] = useState(0);

const increment = useCallback(() => {
  setCount(count + 1);
}, [count]);`,
    hint: "Add dependencies to useCallback.",
    bugLine: 3,
    explanation: "Callback uses stale count value without dependency."
  },
  {
    id: 65,
    title: "Circular Import Dependency",
    difficulty: "Medium",
    language: "React",
    description: "Two components importing each other.",
    buggyCode: `// ComponentA.js
import ComponentB from './ComponentB';

// ComponentB.js  
import ComponentA from './ComponentA';`,
    fixedCode: `// Move shared logic to third file
// or use lazy loading with React.lazy`,
    hint: "Break circular dependencies.",
    bugLine: 2,
    explanation: "Circular imports cause undefined values."
  },
  {
    id: 66,
    title: "Missing Error Boundary",
    difficulty: "Medium",
    language: "React",
    description: "No error handling in component tree.",
    buggyCode: `function App() {
  return <BuggyComponent />;
}`,
    fixedCode: `class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`,
    hint: "Wrap components with ErrorBoundary.",
    bugLine: 2,
    explanation: "Uncaught errors crash the entire app."
  },
  {
    id: 67,
    title: "useEffect Cleanup Not Called",
    difficulty: "Medium",
    language: "React",
    description: "Async operations not cleaned up.",
    buggyCode: `useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  // No cleanup
}, [url]);`,
    fixedCode: `useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  
  return () => {
    controller.abort();
  };
}, [url]);`,
    hint: "Cleanup async operations in useEffect.",
    bugLine: 1,
    explanation: "Fetch requests continue after component unmounts."
  },
  {
    id: 68,
    title: "State Update in Render",
    difficulty: "Medium",
    language: "React",
    description: "Setting state during render phase.",
    buggyCode: `function Component() {
  const [count, setCount] = useState(0);
  
  if (count === 0) {
    setCount(1); // Side effect in render
  }
  
  return <div>{count}</div>;
}`,
    fixedCode: `function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count === 0) {
      setCount(1);
    }
  }, [count]);
  
  return <div>{count}</div>;
}`,
    hint: "State updates should be in event handlers or effects.",
    bugLine: 5,
    explanation: "Setting state during render causes infinite loops."
  },
  {
    id: 69,
    title: "Context Value Changing Too Often",
    difficulty: "Medium",
    language: "React",
    description: "New object every render causes re-renders.",
    buggyCode: `function App() {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Child />
    </UserContext.Provider>
  );
}`,
    fixedCode: `function App() {
  const [user, setUser] = useState({ name: 'John' });
  const contextValue = useMemo(() => ({ user, setUser }), [user]);
  
  return (
    <UserContext.Provider value={contextValue}>
      <Child />
    </UserContext.Provider>
  );
}`,
    hint: "Memoize context value to prevent unnecessary re-renders.",
    bugLine: 6,
    explanation: "New object every render causes all consumers to re-render."
  },
  {
    id: 70,
    title: "Missing React.memo Comparison Function",
    difficulty: "Medium",
    language: "React",
    description: "React.memo with deep object comparison needed.",
    buggyCode: `const Child = React.memo(({ data }) => {
  return <div>{data.value}</div>;
});`,
    fixedCode: `const Child = React.memo(({ data }) => {
  return <div>{data.value}</div>;
}, (prevProps, nextProps) => {
  return prevProps.data.value === nextProps.data.value;
});`,
    hint: "Provide custom comparison for complex props.",
    bugLine: 1,
    explanation: "Objects are compared by reference, not by value."
  },
  {
    id: 71,
    title: "useLayoutEffect for DOM Measurements",
    difficulty: "Medium",
    language: "React",
    description: "Using useEffect for synchronous DOM operations.",
    buggyCode: `useEffect(() => {
  const rect = ref.current.getBoundingClientRect();
  setDimensions(rect);
}, []);`,
    fixedCode: `useLayoutEffect(() => {
  const rect = ref.current.getBoundingClientRect();
  setDimensions(rect);
}, []);`,
    hint: "Use useLayoutEffect for synchronous DOM operations.",
    bugLine: 1,
    explanation: "useEffect runs after paint, causing layout thrashing."
  },
  {
    id: 72,
    title: "Event Pooling in Class Components",
    difficulty: "Medium",
    language: "React",
    description: "Async access to synthetic event.",
    buggyCode: `handleChange = (e) => {
  setTimeout(() => {
    console.log(e.target.value); // null
  }, 1000);
}`,
    fixedCode: `handleChange = (e) => {
  const value = e.target.value;
  setTimeout(() => {
    console.log(value); // works
  }, 1000);
}`,
    hint: "Synthetic events are pooled and reused.",
    bugLine: 3,
    explanation: "Event properties are nullified after event handler completes."
  },
  {
    id: 73,
    title: "Prop Drilling",
    difficulty: "Medium",
    language: "React",
    description: "Passing props through multiple levels.",
    buggyCode: `function App() {
  const [user, setUser] = useState();
  return <Header user={user} />;
}

function Header({ user }) {
  return <Nav user={user} />;
}

function Nav({ user }) {
  return <UserMenu user={user} />;
}`,
    fixedCode: `const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function UserMenu() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}`,
    hint: "Use Context for deeply nested props.",
    bugLine: 1,
    explanation: "Prop drilling makes components less reusable."
  },
  {
    id: 74,
    title: "Missing Key Change on Array Reorder",
    difficulty: "Medium",
    language: "React",
    description: "Using index as key for sortable lists.",
    buggyCode: `{items.map((item, index) => (
  <ListItem key={index} item={item} />
))}`,
    fixedCode: `{items.map(item => (
  <ListItem key={item.id} item={item} />
))}`,
    hint: "Use stable unique IDs, not indexes.",
    bugLine: 1,
    explanation: "Index keys cause bugs when list is reordered."
  },
  {
    id: 75,
    title: "State Update Batching in Promises",
    difficulty: "Medium",
    language: "React",
    description: "Multiple setState calls not batched in promises.",
    buggyCode: `const handleClick = async () => {
  await Promise.resolve();
  setCount(count + 1);
  setFlag(!flag); // Two renders
};`,
    fixedCode: `const handleClick = async () => {
  await Promise.resolve();
  ReactDOM.unstable_batchedUpdates(() => {
    setCount(count + 1);
    setFlag(!flag);
  });
};`,
    hint: "Use React 18 or batching for async updates.",
    bugLine: 4,
    explanation: "State updates in microtasks aren't batched in React 17 and earlier."
  },
  {
    id: 76,
    title: "Memory Leak with Observers",
    difficulty: "Medium",
    language: "React",
    description: "IntersectionObserver not disconnected.",
    buggyCode: `useEffect(() => {
  const observer = new IntersectionObserver(callback);
  observer.observe(ref.current);
}, []);`,
    fixedCode: `useEffect(() => {
  const observer = new IntersectionObserver(callback);
  observer.observe(ref.current);
  
  return () => {
    observer.disconnect();
  };
}, []);`,
    hint: "Clean up observers in useEffect.",
    bugLine: 1,
    explanation: "Observer keeps references after component unmounts."
  },
  {
    id: 77,
    title: "Wrong useReducer Initial State",
    difficulty: "Medium",
    language: "React",
    description: "Complex initial state not memoized.",
    buggyCode: `const initialState = { items: [], loading: false };

function reducer(state, action) {
  // reducer logic
}

const [state, dispatch] = useReducer(reducer, initialState);`,
    fixedCode: `const initialState = { items: [], loading: false };

function reducer(state, action) {
  // reducer logic
}

const [state, dispatch] = useReducer(reducer, initialState);`,
    hint: "Actually this is fine unless initialState is expensive to compute.",
    fixedCode: `const initialState = useMemo(() => ({ 
  items: [], 
  loading: false 
}), []);

function reducer(state, action) {
  // reducer logic
}

const [state, dispatch] = useReducer(reducer, initialState);`,
    bugLine: 1,
    explanation: "If initialState is expensive to compute, memoize it."
  },
  {
    id: 78,
    title: "Component Re-mounting on Route Change",
    difficulty: "Medium",
    language: "React",
    description: "React Router re-mounting component unnecessarily.",
    buggyCode: `<Route path="/users/:id" component={UserDetail} />`,
    fixedCode: `<Route path="/users/:id">
  <UserDetail />
</Route>`,
    hint: "Use render prop or element prop instead of component prop.",
    bugLine: 1,
    explanation: "component prop creates new component instance on every render."
  },
  {
    id: 79,
    title: "Missing Dependency in useMemo",
    difficulty: "Medium",
    language: "React",
    description: "useMemo without dependencies recalculates every time.",
    buggyCode: `const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.value - b.value);
});`,
    fixedCode: `const sortedItems = useMemo(() => {
  return [...items].sort((a, b) => a.value - b.value);
}, [items]);`,
    hint: "Add dependencies to useMemo.",
    bugLine: 1,
    explanation: "Without dependencies, useMemo recalculates on every render."
  },
  {
    id: 80,
    title: "Event Handler in Dependency Array",
    difficulty: "Medium",
    language: "React",
    description: "Inline event handler causing infinite effects.",
    buggyCode: `useEffect(() => {
  window.addEventListener('click', () => handleClick());
}, [() => handleClick()]);`,
    fixedCode: `const handleClick = useCallback(() => {
  // handle click
}, []);

useEffect(() => {
  window.addEventListener('click', handleClick);
  return () => window.removeEventListener('click', handleClick);
}, [handleClick]);`,
    hint: "Memoize event handlers for dependency arrays.",
    bugLine: 3,
    explanation: "Inline function is new on every render, causing effect to re-run."
  },
  {
    id: 81,
    title: "State Synchronization Issue",
    difficulty: "Medium",
    language: "React",
    description: "Two states that should be synchronized.",
    buggyCode: `const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState('');

useEffect(() => {
  setFullName(\`\${firstName} \${lastName}\`);
}, [firstName, lastName]);`,
    fixedCode: `const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const fullName = \`\${firstName} \${lastName}\`;`,
    hint: "Derive state instead of synchronizing.",
    bugLine: 6,
    explanation: "Derived state can be computed, doesn't need separate state."
  },
  {
    id: 82,
    title: "Missing Cleanup in Promise",
    difficulty: "Medium",
    language: "React",
    description: "Promise continues after component unmounts.",
    buggyCode: `useEffect(() => {
  fetchData().then(setData);
}, []);`,
    fixedCode: `useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) {
      setData(data);
    }
  });
  
  return () => {
    isMounted = false;
  };
}, []);`,
    hint: "Track mounted state for async operations.",
    bugLine: 2,
    explanation: "Promise can resolve after component unmounts."
  },
  {
    id: 83,
    title: "Context Consumer Re-renders All",
    difficulty: "Medium",
    language: "React",
    description: "All consumers re-render when any value changes.",
    buggyCode: `const AppContext = React.createContext();

function App() {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState('light');
  
  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      <Child />
    </AppContext.Provider>
  );
}`,
    fixedCode: `const UserContext = React.createContext();
const ThemeContext = React.createContext();

function App() {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState('light');
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Child />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}`,
    hint: "Split contexts to minimize re-renders.",
    bugLine: 8,
    explanation: "Single context causes all consumers to re-render when any value changes."
  },
  {
    id: 84,
    title: "useState with Function Initializer",
    difficulty: "Medium",
    language: "React",
    description: "Expensive computation in useState.",
    buggyCode: `const [data, setData] = useState(expensiveComputation());`,
    fixedCode: `const [data, setData] = useState(() => expensiveComputation());`,
    hint: "Use function initializer for expensive initial state.",
    bugLine: 1,
    explanation: "Function runs only once, not on every render."
  },
  {
    id: 85,
    title: "Missing React Router v6 Upgrade",
    difficulty: "Medium",
    language: "React",
    description: "Using v5 syntax in v6.",
    buggyCode: `<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
</Switch>`,
    fixedCode: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`,
    hint: "React Router v6 uses different syntax.",
    bugLine: 2,
    explanation: "v6 uses element prop and Routes instead of Switch."
  },
  {
    id: 86,
    title: "Component Returning Array Without Keys",
    difficulty: "Medium",
    language: "React",
    description: "Returning array of elements without keys.",
    buggyCode: `function ListItems({ items }) {
  return items.map(item => <li>{item.name}</li>);
}`,
    fixedCode: `function ListItems({ items }) {
  return items.map(item => <li key={item.id}>{item.name}</li>);
}`,
    hint: "Array returns need keys on elements.",
    bugLine: 2,
    explanation: "React needs keys to identify array elements."
  },
  {
    id: 87,
    title: "useEffect vs useLayoutEffect Timing",
    difficulty: "Medium",
    language: "React",
    description: "Using useEffect when useLayoutEffect needed.",
    buggyCode: `useEffect(() => {
  // DOM measurements that affect layout
  const width = ref.current.offsetWidth;
  setWidth(width);
}, []);`,
    fixedCode: `useLayoutEffect(() => {
  // DOM measurements that affect layout
  const width = ref.current.offsetWidth;
  setWidth(width);
}, []);`,
    hint: "useLayoutEffect runs before paint, useEffect after.",
    bugLine: 1,
    explanation: "DOM measurements in useEffect cause layout thrashing."
  },
  {
    id: 88,
    title: "Missing React.StrictMode Warnings",
    difficulty: "Medium",
    language: "React",
    description: "Not using StrictMode in development.",
    buggyCode: `ReactDOM.render(<App />, document.getElementById('root'));`,
    fixedCode: `ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
    hint: "Wrap app in StrictMode for development warnings.",
    bugLine: 1,
    explanation: "StrictMode catches common bugs like unsafe lifecycles."
  },
  {
    id: 89,
    title: "State Update in Unmounted Component",
    difficulty: "Medium",
    language: "React",
    description: "Setting state after component unmounts.",
    buggyCode: `useEffect(() => {
  fetchData().then(setData);
}, []);`,
    fixedCode: `useEffect(() => {
  let isMounted = true;
  
  fetchData().then(data => {
    if (isMounted) {
      setData(data);
    }
  });
  
  return () => {
    isMounted = false;
  };
}, []);`,
    hint: "Check mounted state before setting state.",
    bugLine: 2,
    explanation: "Can't set state on unmounted component (memory leak)."
  },
  {
    id: 90,
    title: "Wrong useImperativeHandle Usage",
    difficulty: "Medium",
    language: "React",
    description: "Exposing too much internal state.",
    buggyCode: `useImperativeHandle(ref, () => ({
  value: state.value,
  setValue: setState,
  reset: () => setState(initialState)
}));`,
    fixedCode: `useImperativeHandle(ref, () => ({
  getValue: () => state.value,
  reset: () => setState(initialState)
}));`,
    hint: "Expose minimal, controlled API with useImperativeHandle.",
    bugLine: 2,
    explanation: "Exposing setter allows parent to bypass component logic."
  },
  {
    id: 91,
    title: "Missing React.memo on List Items",
    difficulty: "Medium",
    language: "React",
    description: "List items re-rendering unnecessarily.",
    buggyCode: `{items.map(item => (
  <ListItem item={item} />
))}`,
    fixedCode: `const MemoizedListItem = React.memo(ListItem);

{items.map(item => (
  <MemoizedListItem key={item.id} item={item} />
))}`,
    hint: "Memoize list items for performance.",
    bugLine: 2,
    explanation: "List items re-render when parent re-renders."
  },
  {
    id: 92,
    title: "useEffect Dependency on Object",
    difficulty: "Medium",
    language: "React",
    description: "Object dependency causes infinite re-renders.",
    buggyCode: `const filters = { category: 'books', sort: 'name' };

useEffect(() => {
  fetchData(filters);
}, [filters]);`,
    fixedCode: `const filters = useMemo(() => ({ 
  category: 'books', 
  sort: 'name' 
}), []);

useEffect(() => {
  fetchData(filters);
}, [filters]);`,
    hint: "Memoize objects in dependency arrays.",
    bugLine: 4,
    explanation: "New object every render causes effect to re-run."
  },
  {
    id: 93,
    title: "Class Component setState Callback",
    difficulty: "Medium",
    language: "React",
    description: "Accessing state immediately after setState.",
    buggyCode: `this.setState({ count: this.state.count + 1 });
console.log(this.state.count); // old value`,
    fixedCode: `this.setState({ count: this.state.count + 1 }, () => {
  console.log(this.state.count); // new value
});`,
    hint: "Use callback for post-state-update logic.",
    bugLine: 2,
    explanation: "setState is asynchronous in class components."
  },
  {
    id: 94,
    title: "Missing React Router Link",
    difficulty: "Medium",
    language: "React",
    description: "Using <a> tag instead of <Link>.",
    buggyCode: `<a href="/about">About</a>`,
    fixedCode: `<Link to="/about">About</Link>`,
    hint: "Use Link for client-side routing.",
    bugLine: 1,
    explanation: "<a> tags cause full page reloads."
  },
  {
    id: 95,
    title: "Component Caching with useMemo",
    difficulty: "Medium",
    language: "React",
    description: "Creating components inside useMemo.",
    buggyCode: `const MemoizedComponent = useMemo(() => () => {
  return <ExpensiveComponent />;
}, []);`,
    fixedCode: `const MemoizedComponent = React.memo(ExpensiveComponent);`,
    hint: "Use React.memo, not useMemo, for component memoization.",
    bugLine: 1,
    explanation: "React.memo is designed for component memoization."
  },
  {
    id: 96,
    title: "Event Delegation Missing",
    difficulty: "Medium",
    language: "React",
    description: "Adding event listeners to many elements.",
    buggyCode: `{items.map(item => (
  <div onClick={() => handleClick(item.id)}>
    {item.name}
  </div>
))}`,
    fixedCode: `<div onClick={handleItemClick}>
  {items.map(item => (
    <div data-id={item.id} key={item.id}>
      {item.name}
    </div>
  ))}
</div>`,
    hint: "Use event delegation for many elements.",
    bugLine: 2,
    explanation: "Creating many event handlers is inefficient."
  },
  {
    id: 97,
    title: "Missing Error State",
    difficulty: "Medium",
    language: "React",
    description: "No error handling for API calls.",
    buggyCode: `const [data, setData] = useState(null);

useEffect(() => {
  fetchData().then(setData);
}, []);`,
    fixedCode: `const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  fetchData()
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);`,
    hint: "Handle loading and error states.",
    bugLine: 4,
    explanation: "Missing error handling causes crashes."
  },
  {
    id: 98,
    title: "State Initialization from Props",
    difficulty: "Medium",
    language: "React",
    description: "Deriving state from props without update.",
    buggyCode: `function UserProfile({ initialUser }) {
  const [user, setUser] = useState(initialUser);
  // user never updates when initialUser changes
}`,
    fixedCode: `function UserProfile({ user: propUser }) {
  const [user, setUser] = useState(propUser);
  
  useEffect(() => {
    setUser(propUser);
  }, [propUser]);
}`,
    hint: "Use useEffect to sync state with props.",
    bugLine: 2,
    explanation: "State initialized from props doesn't update when props change."
  },
  {
    id: 99,
    title: "Missing Portals for Modals",
    difficulty: "Medium",
    language: "React",
    description: "Modal rendered inside parent component.",
    buggyCode: `function Parent() {
  return (
    <div className="parent">
      <Modal />
    </div>
  );
}`,
    fixedCode: `function Parent() {
  return (
    <div className="parent">
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById('modal-root')
      )}
    </div>
  );
}`,
    hint: "Use portals for modals, tooltips, dropdowns.",
    bugLine: 4,
    explanation: "Modals inside parents inherit CSS issues (overflow, z-index)."
  },
  {
    id: 100,
    title: "Context Default Value Misuse",
    difficulty: "Medium",
    language: "React",
    description: "Using context without Provider gives default value.",
    buggyCode: `const ThemeContext = React.createContext('light');

function Component() {
  const theme = useContext(ThemeContext);
  // Always 'light', even with Provider
}`,
    fixedCode: `const ThemeContext = React.createContext();

function Component() {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error('Component must be used within ThemeProvider');
  }
}`,
    hint: "Consider throwing error for missing Provider.",
    bugLine: 1,
    explanation: "Default value used when no Provider exists."

  // ========== HARD (101-150) ==========
  },
  {
    id: 101,
    title: "Key Prop Misuse",
    difficulty: "Hard",
    language: "React",
    description: "Using index as key can cause UI bugs.",
    buggyCode: `{items.map((item, index) => (
  <Todo key={index} item={item} />
))}`,
    fixedCode: `{items.map((item) => (
  <Todo key={item.id} item={item} />
))}`,
    hint: "Prefer stable, unique keys.",
    bugLine: 1,
    explanation: "Index keys can break when list is reordered."
  },
  {
    id: 102,
    title: "Controlled vs Uncontrolled Input",
    difficulty: "Hard",
    language: "React",
    description: "Input switches from uncontrolled to controlled.",
    buggyCode: `const [value, setValue] = useState();

<input value={value} onChange={e => setValue(e.target.value)} />`,
    fixedCode: `const [value, setValue] = useState("");

<input value={value} onChange={e => setValue(e.target.value)} />`,
    hint: "Initialize controlled inputs with a default value.",
    bugLine: 1,
    explanation: "Initial undefined value makes input uncontrolled."
  },
  {
    id: 103,
    title: "useEffect Cleanup Missing",
    difficulty: "Hard",
    language: "React",
    description: "Event listener not removed on unmount.",
    buggyCode: `useEffect(() => {
  window.addEventListener("resize", onResize);
}, []);`,
    fixedCode: `useEffect(() => {
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);`,
    hint: "Always cleanup external subscriptions.",
    bugLine: 1,
    explanation: "Missing cleanup causes memory leaks and duplicate handlers."
  },
  {
    id: 104,
    title: "Props Drilling Instead of Context",
    difficulty: "Hard",
    language: "React",
    description: "Too many intermediate components just passing props.",
    buggyCode: `// App -> A -> B -> C -> D
// D finally uses 'user'`,
    fixedCode: `// Use React.createContext and Context.Provider
// to avoid deeply nested prop drilling.`,
    hint: "Consider React Context for deeply shared props.",
    bugLine: 1,
    explanation: "Not a syntax error, but a design smell causing brittle code."
  },
  {
    id: 105,
    title: "Missing Default Props / Fallback",
    difficulty: "Hard",
    language: "React",
    description: "Component assumes prop always exists.",
    buggyCode: `function UserCard({ user }) {
  return <div>{user.name}</div>;
}`,
    fixedCode: `function UserCard({ user }) {
  if (!user) return <div>No user</div>;
  return <div>{user.name}</div>;
}`,
    hint: "Always handle missing or null props.",
    bugLine: 1,
    explanation: "Accessing user.name when user is undefined causes errors."
  },
  {
    id: 106,
    title: "Race Condition in useEffect",
    difficulty: "Hard",
    language: "React",
    description: "API response arrives out of order.",
    buggyCode: `useEffect(() => {
  fetchData(id).then(setData);
}, [id]);`,
    fixedCode: `useEffect(() => {
  let isActive = true;
  fetchData(id).then(result => {
    if (isActive) {
      setData(result);
    }
  });
  return () => {
    isActive = false;
  };
}, [id]);`,
    hint: "Cleanup function can cancel pending requests.",
    bugLine: 2,
    explanation: "When id changes quickly, older requests can overwrite newer ones."
  },
  {
    id: 107,
    title: "Memory Leak with setInterval",
    difficulty: "Hard",
    language: "React",
    description: "Interval not cleared on unmount.",
    buggyCode: `useEffect(() => {
  setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
}, []);`,
    fixedCode: `useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []);`,
    hint: "Always cleanup intervals and timeouts.",
    bugLine: 2,
    explanation: "Interval continues running after component unmounts."
  },
  {
    id: 108,
    title: "Context Performance Issue",
    difficulty: "Hard",
    language: "React",
    description: "All consumers re-render when context changes.",
    buggyCode: `const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}`,
    fixedCode: `const ThemeContext = React.createContext();
const SetThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <Child />
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}`,
    hint: "Split context to prevent unnecessary re-renders.",
    bugLine: 6,
    explanation: "All children re-render when any part of context value changes."
  },
  {
    id: 109,
    title: "Circular Dependency in useEffect",
    difficulty: "Hard",
    language: "React",
    description: "Effect creates circular update loop.",
    buggyCode: `const [user, setUser] = useState(null);
const [profile, setProfile] = useState(null);

useEffect(() => {
  if (user) {
    fetchProfile(user.id).then(setProfile);
  }
}, [user]);

useEffect(() => {
  if (profile) {
    updateUser(profile).then(setUser);
  }
}, [profile]);`,
    fixedCode: `const [user, setUser] = useState(null);
const [profile, setProfile] = useState(null);

useEffect(() => {
  if (user && !profile) {
    fetchProfile(user.id).then(setProfile);
  }
}, [user, profile]);

// Or combine logic to prevent circular updates`,
    hint: "Avoid effects that trigger each other.",
    bugLine: 12,
    explanation: "Effects create infinite loop by triggering each other."
  },
  {
    id: 110,
    title: "useReducer State Shape Change",
    difficulty: "Hard",
    language: "React",
    description: "Action type doesn't match reducer case.",
    buggyCode: `const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Dispatching wrong action
dispatch({ type: 'ADD', payload: 5 });`,
    fixedCode: `const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
};

// Correct action
dispatch({ type: 'ADD', payload: 5 });`,
    hint: "Ensure action types match reducer cases.",
    bugLine: 10,
    explanation: "Action type not handled in reducer."
  },
  {
    id: 111,
    title: "Suspense Boundary Missing",
    difficulty: "Hard",
    language: "React",
    description: "Suspense used without boundary.",
    buggyCode: `const LazyComponent = React.lazy(() => import('./Component'));

function App() {
  return <LazyComponent />;
}`,
    fixedCode: `const LazyComponent = React.lazy(() => import('./Component'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}`,
    hint: "React.lazy components need Suspense wrapper.",
    bugLine: 4,
    explanation: "Lazy components must be wrapped in Suspense with fallback."
  },
  {
    id: 112,
    title: "Portals Missing Root Element",
    difficulty: "Hard",
    language: "React",
    description: "Portal target doesn't exist in DOM.",
    buggyCode: `function Modal() {
  return ReactDOM.createPortal(
    <div>Modal Content</div>,
    document.getElementById('modal-root')
  );
}`,
    fixedCode: `function Modal() {
  const modalRoot = document.getElementById('modal-root');
  
  if (!modalRoot) {
    console.error('Modal root not found');
    return null;
  }
  
  return ReactDOM.createPortal(
    <div>Modal Content</div>,
    modalRoot
  );
}`,
    hint: "Always check if portal target exists.",
    bugLine: 3,
    explanation: "Portal fails silently if target element doesn't exist."
  },
  {
    id: 113,
    title: "Error Boundary Missing",
    difficulty: "Hard",
    language: "React",
    description: "Component errors crash entire app.",
    buggyCode: `function App() {
  return (
    <div>
      <BuggyComponent />
    </div>
  );
}`,
    fixedCode: `class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}`,
    hint: "Wrap error-prone components with Error Boundaries.",
    bugLine: 4,
    explanation: "Errors in BuggyComponent crash the entire application."
  },
  {
    id: 114,
    title: "StrictMode Double Invocation",
    difficulty: "Hard",
    language: "React",
    description: "Effects run twice in development.",
    buggyCode: `useEffect(() => {
  console.log('API call');
  fetchData();
}, []);`,
    fixedCode: `useEffect(() => {
  let ignore = false;
  
  console.log('API call');
  fetchData().then(data => {
    if (!ignore) {
      setData(data);
    }
  });
  
  return () => {
    ignore = true;
  };
}, []);`,
    hint: "React.StrictMode double-invokes effects in dev.",
    bugLine: 2,
    explanation: "Effects run twice in development with StrictMode."
  },
  {
    id: 115,
    title: "Concurrent Features Race",
    difficulty: "Hard",
    language: "React",
    description: "State updates during render phase.",
    buggyCode: `function Component() {
  const [count, setCount] = useState(0);
  
  if (count < 10) {
    setCount(count + 1); // Side effect during render
  }
  
  return <div>{count}</div>;
}`,
    fixedCode: `function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]);
  
  return <div>{count}</div>;
}`,
    hint: "Never call state setters during render.",
    bugLine: 5,
    explanation: "State updates during render cause infinite loops and break concurrent features."
  },
  {
    id: 116,
    title: "useTransition Infinite Loop",
    difficulty: "Hard",
    language: "React",
    description: "useTransition causing infinite re-renders.",
    buggyCode: `const [isPending, startTransition] = useTransition();

const handleClick = () => {
  startTransition(() => {
    setState(newState); // Also triggers re-render
  });
};`,
    fixedCode: `const [isPending, startTransition] = useTransition();

const handleClick = () => {
  startTransition(() => {
    // Ensure this doesn't trigger the same transition
    setState(prev => newStateBasedOnPrev(prev));
  });
};`,
    hint: "Avoid triggering same transition inside transition.",
    bugLine: 5,
    explanation: "Transition that triggers itself causes infinite loop."
  },
  {
    id: 117,
    title: "Suspense Waterfall",
    difficulty: "Hard",
    language: "React",
    description: "Nested Suspense causing sequential loading.",
    buggyCode: `<Suspense fallback={<div>Loading page...</div>}>
  <Page>
    <Suspense fallback={<div>Loading sidebar...</div>}>
      <Sidebar />
    </Suspense>
    <Suspense fallback={<div>Loading content...</div>}>
      <Content />
    </Suspense>
  </Page>
</Suspense>`,
    fixedCode: `// Use React.lazy with preloading
// Or fetch data in parallel before rendering`,
    hint: "Fetch data in parallel, not sequentially.",
    bugLine: 1,
    explanation: "Nested Suspense causes sequential loading (waterfall)."
  },
  {
    id: 118,
    title: "useDeferredValue Race Condition",
    difficulty: "Hard",
    language: "React",
    description: "Deferred value out of sync with source.",
    buggyCode: `const [text, setText] = useState('');
const deferredText = useDeferredValue(text);

// Using deferredText for rendering
// but immediate text for effects`,
    fixedCode: `const [text, setText] = useState('');
const deferredText = useDeferredValue(text);

// Use deferredText consistently
useEffect(() => {
  // Use deferredText, not text
  search(deferredText);
}, [deferredText]);`,
    hint: "Use deferred value consistently.",
    bugLine: 4,
    explanation: "Mixing deferred and immediate values causes race conditions."
  },
  {
    id: 119,
    title: "React Server Components Hydration",
    difficulty: "Hard",
    language: "React",
    description: "Client component rendered as server component.",
    buggyCode: `// Server component using client features
'use client';

export default function Component() {
  const [state, setState] = useState(); // Error on server
}`,
    fixedCode: `// Separate server and client components
// Server component
export default async function ServerComponent() {
  const data = await fetchData();
  return <ClientComponent data={data} />;
}

// Client component  
'use client';
export default function ClientComponent({ data }) {
  const [state, setState] = useState();
  return <div>{data}</div>;
}`,
    hint: "Split server and client components properly.",
    bugLine: 4,
    explanation: "Client hooks can't run on server."
  },
  {
    id: 120,
    title: "useSyncExternalStore Missing",
    difficulty: "Hard",
    language: "React",
    description: "Manual subscription causing tearing.",
    buggyCode: `const [state, setState] = useState(externalStore.getState());

useEffect(() => {
  const unsubscribe = externalStore.subscribe(() => {
    setState(externalStore.getState());
  });
  return unsubscribe;
}, []);`,
    fixedCode: `import { useSyncExternalStore } from 'react';

const state = useSyncExternalStore(
  externalStore.subscribe,
  externalStore.getState
);`,
    hint: "Use useSyncExternalStore for external state.",
    bugLine: 1,
    explanation: "Manual subscription can cause tearing in concurrent React."
  },
  {
    id: 121,
    title: "React.memo with useCallback Dependency",
    difficulty: "Hard",
    language: "React",
    description: "useCallback dependency causing memo失效.",
    buggyCode: `const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);
  
  return <Child onClick={handleClick} />;
};

const Child = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click</button>;
});`,
    fixedCode: `const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);
  
  return <Child onClick={handleClick} count={count} />;
};

const Child = React.memo(({ onClick, count }) => {
  return <button onClick={onClick}>Click {count}</button>;
});`,
    hint: "Either stabilize callback or accept re-renders.",
    bugLine: 10,
    explanation: "Callback changes when count changes, making memo useless."
  },
  {
    id: 122,
    title: "Suspense with Error Boundary Conflict",
    difficulty: "Hard",
    language: "React",
    description: "Error boundary catching suspense errors.",
    buggyCode: `<ErrorBoundary>
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>`,
    fixedCode: `<Suspense fallback={<div>Loading...</div>}>
  <ErrorBoundary>
    <LazyComponent />
  </ErrorBoundary>
</Suspense>`,
    hint: "Error boundary inside Suspense, not outside.",
    bugLine: 1,
    explanation: "Suspense throws promises, which error boundaries catch as errors."
  },
  {
    id: 123,
    title: "useId for SSR Hydration",
    difficulty: "Hard",
    language: "React",
    description: "Manual IDs causing hydration mismatch.",
    buggyCode: `let idCounter = 0;

function Component() {
  const id = \`id-\${++idCounter}\`;
  return <div id={id}>Content</div>;
}`,
    fixedCode: `import { useId } from 'react';

function Component() {
  const id = useId();
  return <div id={id}>Content</div>;
}`,
    hint: "Use useId for stable SSR/CSR IDs.",
    bugLine: 4,
    explanation: "Manual IDs differ between server and client, breaking hydration."
  },
  {
    id: 124,
    title: "Context Selector Pattern Missing",
    difficulty: "Hard",
    language: "React",
    description: "Consuming entire context object.",
    buggyCode: `const { user, theme, settings } = useContext(AppContext);`,
    fixedCode: `// Create selector hook
function useUser() {
  const { user } = useContext(AppContext);
  return user;
}

// Or use context selector library`,
    hint: "Use selectors to subscribe to specific context values.",
    bugLine: 1,
    explanation: "Consuming entire context causes re-renders for unrelated changes."
  },
  {
    id: 125,
    title: "Concurrent Rendering with setTimeout",
    difficulty: "Hard",
    language: "React",
    description: "setTimeout breaking time slicing.",
    buggyCode: `useEffect(() => {
  const timer = setTimeout(() => {
    setData(computeExpensiveData());
  }, 0);
  return () => clearTimeout(timer);
}, []);`,
    fixedCode: `// Use useTransition for expensive updates
const [isPending, startTransition] = useTransition();

const handleClick = () => {
  startTransition(() => {
    setData(computeExpensiveData());
  });
};`,
    hint: "Use startTransition for expensive renders.",
    bugLine: 3,
    explanation: "setTimeout defers work but doesn't cooperate with React scheduler."
  },
  {
    id: 126,
    title: "React.memo with Children Prop",
    difficulty: "Hard",
    language: "React",
    description: "React.memo not working with children.",
    buggyCode: `const MemoizedComponent = React.memo(Component);

<MemoizedComponent>
  <Child /> {/* Children cause re-render */}
</MemoizedComponent>`,
    fixedCode: `const MemoizedComponent = React.memo(Component, (prev, next) => {
  // Compare children if needed
  return prev.children === next.children && shallowEqual(prev, next);
});`,
    hint: "Children are always new props.",
    bugLine: 1,
    explanation: "Children prop changes on every render, making memo ineffective."
  },
  {
    id: 127,
    title: "Suspense for Data Fetching Cache",
    difficulty: "Hard",
    language: "React",
    description: "Missing cache for Suspense data.",
    buggyCode: `function fetchData(id) {
  throw fetch(\`/api/data/\${id}\`).then(res => res.json());
}

function Component({ id }) {
  const data = fetchData(id);
  return <div>{data.value}</div>;
}`,
    fixedCode: `const cache = new Map();

function fetchData(id) {
  if (!cache.has(id)) {
    cache.set(id, fetch(\`/api/data/\${id}\`).then(res => res.json()));
  }
  const promise = cache.get(id);
  throw promise;
}`,
    hint: "Cache promises for Suspense.",
    bugLine: 2,
    explanation: "Without cache, same data fetched multiple times."
  },
  {
    id: 128,
    title: "useReducer vs useState Complexity",
    difficulty: "Hard",
    language: "React",
    description: "Complex state should use useReducer.",
    buggyCode: `const [state, setState] = useState({
  items: [],
  loading: false,
  error: null,
  page: 1,
  total: 0
});

// Many setState calls with partial updates`,
    fixedCode: `const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  total: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, items: action.items };
    // ... other cases
  }
}

const [state, dispatch] = useReducer(reducer, initialState);`,
    hint: "Use reducer for complex state logic.",
    bugLine: 1,
    explanation: "Multiple related state updates are error-prone with useState."
  },
  {
    id: 129,
    title: "Zustand/Redux Middleware Missing",
    difficulty: "Hard",
    language: "React",
    description: "State library without middleware for side effects.",
    buggyCode: `const useStore = create((set) => ({
  data: null,
  fetchData: async () => {
    const data = await api.getData();
    set({ data }); // Side effect in setter
  }
}));`,
    fixedCode: `const useStore = create((set, get) => ({
  data: null,
  fetchData: async () => {
    const response = await api.getData();
    set({ data: response });
  }
}));

// Or use middleware for side effects`,
    hint: "Handle async logic properly in state management.",
    bugLine: 4,
    explanation: "Side effects in state setters can cause issues."
  },
  {
    id: 130,
    title: "React Query Missing Query Keys",
    difficulty: "Hard",
    language: "React",
    description: "React Query without proper invalidation.",
    buggyCode: `const { data } = useQuery('data', fetchData);`,
    fixedCode: `const { data } = useQuery(['data', id], () => fetchData(id));

// Invalidate with exact key
queryClient.invalidateQueries(['data', id]);`,
    hint: "Use array query keys for precise invalidation.",
    bugLine: 1,
    explanation: "String keys make precise cache invalidation difficult."
  },
  {
    id: 131,
    title: "Form Library Re-renders",
    difficulty: "Hard",
    language: "React",
    description: "Form library causing unnecessary re-renders.",
    buggyCode: `const { register, handleSubmit } = useForm();

<input {...register('name')} />
<input {...register('email')} />`,
    fixedCode: `// Use uncontrolled or optimized form library
// Or split form into smaller components`,
    hint: "Optimize form rendering performance.",
    bugLine: 3,
    explanation: "Some form libraries re-render entire form on every change."
  },
  {
    id: 132,
    title: "Virtual List Missing",
    difficulty: "Hard",
    language: "React",
    description: "Rendering thousands of items directly.",
    buggyCode: `{items.map(item => (
  <ListItem key={item.id} item={item} />
))}`,
    fixedCode: `import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={400}
  width={300}
  itemCount={items.length}
  itemSize={50}
>
  {({ index, style }) => (
    <div style={style}>
      <ListItem item={items[index]} />
    </div>
  )}
</FixedSizeList>`,
    hint: "Use virtualization for large lists.",
    bugLine: 1,
    explanation: "Rendering thousands of DOM nodes kills performance."
  },
  {
    id: 133,
    title: "CSS-in-JS Runtime Overhead",
    difficulty: "Hard",
    language: "React",
    description: "Runtime CSS causing performance issues.",
    buggyCode: `const StyledDiv = styled.div\`
  color: \${props => props.color};
  padding: 10px;
\`;`,
    fixedCode: `// Use compile-time CSS extraction
// Or CSS modules with static classes`,
    hint: "Consider compile-time CSS for production.",
    bugLine: 1,
    explanation: "Runtime CSS calculation adds overhead."
  },
  {
    id: 134,
    title: "Code Splitting Too Granular",
    difficulty: "Hard",
    language: "React",
    description: "Too many small chunks hurting performance.",
    buggyCode: `const Component1 = React.lazy(() => import('./Component1'));
const Component2 = React.lazy(() => import('./Component2'));
// Many small lazy components`,
    fixedCode: `// Group related components
const Feature = React.lazy(() => import('./Feature'));`,
    hint: "Balance code splitting granularity.",
    bugLine: 1,
    explanation: "Too many small chunks increase network requests."
  },
  {
    id: 135,
    title: "Missing Web Workers",
    difficulty: "Hard",
    language: "React",
    description: "Blocking main thread with heavy computation.",
    buggyCode: `function Component() {
  const result = heavyComputation(); // Blocks UI
  return <div>{result}</div>;
}`,
    fixedCode: `// Use web worker
const worker = new Worker('worker.js');

function Component() {
  const [result, setResult] = useState();
  
  useEffect(() => {
    worker.postMessage('compute');
    worker.onmessage = (e) => setResult(e.data);
  }, []);
  
  return <div>{result}</div>;
}`,
    hint: "Offload heavy work to web workers.",
    bugLine: 2,
    explanation: "Blocking main thread freezes UI."
  },
  {
    id: 136,
    title: "React Native WebView Communication",
    difficulty: "Hard",
    language: "React",
    description: "WebView postMessage issues.",
    buggyCode: `<WebView
  source={{ uri: 'https://example.com' }}
  onMessage={(event) => {
    console.log(event.nativeEvent.data);
  }}
/>`,
    fixedCode: `<WebView
  source={{ uri: 'https://example.com' }}
  injectedJavaScript=\`
    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  \`
  onMessage={(event) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log(data);
  }}
/>`,
    hint: "Stringify data for WebView communication.",
    bugLine: 5,
    explanation: "postMessage requires string data."
  },
  {
    id: 137,
    title: "Missing requestIdleCallback",
    difficulty: "Hard",
    language: "React",
    description: "Non-urgent work blocking main thread.",
    buggyCode: `useEffect(() => {
  // Non-urgent analytics
  sendAnalytics(data);
}, [data]);`,
    fixedCode: `useEffect(() => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      sendAnalytics(data);
    });
  } else {
    setTimeout(() => sendAnalytics(data), 0);
  }
}, [data]);`,
    hint: "Use requestIdleCallback for non-urgent work.",
    bugLine: 3,
    explanation: "Non-urgent work should not block user interactions."
  },
  {
    id: 138,
    title: "React Server Components Streaming",
    difficulty: "Hard",
    language: "React",
    description: "Blocking SSR with slow data.",
    buggyCode: `async function ServerComponent() {
  const data = await fetchSlowData(); // Blocks render
  return <div>{data}</div>;
}`,
    fixedCode: `async function ServerComponent() {
  const data = await fetchSlowData();
  
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <DataComponent dataPromise={data} />
    </Suspense>
  );
}

async function DataComponent({ dataPromise }) {
  const data = await dataPromise;
  return <div>{data}</div>;
}`,
    hint: "Use Suspense with streaming SSR.",
    bugLine: 2,
    explanation: "Slow data fetch blocks entire page render."
  },
  {
    id: 139,
    title: "Missing IntersectionObserver Cleanup",
    difficulty: "Hard",
    language: "React",
    description: "Observer not disconnected properly.",
    buggyCode: `useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    setVisible(entries[0].isIntersecting);
  });
  
  if (ref.current) {
    observer.observe(ref.current);
  }
}, []);`,
    fixedCode: `useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    setVisible(entries[0].isIntersecting);
  });
  
  if (ref.current) {
    observer.observe(ref.current);
  }
  
  return () => {
    observer.disconnect();
  };
}, []);`,
    hint: "Always disconnect observers.",
    bugLine: 1,
    explanation: "Observer keeps observing after component unmounts."
  },
  {
    id: 140,
    title: "React DevTools Production Build",
    difficulty: "Hard",
    language: "React",
    description: "DevTools in production bundle.",
    buggyCode: `// No special handling for dev/prod`,
    fixedCode: `if (process.env.NODE_ENV === 'development') {
  // Dev-only code
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}`,
    hint: "Conditional imports for dev tools.",
    bugLine: 1,
    explanation: "Dev tools increase bundle size and may expose debug info."
  },
  {
    id: 141,
    title: "Missing React Refresh",
    difficulty: "Hard",
    language: "React",
    description: "Fast Refresh not working.",
    buggyCode: `// Default webpack config`,
    fixedCode: `// Enable React Refresh in dev config
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // ... other config
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
};`,
    hint: "Configure Fast Refresh for better DX.",
    bugLine: 1,
    explanation: "Without Fast Refresh, changes require full page reload."
  },
  {
    id: 142,
    title: "Tree Shaking Not Working",
    difficulty: "Hard",
    language: "React",
    description: "Bundle includes unused code.",
    buggyCode: `import { Button, Modal, Card } from 'antd';`,
    fixedCode: `import Button from 'antd/es/button';
import Modal from 'antd/es/modal';
// Import specific components`,
    hint: "Use specific imports for better tree shaking.",
    bugLine: 1,
    explanation: "Some bundlers can't tree shake from barrel exports."
  },
  {
    id: 143,
    title: "Missing Error Tracking",
    difficulty: "Hard",
    language: "React",
    description: "No error monitoring in production.",
    buggyCode: `// No error tracking`,
    fixedCode: `import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-dsn",
  integrations: [new Sentry.BrowserTracing()],
});

function App() {
  return (
    <Sentry.ErrorBoundary fallback={<div>Error</div>}>
      <YourApp />
    </Sentry.ErrorBoundary>
  );
}`,
    hint: "Add error tracking for production.",
    bugLine: 1,
    explanation: "Without error tracking, bugs go unnoticed."
  },
  {
    id: 144,
    title: "Performance Monitoring Missing",
    difficulty: "Hard",
    language: "React",
    description: "No performance metrics.",
    buggyCode: `// No performance monitoring`,
    fixedCode: `// Use React Profiler
import { Profiler } from 'react';

function onRender(id, phase, actualDuration) {
  console.log(\`\${id} took \${actualDuration}ms\`);
}

<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>`,
    hint: "Add performance monitoring.",
    bugLine: 1,
    explanation: "Without metrics, can't identify performance bottlenecks."
  },
  {
    id: 145,
    title: "Missing Bundle Analysis",
    difficulty: "Hard",
    language: "React",
    description: "Large bundle size unknown.",
    buggyCode: `// No bundle analysis`,
    fixedCode: `// Add bundle analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};`,
    hint: "Analyze bundle size regularly.",
    bugLine: 1,
    explanation: "Large bundles hurt performance."
  },
  {
    id: 146,
    title: "SSR Hydration Mismatch",
    difficulty: "Hard",
    language: "React",
    description: "Server and client render different HTML.",
    buggyCode: `function Component() {
  // Uses window on client
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;
  return <div>{width}</div>;
}`,
    fixedCode: `function Component() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return <div>{width}</div>;
}`,
    hint: "Ensure SSR and CSR produce same HTML.",
    bugLine: 3,
    explanation: "Hydration fails if HTML differs between server and client."
  },
  {
    id: 147,
    title: "Missing PWA Support",
    difficulty: "Hard",
    language: "React",
    description: "No offline capability.",
    buggyCode: `// No service worker`,
    fixedCode: `// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}`,
    hint: "Add PWA features for better UX.",
    bugLine: 1,
    explanation: "Without PWA, app doesn't work offline."
  },
  {
    id: 148,
    title: "Accessibility Missing",
    difficulty: "Hard",
    language: "React",
    description: "No ARIA attributes or keyboard support.",
    buggyCode: `<div onClick={handleClick}>Click me</div>`,
    fixedCode: `<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
>
  Click me
</button>`,
    hint: "Add accessibility features.",
    bugLine: 1,
    explanation: "Inaccessible apps exclude users."
  },
  {
    id: 149,
    title: "Missing i18n Support",
    difficulty: "Hard",
    language: "React",
    description: "Hardcoded strings.",
    buggyCode: `<h1>Welcome to our app</h1>`,
    fixedCode: `import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
}`,
    hint: "Add internationalization.",
    bugLine: 1,
    explanation: "Hardcoded strings prevent localization."
  },
  {
    id: 150,
    title: "Security Vulnerabilities",
    difficulty: "Hard",
    language: "React",
    description: "XSS through props or state.",
    buggyCode: `<div>{userInput}</div>`,
    fixedCode: `<div>{escapeHtml(userInput)}</div>`,
    hint: "Sanitize user input.",
    bugLine: 1,
    explanation: "User input can contain malicious scripts."
  }
];