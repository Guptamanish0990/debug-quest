export const codingProblems = [
  {
    id: 'cp1',
    title: 'Reverse a String',
    problem: 'Write a function that reverses a string.',
    input: '"hello"',
    output: '"olleh"',
    difficulty: 'Easy',
    tags: ['strings', 'javascript'],
    testCases: [
      { input: 'hello', expected: 'olleh' },
      { input: 'world', expected: 'dlrow' },
      { input: 'a', expected: 'a' },
      { input: '', expected: '' }
    ],
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}

// Alternative methods:
// Method 2: Loop
function reverseString2(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Method 3: Reduce
function reverseString3(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// Time Complexity: O(n)
// Space Complexity: O(n)`
  },
  {
    id: 'cp2',
    title: 'Find Maximum in Array',
    problem: 'Write a function to find the maximum number in an array.',
    input: '[3, 7, 2, 9, 1]',
    output: '9',
    difficulty: 'Easy',
    tags: ['arrays', 'javascript'],
    testCases: [
      { input: [3, 7, 2, 9, 1], expected: 9 },
      { input: [-1, -5, -3], expected: -1 },
      { input: [5], expected: 5 }
    ],
    solution: `function findMax(arr) {
  return Math.max(...arr);
}

// Alternative: Loop method
function findMax2(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Alternative: Reduce
function findMax3(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

// Time Complexity: O(n)
// Space Complexity: O(1)`
  },
  {
    id: 'cp3',
    title: 'Palindrome Checker',
    problem: 'Check if a string is a palindrome (reads same forwards and backwards).',
    input: '"racecar"',
    output: 'true',
    difficulty: 'Easy',
    tags: ['strings', 'javascript'],
    testCases: [
      { input: 'racecar', expected: true },
      { input: 'hello', expected: false },
      { input: 'A man a plan a canal Panama', expected: true },
      { input: 'a', expected: true }
    ],
    solution: `function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Alternative: Two pointers
function isPalindrome2(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1) for two pointers, O(n) for reverse method`
  },
  {
    id: 'cp4',
    title: 'FizzBuzz',
    problem: 'Print numbers 1 to n. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".',
    input: '15',
    output: '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz',
    difficulty: 'Easy',
    tags: ['logic', 'javascript'],
    testCases: [
      { input: 5, expected: ['1', '2', 'Fizz', '4', 'Buzz'] },
      { input: 15, expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'] }
    ],
    solution: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

console.log(fizzBuzz(15));

// Time Complexity: O(n)
// Space Complexity: O(n)`
  },
  {
    id: 'cp5',
    title: 'Remove Duplicates from Array',
    problem: 'Remove duplicate values from an array.',
    input: '[1, 2, 2, 3, 4, 4, 5]',
    output: '[1, 2, 3, 4, 5]',
    difficulty: 'Easy',
    tags: ['arrays', 'javascript'],
    testCases: [
      { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [1, 1, 1], expected: [1] },
      { input: [], expected: [] }
    ],
    solution: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Alternative: Filter method
function removeDuplicates2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Alternative: Reduce method
function removeDuplicates3(arr) {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}

// Time Complexity: O(n) for Set, O(n²) for filter with indexOf
// Space Complexity: O(n)`
  },
  {
    id: 'cp6',
    title: 'Factorial Function',
    problem: 'Calculate the factorial of a number (n!).',
    input: '5',
    output: '120',
    difficulty: 'Easy',
    tags: ['recursion', 'javascript'],
    testCases: [
      { input: 5, expected: 120 },
      { input: 0, expected: 1 },
      { input: 1, expected: 1 },
      { input: 7, expected: 5040 }
    ],
    solution: `// Recursive approach
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Iterative approach
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n) for recursive, O(1) for iterative`
  },
  {
    id: 'cp7',
    title: 'Count Vowels in String',
    problem: 'Count the number of vowels in a string.',
    input: '"javascript"',
    output: '3',
    difficulty: 'Easy',
    tags: ['strings', 'javascript'],
    testCases: [
      { input: 'javascript', expected: 3 },
      { input: 'hello world', expected: 3 },
      { input: 'aeiou', expected: 5 },
      { input: 'xyz', expected: 0 }
    ],
    solution: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}

// Alternative: Regex
function countVowels2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Alternative: Reduce
function countVowels3(str) {
  return str.split('').reduce((count, char) => {
    return 'aeiouAEIOU'.includes(char) ? count + 1 : count;
  }, 0);
}

// Time Complexity: O(n)
// Space Complexity: O(1)`
  },
  {
    id: 'cp8',
    title: 'Fibonacci Sequence',
    problem: 'Generate the first n numbers of the Fibonacci sequence.',
    input: '7',
    output: '[0, 1, 1, 2, 3, 5, 8]',
    difficulty: 'Medium',
    tags: ['algorithms', 'javascript'],
    testCases: [
      { input: 7, expected: [0, 1, 1, 2, 3, 5, 8] },
      { input: 1, expected: [0] },
      { input: 2, expected: [0, 1] },
      { input: 10, expected: [0,1,1,2,3,5,8,13,21,34] }
    ],
    solution: `function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Recursive approach
function fibonacciRecursive(n, arr = [0, 1]) {
  if (arr.length >= n) return arr.slice(0, n);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibonacciRecursive(n, arr);
}

// Time Complexity: O(n)
// Space Complexity: O(n)`
  }
];