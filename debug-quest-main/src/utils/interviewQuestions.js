import { 
  Code2, 
  Palette, 
  Zap, 
  Atom, 
  Triangle, 
  FileCode2, 
  Hexagon, 
  Leaf, 
  Server, 
  Package, 
  TestTube, 
  GitBranch, 
  Layout, 
  Binary, 
  Lightbulb,
  BookOpen,
  Database,
  Cpu,
  Globe,
  Shield,
  Cloud,
  Lock,
  Users,
  MessageSquare,
  Zap as Lightning,
  Layers,
  GitMerge,
  Terminal,
  Network,
  Smartphone,
  Monitor,
  ServerCog
} from 'lucide-react';

const categoryIcons = {
  html: Code2,
  css: Palette,
  javascript: Zap,
  react: Atom,
  nextjs: Triangle,
  typescript: FileCode2,
  nodejs: Hexagon,
  mongodb: Leaf,
  express: Server,
  redux: Package,
  git: GitBranch,
  'system-design': Layout,
  dsa: Binary,
  'all': BookOpen,
  'database': Database,
  'performance': Lightning,
  'security': Shield,
  'cloud': Cloud,
  'devops': ServerCog,
  'mobile': Smartphone,
  'web': Globe
};

export { categoryIcons };

export const interviewQuestions = {
  categories: [
    { id: 'html', name: 'HTML', icon: categoryIcons.html, color: 'from-orange-400 to-red-400' },
    { id: 'css', name: 'CSS', icon: categoryIcons.css, color: 'from-blue-400 to-cyan-400' },
    { id: 'javascript', name: 'JavaScript', icon: categoryIcons.javascript, color: 'from-yellow-400 to-orange-400' },
    { id: 'react', name: 'React', icon: categoryIcons.react, color: 'from-cyan-400 to-blue-400' },
    { id: 'nextjs', name: 'Next.js', icon: categoryIcons.nextjs, color: 'from-gray-400 to-gray-600' },
    { id: 'typescript', name: 'TypeScript', icon: categoryIcons.typescript, color: 'from-blue-400 to-indigo-400' },
    { id: 'nodejs', name: 'Node.js', icon: categoryIcons.nodejs, color: 'from-green-400 to-emerald-400' },
    { id: 'mongodb', name: 'MongoDB', icon: categoryIcons.mongodb, color: 'from-green-300 to-green-500' },
    { id: 'express', name: 'Express.js', icon: categoryIcons.express, color: 'from-gray-300 to-gray-500' },
    { id: 'redux', name: 'Redux', icon: categoryIcons.redux, color: 'from-purple-400 to-violet-400' },
    { id: 'git', name: 'Git & GitHub', icon: categoryIcons.git, color: 'from-orange-400 to-red-400' },
    { id: 'system-design', name: 'System Design', icon: categoryIcons['system-design'], color: 'from-indigo-400 to-purple-400' },
    { id: 'dsa', name: 'DSA', icon: categoryIcons.dsa, color: 'from-teal-400 to-cyan-400' },
    { id: 'performance', name: 'Performance', icon: categoryIcons.performance, color: 'from-yellow-400 to-orange-400' },
    { id: 'security', name: 'Security', icon: categoryIcons.security, color: 'from-red-400 to-pink-400' }  ],
  
  fresher: [
    // =============== HTML - 50 Questions ===============
    {
      id: 'html1',
      category: 'html',
      question: 'What is HTML and what does it stand for?',
      answer: 'HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages and web applications. It provides the structure of a webpage using elements represented by tags.',
      difficulty: 'Easy',
      tags: ['basics', 'html']
    },
    {
      id: 'html2',
      category: 'html',
      question: 'What is the difference between HTML elements and tags?',
      answer: 'An HTML tag is just the opening or closing part, like <p> or </p>. An HTML element is the complete structure including the opening tag, content, and closing tag, like <p>Hello</p>.',
      difficulty: 'Easy',
      tags: ['basics', 'html']
    },
    {
      id: 'html3',
      category: 'html',
      question: 'What are semantic HTML elements?',
      answer: 'Semantic HTML elements clearly describe their meaning in a human and machine-readable way. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>. They improve accessibility and SEO.',
      difficulty: 'Easy',
      tags: ['semantic', 'html', 'accessibility']
    },
    {
      id: 'html4',
      category: 'html',
      question: 'What is the difference between <div> and <span> elements?',
      answer: '<div> is a block-level element that takes up full width and starts on a new line. <span> is an inline element that takes only necessary width and stays on the same line. Use <div> for layout sections and <span> for styling small portions of text.',
      difficulty: 'Easy',
      tags: ['elements', 'html']
    },
    {
      id: 'html5',
      category: 'html',
      question: 'Explain the purpose of doctype declaration.',
      answer: '<!DOCTYPE html> declares the document type and version of HTML. It ensures the browser renders the page in standards mode rather than quirks mode. It must be the first line in an HTML document.',
      difficulty: 'Easy',
      tags: ['doctype', 'html']
    },
    {
      id: 'html6',
      category: 'html',
      question: 'What are HTML attributes? Give examples.',
      answer: 'Attributes provide additional information about elements. They are always specified in the start tag. Examples: src, href, alt, class, id, style, title, data-*, aria-*.',
      difficulty: 'Easy',
      tags: ['attributes', 'html']
    },
    {
      id: 'html7',
      category: 'html',
      question: 'What is the purpose of the alt attribute in images?',
      answer: 'The alt attribute provides alternative text for images. It is read by screen readers for accessibility, displayed if the image fails to load, and helps with SEO. It should describe the image content.',
      difficulty: 'Easy',
      tags: ['accessibility', 'images', 'html']
    },
    {
      id: 'html8',
      category: 'html',
      question: 'What are HTML forms and their main elements?',
      answer: 'HTML forms collect user input. Main elements: <form> (container), <input> (various types), <textarea> (multi-line text), <select> (dropdown), <button> (submit/reset), <label> (description).',
      difficulty: 'Easy',
      tags: ['forms', 'html']
    },
    {
      id: 'html9',
      category: 'html',
      question: 'What is the difference between GET and POST methods?',
      answer: 'GET: Data appended to URL, limited length, cached, bookmarked, visible in history. POST: Data in request body, no length limit, not cached, not bookmarked, more secure for sensitive data.',
      difficulty: 'Medium',
      tags: ['forms', 'http', 'html']
    },
    {
      id: 'html10',
      category: 'html',
      question: 'What are HTML5 new semantic elements?',
      answer: '<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>, <figure>, <figcaption>, <time>, <mark>, <summary>, <details>. These improve document structure and accessibility.',
      difficulty: 'Medium',
      tags: ['html5', 'semantic', 'html']
    },
    {
      id: 'html11',
      category: 'html',
      question: 'What is the <canvas> element?',
      answer: '<canvas> is a bitmap-based drawing area where JavaScript draws graphics pixel by pixel. Used for games, data visualization, photo editing. Requires JavaScript to draw.',
      difficulty: 'Medium',
      tags: ['canvas', 'graphics', 'html']
    },
    {
      id: 'html12',
      category: 'html',
      question: 'What is SVG and how is it different from Canvas?',
      answer: 'SVG (Scalable Vector Graphics) is XML-based for vector graphics. Canvas is bitmap-based. SVG: DOM accessible, scalable without quality loss, better for icons/logos. Canvas: better for complex animations, pixel manipulation.',
      difficulty: 'Medium',
      tags: ['svg', 'canvas', 'html']
    },
    {
      id: 'html13',
      category: 'html',
      question: 'What are data attributes?',
      answer: 'data-* attributes store custom data private to the page. Accessible via JavaScript (element.dataset). Example: <div data-user-id="123">. Useful for storing metadata.',
      difficulty: 'Medium',
      tags: ['data-attributes', 'html']
    },
    {
      id: 'html14',
      category: 'html',
      question: 'What is the viewport meta tag?',
      answer: '<meta name="viewport" content="width=device-width, initial-scale=1"> makes pages responsive on mobile devices. Controls viewport dimensions and scaling.',
      difficulty: 'Medium',
      tags: ['viewport', 'responsive', 'html']
    },
    {
      id: 'html15',
      category: 'html',
      question: 'Explain HTML5 Web Storage.',
      answer: 'Web Storage includes localStorage (persistent) and sessionStorage (session-only). Stores key-value pairs (string only). 5-10MB limit. Better than cookies for client-side storage.',
      difficulty: 'Medium',
      tags: ['web-storage', 'html5']
    },
    {
      id: 'html16',
      category: 'html',
      question: 'What are HTML entities? Give examples.',
      answer: 'HTML entities represent special characters. &lt; (<), &gt; (>), &amp; (&), &quot; ("), &apos; (\'), &nbsp; (non-breaking space), &copy; (©).',
      difficulty: 'Easy',
      tags: ['entities', 'html']
    },
    {
      id: 'html17',
      category: 'html',
      question: 'What is the difference between <b> and <strong>?',
      answer: '<b> is presentational bold without semantic importance. <strong> indicates strong importance (semantic), typically rendered as bold but conveys meaning to assistive technologies.',
      difficulty: 'Easy',
      tags: ['semantic', 'html']
    },
    {
      id: 'html18',
      category: 'html',
      question: 'What is the purpose of <meta> tags?',
      answer: 'Provide metadata about HTML document: charset, viewport, description, keywords, author, robots. Used by browsers, search engines, and other web services.',
      difficulty: 'Easy',
      tags: ['meta', 'seo', 'html']
    },
    {
      id: 'html19',
      category: 'html',
      question: 'Explain iframe element.',
      answer: '<iframe> embeds another HTML page. Attributes: src (URL), width, height, title (accessibility), sandbox (security), allow (permissions). Use cases: maps, videos, ads.',
      difficulty: 'Medium',
      tags: ['iframe', 'html']
    },
    {
      id: 'html20',
      category: 'html',
      question: 'What is HTML validation?',
      answer: 'HTML validation checks HTML documents against standards (W3C). Tools: W3C Validator. Benefits: cross-browser compatibility, accessibility, SEO, maintainability.',
      difficulty: 'Easy',
      tags: ['validation', 'html']
    },
    {
      id: 'html21',
      category: 'html',
      question: 'What are ARIA attributes?',
      answer: 'ARIA (Accessible Rich Internet Applications) attributes improve accessibility for dynamic content. Examples: aria-label, aria-hidden, aria-expanded, aria-live, role. Used when semantic HTML is insufficient.',
      difficulty: 'Medium',
      tags: ['accessibility', 'aria', 'html']
    },
    {
      id: 'html22',
      category: 'html',
      question: 'Explain HTML5 geolocation API.',
      answer: 'Geolocation API gets user\'s geographical position. navigator.geolocation.getCurrentPosition(success, error). Requires user permission. Used for location-based services.',
      difficulty: 'Medium',
      tags: ['geolocation', 'api', 'html5']
    },
    {
      id: 'html23',
      category: 'html',
      question: 'What is the difference between <ul> and <ol>?',
      answer: '<ul> creates unordered lists (bullets). <ol> creates ordered lists (numbers/letters). Both use <li> for list items.',
      difficulty: 'Easy',
      tags: ['lists', 'html']
    },
    {
      id: 'html24',
      category: 'html',
      question: 'Explain the <table> structure.',
      answer: '<table>: container. <thead>: header. <tbody>: body. <tfoot>: footer. <tr>: row. <th>: header cell. <td>: data cell. <caption>: table title.',
      difficulty: 'Easy',
      tags: ['tables', 'html']
    },
    {
      id: 'html25',
      category: 'html',
      question: 'What is the purpose of the <base> element?',
      answer: '<base> specifies base URL/target for all relative URLs in document. Must be in <head>. Example: <base href="https://example.com/" target="_blank">.',
      difficulty: 'Medium',
      tags: ['base', 'html']
    },
    {
      id: 'html26',
      category: 'html',
      question: 'Explain Web Components.',
      answer: 'Web Components are reusable custom elements with encapsulated functionality. Consists of: Custom Elements, Shadow DOM, HTML Templates, ES Modules. Framework-independent.',
      difficulty: 'Hard',
      tags: ['web-components', 'html']
    },
    {
      id: 'html27',
      category: 'html',
      question: 'What is the Shadow DOM?',
      answer: 'Shadow DOM creates a scoped DOM tree attached to an element, isolated from main document. Provides style and DOM encapsulation. Used in Web Components.',
      difficulty: 'Hard',
      tags: ['shadow-dom', 'web-components']
    },
    {
      id: 'html28',
      category: 'html',
      question: 'Explain HTML5 drag and drop API.',
      answer: 'API for drag and drop operations. Events: dragstart, dragover, drop. DataTransfer object transfers data. Make element draggable with draggable="true".',
      difficulty: 'Medium',
      tags: ['drag-drop', 'html5']
    },
    {
      id: 'html29',
      category: 'html',
      question: 'What are HTML templates?',
      answer: '<template> holds client-side content that isn\'t rendered but can be cloned and inserted via JavaScript. Content is inert until activated.',
      difficulty: 'Medium',
      tags: ['templates', 'html']
    },
    {
      id: 'html30',
      category: 'html',
      question: 'Explain HTML5 history API.',
      answer: 'Manipulates browser history without page reload. Methods: pushState(), replaceState(). Events: popstate. Used in SPAs for navigation.',
      difficulty: 'Hard',
      tags: ['history-api', 'html5']
    },
    {
      id: 'html31',
      category: 'html',
      question: 'What is the difference between defer and async attributes?',
      answer: 'Both load scripts without blocking HTML parsing. async: downloads async, executes immediately when ready. defer: downloads async, executes after HTML parsing, maintains order.',
      difficulty: 'Medium',
      tags: ['script', 'performance', 'html']
    },
    {
      id: 'html32',
      category: 'html',
      question: 'Explain Content Security Policy (CSP).',
      answer: 'CSP prevents XSS attacks by specifying allowed content sources. Implement via HTTP header or meta tag. Directives: default-src, script-src, style-src, img-src.',
      difficulty: 'Hard',
      tags: ['security', 'csp', 'html']
    },
    {
      id: 'html33',
      category: 'html',
      question: 'What are web workers?',
      answer: 'Web Workers run JavaScript in background threads separate from main thread. Use for CPU-intensive tasks. Communicate via postMessage().',
      difficulty: 'Hard',
      tags: ['web-workers', 'performance']
    },
    {
      id: 'html34',
      category: 'html',
      question: 'Explain service workers.',
      answer: 'Service Workers are proxy between browser and network. Enable offline experiences, push notifications, background sync. Runs in background separate from web pages.',
      difficulty: 'Hard',
      tags: ['service-workers', 'pwa']
    },
    {
      id: 'html35',
      category: 'html',
      question: 'What is the difference between localStorage and sessionStorage?',
      answer: 'localStorage: persists until manually cleared. sessionStorage: clears when tab closes. Both: same API, 5-10MB limit, same-origin policy.',
      difficulty: 'Easy',
      tags: ['web-storage', 'html5']
    },
    {
      id: 'html36',
      category: 'html',
      question: 'Explain the picture element.',
      answer: '<picture> provides multiple image sources for different display/device conditions. Uses <source> with media/srcset attributes and <img> as fallback.',
      difficulty: 'Medium',
      tags: ['responsive-images', 'html']
    },
    {
      id: 'html37',
      category: 'html',
      question: 'What is the difference between src and srcset?',
      answer: 'src provides single image URL. srcset provides multiple images with descriptors (width, density) for responsive images. Browser selects appropriate image.',
      difficulty: 'Medium',
      tags: ['responsive-images', 'html']
    },
    {
      id: 'html38',
      category: 'html',
      question: 'Explain HTML5 form validation.',
      answer: 'Native validation via attributes: required, pattern, min, max, minlength, maxlength, type (email, url, number). CSS pseudo-classes: :valid, :invalid, :required.',
      difficulty: 'Medium',
      tags: ['forms', 'validation', 'html5']
    },
    {
      id: 'html39',
      category: 'html',
      question: 'What are web sockets?',
      answer: 'WebSocket provides full-duplex communication over single TCP connection. Enables real-time apps. Protocol: ws:// or wss://. Handshake starts as HTTP then upgrades.',
      difficulty: 'Hard',
      tags: ['websockets', 'real-time']
    },
    {
      id: 'html40',
      category: 'html',
      question: 'Explain the audio and video elements.',
      answer: '<audio> and <video> embed media. Attributes: src, controls, autoplay, loop, muted, preload. Support multiple sources with <source> element.',
      difficulty: 'Medium',
      tags: ['media', 'html5']
    },
    {
      id: 'html41',
      category: 'html',
      question: 'What is the purpose of the <link> element?',
      answer: '<link> links external resources to HTML document. Common uses: stylesheets (rel="stylesheet"), icons (rel="icon"), preload, prefetch, DNS prefetching.',
      difficulty: 'Easy',
      tags: ['link', 'html']
    },
    {
      id: 'html42',
      category: 'html',
      question: 'Explain the <noscript> element.',
      answer: '<noscript> displays content when JavaScript is disabled. Used for accessibility and graceful degradation.',
      difficulty: 'Easy',
      tags: ['noscript', 'html']
    },
    {
      id: 'html43',
      category: 'html',
      question: 'What is the difference between <em> and <i>?',
      answer: '<em> indicates emphasized text (semantic). <i> is presentational italic without semantic meaning. Use <em> for emphasis, <i> for technical terms, thoughts, etc.',
      difficulty: 'Easy',
      tags: ['semantic', 'html']
    },
    {
      id: 'html44',
      category: 'html',
      question: 'Explain the <progress> and <meter> elements.',
      answer: '<progress>: completion progress of task. <meter>: scalar measurement within known range. Both provide semantic meaning for gauges.',
      difficulty: 'Medium',
      tags: ['semantic', 'html5']
    },
    {
      id: 'html45',
      category: 'html',
      question: 'What is the difference between HTTP/1.1 and HTTP/2?',
      answer: 'HTTP/1.1: multiple TCP connections, head-of-line blocking. HTTP/2: single connection, multiplexing, header compression, server push, binary protocol. HTTP/3 uses QUIC over UDP.',
      difficulty: 'Hard',
      tags: ['http', 'performance']
    },
    {
      id: 'html46',
      category: 'html',
      question: 'Explain the <datalist> element.',
      answer: '<datalist> provides pre-defined options for <input> elements. Creates autocomplete dropdown. Associated via list attribute.',
      difficulty: 'Medium',
      tags: ['forms', 'html5']
    },
    {
      id: 'html47',
      category: 'html',
      question: 'What is the purpose of the <output> element?',
      answer: '<output> represents result of calculation or user action. Often used with forms and JavaScript calculations.',
      difficulty: 'Medium',
      tags: ['forms', 'html5']
    },
    {
      id: 'html48',
      category: 'html',
      question: 'Explain the <details> and <summary> elements.',
      answer: '<details> creates disclosure widget. <summary> provides summary/heading. Content expands/collapses. Native accordion without JavaScript.',
      difficulty: 'Medium',
      tags: ['semantic', 'html5']
    },
    {
      id: 'html49',
      category: 'html',
      question: 'What is the difference between cookies and web storage?',
      answer: 'Cookies: 4KB limit, sent with every HTTP request, server-side accessible. Web Storage: 5-10MB, not sent with requests, client-side only, better API.',
      difficulty: 'Medium',
      tags: ['cookies', 'web-storage']
    },
    {
      id: 'html50',
      category: 'html',
      question: 'Explain the <fieldset> and <legend> elements.',
      answer: '<fieldset> groups related form controls. <legend> provides caption. Improves accessibility and organization.',
      difficulty: 'Easy',
      tags: ['forms', 'accessibility', 'html']
    },

    // =============== CSS - 50 Questions ===============
    {
      id: 'css1',
      category: 'css',
      question: 'What is CSS and what does it stand for?',
      answer: 'CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation of HTML documents. Controls layout, colors, fonts, and visual effects.',
      difficulty: 'Easy',
      tags: ['basics', 'css']
    },
    {
      id: 'css2',
      category: 'css',
      question: 'What is the box model in CSS?',
      answer: 'The CSS box model describes the rectangular boxes generated for elements. Consists of: content, padding, border, and margin. box-sizing property controls calculation.',
      difficulty: 'Easy',
      tags: ['box-model', 'css']
    },
    {
      id: 'css3',
      category: 'css',
      question: 'What is the difference between class and ID selectors?',
      answer: 'Class selector (.class): can be used multiple times, lower specificity. ID selector (#id): should be unique, higher specificity. Use classes for styling, IDs for JavaScript hooks.',
      difficulty: 'Easy',
      tags: ['selectors', 'css']
    },
    {
      id: 'css4',
      category: 'css',
      question: 'What are CSS pseudo-classes?',
      answer: 'Pseudo-classes select elements in a specific state. Examples: :hover, :focus, :active, :visited, :first-child, :last-child, :nth-child(), :not(), :checked.',
      difficulty: 'Easy',
      tags: ['pseudo-classes', 'css']
    },
    {
      id: 'css5',
      category: 'css',
      question: 'What is the difference between inline, block, and inline-block?',
      answer: 'inline: flows with text, no width/height. block: starts new line, takes full width. inline-block: flows inline but accepts width/height.',
      difficulty: 'Easy',
      tags: ['display', 'css']
    },
    {
      id: 'css6',
      category: 'css',
      question: 'Explain CSS positioning.',
      answer: 'static: default flow. relative: offset from normal position. absolute: relative to nearest positioned ancestor. fixed: relative to viewport. sticky: hybrid of relative and fixed.',
      difficulty: 'Medium',
      tags: ['positioning', 'css']
    },
    {
      id: 'css7',
      category: 'css',
      question: 'What is the CSS cascade?',
      answer: 'Cascade determines which styles apply when multiple rules target the same element. Order of importance: user !important > author !important > author > user > browser.',
      difficulty: 'Medium',
      tags: ['cascade', 'css']
    },
    {
      id: 'css8',
      category: 'css',
      question: 'Explain CSS specificity.',
      answer: 'Specificity calculates which selector is more specific: inline style (1000), ID (100), class/attribute/pseudo-class (10), element/pseudo-element (1). Higher specificity wins.',
      difficulty: 'Medium',
      tags: ['specificity', 'css']
    },
    {
      id: 'css9',
      category: 'css',
      question: 'What are CSS preprocessors?',
      answer: 'CSS preprocessors extend CSS with features like variables, nesting, mixins, functions. Examples: Sass, Less, Stylus. They compile to regular CSS.',
      difficulty: 'Medium',
      tags: ['preprocessors', 'css']
    },
    {
      id: 'css10',
      category: 'css',
      question: 'Explain CSS Grid.',
      answer: 'CSS Grid is a 2D layout system. Defines grid container and grid items. Properties: grid-template-columns/rows, gap, grid-column/row, grid-area, grid-template-areas.',
      difficulty: 'Medium',
      tags: ['grid', 'layout', 'css']
    },
    {
      id: 'css11',
      category: 'css',
      question: 'What is Flexbox?',
      answer: 'Flexbox is 1D layout model for distributing space along single axis. Properties: display: flex, flex-direction, justify-content, align-items, flex-wrap, flex-grow/shrink/basis.',
      difficulty: 'Medium',
      tags: ['flexbox', 'layout', 'css']
    },
    {
      id: 'css12',
      category: 'css',
      question: 'Difference between Grid and Flexbox?',
      answer: 'Grid: 2D (rows and columns), layout-first approach. Flexbox: 1D (row OR column), content-first approach. Use Grid for page layouts, Flexbox for component layouts.',
      difficulty: 'Medium',
      tags: ['grid', 'flexbox', 'css']
    },
    {
      id: 'css13',
      category: 'css',
      question: 'Explain CSS custom properties (CSS variables).',
      answer: 'Custom properties (--var-name) store values for reuse. Accessed with var(--var-name). Scoped to element, inherited. Can be changed with JavaScript.',
      difficulty: 'Medium',
      tags: ['variables', 'css']
    },
    {
      id: 'css14',
      category: 'css',
      question: 'What is BEM naming convention?',
      answer: 'BEM (Block, Element, Modifier) methodology for CSS class naming. Block: standalone component. Element: part of block. Modifier: variant of block/element.',
      difficulty: 'Medium',
      tags: ['bem', 'methodology', 'css']
    },
    {
      id: 'css15',
      category: 'css',
      question: 'Explain CSS transforms.',
      answer: 'Transforms modify element\'s appearance: translate(), rotate(), scale(), skew(). Can be 2D or 3D. Uses transform-origin as reference point.',
      difficulty: 'Medium',
      tags: ['transforms', 'css']
    },
    {
      id: 'css16',
      category: 'css',
      question: 'What are CSS transitions?',
      answer: 'Transitions animate property changes over time. Properties: transition-property, transition-duration, transition-timing-function, transition-delay.',
      difficulty: 'Medium',
      tags: ['transitions', 'animation', 'css']
    },
    {
      id: 'css17',
      category: 'css',
      question: 'Explain CSS animations.',
      answer: 'Animations create complex animations with @keyframes. Properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction.',
      difficulty: 'Medium',
      tags: ['animations', 'css']
    },
    {
      id: 'css18',
      category: 'css',
      question: 'What is the difference between visibility: hidden and display: none?',
      answer: 'visibility: hidden: element invisible but occupies space. display: none: element removed from flow, no space occupied.',
      difficulty: 'Easy',
      tags: ['display', 'visibility', 'css']
    },
    {
      id: 'css19',
      category: 'css',
      question: 'Explain CSS floats.',
      answer: 'Float moves element to left/right, allowing content to wrap around it. Values: left, right, none. Clear property stops wrapping.',
      difficulty: 'Medium',
      tags: ['float', 'css']
    },
    {
      id: 'css20',
      category: 'css',
      question: 'What are CSS pseudo-elements?',
      answer: 'Pseudo-elements style specific parts of element. Examples: ::before, ::after, ::first-line, ::first-letter, ::selection, ::placeholder.',
      difficulty: 'Medium',
      tags: ['pseudo-elements', 'css']
    },
    {
      id: 'css21',
      category: 'css',
      question: 'Explain CSS z-index.',
      answer: 'z-index controls stacking order of positioned elements. Higher values appear in front. Only works on positioned elements (non-static).',
      difficulty: 'Medium',
      tags: ['z-index', 'css']
    },
    {
      id: 'css22',
      category: 'css',
      question: 'What is CSS inheritance?',
      answer: 'Some CSS properties inherit values from parent to child. Examples: color, font-family, line-height. Box model properties don\'t inherit.',
      difficulty: 'Easy',
      tags: ['inheritance', 'css']
    },
    {
      id: 'css23',
      category: 'css',
      question: 'Explain CSS media queries.',
      answer: 'Media queries apply styles based on device characteristics. Common: width, height, orientation, resolution. Syntax: @media (max-width: 768px) { ... }',
      difficulty: 'Medium',
      tags: ['media-queries', 'responsive', 'css']
    },
    {
      id: 'css24',
      category: 'css',
      question: 'What is the difference between em and rem?',
      answer: 'em: relative to parent font-size. rem: relative to root (html) font-size. rem is more predictable, em useful for scalable components.',
      difficulty: 'Medium',
      tags: ['units', 'css']
    },
    {
      id: 'css25',
      category: 'css',
      question: 'Explain CSS aspect-ratio property.',
      answer: 'aspect-ratio sets preferred aspect ratio for box. Syntax: aspect-ratio: 16/9. Useful for responsive media containers.',
      difficulty: 'Medium',
      tags: ['aspect-ratio', 'css']
    },
    {
      id: 'css26',
      category: 'css',
      question: 'What is CSS containment?',
      answer: 'Containment (contain property) isolates element\'s layout, style, paint. Values: layout, paint, size, content. Improves performance.',
      difficulty: 'Hard',
      tags: ['containment', 'performance', 'css']
    },
    {
      id: 'css27',
      category: 'css',
      question: 'Explain CSS container queries.',
      answer: 'Container queries apply styles based on container size, not viewport. @container (min-width: 400px). Enables component-level responsiveness.',
      difficulty: 'Hard',
      tags: ['container-queries', 'responsive', 'css']
    },
    {
      id: 'css28',
      category: 'css',
      question: 'What are CSS filters?',
      answer: 'Filters apply visual effects: blur(), brightness(), contrast(), grayscale(), hue-rotate(), invert(), opacity(), saturate(), sepia().',
      difficulty: 'Medium',
      tags: ['filters', 'css']
    },
    {
      id: 'css29',
      category: 'css',
      question: 'Explain CSS blend modes.',
      answer: 'Blend modes (mix-blend-mode, background-blend-mode) blend element with background. Values: multiply, screen, overlay, darken, lighten, color-dodge, etc.',
      difficulty: 'Hard',
      tags: ['blend-modes', 'css']
    },
    {
      id: 'css30',
      category: 'css',
      question: 'What is the difference between margin and padding?',
      answer: 'Margin: space outside border, between elements. Padding: space inside border, between content and border. Margin can be negative, padding cannot.',
      difficulty: 'Easy',
      tags: ['box-model', 'css']
    },
    {
      id: 'css31',
      category: 'css',
      question: 'Explain CSS display: contents.',
      answer: 'display: contents makes element disappear, making children act as if they were direct children of element\'s parent. Useful for semantic HTML with styling constraints.',
      difficulty: 'Hard',
      tags: ['display', 'css']
    },
    {
      id: 'css32',
      category: 'css',
      question: 'What are CSS counters?',
      answer: 'Counters automatically number elements. Properties: counter-reset, counter-increment, counter(). Used for custom numbered lists.',
      difficulty: 'Hard',
      tags: ['counters', 'css']
    },
    {
      id: 'css33',
      category: 'css',
      question: 'Explain CSS clip-path.',
      answer: 'clip-path creates clipping region showing only part of element. Shapes: circle(), ellipse(), polygon(), path().',
      difficulty: 'Hard',
      tags: ['clip-path', 'css']
    },
    {
      id: 'css34',
      category: 'css',
      question: 'What is the difference between :nth-child() and :nth-of-type()?',
      answer: ':nth-child(): selects based on position among all children. :nth-of-type(): selects based on position among siblings of same type.',
      difficulty: 'Medium',
      tags: ['selectors', 'css']
    },
    {
      id: 'css35',
      category: 'css',
      question: 'Explain CSS object-fit property.',
      answer: 'object-fit controls how replaced content (img, video) fits container. Values: fill, contain, cover, none, scale-down.',
      difficulty: 'Medium',
      tags: ['object-fit', 'css']
    },
    {
      id: 'css36',
      category: 'css',
      question: 'What is the difference between position: fixed and position: sticky?',
      answer: 'fixed: positioned relative to viewport, always stays in same place. sticky: toggles between relative and fixed based on scroll position.',
      difficulty: 'Medium',
      tags: ['positioning', 'css']
    },
    {
      id: 'css37',
      category: 'css',
      question: 'Explain CSS scroll-snap.',
      answer: 'Scroll Snap creates snap points during scrolling. Properties: scroll-snap-type, scroll-snap-align, scroll-snap-stop. Creates carousel-like behavior.',
      difficulty: 'Medium',
      tags: ['scroll-snap', 'css']
    },
    {
      id: 'css38',
      category: 'css',
      question: 'What is the difference between min-width and max-width?',
      answer: 'min-width: minimum width element can have. max-width: maximum width element can have. Useful for responsive designs.',
      difficulty: 'Easy',
      tags: ['responsive', 'css']
    },
    {
      id: 'css39',
      category: 'css',
      question: 'Explain CSS will-change property.',
      answer: 'will-change hints browser about expected changes for optimization. Use sparingly: will-change: transform, opacity. Helps with smooth animations.',
      difficulty: 'Hard',
      tags: ['performance', 'css']
    },
    {
      id: 'css40',
      category: 'css',
      question: 'What are CSS logical properties?',
      answer: 'Logical properties use start/end instead of left/right for RTL/LTR support. Examples: margin-inline-start, padding-block-end, inset-inline-start.',
      difficulty: 'Medium',
      tags: ['logical-properties', 'rtl', 'css']
    },
    {
      id: 'css41',
      category: 'css',
      question: 'Explain CSS backdrop-filter.',
      answer: 'backdrop-filter applies filters to area behind element. Values: blur(), brightness(), contrast(). Creates frosted glass effect.',
      difficulty: 'Hard',
      tags: ['backdrop-filter', 'css']
    },
    {
      id: 'css42',
      category: 'css',
      question: 'What is the difference between width: auto and width: 100%?',
      answer: 'width: auto: element takes needed width based on content and parent. width: 100%: element takes full parent width, ignoring padding/border.',
      difficulty: 'Medium',
      tags: ['width', 'css']
    },
    {
      id: 'css43',
      category: 'css',
      question: 'Explain CSS gap property.',
      answer: 'gap sets spacing between grid/flex items. Shorthand for row-gap and column-gap. Works with display: grid, flex, multi-column.',
      difficulty: 'Medium',
      tags: ['gap', 'css']
    },
    {
      id: 'css44',
      category: 'css',
      question: 'What are CSS custom properties fallbacks?',
      answer: 'Custom properties can have fallback: var(--color, red). Multiple fallbacks: var(--color, var(--fallback, blue)).',
      difficulty: 'Medium',
      tags: ['variables', 'css']
    },
    {
      id: 'css45',
      category: 'css',
      question: 'Explain CSS @supports rule.',
      answer: '@supports tests browser support for CSS features. Syntax: @supports (display: grid) { ... }. Used for progressive enhancement.',
      difficulty: 'Medium',
      tags: ['feature-detection', 'css']
    },
    {
      id: 'css46',
      category: 'css',
      question: 'What is the difference between overflow: hidden and overflow: scroll?',
      answer: 'overflow: hidden: clips overflow content. overflow: scroll: adds scrollbars (always). overflow: auto: adds scrollbars only when needed.',
      difficulty: 'Easy',
      tags: ['overflow', 'css']
    },
    {
      id: 'css47',
      category: 'css',
      question: 'Explain CSS font-face rule.',
      answer: '@font-face defines custom fonts. Properties: font-family, src (local/url), font-weight, font-style, unicode-range.',
      difficulty: 'Medium',
      tags: ['typography', 'css']
    },
    {
      id: 'css48',
      category: 'css',
      question: 'What are CSS vendor prefixes?',
      answer: 'Vendor prefixes for experimental features: -webkit- (Chrome, Safari), -moz- (Firefox), -ms- (IE), -o- (Opera). Use autoprefixer tool.',
      difficulty: 'Medium',
      tags: ['vendor-prefixes', 'css']
    },
    {
      id: 'css49',
      category: 'css',
      question: 'Explain CSS currentColor keyword.',
      answer: 'currentColor references current color value. Useful for making border, background, etc. match text color.',
      difficulty: 'Medium',
      tags: ['currentcolor', 'css']
    },
    {
      id: 'css50',
      category: 'css',
      question: 'What is the difference between :focus and :focus-visible?',
      answer: ':focus: matches when element has focus. :focus-visible: matches when element has focus AND browser determines focus should be visible (keyboard vs mouse).',
      difficulty: 'Medium',
      tags: ['accessibility', 'css']
    },

    // =============== JavaScript - 50 Questions ===============
    {
      id: 'js1',
      category: 'javascript',
      question: 'What is JavaScript?',
      answer: 'JavaScript is a high-level, interpreted programming language for web development. It enables interactive web pages and is a core technology of the web alongside HTML and CSS.',
      difficulty: 'Easy',
      tags: ['basics', 'javascript']
    },
    {
      id: 'js2',
      category: 'javascript',
      question: 'What is the difference between let, const, and var?',
      answer: 'var: function-scoped, hoisted, can be redeclared. let: block-scoped, hoisted but in TDZ, can be reassigned. const: block-scoped, must be initialized, cannot be reassigned.',
      difficulty: 'Easy',
      tags: ['variables', 'javascript']
    },
    {
      id: 'js3',
      category: 'javascript',
      question: 'What are JavaScript data types?',
      answer: 'Primitive: String, Number, Boolean, Undefined, Null, Symbol, BigInt. Object: Object, Array, Function, Date, RegExp. typeof operator checks type.',
      difficulty: 'Easy',
      tags: ['datatypes', 'javascript']
    },
    {
      id: 'js4',
      category: 'javascript',
      question: 'What is hoisting in JavaScript?',
      answer: 'Hoisting moves declarations to top of scope before execution. var declarations are hoisted and initialized with undefined. let/const are hoisted but not initialized (Temporal Dead Zone).',
      difficulty: 'Medium',
      tags: ['hoisting', 'javascript']
    },
    {
      id: 'js5',
      category: 'javascript',
      question: 'What is closure in JavaScript?',
      answer: 'Closure is function that remembers its outer variables even after outer function returns. Allows data encapsulation, private variables, factory functions.',
      difficulty: 'Medium',
      tags: ['closure', 'javascript']
    },
    {
      id: 'js6',
      category: 'javascript',
      question: 'What is the difference between == and ===?',
      answer: '== performs type coercion before comparison (loose equality). === checks strict equality without type coercion (same type and value). Always prefer ===.',
      difficulty: 'Easy',
      tags: ['operators', 'javascript']
    },
    {
      id: 'js7',
      category: 'javascript',
      question: 'What is the event loop?',
      answer: 'Event loop handles async operations. Continuously checks call stack and callback queue. When stack empty, moves callbacks from queue to stack. Has microtask (Promise) and macrotask (setTimeout) queues.',
      difficulty: 'Hard',
      tags: ['event-loop', 'async', 'javascript']
    },
    {
      id: 'js8',
      category: 'javascript',
      question: 'Explain prototypal inheritance.',
      answer: 'JavaScript uses prototypal inheritance where objects inherit directly from other objects. Every object has __proto__ pointing to prototype. Prototype chain continues until null.',
      difficulty: 'Hard',
      tags: ['inheritance', 'prototype', 'javascript']
    },
    {
      id: 'js9',
      category: 'javascript',
      question: 'What are promises?',
      answer: 'Promise represents eventual completion of async operation. States: pending, fulfilled, rejected. Methods: then(), catch(), finally(). Promise.all(), Promise.race(), Promise.allSettled().',
      difficulty: 'Medium',
      tags: ['promises', 'async', 'javascript']
    },
    {
      id: 'js10',
      category: 'javascript',
      question: 'What is async/await?',
      answer: 'async/await is syntactic sugar over promises. async function returns promise. await pauses execution until promise settles. try/catch for error handling.',
      difficulty: 'Medium',
      tags: ['async', 'javascript']
    },
    {
      id: 'js11',
      category: 'javascript',
      question: 'What is the DOM?',
      answer: 'DOM (Document Object Model) is programming interface for HTML/XML documents. Represents document as tree of objects. JavaScript can manipulate DOM to change content, structure, style.',
      difficulty: 'Easy',
      tags: ['dom', 'javascript']
    },
    {
      id: 'js12',
      category: 'javascript',
      question: 'What are arrow functions?',
      answer: 'Arrow functions provide concise syntax. Don\'t have own this, arguments, super, or new.target. Cannot be used as constructors. this is lexically bound.',
      difficulty: 'Easy',
      tags: ['functions', 'javascript']
    },
    {
      id: 'js13',
      category: 'javascript',
      question: 'Explain this keyword.',
      answer: 'this refers to execution context. In global scope: window/global. In function: depends on how called. In method: object. In arrow function: lexical this. Use bind(), call(), apply() to set this.',
      difficulty: 'Hard',
      tags: ['this', 'javascript']
    },
    {
      id: 'js14',
      category: 'javascript',
      question: 'What is memoization?',
      answer: 'Memoization caches function results for same inputs. Improves performance for expensive computations. Implement with closure storing cache object.',
      difficulty: 'Medium',
      tags: ['memoization', 'performance', 'javascript']
    },
    {
      id: 'js15',
      category: 'javascript',
      question: 'Explain debouncing and throttling.',
      answer: 'Debouncing: execute after delay when events stop. Throttling: execute at most once per time period. Both optimize performance for frequent events like resize, scroll, input.',
      difficulty: 'Medium',
      tags: ['performance', 'javascript']
    },
    {
      id: 'js16',
      category: 'javascript',
      question: 'What is the difference between null and undefined?',
      answer: 'undefined: variable declared but not assigned. null: intentional absence of value. typeof undefined = "undefined", typeof null = "object".',
      difficulty: 'Easy',
      tags: ['datatypes', 'javascript']
    },
    {
      id: 'js17',
      category: 'javascript',
      question: 'Explain Map and Set.',
      answer: 'Map: key-value pairs, keys can be any type. Set: collection of unique values. Both maintain insertion order. Better performance than objects for frequent additions/deletions.',
      difficulty: 'Medium',
      tags: ['collections', 'javascript']
    },
    {
      id: 'js18',
      category: 'javascript',
      question: 'What is JSON?',
      answer: 'JSON (JavaScript Object Notation) is data format. Syntax: objects {}, arrays [], strings "", numbers, booleans, null. JSON.stringify() converts to string, JSON.parse() parses string.',
      difficulty: 'Easy',
      tags: ['json', 'javascript']
    },
    {
      id: 'js19',
      category: 'javascript',
      question: 'Explain event delegation.',
      answer: 'Event delegation attaches single event listener to parent instead of multiple to children. Uses event bubbling. event.target identifies actual target. Improves performance.',
      difficulty: 'Medium',
      tags: ['events', 'dom', 'javascript']
    },
    {
      id: 'js20',
      category: 'javascript',
      question: 'What are Web APIs?',
      answer: 'Web APIs provided by browsers: DOM API, Fetch API, Canvas API, Web Storage, Geolocation, Web Workers, WebSockets, Service Workers, Intersection Observer, etc.',
      difficulty: 'Medium',
      tags: ['web-api', 'javascript']
    },
    {
      id: 'js21',
      category: 'javascript',
      question: 'Explain JavaScript modules.',
      answer: 'Modules split code into reusable pieces. ES6 modules use import/export. CommonJS uses require/module.exports. Modules have own scope, use strict mode by default.',
      difficulty: 'Medium',
      tags: ['modules', 'javascript']
    },
    {
      id: 'js22',
      category: 'javascript',
      question: 'What is the difference between shallow copy and deep copy?',
      answer: 'Shallow copy: copies top-level properties, nested objects are shared. Deep copy: copies all levels, completely independent. Methods: spread operator (shallow), JSON.parse(JSON.stringify()) (deep, limited).',
      difficulty: 'Medium',
      tags: ['objects', 'javascript']
    },
    {
      id: 'js23',
      category: 'javascript',
      question: 'Explain JavaScript generators.',
      answer: 'Generators are functions that can be paused/resumed using yield. Returns iterator. Used for lazy evaluation, infinite sequences, async iteration.',
      difficulty: 'Hard',
      tags: ['generators', 'javascript']
    },
    {
      id: 'js24',
      category: 'javascript',
      question: 'What are JavaScript iterators?',
      answer: 'Iterators are objects with next() method returning {value, done}. Symbol.iterator defines default iterator. for...of uses iterators.',
      difficulty: 'Hard',
      tags: ['iterators', 'javascript']
    },
    {
      id: 'js25',
      category: 'javascript',
      question: 'Explain Proxy and Reflect.',
      answer: 'Proxy creates wrapper for object to intercept operations (get, set, etc.). Reflect provides methods for proxy traps. Used for validation, logging, virtualization.',
      difficulty: 'Hard',
      tags: ['proxy', 'reflect', 'javascript']
    },
    {
      id: 'js26',
      category: 'javascript',
      question: 'What is the Temporal Dead Zone?',
      answer: 'TDZ is period between entering scope and variable declaration where variable cannot be accessed. Applies to let and const. Accessing variable in TDZ throws ReferenceError.',
      difficulty: 'Hard',
      tags: ['tdz', 'javascript']
    },
    {
      id: 'js27',
      category: 'javascript',
      question: 'Explain JavaScript memory management.',
      answer: 'JavaScript uses automatic garbage collection (mark-and-sweep). Memory leaks occur from: global variables, forgotten timers, DOM references, event listeners, closures holding references.',
      difficulty: 'Hard',
      tags: ['memory', 'performance', 'javascript']
    },
    {
      id: 'js28',
      category: 'javascript',
      question: 'What are WeakMap and WeakSet?',
      answer: 'WeakMap: keys are objects only, weak references (garbage collectable). WeakSet: values are objects only, weak references. Don\'t prevent garbage collection of keys/values.',
      difficulty: 'Hard',
      tags: ['weakmap', 'weakset', 'javascript']
    },
    {
      id: 'js29',
      category: 'javascript',
      question: 'Explain JavaScript event bubbling and capturing.',
      answer: 'Event flow: capturing (top to target), target phase, bubbling (target to top). addEventListener third parameter: true (capture), false (bubble, default). event.stopPropagation() stops flow.',
      difficulty: 'Medium',
      tags: ['events', 'javascript']
    },
    {
      id: 'js30',
      category: 'javascript',
      question: 'What is the difference between function declaration and expression?',
      answer: 'Declaration: function foo() {}, hoisted, can be called before declaration. Expression: const foo = function() {}, not hoisted, cannot be called before assignment.',
      difficulty: 'Easy',
      tags: ['functions', 'javascript']
    },
    {
      id: 'js31',
      category: 'javascript',
      question: 'Explain JavaScript currying.',
      answer: 'Currying transforms function with multiple arguments into sequence of functions each with single argument. const add = a => b => a + b. Useful for partial application.',
      difficulty: 'Hard',
      tags: ['currying', 'functional', 'javascript']
    },
    {
      id: 'js32',
      category: 'javascript',
      question: 'What is the difference between Object.freeze(), Object.seal(), and Object.preventExtensions()?',
      answer: 'preventExtensions: cannot add properties. seal: cannot add/remove properties. freeze: cannot add/remove/modify properties. Increasing levels of immutability.',
      difficulty: 'Medium',
      tags: ['objects', 'immutability', 'javascript']
    },
    {
      id: 'js33',
      category: 'javascript',
      question: 'Explain JavaScript error handling.',
      answer: 'try/catch/finally for synchronous errors. For async: promise .catch(), async/await with try/catch. Error types: Error, SyntaxError, TypeError, ReferenceError, etc.',
      difficulty: 'Medium',
      tags: ['error-handling', 'javascript']
    },
    {
      id: 'js34',
      category: 'javascript',
      question: 'What are JavaScript decorators?',
      answer: 'Decorators are functions that modify classes/methods. Use @decorator syntax. Experimental feature. Used in frameworks like Angular.',
      difficulty: 'Hard',
      tags: ['decorators', 'javascript']
    },
    {
      id: 'js35',
      category: 'javascript',
      question: 'Explain JavaScript Web Workers.',
      answer: 'Web Workers run JavaScript in background threads. Communicate via postMessage(). Use for CPU-intensive tasks to avoid blocking main thread.',
      difficulty: 'Hard',
      tags: ['web-workers', 'performance', 'javascript']
    },
    {
      id: 'js36',
      category: 'javascript',
      question: 'What is the difference between setTimeout and setInterval?',
      answer: 'setTimeout executes function once after delay. setInterval executes repeatedly at interval. Both return timer ID for clearTimeout/clearInterval.',
      difficulty: 'Easy',
      tags: ['timers', 'javascript']
    },
    {
      id: 'js37',
      category: 'javascript',
      question: 'Explain JavaScript Service Workers.',
      answer: 'Service Workers are proxy between browser and network. Enable offline experiences, push notifications, background sync. Lifecycle: install, activate, fetch events.',
      difficulty: 'Hard',
      tags: ['service-workers', 'pwa', 'javascript']
    },
    {
      id: 'js38',
      category: 'javascript',
      question: 'What are JavaScript symbols?',
      answer: 'Symbol is unique primitive value. Created with Symbol(). Used as object keys to avoid name collisions. Symbol.for() creates global symbols.',
      difficulty: 'Medium',
      tags: ['symbols', 'javascript']
    },
    {
      id: 'js39',
      category: 'javascript',
      question: 'Explain JavaScript BigInt.',
      answer: 'BigInt represents integers larger than 2^53 - 1. Created with n suffix or BigInt(). Cannot mix with Number without explicit conversion.',
      difficulty: 'Medium',
      tags: ['bigint', 'javascript']
    },
    {
      id: 'js40',
      category: 'javascript',
      question: 'What is the difference between for...in and for...of?',
      answer: 'for...in iterates over enumerable property names (including inherited). for...of iterates over iterable values (arrays, strings, maps, sets).',
      difficulty: 'Medium',
      tags: ['loops', 'javascript']
    },
    {
      id: 'js41',
      category: 'javascript',
      question: 'Explain JavaScript optional chaining.',
      answer: 'Optional chaining (?.) short-circuits if value is null/undefined. obj?.prop, arr?.[index], func?.(). Avoids Cannot read property errors.',
      difficulty: 'Medium',
      tags: ['optional-chaining', 'javascript']
    },
    {
      id: 'js42',
      category: 'javascript',
      question: 'What is JavaScript nullish coalescing?',
      answer: 'Nullish coalescing (??) returns right operand if left is null or undefined. Differs from || which checks falsy values (0, "", false).',
      difficulty: 'Medium',
      tags: ['nullish-coalescing', 'javascript']
    },
    {
      id: 'js43',
      category: 'javascript',
      question: 'Explain JavaScript destructuring.',
      answer: 'Destructuring extracts values from arrays/objects. const {a, b} = obj, const [x, y] = arr. Default values, rest pattern, nested destructuring.',
      difficulty: 'Medium',
      tags: ['destructuring', 'javascript']
    },
    {
      id: 'js44',
      category: 'javascript',
      question: 'What are JavaScript template literals?',
      answer: 'Template literals use backticks for strings. Support interpolation ${expression}, multi-line strings, tagged templates for custom parsing.',
      difficulty: 'Easy',
      tags: ['strings', 'javascript']
    },
    {
      id: 'js45',
      category: 'javascript',
      question: 'Explain JavaScript spread and rest operators.',
      answer: 'Spread (...) expands iterables. Rest (...) collects remaining elements. Used in function arguments, array/object literals.',
      difficulty: 'Medium',
      tags: ['operators', 'javascript']
    },
    {
      id: 'js46',
      category: 'javascript',
      question: 'What is JavaScript strict mode?',
      answer: 'Strict mode ("use strict") enables stricter parsing and error handling. Prevents certain actions, throws more errors, improves performance.',
      difficulty: 'Medium',
      tags: ['strict-mode', 'javascript']
    },
    {
      id: 'js47',
      category: 'javascript',
      question: 'Explain JavaScript Internationalization API.',
      answer: 'Intl API provides language-sensitive formatting: DateTimeFormat, NumberFormat, Collator. Enables locale-specific formatting.',
      difficulty: 'Hard',
      tags: ['intl', 'javascript']
    },
    {
      id: 'js48',
      category: 'javascript',
      question: 'What are JavaScript tagged templates?',
      answer: 'Tagged templates are function calls with template literal. Function receives array of strings and interpolated values. Used for styled-components, i18n.',
      difficulty: 'Hard',
      tags: ['tagged-templates', 'javascript']
    },
    {
      id: 'js49',
      category: 'javascript',
      question: 'Explain JavaScript module patterns.',
      answer: 'Module patterns encapsulate code: IIFE, Revealing Module Pattern, CommonJS, AMD, UMD, ES6 Modules. Provide private/public members.',
      difficulty: 'Hard',
      tags: ['modules', 'patterns', 'javascript']
    },
    {
      id: 'js50',
      category: 'javascript',
      question: 'What is the difference between call, apply, and bind?',
      answer: 'call: calls function with given this and arguments. apply: calls with given this and array of arguments. bind: returns new function with bound this and arguments.',
      difficulty: 'Medium',
      tags: ['functions', 'javascript']
    },

    // =============== React - 50 Questions ===============
    {
      id: 'react1',
      category: 'react',
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces. Developed by Facebook. Uses component-based architecture, virtual DOM, and declarative programming.',
      difficulty: 'Easy',
      tags: ['basics', 'react']
    },
    {
      id: 'react2',
      category: 'react',
      question: 'What is JSX?',
      answer: 'JSX is JavaScript XML syntax extension. Looks like HTML but compiles to React.createElement() calls. Must have single root element, className instead of class.',
      difficulty: 'Easy',
      tags: ['jsx', 'react']
    },
    {
      id: 'react3',
      category: 'react',
      question: 'What are React components?',
      answer: 'Components are independent, reusable UI pieces. Can be function components (with hooks) or class components. Accept props, return React elements.',
      difficulty: 'Easy',
      tags: ['components', 'react']
    },
    {
      id: 'react4',
      category: 'react',
      question: 'What are props?',
      answer: 'Props (properties) are inputs to components. Passed from parent to child. Read-only. Make components reusable with different data.',
      difficulty: 'Easy',
      tags: ['props', 'react']
    },
    {
      id: 'react5',
      category: 'react',
      question: 'What is state?',
      answer: 'State is component-specific data that can change. Triggers re-renders when updated. In function components: useState hook. In class components: this.state.',
      difficulty: 'Easy',
      tags: ['state', 'react']
    },
    {
      id: 'react6',
      category: 'react',
      question: 'What is the virtual DOM?',
      answer: 'Virtual DOM is lightweight representation of real DOM. React compares virtual DOM with previous version (diffing), then updates real DOM efficiently.',
      difficulty: 'Medium',
      tags: ['virtual-dom', 'react']
    },
    {
      id: 'react7',
      category: 'react',
      question: 'What are React hooks?',
      answer: 'Hooks are functions that let you use state and other React features in function components. Basic hooks: useState, useEffect, useContext.',
      difficulty: 'Medium',
      tags: ['hooks', 'react']
    },
    {
      id: 'react8',
      category: 'react',
      question: 'Explain useEffect hook.',
      answer: 'useEffect performs side effects in function components. Runs after render. Can return cleanup function. Dependencies array controls when effect runs.',
      difficulty: 'Medium',
      tags: ['hooks', 'react']
    },
    {
      id: 'react9',
      category: 'react',
      question: 'What is the difference between useState and useReducer?',
      answer: 'useState: simple state management. useReducer: complex state logic, similar to Redux. Accepts reducer function and initial state, returns state and dispatch.',
      difficulty: 'Medium',
      tags: ['hooks', 'react']
    },
    {
      id: 'react10',
      category: 'react',
      question: 'Explain useContext hook.',
      answer: 'useContext subscribes to React context. Avoids prop drilling. Create context with createContext(), provide value with Provider, consume with useContext().',
      difficulty: 'Medium',
      tags: ['hooks', 'react']
    },
    {
      id: 'react11',
      category: 'react',
      question: 'What are React fragments?',
      answer: '<React.Fragment> or <> groups multiple elements without adding extra DOM nodes. Useful for returning multiple elements from component.',
      difficulty: 'Easy',
      tags: ['fragments', 'react']
    },
    {
      id: 'react12',
      category: 'react',
      question: 'What are React portals?',
      answer: 'Portals render children into DOM node outside parent hierarchy. ReactDOM.createPortal(child, container). Useful for modals, tooltips, dropdowns.',
      difficulty: 'Medium',
      tags: ['portals', 'react']
    },
    {
      id: 'react13',
      category: 'react',
      question: 'Explain React.memo.',
      answer: 'React.memo memoizes functional component. Prevents re-renders if props haven\'t changed (shallow comparison). Performance optimization.',
      difficulty: 'Medium',
      tags: ['performance', 'react']
    },
    {
      id: 'react14',
      category: 'react',
      question: 'What is the difference between useCallback and useMemo?',
      answer: 'useCallback memoizes function, preserves reference equality. useMemo memoizes computed value. Both prevent unnecessary re-renders.',
      difficulty: 'Hard',
      tags: ['hooks', 'performance', 'react']
    },
    {
      id: 'react15',
      category: 'react',
      question: 'What are React error boundaries?',
      answer: 'Error boundaries catch JavaScript errors in child component tree. Class component with static getDerivedStateFromError or componentDidCatch.',
      difficulty: 'Medium',
      tags: ['error-handling', 'react']
    },
    {
      id: 'react16',
      category: 'react',
      question: 'Explain React refs.',
      answer: 'Refs access DOM nodes or React elements. createRef() for class components, useRef() for function components. Forward refs with forwardRef().',
      difficulty: 'Medium',
      tags: ['refs', 'react']
    },
    {
      id: 'react17',
      category: 'react',
      question: 'What is React lazy loading?',
      answer: 'Lazy loading loads components only when needed. React.lazy() with Suspense. Reduces initial bundle size. import() dynamic import.',
      difficulty: 'Medium',
      tags: ['performance', 'react']
    },
    {
      id: 'react18',
      category: 'react',
      question: 'Explain React Suspense.',
      answer: 'Suspense displays fallback while waiting for something (data, code). Wraps lazy components or components using experimental data fetching.',
      difficulty: 'Hard',
      tags: ['suspense', 'react']
    },
    {
      id: 'react19',
      category: 'react',
      question: 'What are React custom hooks?',
      answer: 'Custom hooks extract component logic into reusable functions. Must start with "use". Can call other hooks.',
      difficulty: 'Medium',
      tags: ['hooks', 'react']
    },
    {
      id: 'react20',
      category: 'react',
      question: 'Explain React context API.',
      answer: 'Context provides way to pass data through component tree without prop drilling. createContext(), Provider, Consumer (or useContext).',
      difficulty: 'Medium',
      tags: ['context', 'react']
    },
    {
      id: 'react21',
      category: 'react',
      question: 'What is the difference between controlled and uncontrolled components?',
      answer: 'Controlled: form data handled by React state. Uncontrolled: form data handled by DOM. Use refs for uncontrolled components.',
      difficulty: 'Medium',
      tags: ['forms', 'react']
    },
    {
      id: 'react22',
      category: 'react',
      question: 'Explain React higher-order components.',
      answer: 'HOC is function that takes component and returns new component. Used for code reuse, logic abstraction. With hooks, HOCs less common.',
      difficulty: 'Hard',
      tags: ['hoc', 'react']
    },
    {
      id: 'react23',
      category: 'react',
      question: 'What are React render props?',
      answer: 'Render prop is prop that takes function returning React element. Shares code between components. Alternative to HOCs.',
      difficulty: 'Hard',
      tags: ['render-props', 'react']
    },
    {
      id: 'react24',
      category: 'react',
      question: 'Explain React compound components.',
      answer: 'Compound components are components that work together sharing implicit state via context. Example: Tabs, TabList, Tab, TabPanels.',
      difficulty: 'Hard',
      tags: ['patterns', 'react']
    },
    {
      id: 'react25',
      category: 'react',
      question: 'What is React reconciliation?',
      answer: 'Reconciliation is process of updating DOM to match React elements. Uses diffing algorithm on virtual DOM. Keys help identify elements.',
      difficulty: 'Hard',
      tags: ['reconciliation', 'react']
    },
    {
      id: 'react26',
      category: 'react',
      question: 'Explain React Fiber architecture.',
      answer: 'Fiber is new reconciliation engine (React 16+). Enables incremental rendering, prioritization, interruption. Basis for concurrent features.',
      difficulty: 'Hard',
      tags: ['fiber', 'react']
    },
    {
      id: 'react27',
      category: 'react',
      question: 'What are React concurrent features?',
      answer: 'Concurrent React enables interruptible rendering. Features: useTransition, useDeferredValue, Suspense for data fetching. Improves perceived performance.',
      difficulty: 'Hard',
      tags: ['concurrent', 'react']
    },
    {
      id: 'react28',
      category: 'react',
      question: 'Explain React Server Components.',
      answer: 'Server Components render on server, zero client bundle. Can access server resources directly. Client Components for interactivity. .server.js/.client.js extensions.',
      difficulty: 'Hard',
      tags: ['server-components', 'react']
    },
    {
      id: 'react29',
      category: 'react',
      question: 'What is React hydration?',
      answer: 'Hydration is React attaching event listeners to server-rendered HTML. Happens during initial render in browser.',
      difficulty: 'Hard',
      tags: ['hydration', 'ssr', 'react']
    },
    {
      id: 'react30',
      category: 'react',
      question: 'Explain React profiler.',
      answer: 'Profiler measures component rendering performance. Wraps components. Identifies bottlenecks. React DevTools Profiler tab.',
      difficulty: 'Medium',
      tags: ['performance', 'react']
    },
    {
      id: 'react31',
      category: 'react',
      question: 'What are React keys?',
      answer: 'Keys help React identify which items have changed, added, or removed. Should be unique among siblings. Important for list rendering performance.',
      difficulty: 'Easy',
      tags: ['keys', 'react']
    },
    {
      id: 'react32',
      category: 'react',
      question: 'Explain React prop types.',
      answer: 'PropTypes define type checking for props. Static propTypes property. React has built-in types. Use TypeScript for better type safety.',
      difficulty: 'Easy',
      tags: ['proptypes', 'react']
    },
    {
      id: 'react33',
      category: 'react',
      question: 'What is the difference between class and function components?',
      answer: 'Class components: use this, lifecycle methods. Function components: use hooks, simpler, no this. React recommends function components with hooks.',
      difficulty: 'Easy',
      tags: ['components', 'react']
    },
    {
      id: 'react34',
      category: 'react',
      question: 'Explain React lifecycle methods.',
      answer: 'Class component lifecycle: mounting (constructor, render, componentDidMount), updating (shouldComponentUpdate, render, componentDidUpdate), unmounting (componentWillUnmount).',
      difficulty: 'Medium',
      tags: ['lifecycle', 'react']
    },
    {
      id: 'react35',
      category: 'react',
      question: 'What is React strict mode?',
      answer: '<React.StrictMode> enables additional checks and warnings. Identifies unsafe lifecycle methods, legacy API usage, unexpected side effects.',
      difficulty: 'Medium',
      tags: ['strict-mode', 'react']
    },
    {
      id: 'react36',
      category: 'react',
      question: 'Explain React testing.',
      answer: 'React Testing Library for testing components. Jest as test runner. Test user interactions, not implementation details. Mock APIs, context.',
      difficulty: 'Medium',
      tags: ['testing', 'react']
    },
    {
      id: 'react37',
      category: 'react',
      question: 'What are React portals used for?',
      answer: 'Portals for modals, tooltips, dropdowns, loading overlays. Break out of parent CSS constraints (overflow: hidden, z-index).',
      difficulty: 'Medium',
      tags: ['portals', 'react']
    },
    {
      id: 'react38',
      category: 'react',
      question: 'Explain React code splitting.',
      answer: 'Code splitting splits bundle into smaller chunks. Methods: React.lazy(), import() dynamic imports, route-based splitting. Improves initial load time.',
      difficulty: 'Medium',
      tags: ['performance', 'react']
    },
    {
      id: 'react39',
      category: 'react',
      question: 'What is React suspense for data fetching?',
      answer: 'Experimental feature. Components "suspend" while fetching data. Requires integration with data fetching libraries (Relay, SWR, React Query).',
      difficulty: 'Hard',
      tags: ['suspense', 'react']
    },
    {
      id: 'react40',
      category: 'react',
      question: 'Explain React useLayoutEffect.',
      answer: 'useLayoutEffect fires synchronously after DOM mutations but before paint. Use for DOM measurements, animations. Prefer useEffect for most cases.',
      difficulty: 'Hard',
      tags: ['hooks', 'react']
    },
    {
      id: 'react41',
      category: 'react',
      question: 'What is React forwardRef?',
      answer: 'forwardRef forwards ref through component to child. Allows parent to access child\'s DOM node. Useful for reusable components.',
      difficulty: 'Medium',
      tags: ['refs', 'react']
    },
    {
      id: 'react42',
      category: 'react',
      question: 'Explain React useImperativeHandle.',
      answer: 'useImperativeHandle customizes instance value exposed to parent when using ref. Use with forwardRef. Expose specific methods instead of DOM node.',
      difficulty: 'Hard',
      tags: ['hooks', 'react']
    },
    {
      id: 'react43',
      category: 'react',
      question: 'What are React portals limitations?',
      answer: 'Portals still exist in React tree (events bubble through portal). Need to handle focus management, accessibility, styling context.',
      difficulty: 'Hard',
      tags: ['portals', 'react']
    },
    {
      id: 'react44',
      category: 'react',
      question: 'Explain React error boundary limitations.',
      answer: 'Error boundaries don\'t catch errors in: event handlers, async code, server-side rendering, errors within error boundary itself.',
      difficulty: 'Medium',
      tags: ['error-handling', 'react']
    },
    {
      id: 'react45',
      category: 'react',
      question: 'What is React children prop?',
      answer: 'children prop contains content between component tags. Can be single element, multiple elements, text, or function (render prop).',
      difficulty: 'Easy',
      tags: ['props', 'react']
    },
    {
      id: 'react46',
      category: 'react',
      question: 'Explain React default props.',
      answer: 'defaultProps provides default values for props. Static defaultProps property. With function components, use default parameters.',
      difficulty: 'Easy',
      tags: ['props', 'react']
    },
    {
      id: 'react47',
      category: 'react',
      question: 'What is React pure component?',
      answer: 'PureComponent implements shouldComponentUpdate with shallow prop/state comparison. Prevents unnecessary re-renders. Function component equivalent: React.memo.',
      difficulty: 'Medium',
      tags: ['performance', 'react']
    },
    {
      id: 'react48',
      category: 'react',
      question: 'Explain React createPortal vs render.',
      answer: 'createPortal renders to different DOM node but stays in React tree. render mounts new React tree. Portals maintain context, event bubbling.',
      difficulty: 'Hard',
      tags: ['portals', 'react']
    },
    {
      id: 'react49',
      category: 'react',
      question: 'What is React suspense fallback?',
      answer: 'Suspense fallback shows while child components are loading. Can be spinner, skeleton, placeholder. Multiple Suspense boundaries for granular loading.',
      difficulty: 'Medium',
      tags: ['suspense', 'react']
    },
    {
      id: 'react50',
      category: 'react',
      question: 'Explain React transition updates.',
      answer: 'useTransition marks updates as non-urgent. Returns isPending boolean. Urgent updates (typing) interrupt transition updates (filtering list).',
      difficulty: 'Hard',
      tags: ['concurrent', 'react']
    },

    // =============== TypeScript - 50 Questions ===============
    {
      id: 'ts1',
      category: 'typescript',
      question: 'What is TypeScript and why use it?',
      answer: 'TypeScript is a superset of JavaScript that adds static typing. Benefits: catch errors at compile time, better IDE support, improved code documentation, easier refactoring, better collaboration in large teams.',
      difficulty: 'Easy',
      tags: ['basics', 'typescript']
    },
    {
      id: 'ts2',
      category: 'typescript',
      question: 'How to install and set up TypeScript?',
      answer: 'Install via npm: npm install -g typescript. Create tsconfig.json: tsc --init. Compile TypeScript: tsc filename.ts. Run in development: npx tsc --watch.',
      difficulty: 'Easy',
      tags: ['setup', 'typescript']
    },
    {
      id: 'ts3',
      category: 'typescript',
      question: 'What are the basic types in TypeScript?',
      answer: 'Primitives: string, number, boolean, null, undefined, symbol, bigint. Special types: any, unknown, never, void. Object types: object, array, tuple, enum, function.',
      difficulty: 'Easy',
      tags: ['types', 'basics', 'typescript']
    },
    {
      id: 'ts4',
      category: 'typescript',
      question: 'What is type inference in TypeScript?',
      answer: 'TypeScript automatically infers types when not explicitly annotated. Example: let x = 10 infers x as number. Helps reduce verbosity while maintaining type safety.',
      difficulty: 'Easy',
      tags: ['type-inference', 'typescript']
    },
    {
      id: 'ts5',
      category: 'typescript',
      question: 'How to declare variables with types?',
      answer: 'Syntax: let name: string = "John"; const age: number = 25; var isActive: boolean = true;. Type can be explicitly declared or inferred.',
      difficulty: 'Easy',
      tags: ['variables', 'typescript']
    },
    {
      id: 'ts6',
      category: 'typescript',
      question: 'What is the "any" type and when to use it?',
      answer: 'The "any" type disables type checking. Use when: migrating from JavaScript, working with dynamic content, or when type is unknown. Avoid when possible for type safety.',
      difficulty: 'Easy',
      tags: ['any', 'types', 'typescript']
    },
    {
      id: 'ts7',
      category: 'typescript',
      question: 'What is the "unknown" type?',
      answer: '"unknown" is a type-safe counterpart of "any". Variables of type "unknown" must be type-checked before use. Safer than "any" because it forces type checking.',
      difficulty: 'Easy',
      tags: ['unknown', 'types', 'typescript']
    },
    {
      id: 'ts8',
      category: 'typescript',
      question: 'What is the "never" type?',
      answer: '"never" represents values that never occur. Used for: functions that always throw errors, infinite loops, or exhaustive type checking in switch statements.',
      difficulty: 'Easy',
      tags: ['never', 'types', 'typescript']
    },
    {
      id: 'ts9',
      category: 'typescript',
      question: 'What is the "void" type?',
      answer: '"void" represents the absence of a value. Used for functions that don\'t return anything. In JavaScript, these functions return undefined, but void is more explicit.',
      difficulty: 'Easy',
      tags: ['void', 'types', 'typescript']
    },
    {
      id: 'ts10',
      category: 'typescript',
      question: 'How to create typed arrays in TypeScript?',
      answer: 'Two ways: 1) let numbers: number[] = [1, 2, 3]; 2) let names: Array<string> = ["Alice", "Bob"];. Both define arrays with specific element types.',
      difficulty: 'Easy',
      tags: ['arrays', 'typescript']
    },
    {
      id: 'ts11',
      category: 'typescript',
      question: 'What are tuples in TypeScript?',
      answer: 'Tuples are arrays with fixed number of elements where each element has a known type. Example: let person: [string, number] = ["John", 30];',
      difficulty: 'Easy',
      tags: ['tuples', 'typescript']
    },
    {
      id: 'ts12',
      category: 'typescript',
      question: 'How to create enums in TypeScript?',
      answer: 'enum Direction { Up = 1, Down, Left, Right }. By default, enums start at 0. Can also use string enums: enum Color { Red = "RED", Blue = "BLUE" }',
      difficulty: 'Easy',
      tags: ['enums', 'typescript']
    },
    {
      id: 'ts13',
      category: 'typescript',
      question: 'What are type aliases?',
      answer: 'Type aliases create custom names for types: type Point = { x: number; y: number }; type ID = string | number;. Makes code more readable and reusable.',
      difficulty: 'Easy',
      tags: ['type-aliases', 'typescript']
    },
    {
      id: 'ts14',
      category: 'typescript',
      question: 'How to define function types?',
      answer: 'function greet(name: string): string { return `Hello ${name}`; }. Arrow functions: const add = (a: number, b: number): number => a + b;',
      difficulty: 'Easy',
      tags: ['functions', 'typescript']
    },
    {
      id: 'ts15',
      category: 'typescript',
      question: 'What are optional parameters?',
      answer: 'Use ? to make parameters optional: function greet(name?: string) { ... }. Optional parameters must come after required parameters.',
      difficulty: 'Easy',
      tags: ['parameters', 'functions', 'typescript']
    },
    {
      id: 'ts16',
      category: 'typescript',
      question: 'Difference between "interface" and "type"?',
      answer: 'Interfaces: can be extended (extends), implemented (implements), merged (declaration merging). Types: can represent primitives, unions, intersections, tuples. Generally use interface for objects, type for unions.',
      difficulty: 'Medium',
      tags: ['interface', 'type', 'typescript']
    },
    {
      id: 'ts17',
      category: 'typescript',
      question: 'What is union type?',
      answer: 'Union type allows a variable to be one of several types: let id: string | number;. TypeScript will only allow operations that are valid for every type in the union.',
      difficulty: 'Medium',
      tags: ['union-types', 'typescript']
    },
    {
      id: 'ts18',
      category: 'typescript',
      question: 'What is intersection type?',
      answer: 'Intersection type combines multiple types into one: type Admin = Employee & Manager;. The resulting type has all properties from all intersected types.',
      difficulty: 'Medium',
      tags: ['intersection-types', 'typescript']
    },
    {
      id: 'ts19',
      category: 'typescript',
      question: 'How to use type assertions?',
      answer: 'Type assertions tell TypeScript about the type of a value: let value: any = "hello"; let str: string = value as string;. Alternative syntax: <string>value (not allowed in JSX).',
      difficulty: 'Medium',
      tags: ['type-assertions', 'typescript']
    },
    {
      id: 'ts20',
      category: 'typescript',
      question: 'What are generics in TypeScript?',
      answer: 'Generics create reusable components that work with multiple types: function identity<T>(arg: T): T { return arg; }. Provides type safety without losing flexibility.',
      difficulty: 'Medium',
      tags: ['generics', 'typescript']
    },
    {
      id: 'ts21',
      category: 'typescript',
      question: 'What are utility types in TypeScript?',
      answer: 'Built-in type transformations: Partial<T>, Required<T>, Readonly<T>, Pick<T,K>, Omit<T,K>, Record<K,T>, Exclude<T,U>, Extract<T,U>, NonNullable<T>, Parameters<T>, ReturnType<T>.',
      difficulty: 'Medium',
      tags: ['utility-types', 'typescript']
    },
    {
      id: 'ts22',
      category: 'typescript',
      question: 'Explain Partial<T> utility type',
      answer: 'Partial<T> makes all properties of T optional: type PartialUser = Partial<User>;. Useful for update operations where you might only update some fields.',
      difficulty: 'Medium',
      tags: ['utility-types', 'partial', 'typescript']
    },
    {
      id: 'ts23',
      category: 'typescript',
      question: 'Explain Pick<T, K> and Omit<T, K>',
      answer: 'Pick selects subset of properties: type NameOnly = Pick<User, "name">;. Omit removes properties: type WithoutId = Omit<User, "id">;. Both create new types.',
      difficulty: 'Medium',
      tags: ['utility-types', 'pick', 'omit', 'typescript']
    },
    {
      id: 'ts24',
      category: 'typescript',
      question: 'What is the "keyof" operator?',
      answer: 'keyof gets the keys of a type as a union: type Keys = keyof User; // "id" | "name" | "email". Useful for creating type-safe property access.',
      difficulty: 'Medium',
      tags: ['keyof', 'operators', 'typescript']
    },
    {
      id: 'ts25',
      category: 'typescript',
      question: 'What is "typeof" operator in TypeScript?',
      answer: 'typeof gets the type of a value: let x = { a: 1 }; type X = typeof x; // { a: number }. Can be used to extract types from values.',
      difficulty: 'Medium',
      tags: ['typeof', 'operators', 'typescript']
    },
    {
      id: 'ts26',
      category: 'typescript',
      question: 'How to create indexed types?',
      answer: 'Access types using index: type PropType = User["name"]; // string. Can also use with keyof: type Values = User[keyof User]; // union of all property types.',
      difficulty: 'Medium',
      tags: ['indexed-types', 'typescript']
    },
    {
      id: 'ts27',
      category: 'typescript',
      question: 'What are mapped types?',
      answer: 'Mapped types create new types by transforming properties: type Readonly<T> = { readonly [P in keyof T]: T[P]; };. Common patterns: Partial, Required, Readonly.',
      difficulty: 'Medium',
      tags: ['mapped-types', 'typescript']
    },
    {
      id: 'ts28',
      category: 'typescript',
      question: 'What are conditional types?',
      answer: 'Conditional types select types based on conditions: type IsString<T> = T extends string ? true : false;. Uses extends keyword and ternary syntax.',
      difficulty: 'Medium',
      tags: ['conditional-types', 'typescript']
    },
    {
      id: 'ts29',
      category: 'typescript',
      question: 'Explain the "infer" keyword',
      answer: 'infer extracts a type within conditional types: type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;. Used to extract types from other types.',
      difficulty: 'Hard',
      tags: ['infer', 'conditional-types', 'typescript']
    },
    {
      id: 'ts30',
      category: 'typescript',
      question: 'What are template literal types?',
      answer: 'Template literal types manipulate string types: type Event = "click" | "scroll"; type Handler = `on${Event}`; // "onclick" | "onscroll". Powerful for string manipulation.',
      difficulty: 'Hard',
      tags: ['template-literals', 'typescript']
    },
    {
      id: 'ts31',
      category: 'typescript',
      question: 'How to handle null and undefined in TypeScript?',
      answer: 'Enable strictNullChecks in tsconfig. Use union types: string | null | undefined. Optional chaining: obj?.prop. Nullish coalescing: value ?? defaultValue.',
      difficulty: 'Medium',
      tags: ['null', 'undefined', 'typescript']
    },
    {
      id: 'ts32',
      category: 'typescript',
      question: 'What are declaration files (.d.ts)?',
      answer: 'Declaration files provide type information for JavaScript libraries. Contain type declarations without implementation. Can be global or module-specific.',
      difficulty: 'Medium',
      tags: ['declaration-files', 'typescript']
    },
    {
      id: 'ts33',
      category: 'typescript',
      question: 'How to use third-party JavaScript libraries in TypeScript?',
      answer: 'Install type definitions: npm install @types/library-name. If types not available, create custom declaration file or use declare module "library-name";.',
      difficulty: 'Medium',
      tags: ['third-party', 'typescript']
    },
    {
      id: 'ts34',
      category: 'typescript',
      question: 'What are ambient declarations?',
      answer: 'Ambient declarations tell TypeScript about variables that exist in the global scope: declare const API_KEY: string; declare function myLib(param: string): void;',
      difficulty: 'Medium',
      tags: ['ambient-declarations', 'typescript']
    },
    {
      id: 'ts35',
      category: 'typescript',
      question: 'How to create namespaces in TypeScript?',
      answer: 'Namespaces organize code: namespace Geometry { export class Circle { ... } }. Can be split across files. Alternative: use ES6 modules.',
      difficulty: 'Medium',
      tags: ['namespaces', 'typescript']
    },
    {
      id: 'ts36',
      category: 'typescript',
      question: 'What is declaration merging?',
      answer: 'TypeScript merges multiple declarations of the same name. Works with interfaces, namespaces, functions, enums. Example: interface User { name: string; } interface User { age: number; } merges to { name: string; age: number; }',
      difficulty: 'Hard',
      tags: ['declaration-merging', 'typescript']
    },
    {
      id: 'ts37',
      category: 'typescript',
      question: 'Explain mixins in TypeScript',
      answer: 'Mixins create classes from multiple base classes. Use helper function with intersection types: applyMixins(Class, [Base1, Base2]);. Alternative: use composition.',
      difficulty: 'Hard',
      tags: ['mixins', 'typescript']
    },
    {
      id: 'ts38',
      category: 'typescript',
      question: 'What are decorators in TypeScript?',
      answer: 'Decorators modify classes/methods: @sealed class Greeter { ... }. Experimental feature. Common in frameworks like Angular, NestJS. Used for logging, validation, DI.',
      difficulty: 'Hard',
      tags: ['decorators', 'typescript']
    },
    {
      id: 'ts39',
      category: 'typescript',
      question: 'How to use async/await with TypeScript?',
      answer: 'Async functions return Promise<T>: async function fetchData(): Promise<Data> { ... }. Use try/catch for error handling. Return type can be Promise<void> for no value.',
      difficulty: 'Medium',
      tags: ['async', 'await', 'typescript']
    },
    {
      id: 'ts40',
      category: 'typescript',
      question: 'What are branded/nominal types?',
      answer: 'Branded types create unique types using intersection: type UserId = string & { readonly brand: unique symbol };. Helps prevent mixing different string types.',
      difficulty: 'Hard',
      tags: ['branded-types', 'nominal-types', 'typescript']
    },
    {
      id: 'ts41',
      category: 'typescript',
      question: 'Explain variance in TypeScript',
      answer: 'Variance describes how subtyping works with complex types. Covariance: preserves subtyping (functions return types). Contravariance: reverses subtyping (function parameters). Invariance: neither.',
      difficulty: 'Hard',
      tags: ['variance', 'typescript']
    },
    {
      id: 'ts42',
      category: 'typescript',
      question: 'What are conditional type constraints?',
      answer: 'Conditional type constraints restrict which types can be used: type Extract<T, U> = T extends U ? T : never;. Filters types that extend U.',
      difficulty: 'Hard',
      tags: ['conditional-types', 'constraints', 'typescript']
    },
    {
      id: 'ts43',
      category: 'typescript',
      question: 'How to create recursive types?',
      answer: 'Recursive types reference themselves: type Tree<T> = { value: T; children: Tree<T>[]; }. Useful for hierarchical data. TypeScript has recursion limits.',
      difficulty: 'Hard',
      tags: ['recursive-types', 'typescript']
    },
    {
      id: 'ts44',
      category: 'typescript',
      question: 'What are template literal inference?',
      answer: 'Extract parts from template literal types: type Parse<S> = S extends `${infer T}` ? T : never; type A = Parse<"hello">; // "hello". Powerful for parsing strings.',
      difficulty: 'Hard',
      tags: ['template-literals', 'inference', 'typescript']
    },
    {
      id: 'ts45',
      category: 'typescript',
      question: 'Explain mapped type modifiers',
      answer: 'Mapped type modifiers add/remove readonly and optional: -readonly, -?, +readonly, +?. Example: type Mutable<T> = { -readonly [P in keyof T]: T[P]; } makes all properties mutable.',
      difficulty: 'Hard',
      tags: ['mapped-types', 'modifiers', 'typescript']
    },
    {
      id: 'ts46',
      category: 'typescript',
      question: 'What are string literal types?',
      answer: 'String literal types must be specific strings: type Direction = "up" | "down" | "left" | "right";. Provides type safety for specific string values.',
      difficulty: 'Medium',
      tags: ['string-literals', 'typescript']
    },
    {
      id: 'ts47',
      category: 'typescript',
      question: 'How to create type-safe dictionaries?',
      answer: 'Use Record type: type Dict = Record<string, number>;. Or index signature: type Dict = { [key: string]: number; }. Provides type safety for dynamic keys.',
      difficulty: 'Medium',
      tags: ['dictionaries', 'record', 'typescript']
    },
    {
      id: 'ts48',
      category: 'typescript',
      question: 'What is contextual typing?',
      answer: 'TypeScript infers types from context: window.onclick = function(e) { ... }; // e inferred as MouseEvent. Common in callbacks, event handlers, React props.',
      difficulty: 'Medium',
      tags: ['contextual-typing', 'typescript']
    },
    {
      id: 'ts49',
      category: 'typescript',
      question: 'Explain const assertions',
      answer: 'Const assertions make values readonly: const arr = [1, 2] as const; // readonly [1, 2]. Prevents widening of literal types. Creates deeply readonly structure.',
      difficulty: 'Hard',
      tags: ['const-assertions', 'typescript']
    },
    {
      id: 'ts50',
      category: 'typescript',
      question: 'How to gradually migrate JavaScript to TypeScript?',
      answer: '1) Add tsconfig.json, 2) Rename .js to .ts, 3) Fix type errors incrementally, 4) Use @ts-check in JS files, 5) Enable strict options gradually, 6) Add type definitions for third-party libs.',
      difficulty: 'Hard',
      tags: ['migration', 'typescript']
    },

    // =============== Next.js - 50 Questions ===============
    {
      id: 'next1',
      category: 'nextjs',
      question: 'What is Next.js?',
      answer: 'Next.js is a React framework for production applications. It provides server-side rendering, static site generation, file-based routing, API routes, image optimization, and built-in CSS support.',
      difficulty: 'Easy',
      tags: ['basics', 'nextjs']
    },
    {
      id: 'next2',
      category: 'nextjs',
      question: 'How to create a Next.js project?',
      answer: 'Use create-next-app: npx create-next-app@latest or yarn create next-app. Follow prompts to choose TypeScript, ESLint, Tailwind CSS, and other options.',
      difficulty: 'Easy',
      tags: ['setup', 'nextjs']
    },
    {
      id: 'next3',
      category: 'nextjs',
      question: 'What is file-based routing in Next.js?',
      answer: 'Pages in the pages/ directory become routes automatically: pages/index.js → /, pages/about.js → /about, pages/blog/[slug].js → /blog/:slug. No configuration needed.',
      difficulty: 'Easy',
      tags: ['routing', 'nextjs']
    },
    {
      id: 'next4',
      category: 'nextjs',
      question: 'How to create dynamic routes?',
      answer: 'Use brackets for dynamic segments: pages/blog/[slug].js. Access parameters via router.query or getStaticProps context. For catch-all routes: pages/blog/[...slug].js.',
      difficulty: 'Easy',
      tags: ['routing', 'dynamic', 'nextjs']
    },
    {
      id: 'next5',
      category: 'nextjs',
      question: 'What is the difference between SSR and SSG?',
      answer: 'SSR (Server-Side Rendering): renders on each request using getServerSideProps. SSG (Static Site Generation): renders at build time using getStaticProps. SSR for dynamic content, SSG for performance.',
      difficulty: 'Easy',
      tags: ['ssr', 'ssg', 'nextjs']
    },
    {
      id: 'next6',
      category: 'nextjs',
      question: 'How to use getStaticProps?',
      answer: 'Export async function getStaticProps(context) { return { props: { data } } }. Runs at build time. Use for static content. Can revalidate with ISR.',
      difficulty: 'Easy',
      tags: ['data-fetching', 'ssg', 'nextjs']
    },
    {
      id: 'next7',
      category: 'nextjs',
      question: 'How to use getServerSideProps?',
      answer: 'Export async function getServerSideProps(context) { return { props: { data } } }. Runs on each request. Use for frequently updated or personalized content.',
      difficulty: 'Easy',
      tags: ['data-fetching', 'ssr', 'nextjs']
    },
    {
      id: 'next8',
      category: 'nextjs',
      question: 'What is getStaticPaths?',
      answer: 'Used with dynamic SSG to define which paths to pre-render. Export async function getStaticPaths() { return { paths: [...], fallback: true/false/blocking } }.',
      difficulty: 'Medium',
      tags: ['data-fetching', 'ssg', 'nextjs']
    },
    {
      id: 'next9',
      category: 'nextjs',
      question: 'How to create API routes?',
      answer: 'Files in pages/api/ become API endpoints. Export default function handler(req, res). Access via /api/filename. Supports REST and can connect to databases.',
      difficulty: 'Easy',
      tags: ['api', 'nextjs']
    },
    {
      id: 'next10',
      category: 'nextjs',
      question: 'What is the Image component?',
      answer: 'Next.js Image component automatically optimizes images: resizes, converts to WebP, lazy loads. Syntax: <Image src="/me.png" alt="Me" width={500} height={500} />',
      difficulty: 'Easy',
      tags: ['images', 'optimization', 'nextjs']
    },
    {
      id: 'next11',
      category: 'nextjs',
      question: 'How to add CSS in Next.js?',
      answer: 'Global CSS: import in _app.js. Component CSS: CSS Modules (.module.css), styled-jsx, styled-components, Tailwind CSS. Built-in Sass support.',
      difficulty: 'Easy',
      tags: ['css', 'styling', 'nextjs']
    },
    {
      id: 'next12',
      category: 'nextjs',
      question: 'What is the Link component?',
      answer: 'Link enables client-side navigation: import Link from next/link; <Link href="/about"><a>About</a></Link>. Prefetches pages in background. Better than <a> for SPA.',
      difficulty: 'Easy',
      tags: ['routing', 'link', 'nextjs']
    },
    {
      id: 'next13',
      category: 'nextjs',
      question: 'How to use the router?',
      answer: 'import { useRouter } from next/router; const router = useRouter(); router.push("/about"). Access query params: router.query.slug. Programmatic navigation.',
      difficulty: 'Easy',
      tags: ['routing', 'router', 'nextjs']
    },
    {
      id: 'next14',
      category: 'nextjs',
      question: 'What is the Head component?',
      answer: 'Head modifies document head: import Head from next/head; <Head><title>My Page</title></Head>. Can be used in any component. Multiple Head components merge.',
      difficulty: 'Easy',
      tags: ['seo', 'head', 'nextjs']
    },
    {
      id: 'next15',
      category: 'nextjs',
      question: 'How to deploy Next.js?',
      answer: 'Vercel (recommended, from creators), Netlify, AWS, Docker. For static sites: next export creates static files. Vercel provides optimal Next.js hosting.',
      difficulty: 'Easy',
      tags: ['deployment', 'nextjs']
    },
    {
      id: 'next16',
      category: 'nextjs',
      question: 'What is Incremental Static Regeneration (ISR)?',
      answer: 'ISR updates static content without rebuilding entire site. Add revalidate option to getStaticProps: revalidate: 60 (seconds). Pages regenerated in background.',
      difficulty: 'Medium',
      tags: ['isr', 'ssg', 'nextjs']
    },
    {
      id: 'next17',
      category: 'nextjs',
      question: 'Explain Next.js middleware',
      answer: 'Middleware runs before requests. Create middleware.js in root. Use for authentication, redirects, headers, A/B testing. Uses Edge Functions for low latency.',
      difficulty: 'Medium',
      tags: ['middleware', 'nextjs']
    },
    {
      id: 'next18',
      category: 'nextjs',
      question: 'What are Edge Functions?',
      answer: 'Edge Functions run at edge locations (closer to users). Faster than serverless functions. Used in middleware. Supports limited Node.js APIs.',
      difficulty: 'Medium',
      tags: ['edge-functions', 'nextjs']
    },
    {
      id: 'next19',
      category: 'nextjs',
      question: 'How to handle authentication in Next.js?',
      answer: 'NextAuth.js (recommended), Auth0, Firebase, custom with middleware, getServerSideProps. NextAuth provides OAuth, credentials, JWT, sessions.',
      difficulty: 'Medium',
      tags: ['authentication', 'security', 'nextjs']
    },
    {
      id: 'next20',
      category: 'nextjs',
      question: 'What is the App Router (Next.js 13+)?',
      answer: 'New routing system in app/ directory. React Server Components by default, nested layouts, streaming, improved loading states. Future of Next.js.',
      difficulty: 'Medium',
      tags: ['app-router', 'nextjs']
    },
    {
      id: 'next21',
      category: 'nextjs',
      question: 'Difference between Pages Router and App Router?',
      answer: 'Pages: file-based, simpler, stable. App: layouts, server components, streaming, better performance, React 18 features. App Router recommended for new projects.',
      difficulty: 'Medium',
      tags: ['app-router', 'pages-router', 'nextjs']
    },
    {
      id: 'next22',
      category: 'nextjs',
      question: 'What are React Server Components in Next.js?',
      answer: 'Server Components render on server, zero client bundle. Can access databases/files directly. Use .server.js extension. Client Components for interactivity.',
      difficulty: 'Hard',
      tags: ['server-components', 'react', 'nextjs']
    },
    {
      id: 'next23',
      category: 'nextjs',
      question: 'How to fetch data in App Router?',
      answer: 'Use async components: export default async function Page() { const data = await fetch(...) }. Or use React hooks in Client Components. Fetch is extended with caching.',
      difficulty: 'Medium',
      tags: ['data-fetching', 'app-router', 'nextjs']
    },
    {
      id: 'next24',
      category: 'nextjs',
      question: 'What are layouts in App Router?',
      answer: 'Layouts wrap pages and persist across navigation. Defined in app/layout.js. Can be nested. Share UI between pages without re-rendering.',
      difficulty: 'Medium',
      tags: ['layouts', 'app-router', 'nextjs']
    },
    {
      id: 'next25',
      category: 'nextjs',
      question: 'What is streaming SSR?',
      answer: 'Send HTML in chunks as it renders. Improves perceived performance. Use Suspense boundaries. In App Router, loading.js automatically creates Suspense.',
      difficulty: 'Hard',
      tags: ['streaming', 'ssr', 'nextjs']
    },
    {
      id: 'next26',
      category: 'nextjs',
      question: 'How to handle errors in Next.js?',
      answer: 'Error boundaries (React). App Router: error.js file for component errors. Pages Router: custom _error.js. Also use try/catch, error monitoring services.',
      difficulty: 'Medium',
      tags: ['error-handling', 'nextjs']
    },
    {
      id: 'next27',
      category: 'nextjs',
      question: 'What are loading states?',
      answer: 'App Router: loading.js file automatically wraps page in Suspense. Shows while data loads. Can be spinner, skeleton. Pages Router: use router.isFallback.',
      difficulty: 'Medium',
      tags: ['loading', 'suspense', 'nextjs']
    },
    {
      id: 'next28',
      category: 'nextjs',
      question: 'How to optimize fonts in Next.js?',
      answer: 'Use next/font: import { Inter } from next/font/google; const inter = Inter({ subsets: [latin] }). Self-hosts fonts, optimizes loading, removes layout shift.',
      difficulty: 'Medium',
      tags: ['fonts', 'optimization', 'nextjs']
    },
    {
      id: 'next29',
      category: 'nextjs',
      question: 'What is next/script?',
      answer: 'Optimizes third-party scripts: import Script from next/script; <Script src="..." strategy="lazyOnload" />. Strategies: beforeInteractive, afterInteractive, lazyOnload.',
      difficulty: 'Medium',
      tags: ['scripts', 'optimization', 'nextjs']
    },
    {
      id: 'next30',
      category: 'nextjs',
      question: 'How to internationalize (i18n) in Next.js?',
      answer: 'Built-in i18n routing in next.config.js. Or use libraries: next-i18next, next-intl. App Router has improved i18n support with parallel routes.',
      difficulty: 'Hard',
      tags: ['i18n', 'internationalization', 'nextjs']
    },
    {
      id: 'next31',
      category: 'nextjs',
      question: 'What is next/head vs next/document?',
      answer: 'Head: per page head modifications. Document: _document.js for entire app (HTML, body tags, lang attribute). Document runs once, Head per page.',
      difficulty: 'Medium',
      tags: ['head', 'document', 'nextjs']
    },
    {
      id: 'next32',
      category: 'nextjs',
      question: 'How to use environment variables?',
      answer: '.env.local file. Prefix with NEXT_PUBLIC_ for client-side access. Access: process.env.NEXT_PUBLIC_API_KEY. Built-in support, no dotenv needed.',
      difficulty: 'Easy',
      tags: ['environment-variables', 'nextjs']
    },
    {
      id: 'next33',
      category: 'nextjs',
      question: 'What is preview mode?',
      answer: 'Bypass static generation for draft content. Enable with API route: res.setPreviewData({}). Pages check preview mode: getStaticProps context.preview.',
      difficulty: 'Hard',
      tags: ['preview', 'nextjs']
    },
    {
      id: 'next34',
      category: 'nextjs',
      question: 'How to handle redirects?',
      answer: 'next.config.js: redirects: async () => [...]. Or middleware. Static redirects in config, dynamic in middleware or API routes.',
      difficulty: 'Medium',
      tags: ['redirects', 'nextjs']
    },
    {
      id: 'next35',
      category: 'nextjs',
      question: 'What are rewrites in Next.js?',
      answer: 'Map incoming request path to different destination. Configure in next.config.js. Proxy API requests, mask internal routes.',
      difficulty: 'Medium',
      tags: ['rewrites', 'nextjs']
    },
    {
      id: 'next36',
      category: 'nextjs',
      question: 'Explain Next.js caching strategies',
      answer: 'Multiple caches: ISR (static), client-side (SWR/React Query), CDN, image optimization cache, router cache (client-side navigation). Each has different invalidation.',
      difficulty: 'Hard',
      tags: ['caching', 'performance', 'nextjs']
    },
    {
      id: 'next37',
      category: 'nextjs',
      question: 'What is the router cache?',
      answer: 'Client-side cache of visited routes. Prefetching adds to cache. Improves navigation performance. Can be cleared manually or on hard refresh.',
      difficulty: 'Hard',
      tags: ['caching', 'router', 'nextjs']
    },
    {
      id: 'next38',
      category: 'nextjs',
      question: 'How to implement ISR with on-demand revalidation?',
      answer: 'Use res.revalidate(path) in API route. Trigger via webhook or button click. Creates fresh static page. Useful for CMS updates.',
      difficulty: 'Hard',
      tags: ['isr', 'revalidation', 'nextjs']
    },
    {
      id: 'next39',
      category: 'nextjs',
      question: 'What are React Server Actions?',
      answer: 'App Router feature. Server functions called from client components. No API route needed. Mutate data, revalidate cache. Experimental.',
      difficulty: 'Hard',
      tags: ['server-actions', 'app-router', 'nextjs']
    },
    {
      id: 'next40',
      category: 'nextjs',
      question: 'How to handle file uploads?',
      answer: 'API route with multer/formidable. Or use cloud services (Cloudinary, S3) with signed URLs. Next.js 13+ has improved file upload handling.',
      difficulty: 'Hard',
      tags: ['file-uploads', 'nextjs']
    },
    {
      id: 'next41',
      category: 'nextjs',
      question: 'Explain Next.js build process',
      answer: 'Phases: 1) Collect pages, 2) Compile, 3) SSG/SSR, 4) Bundle optimization, 5) Static export (if enabled). Uses webpack, SWC for faster compilation.',
      difficulty: 'Hard',
      tags: ['build', 'nextjs']
    },
    {
      id: 'next42',
      category: 'nextjs',
      question: 'What are partial prerendering?',
      answer: 'Experimental feature. Static shell with dynamic holes. Combines benefits of static and dynamic. Faster initial load with dynamic parts.',
      difficulty: 'Hard',
      tags: ['prerendering', 'experimental', 'nextjs']
    },
    {
      id: 'next43',
      category: 'nextjs',
      question: 'How to implement real-time features?',
      answer: 'WebSockets (Socket.io), Server-Sent Events, polling. Use API routes or separate WebSocket server. Next.js 13+ has better real-time support.',
      difficulty: 'Hard',
      tags: ['real-time', 'websockets', 'nextjs']
    },
    {
      id: 'next44',
      category: 'nextjs',
      question: 'What is TURBOPACK?',
      answer: 'Rust-based bundler (experimental). 700x faster than webpack for development. next --turbo. Future replacement for webpack in development.',
      difficulty: 'Hard',
      tags: ['turbopack', 'performance', 'nextjs']
    },
    {
      id: 'next45',
      category: 'nextjs',
      question: 'How to optimize bundle size?',
      answer: 'Code splitting, dynamic imports, analyze bundle (next bundle-analyzer), remove unused dependencies, optimize images, use next/dynamic for lazy loading.',
      difficulty: 'Medium',
      tags: ['optimization', 'bundle', 'nextjs']
    },
    {
      id: 'next46',
      category: 'nextjs',
      question: 'What are middleware matchers?',
      answer: 'Control which paths middleware runs on: export const config = { matcher: /dashboard/:path* }. Supports regex, arrays, negative lookahead.',
      difficulty: 'Medium',
      tags: ['middleware', 'matchers', 'nextjs']
    },
    {
      id: 'next47',
      category: 'nextjs',
      question: 'How to handle CORS in API routes?',
      answer: 'Set headers: res.setHeader(Access-Control-Allow-Origin, *);. Or use middleware. For complex CORS, use cors package.',
      difficulty: 'Medium',
      tags: ['cors', 'api', 'nextjs']
    },
    {
      id: 'next48',
      category: 'nextjs',
      question: 'What are React concurrent features in Next.js?',
      answer: 'useTransition, useDeferredValue with App Router. Enable with experimental.concurrentFeatures. Improves perceived performance.',
      difficulty: 'Hard',
      tags: ['concurrent', 'react', 'nextjs']
    },
    {
      id: 'next49',
      category: 'nextjs',
      question: 'How to implement A/B testing?',
      answer: 'Middleware for bucket assignment, feature flags, analytics integration. Vercel Experiments for built-in A/B testing. Also use Optimizely, Google Optimize.',
      difficulty: 'Hard',
      tags: ['ab-testing', 'nextjs']
    },
    {
      id: 'next50',
      category: 'nextjs',
      question: 'What are security best practices for Next.js?',
      answer: 'Validate inputs, use HTTPS, secure headers (next/headers), rate limiting, auth checks, dependency scanning, sanitize outputs, use CSP, avoid XSS.',
      difficulty: 'Hard',
      tags: ['security', 'nextjs']
    },

    // =============== Node.js - 50 Questions ===============
    {
      id: 'node1',
      category: 'nodejs',
      question: 'What is Node.js?',
      answer: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine. Uses event-driven, non-blocking I/O model. Single-threaded with event loop. Used for server-side development.',
      difficulty: 'Easy',
      tags: ['basics', 'nodejs']
    },
    {
      id: 'node2',
      category: 'nodejs',
      question: 'How does Node.js work?',
      answer: 'Node.js uses single-threaded event loop with libuv for I/O operations. Handles concurrent connections efficiently using non-blocking I/O and callbacks.',
      difficulty: 'Easy',
      tags: ['architecture', 'nodejs']
    },
    {
      id: 'node3',
      category: 'nodejs',
      question: 'What is npm?',
      answer: 'npm (Node Package Manager) is package manager for JavaScript. Manages dependencies, scripts, versions. Largest software registry. Also stands for Node Package Manager.',
      difficulty: 'Easy',
      tags: ['npm', 'nodejs']
    },
    {
      id: 'node4',
      category: 'nodejs',
      question: 'What is package.json?',
      answer: 'package.json is project manifest file. Contains: name, version, dependencies, scripts, engines, license, main entry point. npm uses it to manage packages.',
      difficulty: 'Easy',
      tags: ['package-json', 'nodejs']
    },
    {
      id: 'node5',
      category: 'nodejs',
      question: 'How to create a simple HTTP server?',
      answer: 'const http = require("http"); const server = http.createServer((req, res) => { res.end("Hello World"); }); server.listen(3000);',
      difficulty: 'Easy',
      tags: ['http', 'server', 'nodejs']
    },
    {
      id: 'node6',
      category: 'nodejs',
      question: 'What are Node.js modules?',
      answer: 'Modules are reusable code units. CommonJS modules: require() to import, module.exports to export. ES6 modules also supported with .mjs extension or package.json type field.',
      difficulty: 'Easy',
      tags: ['modules', 'nodejs']
    },
    {
      id: 'node7',
      category: 'nodejs',
      question: 'Difference between require and import?',
      answer: 'require: CommonJS, synchronous, can be called anywhere. import: ES6, asynchronous, must be at top level. Node.js supports both with proper configuration.',
      difficulty: 'Easy',
      tags: ['modules', 'nodejs']
    },
    {
      id: 'node8',
      category: 'nodejs',
      question: 'What is the global object in Node.js?',
      answer: 'global is Node.js global object (similar to window in browser). Contains built-ins: process, console, Buffer, __dirname, __filename, module, require.',
      difficulty: 'Easy',
      tags: ['global', 'nodejs']
    },
    {
      id: 'node9',
      category: 'nodejs',
      question: 'What is the process object?',
      answer: 'process provides info about current Node.js process: env, argv, cwd(), exit(), memoryUsage(), uptime(), pid, platform, version.',
      difficulty: 'Easy',
      tags: ['process', 'nodejs']
    },
    {
      id: 'node10',
      category: 'nodejs',
      question: 'How to read environment variables?',
      answer: 'process.env.VAR_NAME. Use dotenv package for .env files: require("dotenv").config();. Environment variables set before process starts.',
      difficulty: 'Easy',
      tags: ['environment-variables', 'nodejs']
    },
    {
      id: 'node11',
      category: 'nodejs',
      question: 'What are built-in modules in Node.js?',
      answer: 'fs (file system), path, http, https, events, stream, crypto, util, os, url, querystring, child_process, cluster, dns, net, readline, zlib.',
      difficulty: 'Easy',
      tags: ['modules', 'nodejs']
    },
    {
      id: 'node12',
      category: 'nodejs',
      question: 'How to read/write files?',
      answer: 'const fs = require("fs"); // Async: fs.readFile("file.txt", "utf8", (err, data) => {}); // Sync: const data = fs.readFileSync("file.txt", "utf8"); // Write: fs.writeFile()',
      difficulty: 'Easy',
      tags: ['fs', 'files', 'nodejs']
    },
    {
      id: 'node13',
      category: 'nodejs',
      question: 'What is the path module?',
      answer: 'path module handles file/directory paths: path.join(), path.resolve(), path.dirname(), path.extname(), path.basename(), path.parse(), path.format().',
      difficulty: 'Easy',
      tags: ['path', 'nodejs']
    },
    {
      id: 'node14',
      category: 'nodejs',
      question: 'How to create a directory?',
      answer: 'fs.mkdir("dirname", { recursive: true }, callback) or fs.mkdirSync(). recursive: true creates parent directories if needed.',
      difficulty: 'Easy',
      tags: ['fs', 'directories', 'nodejs']
    },
    {
      id: 'node15',
      category: 'nodejs',
      question: 'What is the console module?',
      answer: 'console provides debugging output: console.log(), console.error(), console.warn(), console.table(), console.time()/timeEnd(), console.trace(), console.assert().',
      difficulty: 'Easy',
      tags: ['console', 'nodejs']
    },
    {
      id: 'node16',
      category: 'nodejs',
      question: 'Explain Node.js event loop',
      answer: 'Event loop handles async operations. Phases: timers (setTimeout), pending callbacks, poll (I/O), check (setImmediate), close callbacks. Uses libuv for I/O.',
      difficulty: 'Medium',
      tags: ['event-loop', 'nodejs']
    },
    {
      id: 'node17',
      category: 'nodejs',
      question: 'What are timers in Node.js?',
      answer: 'Timers schedule code execution: setTimeout(callback, delay), setInterval(callback, interval), setImmediate(callback). Clear with clearTimeout(), clearInterval().',
      difficulty: 'Medium',
      tags: ['timers', 'nodejs']
    },
    {
      id: 'node18',
      category: 'nodejs',
      question: 'What are streams in Node.js?',
      answer: 'Streams handle data in chunks. Types: Readable (reading), Writable (writing), Duplex (both), Transform (modify data). Benefits: memory efficient, time efficient.',
      difficulty: 'Medium',
      tags: ['streams', 'nodejs']
    },
    {
      id: 'node19',
      category: 'nodejs',
      question: 'How to create a readable stream?',
      answer: 'const fs = require("fs"); const readable = fs.createReadStream("input.txt"); readable.on("data", chunk => console.log(chunk)); readable.on("end", () => console.log("Done"));',
      difficulty: 'Medium',
      tags: ['streams', 'nodejs']
    },
    {
      id: 'node20',
      category: 'nodejs',
      question: 'How to create a writable stream?',
      answer: 'const writable = fs.createWriteStream("output.txt"); writable.write("Hello"); writable.write("World"); writable.end();',
      difficulty: 'Medium',
      tags: ['streams', 'nodejs']
    },
    {
      id: 'node21',
      category: 'nodejs',
      question: 'What is piping?',
      answer: 'Piping connects readable stream to writable stream: readable.pipe(writable);. Handles backpressure automatically. Chain multiple streams.',
      difficulty: 'Medium',
      tags: ['streams', 'piping', 'nodejs']
    },
    {
      id: 'node22',
      category: 'nodejs',
      question: 'What are buffers?',
      answer: 'Buffer handles binary data. Fixed-size memory outside V8 heap. Buffer.from(), Buffer.alloc(), Buffer.allocUnsafe(). Convert between string and buffer.',
      difficulty: 'Medium',
      tags: ['buffer', 'nodejs']
    },
    {
      id: 'node23',
      category: 'nodejs',
      question: 'What is the events module?',
      answer: 'events module provides EventEmitter class for custom events. Methods: emitter.on(), emitter.emit(), emitter.once(), emitter.removeListener(), emitter.removeAllListeners().',
      difficulty: 'Medium',
      tags: ['events', 'nodejs']
    },
    {
      id: 'node24',
      category: 'nodejs',
      question: 'How to create a custom event emitter?',
      answer: 'const EventEmitter = require("events"); class MyEmitter extends EventEmitter {} const myEmitter = new MyEmitter(); myEmitter.on("event", () => console.log("Fired")); myEmitter.emit("event");',
      difficulty: 'Medium',
      tags: ['events', 'nodejs']
    },
    {
      id: 'node25',
      category: 'nodejs',
      question: 'What are worker threads?',
      answer: 'Worker threads run JavaScript in parallel threads. Share memory via SharedArrayBuffer. Use for CPU-intensive tasks. Separate from main thread.',
      difficulty: 'Hard',
      tags: ['worker-threads', 'nodejs']
    },
    {
      id: 'node26',
      category: 'nodejs',
      question: 'How to use worker threads?',
      answer: 'const { Worker } = require("worker_threads"); const worker = new Worker("./worker.js"); worker.postMessage(data); worker.on("message", result => console.log(result));',
      difficulty: 'Hard',
      tags: ['worker-threads', 'nodejs']
    },
    {
      id: 'node27',
      category: 'nodejs',
      question: 'What is the cluster module?',
      answer: 'Cluster module creates child processes (workers) sharing server ports. Master process distributes load. Improves CPU utilization for multi-core systems.',
      difficulty: 'Hard',
      tags: ['cluster', 'nodejs']
    },
    {
      id: 'node28',
      category: 'nodejs',
      question: 'How to create child processes?',
      answer: 'child_process.spawn(), exec(), execFile(), fork(). spawn for streaming data. exec for shell commands. fork creates new Node.js process.',
      difficulty: 'Hard',
      tags: ['child-process', 'nodejs']
    },
    {
      id: 'node29',
      category: 'nodejs',
      question: 'What is process.nextTick()?',
      answer: 'process.nextTick(callback) runs callback after current operation, before event loop continues. Higher priority than setImmediate. Can cause recursion issues.',
      difficulty: 'Hard',
      tags: ['nexttick', 'nodejs']
    },
    {
      id: 'node30',
      category: 'nodejs',
      question: 'Difference between setImmediate and process.nextTick?',
      answer: 'nextTick: microtask, runs before event loop phases. setImmediate: macrotask, runs in check phase. nextTick has higher priority.',
      difficulty: 'Hard',
      tags: ['nexttick', 'setimmediate', 'nodejs']
    },
    {
      id: 'node31',
      category: 'nodejs',
      question: 'What is the util module?',
      answer: 'util provides utility functions: promisify(), inherits(), format(), debuglog(), types.isArrayBuffer(), types.isDate(), etc.',
      difficulty: 'Medium',
      tags: ['util', 'nodejs']
    },
    {
      id: 'node32',
      category: 'nodejs',
      question: 'How to promisify callback functions?',
      answer: 'const { promisify } = require("util"); const readFile = promisify(fs.readFile); async function read() { const data = await readFile("file.txt"); }',
      difficulty: 'Medium',
      tags: ['promisify', 'nodejs']
    },
    {
      id: 'node33',
      category: 'nodejs',
      question: 'What is the crypto module?',
      answer: 'crypto provides cryptographic functions: hash, HMAC, cipher, decipher, sign, verify, random bytes, key generation, key exchange.',
      difficulty: 'Medium',
      tags: ['crypto', 'security', 'nodejs']
    },
    {
      id: 'node34',
      category: 'nodejs',
      question: 'How to hash a password?',
      answer: 'const crypto = require("crypto"); const hash = crypto.createHash("sha256").update(password).digest("hex");. For passwords, use bcrypt or argon2 instead.',
      difficulty: 'Medium',
      tags: ['crypto', 'hashing', 'nodejs']
    },
    {
      id: 'node35',
      category: 'nodejs',
      question: 'What is the os module?',
      answer: 'os module provides OS information: os.cpus(), os.totalmem(), os.freemem(), os.platform(), os.hostname(), os.arch(), os.type(), os.uptime().',
      difficulty: 'Medium',
      tags: ['os', 'nodejs']
    },
    {
      id: 'node36',
      category: 'nodejs',
      question: 'Explain Node.js memory management',
      answer: 'V8 uses generational garbage collection: young generation (Scavenge), old generation (Mark-Sweep-Compact). Memory leaks: global variables, forgotten timers, DOM references, event listeners.',
      difficulty: 'Hard',
      tags: ['memory', 'garbage-collection', 'nodejs']
    },
    {
      id: 'node37',
      category: 'nodejs',
      question: 'What is libuv?',
      answer: 'libuv is cross-platform async I/O library. Handles file system, DNS, network, pipes, polling, threading. Used by Node.js for event loop and async operations.',
      difficulty: 'Hard',
      tags: ['libuv', 'nodejs']
    },
    {
      id: 'node38',
      category: 'nodejs',
      question: 'How to debug Node.js applications?',
      answer: 'node --inspect, Chrome DevTools, VS Code debugger, console.log, debug module, APM tools (New Relic, Datadog), heap snapshots, CPU profiling.',
      difficulty: 'Hard',
      tags: ['debugging', 'nodejs']
    },
    {
      id: 'node39',
      category: 'nodejs',
      question: 'What are domain modules?',
      answer: 'Domains were error handling mechanism (deprecated). Use async_hooks instead. Domains provided way to group async operations and handle errors.',
      difficulty: 'Hard',
      tags: ['domains', 'nodejs']
    },
    {
      id: 'node40',
      category: 'nodejs',
      question: 'What are async_hooks?',
      answer: 'async_hooks tracks async resources lifecycle. Create context for async operations. Use for logging, monitoring, tracing. Replaces domains.',
      difficulty: 'Hard',
      tags: ['async-hooks', 'nodejs']
    },
    {
      id: 'node41',
      category: 'nodejs',
      question: 'How to implement caching?',
      answer: 'In-memory (node-cache), Redis, Memcached. Cache strategies: write-through, write-back, LRU, TTL. Use for API responses, session data, computed results.',
      difficulty: 'Hard',
      tags: ['caching', 'performance', 'nodejs']
    },
    {
      id: 'node42',
      category: 'nodejs',
      question: 'What are performance monitoring tools?',
      answer: 'Node.js built-in: perf_hooks, v8 module. External: New Relic, Datadog, PM2, clinic.js, node-clinic. Monitoring: metrics, tracing, logging, alerts.',
      difficulty: 'Hard',
      tags: ['performance', 'monitoring', 'nodejs']
    },
    {
      id: 'node43',
      category: 'nodejs',
      question: 'How to handle uncaught exceptions?',
      answer: 'process.on("uncaughtException", (err) => {}). Better: let process crash and restart (use PM2). Also handle unhandled rejections: process.on("unhandledRejection").',
      difficulty: 'Hard',
      tags: ['error-handling', 'nodejs']
    },
    {
      id: 'node44',
      category: 'nodejs',
      question: 'What is the REPL?',
      answer: 'REPL (Read-Eval-Print Loop) is interactive shell. Run node without arguments. Test code, debug, experiment. Supports multiline input, save/load sessions.',
      difficulty: 'Easy',
      tags: ['repl', 'nodejs']
    },
    {
      id: 'node45',
      category: 'nodejs',
      question: 'How to secure Node.js applications?',
      answer: 'Validate inputs, use Helmet, rate limiting, HTTPS, secure cookies, dependency scanning, least privilege, audit logs, security headers, avoid eval().',
      difficulty: 'Hard',
      tags: ['security', 'nodejs']
    },
    {
      id: 'node46',
      category: 'nodejs',
      question: 'What are Node.js bindings?',
      answer: 'Bindings are C++ addons using N-API. Extend Node.js with native code. Compiled with node-gyp. Used for performance-critical operations.',
      difficulty: 'Hard',
      tags: ['bindings', 'native-addons', 'nodejs']
    },
    {
      id: 'node47',
      category: 'nodejs',
      question: 'How to create native addons?',
      answer: 'Use N-API, write C++ code, create binding.gyp, compile with node-gyp, require in JavaScript. Provides interface between JavaScript and C++.',
      difficulty: 'Hard',
      tags: ['native-addons', 'nodejs']
    },
    {
      id: 'node48',
      category: 'nodejs',
      question: 'What is the V8 engine?',
      answer: 'V8 is Google\'s JavaScript engine. Compiles JS to machine code. Manages memory, garbage collection. Node.js built on V8. Features: JIT compilation, inline caching.',
      difficulty: 'Hard',
      tags: ['v8', 'nodejs']
    },
    {
      id: 'node49',
      category: 'nodejs',
      question: 'Explain Node.js garbage collection',
      answer: 'Generational GC: Scavenge (young generation, fast), Mark-Sweep-Compact (old generation, thorough). Flags: --max-old-space-size, --max-semi-space-size.',
      difficulty: 'Hard',
      tags: ['garbage-collection', 'memory', 'nodejs']
    },
    {
      id: 'node50',
      category: 'nodejs',
      question: 'How to profile Node.js applications?',
      answer: 'node --prof generates v8.log, process with node --prof-process. Use 0x for flamegraphs. Chrome DevTools CPU/memory profiling. clinic.js for diagnostics.',
      difficulty: 'Hard',
      tags: ['profiling', 'performance', 'nodejs']
    },

    // =============== MongoDB - 50 Questions ===============
    {
      id: 'mongo1',
      category: 'mongodb',
      question: 'What is MongoDB?',
      answer: 'MongoDB is a NoSQL document database. Stores data as JSON-like documents (BSON). Schema-less, horizontal scaling, flexible data model. Good for unstructured data.',
      difficulty: 'Easy',
      tags: ['basics', 'mongodb']
    },
    {
      id: 'mongo2',
      category: 'mongodb',
      question: 'Difference between SQL and NoSQL?',
      answer: 'SQL: tables, fixed schema, ACID transactions, vertical scaling. NoSQL: documents, flexible schema, BASE, horizontal scaling. MongoDB is document-based NoSQL.',
      difficulty: 'Easy',
      tags: ['nosql', 'mongodb']
    },
    {
      id: 'mongo3',
      category: 'mongodb',
      question: 'What are documents in MongoDB?',
      answer: 'Documents are basic unit of data (BSON - Binary JSON). Example: {_id: ObjectId(), name: "John", age: 30, address: {city: "NY", zip: "10001"}}. Can have nested structures.',
      difficulty: 'Easy',
      tags: ['documents', 'mongodb']
    },
    {
      id: 'mongo4',
      category: 'mongodb',
      question: 'What are collections?',
      answer: 'Collections are groups of documents (similar to tables in SQL). Documents in collection can have different structures. No schema enforcement at database level.',
      difficulty: 'Easy',
      tags: ['collections', 'mongodb']
    },
    {
      id: 'mongo5',
      category: 'mongodb',
      question: 'What are databases in MongoDB?',
      answer: 'Databases are containers for collections. Single MongoDB instance can host multiple databases. Each database has its own collections.',
      difficulty: 'Easy',
      tags: ['databases', 'mongodb']
    },
    {
      id: 'mongo6',
      category: 'mongodb',
      question: 'How to install MongoDB?',
      answer: 'Download from mongodb.com, use package managers (brew, apt, yum), or use Docker: docker run mongo. MongoDB Atlas for cloud (free tier available).',
      difficulty: 'Easy',
      tags: ['installation', 'mongodb']
    },
    {
      id: 'mongo7',
      category: 'mongodb',
      question: 'Basic CRUD operations in MongoDB?',
      answer: 'Create: insertOne(), insertMany(). Read: find(), findOne(). Update: updateOne(), updateMany(), replaceOne(). Delete: deleteOne(), deleteMany().',
      difficulty: 'Easy',
      tags: ['crud', 'mongodb']
    },
    {
      id: 'mongo8',
      category: 'mongodb',
      question: 'What is the _id field?',
      answer: '_id is unique identifier for document. Automatically created if not provided (ObjectId). Can be any type but must be unique within collection.',
      difficulty: 'Easy',
      tags: ['_id', 'mongodb']
    },
    {
      id: 'mongo9',
      category: 'mongodb',
      question: 'How to query documents?',
      answer: 'db.collection.find({age: {$gt: 18}}). Query operators: $eq, $ne, $gt, $lt, $gte, $lte, $in, $nin, $exists, $regex. Can combine with $and, $or.',
      difficulty: 'Easy',
      tags: ['queries', 'mongodb']
    },
    {
      id: 'mongo10',
      category: 'mongodb',
      question: 'What is projection?',
      answer: 'Projection selects specific fields: db.users.find({}, {name: 1, email: 1, _id: 0}). 1 includes field, 0 excludes. Reduces network traffic.',
      difficulty: 'Easy',
      tags: ['projection', 'mongodb']
    },
    {
      id: 'mongo11',
      category: 'mongodb',
      question: 'How to sort results?',
      answer: 'db.collection.find().sort({age: 1}) for ascending, sort({age: -1}) for descending. Can sort on multiple fields: sort({age: 1, name: -1}).',
      difficulty: 'Easy',
      tags: ['sort', 'mongodb']
    },
    {
      id: 'mongo12',
      category: 'mongodb',
      question: 'How to limit and skip?',
      answer: 'db.collection.find().limit(10).skip(20) for pagination. limit restricts number of documents. skip skips specified number of documents.',
      difficulty: 'Easy',
      tags: ['limit', 'skip', 'mongodb']
    },
    {
      id: 'mongo13',
      category: 'mongodb',
      question: 'What are update operators?',
      answer: '$set (set field), $unset (remove field), $inc (increment), $push (add to array), $pull (remove from array), $addToSet (add if not exists), $rename, $currentDate.',
      difficulty: 'Easy',
      tags: ['updates', 'mongodb']
    },
    {
      id: 'mongo14',
      category: 'mongodb',
      question: 'How to delete documents?',
      answer: 'db.collection.deleteOne({condition}) deletes first matching document. deleteMany({condition}) deletes all matching documents. remove() is deprecated.',
      difficulty: 'Easy',
      tags: ['delete', 'mongodb']
    },
    {
      id: 'mongo15',
      category: 'mongodb',
      question: 'What is MongoDB Atlas?',
      answer: 'MongoDB Atlas is cloud database service. Fully managed, auto-scaling, backup, monitoring, security. Free tier available. Deploy on AWS, Azure, Google Cloud.',
      difficulty: 'Easy',
      tags: ['atlas', 'cloud', 'mongodb']
    },
    {
      id: 'mongo16',
      category: 'mongodb',
      question: 'What are MongoDB indexes and why use them?',
      answer: 'Indexes improve query performance by creating ordered data structure. Types: single field, compound, multikey, text, geospatial, hashed. Trade-off: faster reads but slower writes and storage overhead.',
      difficulty: 'Medium',
      tags: ['indexes', 'performance', 'mongodb']
    },
    {
      id: 'mongo17',
      category: 'mongodb',
      question: 'How to create indexes in MongoDB?',
      answer: 'db.collection.createIndex({field: 1}) where 1 is ascending, -1 is descending. Background creation: {background: true}. Compound index: createIndex({name: 1, age: -1}).',
      difficulty: 'Medium',
      tags: ['indexes', 'mongodb']
    },
    {
      id: 'mongo18',
      category: 'mongodb',
      question: 'What is a compound index?',
      answer: 'Index on multiple fields: db.users.createIndex({name: 1, age: -1}). Field order matters (equality before range). Supports queries on prefix of indexed fields.',
      difficulty: 'Medium',
      tags: ['indexes', 'mongodb']
    },
    {
      id: 'mongo19',
      category: 'mongodb',
      question: 'What is a covered query?',
      answer: 'Query uses only indexed fields, no document fetch needed. Very fast. Example: db.users.find({name: "John"}, {_id: 0, name: 1}) with index on name.',
      difficulty: 'Medium',
      tags: ['performance', 'indexes', 'mongodb']
    },
    {
      id: 'mongo20',
      category: 'mongodb',
      question: 'What is explain() in MongoDB?',
      answer: 'explain() analyzes query performance: db.collection.find().explain("executionStats"). Shows winning plan, indexes used, documents examined, execution time.',
      difficulty: 'Medium',
      tags: ['performance', 'queries', 'mongodb']
    },
    {
      id: 'mongo21',
      category: 'mongodb',
      question: 'What are aggregation pipelines?',
      answer: 'Process documents through stages: $match (filter), $group (aggregate), $sort, $project (reshape), $lookup (join), $unwind (deconstruct array), $facet (multiple pipelines).',
      difficulty: 'Medium',
      tags: ['aggregation', 'mongodb']
    },
    {
      id: 'mongo22',
      category: 'mongodb',
      question: 'Explain $match stage in aggregation',
      answer: '$match filters documents: {$match: {status: "active"}}. Should be early in pipeline to reduce documents. Can use most query operators.',
      difficulty: 'Medium',
      tags: ['aggregation', 'mongodb']
    },
    {
      id: 'mongo23',
      category: 'mongodb',
      question: 'Explain $group stage in aggregation',
      answer: '$group groups documents by expression: {$group: {_id: "$category", total: {$sum: "$amount"}, avg: {$avg: "$price"}}}. _id defines grouping key.',
      difficulty: 'Medium',
      tags: ['aggregation', 'mongodb']
    },
    {
      id: 'mongo24',
      category: 'mongodb',
      question: 'What is $lookup stage?',
      answer: '$lookup performs left outer join: {$lookup: {from: "orders", localField: "_id", foreignField: "userId", as: "userOrders"}}. Joins collections.',
      difficulty: 'Medium',
      tags: ['aggregation', 'joins', 'mongodb']
    },
    {
      id: 'mongo25',
      category: 'mongodb',
      question: 'What is $unwind stage?',
      answer: '$unwind deconstructs array field: {$unwind: "$tags"} creates separate document for each array element. Use $unwind with $group for array analytics.',
      difficulty: 'Medium',
      tags: ['aggregation', 'mongodb']
    },
    {
      id: 'mongo26',
      category: 'mongodb',
      question: 'What are MongoDB transactions?',
      answer: 'Multi-document ACID transactions (v4.0+). Use session.startTransaction(), commitTransaction(), abortTransaction(). Works across collections, requires replica set.',
      difficulty: 'Hard',
      tags: ['transactions', 'mongodb']
    },
    // =============== MongoDB - 50 Questions ===============
    // Continuing from where it left off...
    {
      id: 'mongo27',
      category: 'mongodb',
      question: 'How to use transactions in MongoDB?',
      answer: 'const session = client.startSession(); session.startTransaction(); try { await collection1.insertOne(doc1, {session}); await collection2.updateOne(filter, update, {session}); await session.commitTransaction(); } catch { await session.abortTransaction(); } finally { session.endSession(); }',
      difficulty: 'Hard',
      tags: ['transactions', 'mongodb']
    },
    {
      id: 'mongo28',
      category: 'mongodb',
      question: 'What is replica set in MongoDB?',
      answer: 'Replica set provides high availability. Minimum 3 nodes: primary (handles writes), secondary (read-only copies), arbiter (votes only). Automatic failover if primary fails.',
      difficulty: 'Medium',
      tags: ['replication', 'high-availability', 'mongodb']
    },
    {
      id: 'mongo29',
      category: 'mongodb',
      question: 'What is sharding in MongoDB?',
      answer: 'Sharding partitions data across multiple servers (shards). Horizontal scaling for large datasets. Components: shards, config servers, mongos (query router).',
      difficulty: 'Hard',
      tags: ['sharding', 'scaling', 'mongodb']
    },
    {
      id: 'mongo30',
      category: 'mongodb',
      question: 'What are shard keys?',
      answer: 'Shard key determines data distribution across shards. Must be indexed. Types: hashed (uniform), ranged (sequential). Choose based on access patterns.',
      difficulty: 'Hard',
      tags: ['sharding', 'mongodb']
    },
    {
      id: 'mongo31',
      category: 'mongodb',
      question: 'What is write concern in MongoDB?',
      answer: 'Write concern defines acknowledgment level for write operations: {w: 1} (primary only), {w: majority}, {w: 2} (2 nodes), {j: true} (journaled). Balance durability vs performance.',
      difficulty: 'Medium',
      tags: ['write-concern', 'mongodb']
    },
    {
      id: 'mongo32',
      category: 'mongodb',
      question: 'What is read preference?',
      answer: 'Read preference controls where reads go: primary (default), primaryPreferred, secondary, secondaryPreferred, nearest. Use secondary for read scaling.',
      difficulty: 'Medium',
      tags: ['read-preference', 'mongodb']
    },
    {
      id: 'mongo33',
      category: 'mongodb',
      question: 'What is MongoDB Compass?',
      answer: 'MongoDB Compass is GUI for MongoDB. Visualize data, run queries, analyze schemas, create indexes, monitor performance. Free tool from MongoDB.',
      difficulty: 'Easy',
      tags: ['compass', 'gui', 'mongodb']
    },
    {
      id: 'mongo34',
      category: 'mongodb',
      question: 'What are MongoDB drivers?',
      answer: 'Drivers provide language-specific APIs. Official drivers: Node.js (mongodb), Python (pymongo), Java, C#, Ruby, PHP, Go, Rust. Community drivers also available.',
      difficulty: 'Easy',
      tags: ['drivers', 'mongodb']
    },
    {
      id: 'mongo35',
      category: 'mongodb',
      question: 'How to connect Node.js to MongoDB?',
      answer: 'Use mongodb driver: const { MongoClient } = require("mongodb"); const client = new MongoClient(uri); await client.connect(); const db = client.db(dbName);',
      difficulty: 'Easy',
      tags: ['nodejs', 'connection', 'mongodb']
    },
    {
      id: 'mongo36',
      category: 'mongodb',
      question: 'What is Mongoose ODM?',
      answer: 'Mongoose is Object Data Modeling library for MongoDB and Node.js. Provides schema validation, middleware, type casting, population (joins), business logic hooks.',
      difficulty: 'Medium',
      tags: ['mongoose', 'odm', 'mongodb']
    },
    {
      id: 'mongo37',
      category: 'mongodb',
      question: 'How to define a schema in Mongoose?',
      answer: 'const schema = new mongoose.Schema({ name: {type: String, required: true}, age: Number, email: {type: String, unique: true}, createdAt: {type: Date, default: Date.now} });',
      difficulty: 'Medium',
      tags: ['mongoose', 'schema', 'mongodb']
    },
    {
      id: 'mongo38',
      category: 'mongodb',
      question: 'What are Mongoose middleware?',
      answer: 'Middleware (hooks) run before/after operations: pre("save"), post("save"), pre("find"), post("find"). Use for validation, hashing passwords, logging.',
      difficulty: 'Medium',
      tags: ['mongoose', 'middleware', 'mongodb']
    },
    {
      id: 'mongo39',
      category: 'mongodb',
      question: 'What is population in Mongoose?',
      answer: 'Population replaces referenced document IDs with actual documents: .populate("userId"). Like JOIN in SQL. Stores references, not embedded documents.',
      difficulty: 'Medium',
      tags: ['mongoose', 'population', 'mongodb']
    },
    {
      id: 'mongo40',
      category: 'mongodb',
      question: 'What is virtual population?',
      answer: 'Virtual fields not stored in MongoDB, computed at runtime. For computed properties, formatting, or relationships without storing references.',
      difficulty: 'Hard',
      tags: ['mongoose', 'virtual', 'mongodb']
    },
    {
      id: 'mongo41',
      category: 'mongodb',
      question: 'How to handle relationships in MongoDB?',
      answer: '1) Embedded documents (one-to-few). 2) References (one-to-many, many-to-many). 3) Hybrid (subset embedded, rest referenced). Choose based on access patterns.',
      difficulty: 'Medium',
      tags: ['relationships', 'mongodb']
    },
    {
      id: 'mongo42',
      category: 'mongodb',
      question: 'When to embed vs reference?',
      answer: 'Embed: small subdocuments, frequent access together, rarely updated independently. Reference: large documents, many relationships, frequently updated independently.',
      difficulty: 'Medium',
      tags: ['data-modeling', 'mongodb']
    },
    {
      id: 'mongo43',
      category: 'mongodb',
      question: 'What is TTL index?',
      answer: 'TTL (Time To Live) index automatically removes documents after specified time: db.logs.createIndex({createdAt: 1}, {expireAfterSeconds: 3600}). For logs, sessions.',
      difficulty: 'Medium',
      tags: ['ttl', 'indexes', 'mongodb']
    },
    {
      id: 'mongo44',
      category: 'mongodb',
      question: 'What is text search in MongoDB?',
      answer: 'Text index supports text search: db.articles.createIndex({content: "text"}); db.articles.find({$text: {$search: "mongodb tutorial"}}). Supports multiple languages.',
      difficulty: 'Medium',
      tags: ['text-search', 'mongodb']
    },
    {
      id: 'mongo45',
      category: 'mongodb',
      question: 'What are geospatial queries?',
      answer: 'Query location data: 2dsphere index for spherical geometry. Operators: $near, $geoWithin, $geoIntersects. For location-based apps, maps.',
      difficulty: 'Medium',
      tags: ['geospatial', 'mongodb']
    },
    {
      id: 'mongo46',
      category: 'mongodb',
      question: 'How to backup MongoDB?',
      answer: 'mongodump for backup, mongorestore for restore. For replica sets: oplog backup. For Atlas: automated backups. Also use filesystem snapshots.',
      difficulty: 'Medium',
      tags: ['backup', 'mongodb']
    },
    {
      id: 'mongo47',
      category: 'mongodb',
      question: 'What is MongoDB Atlas Search?',
      answer: 'Full-text search built on Apache Lucene. More features than built-in text search: fuzzy search, synonyms, autocomplete, highlighting. Atlas feature.',
      difficulty: 'Hard',
      tags: ['atlas-search', 'mongodb']
    },
    {
      id: 'mongo48',
      category: 'mongodb',
      question: 'What is change streams?',
      answer: 'Change streams listen for data changes in real-time: db.collection.watch(). Returns change events: insert, update, replace, delete. For reactive applications.',
      difficulty: 'Hard',
      tags: ['change-streams', 'mongodb']
    },
    {
      id: 'mongo49',
      category: 'mongodb',
      question: 'How to monitor MongoDB?',
      answer: 'mongostat, mongotop, db.serverStatus(), db.currentOp(), MongoDB Compass, Atlas metrics, Ops Manager, Cloud Manager, third-party tools (Datadog, New Relic).',
      difficulty: 'Medium',
      tags: ['monitoring', 'mongodb']
    },
    {
      id: 'mongo50',
      category: 'mongodb',
      question: 'What are MongoDB security features?',
      answer: 'Authentication, authorization (RBAC), encryption at rest, TLS/SSL, auditing, field-level encryption, network isolation, IP whitelisting, VPC peering.',
      difficulty: 'Hard',
      tags: ['security', 'mongodb']
    },

    // =============== Express.js - 50 Questions ===============
    {
      id: 'express1',
      category: 'express',
      question: 'What is Express.js?',
      answer: 'Express.js is minimal, flexible Node.js web application framework. Provides robust features for web and mobile applications: routing, middleware, template engines.',
      difficulty: 'Easy',
      tags: ['basics', 'express']
    },
    {
      id: 'express2',
      category: 'express',
      question: 'How to create Express server?',
      answer: 'const express = require("express"); const app = express(); const port = 3000; app.get("/", (req, res) => res.send("Hello World")); app.listen(port, () => console.log(`Listening on port ${port}`));',
      difficulty: 'Easy',
      tags: ['server', 'express']
    },
    {
      id: 'express3',
      category: 'express',
      question: 'What are Express routes?',
      answer: 'Routes define endpoints: app.METHOD(PATH, HANDLER). Methods: GET, POST, PUT, DELETE, PATCH, all (any). Handler receives req, res, next.',
      difficulty: 'Easy',
      tags: ['routing', 'express']
    },
    {
      id: 'express4',
      category: 'express',
      question: 'How to handle route parameters?',
      answer: 'Define with colon: app.get("/users/:id", (req, res) => { const userId = req.params.id; }). Access via req.params. Can have multiple params.',
      difficulty: 'Easy',
      tags: ['routing', 'express']
    },
    {
      id: 'express5',
      category: 'express',
      question: 'How to handle query parameters?',
      answer: 'Access via req.query object: app.get("/search", (req, res) => { const query = req.query.q; const page = req.query.page || 1; }). URL: /search?q=express&page=2.',
      difficulty: 'Easy',
      tags: ['routing', 'express']
    },
    {
      id: 'express6',
      category: 'express',
      question: 'How to parse request body?',
      answer: 'Use middleware: app.use(express.json()) for JSON, app.use(express.urlencoded({extended: true})) for URL-encoded. Access via req.body.',
      difficulty: 'Easy',
      tags: ['middleware', 'express']
    },
    {
      id: 'express7',
      category: 'express',
      question: 'What is middleware in Express?',
      answer: 'Middleware are functions with access to req, res, next. Execute code, modify req/res, end request-response cycle, call next middleware. Order matters.',
      difficulty: 'Medium',
      tags: ['middleware', 'express']
    },
    {
      id: 'express8',
      category: 'express',
      question: 'How to create custom middleware?',
      answer: 'const logger = (req, res, next) => { console.log(`${req.method} ${req.url}`); next(); }; app.use(logger);. Must call next() to pass control.',
      difficulty: 'Medium',
      tags: ['middleware', 'express']
    },
    {
      id: 'express9',
      category: 'express',
      question: 'What are error handling middleware?',
      answer: 'Middleware with 4 parameters: (err, req, res, next). Define after routes: app.use((err, req, res, next) => { res.status(500).send("Error"); });',
      difficulty: 'Medium',
      tags: ['error-handling', 'express']
    },
    {
      id: 'express10',
      category: 'express',
      question: 'How to serve static files?',
      answer: 'app.use(express.static("public"));. Serves files from "public" directory. Multiple static directories allowed. Use path: __dirname + "/public".',
      difficulty: 'Easy',
      tags: ['static-files', 'express']
    },
    {
      id: 'express11',
      category: 'express',
      question: 'How to use template engines?',
      answer: 'Set view engine: app.set("view engine", "ejs"); Set views directory: app.set("views", "./views"); Render: res.render("index", {title: "Home"});',
      difficulty: 'Easy',
      tags: ['templates', 'express']
    },
    {
      id: 'express12',
      category: 'express',
      question: 'What is Router()?',
      answer: 'const router = express.Router(); creates modular route handlers. Define routes on router, then app.use("/users", router). For organizing routes.',
      difficulty: 'Medium',
      tags: ['routing', 'express']
    },
    {
      id: 'express13',
      category: 'express',
      question: 'How to handle CORS?',
      answer: 'Use cors middleware: const cors = require("cors"); app.use(cors());. Configure options: app.use(cors({origin: "http://example.com"}));',
      difficulty: 'Easy',
      tags: ['cors', 'express']
    },
    {
      id: 'express14',
      category: 'express',
      question: 'How to handle cookies?',
      answer: 'Use cookie-parser middleware: const cookieParser = require("cookie-parser"); app.use(cookieParser());. Set: res.cookie("name", "value", options). Read: req.cookies.',
      difficulty: 'Medium',
      tags: ['cookies', 'express']
    },
    {
      id: 'express15',
      category: 'express',
      question: 'How to handle sessions?',
      answer: 'Use express-session: const session = require("express-session"); app.use(session({secret: "key", resave: false, saveUninitialized: false})). Access: req.session.',
      difficulty: 'Medium',
      tags: ['sessions', 'express']
    },
    {
      id: 'express16',
      category: 'express',
      question: 'How to upload files?',
      answer: 'Use multer middleware: const multer = require("multer"); const upload = multer({dest: "uploads/"}); app.post("/upload", upload.single("file"), (req, res) => { req.file });',
      difficulty: 'Medium',
      tags: ['file-upload', 'express']
    },
    {
      id: 'express17',
      category: 'express',
      question: 'How to handle authentication?',
      answer: 'Use passport.js middleware. Strategies: local, JWT, OAuth. Or implement manually with bcrypt for passwords, JWT for tokens, middleware for protection.',
      difficulty: 'Hard',
      tags: ['authentication', 'express']
    },
    {
      id: 'express18',
      category: 'express',
      question: 'How to implement rate limiting?',
      answer: 'Use express-rate-limit: const rateLimit = require("express-rate-limit"); const limiter = rateLimit({windowMs: 15*60*1000, max: 100}); app.use(limiter);',
      difficulty: 'Medium',
      tags: ['rate-limiting', 'security', 'express']
    },
    {
      id: 'express19',
      category: 'express',
      question: 'What is Helmet.js?',
      answer: 'Helmet sets security HTTP headers: const helmet = require("helmet"); app.use(helmet());. Protects from common vulnerabilities like XSS, clickjacking.',
      difficulty: 'Medium',
      tags: ['security', 'express']
    },
    {
      id: 'express20',
      category: 'express',
      question: 'How to validate request data?',
      answer: 'Use validation libraries: Joi, express-validator, yup. Example with express-validator: [check("email").isEmail(), check("password").isLength({min: 6})], validate.',
      difficulty: 'Medium',
      tags: ['validation', 'express']
    },
    {
      id: 'express21',
      category: 'express',
      question: 'How to connect to MongoDB?',
      answer: 'Use mongodb driver or mongoose: const mongoose = require("mongoose"); mongoose.connect(uri, options).then(() => console.log("Connected")).catch(err => console.log(err));',
      difficulty: 'Easy',
      tags: ['mongodb', 'database', 'express']
    },
    {
      id: 'express22',
      category: 'express',
      question: 'What is MVC pattern in Express?',
      answer: 'Model (data), View (template), Controller (logic). Organize code: models/, views/, controllers/, routes/. Separation of concerns, maintainability.',
      difficulty: 'Medium',
      tags: ['mvc', 'architecture', 'express']
    },
    {
      id: 'express23',
      category: 'express',
      question: 'How to handle 404 errors?',
      answer: 'Add after all routes: app.use((req, res, next) => { res.status(404).send("Not Found"); });. Or render 404 page. Must be last route before error handler.',
      difficulty: 'Easy',
      tags: ['error-handling', 'express']
    },
    {
      id: 'express24',
      category: 'express',
      question: 'How to handle async errors?',
      answer: 'Wrap async handlers: const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);. Or use express-async-errors package.',
      difficulty: 'Medium',
      tags: ['error-handling', 'async', 'express']
    },
    {
      id: 'express25',
      category: 'express',
      question: 'What is app.locals and res.locals?',
      answer: 'app.locals: application-level variables (available to all). res.locals: response-level variables (available only to that request). For passing data to templates.',
      difficulty: 'Hard',
      tags: ['locals', 'express']
    },
    {
      id: 'express26',
      category: 'express',
      question: 'How to use environment variables?',
      answer: 'Use dotenv: require("dotenv").config();. Create .env file: PORT=3000, DB_URL=mongodb://localhost/test. Access: process.env.PORT.',
      difficulty: 'Easy',
      tags: ['environment-variables', 'express']
    },
    {
      id: 'express27',
      category: 'express',
      question: 'How to implement logging?',
      answer: 'Use morgan middleware: const morgan = require("morgan"); app.use(morgan("combined"));. Formats: combined, common, dev, short, tiny. Or use winston for advanced logging.',
      difficulty: 'Easy',
      tags: ['logging', 'express']
    },
    {
      id: 'express28',
      category: 'express',
      question: 'How to compress responses?',
      answer: 'Use compression middleware: const compression = require("compression"); app.use(compression());. Gzip compresses responses, reduces bandwidth.',
      difficulty: 'Medium',
      tags: ['compression', 'performance', 'express']
    },
    {
      id: 'express29',
      category: 'express',
      question: 'What is clustering in Express?',
      answer: 'Use cluster module to create multiple processes. Utilizes multiple CPU cores. PM2 can handle clustering automatically. Improves performance on multi-core systems.',
      difficulty: 'Hard',
      tags: ['clustering', 'performance', 'express']
    },
    {
      id: 'express30',
      category: 'express',
      question: 'How to implement caching?',
      answer: 'Use apicache for API responses, redis for distributed cache, or memory cache. Headers: Cache-Control, ETag, Last-Modified. Or use CDN for static assets.',
      difficulty: 'Hard',
      tags: ['caching', 'performance', 'express']
    },
    {
      id: 'express31',
      category: 'express',
      question: 'How to handle WebSockets?',
      answer: 'Use ws or Socket.io: const http = require("http"); const server = http.createServer(app); const io = require("socket.io")(server); io.on("connection", socket => {...});',
      difficulty: 'Hard',
      tags: ['websockets', 'express']
    },
    {
      id: 'express32',
      category: 'express',
      question: 'What is RESTful API design?',
      answer: 'Principles: client-server, stateless, cacheable, uniform interface, layered system. Resources identified by URLs. HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete).',
      difficulty: 'Medium',
      tags: ['rest', 'api', 'express']
    },
    {
      id: 'express33',
      category: 'express',
      question: 'How to version APIs?',
      answer: 'URL versioning: /api/v1/users. Header versioning: Accept: application/vnd.api.v1+json. Query parameter: /api/users?version=1. URL versioning is most common.',
      difficulty: 'Medium',
      tags: ['api', 'versioning', 'express']
    },
    {
      id: 'express34',
      category: 'express',
      question: 'How to implement pagination?',
      answer: 'Query parameters: /api/users?page=1&limit=10. Calculate: const page = parseInt(req.query.page) || 1; const limit = parseInt(req.query.limit) || 10; const skip = (page - 1) * limit;',
      difficulty: 'Medium',
      tags: ['pagination', 'api', 'express']
    },
    {
      id: 'express35',
      category: 'express',
      question: 'How to sort and filter?',
      answer: 'Filter: /api/users?status=active&role=admin. Sort: /api/users?sort=name&order=desc. Parse and build MongoDB query: const sort = {}; sort[req.query.sort] = req.query.order === "desc" ? -1 : 1;',
      difficulty: 'Medium',
      tags: ['filtering', 'sorting', 'express']
    },
    {
      id: 'express36',
      category: 'express',
      question: 'What is API documentation?',
      answer: 'Document APIs for developers. Tools: Swagger/OpenAPI (swagger-ui-express, swagger-jsdoc), Postman, Redoc. Include endpoints, parameters, responses, examples.',
      difficulty: 'Medium',
      tags: ['api', 'documentation', 'express']
    },
    {
      id: 'express37',
      category: 'express',
      question: 'How to handle file downloads?',
      answer: 'res.download(filePath, fileName, callback);. Or stream: const fileStream = fs.createReadStream(filePath); res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`); fileStream.pipe(res);',
      difficulty: 'Medium',
      tags: ['file-download', 'express']
    },
    {
      id: 'express38',
      category: 'express',
      question: 'How to send JSON responses?',
      answer: 'res.json({success: true, data: {...}});. Sets Content-Type: application/json. Use res.status(201).json({...}) for status codes.',
      difficulty: 'Easy',
      tags: ['json', 'express']
    },
    {
      id: 'express39',
      category: 'express',
      question: 'How to redirect?',
      answer: 'res.redirect("/new-path");. Status codes: 301 (permanent), 302 (temporary). Absolute or relative URLs. Can redirect to external sites.',
      difficulty: 'Easy',
      tags: ['redirect', 'express']
    },
    {
      id: 'express40',
      category: 'express',
      question: 'What is next() function?',
      answer: 'next passes control to next middleware. Call without arguments to continue, next("route") to skip remaining middleware, next(error) to trigger error handler.',
      difficulty: 'Medium',
      tags: ['middleware', 'express']
    },
    {
      id: 'express41',
      category: 'express',
      question: 'How to handle different content types?',
      answer: 'Use req.accepts() to check Accept header: if (req.accepts("json")) { res.json(data); } else if (req.accepts("html")) { res.render("view", data); }.',
      difficulty: 'Hard',
      tags: ['content-negotiation', 'express']
    },
    {
      id: 'express42',
      category: 'express',
      question: 'What is app.use() vs app.all()?',
      answer: 'app.use() mounts middleware for all HTTP methods. app.all() handles all HTTP methods for specific path. app.use("/api", middleware) vs app.all("/api", handler).',
      difficulty: 'Hard',
      tags: ['middleware', 'routing', 'express']
    },
    {
      id: 'express43',
      category: 'express',
      question: 'How to serve multiple sites?',
      answer: 'Create multiple Express apps: const adminApp = express(); const publicApp = express();. Use vhost: const vhost = require("vhost"); app.use(vhost("admin.example.com", adminApp));',
      difficulty: 'Hard',
      tags: ['vhost', 'express']
    },
    {
      id: 'express44',
      category: 'express',
      question: 'How to implement health checks?',
      answer: 'app.get("/health", (req, res) => { res.json({status: "OK", timestamp: new Date()}); });. Check database connection, external services. Use for load balancers.',
      difficulty: 'Medium',
      tags: ['health-check', 'express']
    },
    {
      id: 'express45',
      category: 'express',
      question: 'How to handle graceful shutdown?',
      answer: 'process.on("SIGTERM", () => { server.close(() => { process.exit(0); }); });. Close database connections, finish ongoing requests before exit.',
      difficulty: 'Hard',
      tags: ['graceful-shutdown', 'express']
    },
    {
      id: 'express46',
      category: 'express',
      question: 'What is Express generator?',
      answer: 'express-generator creates scaffold: npx express-generator myapp --view=ejs. Creates directory structure, basic app, package.json. Quick start for projects.',
      difficulty: 'Easy',
      tags: ['generator', 'express']
    },
    {
      id: 'express47',
      category: 'express',
      question: 'How to debug Express apps?',
      answer: 'Use debug module: DEBUG=express:* node app.js. Also: console.log, node --inspect, VS Code debugger, morgan for request logging, error tracking services.',
      difficulty: 'Medium',
      tags: ['debugging', 'express']
    },
    {
      id: 'express48',
      category: 'express',
      question: 'How to implement testing?',
      answer: 'Use Jest, Mocha with Supertest: const request = require("supertest"); const app = require("../app"); test("GET /", async () => { const res = await request(app).get("/"); expect(res.status).toBe(200); });',
      difficulty: 'Hard',
      tags: ['testing', 'express']
    },
    {
      id: 'express49',
      category: 'express',
      question: 'How to deploy Express app?',
      answer: 'Process managers: PM2 (pm2 start app.js). Docker containers. Cloud platforms: AWS Elastic Beanstalk, Heroku, Digital Ocean, Vercel, Railway. Set NODE_ENV=production.',
      difficulty: 'Medium',
      tags: ['deployment', 'express']
    },
    {
      id: 'express50',
      category: 'express',
      question: 'What are best practices for Express?',
      answer: 'Use environment variables, error handling, logging, security middleware, validation, async/await, code organization, testing, monitoring, proper status codes, API versioning.',
      difficulty: 'Medium',
      tags: ['best-practices', 'express']
    },

    // =============== Redux - 50 Questions ===============
    {
      id: 'redux1',
      category: 'redux',
      question: 'What is Redux?',
      answer: 'Redux is predictable state container for JavaScript apps. Manages application state in single store. Principles: single source of truth, state is read-only, changes via pure functions.',
      difficulty: 'Easy',
      tags: ['basics', 'redux']
    },
    {
      id: 'redux2',
      category: 'redux',
      question: 'Why use Redux?',
      answer: 'Centralized state management, predictable state updates, easier debugging (Redux DevTools), time-travel debugging, middleware support, works with any UI layer.',
      difficulty: 'Easy',
      tags: ['redux']
    },
    {
      id: 'redux3',
      category: 'redux',
      question: 'What are Redux three principles?',
      answer: '1) Single source of truth: Store holds entire state. 2) State is read-only: Only emit actions. 3) Changes via pure functions: Reducers specify state changes.',
      difficulty: 'Easy',
      tags: ['principles', 'redux']
    },
    {
      id: 'redux4',
      category: 'redux',
      question: 'What are core concepts of Redux?',
      answer: 'Store: holds state. Actions: describe what happened. Reducers: specify how state changes. Dispatch: sends actions. Selectors: extract state. Middleware: extend Redux.',
      difficulty: 'Easy',
      tags: ['concepts', 'redux']
    },
    {
      id: 'redux5',
      category: 'redux',
      question: 'How to create a Redux store?',
      answer: 'import { createStore } from "redux"; const store = createStore(rootReducer, initialState);. Redux Toolkit: configureStore() with better defaults.',
      difficulty: 'Easy',
      tags: ['store', 'redux']
    },
    {
      id: 'redux6',
      category: 'redux',
      question: 'What are actions?',
      answer: 'Actions are plain objects with type property: {type: "ADD_TODO", payload: "Learn Redux"}. type describes action, payload carries data. Action creators return actions.',
      difficulty: 'Easy',
      tags: ['actions', 'redux']
    },
    {
      id: 'redux7',
      category: 'redux',
      question: 'What are action creators?',
      answer: 'Functions that create actions: const addTodo = text => ({type: "ADD_TODO", payload: text});. Can be sync or async (with middleware).',
      difficulty: 'Easy',
      tags: ['actions', 'redux']
    },
    {
      id: 'redux8',
      category: 'redux',
      question: 'What are reducers?',
      answer: 'Pure functions that take (state, action) and return new state. No side effects, don\'t mutate state, same input always same output. Handles specific action types.',
      difficulty: 'Medium',
      tags: ['reducers', 'redux']
    },
    {
      id: 'redux9',
      category: 'redux',
      question: 'Example of reducer?',
      answer: 'const counterReducer = (state = 0, action) => { switch(action.type) { case "INCREMENT": return state + 1; case "DECREMENT": return state - 1; default: return state; } };',
      difficulty: 'Medium',
      tags: ['reducers', 'redux']
    },
    {
      id: 'redux10',
      category: 'redux',
      question: 'What is store.dispatch()?',
      answer: 'store.dispatch(action) sends action to store. Triggers state update. Returns dispatched action. Can dispatch from anywhere with store access.',
      difficulty: 'Easy',
      tags: ['dispatch', 'redux']
    },
    {
      id: 'redux11',
      category: 'redux',
      question: 'What is store.getState()?',
      answer: 'store.getState() returns current state. Useful for reading state. Called anytime after store creation.',
      difficulty: 'Easy',
      tags: ['getstate', 'redux']
    },
    {
      id: 'redux12',
      category: 'redux',
      question: 'What is store.subscribe()?',
      answer: 'store.subscribe(listener) adds change listener. Called when state changes. Returns unsubscribe function. Used by React-Redux connect.',
      difficulty: 'Medium',
      tags: ['subscribe', 'redux']
    },
    {
      id: 'redux13',
      category: 'redux',
      question: 'How to combine reducers?',
      answer: 'import { combineReducers } from "redux"; const rootReducer = combineReducers({todos: todoReducer, visibility: visibilityFilter});. Creates nested state.',
      difficulty: 'Medium',
      tags: ['combinereducers', 'redux']
    },
    {
      id: 'redux14',
      category: 'redux',
      question: 'What is Redux Toolkit (RTK)?',
      answer: 'Official, opinionated toolset for efficient Redux development. Includes: configureStore(), createSlice(), createAsyncThunk(), createEntityAdapter(). Simplifies common tasks.',
      difficulty: 'Easy',
      tags: ['redux-toolkit', 'redux']
    },
    {
      id: 'redux15',
      category: 'redux',
      question: 'What is createSlice()?',
      answer: 'RTK function that generates action creators and reducers: const todosSlice = createSlice({name: "todos", initialState, reducers: {addTodo: (state, action) => {...}}}). Auto-generates actions.',
      difficulty: 'Medium',
      tags: ['redux-toolkit', 'redux']
    },
    {
      id: 'redux16',
      category: 'redux',
      question: 'What is middleware in Redux?',
      answer: 'Middleware extends Redux with custom functionality. Sits between dispatch and reducer. Examples: redux-thunk (async), redux-saga (complex async), redux-logger (logging).',
      difficulty: 'Medium',
      tags: ['middleware', 'redux']
    },
    {
      id: 'redux17',
      category: 'redux',
      question: 'What is redux-thunk?',
      answer: 'Middleware for async actions. Allows action creators to return functions instead of objects. Function receives dispatch and getState. Used for API calls.',
      difficulty: 'Medium',
      tags: ['middleware', 'redux-thunk', 'redux']
    },
    {
      id: 'redux18',
      category: 'redux',
      question: 'Example of thunk?',
      answer: 'const fetchTodos = () => { return async (dispatch, getState) => { dispatch(todosLoading()); const todos = await api.getTodos(); dispatch(todosLoaded(todos)); }; };',
      difficulty: 'Medium',
      tags: ['redux-thunk', 'redux']
    },
    {
      id: 'redux19',
      category: 'redux',
      question: 'What is redux-saga?',
      answer: 'Middleware for handling side effects using ES6 generators. More powerful than thunks. Complex async flows, race conditions, cancellations. Steep learning curve.',
      difficulty: 'Hard',
      tags: ['middleware', 'redux-saga', 'redux']
    },
    {
      id: 'redux20',
      category: 'redux',
      question: 'What is React-Redux?',
      answer: 'Official React bindings for Redux. Provides Provider component and connect() HOC, or useSelector/useDispatch hooks. Connects React components to Redux store.',
      difficulty: 'Easy',
      tags: ['react-redux', 'redux']
    },
    {
      id: 'redux21',
      category: 'redux',
      question: 'How to use Provider?',
      answer: 'Wrap app with Provider: import { Provider } from "react-redux"; <Provider store={store}><App /></Provider>. Makes store available to all components.',
      difficulty: 'Easy',
      tags: ['provider', 'react-redux', 'redux']
    },
    {
      id: 'redux22',
      category: 'redux',
      question: 'What is connect()?',
      answer: 'connect(mapStateToProps, mapDispatchToProps)(Component) connects component to store. mapStateToProps extracts state, mapDispatchToProps provides dispatch. Legacy approach.',
      difficulty: 'Medium',
      tags: ['connect', 'react-redux', 'redux']
    },
    {
      id: 'redux23',
      category: 'redux',
      question: 'What are useSelector and useDispatch?',
      answer: 'Hooks for functional components: useSelector(selector) extracts state, useDispatch() returns dispatch function. Modern alternative to connect().',
      difficulty: 'Medium',
      tags: ['hooks', 'react-redux', 'redux']
    },
    {
      id: 'redux24',
      category: 'redux',
      question: 'Example with hooks?',
      answer: 'const counter = useSelector(state => state.counter); const dispatch = useDispatch(); <button onClick={() => dispatch(increment())}>{counter}</button>;',
      difficulty: 'Medium',
      tags: ['hooks', 'react-redux', 'redux']
    },
    {
      id: 'redux25',
      category: 'redux',
      question: 'What are selectors?',
      answer: 'Functions that extract and compute derived state: const getCompletedTodos = state => state.todos.filter(todo => todo.completed). Can be memoized with reselect.',
      difficulty: 'Medium',
      tags: ['selectors', 'redux']
    },
    {
      id: 'redux26',
      category: 'redux',
      question: 'What is reselect?',
      answer: 'Library for creating memoized selectors. createSelector() recomputes only when dependencies change. Improves performance by avoiding unnecessary re-renders.',
      difficulty: 'Hard',
      tags: ['reselect', 'redux']
    },
    {
      id: 'redux27',
      category: 'redux',
      question: 'What is Redux DevTools?',
      answer: 'Browser extension for debugging Redux. Features: time-travel debugging, action replay, state inspection, diff view. Configure: window.__REDUX_DEVTOOLS_EXTENSION__().',
      difficulty: 'Medium',
      tags: ['devtools', 'redux']
    },
    {
      id: 'redux28',
      category: 'redux',
      question: 'How to handle async with Redux Toolkit?',
      answer: 'Use createAsyncThunk(): const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => { const response = await api.getTodos(); return response.data; });. Auto-generates pending/fulfilled/rejected actions.',
      difficulty: 'Medium',
      tags: ['async', 'redux-toolkit', 'redux']
    },
    {
      id: 'redux29',
      category: 'redux',
      question: 'What is createEntityAdapter()?',
      answer: 'RTK utility for normalized state. Provides CRUD operations for entity collections. Normalizes data, improves performance, reduces duplication.',
      difficulty: 'Hard',
      tags: ['entity-adapter', 'redux-toolkit', 'redux']
    },
    {
      id: 'redux30',
      category: 'redux',
      question: 'What is Redux Persist?',
      answer: 'Library for persisting Redux state to storage (localStorage). Survives page reloads. Configuration: persistStore, persistReducer, persistGate.',
      difficulty: 'Hard',
      tags: ['redux-persist', 'redux']
    },
    {
      id: 'redux31',
      category: 'redux',
      question: 'What is immutable update pattern?',
      answer: 'Never mutate state directly. Always return new objects/arrays. Use spread operator, map, filter, slice, Object.assign. Or use Immer (included in RTK).',
      difficulty: 'Medium',
      tags: ['immutability', 'redux']
    },
    {
      id: 'redux32',
      category: 'redux',
      question: 'What is Immer?',
      answer: 'Library for immutable updates using mutable syntax. Redux Toolkit uses Immer internally. Write code that looks like mutation but produces immutable updates.',
      difficulty: 'Medium',
      tags: ['immer', 'redux']
    },
    {
      id: 'redux33',
      category: 'redux',
      question: 'How does Redux work with React?',
      answer: 'React components dispatch actions, Redux store updates state, React components re-render with new state. One-way data flow: View -> Action -> Reducer -> State -> View.',
      difficulty: 'Medium',
      tags: ['react', 'redux']
    },
    {
      id: 'redux34',
      category: 'redux',
      question: 'When to use Redux?',
      answer: 'Large state shared across many components, complex state updates, need for time-travel debugging, server state caching, offline support. For small apps, consider Context API.',
      difficulty: 'Easy',
      tags: ['when-to-use', 'redux']
    },
    {
      id: 'redux35',
      category: 'redux',
      question: 'Redux vs Context API?',
      answer: 'Redux: predictable updates, middleware, DevTools, performance optimizations. Context: simpler, built-in, no extra bundle. Use Redux for complex state, Context for theme/auth.',
      difficulty: 'Medium',
      tags: ['comparison', 'redux', 'context']
    },
    {
      id: 'redux36',
      category: 'redux',
      question: 'What is Redux Toolkit Query (RTK Query)?',
      answer: 'Data fetching and caching solution built into RTK. Auto-generates hooks for API calls, caching, invalidation, optimistic updates. Alternative to React Query, SWR.',
      difficulty: 'Hard',
      tags: ['rtk-query', 'redux-toolkit', 'redux']
    },
    {
      id: 'redux37',
      category: 'redux',
      question: 'How to structure Redux folder?',
      answer: 'Common patterns: feature-based (features/todos/slice.js), ducks pattern (actions/reducers in same file), Rails-style (actions/, reducers/, constants/). RTK recommends feature-based.',
      difficulty: 'Medium',
      tags: ['structure', 'redux']
    },
    {
      id: 'redux38',
      category: 'redux',
      question: 'What is normalizing state?',
      answer: 'Storing data as objects with IDs as keys, arrays of IDs. Improves performance, avoids duplication, easier updates. Example: {entities: {users: {"1": {id: 1, name: "John"}}}, ids: ["1"]}',
      difficulty: 'Hard',
      tags: ['normalization', 'redux']
    },
    {
      id: 'redux39',
      category: 'redux',
      question: 'How to handle forms with Redux?',
      answer: 'Two approaches: 1) Controlled form with Redux state (slower). 2) Local form state with Redux on submit. Libraries: redux-form, formik with Redux, react-hook-form.',
      difficulty: 'Hard',
      tags: ['forms', 'redux']
    },
    {
      id: 'redux40',
      category: 'redux',
      question: 'What is Redux middleware chain?',
      answer: 'Middleware composed in chain. Each receives store API, returns function that receives next, returns function that receives action. Can modify, log, delay, or stop actions.',
      difficulty: 'Hard',
      tags: ['middleware', 'redux']
    },
    {
      id: 'redux41',
      category: 'redux',
      question: 'How to create custom middleware?',
      answer: 'const logger = store => next => action => { console.log("dispatching", action); const result = next(action); console.log("next state", store.getState()); return result; };',
      difficulty: 'Hard',
      tags: ['middleware', 'redux']
    },
    {
      id: 'redux42',
      category: 'redux',
      question: 'What is Redux Observable?',
      answer: 'Middleware using RxJS observables for handling async. Complex event streams, debouncing, cancellation. Similar to redux-saga but with RxJS.',
      difficulty: 'Hard',
      tags: ['redux-observable', 'redux']
    },
    {
      id: 'redux43',
      category: 'redux',
      question: 'How to test Redux?',
      answer: 'Test reducers (pure functions), action creators, selectors, middleware. Use Jest. For components, mock store. Redux Toolkit simplifies testing.',
      difficulty: 'Hard',
      tags: ['testing', 'redux']
    },
    {
      id: 'redux44',
      category: 'redux',
      question: 'What is time-travel debugging?',
      answer: 'Move backward/forward through state history. Redux DevTools records actions. Replay actions to see state changes. Useful for debugging complex interactions.',
      difficulty: 'Medium',
      tags: ['devtools', 'redux']
    },
    {
      id: 'redux45',
      category: 'redux',
      question: 'How to handle authentication in Redux?',
      answer: 'Store tokens/user in Redux state. Middleware to add token to requests. Actions for login/logout. Persist with redux-persist or localStorage. Clear state on logout.',
      difficulty: 'Medium',
      tags: ['authentication', 'redux']
    },
    {
      id: 'redux46',
      category: 'redux',
      question: 'What is Redux Toolkit vs vanilla Redux?',
      answer: 'Vanilla Redux: more boilerplate, manual setup. RTK: less code, built-in best practices, Immer for immutability, createSlice, configureStore. RTK is official recommendation.',
      difficulty: 'Easy',
      tags: ['comparison', 'redux-toolkit', 'redux']
    },
    {
      id: 'redux47',
      category: 'redux',
      question: 'How to migrate to Redux Toolkit?',
      answer: 'Replace createStore with configureStore. Convert reducers to createSlice. Use createAsyncThunk for async. Update components to use hooks. Update tests.',
      difficulty: 'Hard',
      tags: ['migration', 'redux-toolkit', 'redux']
    },
    {
      id: 'redux48',
      category: 'redux',
      question: 'What is Redux vs MobX?',
      answer: 'Redux: explicit, functional, single store, immutable. MobX: implicit, OOP, multiple stores, mutable. Redux more predictable, MobX less boilerplate.',
      difficulty: 'Hard',
      tags: ['comparison', 'redux', 'mobx']
    },
    {
      id: 'redux49',
      category: 'redux',
      question: 'How to optimize Redux performance?',
      answer: 'Memoized selectors (reselect), React.memo for components, batch updates, normalized state, avoid putting form state in Redux, use Redux Toolkit.',
      difficulty: 'Hard',
      tags: ['performance', 'redux']
    },
    {
      id: 'redux50',
      category: 'redux',
      question: 'What are common Redux mistakes?',
      answer: 'Putting all state in Redux, mutating state, overusing connect, not normalizing state, complex reducers, not using Redux Toolkit, poor action naming.',
      difficulty: 'Medium',
      tags: ['best-practices', 'redux']
    }
  ],
  
  experienced: [
    // =============== System Design - 50 Questions ===============
    {
      id: 'sd1',
      category: 'system-design',
      question: 'What is CAP theorem?',
      answer: 'CAP theorem states distributed system can only guarantee two of three properties: Consistency (all nodes see same data), Availability (every request gets response), Partition tolerance (system works despite network partitions). In practice, choose CA (databases) or AP (web).',
      difficulty: 'Hard',
      tags: ['cap', 'distributed-systems']
    },
    {
      id: 'sd2',
      category: 'system-design',
      question: 'Explain microservices vs monolithic architecture',
      answer: 'Monolithic: single codebase, easier to develop/deploy, but scales poorly. Microservices: independent services, better scalability, fault isolation, but complex coordination, network overhead, distributed transactions. Use microservices for large, complex systems.',
      difficulty: 'Hard',
      tags: ['microservices', 'architecture']
    },
    {
      id: 'sd3',
      category: 'system-design',
      question: 'How to design a URL shortening service (like TinyURL)?',
      answer: 'Requirements: generate short URL, redirect to original, analytics, custom URLs. Components: API servers, hash service (Base62 encoding), database (SQL for analytics, NoSQL for URLs), cache (Redis), load balancer. Generate unique IDs using distributed ID generator.',
      difficulty: 'Hard',
      tags: ['url-shortener', 'design']
    },
    {
      id: 'sd4',
      category: 'system-design',
      question: 'Design Twitter/News Feed system',
      answer: 'Components: Tweet service, User service, Timeline service (fan-out: precompute for active users, on-demand for inactive), Notification service, Media service, Search (Elasticsearch). Storage: tweets in distributed databases, timelines in cache.',
      difficulty: 'Hard',
      tags: ['social-media', 'design']
    },
    {
      id: 'sd5',
      category: 'system-design',
      question: 'Design an e-commerce platform (like Amazon)',
      answer: 'Services: Product catalog, Inventory, Order, Payment, Shipping, Recommendation, Search, User, Review. Architecture: API gateway, service discovery, message queues for async operations, cache for hot products, CDN for images.',
      difficulty: 'Hard',
      tags: ['e-commerce', 'design']
    },
    {
      id: 'sd6',
      category: 'system-design',
      question: 'Design a ride-sharing service (like Uber)',
      answer: 'Services: Driver, Rider, Trip, Payment, Notification, Mapping. Real-time location tracking (WebSockets), dispatch algorithm (matching drivers/riders), surge pricing, payment processing, ETA calculation.',
      difficulty: 'Hard',
      tags: ['ride-sharing', 'real-time']
    },
    {
      id: 'sd7',
      category: 'system-design',
      question: 'Design a video streaming service (like Netflix)',
      answer: 'Components: Video encoding pipeline, CDN for distribution, manifest files (HLS/DASH), adaptive bitrate streaming, recommendation engine, user profiles, watch history. Challenges: bandwidth, storage, global availability.',
      difficulty: 'Hard',
      tags: ['video-streaming', 'design']
    },
    {
      id: 'sd8',
      category: 'system-design',
      question: 'Design a chat application (like WhatsApp)',
      answer: 'Real-time messaging (WebSockets), message persistence, group chats, media sharing, encryption, read receipts, online status. Architecture: message queue, chat service, presence service, media service, notification service.',
      difficulty: 'Hard',
      tags: ['chat', 'real-time']
    },
    {
      id: 'sd9',
      category: 'system-design',
      question: 'What is load balancing? Explain strategies',
      answer: 'Load balancing distributes traffic across servers. Strategies: Round Robin, Least Connections, IP Hash, Weighted. Hardware (F5) or software (Nginx, HAProxy). Types: Layer 4 (TCP) vs Layer 7 (HTTP). Global: DNS round robin, Anycast.',
      difficulty: 'Hard',
      tags: ['load-balancing', 'scaling']
    },
    {
      id: 'sd10',
      category: 'system-design',
      question: 'Explain database replication and sharding',
      answer: 'Replication: copies data across multiple nodes (master-slave for read scaling, master-master for write scaling). Sharding: partitions data across servers (horizontal scaling). Challenges: consistency, join operations, hotspotting.',
      difficulty: 'Hard',
      tags: ['database', 'scaling']
    },
    {
      id: 'sd11',
      category: 'system-design',
      question: 'What is eventual consistency?',
      answer: 'Consistency model where updates propagate asynchronously. System guarantees if no new updates, eventually all reads return last updated value. Used in distributed systems (Dynamo, Cassandra). Weaker than strong consistency but offers higher availability.',
      difficulty: 'Hard',
      tags: ['consistency', 'distributed-systems']
    },
    {
      id: 'sd12',
      category: 'system-design',
      question: 'Explain caching strategies',
      answer: 'Write-through: write to cache and DB simultaneously. Write-behind: write to cache, later to DB. Write-around: write to DB, cache on read. Cache-aside: app manages cache. Eviction policies: LRU, LFU, FIFO, Random.',
      difficulty: 'Hard',
      tags: ['caching', 'performance']
    },
    {
      id: 'sd13',
      category: 'system-design',
      question: 'What are message queues? When to use?',
      answer: 'Message queues enable async communication between services. Use for: decoupling services, handling spikes, batch processing, retry logic, event-driven architecture. Examples: Kafka, RabbitMQ, SQS, ActiveMQ.',
      difficulty: 'Hard',
      tags: ['message-queues', 'async']
    },
    {
      id: 'sd14',
      category: 'system-design',
      question: 'Design a search autocomplete system',
      answer: 'Components: Trie data structure for prefix matching, distributed cache for hot queries, analytics for ranking suggestions, incremental updates. Optimizations: limit depth, caching top results, client-side caching.',
      difficulty: 'Hard',
      tags: ['search', 'autocomplete']
    },
    {
      id: 'sd15',
      category: 'system-design',
      question: 'How to handle millions of concurrent connections?',
      answer: 'Use non-blocking I/O (Node.js, Nginx), connection pooling, WebSockets for real-time, load balancing, horizontal scaling, CDN for static assets, database connection management, efficient protocols (gRPC, Protocol Buffers).',
      difficulty: 'Hard',
      tags: ['scaling', 'concurrency']
    },
    {
      id: 'sd16',
      category: 'system-design',
      question: 'Explain API gateway pattern',
      answer: 'API gateway is single entry point for all clients. Handles: request routing, composition, protocol translation, authentication, rate limiting, caching, monitoring. Examples: Kong, Apigee, AWS API Gateway.',
      difficulty: 'Hard',
      tags: ['api-gateway', 'microservices']
    },
    {
      id: 'sd17',
      category: 'system-design',
      question: 'What is circuit breaker pattern?',
      answer: 'Prevents cascade failures when service is down. States: Closed (normal), Open (fail fast), Half-open (test recovery). Implementation: Hystrix, Resilience4j. Protects system from slow or failing dependencies.',
      difficulty: 'Hard',
      tags: ['circuit-breaker', 'resilience']
    },
    {
      id: 'sd18',
      category: 'system-design',
      question: 'Design a distributed file storage system (like Dropbox)',
      answer: 'Components: Client sync, Metadata service, Storage service, Notification service. Sync algorithm: detect changes, upload/download, conflict resolution. Storage: object storage (S3), block storage, CDN for sharing.',
      difficulty: 'Hard',
      tags: ['file-storage', 'sync']
    },
    {
      id: 'sd19',
      category: 'system-design',
      question: 'Explain consistent hashing',
      answer: 'Distributed hashing technique minimizing reorganization when nodes added/removed. Hash space forms ring, nodes assigned positions. Keys hash to ring, find closest node clockwise. Used in Dynamo, Cassandra, load balancers.',
      difficulty: 'Hard',
      tags: ['hashing', 'distributed-systems']
    },
    {
      id: 'sd20',
      category: 'system-design',
      question: 'What is idempotency in APIs?',
      answer: 'Idempotent operations produce same result regardless of how many times executed. Important for retries. GET, PUT, DELETE are idempotent. POST is not. Implement with idempotency keys.',
      difficulty: 'Medium',
      tags: ['idempotency', 'api-design']
    },
    {
      id: 'sd21',
      category: 'system-design',
      question: 'Design a rate limiter',
      answer: 'Types: Fixed window, Sliding window, Token bucket, Leaky bucket. Implementation: in-memory (Redis) with atomic operations. Distributed rate limiting: centralized store with consistency requirements.',
      difficulty: 'Hard',
      tags: ['rate-limiting', 'security']
    },
    {
      id: 'sd22',
      category: 'system-design',
      question: 'Explain leader election in distributed systems',
      answer: 'Process to select coordinator among nodes. Algorithms: Bully, Ring, Paxos, Raft, ZooKeeper. Requirements: safety (one leader), liveness (eventually elect leader). Used in database replication, distributed locks.',
      difficulty: 'Hard',
      tags: ['leader-election', 'distributed-systems']
    },
    {
      id: 'sd23',
      category: 'system-design',
      question: 'What is the Bloom filter?',
      answer: 'Probabilistic data structure testing set membership. Space-efficient, may have false positives but no false negatives. Used for: cache sharing, duplicate detection, database optimization.',
      difficulty: 'Hard',
      tags: ['data-structures', 'probability']
    },
    {
      id: 'sd24',
      category: 'system-design',
      question: 'Design a key-value store (like Redis)',
      answer: 'Components: in-memory storage, persistence (snapshotting, AOF), replication, clustering. Data structures: strings, lists, sets, hashes, sorted sets. Eviction policies, transactions, pub/sub, Lua scripting.',
      difficulty: 'Hard',
      tags: ['key-value', 'database']
    },
    {
      id: 'sd25',
      category: 'system-design',
      question: 'Explain database indexing strategies',
      answer: 'B-tree (default, range queries), Hash (equality), Bitmap (low cardinality), Full-text (text search), Spatial (geographic). Composite indexes, covering indexes. Consider read/write patterns, storage, maintenance.',
      difficulty: 'Hard',
      tags: ['database', 'indexing']
    },
    {
      id: 'sd26',
      category: 'system-design',
      question: 'What is eventual vs strong consistency?',
      answer: 'Strong consistency: reads always see latest write. Eventual consistency: reads may see stale data temporarily. Trade-off: strong consistency requires coordination (slower), eventual consistency offers higher availability.',
      difficulty: 'Hard',
      tags: ['consistency', 'distributed-systems']
    },
    {
      id: 'sd27',
      category: 'system-design',
      question: 'Design a recommendation system',
      answer: 'Approaches: Collaborative filtering (user-item interactions), Content-based (item features), Hybrid. Components: feature store, model training, prediction service, A/B testing. Challenges: cold start, scalability, privacy.',
      difficulty: 'Hard',
      tags: ['recommendation', 'machine-learning']
    },
    {
      id: 'sd28',
      category: 'system-design',
      question: 'Explain database normalization vs denormalization',
      answer: 'Normalization reduces redundancy (1NF, 2NF, 3NF, BCNF). Denormalization adds redundancy for performance. Trade-off: normalized for writes/consistency, denormalized for reads/performance. Use read replicas, materialized views.',
      difficulty: 'Hard',
      tags: ['database', 'normalization']
    },
    {
      id: 'sd29',
      category: 'system-design',
      question: 'What is the Two Generals Problem?',
      answer: 'Impossibility of achieving consensus over unreliable network. Even with acknowledgments, cannot guarantee both generals attack simultaneously. Related to Byzantine Generals Problem, consensus algorithms.',
      difficulty: 'Hard',
      tags: ['distributed-systems', 'consensus']
    },
    {
      id: 'sd30',
      category: 'system-design',
      question: 'Design a distributed lock service',
      answer: 'Requirements: mutual exclusion, deadlock freedom, fault tolerance. Implementations: ZooKeeper (ephemeral nodes), Redis (SETNX with expiry), database (pessimistic locking). Challenges: clock skew, network partitions.',
      difficulty: 'Hard',
      tags: ['distributed-locks', 'concurrency']
    },
    {
      id: 'sd31',
      category: 'system-design',
      question: 'Explain the Saga pattern',
      answer: 'Pattern for managing distributed transactions in microservices. Each service performs local transaction and publishes event. Saga orchestrator coordinates compensating transactions for rollback. Alternative to two-phase commit.',
      difficulty: 'Hard',
      tags: ['saga', 'distributed-transactions']
    },
    {
      id: 'sd32',
      category: 'system-design',
      question: 'What is content delivery network (CDN)?',
      answer: 'Geographically distributed proxy servers caching content close to users. Improves latency, reduces origin load, provides DDoS protection. Use for static assets, video streaming, API acceleration.',
      difficulty: 'Medium',
      tags: ['cdn', 'performance']
    },
    {
      id: 'sd33',
      category: 'system-design',
      question: 'Design a real-time analytics dashboard',
      answer: 'Components: data ingestion (Kafka), stream processing (Flink, Spark), storage (time-series database), caching (Redis), visualization (web sockets for real-time updates). Handle high write volume, low-latency queries.',
      difficulty: 'Hard',
      tags: ['analytics', 'real-time']
    },
    {
      id: 'sd34',
      category: 'system-design',
      question: 'Explain backpressure in distributed systems',
      answer: 'Mechanism to control data flow when producer is faster than consumer. Prevents resource exhaustion. Implementations: reactive streams, TCP flow control, message queue limits, circuit breakers.',
      difficulty: 'Hard',
      tags: ['backpressure', 'resilience']
    },
    {
      id: 'sd35',
      category: 'system-design',
      question: 'What is the Byzantine Generals Problem?',
      answer: 'Problem of reaching consensus with faulty/traitorous nodes. Requires 3f+1 nodes to tolerate f faulty nodes. Solutions: Practical Byzantine Fault Tolerance (PBFT), used in blockchain.',
      difficulty: 'Hard',
      tags: ['byzantine', 'consensus']
    },
    {
      id: 'sd36',
      category: 'system-design',
      question: 'Design a monitoring and alerting system',
      answer: 'Components: agents (collect metrics), collectors (aggregate), storage (time-series DB), query engine, visualization, alert manager. Metrics: counters, gauges, histograms. Use: Prometheus, Grafana, ELK stack.',
      difficulty: 'Hard',
      tags: ['monitoring', 'observability']
    },
    {
      id: 'sd37',
      category: 'system-design',
      question: 'Explain database connection pooling',
      answer: 'Maintains pool of database connections for reuse. Reduces connection overhead, limits connections, manages timeouts. Implementations: HikariCP, Apache DBCP. Configure based on workload, database limits.',
      difficulty: 'Medium',
      tags: ['database', 'performance']
    },
    {
      id: 'sd38',
      category: 'system-design',
      question: 'What is the outbox pattern?',
      answer: 'Pattern for reliable messaging in microservices. Instead of publishing directly, write to outbox table. Separate process reads and publishes events. Ensures exactly-once delivery with transactions.',
      difficulty: 'Hard',
      tags: ['outbox-pattern', 'messaging']
    },
    {
      id: 'sd39',
      category: 'system-design',
      question: 'Design a payment processing system',
      answer: 'Components: payment gateway, fraud detection, ledger, settlement, reconciliation. Challenges: idempotency, atomicity, consistency, audit trail, compliance (PCI DSS). Use idempotency keys, idempotent retries.',
      difficulty: 'Hard',
      tags: ['payments', 'finance']
    },
    {
      id: 'sd40',
      category: 'system-design',
      question: 'Explain the CQRS pattern',
      answer: 'Command Query Responsibility Segregation. Separate models for reads and writes. Benefits: optimization, scaling, simpler queries. Challenges: eventual consistency, complexity. Often combined with Event Sourcing.',
      difficulty: 'Hard',
      tags: ['cqrs', 'architecture']
    },
    {
      id: 'sd41',
      category: 'system-design',
      question: 'What is event sourcing?',
      answer: 'Pattern storing state changes as immutable events. Rebuild state by replaying events. Benefits: audit trail, time travel, complex business logic. Challenges: storage, performance, migration.',
      difficulty: 'Hard',
      tags: ['event-sourcing', 'architecture']
    },
    {
      id: 'sd42',
      category: 'system-design',
      question: 'Design a geospatial database',
      answer: 'Requirements: store points, polygons, calculate distances, find nearby. Indexing: R-tree, Quad-tree. Databases: PostGIS, MongoDB geospatial, Redis Geo. Use cases: location-based services, maps, logistics.',
      difficulty: 'Hard',
      tags: ['geospatial', 'database']
    },
    {
      id: 'sd43',
      category: 'system-design',
      question: 'Explain the Thundering Herd problem',
      answer: 'When many clients retry simultaneously after resource becomes available, causing overload. Solutions: exponential backoff with jitter, cache warm-up, leader election, rate limiting, circuit breakers.',
      difficulty: 'Hard',
      tags: ['thundering-herd', 'performance']
    },
    {
      id: 'sd44',
      category: 'system-design',
      question: 'What is a distributed trace?',
      answer: 'Tracks request through multiple services. Includes: trace ID, span ID, parent ID, timing, metadata. Tools: Jaeger, Zipkin, OpenTelemetry. Helps debugging, performance optimization, understanding dependencies.',
      difficulty: 'Hard',
      tags: ['distributed-tracing', 'observability']
    },
    {
      id: 'sd45',
      category: 'system-design',
      question: 'Design a multiplayer game server',
      answer: 'Components: game logic server, matchmaking, presence, chat, leaderboards. Challenges: low latency, state synchronization, cheat prevention. Techniques: client prediction, server reconciliation, interpolation.',
      difficulty: 'Hard',
      tags: ['gaming', 'real-time']
    },
    {
      id: 'sd46',
      category: 'system-design',
      question: 'Explain database connection failover',
      answer: 'Automatic switching to standby database when primary fails. Methods: DNS failover, VIP failover, proxy-based. Requires replication, health checks, monitoring. Trade-offs: RTO, RPO, complexity.',
      difficulty: 'Hard',
      tags: ['failover', 'high-availability']
    },
    {
      id: 'sd47',
      category: 'system-design',
      question: 'What is the 12-factor app methodology?',
      answer: 'Best practices for SaaS apps: 1) Codebase, 2) Dependencies, 3) Config, 4) Backing services, 5) Build/release/run, 6) Processes, 7) Port binding, 8) Concurrency, 9) Disposability, 10) Dev/prod parity, 11) Logs, 12) Admin processes.',
      difficulty: 'Hard',
      tags: ['12-factor', 'best-practices']
    },
    {
      id: 'sd48',
      category: 'system-design',
      question: 'Design an ad serving platform',
      answer: 'Components: ad server, targeting engine, bidding platform, creative storage, analytics. Challenges: real-time bidding, fraud detection, budget pacing, targeting, latency requirements (<100ms).',
      difficulty: 'Hard',
      tags: ['ad-tech', 'real-time']
    },
    {
      id: 'sd49',
      category: 'system-design',
      question: 'Explain the difference between latency and throughput',
      answer: 'Latency: time for single operation (milliseconds). Throughput: operations per second. Optimizations: latency (caching, CDN, edge computing), throughput (parallelism, batching, sharding). Trade-offs often exist.',
      difficulty: 'Medium',
      tags: ['latency', 'throughput', 'performance']
    },
    {
      id: 'sd50',
      category: 'system-design',
      question: 'Design a web crawler',
      answer: 'Components: URL frontier, fetcher, parser, duplicate detection, robots.txt checker, storage. Challenges: politeness (rate limiting), distributed crawling, URL normalization, dynamic content, scale (billions of pages).',
      difficulty: 'Hard',
      tags: ['web-crawler', 'search']
    },

    // =============== Performance - 50 Questions ===============
    {
      id: 'perf1',
      category: 'performance',
      question: 'What is critical rendering path?',
      answer: 'Sequence of steps browser takes to render page: 1) Parse HTML, 2) Build DOM, 3) Build CSSOM, 4) Combine to render tree, 5) Layout, 6) Paint, 7) Composite. Optimize by minimizing render-blocking resources.',
      difficulty: 'Hard',
      tags: ['rendering', 'browser']
    },
    {
      id: 'perf2',
      category: 'performance',
      question: 'Explain lazy loading and code splitting',
      answer: 'Lazy loading: load resources only when needed (images, components). Code splitting: split bundle into chunks, load on demand. Benefits: faster initial load, better perceived performance. React.lazy(), dynamic imports.',
      difficulty: 'Hard',
      tags: ['lazy-loading', 'bundling']
    },
    {
      id: 'perf3',
      category: 'performance',
      question: 'What are web performance metrics?',
      answer: 'Core Web Vitals: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift). Others: FCP (First Contentful Paint), TTI (Time to Interactive), TBT (Total Blocking Time).',
      difficulty: 'Hard',
      tags: ['metrics', 'web-vitals']
    },
    {
      id: 'perf4',
      category: 'performance',
      question: 'How to optimize images for web?',
      answer: 'Use modern formats (WebP, AVIF), responsive images (srcset, sizes), lazy loading, CDN, compression, proper sizing, vector graphics for icons. Tools: ImageOptim, Squoosh, Sharp.',
      difficulty: 'Medium',
      tags: ['images', 'optimization']
    },
    {
      id: 'perf5',
      category: 'performance',
      question: 'Explain browser caching strategies',
      answer: 'Cache-Control headers: max-age, s-maxage, no-cache, no-store, must-revalidate. ETag/Last-Modified for conditional requests. Service workers for offline. HTTP/2 server push for critical resources.',
      difficulty: 'Hard',
      tags: ['caching', 'http']
    },
    {
      id: 'perf6',
      category: 'performance',
      question: 'What is tree shaking?',
      answer: 'Dead code elimination in bundlers (Webpack, Rollup). Removes unused exports from final bundle. Requires ES6 modules (import/export). Configure sideEffects in package.json.',
      difficulty: 'Medium',
      tags: ['tree-shaking', 'bundling']
    },
    {
      id: 'perf7',
      category: 'performance',
      question: 'How to reduce JavaScript bundle size?',
      answer: 'Code splitting, tree shaking, minification, compression (gzip, Brotli), remove unused libraries, use smaller alternatives, dynamic imports, analyze bundle (webpack-bundle-analyzer).',
      difficulty: 'Hard',
      tags: ['bundle-size', 'javascript']
    },
    {
      id: 'perf8',
      category: 'performance',
      question: 'Explain debouncing vs throttling',
      answer: 'Debouncing: execute after delay when events stop (search input). Throttling: execute at most once per time period (scroll, resize). Both prevent excessive function calls.',
      difficulty: 'Medium',
      tags: ['debouncing', 'throttling']
    },
    {
      id: 'perf9',
      category: 'performance',
      question: 'What is web worker? How to use for performance?',
      answer: 'Web workers run JavaScript in background threads. Use for CPU-intensive tasks: image processing, data parsing, calculations. Communication via postMessage(). Don\'t block main thread.',
      difficulty: 'Hard',
      tags: ['web-workers', 'multithreading']
    },
    {
      id: 'perf10',
      category: 'performance',
      question: 'How to optimize database queries?',
      answer: 'Add indexes, use query optimization (EXPLAIN), limit results, select only needed columns, avoid N+1 queries (eager loading), use connection pooling, cache frequently accessed data.',
      difficulty: 'Hard',
      tags: ['database', 'optimization']
    },
    {
      id: 'perf11',
      category: 'performance',
      question: 'Explain memoization and when to use',
      answer: 'Cache function results for same inputs. Use for expensive computations, pure functions. Implement with closure or libraries (memoize-one, Reselect). Not for functions with side effects.',
      difficulty: 'Medium',
      tags: ['memoization', 'caching']
    },
    {
      id: 'perf12',
      category: 'performance',
      question: 'What is virtualized rendering?',
      answer: 'Render only visible items for long lists. Libraries: react-window, react-virtualized. Benefits: reduced DOM nodes, faster rendering, lower memory. Use for tables, lists with thousands of items.',
      difficulty: 'Hard',
      tags: ['virtualization', 'react']
    },
    {
      id: 'perf13',
      category: 'performance',
      question: 'How to measure frontend performance?',
      answer: 'Lighthouse, WebPageTest, Chrome DevTools Performance panel, User Timing API, Real User Monitoring (RUM), Core Web Vitals, First Paint, Time to Interactive.',
      difficulty: 'Medium',
      tags: ['measurement', 'tools']
    },
    {
      id: 'perf14',
      category: 'performance',
      question: 'What is paint flashing and layout thrashing?',
      answer: 'Paint flashing: visual feedback on repaints (Chrome DevTools). Layout thrashing: forced synchronous layouts causing performance issues. Avoid by batching DOM reads/writes, using requestAnimationFrame.',
      difficulty: 'Hard',
      tags: ['rendering', 'browser']
    },
    {
      id: 'perf15',
      category: 'performance',
      question: 'Explain HTTP/2 and HTTP/3 benefits',
      answer: 'HTTP/2: multiplexing, header compression, server push, binary protocol. HTTP/3: QUIC over UDP, improved handshake, connection migration. Benefits: reduced latency, better performance on lossy networks.',
      difficulty: 'Hard',
      tags: ['http', 'protocols']
    },
    {
      id: 'perf16',
      category: 'performance',
      question: 'How to optimize CSS for performance?',
      answer: 'Minimize CSS, critical CSS in head, remove unused CSS, avoid @import, use efficient selectors, reduce specificity, avoid expensive properties (box-shadow), use CSS containment, prefer transforms/opacity for animations.',
      difficulty: 'Hard',
      tags: ['css', 'optimization']
    },
    {
      id: 'perf17',
      category: 'performance',
      question: 'What is time to first byte (TTFB)?',
      answer: 'Time between request and first byte of response. Affected by: server processing, network latency, DNS lookup, SSL handshake. Target: <200ms. Optimize with caching, CDN, faster backend.',
      difficulty: 'Medium',
      tags: ['ttfb', 'metrics']
    },
    {
      id: 'perf18',
      category: 'performance',
      question: 'Explain the RAIL performance model',
      answer: 'Response (<100ms), Animation (<16ms), Idle (maximize), Load (<1s). User-centric performance model. Goals: respond quickly, animate smoothly, maximize idle time, load quickly.',
      difficulty: 'Hard',
      tags: ['rail', 'performance-model']
    },
    {
      id: 'perf19',
      category: 'performance',
      question: 'How to optimize React performance?',
      answer: 'React.memo, useMemo, useCallback, code splitting, virtualized lists, optimize re-renders (avoid prop drilling), key prop, production build, React Profiler, concurrent features.',
      difficulty: 'Hard',
      tags: ['react', 'optimization']
    },
    {
      id: 'perf20',
      category: 'performance',
      question: 'What is server-side rendering (SSR) performance benefits?',
      answer: 'Faster First Contentful Paint, better SEO, works without JavaScript. Costs: server load, TTFB, hydration overhead. Use for content-heavy sites, combine with static generation where possible.',
      difficulty: 'Hard',
      tags: ['ssr', 'rendering']
    },
    {
      id: 'perf21',
      category: 'performance',
      question: 'Explain content prefetching and preloading',
      answer: 'Prefetch: load resource for future navigation (<link rel="prefetch">). Preload: load critical resource early (<link rel="preload">). Prerender: load entire page in background. Use wisely to avoid bandwidth waste.',
      difficulty: 'Hard',
      tags: ['prefetch', 'preload']
    },
    {
      id: 'perf22',
      category: 'performance',
      question: 'How to reduce network requests?',
      answer: 'Bundle resources, sprite sheets, data URIs, HTTP/2, cache aggressively, combine APIs, use WebSockets instead of polling, implement GraphQL for efficient data fetching.',
      difficulty: 'Medium',
      tags: ['network', 'optimization']
    },
    {
      id: 'perf23',
      category: 'performance',
      question: 'What is the PRPL pattern?',
      answer: 'Push critical resources, Render initial route, Pre-cache remaining routes, Lazy-load other routes. Performance pattern for Progressive Web Apps. Optimizes for fast initial load and subsequent navigation.',
      difficulty: 'Hard',
      tags: ['prpl', 'pwa']
    },
    {
      id: 'perf24',
      category: 'performance',
      question: 'Explain GPU acceleration in browsers',
      answer: 'Offload rendering to GPU for better performance. Triggered by: transform, opacity, filter, will-change. Creates compositor layer. Benefits: smoother animations, but costs memory. Use judiciously.',
      difficulty: 'Hard',
      tags: ['gpu', 'rendering']
    },
    {
      id: 'perf25',
      category: 'performance',
      question: 'How to optimize memory usage in JavaScript?',
      answer: 'Avoid memory leaks (detached DOM nodes, closures, timers), use weak references (WeakMap, WeakSet), limit object creation, use object pooling for frequent allocations, profile with heap snapshots.',
      difficulty: 'Hard',
      tags: ['memory', 'javascript']
    },
    {
      id: 'perf26',
      category: 'performance',
      question: 'What is idle until urgent pattern?',
      answer: 'Perform non-urgent work during idle periods using requestIdleCallback. Browser schedules during idle time. Use for: logging, analytics, preloading, cleanup. Cancel if becomes urgent.',
      difficulty: 'Hard',
      tags: ['idle', 'scheduling']
    },
    {
      id: 'perf27',
      category: 'performance',
      question: 'Explain progressive hydration',
      answer: 'Hydrate components gradually rather than all at once. Improves Time to Interactive. Techniques: component-level hydration, priority-based hydration, lazy hydration. Advanced SSR optimization.',
      difficulty: 'Hard',
      tags: ['hydration', 'ssr']
    },
    {
      id: 'perf28',
      category: 'performance',
      question: 'How to optimize Webpack build performance?',
      answer: 'Use thread-loader, cache-loader, persistent caching, exclude node_modules, use faster minifier (Terser), code splitting, DLL plugin for vendor chunks, upgrade to Webpack 5.',
      difficulty: 'Hard',
      tags: ['webpack', 'build']
    },
    {
      id: 'perf29',
      category: 'performance',
      question: 'What is First Meaningful Paint?',
      answer: 'When primary content appears. Approximated by Largest Contentful Paint in Core Web Vitals. Affected by: render-blocking resources, critical resources, server response time. Target: <2.5s.',
      difficulty: 'Medium',
      tags: ['fmp', 'metrics']
    },
    {
      id: 'perf30',
      category: 'performance',
      question: 'Explain differential serving',
      answer: 'Serve modern JavaScript to modern browsers, legacy to old browsers. Using module/nomodule pattern, feature detection. Reduces bundle size for modern browsers, maintains compatibility.',
      difficulty: 'Hard',
      tags: ['differential-serving', 'bundling']
    },
    {
      id: 'perf31',
      category: 'performance',
      question: 'How to optimize font loading?',
      answer: 'Use font-display: swap, preload critical fonts, subset fonts, use system fonts where possible, use variable fonts, self-host fonts, avoid too many font weights. next/font for Next.js.',
      difficulty: 'Medium',
      tags: ['fonts', 'typography']
    },
    {
      id: 'perf32',
      category: 'performance',
      question: 'What is adaptive bitrate streaming?',
      answer: 'Adjust video quality based on network conditions. Protocols: HLS, DASH. Server provides multiple quality versions, client switches dynamically. Benefits: smooth playback, efficient bandwidth use.',
      difficulty: 'Hard',
      tags: ['video', 'streaming']
    },
    {
      id: 'perf33',
      category: 'performance',
      question: 'Explain JavaScript execution costs',
      answer: 'Parse/compile time (upfront cost), execution time (runtime cost), garbage collection (pause). Optimize: minimize bundle size, defer non-critical JavaScript, use efficient algorithms, avoid micro-optimizations prematurely.',
      difficulty: 'Hard',
      tags: ['javascript', 'execution']
    },
    {
      id: 'perf34',
      category: 'performance',
      question: 'How to monitor performance in production?',
      answer: 'Real User Monitoring (RUM): Google Analytics, New Relic, Datadog, Sentry. Synthetic monitoring: WebPageTest, Lighthouse CI, SpeedCurve. Alerting on Core Web Vitals thresholds.',
      difficulty: 'Medium',
      tags: ['monitoring', 'production']
    },
    {
      id: 'perf35',
      category: 'performance',
      question: 'What is Intersection Observer API?',
      answer: 'Asynchronously observe element visibility changes. Use for: lazy loading images, infinite scroll, analytics, animations. More efficient than scroll event listeners.',
      difficulty: 'Medium',
      tags: ['intersection-observer', 'api']
    },
    {
      id: 'perf36',
      category: 'performance',
      question: 'Explain Service Worker caching strategies',
      answer: 'Cache First (offline), Network First (freshness), Stale While Revalidate (balance), Network Only, Cache Only. Use Workbox for simplified implementation.',
      difficulty: 'Hard',
      tags: ['service-worker', 'caching']
    },
    {
      id: 'perf37',
      category: 'performance',
      question: 'How to reduce CLS (Cumulative Layout Shift)?',
      answer: 'Set dimensions for images/videos/ads, reserve space for dynamic content, avoid inserting content above existing, use transform for animations, prefer opacity for fade-ins, test with Chrome DevTools.',
      difficulty: 'Hard',
      tags: ['cls', 'layout-shift']
    },
    {
      id: 'perf38',
      category: 'performance',
      question: 'What is long task in browser?',
      answer: 'JavaScript task taking >50ms. Blocks main thread, affects interactivity. Identify with Chrome DevTools Long Tasks panel. Solutions: code splitting, web workers, yielding with setTimeout, requestIdleCallback.',
      difficulty: 'Hard',
      tags: ['long-tasks', 'javascript']
    },
    {
      id: 'perf39',
      category: 'performance',
      question: 'Explain database connection pooling benefits',
      answer: 'Reuse connections, reduce overhead, limit connections, manage timeouts. Improves: response time, throughput, resource utilization. Configure pool size based on workload and database limits.',
      difficulty: 'Medium',
      tags: ['database', 'connection-pooling']
    },
    {
      id: 'perf40',
      category: 'performance',
      question: 'How to optimize third-party scripts?',
      answer: 'Load asynchronously, defer non-critical, use Intersection Observer for lazy loading, host locally if possible, monitor performance impact, set appropriate crossorigin attributes, use resource hints.',
      difficulty: 'Medium',
      tags: ['third-party', 'optimization']
    },
    {
      id: 'perf41',
      category: 'performance',
      question: 'What is the performance budget?',
      answer: 'Set limits for performance metrics: bundle size, load time, Core Web Vitals. Enforce with CI/CD, Lighthouse CI, bundlesize. Team agreement on performance constraints.',
      difficulty: 'Medium',
      tags: ['performance-budget', 'process']
    },
    {
      id: 'perf42',
      category: 'performance',
      question: 'Explain browser painting and compositing',
      answer: 'Painting: fill pixels. Compositing: combine layers. Optimize: use will-change for animations, prefer transform/opacity (compositor-only), avoid paint-inducing properties, layer promotion judiciously.',
      difficulty: 'Hard',
      tags: ['painting', 'compositing']
    },
    {
      id: 'perf43',
      category: 'performance',
      question: 'How to optimize API response time?',
      answer: 'Add indexes, cache responses, paginate results, compress responses, use HTTP/2, implement GraphQL for selective fields, connection pooling, load balancing, database optimization.',
      difficulty: 'Hard',
      tags: ['api', 'backend']
    },
    {
      id: 'perf44',
      category: 'performance',
      question: 'What is DNS prefetching?',
      answer: 'Resolve domain names before needed. <link rel="dns-prefetch" href="//example.com">. Reduces DNS lookup time for external resources. Use for domains you\'ll connect to soon.',
      difficulty: 'Medium',
      tags: ['dns', 'prefetch']
    },
    {
      id: 'perf45',
      category: 'performance',
      question: 'Explain React concurrent features for performance',
      answer: 'useTransition for non-urgent updates, useDeferredValue for deferring updates, Suspense for code/data loading. Enables interruptible rendering, improves perceived performance, better user experience.',
      difficulty: 'Hard',
      tags: ['react', 'concurrent']
    },
    {
      id: 'perf46',
      category: 'performance',
      question: 'How to optimize WebSocket performance?',
      answer: 'Use binary protocols (MessagePack, Protobuf), compress messages, implement heartbeat, handle backpressure, reconnect strategies, connection pooling, monitor connection count.',
      difficulty: 'Hard',
      tags: ['websocket', 'real-time']
    },
    {
      id: 'perf47',
      category: 'performance',
      question: 'What is the cost of JavaScript frameworks?',
      answer: 'Bundle size, parse/compile time, runtime overhead, abstraction layers. Choose framework wisely, use lightweight alternatives where possible, tree shake unused features, consider framework-less for simple sites.',
      difficulty: 'Medium',
      tags: ['frameworks', 'cost']
    },
    {
      id: 'perf48',
      category: 'performance',
      question: 'Explain database query optimization techniques',
      answer: 'Use EXPLAIN, add appropriate indexes, avoid SELECT *, normalize/denormalize appropriately, use connection pooling, implement caching, batch operations, use stored procedures for complex queries.',
      difficulty: 'Hard',
      tags: ['database', 'query-optimization']
    },
    {
      id: 'perf49',
      category: 'performance',
      question: 'How to optimize mobile performance?',
      answer: 'Minimize JavaScript, optimize images, reduce network requests, use efficient touch events, test on real devices, consider mobile CPUs, optimize for cellular networks, implement PRPL pattern.',
      difficulty: 'Hard',
      tags: ['mobile', 'optimization']
    },
    {
      id: 'perf50',
      category: 'performance',
      question: 'What is the performance impact of security features?',
      answer: 'HTTPS adds TLS handshake overhead (mitigate with TLS 1.3, session resumption). CSP may block resources. Security headers add bytes. Balance security and performance: use CDN for TLS termination, optimize cipher suites.',
      difficulty: 'Hard',
      tags: ['security', 'performance']
    },

    // =============== Security - 50 Questions ===============
    {
      id: 'sec1',
      category: 'security',
      question: 'What is Cross-Site Scripting (XSS)? How to prevent?',
      answer: 'XSS injects malicious scripts into web pages. Types: Reflected (URL), Stored (database), DOM-based. Prevention: input validation, output encoding, CSP, HttpOnly cookies, X-XSS-Protection header, avoid innerHTML, use safe APIs.',
      difficulty: 'Hard',
      tags: ['xss', 'web-security']
    },
    {
      id: 'sec2',
      category: 'security',
      question: 'Explain Cross-Site Request Forgery (CSRF)',
      answer: 'CSRF tricks user into performing unwanted actions on authenticated site. Prevention: CSRF tokens, SameSite cookies, double submit cookies, checking Origin/Referer headers, requiring re-authentication for sensitive actions.',
      difficulty: 'Hard',
      tags: ['csrf', 'web-security']
    },
    {
      id: 'sec3',
      category: 'security',
      question: 'What is SQL injection? Prevention methods',
      answer: 'SQL injection executes malicious SQL via input. Prevention: parameterized queries (prepared statements), stored procedures, input validation, principle of least privilege, ORM with parameterization, database firewall.',
      difficulty: 'Hard',
      tags: ['sql-injection', 'database']
    },
    {
      id: 'sec4',
      category: 'security',
      question: 'Explain Content Security Policy (CSP)',
      answer: 'CSP restricts sources for scripts, styles, images, etc. Implement via HTTP header or meta tag. Directives: default-src, script-src, style-src, img-src, connect-src. Use nonce or hash for inline scripts. Report-uri for violations.',
      difficulty: 'Hard',
      tags: ['csp', 'security-headers']
    },
    {
      id: 'sec5',
      category: 'security',
      question: 'What is SameSite cookie attribute?',
      answer: 'Controls when cookies are sent: Strict (same site only), Lax (same site + top-level navigation), None (always, requires Secure). Default is Lax. Protects against CSRF, prevents cross-site cookie leakage.',
      difficulty: 'Medium',
      tags: ['samesite', 'cookies']
    },
    {
      id: 'sec6',
      category: 'security',
      question: 'Explain OAuth 2.0 and OpenID Connect',
      answer: 'OAuth 2.0: authorization framework, grants access tokens. OpenID Connect: authentication layer on OAuth, provides ID tokens. Flows: Authorization Code (web), Implicit (deprecated), Client Credentials (machine-to-machine), PKCE for mobile.',
      difficulty: 'Hard',
      tags: ['oauth', 'openid', 'authentication']
    },
    {
      id: 'sec7',
      category: 'security',
      question: 'What is JWT and security considerations?',
      answer: 'JSON Web Token: signed token containing claims. Structure: header.payload.signature. Security: use strong algorithm (RS256), validate signature, set short expiration, store securely, avoid sensitive data in payload, use HTTPS.',
      difficulty: 'Hard',
      tags: ['jwt', 'authentication']
    },
    {
      id: 'sec8',
      category: 'security',
      question: 'Explain HTTPS and TLS handshake',
      answer: 'HTTPS = HTTP + TLS encryption. Handshake: ClientHello, ServerHello (certificate), key exchange, session keys. Certificates validated via CA. Benefits: confidentiality, integrity, authentication. Use HSTS to enforce HTTPS.',
      difficulty: 'Hard',
      tags: ['https', 'tls', 'encryption']
    },
    {
      id: 'sec9',
      category: 'security',
      question: 'What is rate limiting and why important?',
      answer: 'Limit requests per user/IP/time period. Prevents: brute force attacks, DDoS, API abuse, scraping. Strategies: token bucket, leaky bucket, fixed/sliding window. Implement in gateway, middleware, or dedicated service.',
      difficulty: 'Medium',
      tags: ['rate-limiting', 'security']
    },
    {
      id: 'sec10',
      category: 'security',
      question: 'Explain security headers',
      answer: 'HTTP headers for security: X-Frame-Options (clickjacking), X-Content-Type-Options (MIME sniffing), X-XSS-Protection, Referrer-Policy, Feature-Policy/Permissions-Policy, Strict-Transport-Security (HSTS). Use Helmet.js for Express.',
      difficulty: 'Hard',
      tags: ['security-headers']
    },
    {
      id: 'sec11',
      category: 'security',
      question: 'What is CORS and security implications?',
      answer: 'Cross-Origin Resource Sharing allows cross-origin requests. Security: configure carefully, whitelist origins, avoid wildcards, validate Origin header, use credentials carefully, preflight requests. Not security feature, relaxation of SOP.',
      difficulty: 'Hard',
      tags: ['cors', 'web-security']
    },
    {
      id: 'sec12',
      category: 'security',
      question: 'Explain password security best practices',
      answer: 'Store hashed (bcrypt, Argon2), salt each password, minimum length/complexity, rate limit attempts, prevent common passwords, use password managers, MFA, passwordless authentication, regular rotation (controversial).',
      difficulty: 'Medium',
      tags: ['passwords', 'authentication']
    },
    {
      id: 'sec13',
      category: 'security',
      question: 'What is dependency vulnerability scanning?',
      answer: 'Scan dependencies for known vulnerabilities. Tools: npm audit, Snyk, OWASP Dependency-Check, GitHub Dependabot, WhiteSource. Automate in CI/CD, update regularly, use lock files, minimize dependencies.',
      difficulty: 'Medium',
      tags: ['dependencies', 'vulnerability']
    },
    {
      id: 'sec14',
      category: 'security',
      question: 'Explain secure session management',
      answer: 'Use secure random session IDs, store server-side, set HttpOnly and Secure flags, reasonable expiration, regenerate on login/logout, invalidate after inactivity, bind to IP/user agent (controversial).',
      difficulty: 'Hard',
      tags: ['sessions', 'authentication']
    },
    {
      id: 'sec15',
      category: 'security',
      question: 'What is clickjacking? Prevention',
      answer: 'Attack tricks user into clicking hidden element. Prevention: X-Frame-Options header, CSP frame-ancestors directive, JavaScript framebusting (less reliable).',
      difficulty: 'Medium',
      tags: ['clickjacking', 'web-security']
    },
    {
      id: 'sec16',
      category: 'security',
      question: 'Explain SQL injection prevention with ORM',
      answer: 'ORMs automatically parameterize queries, but can still be misused. Safe: User.findByPk(id). Unsafe: sequelize.query(`SELECT * FROM users WHERE id = ${id}`). Always use parameterized methods, not string concatenation.',
      difficulty: 'Hard',
      tags: ['sql-injection', 'orm']
    },
    {
      id: 'sec17',
      category: 'security',
      question: 'What is XXE (XML External Entity) attack?',
      answer: 'Exploits XML parsers to read files, execute code, DoS. Prevention: disable DTDs, external entities, validate XML schemas, use less complex data formats (JSON), keep parsers updated.',
      difficulty: 'Hard',
      tags: ['xxe', 'xml']
    },
    {
      id: 'sec18',
      category: 'security',
      question: 'Explain security in microservices',
      answer: 'Service-to-service authentication (mTLS, JWT), API gateways, centralized logging, secret management (Vault, AWS Secrets Manager), network policies, least privilege, regular audits, zero-trust architecture.',
      difficulty: 'Hard',
      tags: ['microservices', 'security']
    },
    {
      id: 'sec19',
      category: 'security',
      question: 'What is SSRF (Server-Side Request Forgery)?',
      answer: 'Attack makes server request internal resources. Prevention: validate user input (allowlists), don\'t make requests based on user input, use URL parsers carefully, network segmentation, firewalls.',
      difficulty: 'Hard',
      tags: ['ssrf', 'web-security']
    },
    {
      id: 'sec20',
      category: 'security',
      question: 'Explain secure file upload',
      answer: 'Validate file type (check MIME, extension), limit size, rename files, store outside webroot, scan for malware, use CDN for delivery, set Content-Disposition, avoid executing uploaded files.',
      difficulty: 'Hard',
      tags: ['file-upload', 'security']
    },
    {
      id: 'sec21',
      category: 'security',
      question: 'What is HTTP security headers middleware?',
      answer: 'Helmet.js for Express sets security headers: hide X-Powered-By, X-Frame-Options, XSS Protection, etc. Configure appropriately for application. Not one-size-fits-all.',
      difficulty: 'Medium',
      tags: ['security-headers', 'express']
    },
    {
      id: 'sec22',
      category: 'security',
      question: 'Explain security in single page applications (SPA)',
      answer: 'Store tokens securely (not localStorage for XSS protection), use HttpOnly cookies via backend, implement refresh token rotation, secure against XSS, validate state in OAuth, use PKCE, Content Security Policy.',
      difficulty: 'Hard',
      tags: ['spa', 'security']
    },
    {
      id: 'sec23',
      category: 'security',
      question: 'What is IDOR (Insecure Direct Object Reference)?',
      answer: 'Access objects directly via identifiers without authorization. Prevention: implement proper authorization checks, use indirect reference maps, validate user owns resource, avoid sequential IDs.',
      difficulty: 'Hard',
      tags: ['idor', 'authorization']
    },
    {
      id: 'sec24',
      category: 'security',
      question: 'Explain subresource integrity (SRI)',
      answer: 'Ensure external resources haven\'t been tampered with. Add integrity attribute: <script src="..." integrity="sha384-..."></script>. Browser verifies hash. Use for CDN resources, third-party scripts.',
      difficulty: 'Medium',
      tags: ['sri', 'integrity']
    },
    {
      id: 'sec25',
      category: 'security',
      question: 'What is security misconfiguration?',
      answer: 'Default credentials, verbose errors, unnecessary services, outdated software, permissive CORS, missing security headers. Prevention: hardening guides, automation, regular scans, least privilege, proper error handling.',
      difficulty: 'Medium',
      tags: ['misconfiguration', 'hardening']
    },
    {
      id: 'sec26',
      category: 'security',
      question: 'Explain HSTS (HTTP Strict Transport Security)',
      answer: 'Header forcing HTTPS: Strict-Transport-Security: max-age=31536000; includeSubDomains; preload. Browser remembers, prevents SSL stripping. Submit to preload list for all browsers.',
      difficulty: 'Medium',
      tags: ['hsts', 'https']
    },
    {
      id: 'sec27',
      category: 'security',
      question: 'What is business logic vulnerability?',
      answer: 'Flaws in application logic, not technical implementation. Examples: price manipulation, bypassing workflow steps, excessive privileges. Prevention: threat modeling, code review, penetration testing, input validation.',
      difficulty: 'Hard',
      tags: ['business-logic', 'vulnerability']
    },
    {
      id: 'sec28',
      category: 'security',
      question: 'Explain security in WebSocket connections',
      answer: 'Use wss:// (WebSocket over TLS), validate Origin header, implement authentication (send token after connection), rate limiting, input validation, don\'t trust client messages, close idle connections.',
      difficulty: 'Hard',
      tags: ['websocket', 'security']
    },
    {
      id: 'sec29',
      category: 'security',
      question: 'What is DNS hijacking/spoofing?',
      answer: 'Attack redirects DNS queries to malicious servers. Prevention: DNSSEC, use reputable DNS providers, monitor for changes, educate users about phishing, use certificate pinning (deprecated).',
      difficulty: 'Hard',
      tags: ['dns', 'hijacking']
    },
    {
      id: 'sec30',
      category: 'security',
      question: 'Explain secure coding practices',
      answer: 'Input validation, output encoding, parameterized queries, principle of least privilege, defense in depth, fail securely, keep security simple, use established libraries, code review, security testing.',
      difficulty: 'Medium',
      tags: ['secure-coding', 'best-practices']
    },
    {
      id: 'sec31',
      category: 'security',
      question: 'What is malware scanning for uploads?',
      answer: 'Scan user-uploaded files for viruses/malware. Services: ClamAV, VirusTotal API, AWS/Azure built-in scanning. Implement in upload pipeline, quarantine suspicious files, log results.',
      difficulty: 'Medium',
      tags: ['malware', 'file-upload']
    },
    {
      id: 'sec32',
      category: 'security',
      question: 'Explain JSON Web Token (JWT) best practices',
      answer: 'Use RS256 (asymmetric), short expiration, refresh tokens, validate issuer/audience, don\'t store sensitive data, secure transmission (HTTPS), token blacklisting for logout, use libraries (jsonwebtoken).',
      difficulty: 'Hard',
      tags: ['jwt', 'best-practices']
    },
    {
      id: 'sec33',
      category: 'security',
      question: 'What is security testing methodology?',
      answer: 'SAST (static analysis), DAST (dynamic), IAST (interactive), penetration testing, bug bounty, code review, dependency scanning, configuration review. OWASP Testing Guide, ASVS for standards.',
      difficulty: 'Hard',
      tags: ['testing', 'methodology']
    },
    {
      id: 'sec34',
      category: 'security',
      question: 'Explain zero-day vulnerability',
      answer: 'Vulnerability unknown to vendor, no patch available. Mitigation: defense in depth, intrusion detection, behavior monitoring, network segmentation, rapid patching when available, threat intelligence.',
      difficulty: 'Hard',
      tags: ['zero-day', 'vulnerability']
    },
    {
      id: 'sec35',
      category: 'security',
      question: 'What is man-in-the-middle attack? Prevention',
      answer: 'Intercept communication between parties. Prevention: HTTPS (TLS), certificate validation, HSTS, certificate pinning (deprecated), VPN for internal traffic, network monitoring, educate about phishing.',
      difficulty: 'Medium',
      tags: ['mitm', 'encryption']
    },
    {
      id: 'sec36',
      category: 'security',
      question: 'Explain security incident response',
      answer: 'Plan: preparation, identification, containment, eradication, recovery, lessons learned. Have IR team, communication plan, backup/restore procedures, legal considerations, post-mortem culture.',
      difficulty: 'Hard',
      tags: ['incident-response', 'process']
    },
    {
      id: 'sec37',
      category: 'security',
      question: 'What is ethical hacking?',
      answer: 'Authorized hacking to find vulnerabilities. Types: white box (full access), gray box (partial), black box (no access). Methodology: reconnaissance, scanning, gaining access, maintaining access, covering tracks.',
      difficulty: 'Medium',
      tags: ['ethical-hacking', 'testing']
    },
    {
      id: 'sec38',
      category: 'security',
      question: 'Explain secure random number generation',
      answer: 'Use cryptographically secure RNG: crypto.randomBytes() in Node.js, window.crypto.getRandomValues() in browser. Never use Math.random() for security. For tokens, use sufficient entropy (32 bytes).',
      difficulty: 'Hard',
      tags: ['random', 'cryptography']
    },
    {
      id: 'sec39',
      category: 'security',
      question: 'What is input validation vs sanitization?',
      answer: 'Validation: check if input meets criteria (reject if not). Sanitization: clean input to make safe. Prefer validation (whitelist approach). Use libraries: validator.js, Joi, express-validator.',
      difficulty: 'Medium',
      tags: ['input-validation', 'sanitization']
    },
    {
      id: 'sec40',
      category: 'security',
      question: 'Explain secrets management',
      answer: 'Store secrets (API keys, passwords) securely: environment variables (not in code), secret managers (AWS Secrets Manager, HashiCorp Vault), encrypted files, access controls, rotation policies, audit logs.',
      difficulty: 'Hard',
      tags: ['secrets', 'management']
    },
    {
      id: 'sec41',
      category: 'security',
      question: 'What is security through obscurity?',
      answer: 'Relying on secrecy for security (hidden endpoints, non-standard ports). Not recommended as primary defense. Use in combination with proper security measures, not alone.',
      difficulty: 'Easy',
      tags: ['obscurity', 'principle']
    },
    {
      id: 'sec42',
      category: 'security',
      question: 'Explain certificate management',
      answer: 'SSL/TLS certificates: obtain from CA (Let\'s Encrypt), auto-renewal, monitor expiration, revocation handling, private key protection, certificate transparency logs, use wildcard certificates appropriately.',
      difficulty: 'Hard',
      tags: ['certificates', 'tls']
    },
    {
      id: 'sec43',
      category: 'security',
      question: 'What is security logging and monitoring?',
      answer: 'Log: authentication attempts, access control failures, input validation errors, system errors. Monitor: real-time alerts, SIEM (Security Information and Event Management), regular review, retention policies.',
      difficulty: 'Medium',
      tags: ['logging', 'monitoring']
    },
    {
      id: 'sec44',
      category: 'security',
      question: 'Explain defense in depth',
      answer: 'Multiple layers of security controls. If one fails, others provide protection. Examples: firewall, WAF, authentication, authorization, input validation, output encoding, secure coding, monitoring.',
      difficulty: 'Medium',
      tags: ['defense-in-depth', 'strategy']
    },
    {
      id: 'sec45',
      category: 'security',
      question: 'What is cloud security best practices?',
      answer: 'Shared responsibility model, identity and access management (IAM), network security groups, encryption at rest/transit, logging/monitoring, vulnerability management, compliance frameworks, regular audits.',
      difficulty: 'Hard',
      tags: ['cloud', 'security']
    },
    {
      id: 'sec46',
      category: 'security',
      question: 'Explain password hashing algorithms',
      answer: 'bcrypt (adaptive, slow), Argon2 (winner of Password Hashing Competition), scrypt (memory-hard). Not recommended: MD5, SHA-1, SHA-256 (too fast). Always salt, use appropriate work factor.',
      difficulty: 'Hard',
      tags: ['hashing', 'passwords']
    },
    {
      id: 'sec47',
      category: 'security',
      question: 'What is security awareness training?',
      answer: 'Educate developers/employees about security: secure coding, phishing awareness, password hygiene, social engineering, reporting procedures. Regular training, simulated phishing, security champions program.',
      difficulty: 'Medium',
      tags: ['training', 'awareness']
    },
    {
      id: 'sec48',
      category: 'security',
      question: 'Explain mobile app security',
      answer: 'Certificate pinning, secure storage (Keychain/Keystore), biometric authentication, jailbreak/root detection, obfuscation, secure communication, input validation, regular updates, privacy considerations.',
      difficulty: 'Hard',
      tags: ['mobile', 'security']
    },
    {
      id: 'sec49',
      category: 'security',
      question: 'What is GDPR and security implications?',
      answer: 'General Data Protection Regulation: data protection/privacy law. Security requirements: data minimization, consent, right to be forgotten, data portability, breach notification, privacy by design, DPO appointment.',
      difficulty: 'Hard',
      tags: ['gdpr', 'compliance']
    },
    {
      id: 'sec50',
      category: 'security',
      question: 'Explain web application firewall (WAF)',
      answer: 'Filters HTTP traffic, blocks attacks: SQLi, XSS, CSRF, etc. Can be cloud-based (Cloudflare, AWS WAF) or hardware. Rules based on OWASP Core Rule Set. Not replacement for secure coding, but additional layer.',
      difficulty: 'Hard',
      tags: ['waf', 'firewall']
    },
      // =============== DSA - 50 Questions ===============
       {
      id: 'dsae1',
      category: 'dsa',
      question: 'What is an array? Basic operations',
      answer: 'Array: contiguous collection of same-type elements. Operations: access (O(1)), search (O(n)), insert (O(n) at beginning/middle, O(1) at end if space), delete (O(n)). Example: int arr[5] = {1, 2, 3, 4, 5};',
      difficulty: 'Easy',
      tags: ['array', 'basics']
    },
    {
      id: 'dsae2',
      category: 'dsa',
      question: 'How to reverse an array?',
      answer: 'Two-pointer approach: swap first with last, move inward until middle. Code: for(i=0, j=n-1; i<j; i++, j--) swap(arr[i], arr[j]);. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['array', 'reverse']
    },
    {
      id: 'dsae3',
      category: 'dsa',
      question: 'Find maximum element in array',
      answer: 'Initialize max = arr[0], iterate through array, update max if current > max. Code: for(i=1; i<n; i++) if(arr[i] > max) max = arr[i];. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['array', 'max']
    },
    {
      id: 'dsae4',
      category: 'dsa',
      question: 'Calculate sum of array elements',
      answer: 'Initialize sum = 0, add each element. Code: for(i=0; i<n; i++) sum += arr[i];. Time: O(n), Space: O(1). Alternative: recursive sum(n) = arr[n-1] + sum(n-1).',
      difficulty: 'Easy',
      tags: ['array', 'sum']
    },
    {
      id: 'dsae5',
      category: 'dsa',
      question: 'What is a linked list? Singly vs doubly linked',
      answer: 'Linked list: linear data structure with nodes connected via pointers. Singly: each node points to next. Doubly: each node points to next and previous. Operations: insert/delete O(1) at head, O(n) search.',
      difficulty: 'Easy',
      tags: ['linked-list', 'basics']
    },
    {
      id: 'dsae6',
      category: 'dsa',
      question: 'Traverse a linked list',
      answer: 'Start from head, follow next pointers until null. Code: Node* curr = head; while(curr != NULL) { process(curr->data); curr = curr->next; }. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['linked-list', 'traversal']
    },
    {
      id: 'dsae7',
      category: 'dsa',
      question: 'Insert node at beginning of linked list',
      answer: 'Create new node, set its next to current head, update head to new node. Code: newNode->next = head; head = newNode;. Time: O(1).',
      difficulty: 'Easy',
      tags: ['linked-list', 'insert']
    },
    {
      id: 'dsae8',
      category: 'dsa',
      question: 'Delete node from beginning of linked list',
      answer: 'If list not empty, store head in temp, move head to head->next, delete temp. Code: if(head != NULL) { Node* temp = head; head = head->next; delete temp; }. Time: O(1).',
      difficulty: 'Easy',
      tags: ['linked-list', 'delete']
    },
    {
      id: 'dsae9',
      category: 'dsa',
      question: 'What is a stack? LIFO principle',
      answer: 'Stack: linear data structure following LIFO (Last In First Out). Operations: push (add to top), pop (remove from top), peek (view top), isEmpty. Used for: function calls, undo operations, expression evaluation.',
      difficulty: 'Easy',
      tags: ['stack', 'basics']
    },
    {
      id: 'dsae10',
      category: 'dsa',
      question: 'Implement stack using array',
      answer: 'Use array and top index. Push: if(top < size-1) arr[++top] = value. Pop: if(top >= 0) return arr[top--]. Peek: return arr[top]. isEmpty: return top == -1.',
      difficulty: 'Easy',
      tags: ['stack', 'array']
    },
    {
      id: 'dsae11',
      category: 'dsa',
      question: 'Check balanced parentheses using stack',
      answer: 'Scan string, push opening brackets, when closing bracket: if stack empty or top doesn\'t match → invalid, else pop. Finally, valid if stack empty. Time: O(n).',
      difficulty: 'Easy',
      tags: ['stack', 'parentheses']
    },
    {
      id: 'dsae12',
      category: 'dsa',
      question: 'What is a queue? FIFO principle',
      answer: 'Queue: linear data structure following FIFO (First In First Out). Operations: enqueue (add to rear), dequeue (remove from front), peek (view front), isEmpty. Used for: BFS, task scheduling, buffers.',
      difficulty: 'Easy',
      tags: ['queue', 'basics']
    },
    {
      id: 'dsae13',
      category: 'dsa',
      question: 'Implement queue using array',
      answer: 'Use array, front and rear indices. Circular array approach: enqueue: rear = (rear+1)%size, arr[rear]=value. dequeue: front = (front+1)%size. isEmpty: front==rear. Handle overflow/underflow.',
      difficulty: 'Easy',
      tags: ['queue', 'array']
    },
    {
      id: 'dsae14',
      category: 'dsa',
      question: 'What is linear search?',
      answer: 'Search algorithm checking each element sequentially until target found or end reached. Works on any list (sorted/unsorted). Time: O(n) worst/average, O(1) best (first element).',
      difficulty: 'Easy',
      tags: ['search', 'linear']
    },
    {
      id: 'dsae15',
      category: 'dsa',
      question: 'Implement linear search',
      answer: 'Iterate through array, compare each element with target. Code: for(i=0; i<n; i++) if(arr[i] == target) return i; return -1;. Works for arrays and linked lists.',
      difficulty: 'Easy',
      tags: ['search', 'implementation']
    },
    {
      id: 'dsae16',
      category: 'dsa',
      question: 'What is binary search? Requirements',
      answer: 'Search algorithm for sorted arrays. Repeatedly divides search interval in half. Compare target with middle element, eliminate half. Time: O(log n). Requirements: array must be sorted.',
      difficulty: 'Easy',
      tags: ['search', 'binary']
    },
    {
      id: 'dsae17',
      category: 'dsa',
      question: 'Implement iterative binary search',
      answer: 'Code: low=0, high=n-1; while(low<=high) { mid=(low+high)/2; if(arr[mid]==target) return mid; else if(arr[mid]<target) low=mid+1; else high=mid-1; } return -1;',
      difficulty: 'Easy',
      tags: ['binary-search', 'implementation']
    },
    {
      id: 'dsae18',
      category: 'dsa',
      question: 'Find second largest element in array',
      answer: 'Initialize first=second=INT_MIN. Traverse: if arr[i]>first: second=first, first=arr[i]; else if arr[i]>second && arr[i]!=first: second=arr[i];. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['array', 'second-largest']
    },
    {
      id: 'dsae19',
      category: 'dsa',
      question: 'Move zeros to end of array',
      answer: 'Two-pointer: j=0 for non-zero position. Traverse: if arr[i]!=0: swap arr[i] and arr[j], j++. After loop, all non-zeros in front, zeros at end. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['array', 'zeros']
    },
    {
      id: 'dsae20',
      category: 'dsa',
      question: 'Check if array is sorted',
      answer: 'Traverse array, check if each element >= previous (ascending) or <= previous (descending). Code: for(i=1; i<n; i++) if(arr[i] < arr[i-1]) return false; return true;. Time: O(n).',
      difficulty: 'Easy',
      tags: ['array', 'sorted']
    },
    {
      id: 'dsae21',
      category: 'dsa',
      question: 'Remove duplicates from sorted array',
      answer: 'Two-pointer: j=1 for unique position. Traverse: if arr[i] != arr[i-1]: arr[j]=arr[i], j++. Return j (new length). Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['array', 'duplicates']
    },
    {
      id: 'dsae22',
      category: 'dsa',
      question: 'Find middle element of linked list',
      answer: 'Two-pointer: slow and fast pointers. slow moves 1 step, fast moves 2 steps. When fast reaches end, slow at middle. Code: while(fast!=NULL && fast->next!=NULL) { slow=slow->next; fast=fast->next->next; }',
      difficulty: 'Easy',
      tags: ['linked-list', 'middle']
    },
    {
      id: 'dsae23',
      category: 'dsa',
      question: 'Reverse a linked list',
      answer: 'Iterative: three pointers prev=NULL, curr=head, next=NULL. while(curr) { next=curr->next; curr->next=prev; prev=curr; curr=next; } head=prev. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['linked-list', 'reverse']
    },
    {
      id: 'dsae24',
      category: 'dsa',
      question: 'Detect loop in linked list',
      answer: 'Floyd\'s Cycle Detection: slow and fast pointers. If they meet, loop exists. Code: while(fast && fast->next) { slow=slow->next; fast=fast->next->next; if(slow==fast) return true; } return false;',
      difficulty: 'Easy',
      tags: ['linked-list', 'loop']
    },
    {
      id: 'dsae25',
      category: 'dsa',
      question: 'Find length of linked list',
      answer: 'Traverse and count nodes. Iterative: count=0; while(curr) { count++; curr=curr->next; }. Recursive: if(head==NULL) return 0; return 1 + count(head->next);',
      difficulty: 'Easy',
      tags: ['linked-list', 'length']
    },
    {
      id: 'dsae26',
      category: 'dsa',
      question: 'What is bubble sort? How it works',
      answer: 'Sorting algorithm repeatedly swapping adjacent elements if wrong order. After each pass, largest element bubbles to end. Time: O(n²) worst/average, O(n) best (already sorted). Space: O(1).',
      difficulty: 'Easy',
      tags: ['sorting', 'bubble']
    },
    {
      id: 'dsae27',
      category: 'dsa',
      question: 'Implement bubble sort',
      answer: 'Code: for(i=0; i<n-1; i++) for(j=0; j<n-i-1; j++) if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);. Optimized: stop if no swaps in pass (already sorted).',
      difficulty: 'Easy',
      tags: ['bubble-sort', 'implementation']
    },
    {
      id: 'dsae28',
      category: 'dsa',
      question: 'What is selection sort?',
      answer: 'Sorting algorithm finds minimum element, swaps with first position, repeats for remaining. Time: O(n²) all cases. Space: O(1). Not stable, fewer swaps than bubble sort.',
      difficulty: 'Easy',
      tags: ['sorting', 'selection']
    },
    {
      id: 'dsae29',
      category: 'dsa',
      question: 'Implement selection sort',
      answer: 'Code: for(i=0; i<n-1; i++) { min_idx=i; for(j=i+1; j<n; j++) if(arr[j]<arr[min_idx]) min_idx=j; swap(arr[i], arr[min_idx]); }',
      difficulty: 'Easy',
      tags: ['selection-sort', 'implementation']
    },
    {
      id: 'dsae30',
      category: 'dsa',
      question: 'What is insertion sort?',
      answer: 'Sorting algorithm builds final sorted array one element at a time. Takes element, finds correct position in sorted portion, inserts. Time: O(n²) worst/average, O(n) best. Space: O(1). Stable.',
      difficulty: 'Easy',
      tags: ['sorting', 'insertion']
    },
    {
      id: 'dsae31',
      category: 'dsa',
      question: 'Implement insertion sort',
      answer: 'Code: for(i=1; i<n; i++) { key=arr[i]; j=i-1; while(j>=0 && arr[j]>key) { arr[j+1]=arr[j]; j--; } arr[j+1]=key; }',
      difficulty: 'Easy',
      tags: ['insertion-sort', 'implementation']
    },
    {
      id: 'dsae32',
      category: 'dsa',
      question: 'Find factorial using recursion',
      answer: 'Base case: if n==0 return 1. Recursive: return n * factorial(n-1). Time: O(n), Space: O(n) for call stack. Iterative: result=1; for(i=2; i<=n; i++) result*=i; Space O(1).',
      difficulty: 'Easy',
      tags: ['recursion', 'factorial']
    },
    {
      id: 'dsae33',
      category: 'dsa',
      question: 'Fibonacci series using recursion',
      answer: 'Base: if n<=1 return n. Recursive: return fib(n-1) + fib(n-2). Time: O(2^n) naive, O(n) with memoization. Iterative: a=0, b=1; for(i=2; i<=n; i++) { c=a+b; a=b; b=c; }',
      difficulty: 'Easy',
      tags: ['recursion', 'fibonacci']
    },
    {
      id: 'dsae34',
      category: 'dsa',
      question: 'Check if string is palindrome',
      answer: 'Two-pointer: compare first with last, move inward. Code: for(i=0, j=n-1; i<j; i++, j--) if(str[i]!=str[j]) return false; return true. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['string', 'palindrome']
    },
    {
      id: 'dsae35',
      category: 'dsa',
      question: 'Count vowels in string',
      answer: 'Traverse string, check if character is vowel (a,e,i,o,u). Count. Code: count=0; for(i=0; i<str.length(); i++) if(str[i]==\'a\'||str[i]==\'e\'...) count++;. Time: O(n).',
      difficulty: 'Easy',
      tags: ['string', 'vowels']
    },
    {
      id: 'dsae36',
      category: 'dsa',
      question: 'Reverse a string',
      answer: 'Two-pointer swap similar to array. Code: for(i=0, j=n-1; i<j; i++, j--) swap(str[i], str[j]);. Time: O(n), Space: O(1). Built-in: reverse(str.begin(), str.end());',
      difficulty: 'Easy',
      tags: ['string', 'reverse']
    },
    {
      id: 'dsae37',
      category: 'dsa',
      question: 'Find largest of three numbers',
      answer: 'Compare using if-else or ternary. Code: if(a>=b && a>=c) return a; else if(b>=a && b>=c) return b; else return c;. Alternative: max(a, max(b, c)).',
      difficulty: 'Easy',
      tags: ['basics', 'max']
    },
    {
      id: 'dsae38',
      category: 'dsa',
      question: 'Check if number is prime',
      answer: 'Prime: divisible only by 1 and itself. Check divisibility from 2 to sqrt(n). Code: if(n<=1) return false; for(i=2; i*i<=n; i++) if(n%i==0) return false; return true;',
      difficulty: 'Easy',
      tags: ['number', 'prime']
    },
    {
      id: 'dsae39',
      category: 'dsa',
      question: 'Find GCD of two numbers',
      answer: 'Greatest Common Divisor. Euclidean algorithm: gcd(a,b) = gcd(b, a%b). Code: while(b!=0) { temp=b; b=a%b; a=temp; } return a;. Recursive: if(b==0) return a; return gcd(b, a%b);',
      difficulty: 'Easy',
      tags: ['number', 'gcd']
    },
    {
      id: 'dsae40',
      category: 'dsa',
      question: 'Find LCM of two numbers',
      answer: 'Least Common Multiple. lcm(a,b) = (a*b)/gcd(a,b). Code: return (a*b)/gcd(a,b);. Ensure handle large numbers to avoid overflow: return a/gcd(a,b)*b;',
      difficulty: 'Easy',
      tags: ['number', 'lcm']
    },
    {
      id: 'dsae41',
      category: 'dsa',
      question: 'Swap two numbers without third variable',
      answer: 'Using arithmetic: a = a + b; b = a - b; a = a - b;. Using XOR: a = a ^ b; b = a ^ b; a = a ^ b;. Note: may overflow with arithmetic method.',
      difficulty: 'Easy',
      tags: ['basics', 'swap']
    },
    {
      id: 'dsae42',
      category: 'dsa',
      question: 'Check if number is even or odd',
      answer: 'Using modulus: if(n%2==0) even else odd. Using bitwise: if(n&1) odd else even (bitwise AND with 1).',
      difficulty: 'Easy',
      tags: ['number', 'even-odd']
    },
    {
      id: 'dsae43',
      category: 'dsa',
      question: 'Convert decimal to binary',
      answer: 'Repeated division by 2, store remainders in reverse order. Code: while(n>0) { binary = (n%2) + binary; n/=2; }. Using bitwise: while(n>0) { binary = (n&1) + binary; n>>=1; }',
      difficulty: 'Easy',
      tags: ['number', 'binary']
    },
    {
      id: 'dsae44',
      category: 'dsa',
      question: 'Find sum of digits of number',
      answer: 'Repeatedly extract last digit using %10, add to sum, remove digit using /10. Code: while(n>0) { sum+=n%10; n/=10; }. Recursive: if(n==0) return 0; return n%10 + sumOfDigits(n/10);',
      difficulty: 'Easy',
      tags: ['number', 'sum-digits']
    },
    {
      id: 'dsae45',
      category: 'dsa',
      question: 'Reverse a number',
      answer: 'Extract last digit, build reversed number. Code: rev=0; while(n>0) { rev=rev*10 + n%10; n/=10; }. Handle overflow and negative numbers. Check if reversed within 32-bit integer range.',
      difficulty: 'Easy',
      tags: ['number', 'reverse']
    },
    {
      id: 'dsae46',
      category: 'dsa',
      question: 'Check if number is palindrome',
      answer: 'Reverse number and compare with original. If equal, palindrome. Code: rev=0, temp=n; while(temp>0) { rev=rev*10 + temp%10; temp/=10; } return n==rev;',
      difficulty: 'Easy',
      tags: ['number', 'palindrome']
    },
    {
      id: 'dsae47',
      category: 'dsa',
      question: 'Find missing number in array 1 to n',
      answer: 'Calculate expected sum = n*(n+1)/2. Calculate actual sum. Missing = expected - actual. Time: O(n), Space: O(1). Alternative: XOR all numbers 1 to n with array elements.',
      difficulty: 'Easy',
      tags: ['array', 'missing-number']
    },
    {
      id: 'dsae48',
      category: 'dsa',
      question: 'Find duplicate in array of n+1 elements (1 to n)',
      answer: 'Floyd\'s Tortoise and Hare (cycle detection). Treat array as linked list where arr[i] points to next index. Find cycle start which is duplicate. Time: O(n), Space: O(1).',
      difficulty: 'Easy',
      tags: ['array', 'duplicate']
    },
    {
      id: 'dsae49',
      category: 'dsa',
      question: 'Merge two sorted arrays',
      answer: 'Three-pointer: i for arr1, j for arr2, k for result. Compare arr1[i] and arr2[j], add smaller to result. Add remaining elements. Time: O(m+n), Space: O(m+n) for new array.',
      difficulty: 'Easy',
      tags: ['array', 'merge']
    },
    {
      id: 'dsae50',
      category: 'dsa',
      question: 'Find intersection of two arrays',
      answer: 'If sorted: two pointers similar to merge. If unsorted: use hash set. Add elements of first array to set, check second array elements in set. Time: O(m+n), Space: O(min(m,n)).',
      difficulty: 'Easy',
      tags: ['array', 'intersection']
    },
    {
      id: 'dsa1',
      category: 'dsa',
      question: 'Explain time and space complexity analysis',
      answer: 'Time complexity: measures runtime relative to input size. Big O notation (worst case): O(1), O(log n), O(n), O(n log n), O(n²), O(2^n). Space complexity: memory usage relative to input size. Analyze loops, recursion, data structures.',
      difficulty: 'Medium',
      tags: ['complexity', 'big-o']
    },
    {
      id: 'dsa2',
      category: 'dsa',
      question: 'What are arrays vs linked lists? Compare operations complexity',
      answer: 'Array: contiguous memory, O(1) access, O(n) insert/delete (needs shifting), fixed size. Linked list: scattered memory, O(n) access, O(1) insert/delete at head, dynamic size. Use arrays for random access, linked lists for frequent insertions/deletions.',
      difficulty: 'Medium',
      tags: ['arrays', 'linked-lists', 'comparison']
    },
    {
      id: 'dsa3',
      category: 'dsa',
      question: 'Implement stack using array and linked list',
      answer: 'Array: top pointer, push(arr[top++] = value), pop(return arr[--top]). Linked list: push(new node, point to head), pop(remove head). Stack: LIFO, operations O(1). Used for recursion, undo, parsing.',
      difficulty: 'Medium',
      tags: ['stack', 'implementation']
    },
    {
      id: 'dsa4',
      category: 'dsa',
      question: 'Implement queue using array and linked list',
      answer: 'Array (circular): front/rear pointers, enqueue(rear = (rear+1)%n), dequeue(front = (front+1)%n). Linked list: enqueue(add at tail), dequeue(remove from head). Queue: FIFO, operations O(1). Used in BFS, buffers.',
      difficulty: 'Medium',
      tags: ['queue', 'implementation']
    },
    {
      id: 'dsa5',
      category: 'dsa',
      question: 'Explain hash table implementation and collision resolution',
      answer: 'Hash table: array with hash function mapping keys to indices. Collision resolution: 1) Chaining (linked list at each bucket), 2) Open addressing (linear probing, quadratic probing, double hashing). Load factor = n/m, resize when high.',
      difficulty: 'Hard',
      tags: ['hash-table', 'hashing']
    },
    {
      id: 'dsa6',
      category: 'dsa',
      question: 'What is binary tree? Types and properties',
      answer: 'Tree where each node has ≤2 children. Types: full (0 or 2 children), complete (all levels except last filled), perfect (all leaves same level), balanced (height difference ≤1). Traversals: inorder, preorder, postorder, level order.',
      difficulty: 'Medium',
      tags: ['binary-tree', 'tree']
    },
    {
      id: 'dsa7',
      category: 'dsa',
      question: 'Implement binary search tree (BST) operations',
      answer: 'BST: left < parent < right. Operations: insert(O(h)), search(O(h)), delete(3 cases: no child, one child, two children - find inorder successor). Height h = O(log n) in balanced, O(n) in skewed. Inorder traversal gives sorted order.',
      difficulty: 'Hard',
      tags: ['bst', 'implementation']
    },
    {
      id: 'dsa8',
      category: 'dsa',
      question: 'Explain AVL tree rotations',
      answer: 'AVL tree: self-balancing BST, height difference ≤1. Rotations: LL (right rotate), RR (left rotate), LR (left then right), RL (right then left). Balance factor = height(left) - height(right). Insert/delete: O(log n) with rotations.',
      difficulty: 'Hard',
      tags: ['avl-tree', 'balancing']
    },
    {
      id: 'dsa9',
      category: 'dsa',
      question: 'What is heap? Implement heapify and heap operations',
      answer: 'Heap: complete binary tree with heap property. Max heap: parent > children, Min heap: parent < children. Operations: insert(O(log n)), extract-max(O(log n)), heapify(O(n)). Used for priority queue, heap sort.',
      difficulty: 'Hard',
      tags: ['heap', 'priority-queue']
    },
    {
      id: 'dsa10',
      category: 'dsa',
      question: 'Explain graph representations and traversals',
      answer: 'Representations: adjacency matrix (O(1) edge query, O(n²) space), adjacency list (O(degree) edge query, O(V+E) space). Traversals: BFS (queue, shortest path unweighted), DFS (stack/recursion, detect cycles, topological sort).',
      difficulty: 'Hard',
      tags: ['graph', 'traversal']
    },
    {
      id: 'dsa11',
      category: 'dsa',
      question: 'Implement Dijkstra\'s algorithm for shortest path',
      answer: 'Finds shortest path in weighted graph (non-negative weights). Use priority queue (min-heap). Steps: initialize distances (∞), start node distance 0, while queue not empty: extract min, relax edges. Complexity: O((V+E) log V) with heap.',
      difficulty: 'Hard',
      tags: ['dijkstra', 'shortest-path']
    },
    {
      id: 'dsa12',
      category: 'dsa',
      question: 'What is dynamic programming? Explain memoization vs tabulation',
      answer: 'DP solves complex problems by breaking into overlapping subproblems. Memoization (top-down): recursive with cache. Tabulation (bottom-up): iterative, fill table. Properties: optimal substructure, overlapping subproblems. Examples: Fibonacci, knapsack.',
      difficulty: 'Hard',
      tags: ['dynamic-programming', 'memoization']
    },
    {
      id: 'dsa13',
      category: 'dsa',
      question: 'Solve 0/1 knapsack problem using DP',
      answer: 'Given weights[], values[], capacity W, maximize value. DP[i][w] = max value with first i items and capacity w. Formula: if weight[i-1] ≤ w: DP[i][w] = max(value[i-1] + DP[i-1][w-weight[i-1]], DP[i-1][w]), else DP[i][w] = DP[i-1][w].',
      difficulty: 'Hard',
      tags: ['knapsack', 'dynamic-programming']
    },
    {
      id: 'dsa14',
      category: 'dsa',
      question: 'Explain greedy algorithms vs dynamic programming',
      answer: 'Greedy: make locally optimal choice hoping for global optimum (doesn\'t always work). DP: considers all possibilities. Greedy when optimal substructure + greedy choice property. Examples: activity selection (greedy), knapsack (DP for 0/1, greedy for fractional).',
      difficulty: 'Hard',
      tags: ['greedy', 'dynamic-programming']
    },
    {
      id: 'dsa15',
      category: 'dsa',
      question: 'Implement Merge Sort algorithm',
      answer: 'Divide and conquer: divide array in halves, recursively sort, merge sorted halves. Merge: use two pointers. Complexity: O(n log n) time, O(n) space. Stable sort. Implementation uses recursion or iterative bottom-up.',
      difficulty: 'Medium',
      tags: ['merge-sort', 'sorting']
    },
    {
      id: 'dsa16',
      category: 'dsa',
      question: 'Implement Quick Sort algorithm with partition',
      answer: 'Divide and conquer: choose pivot, partition (elements < pivot left, > pivot right), recursively sort partitions. Partition: Lomuto (last element pivot) or Hoare (first element pivot). Worst: O(n²) when pivot bad, average: O(n log n), in-place.',
      difficulty: 'Hard',
      tags: ['quick-sort', 'sorting']
    },
    {
      id: 'dsa17',
      category: 'dsa',
      question: 'What is binary search? Implement iterative and recursive versions',
      answer: 'Search sorted array by repeatedly dividing search interval. Compare target with middle, eliminate half. Iterative: while loop. Recursive: function calls. Complexity: O(log n). Works only on sorted data. Variations: find first/last occurrence, count occurrences.',
      difficulty: 'Medium',
      tags: ['binary-search', 'searching']
    },
    {
      id: 'dsa18',
      category: 'dsa',
      question: 'Explain B-tree and its use in databases',
      answer: 'B-tree: self-balancing tree with multiple keys per node (degree t). All leaves same depth. Node has between t-1 and 2t-1 keys. Operations: O(log n). Used in databases/file systems for disk access optimization (minimize disk reads).',
      difficulty: 'Hard',
      tags: ['b-tree', 'database']
    },
    {
      id: 'dsa19',
      category: 'dsa',
      question: 'Implement LRU cache using hash map and doubly linked list',
      answer: 'Hash map stores key->node, doubly linked list maintains order. Get: move to front (O(1)). Put: if exists, update and move to front; if full, remove tail; add to front. Complexity: O(1) operations. Used for caching, page replacement.',
      difficulty: 'Hard',
      tags: ['lru-cache', 'design']
    },
    {
      id: 'dsa20',
      category: 'dsa',
      question: 'Solve two-sum problem with optimal approaches',
      answer: 'Given array and target, find indices where nums[i] + nums[j] = target. Brute force: O(n²). Optimized: hash map storing complement (target - nums[i]). One-pass: for each num, check if complement in map, else store num->index. O(n) time, O(n) space.',
      difficulty: 'Medium',
      tags: ['two-sum', 'hashing']
    },
    {
      id: 'dsa21',
      category: 'dsa',
      question: 'Implement Trie (prefix tree) data structure',
      answer: 'Tree for storing strings. Each node has children (26 for English), end flag. Operations: insert(O(L)), search(O(L)), startsWith(O(L)) where L = string length. Used for autocomplete, spell checker, IP routing.',
      difficulty: 'Hard',
      tags: ['trie', 'prefix-tree']
    },
    {
      id: 'dsa22',
      category: 'dsa',
      question: 'Explain Union-Find (Disjoint Set) data structure',
      answer: 'Tracks elements partitioned into disjoint sets. Operations: makeSet(x), find(x) (with path compression), union(x, y) (by rank/size). Used for: Kruskal\'s MST, cycle detection, connected components. Near-constant amortized time.',
      difficulty: 'Hard',
      tags: ['union-find', 'disjoint-set']
    },
    {
      id: 'dsa23',
      category: 'dsa',
      question: 'Implement topological sort for DAG',
      answer: 'Linear ordering where for every edge u->v, u appears before v. Algorithms: 1) Kahn\'s (BFS-based): compute indegree, queue nodes with indegree 0, remove edges; 2) DFS-based: postorder traversal, reverse. Used for scheduling, dependency resolution.',
      difficulty: 'Hard',
      tags: ['topological-sort', 'graph']
    },
    {
      id: 'dsa24',
      category: 'dsa',
      question: 'Solve longest common subsequence (LCS) problem',
      answer: 'Given two strings, find longest subsequence common to both. DP: LCS[i][j] = length of LCS of first i chars of X and j chars of Y. Formula: if X[i-1] == Y[j-1]: LCS[i][j] = 1 + LCS[i-1][j-1]; else: LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1]).',
      difficulty: 'Hard',
      tags: ['lcs', 'dynamic-programming']
    },
    {
      id: 'dsa25',
      category: 'dsa',
      question: 'Explain segment tree with range query example',
      answer: 'Segment tree: binary tree storing intervals, allows range queries and updates in O(log n). Build: O(n). Query: decompose range into O(log n) segments. Update: update leaf, propagate up. Used for: range sum/min/max, range updates.',
      difficulty: 'Hard',
      tags: ['segment-tree', 'range-query']
    },
    {
      id: 'dsa26',
      category: 'dsa',
      question: 'Implement KMP string matching algorithm',
      answer: 'Knuth-Morris-Pratt: pattern matching with O(n+m) time. Preprocess pattern to create LPS (longest prefix suffix) array. LPS helps skip unnecessary comparisons. Better than naive O(n*m). Used in text editors, DNA sequencing.',
      difficulty: 'Hard',
      tags: ['kmp', 'string-matching']
    },
    {
      id: 'dsa27',
      category: 'dsa',
      question: 'What is red-black tree? Properties and rotations',
      answer: 'Self-balancing BST with color (red/black) nodes. Properties: 1) Node red/black, 2) Root black, 3) Red nodes have black children, 4) All paths from node to leaves have same black nodes (black height). Rotations similar to AVL but less strict balancing.',
      difficulty: 'Hard',
      tags: ['red-black-tree', 'balancing']
    },
    {
      id: 'dsa28',
      category: 'dsa',
      question: 'Solve coin change problem (minimum coins)',
      answer: 'Given coins[] and amount, find minimum coins to make amount. DP: dp[i] = min coins for amount i. Initialize dp[0]=0, others=∞. For each coin c: for i=c to amount: dp[i] = min(dp[i], 1+dp[i-c]). Complexity: O(amount * coins).',
      difficulty: 'Hard',
      tags: ['coin-change', 'dynamic-programming']
    },
    {
      id: 'dsa29',
      category: 'dsa',
      question: 'Explain minimum spanning tree algorithms',
      answer: 'MST: connects all vertices with minimum total edge weight. Algorithms: 1) Kruskal\'s: sort edges, add smallest that doesn\'t form cycle (Union-Find). 2) Prim\'s: start from vertex, add smallest edge connecting to tree (priority queue). Both O(E log V).',
      difficulty: 'Hard',
      tags: ['mst', 'graph']
    },
    {
      id: 'dsa30',
      category: 'dsa',
      question: 'Implement backtracking for N-Queens problem',
      answer: 'Place N queens on N×N board without attacking. Backtracking: place queen in row, check column/diagonal conflicts, recursively place next row. If conflict, backtrack. Optimize: use arrays to track occupied columns/diagonals. Time: O(N!).',
      difficulty: 'Hard',
      tags: ['backtracking', 'n-queens']
    },
    {
      id: 'dsa31',
      category: 'dsa',
      question: 'What is Fenwick tree (Binary Indexed Tree)?',
      answer: 'Data structure supporting prefix sum queries and point updates in O(log n). Space O(n). Based on binary representation: update(i, delta): while i ≤ n: tree[i] += delta, i += i & -i. query(i): sum = 0, while i > 0: sum += tree[i], i -= i & -i.',
      difficulty: 'Hard',
      tags: ['fenwick-tree', 'bit']
    },
    {
      id: 'dsa32',
      category: 'dsa',
      question: 'Solve longest increasing subsequence (LIS)',
      answer: 'Find longest subsequence where elements sorted increasing. DP: O(n²): dp[i] = length of LIS ending at i. For j < i: if arr[j] < arr[i]: dp[i] = max(dp[i], dp[j]+1). Optimized: O(n log n) with binary search, maintain array of smallest tail values.',
      difficulty: 'Hard',
      tags: ['lis', 'dynamic-programming']
    },
    {
      id: 'dsa33',
      category: 'dsa',
      question: 'Explain Bellman-Ford algorithm for negative weights',
      answer: 'Finds shortest path allowing negative weights, detects negative cycles. Relax all edges V-1 times. If can relax on V-th iteration, negative cycle exists. Complexity: O(V*E). Slower than Dijkstra but handles negative weights.',
      difficulty: 'Hard',
      tags: ['bellman-ford', 'shortest-path']
    },
    {
      id: 'dsa34',
      category: 'dsa',
      question: 'Implement Rabin-Karp string matching algorithm',
      answer: 'Pattern matching using hash function. Compute hash of pattern, slide window computing hash of text substring. If hash matches, check characters (collision). Use rolling hash: h = (d*(h - text[i]*h) + text[i+m]) mod q. Average O(n+m).',
      difficulty: 'Hard',
      tags: ['rabin-karp', 'string-matching']
    },
    {
      id: 'dsa35',
      category: 'dsa',
      question: 'What is skip list? Implementation and complexity',
      answer: 'Probabilistic alternative to balanced trees. Multiple levels of linked lists. Search: start from top level, move right if next < target, else down. Expected O(log n) search/insert/delete. Easier to implement than balanced trees.',
      difficulty: 'Hard',
      tags: ['skip-list', 'probabilistic']
    },
    {
      id: 'dsa36',
      category: 'dsa',
      question: 'Solve matrix chain multiplication problem',
      answer: 'Given matrices dimensions, find optimal parenthesization minimizing scalar multiplications. DP: m[i][j] = min multiplications for matrices i through j. Formula: m[i][j] = min(m[i][k] + m[k+1][j] + p[i-1]*p[k]*p[j]). O(n³) time.',
      difficulty: 'Hard',
      tags: ['matrix-chain', 'dynamic-programming']
    },
    {
      id: 'dsa37',
      category: 'dsa',
      question: 'Explain Bloom filter with use cases',
      answer: 'Probabilistic data structure testing set membership. Space efficient, may have false positives but no false negatives. Operations: add (hash to k bits, set to 1), contains (check k bits). Use cases: spell check, cache sharing, duplicate detection.',
      difficulty: 'Hard',
      tags: ['bloom-filter', 'probabilistic']
    },
    {
      id: 'dsa38',
      category: 'dsa',
      question: 'Implement Floyd-Warshall all-pairs shortest path',
      answer: 'Finds shortest paths between all pairs. DP: dist[i][j][k] = shortest path from i to j using vertices 1..k as intermediate. Optimized: 2D array, for k from 1 to n: for i from 1 to n: for j from 1 to n: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]). O(n³).',
      difficulty: 'Hard',
      tags: ['floyd-warshall', 'shortest-path']
    },
    {
      id: 'dsa39',
      category: 'dsa',
      question: 'What is suffix tree? Applications and construction',
      answer: 'Compressed trie of all suffixes of string. Construction: O(n) with Ukkonen\'s algorithm. Applications: pattern matching (O(m)), longest repeated substring, palindrome detection, DNA sequence analysis. Memory intensive but powerful.',
      difficulty: 'Hard',
      tags: ['suffix-tree', 'string']
    },
    {
      id: 'dsa40',
      category: 'dsa',
      question: 'Solve 0/1 knapsack using branch and bound',
      answer: 'Optimization technique for NP-hard problems. Branch: explore subsets. Bound: compute upper bound using fractional knapsack (greedy). Prune branches where bound ≤ current best. Uses priority queue (max bound first). Better than brute force.',
      difficulty: 'Hard',
      tags: ['knapsack', 'branch-bound']
    },
    {
      id: 'dsa41',
      category: 'dsa',
      question: 'Explain B+ tree vs B-tree',
      answer: 'B+ tree: all data in leaves, leaves linked sequentially, internal nodes only keys. Advantages: range queries faster, more keys per node, uniform access time. B-tree: data in all nodes. B+ tree used in database indices (clustered/non-clustered).',
      difficulty: 'Hard',
      tags: ['b-plus-tree', 'database']
    },
    {
      id: 'dsa42',
      category: 'dsa',
      question: 'Implement counting sort and radix sort',
      answer: 'Counting sort: non-comparison, O(n+k) where k = range. Count occurrences, compute cumulative, place elements. Radix sort: sort by digits from LSD to MSD using stable sort (counting sort). O(d*(n+b)) where d = digits, b = base.',
      difficulty: 'Medium',
      tags: ['counting-sort', 'radix-sort']
    },
    {
      id: 'dsa43',
      category: 'dsa',
      question: 'What is A* search algorithm? Implementation',
      answer: 'Informed search using heuristic. f(n) = g(n) + h(n) where g = cost from start, h = heuristic to goal (admissible: never overestimates). Uses priority queue (min f). Optimal with admissible heuristic. Used in pathfinding, games.',
      difficulty: 'Hard',
      tags: ['a-star', 'search']
    },
    {
      id: 'dsa44',
      category: 'dsa',
      question: 'Solve longest palindromic substring problem',
      answer: 'Given string, find longest palindrome substring. Solutions: 1) Expand around center: O(n²) time, O(1) space. For each center (2n-1 possibilities), expand outward. 2) Manacher\'s algorithm: O(n) time, O(n) space, linear time.',
      difficulty: 'Hard',
      tags: ['palindrome', 'string']
    },
    {
      id: 'dsa45',
      category: 'dsa',
      question: 'Explain treap (tree + heap) data structure',
      answer: 'Randomized BST: each node has key (BST property) and random priority (heap property). Expected O(log n) operations. Insert: standard BST insert then rotate to maintain heap property. Delete: rotate to leaf then remove. Simpler than AVL/RB.',
      difficulty: 'Hard',
      tags: ['treap', 'randomized']
    },
    {
      id: 'dsa46',
      category: 'dsa',
      question: 'Implement Kosaraju\'s algorithm for strongly connected components',
      answer: 'Finds SCCs in directed graph. Steps: 1) DFS, record finish times. 2) Reverse graph. 3) DFS in decreasing finish time order, each DFS tree = SCC. Complexity: O(V+E). Used in compiler optimization, circuit design.',
      difficulty: 'Hard',
      tags: ['scc', 'graph']
    },
    {
      id: 'dsa47',
      category: 'dsa',
      question: 'What is monotonic stack? Applications',
      answer: 'Stack maintaining monotonic order (increasing/decreasing). Used for: next greater element, largest rectangle in histogram, stock span problem. Push/pop while maintaining monotonic property. O(n) time for many problems.',
      difficulty: 'Hard',
      tags: ['monotonic-stack', 'applications']
    },
    {
      id: 'dsa48',
      category: 'dsa',
      question: 'Solve edit distance (Levenshtein distance) problem',
      answer: 'Minimum operations (insert, delete, replace) to convert str1 to str2. DP: dp[i][j] = distance between first i chars of str1 and j chars of str2. Formula: if str1[i-1]==str2[j-1]: dp[i][j]=dp[i-1][j-1]; else: dp[i][j]=1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).',
      difficulty: 'Hard',
      tags: ['edit-distance', 'dynamic-programming']
    },
    {
      id: 'dsa49',
      category: 'dsa',
      question: 'Explain interval tree and applications',
      answer: 'Data structure storing intervals, supports queries: find intervals overlapping given point/interval. Augmented BST storing max endpoint in subtree. Query: O(log n + m) where m = results. Applications: scheduling, computational geometry.',
      difficulty: 'Hard',
      tags: ['interval-tree', 'computational-geometry']
    },
    {
      id: 'dsa50',
      category: 'dsa',
      question: 'Implement sliding window maximum problem',
      answer: 'Given array and window size k, find max in each sliding window. Solutions: 1) Deque (double-ended queue) maintaining candidates in decreasing order. Front always max. O(n) time. 2) Heap: O(n log k). Deque more efficient.',
      difficulty: 'Hard',
      tags: ['sliding-window', 'deque']
    },
       // =============== Git & GitHub - 50 Questions ===============
    // Easy Questions (1-15)
    {
      id: 'git1',
      category: 'git',
      question: 'What is Git?',
      answer: 'Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work together, maintain history of changes, and collaborate efficiently.',
      difficulty: 'Easy',
      tags: ['basics', 'git']
    },
    {
      id: 'git2',
      category: 'git',
      question: 'What is GitHub?',
      answer: 'GitHub is a cloud-based platform for hosting Git repositories. It provides collaboration features like pull requests, issue tracking, code review, and project management tools.',
      difficulty: 'Easy',
      tags: ['basics', 'github']
    },
    {
      id: 'git3',
      category: 'git',
      question: 'Difference between Git and GitHub',
      answer: 'Git is the version control software that runs locally. GitHub is a cloud-based service that hosts Git repositories and adds collaboration features. Git is the tool, GitHub is the platform.',
      difficulty: 'Easy',
      tags: ['comparison', 'git', 'github']
    },
    {
      id: 'git4',
      category: 'git',
      question: 'How to initialize a Git repository?',
      answer: 'Use `git init` in your project directory. This creates a .git folder that contains all Git metadata. For existing project: `cd project-folder` then `git init`.',
      difficulty: 'Easy',
      tags: ['commands', 'init']
    },
    {
      id: 'git5',
      category: 'git',
      question: 'How to check Git version?',
      answer: 'Use `git --version`. This shows the installed Git version. Example output: `git version 2.37.1`.',
      difficulty: 'Easy',
      tags: ['commands', 'version']
    },
    {
      id: 'git6',
      category: 'git',
      question: 'What is a commit?',
      answer: 'A commit is a snapshot of your repository at a specific point in time. It captures changes with a unique ID, author, timestamp, and message describing what changed.',
      difficulty: 'Easy',
      tags: ['commit', 'basics']
    },
    {
      id: 'git7',
      category: 'git',
      question: 'How to check repository status?',
      answer: 'Use `git status`. Shows: untracked files, changes staged for commit, changes not staged, branch information. Helps understand current state of working directory.',
      difficulty: 'Easy',
      tags: ['commands', 'status']
    },
    {
      id: 'git8',
      category: 'git',
      question: 'How to add files to staging area?',
      answer: 'Use `git add filename` to add specific file, or `git add .` to add all files. Staging prepares changes for commit. Check with `git status` to see staged files.',
      difficulty: 'Easy',
      tags: ['commands', 'add']
    },
    {
      id: 'git9',
      category: 'git',
      question: 'How to commit changes?',
      answer: 'Use `git commit -m "commit message"` after staging files. Message should be descriptive. Example: `git commit -m "Add login functionality"`.',
      difficulty: 'Easy',
      tags: ['commands', 'commit']
    },
    {
      id: 'git10',
      category: 'git',
      question: 'What is .gitignore file?',
      answer: 'A text file specifying files/directories Git should ignore. Common ignores: node_modules/, .env, log files, build artifacts. Create file named `.gitignore` in root.',
      difficulty: 'Easy',
      tags: ['gitignore', 'config']
    },
    {
      id: 'git11',
      category: 'git',
      question: 'How to clone a repository?',
      answer: 'Use `git clone repository-url`. Copies remote repository to local machine. Example: `git clone https://github.com/user/repo.git`. Adds remote named "origin".',
      difficulty: 'Easy',
      tags: ['commands', 'clone']
    },
    {
      id: 'git12',
      category: 'git',
      question: 'What is a branch?',
      answer: 'A branch is a parallel version of repository. Allows working on features/bug fixes independently without affecting main code. Default branch is usually "main" or "master".',
      difficulty: 'Easy',
      tags: ['branch', 'basics']
    },
    {
      id: 'git13',
      category: 'git',
      question: 'How to create a new branch?',
      answer: 'Use `git branch branch-name` to create branch, or `git checkout -b branch-name` to create and switch. Example: `git checkout -b feature/login`.',
      difficulty: 'Easy',
      tags: ['commands', 'branch']
    },
    {
      id: 'git14',
      category: 'git',
      question: 'How to switch between branches?',
      answer: 'Use `git checkout branch-name`. Switches to specified branch. Working directory updates to reflect branch state. Example: `git checkout main`.',
      difficulty: 'Easy',
      tags: ['commands', 'checkout']
    },
    {
      id: 'git15',
      category: 'git',
      question: 'How to list all branches?',
      answer: 'Use `git branch` lists local branches (current marked with *). `git branch -a` lists all branches including remote. `git branch -r` lists only remote branches.',
      difficulty: 'Easy',
      tags: ['commands', 'branch']
    },

    // Medium Questions (16-35)
    {
      id: 'git16',
      category: 'git',
      question: 'How to merge branches?',
      answer: 'Switch to target branch, then `git merge source-branch`. Example: `git checkout main` then `git merge feature/login`. Creates merge commit combining changes.',
      difficulty: 'Medium',
      tags: ['merge', 'commands']
    },
    {
      id: 'git17',
      category: 'git',
      question: 'What is a merge conflict? How to resolve?',
      answer: 'Conflict occurs when same file changed differently in both branches. Git marks conflict in file. Resolve by: 1) Edit file to choose correct changes, 2) `git add file`, 3) `git commit`.',
      difficulty: 'Medium',
      tags: ['merge', 'conflict']
    },
    {
      id: 'git18',
      category: 'git',
      question: 'How to push changes to remote repository?',
      answer: 'Use `git push remote-name branch-name`. First push: `git push -u origin main` sets upstream. Subsequent: `git push`. Pushes commits from local to remote.',
      difficulty: 'Medium',
      tags: ['commands', 'push']
    },
    {
      id: 'git19',
      category: 'git',
      question: 'How to pull changes from remote?',
      answer: 'Use `git pull`. Fetches from remote and merges into current branch. Equivalent to `git fetch` then `git merge`. `git pull --rebase` fetches and rebases instead.',
      difficulty: 'Medium',
      tags: ['commands', 'pull']
    },
    {
      id: 'git20',
      category: 'git',
      question: 'What is git fetch?',
      answer: '`git fetch` downloads changes from remote but doesn\'t merge. Updates remote-tracking branches. Safer than pull as it doesn\'t change working directory. Check changes with `git log origin/main`.',
      difficulty: 'Medium',
      tags: ['fetch', 'commands']
    },
    {
      id: 'git21',
      category: 'git',
      question: 'How to view commit history?',
      answer: '`git log` shows commit history. Options: `--oneline` (compact), `--graph` (visual), `--stat` (file stats), `-p` (patch/diff). `git log --oneline --graph --all` shows all branches visually.',
      difficulty: 'Medium',
      tags: ['commands', 'log']
    },
    {
      id: 'git22',
      category: 'git',
      question: 'What is git stash? When to use?',
      answer: '`git stash` temporarily saves uncommitted changes. Use when you need to switch branches but aren\'t ready to commit. `git stash pop` restores. `git stash list` shows stashes.',
      difficulty: 'Medium',
      tags: ['stash', 'commands']
    },
    {
      id: 'git23',
      category: 'git',
      question: 'How to undo last commit?',
      answer: '`git reset --soft HEAD~1` keeps changes staged. `git reset --mixed HEAD~1` (default) keeps changes unstaged. `git reset --hard HEAD~1` discards changes completely. Use carefully.',
      difficulty: 'Medium',
      tags: ['reset', 'undo']
    },
    {
      id: 'git24',
      category: 'git',
      question: 'What is git rebase?',
      answer: 'Rebase rewrites commit history by applying commits on top of another branch. Creates linear history. Command: `git rebase target-branch`. Interactive: `git rebase -i HEAD~n`.',
      difficulty: 'Medium',
      tags: ['rebase', 'commands']
    },
    {
      id: 'git25',
      category: 'git',
      question: 'Difference between merge and rebase',
      answer: 'Merge creates new merge commit, preserves history. Rebase rewrites history, creates linear timeline. Use merge for public branches, rebase for local cleanup before merge.',
      difficulty: 'Medium',
      tags: ['merge', 'rebase', 'comparison']
    },
    {
      id: 'git26',
      category: 'git',
      question: 'How to delete a branch?',
      answer: 'Local: `git branch -d branch-name` (safe, checks if merged). `git branch -D branch-name` (force delete). Remote: `git push origin --delete branch-name`.',
      difficulty: 'Medium',
      tags: ['commands', 'branch']
    },
    {
      id: 'git27',
      category: 'git',
      question: 'What is .git directory?',
      answer: 'Hidden folder containing Git metadata: objects (commits, trees, blobs), refs (branches, tags), config, HEAD pointer, hooks. Don\'t modify manually.',
      difficulty: 'Medium',
      tags: ['internals', 'git']
    },
    {
      id: 'git28',
      category: 'git',
      question: 'How to set username and email?',
      answer: 'Global: `git config --global user.name "Your Name"`, `git config --global user.email "email@example.com"`. Local (per repo): use without --global. Check: `git config --list`.',
      difficulty: 'Medium',
      tags: ['config', 'setup']
    },
    {
      id: 'git29',
      category: 'git',
      question: 'What is HEAD in Git?',
      answer: 'HEAD is pointer to current branch reference (or specific commit in detached HEAD). Points to what\'s checked out. `HEAD~1` means one commit before HEAD.',
      difficulty: 'Medium',
      tags: ['head', 'internals']
    },
    {
      id: 'git30',
      category: 'git',
      question: 'How to amend last commit?',
      answer: 'Stage changes, then `git commit --amend`. Updates last commit with new changes. Can also edit commit message. Don\'t amend pushed commits (rewrites history).',
      difficulty: 'Medium',
      tags: ['commit', 'amend']
    },
    {
      id: 'git31',
      category: 'git',
      question: 'What is git diff?',
      answer: 'Shows changes between commits, branches, working directory, etc. `git diff` shows unstaged changes. `git diff --staged` shows staged changes. `git diff branch1..branch2` compares branches.',
      difficulty: 'Medium',
      tags: ['diff', 'commands']
    },
    {
      id: 'git32',
      category: 'git',
      question: 'How to view remote repositories?',
      answer: '`git remote -v` shows remote URLs. `git remote show origin` shows detailed info. Add remote: `git remote add name url`. Remove: `git remote remove name`.',
      difficulty: 'Medium',
      tags: ['remote', 'commands']
    },
    {
      id: 'git33',
      category: 'git',
      question: 'What is a tag? How to create?',
      answer: 'Tag marks specific point in history (usually releases). Lightweight: `git tag v1.0`. Annotated: `git tag -a v1.0 -m "Release v1.0"`. Push tags: `git push origin v1.0`.',
      difficulty: 'Medium',
      tags: ['tag', 'commands']
    },
    {
      id: 'git34',
      category: 'git',
      question: 'How to rename a branch?',
      answer: 'Rename current: `git branch -m new-name`. Rename other: `git branch -m old-name new-name`. Update remote: delete old, push new. Or: `git push origin :old-name new-name`.',
      difficulty: 'Medium',
      tags: ['branch', 'commands']
    },
    {
      id: 'git35',
      category: 'git',
      question: 'What is git cherry-pick?',
      answer: 'Applies specific commit from one branch to another. `git cherry-pick commit-hash`. Useful for picking single commits without merging whole branch. Creates new commit with same changes.',
      difficulty: 'Medium',
      tags: ['cherry-pick', 'commands']
    },

    // Hard Questions (36-50)
    {
      id: 'git36',
      category: 'git',
      question: 'Explain Git internals: blob, tree, commit',
      answer: 'Blob: file content (binary large object). Tree: directory listing (names, modes, blob/tree pointers). Commit: snapshot with tree, parent, author, message, timestamp. Objects stored in .git/objects with SHA-1 hash.',
      difficulty: 'Hard',
      tags: ['internals', 'objects']
    },
    {
      id: 'git37',
      category: 'git',
      question: 'What is detached HEAD? How to recover?',
      answer: 'When HEAD points directly to commit, not branch. Occurs after checkout of commit/tag. Changes made will be lost unless new branch created. Recover: `git checkout -b new-branch` to save changes.',
      difficulty: 'Hard',
      tags: ['head', 'detached', 'recovery']
    },
    {
      id: 'git38',
      category: 'git',
      question: 'How to rewrite commit history with interactive rebase?',
      answer: '`git rebase -i HEAD~n` opens editor. Options: pick (use), reword (edit message), edit (amend), squash (combine with previous), fixup (squash discard message), drop (remove). Useful for cleaning up before push.',
      difficulty: 'Hard',
      tags: ['rebase', 'history']
    },
    {
      id: 'git39',
      category: 'git',
      question: 'What is git bisect? How to use for debugging?',
      answer: 'Binary search through commits to find bug introduction. Start: `git bisect start`. Mark bad: `git bisect bad`. Mark good: `git bisect good commit-hash`. Git checks out middle commit, you test, mark good/bad. Repeat until found.',
      difficulty: 'Hard',
      tags: ['bisect', 'debugging']
    },
    {
      id: 'git40',
      category: 'git',
      question: 'Explain Git hooks and their uses',
      answer: 'Scripts that run automatically on Git events (pre-commit, post-commit, pre-push, etc.). Located in .git/hooks/. Use for: linting, testing, formatting, deployment. Can be written in any language. Pre-commit hooks can prevent bad commits.',
      difficulty: 'Hard',
      tags: ['hooks', 'automation']
    },
    {
      id: 'git41',
      category: 'git',
      question: 'What is git reflog? How to recover lost commits?',
      answer: 'Reflog records all HEAD changes (checkout, reset, merge, etc.). View: `git reflog`. Recover: find commit hash in reflog, then `git checkout -b recovered-branch hash`. Works even after reset/branch delete.',
      difficulty: 'Hard',
      tags: ['reflog', 'recovery']
    },
    {
      id: 'git42',
      category: 'git',
      question: 'How to squash multiple commits into one?',
      answer: 'Interactive rebase: `git rebase -i HEAD~n`. Change all but first "pick" to "squash" or "fixup". Or: `git reset --soft HEAD~n` then `git commit -m "new message"`. Squash merges before pull request.',
      difficulty: 'Hard',
      tags: ['squash', 'rebase']
    },
    {
      id: 'git43',
      category: 'git',
      question: 'What is submodule in Git? When to use?',
      answer: 'Repository inside another repository. Used for including external dependencies. Add: `git submodule add url path`. Clone: `git clone --recursive`. Update: `git submodule update --init --recursive`. Complex to manage.',
      difficulty: 'Hard',
      tags: ['submodule', 'advanced']
    },
    {
      id: 'git44',
      category: 'git',
      question: 'Explain git worktree feature',
      answer: 'Allows multiple working directories attached to same repository. `git worktree add ../new-path branch-name`. Useful for: simultaneous work on multiple branches, CI builds, large repos. Clean up: `git worktree remove path`.',
      difficulty: 'Hard',
      tags: ['worktree', 'advanced']
    },
    {
      id: 'git45',
      category: 'git',
      question: 'How to handle large files with Git LFS?',
      answer: 'Git Large File Storage stores large files (binaries, videos) outside repository, replaces with pointers. Setup: `git lfs install`, `git lfs track "*.psd"`, commit .gitattributes. Files stored on LFS server.',
      difficulty: 'Hard',
      tags: ['lfs', 'large-files']
    },
    {
      id: 'git46',
      category: 'git',
      question: 'What is git rerere? (Reuse recorded resolution)',
      answer: 'Remembers how you resolved merge conflicts and reuses for similar conflicts. Enable: `git config --global rerere.enabled true`. Useful for long-lived feature branches that merge frequently.',
      difficulty: 'Hard',
      tags: ['rerere', 'merge']
    },
    {
      id: 'git47',
      category: 'git',
      question: 'Explain Git flow workflow',
      answer: 'Branching model with: main (production), develop (integration), feature/* (new features), release/* (preparing release), hotfix/* (urgent fixes). Uses git-flow tool or manual. Popular but complex, many prefer GitHub Flow.',
      difficulty: 'Hard',
      tags: ['workflow', 'git-flow']
    },
    {
      id: 'git48',
      category: 'git',
      question: 'How to migrate from SVN to Git?',
      answer: 'Use `git svn`. Clone: `git svn clone svn-repo-url --stdlayout --prefix=svn/`. Convert branches/tags. Clean up with `git filter-branch` if needed. Preserves history. Or use third-party tools.',
      difficulty: 'Hard',
      tags: ['migration', 'svn']
    },
    {
      id: 'git49',
      category: 'git',
      question: 'What is git filter-branch? When to use?',
      answer: 'Rewrites repository history (powerful but dangerous). Use cases: remove large file from history, change email addresses, extract subdirectory. Safer alternatives: BFG Repo-Cleaner, git filter-repo.',
      difficulty: 'Hard',
      tags: ['filter-branch', 'history']
    },
    {
      id: 'git50',
      category: 'git',
      question: 'Explain Git protocol and transfer protocols',
      answer: 'Protocols: 1) Local (file://), 2) HTTP/HTTPS (port 80/443, easy through firewalls), 3) SSH (git@github.com:user/repo.git, authentication), 4) Git (port 9418, no authentication, read-only). Smart vs dumb HTTP.',
      difficulty: 'Hard',
      tags: ['protocol', 'internals']
    },

    // Additional GitHub specific questions
    {
      id: 'git51',
      category: 'git',
      question: 'What is a pull request (PR)?',
      answer: 'GitHub feature for proposing changes. Fork repository, make changes in branch, open PR to request merging into main. Enables code review, discussion, CI checks before merge.',
      difficulty: 'Medium',
      tags: ['github', 'pull-request']
    },
    {
      id: 'git52',
      category: 'git',
      question: 'What is GitHub Actions?',
      answer: 'CI/CD platform integrated with GitHub. Automate workflows on events (push, PR). YAML files in .github/workflows/. Use for: testing, building, deploying, notifications.',
      difficulty: 'Hard',
      tags: ['github', 'actions', 'ci-cd']
    },
    {
      id: 'git53',
      category: 'git',
      question: 'How to fork a repository?',
      answer: 'On GitHub, click "Fork" button. Creates personal copy under your account. Clone your fork: `git clone your-fork-url`. Add upstream: `git remote add upstream original-url`. Sync: `git fetch upstream`, `git merge upstream/main`.',
      difficulty: 'Medium',
      tags: ['github', 'fork']
    },
    {
      id: 'git54',
      category: 'git',
      question: 'What are GitHub Issues?',
      answer: 'Bug tracking and project management tool. Create issues for: bugs, feature requests, tasks. Assign, label, milestone, reference in commits (#123). Can create issue templates.',
      difficulty: 'Easy',
      tags: ['github', 'issues']
    },
    {
      id: 'git55',
      category: 'git',
      question: 'Explain GitHub Pages',
      answer: 'Static site hosting from GitHub repository. Enable in repo settings. Publish from main branch docs folder, or gh-pages branch. Custom domain support. Free for public repos.',
      difficulty: 'Medium',
      tags: ['github', 'pages']
    }
  ]
};

export default interviewQuestions;