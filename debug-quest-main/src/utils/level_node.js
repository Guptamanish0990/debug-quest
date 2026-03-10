// level_node.js - Node.js only levels (30 levels)
// ----------------------------------------------------

export const LEVELS_NODE = [
  // ==================== EASY LEVELS (1-10) ====================
  {
    id: 201,
    title: "Missing require() for Built-in Module",
    difficulty: "Easy",
    language: "Node.js",
    description: "Using Node.js built-in module without requiring it first.",
    buggyCode: `const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);`,
    fixedCode: `const fs = require('fs');
const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);`,
    hint: "Node.js built-in modules need to be imported.",
    bugLine: 1,
    explanation: "The fs module must be required before use."
  },
  {
    id: 202,
    title: "Sync vs Async Confusion",
    difficulty: "Easy",
    language: "Node.js",
    description: "Using sync method when expecting async behavior.",
    buggyCode: `console.log('Start');
fs.readFileSync('bigfile.txt', 'utf8');
console.log('End');`,
    fixedCode: `console.log('Start');
fs.readFile('bigfile.txt', 'utf8', (err, data) => {
  console.log('End');
});`,
    hint: "Sync methods block the event loop.",
    bugLine: 2,
    explanation: "readFileSync blocks execution until file is read."
  },
  {
    id: 203,
    title: "__dirname in ES Modules",
    difficulty: "Easy",
    language: "Node.js",
    description: "__dirname is not available in ES modules by default.",
    buggyCode: `import { readFileSync } from 'fs';
const data = readFileSync(__dirname + '/file.txt');`,
    fixedCode: `import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const data = readFileSync(__dirname + '/file.txt');`,
    hint: "ES modules need different approach for __dirname.",
    bugLine: 2,
    explanation: "__dirname is a CommonJS global, not available in ES modules."
  },
  {
    id: 204,
    title: "process.env Variable Missing",
    difficulty: "Easy",
    language: "Node.js",
    description: "Accessing environment variable without checking if it exists.",
    buggyCode: `const apiKey = process.env.API_KEY;
console.log(apiKey.length);`,
    fixedCode: `const apiKey = process.env.API_KEY || 'default';
console.log(apiKey.length);`,
    hint: "Environment variables might be undefined.",
    bugLine: 1,
    explanation: "process.env variables might not be set, causing TypeError."
  },
  {
    id: 205,
    title: "Buffer.toString() Without Encoding",
    difficulty: "Easy",
    language: "Node.js",
    description: "Converting Buffer to string without specifying encoding.",
    buggyCode: `const buf = Buffer.from('hello');
console.log(buf.toString());`,
    fixedCode: `const buf = Buffer.from('hello');
console.log(buf.toString('utf8'));`,
    hint: "Always specify encoding for clarity.",
    bugLine: 2,
    explanation: "While utf8 is default, it's better to be explicit."
  },
  {
    id: 206,
    title: "JSON.parse Error Handling",
    difficulty: "Easy",
    language: "Node.js",
    description: "Parsing JSON without error handling.",
    buggyCode: `const data = JSON.parse(fs.readFileSync('data.json'));
console.log(data);`,
    fixedCode: `try {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  console.log(data);
} catch (error) {
  console.error('Invalid JSON:', error.message);
}`,
    hint: "JSON.parse throws on invalid JSON.",
    bugLine: 1,
    explanation: "Invalid JSON files will crash the application."
  },
  {
    id: 207,
    title: "Console.log with Objects",
    difficulty: "Easy",
    language: "Node.js",
    description: "String concatenation with objects in console.log.",
    buggyCode: `const user = { name: 'John' };
console.log('User: ' + user);`,
    fixedCode: `const user = { name: 'John' };
console.log('User:', user);`,
    hint: "Use comma instead of plus for objects.",
    bugLine: 2,
    explanation: "String concatenation converts object to [object Object]."
  },
  {
    id: 208,
    title: "Exit Code Not Set",
    difficulty: "Easy",
    language: "Node.js",
    description: "Exiting process without proper exit code.",
    buggyCode: `if (error) {
  console.error('Error occurred');
  process.exit();
}`,
    fixedCode: `if (error) {
  console.error('Error occurred');
  process.exit(1);
}`,
    hint: "Exit codes communicate success/failure.",
    bugLine: 3,
    explanation: "process.exit() without code defaults to 0 (success)."
  },
  {
    id: 209,
    title: "Path Concatenation Issues",
    difficulty: "Easy",
    language: "Node.js",
    description: "Using string concatenation for file paths.",
    buggyCode: `const filePath = __dirname + '/data/' + fileName;`,
    fixedCode: `const path = require('path');
const filePath = path.join(__dirname, 'data', fileName);`,
    hint: "Use path.join for cross-platform compatibility.",
    bugLine: 1,
    explanation: "String concatenation fails with different OS path separators."
  },
  {
    id: 210,
    title: "Missing Error Callback",
    difficulty: "Easy",
    language: "Node.js",
    description: "Ignoring error parameter in callbacks.",
    buggyCode: `fs.readFile('file.txt', 'utf8', (data) => {
  console.log(data);
});`,
    fixedCode: `fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});`,
    hint: "Always check for errors first.",
    bugLine: 1,
    explanation: "Callback pattern expects (err, data) parameters."
  },

  // ==================== MEDIUM LEVELS (11-20) ====================
  {
    id: 211,
    title: "Callback Hell",
    difficulty: "Medium",
    language: "Node.js",
    description: "Nested callbacks making code hard to read.",
    buggyCode: `fs.readFile('file1.txt', (err, data1) => {
  fs.readFile('file2.txt', (err, data2) => {
    fs.readFile('file3.txt', (err, data3) => {
      console.log(data1 + data2 + data3);
    });
  });
});`,
    fixedCode: `const util = require('util');
const readFile = util.promisify(fs.readFile);

async function readFiles() {
  const data1 = await readFile('file1.txt', 'utf8');
  const data2 = await readFile('file2.txt', 'utf8');
  const data3 = await readFile('file3.txt', 'utf8');
  console.log(data1 + data2 + data3);
}`,
    hint: "Use async/await or promises to flatten callbacks.",
    bugLine: 1,
    explanation: "Deeply nested callbacks are hard to maintain and error-prone."
  },
  {
    id: 212,
    title: "EventEmitter Memory Leak",
    difficulty: "Medium",
    language: "Node.js",
    description: "Adding too many listeners causes memory leak warning.",
    buggyCode: `const EventEmitter = require('events');
const emitter = new EventEmitter();

for (let i = 0; i < 20; i++) {
  emitter.on('event', () => console.log(i));
}`,
    fixedCode: `const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.setMaxListeners(20);
for (let i = 0; i < 20; i++) {
  emitter.on('event', () => console.log(i));
}`,
    hint: "Node.js warns when too many listeners are added.",
    bugLine: 5,
    explanation: "Default limit is 10 listeners per event to prevent memory leaks."
  },
  {
    id: 213,
    title: "Stream Backpressure",
    difficulty: "Medium",
    language: "Node.js",
    description: "Not handling stream backpressure properly.",
    buggyCode: `const readable = fs.createReadStream('input.mp4');
const writable = fs.createWriteStream('output.mp4');
readable.pipe(writable);`,
    fixedCode: `const readable = fs.createReadStream('input.mp4');
const writable = fs.createWriteStream('output.mp4');
readable.pipe(writable);
writable.on('drain', () => {
  console.log('Drained, ready for more data');
});`,
    hint: "Handle drain event for backpressure.",
    bugLine: 3,
    explanation: "Pipe handles backpressure automatically, but explicit handling is better for large files."
  },
  {
    id: 214,
    title: "Blocking Event Loop",
    difficulty: "Medium",
    language: "Node.js",
    description: "CPU-intensive task blocks event loop.",
    buggyCode: `function calculatePrimes(limit) {
  // CPU-intensive calculation
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

app.get('/primes', (req, res) => {
  const primes = calculatePrimes(1000000);
  res.json(primes);
});`,
    fixedCode: `const { Worker } = require('worker_threads');

app.get('/primes', (req, res) => {
  const worker = new Worker('./prime-calculator.js');
  worker.on('message', (primes) => {
    res.json(primes);
  });
});`,
    hint: "Offload CPU tasks to worker threads.",
    bugLine: 15,
    explanation: "Long-running CPU tasks block the event loop, making server unresponsive."
  },
  {
    id: 215,
    title: "Unhandled Promise Rejection",
    difficulty: "Medium",
    language: "Node.js",
    description: "Promise rejection without catch handler.",
    buggyCode: `async function fetchData() {
  const response = await fetch('http://api.example.com');
  return response.json();
}

fetchData();`,
    fixedCode: `async function fetchData() {
  try {
    const response = await fetch('http://api.example.com');
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}

fetchData();`,
    hint: "Always handle promise rejections.",
    bugLine: 5,
    explanation: "Unhandled promise rejections will crash Node.js in future versions."
  },
  {
    id: 216,
    title: "Circular JSON Stringify",
    difficulty: "Medium",
    language: "Node.js",
    description: "Stringifying object with circular references.",
    buggyCode: `const obj = { name: 'test' };
obj.self = obj;
console.log(JSON.stringify(obj));`,
    fixedCode: `const obj = { name: 'test' };
obj.self = obj;

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

console.log(JSON.stringify(obj, getCircularReplacer()));`,
    hint: "JSON.stringify cannot handle circular references.",
    bugLine: 3,
    explanation: "Circular references cause TypeError when stringifying."
  },
  {
    id: 217,
    title: "Server Port Already in Use",
    difficulty: "Medium",
    language: "Node.js",
    description: "Not handling EADDRINUSE error when starting server.",
    buggyCode: `const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    fixedCode: `const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Port 3000 is busy, trying 3001...');
    app.listen(3001);
  }
});`,
    hint: "Handle port binding errors gracefully.",
    bugLine: 1,
    explanation: "If port 3000 is already in use, the server fails to start."
  },
  {
    id: 218,
    title: "Middleware Order Issue",
    difficulty: "Medium",
    language: "Node.js",
    description: "Middleware order affecting response.",
    buggyCode: `app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});`,
    fixedCode: `app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});`,
    hint: "Middleware executes in order of definition.",
    bugLine: 1,
    explanation: "Middleware 2 executes before Middleware 1 due to order."
  },
  {
    id: 219,
    title: "Sync in Async Context",
    difficulty: "Medium",
    language: "Node.js",
    description: "Using sync method in async route handler.",
    buggyCode: `app.get('/data', async (req, res) => {
  const data = fs.readFileSync('largefile.json');
  res.json(JSON.parse(data));
});`,
    fixedCode: `app.get('/data', async (req, res) => {
  const data = await fs.promises.readFile('largefile.json', 'utf8');
  res.json(JSON.parse(data));
});`,
    hint: "Sync methods block in async handlers.",
    bugLine: 2,
    explanation: "readFileSync blocks event loop even in async function."
  },
  {
    id: 220,
    title: "Environment-Specific Code",
    difficulty: "Medium",
    language: "Node.js",
    description: "Hardcoded values instead of environment variables.",
    buggyCode: `const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'myapp'
};`,
    fixedCode: `const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'myapp'
};`,
    hint: "Use environment variables for configuration.",
    bugLine: 2,
    explanation: "Hardcoded values make deployment across environments difficult."
  },

  // ==================== HARD LEVELS (21-30) ====================
  {
    id: 221,
    title: "Memory Leak with Closures",
    difficulty: "Hard",
    language: "Node.js",
    description: "Closures keeping references to large objects.",
    buggyCode: `function createProcessor() {
  const largeData = new Array(1000000).fill('data');
  
  return function process() {
    // largeData is kept in memory
    return 'processed';
  };
}

