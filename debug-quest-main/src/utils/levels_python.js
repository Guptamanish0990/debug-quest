export const LEVELS_PYTHON = [
  // ==================== EASY LEVELS (1-30) ====================
  {
    id: 301,
    title: "Indentation Error",
    difficulty: "Easy",
    language: "Python",
    description: "Missing indentation inside function block.",
    buggyCode: `def greet():
print("Hello")`,
    fixedCode: `def greet():
    print("Hello")`,
    hint: "Python requires indentation inside blocks.",
    bugLine: 2,
    explanation: "print() must be indented inside the function."
  },
  {
    id: 302,
    title: "Variable Name Typo",
    difficulty: "Easy",
    language: "Python",
    description: "Misspelled variable name causes NameError.",
    buggyCode: `name = "Alice"
print(nam)`,
    fixedCode: `name = "Alice"
print(name)`,
    hint: "Check for typos in variable names.",
    bugLine: 2,
    explanation: "nam is not defined — should be name."
  },
  {
    id: 303,
    title: "List Index Out of Range",
    difficulty: "Easy",
    language: "Python",
    description: "Accessing non-existent list index.",
    buggyCode: `nums = [10, 20, 30]
print(nums[3])`,
    fixedCode: `nums = [10, 20, 30]
print(nums[2])`,
    hint: "Remember: indexing starts at 0.",
    bugLine: 2,
    explanation: "Index 3 doesn't exist; last index is 2."
  },
  {
    id: 304,
    title: "Missing Colon",
    difficulty: "Easy",
    language: "Python",
    description: "Forgetting colon after condition.",
    buggyCode: `if x > 5
    print("Large")`,
    fixedCode: `if x > 5:
    print("Large")`,
    hint: "Colon is required after conditions.",
    bugLine: 1,
    explanation: "Python needs colon after if/for/while/def/class."
  },
  {
    id: 305,
    title: "String Concatenation Error",
    difficulty: "Easy",
    language: "Python",
    description: "Trying to concatenate string with integer.",
    buggyCode: `age = 20
print("Age: " + age)`,
    fixedCode: `age = 20
print("Age: " + str(age))`,
    hint: "Convert int to string before concatenation.",
    bugLine: 2,
    explanation: "Cannot concatenate string and integer directly."
  },
  {
    id: 306,
    title: "Incorrect Comparison Operator",
    difficulty: "Easy",
    language: "Python",
    description: "Using assignment instead of comparison.",
    buggyCode: `if x = 5:
    print("Five")`,
    fixedCode: `if x == 5:
    print("Five")`,
    hint: "Use == for comparison, = for assignment.",
    bugLine: 1,
    explanation: "= assigns value, == compares values."
  },
  {
    id: 307,
    title: "Missing Parentheses",
    difficulty: "Easy",
    language: "Python",
    description: "Missing parentheses in print statement.",
    buggyCode: `print "Hello World"`,
    fixedCode: `print("Hello World")`,
    hint: "Python 3 requires parentheses for print.",
    bugLine: 1,
    explanation: "Python 3 uses print() as a function."
  },
  {
    id: 308,
    title: "Incorrect Loop Range",
    difficulty: "Easy",
    language: "Python",
    description: "Off-by-one error in range.",
    buggyCode: `for i in range(5):
    print(i)  # Prints 0-4, not 1-5`,
    fixedCode: `for i in range(1, 6):
    print(i)  # Prints 1-5`,
    hint: "range(5) gives 0-4, not 1-5.",
    bugLine: 1,
    explanation: "range(5) generates numbers 0 through 4."
  },
  {
    id: 309,
    title: "Tuple Unpacking Error",
    difficulty: "Easy",
    language: "Python",
    description: "Too many variables for tuple unpacking.",
    buggyCode: `a, b = (1, 2, 3)`,
    fixedCode: `a, b, c = (1, 2, 3)`,
    hint: "Number of variables must match tuple length.",
    bugLine: 1,
    explanation: "Cannot unpack 3 values into 2 variables."
  },
  {
    id: 310,
    title: "Division by Zero",
    difficulty: "Easy",
    language: "Python",
    description: "Attempting to divide by zero.",
    buggyCode: `result = 10 / 0`,
    fixedCode: `result = 10 / 2  # Or handle with try-except`,
    hint: "Check denominator before dividing.",
    bugLine: 1,
    explanation: "Division by zero causes ZeroDivisionError."
  },
  {
    id: 311,
    title: "Import Module Error",
    difficulty: "Easy",
    language: "Python",
    description: "Importing non-existent module.",
    buggyCode: `import maths`,
    fixedCode: `import math`,
    hint: "Check module name spelling.",
    bugLine: 1,
    explanation: "Module name is 'math', not 'maths'."
  },
  {
    id: 312,
    title: "Incorrect Dictionary Access",
    difficulty: "Easy",
    language: "Python",
    description: "Accessing dictionary with wrong key.",
    buggyCode: `data = {"name": "Alice", "age": 20}
print(data["Name"])`,
    fixedCode: `data = {"name": "Alice", "age": 20}
print(data["name"])`,
    hint: "Dictionary keys are case-sensitive.",
    bugLine: 2,
    explanation: "'Name' with capital N doesn't exist."
  },
  {
    id: 313,
    title: "Infinite While Loop",
    difficulty: "Easy",
    language: "Python",
    description: "While loop with no exit condition.",
    buggyCode: `while True:
    print("Looping")`,
    fixedCode: `for i in range(5):
    print("Looping")`,
    hint: "Add break condition or limit iterations.",
    bugLine: 1,
    explanation: "Infinite loop with no break statement."
  },
  {
    id: 314,
    title: "File Not Found",
    difficulty: "Easy",
    language: "Python",
    description: "Opening non-existent file.",
    buggyCode: `with open("nonexistent.txt", "r") as f:
    content = f.read()`,
    fixedCode: `import os
if os.path.exists("data.txt"):
    with open("data.txt", "r") as f:
        content = f.read()`,
    hint: "Check if file exists before opening.",
    bugLine: 1,
    explanation: "File doesn't exist - causes FileNotFoundError."
  },
  {
    id: 315,
    title: "Missing Return Statement",
    difficulty: "Easy",
    language: "Python",
    description: "Function without return statement.",
    buggyCode: `def add(a, b):
    result = a + b

print(add(3, 4))  # Prints None`,
    fixedCode: `def add(a, b):
    result = a + b
    return result

print(add(3, 4))`,
    hint: "Functions need return statement to output value.",
    bugLine: 2,
    explanation: "Without return, function returns None."
  },
  {
    id: 316,
    title: "List Append in Wrong Place",
    difficulty: "Easy",
    language: "Python",
    description: "Trying to append to string.",
    buggyCode: `text = "Hello"
text.append(" World")`,
    fixedCode: `text = "Hello"
text += " World"`,
    hint: "Strings are immutable - use concatenation.",
    bugLine: 2,
    explanation: "Strings don't have append() method."
  },
  {
    id: 317,
    title: "Wrong Method Name",
    difficulty: "Easy",
    language: "Python",
    description: "Using wrong list method name.",
    buggyCode: `nums = [1, 2, 3]
nums.add(4)`,
    fixedCode: `nums = [1, 2, 3]
nums.append(4)`,
    hint: "Lists use append(), not add().",
    bugLine: 2,
    explanation: "add() is for sets, append() for lists."
  },
  {
    id: 318,
    title: "Global Variable Scope",
    difficulty: "Easy",
    language: "Python",
    description: "Trying to modify global variable without declaration.",
    buggyCode: `count = 0

def increment():
    count += 1

increment()`,
    fixedCode: `count = 0

def increment():
    global count
    count += 1

increment()`,
    hint: "Use global keyword to modify global variables.",
    bugLine: 4,
    explanation: "Need 'global count' to modify global variable."
  },
  {
    id: 319,
    title: "String Index Out of Range",
    difficulty: "Easy",
    language: "Python",
    description: "Accessing character beyond string length.",
    buggyCode: `text = "Hello"
print(text[10])`,
    fixedCode: `text = "Hello"
if len(text) > 10:
    print(text[10])`,
    hint: "Check string length before accessing index.",
    bugLine: 2,
    explanation: "String index 10 doesn't exist in 'Hello'."
  },
  {
    id: 320,
    title: "Incorrect Boolean Logic",
    difficulty: "Easy",
    language: "Python",
    description: "Wrong boolean operator usage.",
    buggyCode: `if x > 5 and < 10:
    print("Between")`,
    fixedCode: `if x > 5 and x < 10:
    print("Between")`,
    hint: "Each condition must be complete.",
    bugLine: 1,
    explanation: "Need 'x' in both parts of condition."
  },
  {
    id: 321,
    title: "Missing Import",
    difficulty: "Easy",
    language: "Python",
    description: "Using module without importing.",
    buggyCode: `print(math.sqrt(16))`,
    fixedCode: `import math
print(math.sqrt(16))`,
    hint: "Import modules before using them.",
    bugLine: 1,
    explanation: "math module not imported."
  },
  {
    id: 322,
    title: "Dictionary Key Error",
    difficulty: "Easy",
    language: "Python",
    description: "Accessing non-existent dictionary key.",
    buggyCode: `data = {"a": 1}
print(data["b"])`,
    fixedCode: `data = {"a": 1}
print(data.get("b", "Not found"))`,
    hint: "Use .get() method for safe access.",
    bugLine: 2,
    explanation: "Key 'b' doesn't exist in dictionary."
  },
  {
    id: 323,
    title: "Incorrect String Method",
    difficulty: "Easy",
    language: "Python",
    description: "Wrong string method name.",
    buggyCode: `text = "HELLO"
print(text.lowercase())`,
    fixedCode: `text = "HELLO"
print(text.lower())`,
    hint: "String method is .lower(), not .lowercase().",
    bugLine: 2,
    explanation: "Correct method is .lower() for lowercase."
  },
  {
    id: 324,
    title: "List Comprehension Syntax",
    difficulty: "Easy",
    language: "Python",
    description: "Wrong list comprehension syntax.",
    buggyCode: `squares = [x^2 for x in range(5)]`,
    fixedCode: `squares = [x**2 for x in range(5)]`,
    hint: "Use ** for exponent, not ^.",
    bugLine: 1,
    explanation: "^' is bitwise XOR, ** is exponentiation."
  },
  {
    id: 325,
    title: "Function Call Missing Argument",
    difficulty: "Easy",
    language: "Python",
    description: "Calling function with missing arguments.",
    buggyCode: `def greet(name, message):
    print(f"{message}, {name}!")

greet("Alice")`,
    fixedCode: `def greet(name, message="Hello"):
    print(f"{message}, {name}!")

greet("Alice")`,
    hint: "Provide all required arguments or use defaults.",
    bugLine: 4,
    explanation: "Function expects 2 arguments, only 1 provided."
  },
  {
    id: 326,
    title: "Incorrect Type Conversion",
    difficulty: "Easy",
    language: "Python",
    description: "Wrong type conversion function.",
    buggyCode: `num = "123"
result = intiger(num)`,
    fixedCode: `num = "123"
result = int(num)`,
    hint: "Correct function is int(), not intiger().",
    bugLine: 2,
    explanation: "Function name is int() for integer conversion."
  },
  {
    id: 327,
    title: "Modifying Tuple",
    difficulty: "Easy",
    language: "Python",
    description: "Trying to modify immutable tuple.",
    buggyCode: `coordinates = (10, 20)
coordinates[0] = 15`,
    fixedCode: `coordinates = [10, 20]  # Use list instead
coordinates[0] = 15`,
    hint: "Tuples are immutable - use lists for mutable data.",
    bugLine: 2,
    explanation: "Cannot modify tuple elements."
  },
  {
    id: 328,
    title: "Missing Comma in List",
    difficulty: "Easy",
    language: "Python",
    description: "Missing comma in list creation.",
    buggyCode: `items = [1 2 3]`,
    fixedCode: `items = [1, 2, 3]`,
    hint: "List elements need commas between them.",
    bugLine: 1,
    explanation: "Missing commas between list elements."
  },
  {
    id: 329,
    title: "Incorrect Escape Sequence",
    difficulty: "Easy",
    language: "Python",
    description: "Wrong escape sequence in string.",
    buggyCode: `print('It's a nice day')`,
    fixedCode: `print("It's a nice day")`,
    hint: "Use double quotes or escape single quote.",
    bugLine: 1,
    explanation: "Unescaped single quote inside single-quoted string."
  },
  {
    id: 330,
    title: "Wrong Comparison for None",
    difficulty: "Easy",
    language: "Python",
    description: "Using wrong comparison with None.",
    buggyCode: `if value == None:
    print("No value")`,
    fixedCode: `if value is None:
    print("No value")`,
    hint: "Use 'is' for comparing with None, not '=='.",
    bugLine: 1,
    explanation: "For None comparison, use 'is' operator."

  // ==================== MEDIUM LEVELS (31-60) ====================
  },
  {
    id: 331,
    title: "Mutable Default Argument",
    difficulty: "Medium",
    language: "Python",
    description: "Default list argument shared across calls.",
    buggyCode: `def add_item(item, items=[]):
    items.append(item)
    return items`,
    fixedCode: `def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items`,
    hint: "Default arguments are evaluated only once.",
    bugLine: 1,
    explanation: "Default list persists between function calls."
  },
  {
    id: 332,
    title: "Shallow Copy Issue",
    difficulty: "Medium",
    language: "Python",
    description: "Modifying nested list affects original.",
    buggyCode: `original = [[1, 2], [3, 4]]
copy = original[:]
copy[0][0] = 99
print(original)  # [[99, 2], [3, 4]]`,
    fixedCode: `import copy
original = [[1, 2], [3, 4]]
copy = copy.deepcopy(original)
copy[0][0] = 99
print(original)  # [[1, 2], [3, 4]]`,
    hint: "Slicing creates shallow copy only.",
    bugLine: 2,
    explanation: "Nested lists need deepcopy for true copy."
  },
  {
    id: 333,
    title: "Class Variable vs Instance Variable",
    difficulty: "Medium",
    language: "Python",
    description: "Confusing class and instance variables.",
    buggyCode: `class Dog:
    tricks = []
    
    def add_trick(self, trick):
        self.tricks.append(trick)

d1 = Dog()
d2 = Dog()
d1.add_trick("roll over")
print(d2.tricks)  # ['roll over'] - unexpected!`,
    fixedCode: `class Dog:
    def __init__(self):
        self.tricks = []
    
    def add_trick(self, trick):
        self.tricks.append(trick)

d1 = Dog()
d2 = Dog()
d1.add_trick("roll over")
print(d2.tricks)  # []`,
    hint: "Initialize instance variables in __init__.",
    bugLine: 2,
    explanation: "tricks is class variable shared by all instances."
  },
  {
    id: 334,
    title: "Integer vs Float Division",
    difficulty: "Medium",
    language: "Python",
    description: "Using wrong division operator.",
    buggyCode: `result = 10 / 3
print(result)  # 3.333..., not 3`,
    fixedCode: `result = 10 // 3
print(result)  # 3`,
    hint: "Use // for integer division.",
    bugLine: 1,
    explanation: "/ returns float, // returns integer quotient."
  },
  {
    id: 335,
    title: "List Modification During Iteration",
    difficulty: "Medium",
    language: "Python",
    description: "Modifying list while iterating over it.",
    buggyCode: `numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Skips elements`,
    fixedCode: `numbers = [1, 2, 3, 4, 5]
numbers = [num for num in numbers if num % 2 != 0]`,
    hint: "Create new list instead of modifying during iteration.",
    bugLine: 3,
    explanation: "Modifying list while iterating causes skipped elements."
  },
  {
    id: 336,
    title: "Default Parameter Evaluation",
    difficulty: "Medium",
    language: "Python",
    description: "Function call in default parameter.",
    buggyCode: `import time

def log(message, when=time.time()):
    print(f"{when}: {message}")

log("First")
time.sleep(1)
log("Second")  # Same timestamp`,
    fixedCode: `import time

def log(message, when=None):
    if when is None:
        when = time.time()
    print(f"{when}: {message}")

log("First")
time.sleep(1)
log("Second")`,
    hint: "Default arguments evaluated at definition time.",
    bugLine: 3,
    explanation: "time.time() called once at function definition."
  },
  {
    id: 337,
    title: "String Formatting Type Error",
    difficulty: "Medium",
    language: "Python",
    description: "Wrong format specifier in f-string.",
    buggyCode: `value = "123"
print(f"Number: {value:d}")`,
    fixedCode: `value = "123"
print(f"Number: {int(value):d}")`,
    hint: "Convert to int before using :d format.",
    bugLine: 2,
    explanation: "Can't use :d format on string."
  },
  {
    id: 338,
    title: "Generator Exhaustion",
    difficulty: "Medium",
    language: "Python",
    description: "Using generator after it's exhausted.",
    buggyCode: `squares = (x**2 for x in range(5))
print(list(squares))  # [0, 1, 4, 9, 16]
print(list(squares))  # []`,
    fixedCode: `squares = (x**2 for x in range(5))
squares_list = list(squares)
print(squares_list)  # [0, 1, 4, 9, 16]
print(squares_list)  # Same list`,
    hint: "Generators can only be iterated once.",
    bugLine: 3,
    explanation: "Generator exhausted after first iteration."
  },
  {
    id: 339,
    title: "Mutable Set Element",
    difficulty: "Medium",
    language: "Python",
    description: "Trying to add mutable object to set.",
    buggyCode: `items = set()
items.add([1, 2])`,
    fixedCode: `items = set()
items.add((1, 2))  # Use tuple instead`,
    hint: "Set elements must be hashable (immutable).",
    bugLine: 2,
    explanation: "Lists are mutable and cannot be set elements."
  },
  {
    id: 340,
    title: "Method Overriding Issue",
    difficulty: "Medium",
    language: "Python",
    description: "Parent method not called in override.",
    buggyCode: `class Parent:
    def setup(self):
        print("Parent setup")

class Child(Parent):
    def setup(self):
        print("Child setup")

c = Child()
c.setup()  # Only Child setup`,
    fixedCode: `class Parent:
    def setup(self):
        print("Parent setup")

class Child(Parent):
    def setup(self):
        super().setup()
        print("Child setup")

c = Child()
c.setup()`,
    hint: "Use super() to call parent method.",
    bugLine: 7,
    explanation: "Need super() to also execute parent setup."
  },
  {
    id: 341,
    title: "Dictionary Key Order",
    difficulty: "Medium",
    language: "Python",
    description: "Assuming dictionary order in Python <3.7.",
    buggyCode: `# Python < 3.7
data = {"z": 1, "a": 2, "b": 3}
keys = list(data.keys())
print(keys)  # Order not guaranteed`,
    fixedCode: `from collections import OrderedDict
data = OrderedDict([("z", 1), ("a", 2), ("b", 3)])
keys = list(data.keys())
print(keys)  # ['z', 'a', 'b']`,
    hint: "Use OrderedDict for guaranteed order (Python <3.7).",
    bugLine: 3,
    explanation: "Dictionary order not guaranteed in Python <3.7."
  },
  {
    id: 342,
    title: "Float Comparison Issue",
    difficulty: "Medium",
    language: "Python",
    description: "Direct float comparison causes issues.",
    buggyCode: `result = 0.1 + 0.2
if result == 0.3:
    print("Equal")  # Never prints`,
    fixedCode: `result = 0.1 + 0.2
if abs(result - 0.3) < 1e-10:
    print("Equal")`,
    hint: "Use tolerance for float comparisons.",
    bugLine: 2,
    explanation: "Floating point precision causes 0.1+0.2 != 0.3 exactly."
  },
  {
    id: 343,
    title: "List Slicing with Step",
    difficulty: "Medium",
    language: "Python",
    description: "Wrong slicing with negative step.",
    buggyCode: `nums = [1, 2, 3, 4, 5]
print(nums[4:0:-1])  # [5, 4, 3, 2], missing 1`,
    fixedCode: `nums = [1, 2, 3, 4, 5]
print(nums[4::-1])  # [5, 4, 3, 2, 1]`,
    hint: "Omit end index when using negative step.",
    bugLine: 2,
    explanation: "Slice [4:0:-1] stops before index 0."
  },
  {
    id: 344,
    title: "Lambda Capturing Loop Variable",
    difficulty: "Medium",
    language: "Python",
    description: "Lambda captures final loop variable value.",
    buggyCode: `funcs = []
for i in range(3):
    funcs.append(lambda: i)
print([f() for f in funcs])  # [2, 2, 2]`,
    fixedCode: `funcs = []
for i in range(3):
    funcs.append(lambda i=i: i)  # Capture current value
print([f() for f in funcs])  # [0, 1, 2]`,
    hint: "Capture loop variable in default argument.",
    bugLine: 3,
    explanation: "Lambda captures reference to i, not value at creation."
  },
  {
    id: 345,
    title: "Multiple Inheritance MRO",
    difficulty: "Medium",
    language: "Python",
    description: "Method resolution order confusion.",
    buggyCode: `class A:
    def method(self):
        return "A"

class B(A):
    def method(self):
        return "B"

class C(A):
    def method(self):
        return "C"

class D(B, C):
    pass

d = D()
print(d.method())  # Which gets called?`,
    fixedCode: `class A:
    def method(self):
        return "A"

class B(A):
    def method(self):
        return "B"

class C(A):
    def method(self):
        return "C"

class D(C, B):  # Change order
    pass

d = D()
print(d.method())  # "C"`,
    hint: "Method resolution follows MRO (left to right).",
    bugLine: 13,
    explanation: "D(B, C) gives B.method, D(C, B) gives C.method."
  },
  {
    id: 346,
    title: "Decorator Without @wraps",
    difficulty: "Medium",
    language: "Python",
    description: "Decorator loses function metadata.",
    buggyCode: `def decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@decorator
def my_func():
    """My function"""
    pass

print(my_func.__name__)  # "wrapper"`,
    fixedCode: `from functools import wraps

def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@decorator
def my_func():
    """My function"""
    pass

print(my_func.__name__)  # "my_func"`,
    hint: "Use @wraps to preserve function metadata.",
    bugLine: 2,
    explanation: "Without @wraps, wrapper replaces function metadata."
  },
  {
    id: 347,
    title: "Exception Chaining Lost",
    difficulty: "Medium",
    language: "Python",
    description: "Original exception traceback lost.",
    buggyCode: `try:
    1 / 0
except ZeroDivisionError:
    raise ValueError("Division failed")`,
    fixedCode: `try:
    1 / 0
except ZeroDivisionError as e:
    raise ValueError("Division failed") from e`,
    hint: "Use 'from e' to preserve exception chain.",
    bugLine: 4,
    explanation: "Without 'from', original exception context lost."
  },
  {
    id: 348,
    title: "Iterator vs Iterable",
    difficulty: "Medium",
    language: "Python",
    description: "Using iterator as iterable multiple times.",
    buggyCode: `data = [1, 2, 3]
iterator = iter(data)
print(list(iterator))  # [1, 2, 3]
print(list(iterator))  # []`,
    fixedCode: `data = [1, 2, 3]
print(list(data))  # [1, 2, 3]
print(list(data))  # [1, 2, 3]`,
    hint: "Iterators exhaust, iterables don't.",
    bugLine: 4,
    explanation: "Iterator exhausted after first use."
  },
  {
    id: 349,
    title: "Context Manager Exception",
    difficulty: "Medium",
    language: "Python",
    description: "Exception in context manager cleanup.",
    buggyCode: `class Resource:
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        raise ValueError("Cleanup error")

with Resource():
    1 / 0  # Original exception suppressed`,
    fixedCode: `class Resource:
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type:
            print(f"Original: {exc_val}")
        # Don't raise new exception in __exit__`,
    hint: "Avoid raising in __exit__ to preserve original exception.",
    bugLine: 7,
    explanation: "Exception in __exit__ suppresses original exception."
  },
  {
    id: 350,
    title: "Property Setter Issue",
    difficulty: "Medium",
    language: "Python",
    description: "Property without setter when needed.",
    buggyCode: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def diameter(self):
        return 2 * self._radius

c = Circle(5)
c.diameter = 20  # Error`,
    fixedCode: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def diameter(self):
        return 2 * self._radius
    
    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

c = Circle(5)
c.diameter = 20  # Works`,
    hint: "Add setter for writeable property.",
    bugLine: 10,
    explanation: "Property without setter is read-only."
  },
  {
    id: 351,
    title: "JSON Serialization Error",
    difficulty: "Medium",
    language: "Python",
    description: "Trying to serialize non-JSON type.",
    buggyCode: `import json
data = {"value": Decimal("10.5")}
json.dumps(data)`,
    fixedCode: `import json
from decimal import Decimal

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super().default(obj)

data = {"value": Decimal("10.5")}
json.dumps(data, cls=DecimalEncoder)`,
    hint: "Create custom JSONEncoder for non-standard types.",
    bugLine: 3,
    explanation: "Decimal not JSON serializable by default."
  },
  {
    id: 352,
    title: "Thread Safety Issue",
    difficulty: "Medium",
    language: "Python",
    description: "Race condition with shared variable.",
    buggyCode: `import threading

counter = 0

def increment():
    global counter
    for _ in range(100000):
        counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)  # Not 1000000`,
    fixedCode: `import threading

counter = 0
lock = threading.Lock()

def increment():
    global counter
    for _ in range(100000):
        with lock:
            counter += 1

threads = [threading.Thread(target=increment) for _ in range(10)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)  # 1000000`,
    hint: "Use locks for thread-safe variable updates.",
    bugLine: 7,
    explanation: "Race condition without lock on counter increment."
  },
  {
    id: 353,
    title: "Generator Return Value",
    difficulty: "Medium",
    language: "Python",
    description: "Trying to get return value from generator.",
    buggyCode: `def generator():
    yield 1
    yield 2
    return 3

g = generator()
print(list(g))  # [1, 2] - return value lost`,
    fixedCode: `def generator():
    yield 1
    yield 2
    return 3

g = generator()
try:
    while True:
        value = next(g)
        print(value)
except StopIteration as e:
    print(f"Return: {e.value}")`,
    hint: "Return value available in StopIteration exception.",
    bugLine: 8,
    explanation: "Generator return value not captured by list()."
  },
  {
    id: 354,
    title: "Classmethod vs Staticmethod",
    difficulty: "Medium",
    language: "Python",
    description: "Using staticmethod when classmethod needed.",
    buggyCode: `class Person:
    species = "Human"
    
    @staticmethod
    def get_species():
        return Person.species

class Employee(Person):
    species = "Worker"

print(Employee.get_species())  # "Human" not "Worker"`,
    fixedCode: `class Person:
    species = "Human"
    
    @classmethod
    def get_species(cls):
        return cls.species

class Employee(Person):
    species = "Worker"

print(Employee.get_species())  # "Worker"`,
    hint: "Use @classmethod to access class attributes.",
    bugLine: 5,
    explanation: "staticmethod doesn't receive class as first argument."
  },
  {
    id: 355,
    title: "Dictionary Merge Issue",
    difficulty: "Medium",
    language: "Python",
    description: "Overwriting dictionary values in merge.",
    buggyCode: `dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict1.update(dict2)
print(dict1)  # {"a": 1, "b": 3, "c": 4}`,
    fixedCode: `from collections import ChainMap
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
result = dict(ChainMap(dict1, dict2))  # dict1 takes precedence
print(result)  # {"a": 1, "b": 2, "c": 4}`,
    hint: "Use ChainMap to control merge precedence.",
    bugLine: 3,
    explanation: "update() overwrites existing keys."
  },
  {
    id: 356,
    title: "List of Lists Creation",
    difficulty: "Medium",
    language: "Python",
    description: "Creating list of lists incorrectly.",
    buggyCode: `matrix = [[0] * 3] * 3
matrix[0][0] = 1
print(matrix)  # [[1, 0, 0], [1, 0, 0], [1, 0, 0]]`,
    fixedCode: `matrix = [[0] * 3 for _ in range(3)]
matrix[0][0] = 1
print(matrix)  # [[1, 0, 0], [0, 0, 0], [0, 0, 0]]`,
        hint: "Use list comprehension, not multiplication.",
        bugLine: 1,
        explanation: '"*" creates references to same inner list.'
  },
  
  {
    id: 357,
    title: "Namedtuple Default Values",
    difficulty: "Medium",
    language: "Python",
    description: "No default values in standard namedtuple.",
    buggyCode: `from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point()  # Error`,
    fixedCode: `from typing import NamedTuple

class Point(NamedTuple):
    x: int = 0
    y: int = 0

p = Point()  # Point(x=0, y=0)`,
    hint: "Use typing.NamedTuple for default values.",
    bugLine: 3,
    explanation: "Standard namedtuple doesn't support defaults."
  },
  {
    id: 358,
    title: "Circular Import",
    difficulty: "Medium",
    language: "Python",
    description: "Circular import between modules.",
    buggyCode: `# module_a.py
import module_b

def func_a():
    return "A" + module_b.func_b()

# module_b.py
import module_a

def func_b():
    return "B" + module_a.func_a()`,
    fixedCode: `# module_a.py
def func_a():
    from module_b import func_b
    return "A" + func_b()

# module_b.py
def func_b():
    from module_a import func_a
    return "B" + func_a()`,
    hint: "Import inside functions to avoid circular imports.",
    bugLine: 2,
    explanation: "Circular import causes ImportError."
  },
  {
    id: 359,
    title: "Async Context Manager",
    difficulty: "Medium",
    language: "Python",
    description: "Using regular with in async context.",
    buggyCode: `import aiofiles

async def read_file():
    with open("data.txt") as f:
        return f.read()  # Blocks`,
    fixedCode: `import aiofiles

async def read_file():
    async with aiofiles.open("data.txt") as f:
        return await f.read()`,
    hint: "Use async with for async context managers.",
    bugLine: 4,
    explanation: "Regular with blocks in async function."
  },
  {
    id: 360,
    title: "Metaclass Conflict",
    difficulty: "Medium",
    language: "Python",
    description: "Multiple metaclass inheritance issue.",
    buggyCode: `class MetaA(type):
    pass

class MetaB(type):
    pass

class A(metaclass=MetaA):
    pass

class B(metaclass=MetaB):
    pass

class C(A, B):  # Error: metaclass conflict
    pass`,
    fixedCode: `class MetaA(type):
    pass

class MetaB(type):
    pass

class MetaC(MetaA, MetaB):
    pass

class A(metaclass=MetaA):
    pass

class B(metaclass=MetaB):
    pass

class C(A, B, metaclass=MetaC):
    pass`,
    hint: "Create combined metaclass for multiple inheritance.",
    bugLine: 12,
    explanation: "Multiple metaclasses cause conflict."

  // ==================== HARD LEVELS (61-90) ====================
  },
  {
    id: 361,
    title: "GIL and CPU-bound Threads",
    difficulty: "Hard",
    language: "Python",
    description: "Threads not speeding up CPU-bound tasks.",
    buggyCode: `import threading
import time

def cpu_bound(n):
    count = 0
    for i in range(n):
        count += i
    return count

# Using threads for CPU-bound work
threads = []
for _ in range(4):
    t = threading.Thread(target=cpu_bound, args=(10000000,))
    threads.append(t)

start = time.time()
for t in threads: t.start()
for t in threads: t.join()
print(f"Time: {time.time() - start}")`,
    fixedCode: `import multiprocessing
import time

def cpu_bound(n):
    count = 0
    for i in range(n):
        count += i
    return count

# Using processes for CPU-bound work
processes = []
for _ in range(4):
    p = multiprocessing.Process(target=cpu_bound, args=(10000000,))
    processes.append(p)

start = time.time()
for p in processes: p.start()
for p in processes: p.join()
print(f"Time: {time.time() - start}")`,
    hint: "Use multiprocessing for CPU-bound parallelism.",
    bugLine: 12,
    explanation: "GIL prevents true CPU parallelism with threads."
  },
  {
    id: 362,
    title: "Reference Cycle with __del__",
    difficulty: "Hard",
    language: "Python",
    description: "__del__ preventing garbage collection.",
    buggyCode: `class Node:
    def __init__(self):
        self.neighbor = None
    
    def __del__(self):
        print(f"Deleting {self}")

# Create reference cycle
a = Node()
b = Node()
a.neighbor = b
b.neighbor = a

# Objects not garbage collected`,
    fixedCode: `import weakref

class Node:
    def __init__(self):
        self._neighbor = None
    
    @property
    def neighbor(self):
        return self._neighbor() if self._neighbor else None
    
    @neighbor.setter
    def neighbor(self, value):
        self._neighbor = weakref.ref(value)
    
    def __del__(self):
        print(f"Deleting {self}")

# No strong reference cycle
a = Node()
b = Node()
a.neighbor = b
b.neighbor = a`,
    hint: "Use weak references to avoid reference cycles.",
    bugLine: 5,
    explanation: "__del__ + reference cycle prevents garbage collection."
  },
  {
    id: 363,
    title: "Monkey Patching Built-ins",
    difficulty: "Hard",
    language: "Python",
    description: "Unexpected behavior after patching built-ins.",
    buggyCode: `import json

# Monkey patch json.dumps
original_dumps = json.dumps
json.dumps = lambda obj: "PATCHED"

print(json.dumps([1, 2, 3]))  # "PATCHED"

# Other modules using json are affected
import requests  # Uses json internally`,
    fixedCode: `import json
from unittest.mock import patch

# Use context manager for local patch
with patch('json.dumps', return_value="PATCHED"):
    print(json.dumps([1, 2, 3]))  # "PATCHED"

# Outside context, original restored
print(json.dumps([1, 2, 3]))  # '[1, 2, 3]'`,
    hint: "Use unittest.mock.patch for controlled monkey patching.",
    bugLine: 5,
    explanation: "Global monkey patching affects entire program."
  },
  {
    id: 364,
    title: "Meta-programming with __getattr__",
    difficulty: "Hard",
    language: "Python",
    description: "__getattr__ causing infinite recursion.",
    buggyCode: `class DynamicObject:
    def __getattr__(self, name):
        return getattr(self, name.upper())`,
    fixedCode: `class DynamicObject:
    def __getattr__(self, name):
        # Store computed value to avoid recursion
        value = name.upper()
        setattr(self, name, value)
        return value`,
    hint: "Store computed attributes to prevent recursion.",
    bugLine: 3,
    explanation: "getattr() inside __getattr__ causes infinite recursion."
  },
  {
    id: 365,
    title: "C-Extension Reference Counting",
    difficulty: "Hard",
    language: "Python",
    description: "Memory leak in C extension.",
    buggyCode: `// C extension code
static PyObject* create_list(PyObject* self) {
    PyObject* list = PyList_New(0);
    // Missing INCREF for new reference
    return list;
}`,
    fixedCode: `// C extension code
static PyObject* create_list(PyObject* self) {
    PyObject* list = PyList_New(0);
    if (!list) return NULL;
    // List already has reference count of 1
    return list;
}`,
    hint: "Understand Python's reference counting in C extensions.",
    bugLine: 5,
    explanation: "PyList_New returns new reference (count=1)."
  },
  {
    id: 366,
    title: "Descriptor Protocol Confusion",
    difficulty: "Hard",
    language: "Python",
    description: "Data vs non-data descriptor priority.",
    buggyCode: `class DataDescriptor:
    def __get__(self, obj, objtype=None):
        return "descriptor"
    
    def __set__(self, obj, value):
        obj.__dict__["attr"] = value

class NonDataDescriptor:
    def __get__(self, obj, objtype=None):
        return "non-data"

class MyClass:
    attr = DataDescriptor()

obj = MyClass()
obj.__dict__["attr"] = "instance dict"
print(obj.attr)  # "instance dict" not "descriptor"`,
    fixedCode: `class DataDescriptor:
    def __get__(self, obj, objtype=None):
        return "descriptor"
    
    def __set__(self, obj, value):
        obj.__dict__["attr"] = value
    
    def __delete__(self, obj):
        pass

class MyClass:
    attr = DataDescriptor()

obj = MyClass()
obj.__dict__["attr"] = "instance dict"
print(obj.attr)  # "descriptor" (data descriptor wins)`,
    hint: "Data descriptors take priority over instance dictionary.",
    bugLine: 18,
    explanation: "Need __delete__ to make it a full data descriptor."
  },
  {
    id: 367,
    title: "Async Generator Resource Cleanup",
    difficulty: "Hard",
    language: "Python",
    description: "Async generator not properly closed.",
    buggyCode: `import aiofiles

async def read_lines():
    async with aiofiles.open("data.txt") as f:
        async for line in f:
            yield line

async def process():
    lines = read_lines()
    async for line in lines:
        print(line)
    # Generator not properly closed`,
    fixedCode: `import aiofiles

async def read_lines():
    async with aiofiles.open("data.txt") as f:
        async for line in f:
            yield line

async def process():
    async with aiofiles.open("data.txt") as f:
        async for line in f:
            print(line)
    # File automatically closed`,
    hint: "Use async with for resource management in async context.",
    bugLine: 9,
    explanation: "Async generators need explicit closing or context manager."
  },
  {
    id: 368,
    title: "Metaclass __new__ vs __init__",
    difficulty: "Hard",
    language: "Python",
    description: "Metaclass method order confusion.",
    buggyCode: `class Meta(type):
    def __init__(cls, name, bases, dct):
        super().__init__(name, bases, dct)
        cls.custom_attr = "added in init"
        # Cannot modify class creation here

class MyClass(metaclass=Meta):
    pass

print(MyClass.custom_attr)  # Works but limited`,
    fixedCode: `class Meta(type):
    def __new__(mcs, name, bases, dct):
        # Modify class dictionary before creation
        dct["custom_attr"] = "added in new"
        return super().__new__(mcs, name, bases, dct)
    
    def __init__(cls, name, bases, dct):
        super().__init__(name, bases, dct)
        # Post-creation modifications

class MyClass(metaclass=Meta):
    pass

print(MyClass.custom_attr)`,
    hint: "Use __new__ for pre-creation, __init__ for post-creation.",
    bugLine: 3,
    explanation: "__init__ runs after class is created, __new__ before."
  },
  {
    id: 369,
    title: "CPython Implementation Detail",
    difficulty: "Hard",
    language: "Python",
    description: "Relying on CPython's object interning.",
    buggyCode: `a = 256
b = 256
print(a is b)  # True (small integers interned)

c = 257
d = 257
print(c is d)  # False (not guaranteed)`,
    fixedCode: `a = 256
b = 256
print(a == b)  # Always True

c = 257
d = 257
print(c == d)  # Always True`,
    hint: "Use == for value comparison, not is for identity.",
    bugLine: 8,
    explanation: "Integer interning is CPython implementation detail."
  },
  {
    id: 370,
    title: "Subinterpreters Memory",
    difficulty: "Hard",
    language: "Python",
    description: "Memory not shared between subinterpreters.",
    buggyCode: `# Attempting to share memory between subinterpreters
import _xxsubinterpreters as interpreters

def worker():
    import sys
    return sys.version

interp_id = interpreters.create()
interpreters.run_string(interp_id, "x = 42")
# Cannot access x from main interpreter`,
    fixedCode: `import multiprocessing
import pickle

def worker(queue):
    result = 42
    queue.put(result)

if __name__ == "__main__":
    queue = multiprocessing.Queue()
    p = multiprocessing.Process(target=worker, args=(queue,))
    p.start()
    result = queue.get()
    p.join()
    print(f"Result: {result}")`,
    hint: "Use multiprocessing with queues for data sharing.",
    bugLine: 11,
    explanation: "Subinterpreters have separate memory spaces."
  },
  {
    id: 371,
    title: "GC Finalizer Order",
    difficulty: "Hard",
    language: "Python",
    description: "__del__ called in unpredictable order.",
    buggyCode: `class Resource:
    def __init__(self, name):
        self.name = name
    
    def __del__(self):
        print(f"Closing {self.name}")

class Manager:
    def __init__(self):
        self.resource = Resource("managed")
    
    def __del__(self):
        print("Manager deleted")
        # Resource might already be deleted

m = Manager()
del m`,
    fixedCode: `class Resource:
    def __init__(self, name):
        self.name = name
    
    def close(self):
        print(f"Closing {self.name}")

class Manager:
    def __init__(self):
        self.resource = Resource("managed")
    
    def close(self):
        self.resource.close()
    
    def __enter__(self):
        return self
    
    def __exit__(self, *args):
        self.close()

with Manager() as m:
    pass  # Resource properly closed`,
    hint: "Use context managers for deterministic cleanup.",
    bugLine: 16,
    explanation: "__del__ order not guaranteed during garbage collection."
  },
  {
    id: 372,
    title: "Import System Hooks",
    difficulty: "Hard",
    language: "Python",
    description: "Custom import hook interfering with stdlib.",
    buggyCode: `import sys
import importlib.abc

class CustomLoader(importlib.abc.Loader):
    def create_module(self, spec):
        return None
    
    def exec_module(self, module):
        module.__dict__["custom"] = "injected"

sys.meta_path.insert(0, CustomLoader())
# Now all imports go through custom loader`,
    fixedCode: `import sys
import importlib.abc
import importlib.util

class CustomLoader(importlib.abc.Loader):
    def create_module(self, spec):
        return None
    
    def exec_module(self, module):
        if spec.name.startswith("mypackage."):
            module.__dict__["custom"] = "injected"

# Add loader with proper finder
class CustomFinder(importlib.abc.MetaPathFinder):
    def find_spec(self, fullname, path, target=None):
        if fullname.startswith("mypackage."):
            return importlib.util.spec_from_loader(fullname, CustomLoader())

sys.meta_path.insert(0, CustomFinder())`,
    hint: "Implement both finder and loader for import hooks.",
    bugLine: 13,
    explanation: "Loader without proper finder intercepts all imports."
  },
  {
    id: 373,
    title: "Stack Frames and Tracing",
    difficulty: "Hard",
    language: "Python",
    description: "Tracing causing performance issues.",
    buggyCode: `import sys

def trace_calls(frame, event, arg):
    print(f"{event} at {frame.f_code.co_name}")
    return trace_calls

sys.settrace(trace_calls)
# Now every function call is traced - huge overhead`,
    fixedCode: `import sys
import contextlib

@contextlib.contextmanager
def trace_calls_limited():
    call_count = 0
    
    def tracer(frame, event, arg):
        nonlocal call_count
        if call_count > 1000:
            return None  # Stop tracing
        if event == 'call':
            call_count += 1
            print(f"Call #{call_count}: {frame.f_code.co_name}")
        return tracer
    
    old_trace = sys.gettrace()
    sys.settrace(tracer)
    try:
        yield
    finally:
        sys.settrace(old_trace)

with trace_calls_limited():
    # Code to trace
    pass`,
    hint: "Limit tracing scope and add exit conditions.",
    bugLine: 8,
    explanation: "Unlimited tracing causes massive performance overhead."
  },
  {
    id: 374,
    title: "C API Error Propagation",
    difficulty: "Hard",
    language: "Python",
    description: "Not checking Python C API return values.",
    buggyCode: `// C extension
PyObject* bad_function(PyObject* self) {
    PyObject* obj = PyLong_FromLong(42);
    // What if allocation fails?
    Py_INCREF(obj);  // Double INCREF if obj is NULL
    return obj;
}`,
    fixedCode: `// C extension
PyObject* safe_function(PyObject* self) {
    PyObject* obj = PyLong_FromLong(42);
    if (!obj) {
        return NULL;  // Propagate error
    }
    // obj already has reference count 1
    return obj;
}`,
    hint: "Always check return values from Python C API functions.",
    bugLine: 5,
    explanation: "PyLong_FromLong returns NULL on failure."
  },
  {
    id: 375,
    title: "Bytecode Manipulation",
    difficulty: "Hard",
    language: "Python",
    description: "Direct bytecode manipulation risks.",
    buggyCode: `import types
import dis

def func():
    return 42

# Modify bytecode directly
code = func.__code__
new_code = types.CodeType(
    code.co_argcount,
    code.co_kwonlyargcount,
    code.co_nlocals,
    code.co_stacksize,
    code.co_flags,
    b'\\x00\\x00',  # Invalid bytecode
    code.co_consts,
    code.co_names,
    code.co_varnames,
    code.co_filename,
    code.co_name,
    code.co_firstlineno,
    code.co_lnotab,
    code.co_freevars,
    code.co_cellvars
)
func.__code__ = new_code
func()  # Segfault or undefined behavior`,
    fixedCode: `import ast
import types

def func():
    return 42

# Safe AST manipulation
tree = ast.parse("def new_func(): return 84")
code_obj = compile(tree, '<ast>', 'exec')
new_func = types.FunctionType(
    code_obj.co_consts[0],
    func.__globals__,
    func.__name__,
    func.__defaults__,
    func.__closure__
)

result = new_func()  # 84`,
    hint: "Use AST for safe code transformation.",
    bugLine: 21,
    explanation: "Direct bytecode manipulation can crash interpreter."
  },
  {
    id: 376,
    title: "Signal Handlers and C Extensions",
    difficulty: "Hard",
    language: "Python",
    description: "Signal handler in C extension deadlocking.",
    buggyCode: `// C extension signal handler
#include <Python.h>
#include <signal.h>

PyObject* global_lock;

static void handler(int sig) {
    PyGILState_STATE gstate;
    gstate = PyGILState_Ensure();
    // Might deadlock if main thread holds lock
    PyGILState_Release(gstate);
}`,
    fixedCode: `// Safe signal handling in C extension
#include <Python.h>
#include <signal.h>
#include <stdatomic.h>

static volatile sig_atomic_t signal_received = 0;

static void handler(int sig) {
    signal_received = 1;  // Just set flag
}

// Check flag in Python code
static PyObject* check_signal(PyObject* self) {
    if (signal_received) {
        signal_received = 0;
        Py_RETURN_TRUE;
    }
    Py_RETURN_FALSE;
}`,
    hint: "Keep signal handlers minimal; check flags in Python.",
    bugLine: 10,
    explanation: "Acquiring GIL in signal handler can cause deadlock."
  },
  {
    id: 377,
    title: "Async Cancellation Propagation",
    difficulty: "Hard",
    language: "Python",
    description: "Cancelled tasks not propagating cancellation.",
    buggyCode: `import asyncio

async def worker():
    try:
        await asyncio.sleep(10)
    except asyncio.CancelledError:
        print("Cancelled")
        # Not re-raising - cancellation stops here

async def main():
    task = asyncio.create_task(worker())
    await asyncio.sleep(0.1)
    task.cancel()
    await task  # Task completes normally`,
    fixedCode: `import asyncio

async def worker():
    try:
        await asyncio.sleep(10)
    except asyncio.CancelledError:
        print("Cancelled")
        raise  # Re-raise to propagate cancellation
    
    # Or use finally for cleanup
    finally:
        print("Cleanup")

async def main():
    task = asyncio.create_task(worker())
    await asyncio.sleep(0.1)
    task.cancel()
    try:
        await task
    except asyncio.CancelledError:
        print("Task cancelled successfully")`,
    hint: "Always re-raise CancelledError unless intentionally swallowing.",
    bugLine: 7,
    explanation: "CancelledError must be re-raised to propagate cancellation."
  },
  {
    id: 378,
    title: "Custom Hash Collision Attack",
    difficulty: "Hard",
    language: "Python",
    description: "Poor hash function enabling DoS attacks.",
    buggyCode: `class BadHash:
    def __init__(self, value):
        self.value = value
    
    def __hash__(self):
        return 1  # Constant hash - terrible!

# Many BadHash objects in dict cause O(n) lookups
data = {BadHash(i): i for i in range(10000)}`,
    fixedCode: `import hashlib

class GoodHash:
    def __init__(self, value):
        self.value = value
    
    def __hash__(self):
        # Use Python's built-in hash, combine with tuple
        return hash((self.value, id(self.value)))
    
    def __eq__(self, other):
        if not isinstance(other, GoodHash):
            return False
        return self.value == other.value

# Good hash distribution
data = {GoodHash(i): i for i in range(10000)}`,
    hint: "Ensure hash function has good distribution.",
    bugLine: 7,
    explanation: "Constant hash causes hash collision DoS vulnerability."
  },
  {
    id: 379,
    title: "Recursive os.walk Symlink Loop",
    difficulty: "Hard",
    language: "Python",
    description: "Infinite recursion with symbolic links.",
    buggyCode: `import os

for root, dirs, files in os.walk("/some/path"):
    for file in files:
        print(os.path.join(root, file))
# May infinite loop with symlink cycles`,
    fixedCode: `import os

for root, dirs, files in os.walk("/some/path", followlinks=False):
    for file in files:
        print(os.path.join(root, file))
    
    # Remove symlinks from dirs to avoid following
    dirs[:] = [d for d in dirs if not os.path.islink(os.path.join(root, d))]`,
    hint: "Handle symlinks carefully in directory traversal.",
    bugLine: 3,
    explanation: "os.walk may follow symlinks creating infinite cycles."
  },
  {
    id: 380,
    title: "Thread-local Storage Cleanup",
    difficulty: "Hard",
    language: "Python",
    description: "Thread-local memory not cleaned up.",
    buggyCode: `import threading

local_data = threading.local()

def worker():
    local_data.value = [0] * 1000000  # Large list
    # Thread ends, but local storage persists

threads = []
for _ in range(100):
    t = threading.Thread(target=worker)
    threads.append(t)
    t.start()

for t in threads:
    t.join()
# Memory not freed until thread local object dies`,
    fixedCode: `import threading
import weakref

class ThreadLocalWithCleanup:
    def __init__(self):
        self._locals = weakref.WeakKeyDictionary()
    
    def get(self):
        thread = threading.current_thread()
        if thread not in self._locals:
            self._locals[thread] = {}
        return self._locals[thread]

local_data = ThreadLocalWithCleanup()

def worker():
    data = local_data.get()
    data["value"] = [0] * 1000000
    # Thread object cleanup releases memory

# Or use context manager
class ThreadLocalContext:
    def __enter__(self):
        self.data = {}
        threading.current_thread().context_data = self.data
        return self.data
    
    def __exit__(self, *args):
        del threading.current_thread().context_data`,
    hint: "Use weak references for thread-local storage cleanup.",
    bugLine: 5,
    explanation: "threading.local() keeps references preventing garbage collection."
  },
  {
    id: 381,
    title: "Database Connection Pool Starvation",
    difficulty: "Hard",
    language: "Python",
    description: "Not releasing database connections.",
    buggyCode: `import sqlite3

class Database:
    def __init__(self):
        self.conn = sqlite3.connect(":memory:")
    
    def query(self, sql):
        cursor = self.conn.cursor()
        cursor.execute(sql)
        return cursor.fetchall()
    
    # Missing close method

# Many instances created, connections never closed`,
    fixedCode: `import sqlite3
import threading
from contextlib import contextmanager

class DatabasePool:
    def __init__(self, max_connections=10):
        self.max_connections = max_connections
        self._connections = []
        self._lock = threading.Lock()
        self._semaphore = threading.Semaphore(max_connections)
    
    @contextmanager
    def get_connection(self):
        self._semaphore.acquire()
        try:
            with self._lock:
                if not self._connections:
                    conn = sqlite3.connect(":memory:")
                else:
                    conn = self._connections.pop()
            yield conn
            with self._lock:
                if len(self._connections) < self.max_connections:
                    self._connections.append(conn)
                else:
                    conn.close()
        finally:
            self._semaphore.release()`,
    hint: "Use connection pooling with context managers.",
    bugLine: 10,
    explanation: "Database connections are limited resources."
  },
  {
    id: 382,
    title: "Circular Import with Type Hints",
    difficulty: "Hard",
    language: "Python",
    description: "Type hints causing circular imports.",
    buggyCode: `# user.py
from post import Post

class User:
    def __init__(self):
        self.posts: list[Post] = []

# post.py
from user import User

class Post:
    def __init__(self):
        self.author: User = None`,
    fixedCode: `# user.py
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from post import Post

class User:
    def __init__(self):
        self.posts: list[Post] = []

# post.py
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from user import User

class Post:
    def __init__(self):
        self.author: User = None`,
    hint: "Use TYPE_CHECKING and string annotations for circular imports.",
    bugLine: 3,
    explanation: "Direct import in type hints causes circular import."
  },
  {
    id: 383,
    title: "Memory-mapped File Overflow",
    difficulty: "Hard",
    language: "Python",
    description: "Memory-mapped file exceeding address space.",
    buggyCode: `import mmap
import os

# Create huge file
with open("huge.bin", "wb") as f:
    f.seek(1024**4 - 1)  # 1 TB
    f.write(b"\\x00")

# Try to map entire file
with open("huge.bin", "r+b") as f:
    # May fail on 32-bit or limited memory
    mm = mmap.mmap(f.fileno(), 0)`,
    fixedCode: `import mmap
import os

def process_large_file(filename, chunk_size=1024*1024*1024):  # 1GB chunks
    file_size = os.path.getsize(filename)
    with open(filename, "r+b") as f:
        offset = 0
        while offset < file_size:
            map_size = min(chunk_size, file_size - offset)
            with mmap.mmap(f.fileno(), map_size, offset=offset) as mm:
                # Process chunk
                process_chunk(mm)
            offset += map_size

def process_chunk(mmap_obj):
    # Process manageable chunk
    pass`,
    hint: "Process large files in chunks, not all at once.",
    bugLine: 12,
    explanation: "Memory mapping entire huge file may exceed address space."
  },
  {
    id: 384,
    title: "Cryptographic Randomness",
    difficulty: "Hard",
    language: "Python",
    description: "Using random module for cryptography.",
    buggyCode: `import random
import string

def generate_password(length=16):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

# Not cryptographically secure!`,
    fixedCode: `import secrets
import string

def generate_password(length=16):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(chars) for _ in range(length))

# Or use built-in password generator
def generate_secure_password(length=16):
    return secrets.token_urlsafe(length)[:length]`,
    hint: "Use secrets module for cryptographic randomness.",
    bugLine: 6,
    explanation: "random module not suitable for cryptographic use."
  },
  {
    id: 385,
    title: "PEP 479 Generator StopIteration",
    difficulty: "Hard",
    language: "Python",
    description: "StopIteration inside generator becoming RuntimeError.",
    buggyCode: `def generator():
    yield 1
    yield 2
    raise StopIteration  # Becomes RuntimeError in Python 3.7+
    yield 3  # Never reached

for value in generator():
    print(value)`,
    fixedCode: `def generator():
    yield 1
    yield 2
    return  # Use return instead
    yield 3  # Never reached

def generator_with_values():
    yield 1
    yield 2
    return "Done"  # Return value available in StopIteration

g = generator_with_values()
try:
    while True:
        print(next(g))
except StopIteration as e:
    print(f"Returned: {e.value}")`,
    hint: "Use return instead of raising StopIteration in generators.",
    bugLine: 4,
    explanation: "PEP 479: StopIteration inside generator becomes RuntimeError."
  },
  {
    id: 386,
    title: "Async Timeout with asyncio.wait_for",
    difficulty: "Hard",
    language: "Python",
    description: "Timeout not cancelling underlying task properly.",
    buggyCode: `import asyncio

async def long_operation():
    try:
        await asyncio.sleep(60)
        return "Done"
    except asyncio.CancelledError:
        # Cleanup that takes time
        await asyncio.sleep(10)
        raise

async def main():
    try:
        result = await asyncio.wait_for(long_operation(), timeout=1.0)
    except asyncio.TimeoutError:
        print("Timed out")
        # long_operation still running cleanup`,
    fixedCode: `import asyncio

async def long_operation():
    try:
        await asyncio.sleep(60)
        return "Done"
    except asyncio.CancelledError:
        # Fast cleanup or use shield for critical sections
        print("Fast cleanup")
        raise

async def main():
    task = asyncio.create_task(long_operation())
    try:
        result = await asyncio.wait_for(asyncio.shield(task), timeout=1.0)
    except asyncio.TimeoutError:
        print("Timed out")
        # Give cleanup time but with limit
        try:
            await asyncio.wait_for(task, timeout=2.0)
        except asyncio.TimeoutError:
            task.cancel()
            print("Forced cancel")`,
    hint: "Handle cleanup in cancelled tasks carefully with timeouts.",
    bugLine: 15,
    explanation: "wait_for cancels task but cleanup may still run."
  },
  {
    id: 387,
    title: "DLL/SO Loading on Windows",
    difficulty: "Hard",
    language: "Python",
    description: "C extension DLL loading issues on Windows.",
    buggyCode: `# setup.py for C extension on Windows
from distutils.core import setup, Extension

module = Extension('mymodule',
                  sources=['mymodule.c'],
                  libraries=['user32', 'gdi32'])  # Windows libs

setup(name='mymodule',
      ext_modules=[module])
# May fail if DLL not in PATH`,
    fixedCode: `# setup.py with proper Windows support
from setuptools import setup, Extension
import os

# Add Windows-specific compilation args
extra_compile_args = []
extra_link_args = []
if os.name == 'nt':
    extra_compile_args = ['/D_WIN32_WINNT=0x0600']
    extra_link_args = ['/SUBSYSTEM:CONSOLE']

module = Extension('mymodule',
                  sources=['mymodule.c'],
                  libraries=['user32', 'gdi32'],
                  extra_compile_args=extra_compile_args,
                  extra_link_args=extra_link_args)

setup(name='mymodule',
      ext_modules=[module])`,
    hint: "Handle Windows-specific compilation and linking.",
    bugLine: 7,
    explanation: "Windows requires proper subsystem and DLL loading."
  },
  {
    id: 388,
    title: "Pickle Security Vulnerability",
    difficulty: "Hard",
    language: "Python",
    description: "Unsafe pickle loading enabling code execution.",
    buggyCode: `import pickle

def load_data(filename):
    with open(filename, 'rb') as f:
        return pickle.load(f)  # UNSAFE!

# Attacker can create malicious pickle file`,
    fixedCode: `import pickle
import hmac
import hashlib

SECRET_KEY = b'your-secret-key'

def save_data(data, filename):
    pickled = pickle.dumps(data)
    signature = hmac.new(SECRET_KEY, pickled, hashlib.sha256).digest()
    with open(filename, 'wb') as f:
        f.write(signature + pickled)

def load_data(filename):
    with open(filename, 'rb') as f:
        signature = f.read(32)
        pickled = f.read()
    
    expected = hmac.new(SECRET_KEY, pickled, hashlib.sha256).digest()
    if not hmac.compare_digest(signature, expected):
        raise ValueError("Invalid signature")
    
    return pickle.loads(pickled)

# Or use json for untrusted data`,
    hint: "Never unpickle untrusted data; use signing or avoid pickle.",
    bugLine: 5,
    explanation: "pickle can execute arbitrary code during unpickling."
  },
  {
    id: 389,
    title: "Event Loop in Subprocess",
    difficulty: "Hard",
    language: "Python",
    description: "Creating new event loop in subprocess.",
    buggyCode: `import asyncio
import multiprocessing

async def coro():
    await asyncio.sleep(1)
    return 42

def worker():
    # New process, needs new event loop
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    result = loop.run_until_complete(coro())
    print(result)

p = multiprocessing.Process(target=worker)
p.start()
p.join()`,
    fixedCode: `import asyncio
import multiprocessing

async def coro():
    await asyncio.sleep(1)
    return 42

def worker():
    # Use asyncio.run() which handles loop creation/cleanup
    result = asyncio.run(coro())
    print(result)

if __name__ == "__main__":
    p = multiprocessing.Process(target=worker)
    p.start()
    p.join()`,
    hint: "Use asyncio.run() for proper event loop management.",
    bugLine: 11,
    explanation: "Need to handle event loop lifecycle properly in subprocess."
  },
  {
    id: 390,
    title: "Abstract Base Class Registration",
    difficulty: "Hard",
    language: "Python",
    description: "Virtual subclass registration timing issue.",
    buggyCode: `from abc import ABC, abstractmethod
from collections.abc import Sized

class MyCollection:
    def __len__(self):
        return 42

# Register after isinstance checks
print(isinstance(MyCollection(), Sized))  # False

Sized.register(MyCollection)
print(isinstance(MyCollection(), Sized))  # True

# But abstract methods not enforced`,
    fixedCode: `from abc import ABCMeta, abstractmethod
from collections.abc import Sized

class MyCollection(metaclass=ABCMeta):
    @abstractmethod
    def __len__(self):
        pass
    
    def other_method(self):
        return "implementation"

class ConcreteCollection(MyCollection):
    def __len__(self):
        return 42

# Or use proper inheritance
class BetterCollection(Sized):
    def __len__(self):
        return 42
    
    def __iter__(self):
        return iter([])`,
    hint: "Use proper inheritance or metaclass for ABC compliance.",
    bugLine: 11,
    explanation: "register() makes isinstance work but doesn't enforce methods."
  }
];