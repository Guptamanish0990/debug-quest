export const fresherQuestions = [
  {
    id: 'html1',
    category: 'html',
    question: 'What is the purpose of the alt attribute in images?',
    answer: 'The alt attribute provides alternative text for images when they cannot be displayed. It is essential for accessibility (screen readers), SEO, and when images fail to load.',
    difficulty: 'Easy',
    tags: ['accessibility', 'images', 'seo'],
    tips: 'Always include meaningful alt text for important images'
  },
  {
    id: 'html2',
    category: 'html',
    question: 'What is the difference between <div> and <span>?',
    answer: '<div> is a block-level element used for grouping other elements, while <span> is an inline element used for styling parts of text within other elements.',
    difficulty: 'Easy',
    tags: ['elements', 'html'],
    tips: 'Use div for layout sections, span for inline text styling'
  },
  {
    id: 'html3',
    category: 'html',
    question: 'What are meta tags and why are they important?',
    answer: 'Meta tags provide metadata about the HTML document, such as character set, viewport settings, description, and keywords. They are important for SEO, character encoding, and responsive design.',
    difficulty: 'Easy',
    tags: ['meta', 'seo', 'responsive'],
    tips: 'Always include charset and viewport meta tags'
  },
  {
    id: 'html4',
    category: 'html',
    question: 'What is the purpose of the viewport meta tag?',
    answer: 'The viewport meta tag controls how a webpage is displayed on mobile devices. It sets the width to device-width and initial-scale to 1, ensuring proper responsive behavior.',
    difficulty: 'Easy',
    tags: ['responsive', 'mobile', 'meta'],
    tips: '<meta name="viewport" content="width=device-width, initial-scale=1">'
  },
  {
    id: 'html5',
    category: 'html',
    question: 'What is the difference between <strong> and <b> tags?',
    answer: '<strong> indicates that text is of strong importance (semantic meaning), while <b> simply makes text bold visually. Screen readers emphasize <strong> content.',
    difficulty: 'Easy',
    tags: ['semantic', 'accessibility'],
    tips: 'Use <strong> for important text, <b> for visual boldness only'
  },
  {
    id: 'html6',
    category: 'html',
    question: 'What are data attributes and how are they used?',
    answer: 'Data attributes (data-*) allow storing custom data private to the page or application. They can be accessed via JavaScript using dataset property.',
    difficulty: 'Easy',
    tags: ['attributes', 'javascript'],
    tips: 'Use data attributes for JavaScript interaction, not for styling'
  },
  {
    id: 'html7',
    category: 'html',
    question: 'What is the purpose of the <label> element?',
    answer: 'The <label> element associates text with form elements, improving accessibility. Clicking the label focuses or activates the associated input element.',
    difficulty: 'Easy',
    tags: ['forms', 'accessibility'],
    tips: 'Always use for attribute to associate label with input id'
  },
  {
    id: 'html8',
    category: 'html',
    question: 'What is the difference between GET and POST methods in forms?',
    answer: 'GET appends form data to the URL (visible, limited length), while POST sends data in the request body (hidden, no size limit). Use GET for retrieving data, POST for submitting data.',
    difficulty: 'Medium',
    tags: ['forms', 'http'],
    tips: 'Never use GET for sensitive data like passwords'
  },
  {
    id: 'html9',
    category: 'html',
    question: 'What are HTML entities and when are they used?',
    answer: 'HTML entities are codes used to display reserved characters or special symbols. Example: &lt; for <, &gt; for >, &amp; for &.',
    difficulty: 'Easy',
    tags: ['entities', 'characters'],
    tips: 'Use entities for characters that would be interpreted as HTML'
  },
  {
    id: 'html10',
    category: 'html',
    question: 'What is the purpose of the <figure> and <figcaption> elements?',
    answer: '<figure> represents self-contained content like images with an optional <figcaption> for captioning. It helps with semantic structure and accessibility.',
    difficulty: 'Easy',
    tags: ['semantic', 'accessibility'],
    tips: 'Figcaption should describe the figure content'
  },
  {
    id: 'html11',
    category: 'html',
    question: 'What is the difference between <ul> and <ol>?',
    answer: '<ul> creates an unordered list (bullet points), <ol> creates an ordered list (numbered). Both contain <li> list items.',
    difficulty: 'Easy',
    tags: ['lists', 'html'],
    tips: 'Use semantic lists for navigation, not just for styling'
  },
  {
    id: 'html12',
    category: 'html',
    question: 'What is the purpose of the defer and async attributes in script tags?',
    answer: 'Both load scripts without blocking HTML parsing. defer executes after DOM is ready, in order. async executes as soon as loaded, order not guaranteed.',
    difficulty: 'Medium',
    tags: ['performance', 'javascript'],
    tips: 'Use async for independent scripts, defer for dependent ones'
  },
  {
    id: 'html13',
    category: 'html',
    question: 'What is the difference between <article> and <section>?',
    answer: '<article> represents independent, self-contained content (like blog post). <section> groups related content but is not necessarily independent.',
    difficulty: 'Medium',
    tags: ['semantic', 'structure'],
    tips: 'Article should make sense on its own, section is thematic grouping'
  },
  {
    id: 'html14',
    category: 'html',
    question: 'What are ARIA attributes and why are they important?',
    answer: 'ARIA (Accessible Rich Internet Applications) attributes improve accessibility for dynamic content and custom widgets by providing semantic information to assistive technologies.',
    difficulty: 'Medium',
    tags: ['accessibility', 'aria'],
    tips: 'Use native HTML elements over ARIA when possible'
  },
  {
    id: 'html15',
    category: 'html',
    question: 'What is the purpose of the <template> element?',
    answer: '<template> holds HTML content that is not rendered immediately but can be cloned and inserted via JavaScript. Useful for reusable component templates.',
    difficulty: 'Medium',
    tags: ['templates', 'javascript'],
    tips: 'Template content is inert until activated by JavaScript'
  },
  {
    id: 'html16',
    category: 'html',
    question: 'What is the difference between <input type="submit"> and <button type="submit">?',
    answer: 'Both submit forms, but <button> can contain HTML content (images, text), while <input> only shows text value. <button> is more flexible for styling.',
    difficulty: 'Easy',
    tags: ['forms', 'buttons'],
    tips: 'Always specify type attribute for buttons'
  },
  {
    id: 'html17',
    category: 'html',
    question: 'What is the purpose of the <main> element?',
    answer: '<main> represents the dominant content of the <body>. It should be unique to the document and contain the main content area.',
    difficulty: 'Easy',
    tags: ['semantic', 'structure'],
    tips: 'Should not contain repeated content like navigation'
  },
  {
    id: 'html18',
    category: 'html',
    question: 'What is the difference between <i> and <em> tags?',
    answer: '<em> indicates emphasized text (semantic meaning), while <i> is for alternative voice or mood, like technical terms or thoughts.',
    difficulty: 'Medium',
    tags: ['semantic', 'accessibility'],
    tips: 'Use <em> for emphasis, <i> for stylistic differentiation'
  },
  {
    id: 'html19',
    category: 'html',
    question: 'What are web components?',
    answer: 'Web Components are a set of web platform APIs that allow creation of custom, reusable HTML elements with encapsulated functionality using Custom Elements, Shadow DOM, and HTML Templates.',
    difficulty: 'Hard',
    tags: ['web-components', 'custom-elements'],
    tips: 'Great for creating reusable UI components across frameworks'
  },
  {
    id: 'html20',
    category: 'html',
    question: 'What is the purpose of the <picture> element?',
    answer: '<picture> provides multiple sources for images, allowing art direction and responsive images based on viewport size, pixel density, or format support.',
    difficulty: 'Medium',
    tags: ['responsive', 'images'],
    tips: 'Use with multiple <source> elements and <img> fallback'
  },
  {
    id: 'html21',
    category: 'html',
    question: 'What is the difference between cookies, localStorage, and sessionStorage?',
    answer: 'Cookies are sent with HTTP requests (4KB limit). localStorage persists until cleared (5-10MB). sessionStorage lasts only for the session/tab (5-10MB).',
    difficulty: 'Medium',
    tags: ['storage', 'javascript'],
    tips: 'Use localStorage for persistent data, sessionStorage for temporary'
  },
  {
    id: 'html22',
    category: 'html',
    question: 'What is the purpose of the <datalist> element?',
    answer: '<datalist> provides pre-defined options for <input> elements, creating an auto-complete dropdown without JavaScript.',
    difficulty: 'Medium',
    tags: ['forms', 'accessibility'],
    tips: 'Use with <input list="id"> attribute'
  },
  {
    id: 'html23',
    category: 'html',
    question: 'What are microdata and why are they used?',
    answer: 'Microdata is a HTML specification used to nest metadata within existing content, helping search engines understand page content for rich snippets.',
    difficulty: 'Hard',
    tags: ['seo', 'semantic'],
    tips: 'Schema.org vocabulary is commonly used with microdata'
  },
  {
    id: 'html24',
    category: 'html',
    question: 'What is the purpose of the <details> and <summary> elements?',
    answer: '<details> creates a disclosure widget showing/hiding content. <summary> provides the visible heading. No JavaScript needed for basic functionality.',
    difficulty: 'Easy',
    tags: ['interactive', 'accessibility'],
    tips: 'Great for FAQ sections and collapsible content'
  },
  {
    id: 'html25',
    category: 'html',
    question: 'What is the difference between SVG and Canvas?',
    answer: 'SVG is vector-based, DOM-accessible, good for icons/logos. Canvas is pixel-based, manipulated via JavaScript, good for games/charts.',
    difficulty: 'Medium',
    tags: ['graphics', 'svg', 'canvas'],
    tips: 'SVG for scalable graphics, Canvas for dynamic pixel manipulation'
  },
  {
    id: 'html26',
    category: 'html',
    question: 'What is the purpose of the <progress> and <meter> elements?',
    answer: '<progress> shows completion progress of a task. <meter> represents a scalar measurement within a known range (like disk usage).',
    difficulty: 'Medium',
    tags: ['semantic', 'forms'],
    tips: 'Progress for tasks, meter for measurements with min/max values'
  },
  {
    id: 'html27',
    category: 'html',
    question: 'What are Web Workers?',
    answer: 'Web Workers allow running JavaScript in background threads, preventing UI blocking for CPU-intensive tasks.',
    difficulty: 'Hard',
    tags: ['performance', 'javascript'],
    tips: 'Workers cannot access DOM directly'
  },
  {
    id: 'html28',
    category: 'html',
    question: 'What is the purpose of the <time> element?',
    answer: '<time> represents a specific time or datetime, providing machine-readable format while displaying human-readable text.',
    difficulty: 'Easy',
    tags: ['semantic', 'datetime'],
    tips: 'Use datetime attribute for machine-readable format'
  },
  {
    id: 'html29',
    category: 'html',
    question: 'What is the difference between <iframe> and <object>?',
    answer: '<iframe> embeds another HTML page. <object> embeds external resources like PDFs, images, or plugins. Both can be used for embedding but have different use cases.',
    difficulty: 'Medium',
    tags: ['embedding', 'html'],
    tips: 'Use iframe for web pages, object for multimedia content'
  },
  {
    id: 'html30',
    category: 'html',
    question: 'What is the purpose of the <mark> element?',
    answer: '<mark> represents text highlighted for reference purposes, like search results or important passages.',
    difficulty: 'Easy',
    tags: ['semantic', 'styling'],
    tips: 'Not for syntax highlighting, use <code> or <pre> for that'
  },
  {
    id: 'html31',
    category: 'html',
    question: 'What are Content Security Policy (CSP) headers?',
    answer: 'CSP is a security layer that helps prevent XSS attacks by specifying which content sources are allowed to be loaded.',
    difficulty: 'Hard',
    tags: ['security', 'headers'],
    tips: 'Implement CSP via meta tags or HTTP headers'
  },
  {
    id: 'html32',
    category: 'html',
    question: 'What is the purpose of the <dialog> element?',
    answer: '<dialog> creates modal or non-modal dialog boxes without JavaScript for basic functionality.',
    difficulty: 'Medium',
    tags: ['interactive', 'accessibility'],
    tips: 'Use .showModal() for modal, .show() for non-modal dialogs'
  },
  {
    id: 'html33',
    category: 'html',
    question: 'What is the difference between semantic and non-semantic elements?',
    answer: 'Semantic elements clearly describe their meaning (header, footer). Non-semantic elements don\'t (div, span). Semantic elements improve accessibility and SEO.',
    difficulty: 'Easy',
    tags: ['semantic', 'accessibility'],
    tips: 'Always prefer semantic elements when possible'
  },
  {
    id: 'html34',
    category: 'html',
    question: 'What is the purpose of the <map> and <area> elements?',
    answer: '<map> defines an image map with clickable areas. <area> defines clickable regions within the map.',
    difficulty: 'Medium',
    tags: ['images', 'interactive'],
    tips: 'Use for complex image navigation without JavaScript'
  },
  {
    id: 'html35',
    category: 'html',
    question: 'What are HTTP/2 and HTTP/3 features that affect HTML?',
    answer: 'HTTP/2 enables multiplexing, server push. HTTP/3 uses QUIC protocol over UDP. Both improve performance but don\'t change HTML syntax.',
    difficulty: 'Hard',
    tags: ['performance', 'http'],
    tips: 'Server push can preload resources before HTML request'
  },
  {
    id: 'html36',
    category: 'html',
    question: 'What is the purpose of the <output> element?',
    answer: '<output> represents the result of a calculation or user action, typically in forms.',
    difficulty: 'Medium',
    tags: ['forms', 'semantic'],
    tips: 'Often used with oninput events for live calculations'
  },
  {
    id: 'html37',
    category: 'html',
    question: 'What is the difference between <nav> and menu/navigation lists?',
    answer: '<nav> is a semantic element for major navigation blocks. Regular lists can be styled as navigation but lack semantic meaning.',
    difficulty: 'Easy',
    tags: ['semantic', 'navigation'],
    tips: 'Use <nav> for primary navigation, not all link groups'
  },
  {
    id: 'html38',
    category: 'html',
    question: 'What is the purpose of the <fieldset> and <legend> elements?',
    answer: '<fieldset> groups related form elements. <legend> provides a caption for the fieldset.',
    difficulty: 'Easy',
    tags: ['forms', 'accessibility'],
    tips: 'Great for grouping radio buttons or related inputs'
  },
  {
    id: 'html39',
    category: 'html',
    question: 'What are web accessibility guidelines (WCAG)?',
    answer: 'WCAG provides standards for making web content accessible to people with disabilities. Covers perceivable, operable, understandable, and robust principles.',
    difficulty: 'Medium',
    tags: ['accessibility', 'wcag'],
    tips: 'Aim for at least WCAG 2.1 AA compliance'
  },
  {
    id: 'html40',
    category: 'html',
    question: 'What is the purpose of the <cite> element?',
    answer: '<cite> represents the title of a creative work (book, film, song) being referenced.',
    difficulty: 'Easy',
    tags: ['semantic', 'citation'],
    tips: 'Not for author names, use appropriate elements for those'
  },
  {
    id: 'html41',
    category: 'html',
    question: 'What is the difference between responsive and adaptive design?',
    answer: 'Responsive design fluidly adapts to any screen size. Adaptive design uses specific layouts for specific breakpoints.',
    difficulty: 'Medium',
    tags: ['responsive', 'design'],
    tips: 'Responsive is more flexible, adaptive can be more performant'
  },
  {
    id: 'html42',
    category: 'html',
    question: 'What is the purpose of the <kbd>, <code>, and <samp> elements?',
    answer: '<kbd> represents keyboard input. <code> represents computer code. <samp> represents sample output from a program.',
    difficulty: 'Easy',
    tags: ['semantic', 'code'],
    tips: 'Use for technical documentation and tutorials'
  },
  {
    id: 'html43',
    category: 'html',
    question: 'What are HTML imports and how do they differ from ES6 modules?',
    answer: 'HTML imports (<link rel="import">) were for importing HTML documents. Deprecated in favor of ES6 modules which handle JavaScript imports.',
    difficulty: 'Hard',
    tags: ['modules', 'deprecated'],
    tips: 'Use ES6 modules for modern JavaScript code organization'
  },
  {
    id: 'html44',
    category: 'html',
    question: 'What is the purpose of the <abbr> element?',
    answer: '<abbr> represents an abbreviation or acronym, with optional title attribute for expansion.',
    difficulty: 'Easy',
    tags: ['semantic', 'accessibility'],
    tips: 'Always include title attribute for screen readers'
  },
  {
    id: 'html45',
    category: 'html',
    question: 'What is the difference between server-side and client-side rendering?',
    answer: 'Server-side renders HTML on server and sends complete page. Client-side renders in browser using JavaScript. SSR better for SEO, CSR for interactivity.',
    difficulty: 'Medium',
    tags: ['rendering', 'performance'],
    tips: 'Modern frameworks often use hybrid approaches'
  },
  {
    id: 'html46',
    category: 'html',
    question: 'What is the purpose of the <audio> and <video> elements?',
    answer: '<audio> embeds sound content. <video> embeds video content. Both support multiple sources and controls.',
    difficulty: 'Easy',
    tags: ['media', 'multimedia'],
    tips: 'Always include multiple source formats for cross-browser support'
  },
  {
    id: 'html47',
    category: 'html',
    question: 'What are web sockets and how do they differ from HTTP?',
    answer: 'WebSockets provide full-duplex communication over a single TCP connection, enabling real-time data transfer. HTTP is request-response based.',
    difficulty: 'Hard',
    tags: ['websockets', 'realtime'],
    tips: 'Use for chat, live updates, gaming - not for static content'
  },
  {
    id: 'html48',
    category: 'html',
    question: 'What is the purpose of the <wbr> element?',
    answer: '<wbr> suggests a line break opportunity within a word, useful for long URLs or words.',
    difficulty: 'Medium',
    tags: ['typography', 'layout'],
    tips: 'Use instead of &shy; when you want break without hyphen'
  },
  {
    id: 'html49',
    category: 'html',
    question: 'What is the difference between HTTP and HTTPS?',
    answer: 'HTTPS adds SSL/TLS encryption to HTTP, securing data transmission. Essential for security, SEO, and modern browser features.',
    difficulty: 'Easy',
    tags: ['security', 'http'],
    tips: 'Always use HTTPS in production'
  },
  {
    id: 'html50',
    category: 'html',
    question: 'What is the purpose of the <base> element?',
    answer: '<base> specifies base URL/target for all relative URLs in document. Affects links, images, scripts.',
    difficulty: 'Medium',
    tags: ['urls', 'document'],
    tips: 'Use cautiously as it affects all relative URLs'
  },
  {
    id: 'css1',
    category: 'css',
    question: 'What is the CSS specificity hierarchy?',
    answer: 'Specificity determines which CSS rule is applied: 1. Inline styles, 2. IDs, 3. Classes/attributes/pseudo-classes, 4. Elements/pseudo-elements. Higher specificity wins.',
    difficulty: 'Medium',
    tags: ['specificity', 'cascade'],
    tips: 'Use !important sparingly as it breaks specificity'
  },
  {
    id: 'css2',
    category: 'css',
    question: 'What is the difference between display: none and visibility: hidden?',
    answer: 'display: none removes element from layout flow. visibility: hidden hides element but preserves space. Both hide visually.',
    difficulty: 'Easy',
    tags: ['display', 'visibility'],
    tips: 'Use display: none for complete removal, visibility: hidden for layout preservation'
  },
  {
    id: 'css3',
    category: 'css',
    question: 'What are CSS pseudo-classes and pseudo-elements?',
    answer: 'Pseudo-classes select elements in specific states (:hover, :focus). Pseudo-elements style specific parts of elements (::before, ::after, ::first-line).',
    difficulty: 'Easy',
    tags: ['pseudo', 'selectors'],
    tips: 'Pseudo-elements use double colon (::), pseudo-classes single colon (:)'
  },
  {
    id: 'css4',
    category: 'css',
    question: 'What is the CSS cascade?',
    answer: 'The cascade determines which styles apply when multiple rules target the same element. Order: 1. Importance, 2. Specificity, 3. Source order.',
    difficulty: 'Medium',
    tags: ['cascade', 'specificity'],
    tips: 'Later rules override earlier ones if specificity is equal'
  },
  {
    id: 'css5',
    category: 'css',
    question: 'What is the difference between em and rem units?',
    answer: 'em is relative to parent element font-size. rem is relative to root (html) element font-size. rem provides more predictable scaling.',
    difficulty: 'Medium',
    tags: ['units', 'typography'],
    tips: 'Use rem for consistent sizing, em for component-relative sizing'
  },
  {
    id: 'css6',
    category: 'css',
    question: 'What are CSS custom properties (CSS variables)?',
    answer: 'Custom properties (--variable-name) store values for reuse throughout stylesheet. Can be changed dynamically via JavaScript.',
    difficulty: 'Medium',
    tags: ['variables', 'custom-properties'],
    tips: 'Define in :root for global scope, use var() to reference'
  },
  {
    id: 'css7',
    category: 'css',
    question: 'What is the difference between position: absolute and position: relative?',
    answer: 'relative positions element relative to its normal position. absolute positions relative to nearest positioned ancestor (or viewport).',
    difficulty: 'Easy',
    tags: ['position', 'layout'],
    tips: 'absolute removes from normal flow, relative preserves flow space'
  },
  {
    id: 'css8',
    category: 'css',
    question: 'What is the CSS Grid layout?',
    answer: 'CSS Grid is a 2-dimensional layout system for rows and columns. Allows precise control over both axes simultaneously.',
    difficulty: 'Medium',
    tags: ['grid', 'layout'],
    tips: 'Use for overall page layout, Flexbox for component alignment'
  },
  {
    id: 'css9',
    category: 'css',
    question: 'What are CSS media queries?',
    answer: 'Media queries apply CSS rules based on device characteristics (width, height, orientation, resolution). Essential for responsive design.',
    difficulty: 'Easy',
    tags: ['responsive', 'media-queries'],
    tips: 'Use mobile-first approach with min-width queries'
  },
  {
    id: 'css10',
    category: 'css',
    question: 'What is the difference between margin and padding?',
    answer: 'Padding is space inside element border, margin is space outside element border. Padding affects element size, margin affects spacing between elements.',
    difficulty: 'Easy',
    tags: ['box-model', 'spacing'],
    tips: 'Margin can collapse between elements, padding never collapses'
  },
  {
    id: 'css11',
    category: 'css',
    question: 'What are CSS transitions and animations?',
    answer: 'Transitions animate property changes smoothly. Animations define complex sequences with keyframes. Both enhance user experience.',
    difficulty: 'Medium',
    tags: ['animations', 'transitions'],
    tips: 'Use transitions for simple state changes, animations for complex sequences'
  },
  {
    id: 'css12',
    category: 'css',
    question: 'What is the difference between inline, internal, and external CSS?',
    answer: 'Inline: style attribute. Internal: <style> tags in <head>. External: separate .css file linked via <link>. External is preferred for maintainability.',
    difficulty: 'Easy',
    tags: ['stylesheets', 'organization'],
    tips: 'Always prefer external CSS for production'
  },
  {
    id: 'css13',
    category: 'css',
    question: 'What is the CSS BEM methodology?',
    answer: 'BEM (Block, Element, Modifier) is a naming convention: Block__element--modifier. Improves readability, maintainability, and prevents specificity issues.',
    difficulty: 'Medium',
    tags: ['methodology', 'naming'],
    tips: 'Use for large projects to maintain CSS scalability'
  },
  {
    id: 'css14',
    category: 'css',
    question: 'What is the difference between vw/vh and % units?',
    answer: 'vw/vh are relative to viewport width/height. % is relative to parent element. vw/vh provide viewport-based sizing, % provides relative sizing.',
    difficulty: 'Medium',
    tags: ['units', 'responsive'],
    tips: 'Use vw/vh for full-viewport elements, % for fluid containers'
  },
  {
    id: 'css15',
    category: 'css',
    question: 'What are CSS transforms?',
    answer: 'Transforms modify element appearance without affecting layout: translate, rotate, scale, skew. Use hardware acceleration for performance.',
    difficulty: 'Medium',
    tags: ['transforms', 'effects'],
    tips: 'Combine with transitions for smooth animations'
  },
  {
    id: 'css16',
    category: 'css',
    question: 'What is the difference between flex-basis, width, and min-width?',
    answer: 'flex-basis sets initial size before flex-grow/shrink. width sets fixed size. min-width sets minimum size limit. In flexbox, flex-basis overrides width.',
    difficulty: 'Hard',
    tags: ['flexbox', 'sizing'],
    tips: 'Use flex-basis for flexible sizing, width for fixed sizing'
  },
  {
    id: 'css17',
    category: 'css',
    question: 'What are CSS preprocessors and their benefits?',
    answer: 'Preprocessors (Sass, Less) extend CSS with variables, nesting, mixins, functions. Compiled to regular CSS. Improve maintainability and organization.',
    difficulty: 'Medium',
    tags: ['preprocessors', 'sass'],
    tips: 'Sass is most popular, supports both .scss and .sass syntax'
  },
  {
    id: 'css18',
    category: 'css',
    question: 'What is the difference between :nth-child() and :nth-of-type()?',
    answer: ':nth-child() selects based on position among all siblings. :nth-of-type() selects based on position among siblings of same type.',
    difficulty: 'Medium',
    tags: ['selectors', 'pseudo'],
    tips: 'Use :nth-of-type() when element types vary among siblings'
  },
  {
    id: 'css19',
    category: 'css',
    question: 'What is CSS stacking context and z-index?',
    answer: 'Stacking context determines element stacking order. z-index controls stacking within same context. Positioned elements create new contexts.',
    difficulty: 'Hard',
    tags: ['z-index', 'positioning'],
    tips: 'z-index only works on positioned elements (relative, absolute, fixed)'
  },
  {
    id: 'css20',
    category: 'css',
    question: 'What are CSS blend modes?',
    answer: 'Blend modes (mix-blend-mode, background-blend-mode) control how elements blend with content behind them. Create visual effects like multiply, screen, overlay.',
    difficulty: 'Hard',
    tags: ['effects', 'blend-modes'],
    tips: 'Similar to Photoshop blend modes, great for creative designs'
  },
  {
    id: 'css21',
    category: 'css',
    question: 'What is the difference between object-fit and background-size?',
    answer: 'object-fit controls how <img>/<video> content fits container. background-size controls background image sizing. Similar concepts for different elements.',
    difficulty: 'Medium',
    tags: ['images', 'sizing'],
    tips: 'Use object-fit: cover for image galleries, background-size: cover for hero sections'
  },
  {
    id: 'css22',
    category: 'css',
    question: 'What are CSS counters?',
    answer: 'Counters automatically number elements (like lists). Use counter-reset, counter-increment, and content: counter(name).',
    difficulty: 'Hard',
    tags: ['generated-content', 'counters'],
    tips: 'Great for custom numbered lists or steps'
  },
  {
    id: 'css23',
    category: 'css',
    question: 'What is the difference between justify-content and align-items?',
    answer: 'In flexbox: justify-content aligns along main axis. align-items aligns along cross axis. In grid: justify-content aligns grid items horizontally.',
    difficulty: 'Medium',
    tags: ['flexbox', 'alignment'],
    tips: 'Remember: justify = main axis, align = cross axis'
  },
  {
    id: 'css24',
    category: 'css',
    question: 'What are CSS filters?',
    answer: 'Filters (filter: blur(), grayscale(), etc.) apply visual effects like blur, color adjustment, drop shadows to elements.',
    difficulty: 'Medium',
    tags: ['effects', 'filters'],
    tips: 'Performance intensive, use sparingly on large elements'
  },
  {
    id: 'css25',
    category: 'css',
    question: 'What is the difference between transition and animation performance?',
    answer: 'Transitions generally perform better for simple property changes. Complex animations may require hardware acceleration (transform, opacity).',
    difficulty: 'Hard',
    tags: ['performance', 'animations'],
    tips: 'Animate transform and opacity for best performance'
  },
  {
    id: 'css26',
    category: 'css',
    question: 'What are CSS custom fonts (@font-face)?',
    answer: '@font-face defines custom fonts for web use. Supports various formats (woff2, woff, ttf). Essential for brand typography.',
    difficulty: 'Easy',
    tags: ['typography', 'fonts'],
    tips: 'Use woff2 for modern browsers, woff as fallback'
  },
  {
    id: 'css27',
    category: 'css',
    question: 'What is the difference between overflow: hidden and overflow: scroll?',
    answer: 'hidden clips overflow content. scroll always shows scrollbars. auto shows scrollbars only when needed.',
    difficulty: 'Easy',
    tags: ['overflow', 'layout'],
    tips: 'Use overflow: auto for better UX than always-visible scrollbars'
  },
  {
    id: 'css28',
    category: 'css',
    question: 'What are CSS containment?',
    answer: 'Containment (contain property) isolates element rendering for performance. Types: layout, paint, size, style. Improves rendering performance.',
    difficulty: 'Hard',
    tags: ['performance', 'containment'],
    tips: 'Use for complex, frequently updated components'
  },
  {
    id: 'css29',
    category: 'css',
    question: 'What is the difference between CSS Grid and Flexbox?',
    answer: 'Grid: 2D layout (rows & columns simultaneously). Flexbox: 1D layout (row OR column). Use Grid for page layout, Flexbox for component alignment.',
    difficulty: 'Medium',
    tags: ['grid', 'flexbox', 'layout'],
    tips: 'They work great together - Grid for structure, Flexbox for alignment'
  },
  {
    id: 'css30',
    category: 'css',
    question: 'What are CSS masks and clipping?',
    answer: 'Masks (mask-image) hide/show parts of element using image/gradient. Clipping (clip-path) defines visible region using shapes/paths.',
    difficulty: 'Hard',
    tags: ['effects', 'masking'],
    tips: 'Great for creative shapes and reveal animations'
  },
  {
    id: 'css31',
    category: 'css',
    question: 'What is the difference between :focus and :focus-within?',
    answer: ':focus styles the focused element. :focus-within styles parent when any child is focused. Useful for form styling.',
    difficulty: 'Medium',
    tags: ['pseudo', 'accessibility'],
    tips: 'Use :focus-within for highlighting entire form sections'
  },
  {
    id: 'css32',
    category: 'css',
    question: 'What are CSS logical properties?',
    answer: 'Logical properties (margin-inline-start, padding-block) adapt to writing direction (LTR/RTL). Better for internationalization.',
    difficulty: 'Hard',
    tags: ['internationalization', 'layout'],
    tips: 'Use for RTL language support instead of left/right'
  },
  {
    id: 'css33',
    category: 'css',
    question: 'What is the difference between background-attachment: fixed and scroll?',
    answer: 'fixed background stays in place during scrolling. scroll background moves with content. local background scrolls with element content.',
    difficulty: 'Medium',
    tags: ['background', 'effects'],
    tips: 'fixed creates parallax effect but can impact performance'
  },
  {
    id: 'css34',
    category: 'css',
    question: 'What are CSS custom scrollbars?',
    answer: '::-webkit-scrollbar pseudo-elements style scrollbars in WebKit browsers. Standard scrollbar styling via scrollbar-width and scrollbar-color.',
    difficulty: 'Hard',
    tags: ['scrollbars', 'styling'],
    tips: 'Provide fallback for non-WebKit browsers'
  },
  {
    id: 'css35',
    category: 'css',
    question: 'What is the difference between will-change and transform: translateZ(0)?',
    answer: 'Both hint browser for optimizations. will-change is explicit intent. translateZ(0) forces hardware acceleration. Prefer will-change for clarity.',
    difficulty: 'Hard',
    tags: ['performance', 'optimization'],
    tips: 'Use will-change sparingly and remove when done'
  },
  {
    id: 'css36',
    category: 'css',
    question: 'What are CSS subgrid?',
    answer: 'Subgrid allows grid items to inherit parent grid tracks. Enables nested grids to align with parent grid.',
    difficulty: 'Hard',
    tags: ['grid', 'layout'],
    tips: 'Limited browser support, check compatibility'
  },
  {
    id: 'css37',
    category: 'css',
    question: 'What is the difference between :where() and :is() pseudo-classes?',
    answer: 'Both match multiple selectors. :where() has zero specificity. :is() takes highest specificity. Use :where() to avoid specificity issues.',
    difficulty: 'Hard',
    tags: ['selectors', 'specificity'],
    tips: ':where() is great for reset styles without specificity wars'
  },
  {
    id: 'css38',
    category: 'css',
    question: 'What are CSS layers (@layer)?',
    answer: '@layer defines cascade layers for controlling specificity. Layers have lower priority than unlayered styles. Helps manage CSS architecture.',
    difficulty: 'Hard',
    tags: ['architecture', 'cascade'],
    tips: 'Define layers in order of increasing specificity'
  },
  {
    id: 'css39',
    category: 'css',
    question: 'What is the difference between currentColor and inherit?',
    answer: 'currentColor uses current text color value. inherit inherits parent computed value. currentColor is specific to color property.',
    difficulty: 'Medium',
    tags: ['values', 'inheritance'],
    tips: 'Use currentColor for icons/borders that match text color'
  },
  {
    id: 'css40',
    category: 'css',
    question: 'What are CSS container queries?',
    answer: 'Container queries (@container) apply styles based on container size, not viewport. Enables component-level responsiveness.',
    difficulty: 'Hard',
    tags: ['responsive', 'container-queries'],
    tips: 'Requires container-type property on parent'
  },
  {
    id: 'css41',
    category: 'css',
    question: 'What is the difference between aspect-ratio and padding hack?',
    answer: 'aspect-ratio property sets width:height ratio directly. Padding hack uses padding-bottom percentage. aspect-ratio is simpler and semantic.',
    difficulty: 'Medium',
    tags: ['ratio', 'layout'],
    tips: 'Use aspect-ratio for modern browsers, padding hack for fallback'
  },
  {
    id: 'css42',
    category: 'css',
    question: 'What are CSS scroll snap?',
    answer: 'Scroll snap (scroll-snap-type, scroll-snap-align) controls scroll position stopping points. Creates carousel-like scrolling experiences.',
    difficulty: 'Medium',
    tags: ['scrolling', 'interaction'],
    tips: 'Great for image galleries or step-by-step content'
  },
  {
    id: 'css43',
    category: 'css',
    question: 'What is the difference between CSS-in-JS and CSS Modules?',
    answer: 'CSS-in-JS writes CSS in JavaScript (styled-components). CSS Modules scopes CSS locally (filename.module.css). Both solve CSS scoping.',
    difficulty: 'Hard',
    tags: ['methodology', 'scoping'],
    tips: 'CSS Modules are simpler, CSS-in-JS offers more dynamic styling'
  },
  {
    id: 'css44',
    category: 'css',
    question: 'What are CSS prefers-* media features?',
    answer: 'prefers-color-scheme (dark/light mode), prefers-reduced-motion (animations), prefers-contrast (contrast). Respect user preferences.',
    difficulty: 'Medium',
    tags: ['accessibility', 'media-queries'],
    tips: 'Always respect prefers-reduced-motion for accessibility'
  },
  {
    id: 'css45',
    category: 'css',
    question: 'What is the difference between initial, inherit, unset, and revert?',
    answer: 'initial: CSS default. inherit: parent value. unset: inherit if inheritable, else initial. revert: user-agent or user stylesheet value.',
    difficulty: 'Hard',
    tags: ['values', 'inheritance'],
    tips: 'Use unset for resetting styles, revert for browser defaults'
  },
  {
    id: 'css46',
    category: 'css',
    question: 'What are CSS scroll-driven animations?',
    answer: 'Animations linked to scroll position using @scroll-timeline and animation-timeline. Create parallax and scroll-based animations.',
    difficulty: 'Hard',
    tags: ['animations', 'scrolling'],
    tips: 'Experimental feature, check browser support'
  },
  {
    id: 'css47',
    category: 'css',
    question: 'What is the difference between backdrop-filter and filter?',
    answer: 'filter applies to element. backdrop-filter applies to area behind element (blur, grayscale background). Creates frosted glass effect.',
    difficulty: 'Medium',
    tags: ['effects', 'filters'],
    tips: 'backdrop-filter performance varies by browser'
  },
  {
    id: 'css48',
    category: 'css',
    question: 'What are CSS relative colors?',
    answer: 'Relative colors (lab(), lch(), oklch()) use modern color spaces with better perceptual uniformity. Better for color manipulation.',
    difficulty: 'Hard',
    tags: ['color', 'modern-css'],
    tips: 'Use for color systems that need consistent lightness'
  },
  {
    id: 'css49',
    category: 'css',
    question: 'What is the difference between CSS custom properties and SASS variables?',
    answer: 'CSS variables: dynamic, cascade, JavaScript accessible. SASS variables: compile-time, more features (mixins, functions), but static.',
    difficulty: 'Medium',
    tags: ['variables', 'comparison'],
    tips: 'Use CSS vars for themes, SASS vars for static values'
  },
  {
    id: 'css50',
    category: 'css',
    question: 'What are CSS anchor positioning?',
    answer: 'Anchor positioning positions elements relative to anchor elements using anchor() and anchor-size(). Advanced positioning system.',
    difficulty: 'Hard',
    tags: ['positioning', 'modern-css'],
    tips: 'Experimental feature for complex UI components'
  },
  {
    id: 'js1',
    category: 'javascript',
    question: 'What is hoisting in JavaScript?',
    answer: 'Hoisting moves variable and function declarations to the top of their scope during compilation. var declarations are hoisted (initialized undefined), let/const hoisted but not initialized.',
    difficulty: 'Medium',
    tags: ['hoisting', 'variables'],
    tips: 'Always declare variables before use to avoid confusion'
  },
  {
    id: 'js2',
    category: 'javascript',
    question: 'What is the difference between == and ===?',
    answer: '== compares values with type coercion. === compares both value AND type without coercion. Always use === unless you need type coercion.',
    difficulty: 'Easy',
    tags: ['operators', 'comparison'],
    tips: 'Use === for predictable comparisons'
  },
  {
    id: 'js3',
    category: 'javascript',
    question: 'What is closure in JavaScript?',
    answer: 'Closure is a function that remembers its outer variables and can access them even after the outer function has returned. Created when function is defined, not when called.',
    difficulty: 'Hard',
    tags: ['closure', 'functions'],
    tips: 'Great for data privacy and function factories'
  },
  {
    id: 'js4',
    category: 'javascript',
    question: 'What is the event loop?',
    answer: 'Event loop handles asynchronous operations. It monitors call stack and callback queue. When stack is empty, it pushes callbacks from queue to stack.',
    difficulty: 'Hard',
    tags: ['asynchronous', 'event-loop'],
    tips: 'Remember: Call stack → Web APIs → Callback Queue → Event Loop'
  },
  {
    id: 'js5',
    category: 'javascript',
    question: 'What is the difference between call, apply, and bind?',
    answer: 'All set "this" context. call invokes immediately with arguments list. apply invokes with arguments array. bind returns new function with bound context.',
    difficulty: 'Medium',
    tags: ['this', 'functions'],
    tips: 'call/apply for immediate invocation, bind for later use'
  },
  {
    id: 'js6',
    category: 'javascript',
    question: 'What are promises?',
    answer: 'Promises represent eventual completion of async operation. States: pending, fulfilled, rejected. Methods: then(), catch(), finally().',
    difficulty: 'Medium',
    tags: ['asynchronous', 'promises'],
    tips: 'Always return promises from .then() for chaining'
  },
  {
    id: 'js7',
    category: 'javascript',
    question: 'What is the difference between null and undefined?',
    answer: 'undefined means variable declared but not assigned. null is explicit empty value assignment. typeof null is "object" (historical bug).',
    difficulty: 'Easy',
    tags: ['values', 'types'],
    tips: 'Use null for intentional absence, undefined for unintentional'
  },
  {
    id: 'js8',
    category: 'javascript',
    question: 'What are async/await?',
    answer: 'Async/await is syntax sugar over promises. async function returns promise. await pauses execution until promise settles. Makes async code look synchronous.',
    difficulty: 'Medium',
    tags: ['asynchronous', 'async-await'],
    tips: 'Always use try/catch with async/await for error handling'
  },
  {
    id: 'js9',
    category: 'javascript',
    question: 'What is the "this" keyword?',
    answer: '"this" refers to execution context. Depends on how function is called: global, object method, constructor, explicit binding, arrow functions.',
    difficulty: 'Hard',
    tags: ['this', 'context'],
    tips: 'Arrow functions inherit "this" from surrounding scope'
  },
  {
    id: 'js10',
    category: 'javascript',
    question: 'What are prototypes and prototype inheritance?',
    answer: 'Every object has prototype property linking to another object. JavaScript uses prototypal inheritance - objects inherit from other objects.',
    difficulty: 'Hard',
    tags: ['prototype', 'inheritance'],
    tips: '__proto__ is getter/setter, prototype is property on functions'
  },
  {
    id: 'js11',
    category: 'javascript',
    question: 'What is the difference between let and const?',
    answer: 'let allows reassignment, const does not. Both are block-scoped. const variables must be initialized. const objects properties can be modified.',
    difficulty: 'Easy',
    tags: ['variables', 'es6'],
    tips: 'Use const by default, let only when reassignment needed'
  },
  {
    id: 'js12',
    category: 'javascript',
    question: 'What are JavaScript modules?',
    answer: 'Modules are reusable pieces of code with import/export syntax. ES6 modules are static, support tree shaking, and run in strict mode.',
    difficulty: 'Medium',
    tags: ['modules', 'es6'],
    tips: 'Use named exports for multiple values, default for single'
  },
  {
    id: 'js13',
    category: 'javascript',
    question: 'What is the difference between forEach and map?',
    answer: 'forEach executes function for each element, returns undefined. map creates new array with results, returns new array.',
    difficulty: 'Easy',
    tags: ['arrays', 'methods'],
    tips: 'Use map when you need transformed array, forEach for side effects'
  },
  {
    id: 'js14',
    category: 'javascript',
    question: 'What is event delegation?',
    answer: 'Event delegation attaches single event listener to parent instead of multiple to children. Uses event bubbling. More efficient for dynamic content.',
    difficulty: 'Medium',
    tags: ['events', 'dom'],
    tips: 'Use e.target to identify which child triggered event'
  },
  {
    id: 'js15',
    category: 'javascript',
    question: 'What is the difference between shallow and deep copy?',
    answer: 'Shallow copy copies top-level properties. Deep copy copies all nested objects. Object.assign() and spread operator create shallow copies.',
    difficulty: 'Medium',
    tags: ['objects', 'copy'],
    tips: 'Use JSON.parse(JSON.stringify()) for simple deep copy (no functions)'
  },
  {
    id: 'js16',
    category: 'javascript',
    question: 'What are generators?',
    answer: 'Generators are functions that can be paused/resumed using yield. Return iterator object. Useful for lazy evaluation and async operations.',
    difficulty: 'Hard',
    tags: ['generators', 'iterators'],
    tips: 'Use function* syntax and .next() to control execution'
  },
  {
    id: 'js17',
    category: 'javascript',
    question: 'What is the difference between setTimeout and setInterval?',
    answer: 'setTimeout runs function once after delay. setInterval runs repeatedly at interval. Both return timer ID for clearing.',
    difficulty: 'Easy',
    tags: ['timers', 'asynchronous'],
    tips: 'Clear intervals with clearInterval() to prevent memory leaks'
  },
  {
    id: 'js18',
    category: 'javascript',
    question: 'What are Web APIs in browser JavaScript?',
    answer: 'Web APIs are browser-provided APIs: DOM, Fetch, Storage, Geolocation, Canvas, etc. Not part of JavaScript language but accessible in browser.',
    difficulty: 'Medium',
    tags: ['web-apis', 'browser'],
    tips: 'These APIs are asynchronous and callback-based'
  },
  {
    id: 'js19',
    category: 'javascript',
    question: 'What is memoization?',
    answer: 'Memoization caches function results for same inputs. Improves performance for expensive computations. Implement with closure or Map.',
    difficulty: 'Medium',
    tags: ['optimization', 'functions'],
    tips: 'Great for recursive functions like Fibonacci'
  },
  {
    id: 'js20',
    category: 'javascript',
    question: 'What is the difference between synchronous and asynchronous code?',
    answer: 'Synchronous executes line by line, blocking. Asynchronous continues execution, handles operations later via callbacks/promises.',
    difficulty: 'Easy',
    tags: ['asynchronous', 'basics'],
    tips: 'JavaScript is single-threaded but uses async for non-blocking'
  },
  {
    id: 'js21',
    category: 'javascript',
    question: 'What are template literals?',
    answer: 'Template literals (backticks) allow string interpolation ${expression} and multi-line strings. More readable than concatenation.',
    difficulty: 'Easy',
    tags: ['strings', 'es6'],
    tips: 'Use tagged templates for custom string processing'
  },
  {
    id: 'js22',
    category: 'javascript',
    question: 'What is the difference between var, let, and const?',
    answer: 'var: function-scoped, hoisted, can redeclare. let: block-scoped, hoisted but not initialized, cannot redeclare. const: like let but cannot reassign.',
    difficulty: 'Medium',
    tags: ['variables', 'comparison'],
    tips: 'Prefer const, then let, avoid var in modern code'
  },
  {
    id: 'js23',
    category: 'javascript',
    question: 'What are destructuring assignments?',
    answer: 'Destructuring extracts values from arrays/objects into variables. Syntax: const {prop} = obj; const [first] = arr.',
    difficulty: 'Medium',
    tags: ['es6', 'destructuring'],
    tips: 'Use default values and renaming for flexibility'
  },
  {
    id: 'js24',
    category: 'javascript',
    question: 'What is the spread operator?',
    answer: 'Spread operator (...) expands iterables into individual elements. Used for array/object copying, merging, function arguments.',
    difficulty: 'Medium',
    tags: ['es6', 'operators'],
    tips: 'Creates shallow copies, not deep copies'
  },
  {
    id: 'js25',
    category: 'javascript',
    question: 'What are rest parameters?',
    answer: 'Rest parameters (...) collect remaining arguments into array. Used in function parameters to handle variable arguments.',
    difficulty: 'Medium',
    tags: ['functions', 'es6'],
    tips: 'Must be last parameter in function definition'
  },
  {
    id: 'js26',
    category: 'javascript',
    question: 'What is currying?',
    answer: 'Currying transforms function with multiple arguments into sequence of functions each taking single argument. Enables partial application.',
    difficulty: 'Hard',
    tags: ['functions', 'functional'],
    tips: 'Use for function specialization and composition'
  },
  {
    id: 'js27',
    category: 'javascript',
    question: 'What is the difference between Array.reduce() and Array.reduceRight()?',
    answer: 'reduce() processes left-to-right, reduceRight() processes right-to-left. Both accumulate array into single value.',
    difficulty: 'Medium',
    tags: ['arrays', 'methods'],
    tips: 'reduceRight is useful for operations where order matters'
  },
  {
    id: 'js28',
    category: 'javascript',
    question: 'What are WeakMap and WeakSet?',
    answer: 'WeakMap/WeakSet store weak references (don\'t prevent garbage collection). Keys must be objects. No iteration methods.',
    difficulty: 'Hard',
    tags: ['collections', 'memory'],
    tips: 'Use for metadata or private data associated with objects'
  },
  {
    id: 'js29',
    category: 'javascript',
    question: 'What is the difference between function declaration and expression?',
    answer: 'Declaration: function name() {}. Expression: const name = function() {}. Declarations are hoisted, expressions are not.',
    difficulty: 'Medium',
    tags: ['functions', 'hoisting'],
    tips: 'Use expressions when you need conditional function creation'
  },
  {
    id: 'js30',
    category: 'javascript',
    question: 'What are Symbols?',
    answer: 'Symbols are unique, immutable primitive values. Useful for object property keys to avoid name collisions. Not enumerable in for...in.',
    difficulty: 'Medium',
    tags: ['symbols', 'es6'],
    tips: 'Use for metadata or "hidden" properties'
  },
  {
    id: 'js31',
    category: 'javascript',
    question: 'What is the difference between Object.freeze() and Object.seal()?',
    answer: 'freeze() makes object immutable (cannot add/remove/modify properties). seal() prevents adding/removing but allows modifying existing.',
    difficulty: 'Hard',
    tags: ['objects', 'immutability'],
    tips: 'Both are shallow - nested objects are not affected'
  },
  {
    id: 'js32',
    category: 'javascript',
    question: 'What are Proxy and Reflect?',
    answer: 'Proxy wraps object to intercept operations (get, set, etc.). Reflect provides methods for interceptable operations. Used for metaprogramming.',
    difficulty: 'Hard',
    tags: ['metaprogramming', 'proxy'],
    tips: 'Great for validation, logging, or creating reactive systems'
  },
  {
    id: 'js33',
    category: 'javascript',
    question: 'What is the difference between for...in and for...of?',
    answer: 'for...in iterates over enumerable property keys (including inherited). for...of iterates over iterable values (arrays, strings, maps).',
    difficulty: 'Medium',
    tags: ['loops', 'iteration'],
    tips: 'Use for...in for objects, for...of for arrays/iterables'
  },
  {
    id: 'js34',
    category: 'javascript',
    question: 'What are optional chaining and nullish coalescing?',
    answer: 'Optional chaining (?.) safely accesses nested properties. Nullish coalescing (??) returns right-hand operand when left is null/undefined.',
    difficulty: 'Medium',
    tags: ['operators', 'es2020'],
    tips: '?? differs from || which checks falsy values (0, "")'
  },
  {
    id: 'js35',
    category: 'javascript',
    question: 'What is the difference between ==, ===, and Object.is()?',
    answer: '== with coercion, === strict equality. Object.is() same as === except: Object.is(NaN, NaN) true, Object.is(0, -0) false.',
    difficulty: 'Hard',
    tags: ['comparison', 'objects'],
    tips: 'Use Object.is() for special cases like NaN comparison'
  },
  {
    id: 'js36',
    category: 'javascript',
    question: 'What are iterators and iterables?',
    answer: 'Iterable: object with [Symbol.iterator] method. Iterator: object with next() method returning {value, done}. for...of uses iterables.',
    difficulty: 'Hard',
    tags: ['iterators', 'iterables'],
    tips: 'Make objects iterable by adding [Symbol.iterator] method'
  },
  {
    id: 'js37',
    category: 'javascript',
    question: 'What is the difference between encodeURI and encodeURIComponent?',
    answer: 'encodeURI encodes complete URI (preserves :, /, ?, #). encodeURIComponent encodes URI component (encodes all special chars).',
    difficulty: 'Medium',
    tags: ['url', 'encoding'],
    tips: 'Use encodeURIComponent for query string parameters'
  },
  {
    id: 'js38',
    category: 'javascript',
    question: 'What are tagged template literals?',
    answer: 'Tagged templates are functions that process template literals. Receives string array and interpolated values. Used for sanitization, i18n.',
    difficulty: 'Hard',
    tags: ['strings', 'templates'],
    tips: 'First argument is array of string literals, rest are values'
  },
  {
    id: 'js39',
    category: 'javascript',
    question: 'What is the difference between JSON.stringify and JSON.parse?',
    answer: 'JSON.stringify converts JavaScript to JSON string. JSON.parse converts JSON string to JavaScript. Both accept reviver/replacer functions.',
    difficulty: 'Easy',
    tags: ['json', 'serialization'],
    tips: 'JSON.stringify omits undefined and functions'
  },
  {
    id: 'js40',
    category: 'javascript',
    question: 'What are private class fields?',
    answer: 'Private fields (#field) are accessible only within class. Must be declared before use. Cannot be accessed from outside or subclasses.',
    difficulty: 'Medium',
    tags: ['classes', 'es2022'],
    tips: 'Use # prefix for truly private fields'
  },
  {
    id: 'js41',
    category: 'javascript',
    question: 'What is the difference between Error, TypeError, and ReferenceError?',
    answer: 'Error: generic error. TypeError: operation on wrong type. ReferenceError: undefined variable. Custom errors extend Error class.',
    difficulty: 'Medium',
    tags: ['errors', 'exceptions'],
    tips: 'Always throw Error or subclasses, not strings'
  },
  {
    id: 'js42',
    category: 'javascript',
    question: 'What are Web Workers?',
    answer: 'Web Workers run JavaScript in background threads. Communicate via postMessage. Cannot access DOM directly. Good for CPU-intensive tasks.',
    difficulty: 'Hard',
    tags: ['workers', 'performance'],
    tips: 'Use for heavy computations to prevent UI blocking'
  },
  {
    id: 'js43',
    category: 'javascript',
    question: 'What is the difference between localStorage and sessionStorage?',
    answer: 'localStorage persists until cleared. sessionStorage clears when tab closes. Both same API, same size limits (5-10MB).',
    difficulty: 'Easy',
    tags: ['storage', 'browser'],
    tips: 'Use localStorage for preferences, sessionStorage for temporary data'
  },
  {
    id: 'js44',
    category: 'javascript',
    question: 'What are decorators?',
    answer: 'Decorators are functions that modify classes/methods at design time. Syntax: @decorator. Currently stage 3 proposal, used with transpilers.',
    difficulty: 'Hard',
    tags: ['decorators', 'experimental'],
    tips: 'Common in frameworks like Angular for metadata'
  },
  {
    id: 'js45',
    category: 'javascript',
    question: 'What is the difference between Array.from() and Array.of()?',
    answer: 'Array.from() creates array from array-like or iterable. Array.of() creates array from arguments (better than new Array()).',
    difficulty: 'Medium',
    tags: ['arrays', 'methods'],
    tips: 'Array.of(7) creates [7], new Array(7) creates empty ×7'
  },
  {
    id: 'js46',
    category: 'javascript',
    question: 'What are generators and async generators?',
    answer: 'Generators yield values. Async generators yield promises. Use async function* and await yield. Good for pagination or streams.',
    difficulty: 'Hard',
    tags: ['generators', 'async'],
    tips: 'Use for await...of with async generators'
  },
  {
    id: 'js47',
    category: 'javascript',
    question: 'What is the difference between Set and Array?',
    answer: 'Set stores unique values, has O(1) lookup. Array stores ordered values, allows duplicates. Set methods: add, delete, has, clear.',
    difficulty: 'Medium',
    tags: ['collections', 'arrays'],
    tips: 'Use Set for membership testing, Array for ordered data'
  },
  {
    id: 'js48',
    category: 'javascript',
    question: 'What are Intl APIs?',
    answer: 'Intl provides internationalization: DateTimeFormat, NumberFormat, Collator. Formats dates, numbers, strings according to locale.',
    difficulty: 'Medium',
    tags: ['internationalization', 'formatting'],
    tips: 'Always specify locale for consistent formatting'
  },
  {
    id: 'js49',
    category: 'javascript',
    question: 'What is the difference between .then() chaining and async/await?',
    answer: '.then() chains promises explicitly. async/await uses synchronous-like syntax. Both handle promises, async/await is more readable.',
    difficulty: 'Medium',
    tags: ['promises', 'async-await'],
    tips: 'Async/await compiles to promise chains'
  },
  {
    id: 'js50',
    category: 'javascript',
    question: 'What are ArrayBuffer and TypedArrays?',
    answer: 'ArrayBuffer represents raw binary data. TypedArrays (Uint8Array, Float32Array) provide views for buffer. Used for binary data manipulation.',
    difficulty: 'Hard',
    tags: ['binary', 'typed-arrays'],
    tips: 'Essential for WebGL, Web Audio, file processing'
  },
  {
    id: 'react1',
    category: 'react',
    question: 'What is the difference between state and props?',
    answer: 'State is internal, mutable data managed by component. Props are external, immutable data passed from parent. Both trigger re-renders when changed.',
    difficulty: 'Easy',
    tags: ['state', 'props'],
    tips: 'Props flow down, state is contained'
  },
  {
    id: 'react2',
    category: 'react',
    question: 'What are React hooks?',
    answer: 'Hooks are functions that let you use state and other React features in function components. Rules: Only call at top level, only in React functions.',
    difficulty: 'Medium',
    tags: ['hooks', 'functional'],
    tips: 'Always start hook names with "use"'
  },
  {
    id: 'react3',
    category: 'react',
    question: 'What is the virtual DOM?',
    answer: 'Virtual DOM is lightweight copy of real DOM. React compares virtual DOM trees to find minimal updates, then batches real DOM updates for performance.',
    difficulty: 'Medium',
    tags: ['virtual-dom', 'performance'],
    tips: 'Diffing algorithm is called "reconciliation"'
  },
  {
    id: 'react4',
    category: 'react',
    question: 'What is JSX?',
    answer: 'JSX is JavaScript XML syntax extension. Gets transpiled to React.createElement() calls. Allows HTML-like syntax in JavaScript.',
    difficulty: 'Easy',
    tags: ['jsx', 'syntax'],
    tips: 'JSX must have single parent element or Fragment'
  },
  {
    id: 'react5',
    category: 'react',
    question: 'What are controlled vs uncontrolled components?',
    answer: 'Controlled: React manages form state via state/props. Uncontrolled: DOM manages form state via refs. Controlled is preferred in React.',
    difficulty: 'Medium',
    tags: ['forms', 'components'],
    tips: 'Use controlled for validation, uncontrolled for simple forms'
  },
  {
    id: 'react6',
    category: 'react',
    question: 'What is the useEffect hook?',
    answer: 'useEffect handles side effects (data fetching, subscriptions, DOM manipulation). Runs after render. Cleanup function prevents memory leaks.',
    difficulty: 'Hard',
    tags: ['hooks', 'effects'],
    tips: 'Specify dependency array to control when effect runs'
  },
  {
    id: 'react7',
    category: 'react',
    question: 'What are React fragments?',
    answer: 'Fragments (<></> or <Fragment>) group elements without adding extra DOM nodes. Useful when component must return multiple elements.',
    difficulty: 'Easy',
    tags: ['fragments', 'jsx'],
    tips: 'Use <></> for simple cases, <Fragment key=> when keys needed'
  },
  {
    id: 'react8',
    category: 'react',
    question: 'What is the difference between functional and class components?',
    answer: 'Functional: simpler, use hooks, no lifecycle methods. Class: more features (lifecycle, error boundaries), use this. Functional preferred now.',
    difficulty: 'Medium',
    tags: ['components', 'comparison'],
    tips: 'Use functional components with hooks for new code'
  },
  {
    id: 'react9',
    category: 'react',
    question: 'What are React keys?',
    answer: 'Keys help React identify which items changed, added, or removed. Should be unique among siblings. Use stable IDs, not array indices.',
    difficulty: 'Medium',
    tags: ['keys', 'lists'],
    tips: 'Keys only need to be unique among siblings, not globally'
  },
  {
    id: 'react10',
    category: 'react',
    question: 'What is context API?',
    answer: 'Context provides way to pass data through component tree without prop drilling. Create with React.createContext(), use Provider and Consumer.',
    difficulty: 'Medium',
    tags: ['context', 'state-management'],
    tips: 'Use for theme, authentication, language preferences'
  },
  {
    id: 'react11',
    category: 'react',
    question: 'What are React portals?',
    answer: 'Portals render children into DOM node outside parent hierarchy. Useful for modals, tooltips, popovers. Use ReactDOM.createPortal().',
    difficulty: 'Hard',
    tags: ['portals', 'dom'],
    tips: 'Portals still exist in React tree, only DOM location changes'
  },
  {
    id: 'react12',
    category: 'react',
    question: 'What is the useCallback hook?',
    answer: 'useCallback returns memoized callback function. Prevents unnecessary re-creations when dependencies haven\'t changed. Optimizes child components.',
    difficulty: 'Hard',
    tags: ['hooks', 'optimization'],
    tips: 'Use when passing callbacks to optimized child components'
  },
  {
    id: 'react13',
    category: 'react',
    question: 'What is the useMemo hook?',
    answer: 'useMemo returns memoized value. Computes expensive calculations only when dependencies change. Similar to useCallback but for values.',
    difficulty: 'Hard',
    tags: ['hooks', 'optimization'],
    tips: 'Don\'t overuse - memoization has its own cost'
  },
  {
    id: 'react14',
    category: 'react',
    question: 'What are React refs?',
    answer: 'Refs provide way to access DOM nodes or React elements. Create with useRef() or createRef(). Use for focus, measurements, animations.',
    difficulty: 'Medium',
    tags: ['refs', 'dom'],
    tips: 'Avoid overusing refs - React is declarative'
  },
  {
    id: 'react15',
    category: 'react',
    question: 'What is React.memo?',
    answer: 'React.memo is higher-order component that memoizes functional component. Prevents re-renders if props are shallow equal. Similar to PureComponent.',
    difficulty: 'Hard',
    tags: ['memo', 'optimization'],
    tips: 'Use for expensive components that render often with same props'
  },
  {
    id: 'react16',
    category: 'react',
    question: 'What are React error boundaries?',
    answer: 'Error boundaries catch JavaScript errors in child components, display fallback UI. Class component with static getDerivedStateFromError() or componentDidCatch().',
    difficulty: 'Hard',
    tags: ['error-handling', 'class'],
    tips: 'Only class components can be error boundaries currently'
  },
  {
    id: 'react17',
    category: 'react',
    question: 'What is the difference between useState and useReducer?',
    answer: 'useState for simple state, useReducer for complex state logic. useReducer takes reducer function and initial state, returns dispatch function.',
    difficulty: 'Hard',
    tags: ['hooks', 'state'],
    tips: 'Use useReducer when next state depends on previous'
  },
  {
    id: 'react18',
    category: 'react',
    question: 'What are React custom hooks?',
    answer: 'Custom hooks extract component logic into reusable functions. Must start with "use". Can call other hooks. Share logic without HOCs or render props.',
    difficulty: 'Medium',
    tags: ['hooks', 'custom'],
    tips: 'Great for data fetching, form handling, subscriptions'
  },
  {
    id: 'react19',
    category: 'react',
    question: 'What is React.StrictMode?',
    answer: 'StrictMode activates additional checks and warnings for descendants. Helps identify unsafe lifecycles, legacy API usage, unexpected side effects.',
    difficulty: 'Medium',
    tags: ['strictmode', 'development'],
    tips: 'Only runs in development, renders components twice'
  },
  {
    id: 'react20',
    category: 'react',
    question: 'What are React lifecycle methods?',
    answer: 'Class component lifecycle: mounting (constructor, render, componentDidMount), updating (shouldComponentUpdate, render, componentDidUpdate), unmounting (componentWillUnmount).',
    difficulty: 'Medium',
    tags: ['lifecycle', 'class'],
    tips: 'Functional components use hooks instead of lifecycle methods'
  },
  {
    id: 'react21',
    category: 'react',
    question: 'What is the difference between React and ReactDOM?',
    answer: 'React package contains React library (components, hooks). ReactDOM package contains DOM-specific methods (render, hydrate, createPortal).',
    difficulty: 'Easy',
    tags: ['packages', 'architecture'],
    tips: 'React Native uses different renderer package'
  },
  {
    id: 'react22',
    category: 'react',
    question: 'What are React suspense and concurrent features?',
    answer: 'Suspense lets components "wait" for something (data, code). Concurrent features enable interruptible rendering for better user experience.',
    difficulty: 'Hard',
    tags: ['suspense', 'concurrent'],
    tips: 'Use with React.lazy for code splitting'
  },
  {
    id: 'react23',
    category: 'react',
    question: 'What is React.lazy?',
    answer: 'React.lazy enables code splitting via dynamic import. Returns component that loads bundle on render. Must wrap in Suspense with fallback.',
    difficulty: 'Medium',
    tags: ['lazy', 'code-splitting'],
    tips: 'Only default exports supported with React.lazy'
  },
  {
    id: 'react24',
    category: 'react',
    question: 'What are higher-order components (HOCs)?',
    answer: 'HOC is function that takes component, returns enhanced component. Used for cross-cutting concerns (logging, authentication). Pattern replaced by hooks.',
    difficulty: 'Hard',
    tags: ['hoc', 'patterns'],
    tips: 'HOCs can cause prop collisions and wrapper hell'
  },
  {
    id: 'react25',
    category: 'react',
    question: 'What are render props?',
    answer: 'Render prop is prop that takes function returning React element. Shares code between components using prop. Pattern largely replaced by hooks.',
    difficulty: 'Hard',
    tags: ['render-props', 'patterns'],
    tips: 'Children as function is common render prop pattern'
  },
  {
    id: 'react26',
    category: 'react',
    question: 'What is React reconciliation?',
    answer: 'Reconciliation is algorithm React uses to diff virtual DOM trees. Determines minimal set of changes needed. Keys help identify elements.',
    difficulty: 'Hard',
    tags: ['reconciliation', 'virtual-dom'],
    tips: 'React assumes same type elements produce same tree'
  },
  {
    id: 'react27',
    category: 'react',
    question: 'What is the useRef hook?',
    answer: 'useRef returns mutable ref object with .current property. Persists for full component lifetime. Use for DOM access or mutable values without re-renders.',
    difficulty: 'Medium',
    tags: ['hooks', 'refs'],
    tips: 'Changing ref.current doesn\'t trigger re-render'
  },
  {
    id: 'react28',
    category: 'react',
    question: 'What are React compound components?',
    answer: 'Compound components work together as group (like select + option). Share implicit state via context. Flexible API for component libraries.',
    difficulty: 'Hard',
    tags: ['patterns', 'components'],
    tips: 'Use React.Children.map to iterate over children'
  },
  {
    id: 'react29',
    category: 'react',
    question: 'What is React Router?',
    answer: 'React Router is routing library for React. Provides components for declarative routing (BrowserRouter, Route, Switch, Link). Client-side routing.',
    difficulty: 'Medium',
    tags: ['routing', 'react-router'],
    tips: 'Use exact prop for precise matching'
  },
  {
    id: 'react30',
    category: 'react',
    question: 'What is Redux and how does it work with React?',
    answer: 'Redux is state management library. Principles: single source of truth, state is read-only, changes via pure functions (reducers). Use with react-redux.',
    difficulty: 'Hard',
    tags: ['redux', 'state-management'],
    tips: 'Consider Context API before Redux for simpler apps'
  },
  {
    id: 'react31',
    category: 'react',
    question: 'What are React prop types?',
    answer: 'PropTypes provide runtime type checking for props. Import from prop-types package. Helps catch bugs, serves as documentation.',
    difficulty: 'Medium',
    tags: ['proptypes', 'validation'],
    tips: 'Use TypeScript/Flow for static type checking instead'
  },
  {
    id: 'react32',
    category: 'react',
    question: 'What is React testing library?',
    question: 'What are React testing library principles?',
    answer: 'React Testing Library encourages testing from user perspective. Query by role/text, avoid implementation details. Promotes accessible components.',
    difficulty: 'Medium',
    tags: ['testing', 'react-testing-library'],
    tips: 'Use screen.getByRole() for accessible queries'
  },
  {
    id: 'react33',
    category: 'react',
    question: 'What is Next.js?',
    answer: 'Next.js is React framework with server-side rendering, static site generation, file-based routing, API routes. Built on top of React.',
    difficulty: 'Medium',
    tags: ['nextjs', 'frameworks'],
    tips: 'Great for SEO, performance, full-stack React apps'
  },
  {
    id: 'react34',
    category: 'react',
    question: 'What are React server components?',
    answer: 'Server components render on server, zero bundle size. Can access server resources directly. Still experimental. Use .server.js extension.',
    difficulty: 'Hard',
    tags: ['server-components', 'experimental'],
    tips: 'Server components cannot use hooks or browser APIs'
  },
  {
    id: 'react35',
    category: 'react',
    question: 'What is the difference between React.PureComponent and React.Component?',
    answer: 'PureComponent implements shouldComponentUpdate with shallow prop/state comparison. Component doesn\'t - always re-renders unless shouldComponentUpdate defined.',
    difficulty: 'Hard',
    tags: ['purecomponent', 'optimization'],
    tips: 'Use PureComponent for simple props/state, functional with memo for complex'
  },
  {
    id: 'react36',
    category: 'react',
    question: 'What are React portals used for?',
    answer: 'Portals for modals, tooltips, dropdowns that need to break out of parent container (overflow:hidden, z-index). Render outside current DOM hierarchy.',
    difficulty: 'Hard',
    tags: ['portals', 'ui'],
    tips: 'Event bubbling works through portals to React parents'
  },
  {
    id: 'react37',
    category: 'react',
    question: 'What is React hydration?',
    answer: 'Hydration attaches React event listeners to server-rendered markup. ReactDOM.hydrate() instead of render(). Makes SSR content interactive.',
    difficulty: 'Hard',
    tags: ['hydration', 'ssr'],
    tips: 'Markup must match between server and client'
  },
  {
    id: 'react38',
    category: 'react',
    question: 'What are React forwardRef?',
    answer: 'forwardRef forwards ref through component to child. Useful for reusable component libraries. Wraps component to accept ref prop.',
    difficulty: 'Hard',
    tags: ['forwardref', 'refs'],
    tips: 'Use with useImperativeHandle to customize exposed instance'
  },
  {
    id: 'react39',
    category: 'react',
    question: 'What is React Profiler?',
    answer: 'Profiler measures component rendering performance. Wraps tree, collects timing info. Use React.Profiler component or DevTools profiler.',
    difficulty: 'Hard',
    tags: ['profiler', 'performance'],
    tips: 'Production profiling requires special build'
  },
  {
    id: 'react40',
    category: 'react',
    question: 'What are React concurrent features?',
    answer: 'Concurrent features: startTransition for non-urgent updates, useDeferredValue for deferring updates, Suspense for data fetching. Improve responsiveness.',
    difficulty: 'Hard',
    tags: ['concurrent', 'performance'],
    tips: 'Still experimental in React 18'
  },
  {
    id: 'react41',
    category: 'react',
    question: 'What is the difference between createElement and cloneElement?',
    answer: 'createElement creates new React element. cloneElement clones existing element with new props. Useful for adding props to children.',
    difficulty: 'Hard',
    tags: ['elements', 'api'],
    tips: 'cloneElement merges new props with existing props'
  },
  {
    id: 'react42',
    category: 'react',
    question: 'What are React context providers and consumers?',
    answer: 'Provider component supplies context value to descendants. Consumer component (or useContext hook) reads context value. Multiple providers can nest.',
    difficulty: 'Medium',
    tags: ['context', 'providers'],
    tips: 'Provider value changes cause all consumers to re-render'
  },
  {
    id: 'react43',
    category: 'react',
    question: 'What is React state batching?',
    answer: 'Batching groups multiple state updates into single re-render. Automatic in event handlers. React 18 batches all updates (including promises, timeouts).',
    difficulty: 'Hard',
    tags: ['batching', 'performance'],
    tips: 'Use flushSync for immediate updates when needed'
  },
  {
    id: 'react44',
    category: 'react',
    question: 'What are React error boundaries limitations?',
    answer: 'Cannot catch: errors in event handlers, async code, server-side rendering, error boundary itself. Only errors in lifecycle methods and constructors.',
    difficulty: 'Hard',
    tags: ['error-boundaries', 'limitations'],
    tips: 'Wrap event handlers in try/catch instead'
  },
  {
    id: 'react45',
    category: 'react',
    question: 'What is React.useTransition hook?',
    answer: 'useTransition marks updates as non-urgent, allowing interruptions. Returns [isPending, startTransition]. Good for slow renders during typing.',
    difficulty: 'Hard',
    tags: ['hooks', 'concurrent'],
    tips: 'Use for transitions that might take time (filtering, pagination)'
  },
  {
    id: 'react46',
    category: 'react',
    question: 'What are React controlled and uncontrolled component patterns?',
    answer: 'Controlled: value prop + onChange handler. Uncontrolled: defaultValue prop + ref. Controlled gives more control, uncontrolled less boilerplate.',
    difficulty: 'Medium',
    tags: ['forms', 'patterns'],
    tips: 'Most React form libraries use controlled components'
  },
  {
    id: 'react47',
    category: 'react',
    question: 'What is React composition vs inheritance?',
    answer: 'React favors composition over inheritance. Use props (especially children) to compose behavior. Avoid class inheritance for component reuse.',
    difficulty: 'Medium',
    tags: ['composition', 'patterns'],
    tips: 'Specialization via composition, not inheritance'
  },
  {
    id: 'react48',
    category: 'react',
    question: 'What are React synthetic events?',
    answer: 'Synthetic events are cross-browser wrapper around native events. Pooled for performance (properties nullified after callback). Use e.persist() to keep.',
    difficulty: 'Hard',
    tags: ['events', 'synthetic'],
    tips: 'Synthetic events have same interface as native events'
  },
  {
    id: 'react49',
    category: 'react',
    question: 'What is React.StrictMode double rendering?',
    answer: 'StrictMode intentionally double-renders components in development to find side effects. Second render is discarded. Helps detect impure renders.',
    difficulty: 'Hard',
    tags: ['strictmode', 'development'],
    tips: 'Don\'t put side effects in render - use useEffect'
  },
  {
    id: 'react50',
    category: 'react',
    question: 'What are React performance optimization techniques?',
    answer: 'Memoization (React.memo, useMemo, useCallback), code splitting (React.lazy), virtualization for lists, avoiding unnecessary re-renders, production builds.',
    difficulty: 'Hard',
    tags: ['performance', 'optimization'],
    tips: 'Profile first, optimize only bottlenecks'
  },

  {
    id: 'node1',
    category: 'node',
    question: 'What is Node.js?',
    answer: 'Node.js is JavaScript runtime built on Chrome\'s V8 engine. Uses event-driven, non-blocking I/O model. Enables server-side JavaScript execution.',
    difficulty: 'Easy',
    tags: ['basics', 'node'],
    tips: 'Not a framework, not a language - it\'s a runtime'
  },
  {
    id: 'node2',
    category: 'node',
    question: 'What is the difference between Node.js and JavaScript?',
    answer: 'JavaScript is programming language. Node.js is runtime environment that executes JavaScript outside browser, with additional APIs (file system, HTTP).',
    difficulty: 'Easy',
    tags: ['comparison', 'basics'],
    tips: 'Browser JavaScript has DOM API, Node.js has server APIs'
  },
  {
    id: 'node3',
    category: 'node',
    question: 'What is npm?',
    answer: 'npm (Node Package Manager) is default package manager for Node.js. Manages dependencies, scripts, versions. Largest software registry.',
    difficulty: 'Easy',
    tags: ['npm', 'packages'],
    tips: 'package.json is configuration file for Node.js projects'
  },
  {
    id: 'node4',
    category: 'node',
    question: 'What is the event loop in Node.js?',
    answer: 'Event loop handles asynchronous operations. Phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Single-threaded but non-blocking.',
    difficulty: 'Hard',
    tags: ['event-loop', 'asynchronous'],
    tips: 'Different from browser event loop'
  },
  {
    id: 'node5',
    category: 'node',
    question: 'What are Node.js streams?',
    answer: 'Streams are collections of data that might not be available all at once. Types: Readable, Writable, Duplex, Transform. Handle large data efficiently.',
    difficulty: 'Medium',
    tags: ['streams', 'performance'],
    tips: 'Use pipes to connect streams: readable.pipe(writable)'
  },
  {
    id: 'node6',
    category: 'node',
    question: 'What is the difference between require and import?',
    answer: 'require is CommonJS (Node.js default), synchronous. import is ES6 modules, asynchronous, static. Node.js supports both with .mjs/.cjs extensions.',
    difficulty: 'Medium',
    tags: ['modules', 'require'],
    tips: 'Use import for ES6 modules, require for CommonJS'
  },
  {
    id: 'node7',
    category: 'node',
    question: 'What are Node.js buffers?',
    answer: 'Buffers handle binary data directly. Fixed-size chunks of memory. Used for TCP streams, file system operations. Convert between strings and binary.',
    difficulty: 'Hard',
    tags: ['buffers', 'binary'],
    tips: 'Buffer.alloc() creates new buffer, Buffer.from() from existing data'
  },
  {
    id: 'node8',
    category: 'node',
    question: 'What is the package.json file?',
    answer: 'package.json is manifest file for Node.js projects. Contains metadata, dependencies, scripts, engines, license. Required for npm packages.',
    difficulty: 'Easy',
    tags: ['package.json', 'npm'],
    tips: 'Always include name, version, main entry point'
  },
  {
    id: 'node9',
    category: 'node',
    question: 'What are Node.js global objects?',
    answer: 'Global objects available everywhere: __dirname, __filename, exports, module, require, process, console, setTimeout, setInterval.',
    difficulty: 'Medium',
    tags: ['globals', 'objects'],
    tips: 'No window object in Node.js'
  },
  {
    id: 'node10',
    category: 'node',
    question: 'What is the process object in Node.js?',
    answer: 'process provides information about current Node.js process. Properties: argv, env, cwd(), exit(). Methods for process management.',
    difficulty: 'Medium',
    tags: ['process', 'system'],
    tips: 'process.env for environment variables'
  },
  {
    id: 'node11',
    category: 'node',
    question: 'What is middleware in Express.js?',
    answer: 'Middleware are functions that have access to request, response, and next function. Execute code, modify objects, end request-response cycle.',
    difficulty: 'Medium',
    tags: ['express', 'middleware'],
    tips: 'Order matters - middleware executes sequentially'
  },
  {
    id: 'node12',
    category: 'node',
    question: 'What is the difference between development and production dependencies?',
    answer: 'dependencies are required for production. devDependencies are only for development (testing, building, linting). Install with --save-dev.',
    difficulty: 'Easy',
    tags: ['dependencies', 'npm'],
    tips: 'Production installs skip devDependencies'
  },
  {
    id: 'node13',
    category: 'node',
    question: 'What are Node.js clusters?',
    answer: 'Cluster module creates child processes (workers) sharing server ports. Utilizes multiple CPU cores. Master process distributes load.',
    difficulty: 'Hard',
    tags: ['cluster', 'performance'],
    tips: 'Use for CPU-intensive operations, not I/O bound'
  },
  {
    id: 'node14',
    category: 'node',
    question: 'What is the difference between setTimeout and setImmediate?',
    answer: 'setTimeout schedules after minimum delay. setImmediate executes after I/O callbacks. In main module, order depends on performance.',
    difficulty: 'Hard',
    tags: ['timers', 'event-loop'],
    tips: 'setImmediate better for deferring to next tick'
  },
  {
    id: 'node15',
    category: 'node',
    question: 'What are Node.js error-first callbacks?',
    answer: 'Convention where callback first parameter is error object (null if no error), following parameters are success data. Used throughout Node.js APIs.',
    difficulty: 'Medium',
    tags: ['callbacks', 'error-handling'],
    tips: 'Always check error parameter first'
  },
  {
    id: 'node16',
    category: 'node',
    question: 'What is the Node.js REPL?',
    answer: 'REPL (Read-Eval-Print Loop) is interactive shell for JavaScript. Type node in terminal. Useful for testing, debugging, learning.',
    difficulty: 'Easy',
    tags: ['repl', 'tools'],
    tips: 'Use .save and .load to work with files'
  },
  {
    id: 'node17',
    category: 'node',
    question: 'What is Express.js?',
    answer: 'Express is minimal, flexible Node.js web application framework. Provides robust features for web/mobile apps. Middleware-based architecture.',
    difficulty: 'Easy',
    tags: ['express', 'framework'],
    tips: 'Most popular Node.js web framework'
  },
  {
    id: 'node18',
    category: 'node',
    question: 'What are environment variables in Node.js?',
    answer: 'Environment variables configure applications per environment. Accessed via process.env. Use .env files with dotenv package.',
    difficulty: 'Medium',
    tags: ['environment', 'configuration'],
    tips: 'Never commit .env files to version control'
  },
  {
    id: 'node19',
    category: 'node',
    question: 'What is the difference between spawn and exec?',
    answer: 'spawn launches new process, returns stream. exec creates shell, returns buffer. Use spawn for large output, exec for simple commands.',
    difficulty: 'Hard',
    tags: ['child_process', 'system'],
    tips: 'spawn more efficient, exec simpler'
  },
  {
    id: 'node20',
    category: 'node',
    question: 'What are Node.js worker threads?',
    answer: 'Worker threads run JavaScript in parallel threads. Share memory via SharedArrayBuffer. Useful for CPU-intensive tasks.',
    difficulty: 'Hard',
    tags: ['worker_threads', 'performance'],
    tips: 'Workers have isolated contexts, communicate via message passing'
  },
  {
    id: 'node21',
    category: 'node',
    question: 'What is the Node.js event emitter?',
    answer: 'EventEmitter class for handling events. Objects emit named events causing listener functions to be called. Core of many Node.js APIs.',
    difficulty: 'Medium',
    tags: ['events', 'eventemitter'],
    tips: 'Inherit from EventEmitter for custom event-based objects'
  },
  {
    id: 'node22',
    category: 'node',
    question: 'What is REST API?',
    answer: 'REST (Representational State Transfer) architectural style for APIs. Uses HTTP methods (GET, POST, PUT, DELETE), stateless, resource-based.',
    difficulty: 'Medium',
    tags: ['rest', 'api'],
    tips: 'Use nouns for resources, HTTP methods for actions'
  },
  {
    id: 'node23',
    category: 'node',
    question: 'What is JWT authentication?',
    answer: 'JWT (JSON Web Token) compact, URL-safe token for authentication. Three parts: header, payload, signature. Stateless, scalable.',
    difficulty: 'Medium',
    tags: ['authentication', 'jwt'],
    tips: 'Store in HTTP-only cookies for security'
  },
  {
    id: 'node24',
    category: 'node',
    question: 'What is the difference between PUT and PATCH?',
    answer: 'PUT replaces entire resource. PATCH partially updates resource. Both are idempotent (multiple same requests = same result).',
    difficulty: 'Medium',
    tags: ['http', 'rest'],
    tips: 'Use PATCH for partial updates, PUT for complete replacement'
  },
  {
    id: 'node25',
    category: 'node',
    question: 'What is WebSocket?',
    answer: 'WebSocket provides full-duplex communication over single TCP connection. Persistent connection, low latency. Used for real-time apps.',
    difficulty: 'Medium',
    tags: ['websocket', 'realtime'],
    tips: 'Use Socket.io library for fallbacks and easier API'
  },
  {
    id: 'node26',
    category: 'node',
    question: 'What is CORS?',
    answer: 'CORS (Cross-Origin Resource Sharing) allows restricted resources on web page from another domain. Browser enforces, server configures via headers.',
    difficulty: 'Medium',
    tags: ['cors', 'security'],
    tips: 'Express: use cors middleware package'
  },
  {
    id: 'node27',
    category: 'node',
    question: 'What is the difference between session and token authentication?',
    answer: 'Sessions store state on server, send session ID cookie. Tokens (JWT) store state in token, sent with each request. Stateless vs stateful.',
    difficulty: 'Hard',
    tags: ['authentication', 'comparison'],
    tips: 'Tokens scale better, sessions easier to invalidate'
  },
  {
    id: 'node28',
    category: 'node',
    question: 'What is MongoDB?',
    answer: 'MongoDB is NoSQL document database. Stores JSON-like documents with dynamic schemas. High performance, horizontal scaling.',
    difficulty: 'Medium',
    tags: ['mongodb', 'database'],
    tips: 'Use Mongoose ODM for schema validation and modeling'
  },
  {
    id: 'node29',
    category: 'node',
    question: 'What is SQL injection and how to prevent it?',
    answer: 'SQL injection inserts malicious SQL via user input. Prevent with parameterized queries, prepared statements, input validation, ORM.',
    difficulty: 'Medium',
    tags: ['security', 'sql'],
    tips: 'Never concatenate user input into SQL queries'
  },
  {
    id: 'node30',
    category: 'node',
    question: 'What is XSS and how to prevent it?',
    answer: 'XSS (Cross-Site Scripting) injects malicious scripts into web pages. Prevent with input sanitization, output encoding, CSP headers.',
    difficulty: 'Medium',
    tags: ['security', 'xss'],
    tips: 'Use libraries like DOMPurify for sanitization'
  },
  {
    id: 'node31',
    category: 'node',
    question: 'What is rate limiting?',
    answer: 'Rate limiting restricts number of requests from IP/user/time period. Prevents abuse, DoS attacks. Implement with middleware like express-rate-limit.',
    difficulty: 'Medium',
    tags: ['security', 'performance'],
    tips: 'Return 429 Too Many Requests status'
  },
  {
    id: 'node32',
    category: 'node',
    question: 'What is Docker?',
    answer: 'Docker containers package applications with dependencies. Isolated, portable, consistent environments. Use Dockerfile to build images.',
    difficulty: 'Medium',
    tags: ['docker', 'deployment'],
    tips: 'Docker Compose for multi-container apps'
  },
  {
    id: 'node33',
    category: 'node',
    question: 'What is microservices architecture?',
    answer: 'Microservices structure app as collection of small, independent services. Each owns data, communicates via APIs. Scalable, maintainable.',
    difficulty: 'Hard',
    tags: ['architecture', 'microservices'],
    tips: 'Use message queues (RabbitMQ, Kafka) for communication'
  },
  {
    id: 'node34',
    category: 'node',
    question: 'What is GraphQL?',
    answer: 'GraphQL is query language for APIs. Single endpoint, client specifies needed data. Avoids over/under-fetching. Strongly typed schema.',
    difficulty: 'Medium',
    tags: ['graphql', 'api'],
    tips: 'Use Apollo Server or Express GraphQL'
  },
  {
    id: 'node35',
    category: 'node',
    question: 'What is serverless?',
    answer: 'Serverless runs code without managing servers. Event-driven, auto-scaling, pay-per-use. AWS Lambda, Azure Functions, Google Cloud Functions.',
    difficulty: 'Medium',
    tags: ['serverless', 'deployment'],
    tips: 'Cold starts can affect performance'
  },
  {
    id: 'node36',
    category: 'node',
    question: 'What is the difference between monolith and microservices?',
    answer: 'Monolith: single codebase, deployment. Microservices: multiple services, independent deployment. Tradeoffs: complexity vs scalability.',
    difficulty: 'Hard',
    tags: ['architecture', 'comparison'],
    tips: 'Start monolith, split to microservices when needed'
  },
  {
    id: 'node37',
    category: 'node',
    question: 'What is Redis?',
    answer: 'Redis is in-memory data store. Used as cache, message broker, session store. Very fast, supports various data structures.',
    difficulty: 'Medium',
    tags: ['redis', 'cache'],
    tips: 'Great for session storage, rate limiting counters'
  },
  {
    id: 'node38',
    category: 'node',
    question: 'What is load balancing?',
    answer: 'Load balancing distributes traffic across multiple servers. Improves performance, reliability. Hardware or software (Nginx, HAProxy).',
    difficulty: 'Medium',
    tags: ['performance', 'scaling'],
    tips: 'Use round-robin, least connections, or IP hash strategies'
  },
  {
    id: 'node39',
    category: 'node',
    question: 'What is PM2?',
    answer: 'PM2 is production process manager for Node.js. Keeps apps alive, load balancing, monitoring, logging. Essential for production deployment.',
    difficulty: 'Medium',
    tags: ['pm2', 'deployment'],
    tips: 'pm2 start app.js --name "api" -i max'
  },
  {
    id: 'node40',
    category: 'node',
    question: 'What is the difference between blocking and non-blocking I/O?',
    answer: 'Blocking I/O waits for operation to complete. Non-blocking I/O continues execution, uses callbacks/promises. Node.js uses non-blocking for performance.',
    difficulty: 'Medium',
    tags: ['io', 'performance'],
    tips: 'Non-blocking allows handling many concurrent connections'
  },
  {
    id: 'node41',
    category: 'node',
    question: 'What are Node.js debugger tools?',
    answer: 'Node.js built-in debugger (node inspect), Chrome DevTools (--inspect), VS Code debugger, ndb. Set breakpoints, inspect variables, step through code.',
    difficulty: 'Medium',
    tags: ['debugging', 'tools'],
    tips: 'Use debugger statement or breakpoints in IDE'
  },
  {
    id: 'node42',
    category: 'node',
    question: 'What is the difference between let/const in Node.js vs browser?',
    answer: 'Same behavior - block scoping. Difference: Node.js modules have own scope (like IIFE). Browser scripts share global scope unless modules.',
    difficulty: 'Medium',
    tags: ['variables', 'scope'],
    tips: 'Node.js modules are automatically in strict mode'
  },
  {
    id: 'node43',
    category: 'node',
    question: 'What is the Node.js util module?',
    answer: 'util provides utility functions: promisify (callback → promise), inherits (class inheritance), format (string formatting), types (type checking).',
    difficulty: 'Medium',
    tags: ['util', 'modules'],
    tips: 'util.promisify converts callback-based functions to promises'
  },
  {
    id: 'node44',
    category: 'node',
    question: 'What are Node.js crypto modules?',
    answer: 'crypto provides cryptographic functionality: hashing (SHA, MD5), encryption (AES), signing, random bytes. Essential for security operations.',
    difficulty: 'Hard',
    tags: ['crypto', 'security'],
    tips: 'Use bcrypt for password hashing, not plain crypto'
  },
  {
    id: 'node45',
    category: 'node',
    question: 'What is the difference between http and https modules?',
    answer: 'http creates HTTP servers. https creates HTTPS servers (SSL/TLS). https requires certificate and key. Same API otherwise.',
    difficulty: 'Medium',
    tags: ['http', 'security'],
    tips: 'Use express with https or reverse proxy (Nginx) for SSL'
  },
  {
    id: 'node46',
    category: 'node',
    question: 'What are Node.js performance monitoring tools?',
    answer: 'Monitoring: clinic.js, 0x, node --prof, APM tools (New Relic, Datadog). Profiling CPU, memory, event loop lag.',
    difficulty: 'Hard',
    tags: ['performance', 'monitoring'],
    tips: 'Monitor event loop delay with perf_hooks'
  },
  {
    id: 'node47',
    category: 'node',
    question: 'What is the Node.js path module?',
    answer: 'path handles file/directory paths cross-platform. Methods: join(), resolve(), basename(), dirname(), extname(). Normalizes path separators.',
    difficulty: 'Easy',
    tags: ['path', 'filesystem'],
    tips: 'Always use path.join() instead of string concatenation'
  },
  {
    id: 'node48',
    category: 'node',
    question: 'What are Node.js testing frameworks?',
    answer: 'Testing: Jest (most popular), Mocha + Chai, Jasmine, AVA. Assertion libraries: Chai, Should.js. Mocking: Sinon, Jest mocks.',
    difficulty: 'Medium',
    tags: ['testing', 'frameworks'],
    tips: 'Jest has everything built-in, Mocha is more modular'
  },
  {
    id: 'node49',
    category: 'node',
    question: 'What is the difference between Node.js and Deno?',
    answer: 'Deno is secure TypeScript runtime by Node.js creator. Differences: built-in TypeScript, secure by default (no file/network unless allowed), ES modules.',
    difficulty: 'Hard',
    tags: ['deno', 'comparison'],
    tips: 'Deno is newer, smaller ecosystem but growing'
  },
  {
    id: 'node50',
    category: 'node',
    question: 'What are Node.js best practices?',
    answer: 'Use async/await, handle errors properly, use environment variables, implement logging, security headers, rate limiting, monitoring, proper shutdown.',
    difficulty: 'Hard',
    tags: ['best-practices', 'production'],
    tips: 'Always catch unhandled promise rejections and exceptions'
  }
  ,
  {
    id: 'html22',
    category: 'html',
    question: 'What is the role of the <main> element?',
    answer: '<main> represents the dominant content of the <body> for a document and should be unique per page, improving accessibility and semantics.',
    difficulty: 'Easy',
    tags: ['semantic', 'accessibility'],
    tips: 'Use one <main> per page and avoid wrapping navigation or footer'
  },
  {
    id: 'html23',
    category: 'html',
    question: 'How do you include a favicon in a webpage?',
    answer: 'Add a link tag in the head: <link rel="icon" href="/favicon.ico" type="image/x-icon"> or use PNG/SVG as needed.',
    difficulty: 'Easy',
    tags: ['assets', 'head'],
    tips: 'Provide multiple sizes and formats for broad browser support'
  },
  {
    id: 'html24',
    category: 'html',
    question: 'What is progressive enhancement?',
    answer: 'Build a baseline experience that works for all browsers, then add enhanced features (JS/CSS) for capable browsers.',
    difficulty: 'Medium',
    tags: ['strategy', 'accessibility'],
    tips: 'Ensure core content works without JavaScript'
  },
  {
    id: 'html25',
    category: 'html',
    question: 'When should you use the <picture> element?',
    answer: '<picture> selects the best image source for different viewport sizes or pixel densities, useful for responsive images and art direction.',
    difficulty: 'Medium',
    tags: ['images', 'responsive'],
    tips: 'Use <source> with media and srcset inside <picture>'
  },
  {
    id: 'html26',
    category: 'html',
    question: 'How do you make accessible links that open in a new tab?',
    answer: 'Use target="_blank" and add rel="noopener noreferrer"; inform users in link text or via aria to note new tab behavior for accessibility.',
    difficulty: 'Easy',
    tags: ['accessibility', 'links'],
    tips: 'Avoid surprising users — indicate when a link opens a new tab'
  },
  {
    id: 'html27',
    category: 'html',
    question: 'What is the difference between placeholder and label for inputs?',
    answer: 'Label provides persistent, accessible description; placeholder is transient hint inside the input and should not replace a label.',
    difficulty: 'Easy',
    tags: ['forms', 'accessibility'],
    tips: 'Always use labels; keep placeholders brief'
  },
  {
    id: 'html28',
    category: 'html',
    question: 'What is the Content Security Policy (CSP) meta tag used for?',
    answer: 'CSP helps mitigate XSS by restricting sources for scripts, styles, images, etc. It is specified via HTTP header or meta tag to define allowed origins.',
    difficulty: 'Hard',
    tags: ['security', 'headers'],
    tips: 'Prefer HTTP header implementation for stronger security'
  },
  {
    id: 'html29',
    category: 'html',
    question: 'How do you mark up a navigation landmark?',
    answer: 'Use <nav> to mark navigation regions and include an accessible label via aria-label or an offscreen heading.',
    difficulty: 'Easy',
    tags: ['semantic', 'accessibility'],
    tips: 'Use role="navigation" only when necessary'
  },
  {
    id: 'css22',
    category: 'css',
    question: 'What is the box model in CSS?',
    answer: 'The box model consists of content, padding, border, and margin. Box-sizing controls whether padding/border are included in the element width/height.',
    difficulty: 'Easy',
    tags: ['layout', 'box-model'],
    tips: 'Use box-sizing: border-box for simpler sizing calculations'
  },
  {
    id: 'css23',
    category: 'css',
    question: 'How does flexbox differ from grid?',
    answer: 'Flexbox is 1-dimensional (row or column) for distributing space among items; Grid is 2-dimensional for placing items in rows and columns.',
    difficulty: 'Medium',
    tags: ['layout', 'flexbox', 'grid'],
    tips: 'Use flexbox for linear layouts and grid for complex two-dimensional layouts'
  },
  {
    id: 'css24',
    category: 'css',
    question: 'What does specificity mean in CSS?',
    answer: 'Specificity determines which CSS rule applies when multiple selectors match. It is calculated from inline styles, IDs, classes/attributes, and element selectors.',
    difficulty: 'Medium',
    tags: ['selectors', 'specificity'],
    tips: 'Avoid overusing !important; prefer clearer selector structure'
  },
  {
    id: 'css25',
    category: 'css',
    question: 'How do CSS variables (custom properties) work?',
    answer: 'CSS variables are declared with --var and used via var(--var). They are dynamic and follow the cascade and inheritance rules.',
    difficulty: 'Easy',
    tags: ['variables', 'modern-css'],
    tips: 'Use them for theming and repeated values'
  },
  {
    id: 'css26',
    category: 'css',
    question: 'What is the difference between em and rem units?',
    answer: 'em is relative to the font-size of the element (or parent chain), rem is relative to the root element (html) font-size.',
    difficulty: 'Easy',
    tags: ['units', 'typography'],
    tips: 'Use rem for consistent scaling across the layout'
  },
  {
    id: 'css27',
    category: 'css',
    question: 'How do you create a responsive image using CSS?',
    answer: 'Use max-width:100% and height:auto or use srcset and picture for art-direction and responsive sources.',
    difficulty: 'Easy',
    tags: ['responsive', 'images'],
    tips: 'Combine CSS sizing with srcset/picture for best results'
  },
  {
    id: 'css28',
    category: 'css',
    question: 'What are CSS pseudo-elements and provide an example?',
    answer: 'Pseudo-elements style subparts of elements, e.g., ::before and ::after to insert content, or ::first-line to style the first line of a block.',
    difficulty: 'Medium',
    tags: ['pseudo', 'selectors'],
    tips: 'Remember :: for pseudo-elements and : for pseudo-classes'
  },
  {
    id: 'css29',
    category: 'css',
    question: 'How can you center a block element horizontally and vertically?',
    answer: 'Use flexbox: display:flex; align-items:center; justify-content:center; or use grid place-items:center; for absolute positioning use transform translate(-50%,-50%).',
    difficulty: 'Medium',
    tags: ['layout', 'centering'],
    tips: 'Flexbox/grid are easiest for centering dynamic content'
  },
  {
    id: 'js22',
    category: 'javascript',
    question: 'What is hoisting in JavaScript?',
    answer: 'Hoisting moves declarations (var, function) to the top of their scope at runtime. let/const are hoisted but not initialized, causing TDZ (temporal dead zone).',
    difficulty: 'Medium',
    tags: ['fundamentals', 'scope'],
    tips: 'Prefer let/const to avoid hoisting surprises'
  },
  {
    id: 'js23',
    category: 'javascript',
    question: 'Explain event delegation.',
    answer: 'Attach a single event listener to a parent and use event.target to handle events for child elements, improving performance and dynamic content handling.',
    difficulty: 'Easy',
    tags: ['events', 'performance'],
    tips: 'Use delegation for lists or many similar elements'
  },
  {
    id: 'js24',
    category: 'javascript',
    question: 'What is the difference between == and ===?',
    answer: '== performs type coercion before comparison, === checks strict equality without coercion (recommended to avoid unexpected behavior).',
    difficulty: 'Easy',
    tags: ['operators', 'types'],
    tips: 'Use === for predictable comparisons'
  },
  {
    id: 'js25',
    category: 'javascript',
    question: 'How do promises and async/await relate?',
    answer: 'async/await is syntax sugar over promises: async functions return promises; await pauses execution until a promise resolves or rejects.',
    difficulty: 'Easy',
    tags: ['async', 'promises'],
    tips: 'Always handle errors with try/catch or .catch()'
  },
  {
    id: 'js26',
    category: 'javascript',
    question: 'What is a closure?',
    answer: 'A closure is a function that retains access to variables from its lexical scope even after the outer function has returned.',
    difficulty: 'Medium',
    tags: ['scope', 'functions'],
    tips: 'Use closures for data privacy and factory functions'
  },
  {
    id: 'js27',
    category: 'javascript',
    question: 'How does debouncing differ from throttling?',
    answer: 'Debounce delays execution until a pause in events; throttle limits execution to at most once per time interval.',
    difficulty: 'Medium',
    tags: ['performance', 'timing'],
    tips: 'Debounce for search input, throttle for scroll/resize handlers'
  },
  {
    id: 'js28',
    category: 'javascript',
    question: 'What are modules in JavaScript and how do you export/import?',
    answer: 'ES modules export using export or export default and import with import {x} from "mod". They are statically analyzed and support tree-shaking.',
    difficulty: 'Easy',
    tags: ['modules', 'es6'],
    tips: 'Prefer named exports for clarity'
  },
  {
    id: 'react22',
    category: 'react',
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension that looks like HTML and compiles to React.createElement calls; it allows mixing markup with JavaScript expressions.',
    difficulty: 'Easy',
    tags: ['jsx', 'syntax'],
    tips: 'JSX expressions must have one parent element'
  },
  {
    id: 'react23',
    category: 'react',
    question: 'How do you create state in a functional component?',
    answer: 'Use the useState hook: const [state, setState] = useState(initialValue). It preserves state across renders.',
    difficulty: 'Easy',
    tags: ['hooks', 'state'],
    tips: 'Keep state minimal and derive where possible'
  },
  {
    id: 'react24',
    category: 'react',
    question: 'What is the purpose of useEffect?',
    answer: 'useEffect runs side effects after render (data fetching, subscriptions). Cleanup is returned from the effect for teardown.',
    difficulty: 'Medium',
    tags: ['hooks', 'lifecycle'],
    tips: 'Specify dependencies array to control when effect runs'
  },
  {
    id: 'react25',
    category: 'react',
    question: 'What is prop drilling and how can you avoid it?',
    answer: 'Prop drilling passes props through many intermediate components. Avoid by using context API, state management libraries, or lifting state appropriately.',
    difficulty: 'Medium',
    tags: ['patterns', 'context'],
    tips: 'Use context for truly global data only'
  },
  {
    id: 'react26',
    category: 'react',
    question: 'What is a key in a list and why is it important?',
    answer: 'A key uniquely identifies list items so React can track changes between renders. Good keys are stable and unique (ids), not array indices when items reorder.',
    difficulty: 'Easy',
    tags: ['lists', 'performance'],
    tips: 'Prefer stable IDs over indices'
  },
  {
    id: 'react27',
    category: 'react',
    question: 'How do you optimize performance for expensive renders?',
    answer: 'Use React.memo for pure components, useCallback/useMemo to memoize functions/values, and split code with lazy/suspense.',
    difficulty: 'Hard',
    tags: ['performance', 'optimization'],
    tips: 'Measure before optimizing; avoid premature optimization'
  },
  {
    id: 'react28',
    category: 'react',
    question: 'What is the difference between controlled and uncontrolled components?',
    answer: 'Controlled components derive value from React state and use onChange; uncontrolled use refs to read DOM values and manage state internally.',
    difficulty: 'Medium',
    tags: ['forms', 'state'],
    tips: 'Use controlled components for predictable behavior and validation'
  },
  {
    id: 'nodejs1',
    category: 'node',
    question: 'What is Node.js?',
    answer: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that allows running JavaScript outside the browser, primarily for server-side applications.',
    difficulty: 'Easy',
    tags: ['nodejs', 'runtime'],
    tips: 'Node.js is single-threaded but uses event-driven, non-blocking I/O'
  },
  {
    id: 'nodejs2',
    category: 'node',
    question: 'What is the event loop in Node.js?',
    answer: 'The event loop allows Node.js to perform non-blocking I/O by delegating operations to the system kernel and queuing callbacks to be executed when ready.',
    difficulty: 'Medium',
    tags: ['event-loop', 'async'],
    tips: 'Understand phases: timers, pending callbacks, idle, poll, check, close'
  },
  {
    id: 'nodejs3',
    category: 'node',
    question: 'What is the difference between require and import?',
    answer: 'require() is CommonJS synchronous module loading, import is ES6 asynchronous module syntax. Node supports both with proper configuration.',
    difficulty: 'Easy',
    tags: ['modules', 'imports'],
    tips: 'Use import for new projects; require for legacy compatibility'
  },
  {
    id: 'nodejs4',
    category: 'node',
    question: 'What is npm and how do you manage dependencies?',
    answer: 'npm (Node Package Manager) is a package registry and CLI tool. Manage with package.json, install via npm install, use package-lock.json for versioning.',
    difficulty: 'Easy',
    tags: ['npm', 'dependencies'],
    tips: 'Use npm audit to check for security vulnerabilities'
  },
  {
    id: 'nodejs5',
    category: 'node',
    question: 'What is middleware in Express.js?',
    answer: 'Middleware are functions that execute during the request-response cycle, handling requests/responses or passing control with next(). Used for logging, auth, parsing.',
    difficulty: 'Easy',
    tags: ['express', 'middleware'],
    tips: 'Order of middleware matters; use them for cross-cutting concerns'
  },
  {
    id: 'nodejs6',
    category: 'node',
    question: 'How do you handle errors in Node.js?',
    answer: 'Use try/catch for synchronous code, error callbacks for legacy async, .catch() for promises, and error middleware in Express (4 parameters in route handler).',
    difficulty: 'Medium',
    tags: ['errors', 'handling'],
    tips: 'Always handle unhandled promise rejections and exceptions'
  },
  {
    id: 'nodejs7',
    category: 'node',
    question: 'What is the fs module in Node.js?',
    answer: 'fs (file system) module provides APIs for file operations: reading, writing, deleting, etc. Use async methods (promises/callbacks) to avoid blocking.',
    difficulty: 'Easy',
    tags: ['filesystem', 'io'],
    tips: 'Prefer fs.promises or async variants over synchronous methods'
  },
  {
    id: 'nodejs8',
    category: 'node',
    question: 'What is clustering in Node.js?',
    answer: 'Clustering allows running multiple Node processes on multi-core systems. One master process spawns workers to distribute load and improve performance.',
    difficulty: 'Hard',
    tags: ['performance', 'clustering'],
    tips: 'Use cluster module or PM2 for process management'
  },
  {
    id: 'nodejs9',
    category: 'node',
    question: 'What is the purpose of environment variables in Node.js?',
    answer: 'Environment variables store sensitive data (API keys, DB credentials) and configuration outside code, accessed via process.env. Use .env files with dotenv package.',
    difficulty: 'Easy',
    tags: ['config', 'security'],
    tips: 'Never commit .env files; add to .gitignore'
  },
  {
    id: 'nodejs10',
    category: 'node',
    question: 'How do you create a simple HTTP server in Node.js?',
    answer: 'Use http.createServer() with a request handler, or use Express for easier routing and middleware management. Listen on a port with server.listen().',
    difficulty: 'Easy',
    tags: ['http', 'server'],
    tips: 'Use Express for production applications; http for learning'
  },
  {
    id: 'typescript1',
    category: 'typescript',
    question: 'What is TypeScript?',
    answer: 'TypeScript is a typed superset of JavaScript that compiles to plain JS. It adds static typing, interfaces, enums, and other features for better tooling and error checking.',
    difficulty: 'Easy',
    tags: ['typescript', 'types'],
    tips: 'TypeScript compiles to JavaScript before execution'
  },
  {
    id: 'typescript2',
    category: 'typescript',
    question: 'What are interfaces in TypeScript?',
    answer: 'Interfaces define the structure of objects, specifying which properties and methods must exist and their types. Used for contracts and type checking.',
    difficulty: 'Easy',
    tags: ['interfaces', 'types'],
    tips: 'Interfaces are erased at runtime; use for compile-time checking'
  },
  {
    id: 'typescript3',
    category: 'typescript',
    question: 'What is the difference between interface and type?',
    answer: 'Interfaces are for object shapes and can be merged/extended; types can be unions, primitives, tuples, etc. Use interfaces for objects, types for unions/primitives.',
    difficulty: 'Medium',
    tags: ['interfaces', 'types'],
    tips: 'Prefer interfaces for object contracts, types for complex structures'
  },
  {
    id: 'typescript4',
    category: 'typescript',
    question: 'What are generics in TypeScript?',
    answer: 'Generics allow writing reusable components with flexible types using <T> placeholder. They enable type-safe code that works with multiple types.',
    difficulty: 'Medium',
    tags: ['generics', 'types'],
    tips: 'Use generics to avoid union types and any casting'
  },
  {
    id: 'typescript5',
    category: 'typescript',
    question: 'What are enums in TypeScript?',
    answer: 'Enums allow defining a set of named constants (numeric or string). They provide readable code for a fixed set of values like directions or status codes.',
    difficulty: 'Easy',
    tags: ['enums', 'types'],
    tips: 'Use string enums for readability in logs and APIs'
  },
  {
    id: 'typescript6',
    category: 'typescript',
    question: 'What is access modifiers in TypeScript?',
    answer: 'public (default), private, and protected control member visibility. public is accessible everywhere, private only within the class, protected in class and subclasses.',
    difficulty: 'Easy',
    tags: ['classes', 'modifiers'],
    tips: 'Use private for encapsulation; protected for subclass extension'
  },
  {
    id: 'typescript7',
    category: 'typescript',
    question: 'What are union types in TypeScript?',
    answer: 'Union types allow a variable to be one of several types using |. Example: string | number means the variable can be either type.',
    difficulty: 'Easy',
    tags: ['union', 'types'],
    tips: 'Use type guards (typeof, instanceof) to narrow union types'
  },
  {
    id: 'typescript8',
    category: 'typescript',
    question: 'What is type narrowing in TypeScript?',
    answer: 'Type narrowing refines a variable\'s type in a specific code block using typeof, instanceof, or user-defined guards, enabling type-safe operations.',
    difficulty: 'Medium',
    tags: ['types', 'guards'],
    tips: 'Use if statements to narrow union types safely'
  },
  {
    id: 'typescript9',
    category: 'typescript',
    question: 'What are decorators in TypeScript?',
    answer: 'Decorators are functions prefixed with @ that modify class declarations, methods, or properties. Used in frameworks like Angular for dependency injection.',
    difficulty: 'Hard',
    tags: ['decorators', 'advanced'],
    tips: 'Enable experimentalDecorators in tsconfig.json to use them'
  },
  {
    id: 'typescript10',
    category: 'typescript',
    question: 'What is strict mode in TypeScript?',
    answer: 'Strict mode enables strict null checks, strict function types, strict bind/call/apply, and strict class property initialization. Catches more errors at compile time.',
    difficulty: 'Medium',
    tags: ['config', 'safety'],
    tips: 'Enable strict mode in tsconfig.json for better type safety'
  },
  {
    id: 'python1',
    category: 'python',
    question: 'What is Python?',
    answer: 'Python is a high-level, interpreted programming language known for simplicity, readability, and versatility. Used in web dev, data science, AI, automation.',
    difficulty: 'Easy',
    tags: ['python', 'basics'],
    tips: 'Python emphasizes code readability and uses indentation for blocks'
  },
  {
    id: 'python2',
    category: 'python',
    question: 'What is the difference between list and tuple in Python?',
    answer: 'Lists are mutable (can be modified), tuples are immutable (fixed after creation). Use tuples for fixed collections, lists for dynamic data.',
    difficulty: 'Easy',
    tags: ['datatypes', 'collections'],
    tips: 'Tuples are hashable and can be dict keys; lists cannot'
  },
  {
    id: 'python3',
    category: 'python',
    question: 'What are list comprehensions in Python?',
    answer: 'List comprehensions create new lists by applying an expression to each element of an iterable, with optional filtering using if clauses.',
    difficulty: 'Easy',
    tags: ['syntax', 'lists'],
    tips: '[x*2 for x in range(10) if x % 2 == 0]'
  },
  {
    id: 'python4',
    category: 'python',
    question: 'What is the difference between == and is in Python?',
    answer: '== checks value equality, is checks object identity (same memory reference). Use == for comparisons, is for None/True/False checks.',
    difficulty: 'Medium',
    tags: ['operators', 'comparison'],
    tips: 'Always use is None instead of == None'
  },
  {
    id: 'python5',
    category: 'python',
    question: 'What are decorators in Python?',
    answer: 'Decorators are functions that modify or wrap other functions/classes using @decorator syntax. They add functionality without changing the original code.',
    difficulty: 'Medium',
    tags: ['functions', 'decorators'],
    tips: 'Use functools.wraps to preserve function metadata in decorators'
  },
  {
    id: 'python6',
    category: 'python',
    question: 'What is a lambda function in Python?',
    answer: 'Lambda is an anonymous function defined with lambda keyword, used for short operations. Syntax: lambda args: expression.',
    difficulty: 'Easy',
    tags: ['functions', 'syntax'],
    tips: 'Use lambda for simple operations; use def for complex logic'
  },
  {
    id: 'python7',
    category: 'python',
    question: 'What is the difference between *args and **kwargs?',
    answer: '*args accepts variable positional arguments as a tuple; **kwargs accepts variable keyword arguments as a dictionary.',
    difficulty: 'Easy',
    tags: ['functions', 'parameters'],
    tips: 'Names can be different; *args and **kwargs are conventions'
  },
  {
    id: 'python8',
    category: 'python',
    question: 'What is a generator in Python?',
    answer: 'A generator is a function using yield to return values one at a time, creating an iterator. Useful for large datasets and lazy evaluation.',
    difficulty: 'Medium',
    tags: ['functions', 'iterators'],
    tips: 'Use generators to save memory for large datasets'
  },
  {
    id: 'python9',
    category: 'python',
    question: 'What is exception handling in Python?',
    answer: 'Use try/except/finally to handle errors. try contains code that might error, except catches specific exceptions, finally runs regardless of outcome.',
    difficulty: 'Easy',
    tags: ['errors', 'handling'],
    tips: 'Catch specific exceptions; avoid bare except clauses'
  },
  {
    id: 'python10',
    category: 'python',
    question: 'What is the purpose of __init__ in Python classes?',
    answer: '__init__ is the constructor method that initializes object instances, setting default values for attributes. Called automatically when an object is created.',
    difficulty: 'Easy',
    tags: ['classes', 'oop'],
    tips: '__init__ receives self as first parameter (instance reference)'
  },
  {
    id: 'sql1',
    category: 'sql',
    question: 'What is SQL?',
    answer: 'SQL (Structured Query Language) is a standard language for managing relational databases, used to query, insert, update, and delete data.',
    difficulty: 'Easy',
    tags: ['sql', 'databases'],
    tips: 'SQL is database-agnostic; most databases support standard SQL'
  },
  {
    id: 'sql2',
    category: 'sql',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer: 'INNER JOIN returns only rows with matches in both tables; LEFT JOIN returns all rows from left table and matched rows from right table.',
    difficulty: 'Medium',
    tags: ['joins', 'queries'],
    tips: 'Use LEFT JOIN to find unmatched rows in left table'
  },
  {
    id: 'sql3',
    category: 'sql',
    question: 'What is a primary key in SQL?',
    answer: 'A primary key uniquely identifies each row in a table, ensuring no duplicates and allowing fast lookups. Usually an integer or UUID.',
    difficulty: 'Easy',
    tags: ['keys', 'tables'],
    tips: 'Primary keys are indexed automatically for performance'
  },
  {
    id: 'sql4',
    category: 'sql',
    question: 'What is a foreign key in SQL?',
    answer: 'A foreign key creates a relationship between two tables by referencing another table\'s primary key, enforcing referential integrity.',
    difficulty: 'Easy',
    tags: ['keys', 'relationships'],
    tips: 'Foreign keys prevent orphaned records and ensure data consistency'
  },
  {
    id: 'sql5',
    category: 'sql',
    question: 'What is normalization in SQL databases?',
    answer: 'Normalization organizes data into tables to reduce redundancy and improve integrity through normal forms (1NF, 2NF, 3NF). Prevents anomalies and updates.',
    difficulty: 'Medium',
    tags: ['design', 'normalization'],
    tips: 'Balance normalization with query performance (denormalize if needed)'
  },
  {
    id: 'sql6',
    category: 'sql',
    question: 'What is an index in SQL and why use it?',
    answer: 'An index creates a fast lookup structure on table columns, speeding up queries but slowing inserts/updates. Use on frequently queried columns.',
    difficulty: 'Medium',
    tags: ['performance', 'indexes'],
    tips: 'Avoid over-indexing; index on WHERE and JOIN columns'
  },
  {
    id: 'sql7',
    category: 'sql',
    question: 'What is the difference between COUNT, SUM, AVG?',
    answer: 'COUNT returns number of rows, SUM returns total of numeric column, AVG returns average. All are aggregate functions ignoring NULL values.',
    difficulty: 'Easy',
    tags: ['functions', 'aggregates'],
    tips: 'Use COUNT(*) for total rows, COUNT(column) to exclude NULLs'
  },
  {
    id: 'sql8',
    category: 'sql',
    question: 'What is a view in SQL?',
    answer: 'A view is a virtual table created from a query result. It simplifies complex queries, provides abstraction, and restricts data access.',
    difficulty: 'Medium',
    tags: ['views', 'database-objects'],
    tips: 'Views can be indexed and used in other views'
  },
  {
    id: 'sql9',
    category: 'sql',
    question: 'What is GROUP BY and HAVING in SQL?',
    answer: 'GROUP BY aggregates rows by column values; HAVING filters aggregated results (like WHERE for groups). Use together for grouped filtering.',
    difficulty: 'Medium',
    tags: ['grouping', 'queries'],
    tips: 'HAVING filters groups; WHERE filters individual rows before grouping'
  },
  {
    id: 'sql10',
    category: 'sql',
    question: 'What is a transaction in SQL?',
    answer: 'A transaction is a unit of work with ACID properties (Atomic, Consistent, Isolated, Durable). Use BEGIN, COMMIT, ROLLBACK to manage transactions.',
    difficulty: 'Medium',
    tags: ['transactions', 'consistency'],
    tips: 'Transactions ensure data consistency even if failures occur'
  }
];