const processors = [];
for (let i = 0; i < 1000; i++) {
  processors.push(createProcessor());
}`,
    fixedCode: `function createProcessor() {
  return function process() {
    const largeData = new Array(1000000).fill('data');
    // Process and release
    return 'processed';
  };
}

const processors = [];
for (let i = 0; i < 1000; i++) {
  processors.push(createProcessor());
}`,
    hint: "Closures maintain references to outer scope variables.",
    bugLine: 2,
    explanation: "largeData stays in memory for each processor function."
  },
  {
    id: 222,
    title: "Database Connection Pool Exhaustion",
    difficulty: "Hard",
    language: "Node.js",
    description: "Not releasing database connections.",
    buggyCode: `app.get('/users', async (req, res) => {
  const connection = await pool.getConnection();
  const users = await connection.query('SELECT * FROM users');
  res.json(users);
});`,
    fixedCode: `app.get('/users', async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const users = await connection.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) connection.release();
  }
});`,
    hint: "Always release database connections.",
    bugLine: 3,
    explanation: "Unreleased connections exhaust the pool, causing timeouts."
  },
  {
    id: 223,
    title: "Race Condition in File Operations",
    difficulty: "Hard",
    language: "Node.js",
    description: "Multiple processes writing to same file.",
    buggyCode: `function appendToFile(data) {
  const current = fs.readFileSync('log.txt', 'utf8');
  fs.writeFileSync('log.txt', current + data);
}

