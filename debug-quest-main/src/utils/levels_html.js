/* ---------------------------------------
      HTML EASY (20 QUESTIONS)
---------------------------------------- */

export const LEVELS_HTML = [

  {
    id: 11,
    title: "Missing Closing </h1>",
    difficulty: "Easy",
    language: "HTML",
    description: "A heading tag is left unclosed.",
    buggyCode: `<h1>Welcome to My Site`,
    fixedCode: `<h1>Welcome to My Site</h1>`,
    hint: "All headings need closing tags.",
    bugLine: 1,
    explanation: "Missing </h1> breaks DOM structure."
  },

  {
    id: 12,
    title: "Incorrect <img> Format",
    difficulty: "Easy",
    language: "HTML",
    description: "Image tag missing closing >.",
    buggyCode: `<img src="pic.png" alt="Pic"`,
    fixedCode: `<img src="pic.png" alt="Pic">`,
    hint: "Check the end of the tag.",
    bugLine: 1,
    explanation: "Tag was not closed."
  },

  {
    id: 13,
    title: "Empty Link",
    difficulty: "Easy",
    language: "HTML",
    description: "Anchor has no text.",
    buggyCode: `<a href="home.html"></a>`,
    fixedCode: `<a href="home.html">Home</a>`,
    hint: "Links must show something.",
    bugLine: 1,
    explanation: "Empty anchor tag is invalid."
  },

  {
    id: 14,
    title: "Broken Bold Tag",
    difficulty: "Easy",
    language: "HTML",
    description: "<b> tag not closed.",
    buggyCode: `<p>Hello <b>World</p>`,
    fixedCode: `<p>Hello <b>World</b></p>`,
    hint: "Check formatting tags.",
    bugLine: 1,
    explanation: "Bold formatting not closed."
  },

  {
    id: 15,
    title: "Wrong <br> Syntax",
    difficulty: "Easy",
    language: "HTML",
    description: "Line break tag incorrectly written.",
    buggyCode: `<br/>/>`,
    fixedCode: `<br/>`,
    hint: "Look for extra characters.",
    bugLine: 1,
    explanation: "Extra /> is invalid."
  },

  {
    id: 16,
    title: "List Item Outside <ul>",
    difficulty: "Easy",
    language: "HTML",
    description: "A <li> is placed without a list.",
    buggyCode: `<li>Item 1</li>`,
    fixedCode: `<ul><li>Item 1</li></ul>`,
    hint: "All <li> must be inside <ul> or <ol>.",
    bugLine: 1,
    explanation: "Invalid standalone list item."
  },

  {
    id: 17,
    title: "Incorrect Attribute Quotes",
    difficulty: "Easy",
    language: "HTML",
    description: "Attribute values must be wrapped in quotes.",
    buggyCode: `<div class=test>Hi</div>`,
    fixedCode: `<div class="test">Hi</div>`,
    hint: "Wrap attribute values in quotes.",
    bugLine: 1,
    explanation: "Missing quotes causes parsing issues."
  },

  {
    id: 18,
    title: "Self Closing Tag Error",
    difficulty: "Easy",
    language: "HTML",
    description: "Used self-closing syntax for a non-void tag.",
    buggyCode: `<span/>Hello`,
    fixedCode: `<span>Hello</span>`,
    hint: "Only void elements can self-close.",
    bugLine: 1,
    explanation: "<span> must have closing tag."
  },

  {
    id: 19,
    title: "Incorrect Comment Start",
    difficulty: "Easy",
    language: "HTML",
    description: "Comment opened incorrectly.",
    buggyCode: `<!- Comment here -->`,
    fixedCode: `<!-- Comment here -->`,
    hint: "Check how HTML comments begin.",
    bugLine: 1,
    explanation: "Comments must start with <!--"
  },

  {
    id: 20,
    title: "Header Missing alt Text",
    difficulty: "Easy",
    language: "HTML",
    description: "Accessibility issue: missing alt.",
    buggyCode: `<img src="banner.png">`,
    fixedCode: `<img src="banner.png" alt="Site Banner">`,
    hint: "Images need alt text.",
    bugLine: 1,
    explanation: "Missing alt attribute."
  },

  {
    id: 21,
    title: "Wrong Tag Spelling",
    difficulty: "Easy",
    language: "HTML",
    description: "Common typing mistake.",
    buggyCode: `<dvi>Hello</dvi>`,
    fixedCode: `<div>Hello</div>`,
    hint: "Check spelling of tags.",
    bugLine: 1,
    explanation: "<dvi> is not a valid tag."
  },

  {
    id: 22,
    title: "Broken Paragraph Nesting",
    difficulty: "Easy",
    language: "HTML",
    description: "Paragraph inside paragraph.",
    buggyCode: `<p>Text<p>More text</p>`,
    fixedCode: `<p>Text</p><p>More text</p>`,
    hint: "p tags cannot nest.",
    bugLine: 1,
    explanation: "Nested <p> breaks structure."
  },

  {
    id: 23,
    title: "Audio Missing Source",
    difficulty: "Easy",
    language: "HTML",
    description: "Audio has no src.",
    buggyCode: `<audio controls></audio>`,
    fixedCode: `<audio controls src="sound.mp3"></audio>`,
    hint: "Audio needs src attribute.",
    bugLine: 1,
    explanation: "Without src it won't play."
  },

  {
    id: 24,
    title: "Meta Description Missing Content",
    difficulty: "Easy",
    language: "HTML",
    description: "SEO issue: meta description empty.",
    buggyCode: `<meta name="description">`,
    fixedCode: `<meta name="description" content="Site description here">`,
    hint: "Meta tags need content.",
    bugLine: 1,
    explanation: "Missing content attribute."
  },

  {
    id: 25,
    title: "Forgot Closing </html>",
    difficulty: "Easy",
    language: "HTML",
    description: "The HTML page does not close properly.",
    buggyCode: `<html><body>Hello</body>`,
    fixedCode: `<html><body>Hello</body></html>`,
    hint: "Every root tag must close.",
    bugLine: 1,
    explanation: "Missing </html>."
  },

  {
    id: 26,
    title: "hr Used Incorrectly",
    difficulty: "Easy",
    language: "HTML",
    description: "hr is a void tag, no closing tag needed.",
    buggyCode: `<hr></hr>`,
    fixedCode: `<hr>`,
    hint: "Void tags cannot have closing tags.",
    bugLine: 1,
    explanation: "<hr> should not close."
  },

  {
    id: 27,
    title: "Mailto Link Missing",
    difficulty: "Easy",
    language: "HTML",
    description: "Email link is incorrect.",
    buggyCode: `<a href="test@test.com">Email</a>`,
    fixedCode: `<a href="mailto:test@test.com">Email</a>`,
    hint: "Use mailto: for email.",
    bugLine: 1,
    explanation: "mailto protocol missing."
  },

  {
    id: 28,
    title: "Target Blank Security Issue",
    difficulty: "Easy",
    language: "HTML",
    description: "missing rel attributes.",
    buggyCode: `<a href="page.html" target="_blank">Open</a>`,
    fixedCode: `<a href="page.html" target="_blank" rel="noopener noreferrer">Open</a>`,
    hint: "Prevent security vulnerabilities.",
    bugLine: 1,
    explanation: "noopener avoids window hijacking."
  },

  {
    id: 29,
    title: "Unknown Tag Used",
    difficulty: "Easy",
    language: "HTML",
    description: "Invalid HTML element.",
    buggyCode: `<boody>Text</boody>`,
    fixedCode: `<body>Text</body>`,
    hint: "Double-check the element names.",
    bugLine: 1,
    explanation: "boody is invalid."
  },

  {
    id: 30,
    title: "Inline Script Missing Closing Tag",
    difficulty: "Easy",
    language: "HTML",
    description: "Script tag not closed.",
    buggyCode: `<script>console.log("Hi")`,
    fixedCode: `<script>console.log("Hi")</script>`,
    hint: "All script tags must close.",
    bugLine: 1,
    explanation: "Missing </script>."
  },

/* ---------------------------------------
      HTML MEDIUM (20 QUESTIONS)
---------------------------------------- */

  {
    id: 31,
    title: "Mixed Quotes in Attributes",
    difficulty: "Medium",
    language: "HTML",
    description: "Attributes use mismatched quotes.",
    buggyCode: `<div class="box'></div>`,
    fixedCode: `<div class="box"></div>`,
    hint: "Use matching quotes.",
    bugLine: 1,
    explanation: "HTML cannot parse mismatched quotes."
  },

  {
    id: 32,
    title: "Label Missing for Input",
    difficulty: "Medium",
    language: "HTML",
    description: "Accessibility issue with forms.",
    buggyCode: `<label>Email</label><input type="email">`,
    fixedCode: `<label for="email">Email</label><input type="email" id="email">`,
    hint: "Label must be linked to input.",
    bugLine: 1,
    explanation: "Missing for and id pair."
  },

  {
    id: 33,
    title: "Div Inside <select>",
    difficulty: "Medium",
    language: "HTML",
    description: "Only <option> allowed inside select.",
    buggyCode: `<select><div>Option</div></select>`,
    fixedCode: `<select><option>Option</option></select>`,
    hint: "Use correct children for select.",
    bugLine: 1,
    explanation: "Invalid child element <div>."
  },

  {
    id: 34,
    title: "Improper Use of <strong>",
    difficulty: "Medium",
    language: "HTML",
    description: "Strong tag partially open.",
    buggyCode: `<p><strong>Important text<p>More text</p>`,
    fixedCode: `<p><strong>Important text</strong></p><p>More text</p>`,
    hint: "Check nested semantic tags.",
    bugLine: 1,
    explanation: "<strong> was never closed."
  },

  {
    id: 35,
    title: "Iframe Missing Closing Tag",
    difficulty: "Medium",
    language: "HTML",
    description: "iframe lacks closing tag.",
    buggyCode: `<iframe src="site.html">`,
    fixedCode: `<iframe src="site.html"></iframe>`,
    hint: "Non-void tags must close.",
    bugLine: 1,
    explanation: "<iframe> must have </iframe>."
  },

  {
    id: 36,
    title: "Using <center> Tag",
    difficulty: "Medium",
    language: "HTML",
    description: "<center> is deprecated.",
    buggyCode: `<center>Text</center>`,
    fixedCode: `<div style="text-align:center;">Text</div>`,
    hint: "Use CSS, not deprecated tags.",
    bugLine: 1,
    explanation: "<center> removed from HTML5."
  },

  {
    id: 37,
    title: "Nested Buttons",
    difficulty: "Medium",
    language: "HTML",
    description: "Button cannot contain another button.",
    buggyCode: `<button><button>Click</button></button>`,
    fixedCode: `<button>Click</button>`,
    hint: "Interactive elements should not nest.",
    bugLine: 1,
    explanation: "Nested buttons cause undefined behavior."
  },

  {
    id: 38,
    title: "Table Missing <thead>",
    difficulty: "Medium",
    language: "HTML",
    description: "thead improves structure.",
    buggyCode: `<table><tr><th>A</th></tr></table>`,
    fixedCode: `<table><thead><tr><th>A</th></tr></thead></table>`,
    hint: "Use thead for header rows.",
    bugLine: 1,
    explanation: "Missing thead section."
  },

  {
    id: 39,
    title: "Invalid Attribute for Tag",
    difficulty: "Medium",
    language: "HTML",
    description: "div cannot have alt attribute.",
    buggyCode: `<div alt="Box"></div>`,
    fixedCode: `<div></div>`,
    hint: "Only img uses alt.",
    bugLine: 1,
    explanation: "alt is invalid on <div>."
  },

  {
    id: 40,
    title: "Script Type Missing",
    difficulty: "Medium",
    language: "HTML",
    description: "Old browsers require type attribute.",
    buggyCode: `<script>console.log(1)</script>`,
    fixedCode: `<script type="text/javascript">console.log(1)</script>`,
    hint: "Add script type.",
    bugLine: 1,
    explanation: "Some environments require type attribute."
  },

  {
    id: 41,
    title: "Figure Without Figcaption",
    difficulty: "Medium",
    language: "HTML",
    description: "Best practice not followed.",
    buggyCode: `<figure><img src="a.png"></figure>`,
    fixedCode: `<figure><img src="a.png"><figcaption>Description</figcaption></figure>`,
    hint: "Figures should describe images.",
    bugLine: 1,
    explanation: "Missing <figcaption>."
  },

  {
    id: 42,
    title: "Multiple Body Tags",
    difficulty: "Medium",
    language: "HTML",
    description: "Only one body allowed.",
    buggyCode: `<body></body><body></body>`,
    fixedCode: `<body></body>`,
    hint: "HTML can have only one body.",
    bugLine: 2,
    explanation: "Duplicate <body> invalid."
  },

  {
    id: 43,
    title: "Wrong Order: head vs meta",
    difficulty: "Medium",
    language: "HTML",
    description: "Meta tag outside head.",
    buggyCode: `<meta charset="UTF-8"><head></head>`,
    fixedCode: `<head><meta charset="UTF-8"></head>`,
    hint: "Meta should be inside head.",
    bugLine: 1,
    explanation: "Meta must appear inside <head>."
  },

  {
    id: 44,
    title: "Incorrect Button Type",
    difficulty: "Medium",
    language: "HTML",
    description: "Missing button type defaults to submit.",
    buggyCode: `<button>Click</button>`,
    fixedCode: `<button type="button">Click</button>`,
    hint: "Use type attribute on forms.",
    bugLine: 1,
    explanation: "Button without type may submit forms unexpectedly."
  },

  {
    id: 45,
    title: "nav Missing List Structure",
    difficulty: "Medium",
    language: "HTML",
    description: "<nav> should contain lists.",
    buggyCode: `<nav>Home About Contact</nav>`,
    fixedCode: `<nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav>`,
    hint: "Nav menus use lists.",
    bugLine: 1,
    explanation: "Plain text inside <nav> is not semantic."
  },

  {
    id: 46,
    title: "Video Without Type",
    difficulty: "Medium",
    language: "HTML",
    description: "Source tag missing type.",
    buggyCode: `<video controls><source src="movie.mp4"></video>`,
    fixedCode: `<video controls><source src="movie.mp4" type="video/mp4"></video>`,
    hint: "Add MIME type.",
    bugLine: 2,
    explanation: "Missing correct MIME type."
  },

  {
    id: 47,
    title: "dl Without dt",
    difficulty: "Medium",
    language: "HTML",
    description: "Definition list missing dt.",
    buggyCode: `<dl><dd>Item</dd></dl>`,
    fixedCode: `<dl><dt>Title</dt><dd>Item</dd></dl>`,
    hint: "Definition lists require dt.",
    bugLine: 1,
    explanation: "<dd> must follow <dt>."
  },

  {
    id: 48,
    title: "form Missing Method",
    difficulty: "Medium",
    language: "HTML",
    description: "Forms need method attribute.",
    buggyCode: `<form action="/send"></form>`,
    fixedCode: `<form action="/send" method="POST"></form>`,
    hint: "Specify method for clarity.",
    bugLine: 1,
    explanation: "Form defaults unpredictable."
  },

  {
    id: 49,
    title: "Header Without Role",
    difficulty: "Medium",
    language: "HTML",
    description: "Role recommended for screen readers.",
    buggyCode: `<header>Welcome</header>`,
    fixedCode: `<header role="banner">Welcome</header>`,
    hint: "Add ARIA role.",
    bugLine: 1,
    explanation: "banner role improves accessibility."
  },

  {
    id: 50,
    title: "Anchor Used for Button Behavior",
    difficulty: "Medium",
    language: "HTML",
    description: "Using <a> tag without href for button functionality.",
    buggyCode: `<a onclick="submitForm()">Submit</a>`,
    fixedCode: `<button onclick="submitForm()">Submit</button>`,
    hint: "Use <button> for JavaScript actions.",
    bugLine: 1,
    explanation: "Anchor tags without href are not keyboard accessible."
  },

/* ---------------------------------------
      HTML HARD (20 QUESTIONS)
---------------------------------------- */

  {
    id: 51,
    title: "Improper ARIA Role Application",
    difficulty: "Hard",
    language: "HTML",
    description: "ARIA role on invalid element type.",
    buggyCode: `<span role="heading">Section Title</span>`,
    fixedCode: `<div role="heading" aria-level="2">Section Title</div>`,
    hint: "ARIA roles need proper semantics.",
    bugLine: 1,
    explanation: "Heading role requires aria-level attribute for proper semantics."
  },

  {
    id: 52,
    title: "Missing Schema.org Microdata",
    difficulty: "Hard",
    language: "HTML",
    description: "Product listing missing structured data.",
    buggyCode: `<div>Product: Phone $299</div>`,
    fixedCode: `<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="name">Phone</span>
  <span itemprop="price">$299</span>
</div>`,
    hint: "Use structured data for SEO.",
    bugLine: 1,
    explanation: "Missing schema.org microdata for search engines."
  },

  {
    id: 53,
    title: "Complex Table Accessibility",
    difficulty: "Hard",
    language: "HTML",
    description: "Table with merged cells missing accessibility attributes.",
    buggyCode: `<table>
  <tr><td colspan="2">Header</td></tr>
  <tr><td>Data 1</td><td>Data 2</td></tr>
</table>`,
    fixedCode: `<table>
  <tr><th colspan="2" scope="colgroup">Header</th></tr>
  <tr><td>Data 1</td><td>Data 2</td></tr>
</table>`,
    hint: "Merged cells need scope attributes.",
    bugLine: 2,
    explanation: "Colspan headers need scope='colgroup' for screen readers."
  },

  {
    id: 54,
    title: "Custom Element Missing Dash",
    difficulty: "Hard",
    language: "HTML",
    description: "Custom web component name doesn't contain hyphen.",
    buggyCode: `<mycomponent></mycomponent>`,
    fixedCode: `<my-custom-component></my-custom-component>`,
    hint: "Custom elements must have a hyphen.",
    bugLine: 1,
    explanation: "HTML specification requires custom element names to contain a hyphen."
  },

  {
    id: 55,
    title: "Security Vulnerable Meta Tag",
    difficulty: "Hard",
    language: "HTML",
    description: "Content Security Policy too permissive.",
    buggyCode: `<meta http-equiv="Content-Security-Policy" content="default-src *">`,
    fixedCode: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'">`,
    hint: "Restrict content sources for security.",
    bugLine: 1,
    explanation: "Wildcard (*) allows any source, creating security risks."
  },

  {
    id: 56,
    title: "Picture Element Without Fallback",
    difficulty: "Hard",
    language: "HTML",
    description: "Modern image format without JPEG fallback.",
    buggyCode: `<picture>
  <source srcset="image.webp">
</picture>`,
    fixedCode: `<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>`,
    hint: "Always provide fallback image.",
    bugLine: 2,
    explanation: "Picture element must end with <img> tag for browsers that don't support it."
  },

  {
    id: 57,
    title: "Incorrect Open Graph Implementation",
    difficulty: "Hard",
    language: "HTML",
    description: "Social media meta tags missing required properties.",
    buggyCode: `<meta property="og:title">
<meta property="og:url" text="https://example.com">`,
    fixedCode: `<meta property="og:title" content="Page Title">
<meta property="og:url" content="https://example.com">
<meta property="og:type" content="website">`,
    hint: "Open Graph requires content attribute and basic properties.",
    bugLine: 1,
    explanation: "Missing content attribute and required og:type property."
  },

  {
    id: 58,
    title: "Performance: Missing Preconnect",
    difficulty: "Hard",
    language: "HTML",
    description: "External resource loading without preconnect hint.",
    buggyCode: `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">`,
    fixedCode: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">`,
    hint: "Preconnect to external domains for performance.",
    bugLine: 1,
    explanation: "Preconnect hints improve loading speed of external resources."
  },

  {
    id: 59,
    title: "ARIA Live Region Misuse",
    difficulty: "Hard",
    language: "HTML",
    description: "Incorrect aria-live attribute value.",
    buggyCode: `<div aria-live="always">Loading...</div>`,
    fixedCode: `<div aria-live="polite">Loading...</div>`,
    hint: "Choose appropriate aria-live value.",
    bugLine: 1,
    explanation: "'always' interrupts screen readers; 'polite' is usually better."
  },

  {
    id: 60,
    title: "Missing Manifest for PWA",
    difficulty: "Hard",
    language: "HTML",
    description: "Progressive Web App missing manifest link.",
    buggyCode: `<head>
  <title>My PWA</title>
</head>`,
    fixedCode: `<head>
  <title>My PWA</title>
  <link rel="manifest" href="/manifest.json">
</head>`,
    hint: "PWAs require manifest file.",
    bugLine: 2,
    explanation: "Missing manifest link prevents install as PWA."
  },

  {
    id: 61,
    title: "Invalid Microformat Syntax",
    difficulty: "Hard",
    language: "HTML",
    description: "hCard microformat missing required class names.",
    buggyCode: `<div>
  <span>John Doe</span>
  <span>johndoe@example.com</span>
</div>`,
    fixedCode: `<div class="vcard">
  <span class="fn">John Doe</span>
  <span class="email">johndoe@example.com</span>
</div>`,
    hint: "Microformats use specific class names.",
    bugLine: 1,
    explanation: "Missing vcard, fn, and email classes for proper hCard microformat."
  },

  {
    id: 62,
    title: "Script Module Without Type",
    difficulty: "Hard",
    language: "HTML",
    description: "ES6 module script missing type='module'.",
    buggyCode: `<script src="app.js"></script>`,
    fixedCode: `<script type="module" src="app.js"></script>`,
    hint: "Modern modules require type attribute.",
    bugLine: 1,
    explanation: "ES6 modules need type='module' to work correctly."
  },

  {
    id: 63,
    title: "Missing Preload for Critical Font",
    difficulty: "Hard",
    language: "HTML",
    description: "Critical font not preloaded causing FOUT.",
    buggyCode: `<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">`,
    fixedCode: `<link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto" as="style" onload="this.rel='stylesheet'">
<noscript><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></noscript>`,
    hint: "Preload fonts to avoid flash of unstyled text.",
    bugLine: 1,
    explanation: "Missing preload causes visible font loading delay (FOUT)."
  },

  {
    id: 64,
    title: "Incorrect Time Element Usage",
    difficulty: "Hard",
    language: "HTML",
    description: "datetime attribute missing or incorrect format.",
    buggyCode: `<time>January 1, 2024</time>`,
    fixedCode: `<time datetime="2024-01-01">January 1, 2024</time>`,
    hint: "Time elements need machine-readable datetime.",
    bugLine: 1,
    explanation: "Missing datetime attribute prevents machine parsing of date."
  },

  {
    id: 65,
    title: "Shadow DOM Slot Misuse",
    difficulty: "Hard",
    language: "HTML",
    description: "Web component with incorrect slot usage.",
    buggyCode: `<my-component>
  <div>Content</div>
</my-component>`,
    fixedCode: `<my-component>
  <div slot="content">Content</div>
</my-component>`,
    hint: "Named slots require slot attribute.",
    bugLine: 2,
    explanation: "Content must specify slot name if component uses named slots."
  },

  {
    id: 66,
    title: "Missing Theme Color Meta",
    difficulty: "Hard",
    language: "HTML",
    description: "PWA missing theme color for mobile browsers.",
    buggyCode: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    fixedCode: `<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#3f51b5">`,
    hint: "Modern browsers support theme color.",
    bugLine: 1,
    explanation: "Missing theme-color meta for PWA address bar styling."
  },

  {
    id: 67,
    title: "Accessibility: Missing Landmark Roles",
    difficulty: "Hard",
    language: "HTML",
    description: "Page structure missing proper ARIA landmarks.",
    buggyCode: `<div id="main">Content</div>
<div id="nav">Navigation</div>`,
    fixedCode: `<main role="main" id="main">Content</main>
<nav role="navigation" id="nav">Navigation</nav>`,
    hint: "Use semantic elements with roles.",
    bugLine: 1,
    explanation: "Missing landmark roles for screen reader navigation."
  },

  {
    id: 68,
    title: "Resource Hint Priority",
    difficulty: "Hard",
    language: "HTML",
    description: "Missing dns-prefetch for third-party domains.",
    buggyCode: `<script src="https://cdn.example.com/library.js"></script>`,
    fixedCode: `<link rel="dns-prefetch" href="https://cdn.example.com">
<script src="https://cdn.example.com/library.js"></script>`,
    hint: "DNS prefetch improves external resource loading.",
    bugLine: 1,
    explanation: "Missing DNS prefetch for third-party domain delays resource loading."
  },

  {
    id: 69,
    title: "Invalid JSON-LD Structure",
    difficulty: "Hard",
    language: "HTML",
    description: "Structured data JSON-LD syntax error.",
    buggyCode: `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Company"
</script>`,
    fixedCode: `<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Company"
  }
</script>`,
    hint: "JSON-LD must be valid JSON.",
    bugLine: 6,
    explanation: "Missing closing braces and property quotes in JSON-LD."
  },

  {
    id: 70,
    title: "Missing Canonical URL",
    difficulty: "Hard",
    language: "HTML",
    description: "Duplicate content page missing canonical link.",
    buggyCode: `<head>
  <title>Product Page</title>
</head>`,
    fixedCode: `<head>
  <title>Product Page</title>
  <link rel="canonical" href="https://example.com/product">
</head>`,
    hint: "Duplicate pages need canonical URLs.",
    bugLine: 2,
    explanation: "Missing canonical link causes SEO duplicate content issues."
  }
];