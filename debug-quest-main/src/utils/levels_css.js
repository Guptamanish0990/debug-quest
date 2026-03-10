export const LEVELS_CSS = [
  {
    id: 1,
    title: "Missing Semicolon",
    difficulty: "Easy",
    language: "CSS",
    description: "A missing semicolon breaks the stylesheet.",
    buggyCode: `h1 {
  color: red
  font-size: 24px;
}`,
    fixedCode: `h1 {
  color: red;
  font-size: 24px;
}`,
    hint: "CSS rules must end with semicolons.",
    bugLine: 2,
    explanation: "Missing semicolon after color property."
  },

  {
    id: 2,
    title: "Wrong Property Name",
    difficulty: "Easy",
    language: "CSS",
    description: "The 'background-colr' property is invalid.",
    buggyCode: `.box {
  background-colr: blue;
}`,
    fixedCode: `.box {
  background-color: blue;
}`,
    hint: "Check for property typos.",
    bugLine: 2,
    explanation: "Correct property is background-color."
  },

  {
    id: 3,
    title: "Class Selector Missing Dot",
    difficulty: "Easy",
    language: "CSS",
    description: "Selector is missing a dot for class.",
    buggyCode: `button {
  padding: 10px;
}`,
    fixedCode: `.button {
  padding: 10px;
}`,
    hint: "Classes begin with a dot.",
    bugLine: 1,
    explanation: "button targets <button> tag, not .button class."
  },

  {
    id: 4,
    title: "Zero Without Unit",
    difficulty: "Medium",
    language: "CSS",
    description: "CSS requires units except for zero.",
    buggyCode: `.box {
  margin: 10;
}`,
    fixedCode: `.box {
  margin: 10px;
}`,
    hint: "Check CSS unit rules.",
    bugLine: 2,
    explanation: "Margin requires px, em, etc."
  },

  {
    id: 5,
    title: "ID Selector Wrong Syntax",
    difficulty: "Medium",
    language: "CSS",
    description: "IDs must use # not .",
    buggyCode: `.header {
  color: white;
}`,
    fixedCode: `#header {
  color: white;
}`,
    hint: "Use # for id selectors.",
    bugLine: 1,
    explanation: "Using .header selects a class not an id."
  },

  {
    id: 6,
    title: "Invalid Display Property",
    difficulty: "Medium",
    language: "CSS",
    description: "'display: block-inline' doesn't exist.",
    buggyCode: `.nav {
  display: block-inline;
}`,
    fixedCode: `.nav {
  display: inline-block;
}`,
    hint: "Use valid display values.",
    bugLine: 2,
    explanation: "Correct option is inline-block."
  },

  {
    id: 7,
    title: "Flexbox Misuse",
    difficulty: "Hard",
    language: "CSS",
    description: "'justify-content' doesn't work without display:flex.",
    buggyCode: `.row {
  justify-content: center;
}`,
    fixedCode: `.row {
  display: flex;
  justify-content: center;
}`,
    hint: "Flex properties require display:flex.",
    bugLine: 2,
    explanation: "Missing display: flex."
  },

  {
    id: 8,
    title: "CSS Variable Undefined",
    difficulty: "Hard",
    language: "CSS",
    description: "Using a custom property that doesn't exist.",
    buggyCode: `.title {
  color: var(--brand-color);
}`,
    fixedCode: `:root {
  --brand-color: #ff0055;
}

.title {
  color: var(--brand-color);
}`,
    hint: "CSS variables must be defined in :root.",
    bugLine: 2,
    explanation: "Variable was not defined."
  },

  {
    id: 9,
    title: "Wrong Units",
    difficulty: "Hard",
    language: "CSS",
    description: "Using 'pxs' instead of 'px'.",
    buggyCode: `.box {
  width: 200pxs;
}`,
    fixedCode: `.box {
  width: 200px;
}`,
    hint: "Check units for typos.",
    bugLine: 2,
    explanation: "pxs is invalid."
  },

  {
    id: 10,
    title: "Missing Curly Brace",
    difficulty: "Hard",
    language: "CSS",
    description: "Unclosed selector breaks all styles.",
    buggyCode: `.card {
  padding: 10px;
  margin: 20px;
`,
    fixedCode: `.card {
  padding: 10px;
  margin: 20px;
}`,
    hint: "Every { must have a matching }.",
    bugLine: 1,
    explanation: "Missing closing brace."
  },
  {
  id: 11,
  title: "Hex Color Missing #",
  difficulty: "Easy",
  language: "CSS",
  description: "Hex colors must start with #.",
  buggyCode: `.text { color: ff0000; }`,
  fixedCode: `.text { color: #ff0000; }`,
  hint: "Hex values always need a leading #.",
  bugLine: 1,
  explanation: "ff0000 without # is invalid."
},

{
  id: 12,
  title: "Extra Colon in Property",
  difficulty: "Easy",
  language: "CSS",
  description: "A property has two colons instead of one.",
  buggyCode: `.box { width:: 200px; }`,
  fixedCode: `.box { width: 200px; }`,
  hint: "Only one colon is allowed.",
  bugLine: 1,
  explanation: "width:: breaks CSS parsing."
},

{
  id: 13,
  title: "Incorrect Font Size Syntax",
  difficulty: "Easy",
  language: "CSS",
  description: "Missing hyphen in font-size.",
  buggyCode: `.title { fontsize: 18px; }`,
  fixedCode: `.title { font-size: 18px; }`,
  hint: "Property names must be exact.",
  bugLine: 1,
  explanation: "fontsize is not a valid CSS property."
},

{
  id: 14,
  title: "Using an Unknown Color Name",
  difficulty: "Easy",
  language: "CSS",
  description: "CSS uses predefined color keywords.",
  buggyCode: `.tag { color: lightblack; }`,
  fixedCode: `.tag { color: black; }`,
  hint: "lightblack is not recognized.",
  bugLine: 1,
  explanation: "Only valid CSS color keywords work."
},

{
  id: 15,
  title: "Border Width Without Style",
  difficulty: "Easy",
  language: "CSS",
  description: "Border must include style.",
  buggyCode: `.card { border: 2px blue; }`,
  fixedCode: `.card { border: 2px solid blue; }`,
  hint: "Use solid/dashed/dotted etc.",
  bugLine: 1,
  explanation: "Border missing style attribute."
},

{
  id: 16,
  title: "Text Align Misspelled",
  difficulty: "Easy",
  language: "CSS",
  description: "Incorrect spelling of text-align.",
  buggyCode: `.content { text-algin: center; }`,
  fixedCode: `.content { text-align: center; }`,
  hint: "Check common property spellings.",
  bugLine: 1,
  explanation: "text-algin isn't valid."
},

{
  id: 17,
  title: "List Style Missing Hyphen",
  difficulty: "Easy",
  language: "CSS",
  description: "liststyle-type is invalid.",
  buggyCode: `.menu { liststyle-type: none; }`,
  fixedCode: `.menu { list-style-type: none; }`,
  hint: "Some properties use hyphens.",
  bugLine: 1,
  explanation: "CSS property name incorrect."
},

{
  id: 18,
  title: "Invalid Cursor Value",
  difficulty: "Easy",
  language: "CSS",
  description: "Cursor value not recognized.",
  buggyCode: `.btn { cursor: pointerer; }`,
  fixedCode: `.btn { cursor: pointer; }`,
  hint: "Use valid cursor values.",
  bugLine: 1,
  explanation: "pointerer is not a valid cursor."
},

{
  id: 19,
  title: "Missing Semicolon in Multi-Line Rule",
  difficulty: "Easy",
  language: "CSS",
  description: "A property is missing a semicolon.",
  buggyCode: `.box { width:100px height:100px; }`,
  fixedCode: `.box { width:100px; height:100px; }`,
  hint: "Each property must end with a semicolon.",
  bugLine: 1,
  explanation: "width rule missing semicolon."
},

{
  id: 20,
  title: "Padding Order Incorrect",
  difficulty: "Easy",
  language: "CSS",
  description: "Padding requires spacing between values.",
  buggyCode: `.item { padding:10px20px; }`,
  fixedCode: `.item { padding:10px 20px; }`,
  hint: "Padding syntax requires spaces.",
  bugLine: 1,
  explanation: "10px20px is not valid."
},

{
  id: 21,
  title: "Transition Missing Duration",
  difficulty: "Medium",
  language: "CSS",
  description: "Transition must define duration.",
  buggyCode: `.btn { transition: all; }`,
  fixedCode: `.btn { transition: all 0.3s; }`,
  hint: "At least one time value is required.",
  bugLine: 1,
  explanation: "transition: all is incomplete."
},

{
  id: 22,
  title: "Incorrect Grid Template Syntax",
  difficulty: "Medium",
  language: "CSS",
  description: "Grid columns must be spaced.",
  buggyCode: `.grid { grid-template-columns: 1fr2fr; }`,
  fixedCode: `.grid { grid-template-columns: 1fr 2fr; }`,
  hint: "Requires space between values.",
  bugLine: 1,
  explanation: "1fr2fr is invalid CSS."
},

{
  id: 23,
  title: "Misplaced Background Image",
  difficulty: "Medium",
  language: "CSS",
  description: "background-image must use url().",
  buggyCode: `.hero { background-image: hero.png; }`,
  fixedCode: `.hero { background-image: url(hero.png); }`,
  hint: "Images require url().",
  bugLine: 1,
  explanation: "background-image missing url()."
},

{
  id: 24,
  title: "Float Without Clear",
  difficulty: "Medium",
  language: "CSS",
  description: "Floated elements require clearing.",
  buggyCode: `.img { float:left; }`,
  fixedCode: `.img { float:left; } .clearfix { clear:both; }`,
  hint: "Floating requires clearing.",
  bugLine: 1,
  explanation: "Uncleared floats break layout."
},

{
  id: 25,
  title: "Invalid Animation Keyframes",
  difficulty: "Medium",
  language: "CSS",
  description: "@keyframes missing brackets.",
  buggyCode: `@keyframes fade { 0% opacity:0; 100% opacity:1; }`,
  fixedCode: `@keyframes fade { 0% { opacity:0; } 100% { opacity:1; } }`,
  hint: "Keyframe steps require braces.",
  bugLine: 1,
  explanation: "0% opacity: 0 is invalid syntax."
},

{
  id: 26,
  title: "Z-Index Requires Positioning",
  difficulty: "Medium",
  language: "CSS",
  description: "z-index only works on positioned elements.",
  buggyCode: `.modal { z-index: 100; }`,
  fixedCode: `.modal { position: relative; z-index: 100; }`,
  hint: "Add position property.",
  bugLine: 1,
  explanation: "z-index ignored without position."
},

{
  id: 27,
  title: "Transform Missing Parentheses",
  difficulty: "Medium",
  language: "CSS",
  description: "`scale` must include parentheses.",
  buggyCode: `.box { transform: scale; }`,
  fixedCode: `.box { transform: scale(1); }`,
  hint: "scale() requires a number.",
  bugLine: 1,
  explanation: "scale without parameter is invalid."
},

{
  id: 28,
  title: "Media Query Missing Braces",
  difficulty: "Medium",
  language: "CSS",
  description: "media query must enclose a block.",
  buggyCode: `@media(max-width:600px) .box { width:100%; }`,
  fixedCode: `@media (max-width:600px) { .box { width:100%; } }`,
  hint: "Media rules need {} after condition.",
  bugLine: 1,
  explanation: "Missing braces around media block."
},

{
  id: 29,
  title: "Using px With Line-Height",
  difficulty: "Medium",
  language: "CSS",
  description: "line-height should be unitless for scaling.",
  buggyCode: `.text { line-height: 24px; }`,
  fixedCode: `.text { line-height: 1.5; }`,
  hint: "Unitless values scale better.",
  bugLine: 1,
  explanation: "px line-height is less flexible."
},

{
  id: 30,
  title: "Invalid Flex Direction",
  difficulty: "Medium",
  language: "CSS",
  description: "flex-direction must match keyword list.",
  buggyCode: `.container { flex-direction: vertical; }`,
  fixedCode: `.container { flex-direction: column; }`,
  hint: "Use row/column.",
  bugLine: 1,
  explanation: "vertical isn't a flex direction."
},


{
  id: 31,
  title: "Specificity Issue Due to Overqualified Selectors",
  difficulty: "Hard",
  language: "CSS",
  description: "Using tag + class reduces flexibility.",
  buggyCode: `div.button { color: blue; }`,
  fixedCode: `.button { color: blue; }`,
  hint: "Avoid combining tag + class.",
  bugLine: 1,
  explanation: "Creates higher specificity than needed."
},

{
  id: 32,
  title: "Position Absolute Without Relative Parent",
  difficulty: "Hard",
  language: "CSS",
  description: "Absolute element needs a positioned parent.",
  buggyCode: `.badge { position:absolute; top:10px; left:10px; }`,
  fixedCode: `.wrapper { position:relative; } .badge { position:absolute; top:10px; left:10px; }`,
  hint: "Use relative on parent.",
  bugLine: 1,
  explanation: "Absolute defaults to body."
},

{
  id: 33,
  title: "Misused Important Rule",
  difficulty: "Hard",
  language: "CSS",
  description: "!important used incorrectly.",
  buggyCode: `.box { padding:10px !important important; }`,
  fixedCode: `.box { padding:10px !important; }`,
  hint: "Don't duplicate important.",
  bugLine: 1,
  explanation: "Syntax error after !important."
},

{
  id: 34,
  title: "Invalid Clip-Path Shape",
  difficulty: "Hard",
  language: "CSS",
  description: "Incorrect polygon syntax.",
  buggyCode: `.img { clip-path: polygon(50% 0, 100% 100, 0 100%); }`,
  fixedCode: `.img { clip-path: polygon(50% 0%, 100% 100%, 0% 100%); }`,
  hint: "Missing % signs in some coordinates.",
  bugLine: 1,
  explanation: "clip-path requires full coordinate pairs."
},

{
  id: 35,
  title: "Complex Selector Causing Cascade Issues",
  difficulty: "Hard",
  language: "CSS",
  description: "Too much nesting reduces clarity.",
  buggyCode: `body.home div.main ul li a span { color:red; }`,
  fixedCode: `.menu-link { color:red; }`,
  hint: "Use simpler selectors.",
  bugLine: 1,
  explanation: "Overly specific selectors cause bugs."
},

{
  id: 36,
  title: "Grid Area Name Not Defined",
  difficulty: "Hard",
  language: "CSS",
  description: "Template refers to undefined area.",
  buggyCode: `.layout { grid-template-areas: "header main footr"; }`,
  fixedCode: `.layout { grid-template-areas: "header main footer"; }`,
  hint: "Check spelling of area names.",
  bugLine: 1,
  explanation: "footr does not match defined 'footer'."
},

{
  id: 37,
  title: "Using vh Inside calc Improperly",
  difficulty: "Hard",
  language: "CSS",
  description: "calc requires spaces around operators.",
  buggyCode: `.box { height: calc(100vh-50px); }`,
  fixedCode: `.box { height: calc(100vh - 50px); }`,
  hint: "Operators inside calc() need spaces.",
  bugLine: 1,
  explanation: "calc(100vh-50px) is invalid syntax."
},

{
  id: 38,
  title: "Pseudo-Element Missing Content",
  difficulty: "Hard",
  language: "CSS",
  description: "Pseudo elements require content property.",
  buggyCode: `.tag::after { display:block; width:10px; height:10px; }`,
  fixedCode: `.tag::after { content:""; display:block; width:10px; height:10px; }`,
  hint: "pseudo-elements need content.",
  bugLine: 1,
  explanation: "content missing makes ::after invisible."
},

{
  id: 39,
  title: "Backdrop Filter Without Browser Support",
  difficulty: "Hard",
  language: "CSS",
  description: "Missing WebKit prefix.",
  buggyCode: `.frost { backdrop-filter: blur(10px); }`,
  fixedCode: `.frost { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }`,
  hint: "Safari requires prefix.",
  bugLine: 1,
  explanation: "Safari needs -webkit-backdrop-filter."
},

{
  id: 40,
  title: "Using rem Without Root Font Size",
  difficulty: "Hard",
  language: "CSS",
  description: "Root font-size missing but rem used.",
  buggyCode: `.title { font-size: 2rem; }`,
  fixedCode: `:root { font-size:16px; } .title { font-size: 2rem; }`,
  hint: "Define a root size before using rem.",
  bugLine: 1,
  explanation: "rem depends on :root font-size."
}


];