// Multiple calls simultaneously
appendToFile('log1');
appendToFile('log2');`,
    fixedCode: `const fs = require('fs').promises;
const { appendFile } = fs;

async function appendToFile(data) {
  await appendFile('log.txt', data, { flag: 'a' });
}

// Use proper locking or append flag
appendToFile('log1');
appendToFile('log2');`,
    hint: "Use atomic append or file locking.",
    bugLine: 3,
    explanation: "read-then-write operations can overwrite each other."
  },
  {
    id: 224,
    title: "Zombie Child Processes",
    difficulty: "Hard",
    language: "Node.js",
    description: "Not cleaning up child processes.",
    buggyCode: `const { spawn } = require('child_process');

function runCommand(cmd) {
  const child = spawn(cmd, { shell: true });
  child.on('exit', (code) => {
    console.log(\`Command exited with code \${code}\`);
  });
}`,
    fixedCode: `const { spawn } = require('child_process');

function runCommand(cmd) {
  const child = spawn(cmd, { shell: true });
  
  child.on('exit', (code) => {
    console.log(\`Command exited with code \${code}\`);
  });
  
  // Clean up on parent exit
  process.on('exit', () => {
    if (!child.killed) {
      child.kill();
    }
  });
}`,
    hint: "Child processes can become zombies.",
    bugLine: 4,
    explanation: "Uncleaned child processes become zombies when parent exits."
  },
  {
    id: 225,
    title: "Event Loop Starvation",
    difficulty: "Hard",
    language: "Node.js",
    description: "Microtasks preventing event loop progression.",
    buggyCode: `function recursivePromise() {
  return Promise.resolve().then(() => {
    return recursivePromise();
  });
}

recursivePromise();`,
    fixedCode: `function recursivePromise() {
  return new Promise((resolve) => {
    setImmediate(() => {
      resolve(recursivePromise());
    });
  });
}

recursivePromise();`,
    hint: "Use setImmediate to yield to event loop.",
    bugLine: 3,
    explanation: "Infinite promise chain starves event loop of I/O tasks."
  },
  {
    id: 226,
    title: "DNS Cache Issue",
    difficulty: "Hard",
    language: "Node.js",
    description: "DNS lookups not cached properly.",
    buggyCode: `const http = require('http');

function makeRequest() {
  return new Promise((resolve) => {
    http.get('http://api.example.com/data', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

// Called frequently
setInterval(makeRequest, 100);`,
    fixedCode: `const http = require('http');
const dns = require('dns');

// Cache DNS lookups
const dnsCache = new Map();

async function getCachedAddress(hostname) {
  if (dnsCache.has(hostname)) {
    return dnsCache.get(hostname);
  }
  
  return new Promise((resolve, reject) => {
    dns.lookup(hostname, (err, address) => {
      if (err) reject(err);
      dnsCache.set(hostname, address);
      resolve(address);
    });
  });
}

async function makeRequest() {
  const address = await getCachedAddress('api.example.com');
  // Use IP address directly
  return new Promise((resolve) => {
    http.get(\`http://\${address}/data\`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}`,
    hint: "Cache DNS lookups for performance.",
    bugLine: 4,
    explanation: "Frequent DNS lookups cause performance issues."
  },
  {
    id: 227,
    title: "Heap Memory Fragmentation",
    difficulty: "Hard",
    language: "Node.js",
    description: "Creating and discarding many large objects.",
    buggyCode: `function processBatch() {
  const results = [];
  
  for (let i = 0; i < 100000; i++) {
    const largeObject = {
      id: i,
      data: new Array(1000).fill('x').join(''),
      timestamp: Date.now()
    };
    results.push(JSON.stringify(largeObject));
  }
  
  return results;
}

setInterval(processBatch, 1000);`,
    fixedCode: `function processBatch() {
  const results = [];
  
  // Reuse object to reduce GC pressure
  const template = {
    id: 0,
    data: '',
    timestamp: 0
  };
  
  for (let i = 0; i < 100000; i++) {
    const obj = Object.create(template);
    obj.id = i;
    obj.data = 'x'.repeat(1000);
    obj.timestamp = Date.now();
    results.push(JSON.stringify(obj));
  }
  
  return results;
}

setInterval(processBatch, 1000);`,
    hint: "Object reuse reduces GC pressure.",
    bugLine: 6,
    explanation: "Creating many short-lived large objects causes heap fragmentation."
  },
  {
    id: 228,
    title: "Stream High Water Mark",
    difficulty: "Hard",
    language: "Node.js",
    description: "Stream buffer size causing memory issues.",
    buggyCode: `const readStream = fs.createReadStream('hugefile.bin');
const writeStream = fs.createWriteStream('output.bin');

readStream.pipe(writeStream);`,
    fixedCode: `const readStream = fs.createReadStream('hugefile.bin', {
  highWaterMark: 64 * 1024 // 64KB chunks
});
const writeStream = fs.createWriteStream('output.bin', {
  highWaterMark: 64 * 1024
});

readStream.pipe(writeStream);`,
    hint: "Adjust highWaterMark for large files.",
    bugLine: 1,
    explanation: "Default buffer size (64KB) can cause high memory usage with large files."
  },
  {
    id: 229,
    title: "Promise Pool Concurrency",
    difficulty: "Hard",
    language: "Node.js",
    description: "Unlimited concurrent promises overwhelming resources.",
    buggyCode: `async function processAll(items) {
  const promises = items.map(item => 
    fetch(\`http://api.example.com/process/\${item}\`)
  );
  return Promise.all(promises);
}

processAll(Array(1000).fill('data'));`,
    fixedCode: `async function processAll(items, concurrency = 10) {
  const results = [];
  
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchPromises = batch.map(item =>
      fetch(\`http://api.example.com/process/\${item}\`)
    );
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }
  
  return results;
}

processAll(Array(1000).fill('data'), 10);`,
    hint: "Limit concurrent promises.",
    bugLine: 3,
    explanation: "1000 concurrent HTTP requests can overwhelm servers and cause timeouts."
  },
  {
    id: 230,
    title: "Graceful Shutdown Missing",
    difficulty: "Hard",
    language: "Node.js",
    description: "Not handling SIGTERM/SIGINT signals for graceful shutdown.",
    buggyCode: `const server = app.listen(3000, () => {
  console.log('Server started');
});`,
    fixedCode: `const server = app.listen(3000, () => {
  console.log('Server started');
});

function gracefulShutdown(signal) {
  console.log(\`\\nReceived \${signal}, shutting down gracefully...\`);
  
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
  
  // Force shutdown after timeout
  setTimeout(() => {
    console.error('Could not close connections in time, forcing shutdown');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));`,
    hint: "Handle process signals for clean shutdown.",
    bugLine: 1,
    explanation: "Without graceful shutdown, active connections are terminated abruptly."
  }
];