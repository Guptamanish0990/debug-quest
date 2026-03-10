export const LEVELS_RUBY = [
  {
    id: 611,
    title: "Undefined Variable",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using variable before initialization.",
    buggyCode: `puts name
name = "Alice"`,
    fixedCode: `name = "Alice"
puts name`,
    hint: "Variables must be defined before use.",
    bugLine: 1,
    explanation: "Local variables must be assigned before being referenced."
  },

  {
    id: 612,
    title: "Wrong String Interpolation",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using single quotes for string interpolation.",
    buggyCode: `name = "Alice"
puts 'Hello, #{name}'`,
    fixedCode: `name = "Alice"
puts "Hello, #{name}"`,
    hint: "String interpolation only works with double quotes.",
    bugLine: 2,
    explanation: "Single quotes treat #{...} literally."
  },

  {
    id: 613,
    title: "Incorrect Comparison Operator",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using = instead of == in condition.",
    buggyCode: `x = 5
if x = 10
  puts "x is 10"
end`,
    fixedCode: `x = 5
if x == 10
  puts "x is 10"
end`,
    hint: "= is assignment, == is comparison.",
    bugLine: 2,
    explanation: "Use == for equality comparison."
  },

  {
    id: 614,
    title: "Missing End for If Statement",
    difficulty: "Easy",
    language: "Ruby",
    description: "If statement missing end keyword.",
    buggyCode: `x = 5
if x > 0
  puts "Positive"
`,
    fixedCode: `x = 5
if x > 0
  puts "Positive"
end`,
    hint: "All blocks in Ruby must end with 'end'.",
    bugLine: 2,
    explanation: "Add 'end' to close the if statement."
  },

  {
    id: 615,
    title: "Wrong Array Method",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using length instead of size.",
    buggyCode: `arr = [1, 2, 3]
puts arr.length`,
    fixedCode: `arr = [1, 2, 3]
puts arr.size`,
    hint: "Both length and size work, but check context.",
    bugLine: 2,
    explanation: "Actually both work! This is a trick question - both are valid."
  },

  {
    id: 616,
    title: "Incorrect Integer Division",
    difficulty: "Easy",
    language: "Ruby",
    description: "Integer division returning integer instead of float.",
    buggyCode: `result = 5 / 2
puts result # Outputs 2, not 2.5`,
    fixedCode: `result = 5 / 2.0
puts result`,
    hint: "Make one operand a float.",
    bugLine: 1,
    explanation: "Integer division truncates. Use at least one float operand."
  },

  {
    id: 617,
    title: "Wrong Range Syntax",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using wrong characters for range.",
    buggyCode: `range = 1..5
puts range.include?(5)`,
    fixedCode: `range = 1..5
puts range.include?(5)`,
    hint: "Actually this code is correct! Check carefully.",
    bugLine: 1,
    explanation: "The code is actually correct - both .. and ... are valid range operators."
  },

  {
    id: 618,
    title: "String vs Symbol Confusion",
    difficulty: "Easy",
    language: "Ruby",
    description: "Trying to call string methods on symbol.",
    buggyCode: `:hello.upcase!`,
    fixedCode: `:hello.upcase.to_sym`,
    hint: "Symbols are immutable.",
    bugLine: 1,
    explanation: "Symbols can't be modified in place. Use upcase and convert back to symbol."
  },

  {
    id: 619,
    title: "Incorrect Each Syntax",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong syntax for each block.",
    buggyCode: `[1,2,3].each |n|
  puts n
end`,
    fixedCode: `[1,2,3].each do |n|
  puts n
end`,
    hint: "Use 'do...end' or curly braces for blocks.",
    bugLine: 1,
    explanation: "Missing 'do' keyword after each."
  },

  {
    id: 620,
    title: "Nil Error with Conditional Assignment",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using ||= incorrectly.",
    buggyCode: `x = nil
x ||= 10
puts x + 5`,
    fixedCode: `x = nil
x ||= 10
puts x + 5`,
    hint: "Actually this works! nil ||= 10 assigns 10.",
    bugLine: 3,
    explanation: "The code is correct - ||= assigns 10 to x if x is nil or false."
  },

  {
    id: 621,
    title: "Wrong Class Name",
    difficulty: "Easy",
    language: "Ruby",
    description: "Incorrect class naming convention.",
    buggyCode: `class myClass
  def greet
    puts "Hello"
  end
end`,
    fixedCode: `class MyClass
  def greet
    puts "Hello"
  end
end`,
    hint: "Class names should be in CamelCase.",
    bugLine: 1,
    explanation: "Class names must start with capital letter."
  },

  {
    id: 622,
    title: "Missing Require",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using library without requiring it.",
    buggyCode: `json_data = JSON.parse('{"name": "Alice"}')`,
    fixedCode: `require 'json'
json_data = JSON.parse('{"name": "Alice"}')`,
    hint: "Need to require external libraries.",
    bugLine: 1,
    explanation: "Add 'require \"json\"' to use JSON module."
  },

  {
    id: 623,
    title: "Incorrect Method Definition",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong method definition syntax.",
    buggyCode: `def greet name
  puts "Hello #{name}"
end`,
    fixedCode: `def greet(name)
  puts "Hello #{name}"
end`,
    hint: "Method parameters need parentheses.",
    bugLine: 1,
    explanation: "Add parentheses around method parameters for clarity."
  },

  {
    id: 624,
    title: "Global Variable Misuse",
    difficulty: "Easy",
    language: "Ruby",
    description: "Incorrect global variable syntax.",
    buggyCode: `$counter = 0
def increment
  counter += 1
end`,
    fixedCode: `$counter = 0
def increment
  $counter += 1
end`,
    hint: "Global variables need $ prefix.",
    bugLine: 3,
    explanation: "Use $counter to access global variable inside method."
  },

  {
    id: 625,
    title: "Incorrect Case Statement",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong case statement syntax.",
    buggyCode: `x = 2
case x
  when 1
    puts "One"
  when 2
    puts "Two"
end`,
    fixedCode: `x = 2
case x
when 1
  puts "One"
when 2
  puts "Two"
end`,
    hint: "Case when syntax doesn't need indentation after case.",
    bugLine: 4,
    explanation: "Remove extra indentation before 'when' keywords."
  },

  {
    id: 626,
    title: "String Concatenation Error",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong string concatenation.",
    buggyCode: `name = "Alice"
greeting = "Hello " + name + "!"
puts greeting`,
    fixedCode: `name = "Alice"
greeting = "Hello " + name + "!"
puts greeting`,
    hint: "Actually this works! What could be wrong?",
    bugLine: 2,
    explanation: "The code is actually correct. This is a trick question to test attention."
  },

  {
    id: 627,
    title: "Array Element Assignment Error",
    difficulty: "Easy",
    language: "Ruby",
    description: "Trying to assign to non-existent array index.",
    buggyCode: `arr = [1, 2, 3]
arr[5] = 10
puts arr[5]`,
    fixedCode: `arr = [1, 2, 3]
arr[5] = 10
puts arr[5]`,
    hint: "Ruby arrays expand automatically.",
    bugLine: 4,
    explanation: "Actually this works! Ruby arrays automatically fill with nil for missing indices."
  },

  {
    id: 628,
    title: "Incorrect Hash Access",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using wrong method to access hash values.",
    buggyCode: `hash = {a: 1, b: 2}
puts hash.fetch(:c)`,
    fixedCode: `hash = {a: 1, b: 2}
puts hash[:c]`,
    hint: "fetch raises error for missing keys.",
    bugLine: 2,
    explanation: "Use [] instead of fetch to avoid KeyError for missing keys."
  },

  {
    id: 629,
    title: "Wrong Loop Syntax",
    difficulty: "Easy",
    language: "Ruby",
    description: "Incorrect while loop syntax.",
    buggyCode: `i = 0
while i < 5 do
  puts i
  i += 1
end`,
    fixedCode: `i = 0
while i < 5
  puts i
  i += 1
end`,
    hint: "do is optional in while loops.",
    bugLine: 2,
    explanation: "Actually both work! 'do' is optional in while loops."
  },

  {
    id: 630,
    title: "Constant Reassignment Warning",
    difficulty: "Easy",
    language: "Ruby",
    description: "Reassigning constant variable.",
    buggyCode: `PI = 3.14
PI = 3.14159
puts PI`,
    fixedCode: `PI = 3.14
# PI = 3.14159  # Don't reassign constants
puts PI`,
    hint: "Constants should not be reassigned.",
    bugLine: 2,
    explanation: "Ruby warns when reassigning constants. Use different variable name."
  },

  {
    id: 631,
    title: "Incorrect File Reading",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong file reading method.",
    buggyCode: `file = File.open("data.txt")
content = file.read
puts content
file.open`,
    fixedCode: `file = File.open("data.txt")
content = file.read
puts content
file.close`,
    hint: "Files should be closed after reading.",
    bugLine: 4,
    explanation: "Use close() not open() to close file."
  },

  {
    id: 632,
    title: "Missing Rescue",
    difficulty: "Easy",
    language: "Ruby",
    description: "Begin without rescue.",
    buggyCode: `begin
  result = 10 / 0
end`,
    fixedCode: `begin
  result = 10 / 0
rescue ZeroDivisionError
  puts "Cannot divide by zero"
end`,
    hint: "Begin blocks should have rescue clause.",
    bugLine: 1,
    explanation: "Add rescue clause to handle exceptions."
  },

  {
    id: 633,
    title: "Incorrect Regex Syntax",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong regex pattern syntax.",
    buggyCode: `text = "Hello World"
if text =~ /hello/
  puts "Match found"
end`,
    fixedCode: `text = "Hello World"
if text =~ /hello/i
  puts "Match found"
end`,
    hint: "Regex is case-sensitive by default.",
    bugLine: 2,
    explanation: "Add 'i' flag for case-insensitive matching."
  },

  {
    id: 634,
    title: "Wrong Variable Scope in Block",
    difficulty: "Easy",
    language: "Ruby",
    description: "Variable not accessible outside block.",
    buggyCode: `[1,2,3].each do |n|
  result = n * 2
end
puts result`,
    fixedCode: `result = nil
[1,2,3].each do |n|
  result = n * 2
end
puts result`,
    hint: "Variables inside blocks have limited scope.",
    bugLine: 4,
    explanation: "Define variable outside block or use different approach."
  },

  {
    id: 635,
    title: "Incorrect Time Format",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong method for current time.",
    buggyCode: `puts Time.now.strftime("%Y/%m/%d")`,
    fixedCode: `puts Time.now.strftime("%Y/%m/%d")`,
    hint: "Actually this is correct!",
    bugLine: 1,
    explanation: "The code is correct. Time.now and strftime are properly used."
  },

  {
    id: 636,
    title: "Missing Array Method",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using non-existent array method.",
    buggyCode: `arr = [3, 1, 2]
puts arr.sortAscending`,
    fixedCode: `arr = [3, 1, 2]
puts arr.sort`,
    hint: "Ruby method names are lowercase with underscores.",
    bugLine: 2,
    explanation: "Method is 'sort', not 'sortAscending'."
  },

  {
    id: 637,
    title: "Incorrect Boolean Logic",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong boolean operator usage.",
    buggyCode: `x = 5
if x > 0 && x < 10
  puts "Between 0 and 10"
end`,
    fixedCode: `x = 5
if x > 0 && x < 10
  puts "Between 0 and 10"
end`,
    hint: "Actually this is correct! && is logical AND.",
    bugLine: 2,
    explanation: "The code is correct. && is the proper boolean AND operator."
  },

  {
    id: 638,
    title: "Wrong String Method",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using incorrect string manipulation method.",
    buggyCode: `text = "hello world"
puts text.capitalise`,
    fixedCode: `text = "hello world"
puts text.capitalize`,
    hint: "Check spelling of Ruby methods.",
    bugLine: 2,
    explanation: "Method is 'capitalize', not 'capitalise'."
  },

  {
    id: 639,
    title: "Incorrect Number Format",
    difficulty: "Easy",
    language: "Ruby",
    description: "Wrong number literal syntax.",
    buggyCode: `price = 1,000.50
puts price`,
    fixedCode: `price = 1000.50
puts price`,
    hint: "Ruby doesn't allow commas in number literals.",
    bugLine: 1,
    explanation: "Remove commas from number literals."
  },

  {
    id: 640,
    title: "Missing Print Newline",
    difficulty: "Easy",
    language: "Ruby",
    description: "Using print instead of puts.",
    buggyCode: `print "Hello"
print "World"`,
    fixedCode: `puts "Hello"
puts "World"`,
    hint: "print doesn't add newline automatically.",
    bugLine: 1,
    explanation: "Use puts to add newlines or add \\n manually."
  },
  {
    id: 641,
    title: "Mutable Default Arguments",
    difficulty: "Medium",
    language: "Ruby",
    description: "Using mutable object as default argument.",
    buggyCode: `def add_item(item, list = [])
  list << item
  list
end

puts add_item("a").inspect
puts add_item("b").inspect # Returns ["a", "b"] not ["b"]!`,
    fixedCode: `def add_item(item, list = nil)
  list ||= []
  list << item
  list
end

puts add_item("a").inspect
puts add_item("b").inspect`,
    hint: "Default arguments are evaluated only once.",
    bugLine: 1,
    explanation: "Same array object is reused across calls. Use nil default and assign inside method."
  },

  {
    id: 642,
    title: "Bang Method Misunderstanding",
    difficulty: "Medium",
    language: "Ruby",
    description: "Expecting bang method to always modify receiver.",
    buggyCode: `str = "hello"
str.upcase!
puts str # Works
num = 5
num.abs!
puts num # Error!`,
    fixedCode: `str = "hello"
str.upcase!
puts str

num = 5
# No abs! method for numbers
num = num.abs
puts num`,
    hint: "Not all methods have bang (!) versions.",
    bugLine: 6,
    explanation: "Numbers don't have abs! method. Bang methods typically modify receiver in place."
  },

  {
    id: 643,
    title: "Proc vs Lambda Return",
    difficulty: "Medium",
    language: "Ruby",
    description: "Difference between proc and lambda return behavior.",
    buggyCode: `def test_proc
  p = Proc.new { return "from proc" }
  p.call
  return "from method"
end

def test_lambda
  l = lambda { return "from lambda" }
  l.call
  return "from method"
end

puts test_proc # Returns "from proc"
puts test_lambda # Returns "from method"`,
    fixedCode: `def test_proc
  p = Proc.new { "from proc" } # Remove explicit return
  result = p.call
  return result
end

def test_lambda
  l = lambda { return "from lambda" }
  l.call
  return "from method"
end

puts test_proc
puts test_lambda`,
    hint: "Proc return exits containing method, lambda returns to caller.",
    bugLine: 3,
    explanation: "Remove return from proc or use lambda for expected behavior."
  },

  {
    id: 644,
    title: "String Encoding Issues",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong string encoding handling.",
    buggyCode: `str = "café"
puts str.length # Might be 5 instead of 4`,
    fixedCode: `str = "café"
puts str.bytesize
puts str.chars.length`,
    hint: "String length counts bytes by default, not characters.",
    bugLine: 2,
    explanation: "Use chars.length for character count, or ensure proper encoding."
  },

  {
    id: 645,
    title: "Incorrect Module Inclusion",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong way to include module methods.",
    buggyCode: `module MathUtils
  def square(n)
    n * n
  end
end

class Calculator
  include MathUtils
  
  def calculate
    square(5) # Error: wrong number of arguments
  end
end`,
    fixedCode: `module MathUtils
  def square(n)
    n * n
  end
end

class Calculator
  include MathUtils
  
  def calculate
    self.square(5) # Or just square(5) works too
  end
end`,
    hint: "Instance methods from module become instance methods of class.",
    bugLine: 12,
    explanation: "Actually the code is correct! square(5) should work. This tests understanding."
  },

  {
    id: 646,
    title: "Hash Default Value Behavior",
    difficulty: "Medium",
    language: "Ruby",
    description: "Unexpected behavior with default hash values.",
    buggyCode: `hash = Hash.new([])
hash[:a] << 1
hash[:b] << 2
puts hash[:a].inspect # [1, 2] not [1]!`,
    fixedCode: `hash = Hash.new { |h, k| h[k] = [] }
hash[:a] << 1
hash[:b] << 2
puts hash[:a].inspect # [1]`,
    hint: "Default value is same object for all keys.",
    bugLine: 1,
    explanation: "All keys share same array. Use block to create new array for each key."
  },

  {
    id: 647,
    title: "Frozen String Literal",
    difficulty: "Medium",
    language: "Ruby",
    description: "Modifying frozen string with frozen_string_literal enabled.",
    buggyCode: `# frozen_string_literal: true

str = "hello"
str << " world" # FrozenError!`,
    fixedCode: `# frozen_string_literal: true

str = "hello".dup
str << " world" # Works
# Or use + for concatenation
str2 = "hello" + " world"`,
    hint: "String literals are frozen with this pragma.",
    bugLine: 5,
    explanation: "Use .dup to create mutable copy or use + for concatenation."
  },

  {
    id: 648,
    title: "Incorrect Time Zone Handling",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong time zone conversion.",
    buggyCode: `require 'time'

time = Time.parse("2024-01-01 12:00:00 UTC")
puts time.localtime # Converts to system timezone`,
    fixedCode: `require 'time'

time = Time.parse("2024-01-01 12:00:00 UTC")
puts time.utc # Keep in UTC
# Or use timezone library
require 'tzinfo'`,
    hint: "Time.parse uses system timezone by default.",
    bugLine: 4,
    explanation: "Be explicit about timezone or use specialized timezone library."
  },

  {
    id: 649,
    title: "Incorrect Method Missing",
    difficulty: "Medium",
    language: "Ruby",
    description: "method_missing without respond_to_missing?.",
    buggyCode: `class Dynamic
  def method_missing(name, *args)
    "Called #{name} with #{args}"
  end
end

d = Dynamic.new
puts d.hello("world") # Works
puts d.respond_to?(:hello) # false!`,
    fixedCode: `class Dynamic
  def method_missing(name, *args)
    "Called #{name} with #{args}"
  end
  
  def respond_to_missing?(name, include_private = false)
    true
  end
end

d = Dynamic.new
puts d.hello("world")
puts d.respond_to?(:hello) # true`,
    hint: "Implement respond_to_missing? when using method_missing.",
    bugLine: 1,
    explanation: "Add respond_to_missing? for proper object behavior."
  },

  {
    id: 650,
    title: "Concurrent Modification During Iteration",
    difficulty: "Medium",
    language: "Ruby",
    description: "Modifying array while iterating.",
    buggyCode: `arr = [1, 2, 3, 4, 5]
arr.each do |n|
  arr.delete(n) if n.even?
end
puts arr.inspect # Unexpected results!`,
    fixedCode: `arr = [1, 2, 3, 4, 5]
arr.reject! { |n| n.even? }
puts arr.inspect
# Or create new array
new_arr = arr.select { |n| n.odd? }`,
    hint: "Don't modify collection while iterating.",
    bugLine: 3,
    explanation: "Use reject! or create new array instead of modifying during iteration."
  },

  {
    id: 651,
    title: "Incorrect Constant Lookup",
    difficulty: "Medium",
    language: "Ruby",
    description: "Constant resolution in nested modules.",
    buggyCode: `module A
  VALUE = 1
  module B
    VALUE = 2
    def self.get_value
      VALUE # Which VALUE? 2
    end
  end
end

puts A::B::VALUE # 2
puts A::VALUE # 1`,
    fixedCode: `module A
  VALUE = 1
  module B
    VALUE = 2
    def self.get_value
      ::A::VALUE # Explicitly specify
    end
  end
end

puts A::B.get_value # Now 1`,
    hint: "Constants are resolved relative to current module.",
    bugLine: 6,
    explanation: "Use :: prefix for absolute constant lookup."
  },

  {
    id: 652,
    title: "Incorrect File Encoding",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong file encoding specification.",
    buggyCode: `File.open("data.txt", "r") do |f|
  content = f.read
  puts content # Encoding error possible
end`,
    fixedCode: `File.open("data.txt", "r:UTF-8") do |f|
  content = f.read
  puts content
end
# Or specify encoding globally
Encoding.default_external = 'UTF-8'`,
    hint: "Always specify file encoding.",
    bugLine: 1,
    explanation: "Add encoding specification like 'r:UTF-8'."
  },

  {
    id: 653,
    title: "Wrong Exception Hierarchy",
    difficulty: "Medium",
    language: "Ruby",
    description: "Rescuing wrong exception class.",
    buggyCode: `begin
  hash = {a: 1}
  puts hash.fetch(:b)
rescue NoMethodError
  puts "Key not found" # Wrong exception!
end`,
    fixedCode: `begin
  hash = {a: 1}
  puts hash.fetch(:b)
rescue KeyError
  puts "Key not found"
end`,
    hint: "fetch raises KeyError, not NoMethodError.",
    bugLine: 5,
    explanation: "Use KeyError for Hash#fetch failures."
  },

  {
    id: 654,
    title: "Incorrect Garbage Collection",
    difficulty: "Medium",
    language: "Ruby",
    description: "Object not being garbage collected due to reference.",
    buggyCode: `class Node
  attr_accessor :next
  
  def initialize
    @next = nil
  end
end

# Circular reference
a = Node.new
b = Node.new
a.next = b
b.next = a

# a and b won't be GC'd even if we lose references
a = nil
b = nil`,
    fixedCode: `require 'weakref'

class Node
  attr_accessor :next
  
  def initialize
    @next = nil
  end
end

# Use WeakRef for circular references
a = Node.new
b = Node.new
a.next = WeakRef.new(b)
b.next = WeakRef.new(a)

a = nil
b = nil
# Now can be garbage collected`,
    hint: "Circular references prevent garbage collection.",
    bugLine: 15,
    explanation: "Use WeakRef for circular references or break cycle manually."
  },

  {
    id: 655,
    title: "Incorrect Marshal Usage",
    difficulty: "Medium",
    language: "Ruby",
    description: "Marshaling objects with singleton methods.",
    buggyCode: `obj = "hello"
def obj.custom_method
  "custom"
end

# Marshal and unmarshal
data = Marshal.dump(obj)
new_obj = Marshal.load(data)

puts new_obj.custom_method # NoMethodError!`,
    fixedCode: `# Cannot marshal objects with singleton methods
# Alternative: Use class instead of singleton
class CustomString < String
  def custom_method
    "custom"
  end
end

obj = CustomString.new("hello")
data = Marshal.dump(obj)
new_obj = Marshal.load(data)

puts new_obj.custom_method # Works`,
    hint: "Marshal cannot save singleton methods.",
    bugLine: 10,
    explanation: "Use subclassing instead of singleton methods for marshaling."
  },

  {
    id: 656,
    title: "Incorrect Thread Safety",
    difficulty: "Medium",
    language: "Ruby",
    description: "Non-thread-safe class variable access.",
    buggyCode: `class Counter
  @@count = 0
  
  def self.increment
    @@count += 1
  end
  
  def self.value
    @@count
  end
end

# Thread unsafe!
threads = []
10.times do
  threads << Thread.new { 1000.times { Counter.increment } }
end
threads.each(&:join)
puts Counter.value # May not be 10000`,
    fixedCode: `require 'thread'

class Counter
  @@count = 0
  @@mutex = Mutex.new
  
  def self.increment
    @@mutex.synchronize do
      @@count += 1
    end
  end
  
  def self.value
    @@count
  end
end

threads = []
10.times do
  threads << Thread.new { 1000.times { Counter.increment } }
end
threads.each(&:join)
puts Counter.value`,
    hint: "Class variables need synchronization in threads.",
    bugLine: 5,
    explanation: "Use Mutex to protect shared class variables."
  },

  {
    id: 657,
    title: "Incorrect Regexp Match Handling",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong regex match variable usage.",
    buggyCode: `text = "John Doe, age 30"
if text =~ /age (\d+)/
  puts "Age: #{$1}"
end

# $1 may be overwritten by other matches!`,
    fixedCode: `text = "John Doe, age 30"
if match = text.match(/age (\d+)/)
  puts "Age: #{match[1]}"
end
# Or use named captures
if match = text.match(/age (?<age>\d+)/)
  puts "Age: #{match[:age]}"
end`,
    hint: "Global regex variables are thread-unsafe.",
    bugLine: 3,
    explanation: "Use MatchData object instead of global variables."
  },

  {
    id: 658,
    title: "Incorrect YAML Parsing",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong YAML parsing of symbols.",
    buggyCode: `require 'yaml'

yaml = "---\n:symbol: value\n"
data = YAML.load(yaml)
puts data.keys.first.class # String, not Symbol!`,
    fixedCode: `require 'yaml'

yaml = "---\n:symbol: value\n"
# Use safe_load with permitted classes
data = YAML.safe_load(yaml, permitted_classes: [Symbol])
# Or use psych-specific option
require 'psych'
data = Psych.safe_load(yaml, permitted_classes: [Symbol])`,
    hint: "YAML.load may not preserve symbols by default.",
    bugLine: 5,
    explanation: "Use YAML.safe_load with permitted classes or configure Psych."
  },

  {
    id: 659,
    title: "Incorrect Method Aliasing",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong alias_method usage.",
    buggyCode: `class String
  alias_method :old_upcase, :upcase
  
  def upcase
    old_upcase + "!"
  end
end

puts "hello".upcase # "HELLO!"`,
    fixedCode: `class String
  alias_method :old_upcase, :upcase
  
  def upcase
    old_upcase + "!"
  end
end

puts "hello".upcase`,
    hint: "Actually this code works!",
    bugLine: 2,
    explanation: "The code is correct - alias_method properly creates alias."
  },

  {
    id: 660,
    title: "Incorrect Singleton Class",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong way to define singleton methods.",
    buggyCode: `obj = Object.new

class << obj
  def say_hello
    "Hello"
  end
end

puts obj.say_hello # Works`,
    fixedCode: `obj = Object.new

class << obj
  def say_hello
    "Hello"
  end
end

puts obj.say_hello`,
    hint: "Actually this is correct syntax!",
    bugLine: 3,
    explanation: "The code is correct - this is proper singleton class syntax."
  },

  {
    id: 661,
    title: "Incorrect Module Extend",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong usage of extend vs include.",
    buggyCode: `module Helper
  def help
    "Helping"
  end
end

class Worker
  include Helper
end

puts Worker.help # NoMethodError!`,
    fixedCode: `module Helper
  def help
    "Helping"
  end
end

class Worker
  extend Helper # Use extend for class methods
end

puts Worker.help
# Or use include and define class method
module Helper2
  module ClassMethods
    def help
      "Helping"
    end
  end
  
  def self.included(base)
    base.extend(ClassMethods)
  end
end`,
    hint: "include adds instance methods, extend adds class methods.",
    bugLine: 10,
    explanation: "Use extend to add module methods as class methods."
  },

  {
    id: 662,
    title: "Incorrect Date Comparison",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong date comparison with strings.",
    buggyCode: `require 'date'

date1 = Date.parse("2024-01-01")
date2 = "2024-01-02"

if date1 < date2
  puts "date1 is earlier"
end`,
    fixedCode: `require 'date'

date1 = Date.parse("2024-01-01")
date2 = Date.parse("2024-01-02")

if date1 < date2
  puts "date1 is earlier"
end`,
    hint: "Convert strings to Date objects before comparison.",
    bugLine: 6,
    explanation: "Cannot compare Date with String. Parse both to Date objects."
  },

  {
    id: 663,
    title: "Incorrect JSON Generation",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong JSON generation for custom objects.",
    buggyCode: `require 'json'

class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
end

person = Person.new("Alice", 30)
puts person.to_json # NoMethodError!`,
    fixedCode: `require 'json'

class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def to_json(*options)
    {name: @name, age: @age}.to_json(*options)
  end
end

person = Person.new("Alice", 30)
puts person.to_json`,
    hint: "Define to_json method for custom objects.",
    bugLine: 12,
    explanation: "Add to_json method that returns hash representation."
  },

  {
    id: 664,
    title: "Incorrect Dir.glob Pattern",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong glob pattern for file matching.",
    buggyCode: `# Looking for Ruby files
files = Dir.glob("*.rb")
puts files.inspect`,
    fixedCode: `# Looking for Ruby files recursively
files = Dir.glob("**/*.rb")
puts files.inspect`,
    hint: "** matches directories recursively.",
    bugLine: 2,
    explanation: "Use **/*.rb to search subdirectories recursively."
  },

  {
    id: 665,
    title: "Incorrect CSV Parsing",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong CSV parsing options.",
    buggyCode: `require 'csv'

csv_data = "name,age\nAlice,30\nBob,25"
CSV.parse(csv_data) do |row|
  puts row.inspect
end`,
    fixedCode: `require 'csv'

csv_data = "name,age\nAlice,30\nBob,25"
CSV.parse(csv_data, headers: true) do |row|
  puts row["name"] # Access by header name
end`,
    hint: "Use headers: true for CSV with header row.",
    bugLine: 4,
    explanation: "Add headers: true to parse with header names."
  },

  {
    id: 666,
    title: "Incorrect Pathname Usage",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong Pathname method usage.",
    buggyCode: `require 'pathname'

path = Pathname.new("/home/user/file.txt")
puts path.dirname + "newfile.txt"`,
    fixedCode: `require 'pathname'

path = Pathname.new("/home/user/file.txt")
new_path = path.dirname + "newfile.txt"
puts new_path
# Or use join
new_path2 = path.dirname.join("newfile.txt")`,
    hint: "Pathname#+ expects Pathname argument.",
    bugLine: 4,
    explanation: "Use join method or convert string to Pathname first."
  },

  {
    id: 667,
    title: "Incorrect OpenStruct Usage",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong OpenStruct initialization.",
    buggyCode: `require 'ostruct'

person = OpenStruct.new
person.name = "Alice"
person.age = 30
puts person.name`,
    fixedCode: `require 'ostruct'

person = OpenStruct.new(name: "Alice", age: 30)
puts person.name`,
    hint: "OpenStruct accepts hash in constructor.",
    bugLine: 3,
    explanation: "Pass attributes hash to OpenStruct.new for cleaner code."
  },

  {
    id: 668,
    title: "Incorrect URI Parsing",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong URI component access.",
    buggyCode: `require 'uri'

url = "https://example.com/path?query=1"
uri = URI.parse(url)
puts uri.hostname
puts uri.query_params # No such method!`,
    fixedCode: `require 'uri'
require 'cgi'

url = "https://example.com/path?query=1"
uri = URI.parse(url)
puts uri.host
params = CGI.parse(uri.query || "")
puts params.inspect`,
    hint: "URI doesn't parse query string automatically.",
    bugLine: 6,
    explanation: "Use CGI.parse to parse query string parameters."
  },

  {
    id: 669,
    title: "Incorrect Benchmark Usage",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong benchmark measurement.",
    buggyCode: `require 'benchmark'

result = Benchmark.measure do
  # Some code
  sleep 0.1
end
puts result.real`,
    fixedCode: `require 'benchmark'

result = Benchmark.realtime do
  # Some code
  sleep 0.1
end
puts result`,
    hint: "Use realtime for simple time measurement.",
    bugLine: 3,
    explanation: "Benchmark.measure returns Benchmark::Tms object, realtime returns Float."
  },

  {
    id: 670,
    title: "Incorrect SecureRandom",
    difficulty: "Medium",
    language: "Ruby",
    description: "Wrong SecureRandom method.",
    buggyCode: `require 'securerandom'

token = SecureRandom.random_number(16)`,
    fixedCode: `require 'securerandom'

token = SecureRandom.hex(16) # 32 hex characters
# Or for URL-safe token
token2 = SecureRandom.urlsafe_base64(16)`,
    hint: "random_number returns number, not string token.",
    bugLine: 3,
    explanation: "Use hex or urlsafe_base64 for token generation."
  },
  {
    id: 671,
    title: "Metaprogramming Method Definition",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong method definition in class_eval.",
    buggyCode: `class DynamicClass
end

method_name = "dynamic_method"
method_body = proc { "Hello from dynamic method" }

DynamicClass.class_eval do
  define_method method_name, method_body
end

obj = DynamicClass.new
puts obj.dynamic_method`,
    fixedCode: `class DynamicClass
end

method_name = "dynamic_method"
method_body = proc { "Hello from dynamic method" }

DynamicClass.class_eval do
  define_method method_name, &method_body
end

obj = DynamicClass.new
puts obj.dynamic_method`,
    hint: "Pass proc as block with &.",
    bugLine: 8,
    explanation: "Use & to convert proc to block for define_method."
  },

  {
    id: 672,
    title: "Incorrect Binding Usage",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong binding evaluation.",
    buggyCode: `def get_binding
  x = 10
  binding
end

b = get_binding
puts eval("x", b)`,
    fixedCode: `def get_binding
  x = 10
  binding
end

b = get_binding
puts eval("x", b)`,
    hint: "Actually this code works!",
    bugLine: 9,
    explanation: "The code is correct - binding captures local variables."
  },

  {
    id: 673,
    title: "Incorrect TracePoint Usage",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong TracePoint event handling.",
    buggyCode: `trace = TracePoint.new(:call) do |tp|
  puts "Called: #{tp.method_id}"
end

trace.enable

def test_method
  puts "Inside method"
end

test_method

trace.disable`,
    fixedCode: `trace = TracePoint.new(:call) do |tp|
  puts "Called: #{tp.method_id}"
end

trace.enable do
  def test_method
    puts "Inside method"
  end
  
  test_method
end`,
    hint: "TracePoint.enable with block ensures proper cleanup.",
    bugLine: 3,
    explanation: "Use enable with block to automatically disable tracing."
  },

  {
    id: 674,
    title: "Incorrect Fiber Usage",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong fiber resume/yield.",
    buggyCode: `fiber = Fiber.new do
  Fiber.yield "first"
  "second"
end

puts fiber.resume
puts fiber.resume`,
    fixedCode: `fiber = Fiber.new do |value|
  result = Fiber.yield "first: #{value}"
  "second: #{result}"
end

puts fiber.resume("start")
puts fiber.resume("continue")`,
    hint: "Fibers can pass values between resume and yield.",
    bugLine: 1,
    explanation: "Fiber.new can take block parameters for initial resume value."
  },

  {
    id: 675,
    title: "Incorrect Ractor Usage",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong ractor communication.",
    buggyCode: `# Ractor requires Ruby 3.0+
ractor = Ractor.new do
  "Hello from ractor"
end

puts ractor.take`,
    fixedCode: `# Ractor usage depends on Ruby version
# Basic pattern:
ractor = Ractor.new do
  Ractor.yield "Hello from ractor"
end

puts ractor.take`,
    hint: "Ractor.yield sends data, Ractor.receive receives.",
    bugLine: 3,
    explanation: "Use Ractor.yield inside ractor to send data out."
  },

  {
    id: 676,
    title: "Incorrect Refinement Scope",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong refinement usage scope.",
    buggyCode: `module StringExtensions
  refine String do
    def shout
      upcase + "!"
    end
  end
end

# Not using refinement
puts "hello".shout # NoMethodError!`,
    fixedCode: `module StringExtensions
  refine String do
    def shout
      upcase + "!"
    end
  end
end

# Use refinement
using StringExtensions

puts "hello".shout # "HELLO!"`,
    hint: "Refinements need 'using' statement.",
    bugLine: 12,
    explanation: "Add 'using StringExtensions' to activate refinement."
  },

  {
    id: 677,
    title: "Incorrect Method Source Location",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong method source inspection.",
    buggyCode: `class Test
  def hello
    "world"
  end
end

method = Test.instance_method(:hello)
puts method.source_location`,
    fixedCode: `class Test
  def hello
    "world"
  end
end

method = Test.instance_method(:hello)
if method.respond_to?(:source_location)
  puts method.source_location.inspect
else
  puts "Method defined in C or unavailable"
end`,
    hint: "Not all methods have source_location.",
    bugLine: 9,
    explanation: "Check if method responds to source_location, as C methods don't have it."
  },

  {
    id: 678,
    title: "Incorrect Unbound Method",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong unbound method usage.",
    buggyCode: `class A
  def say_hello
    "Hello from A"
  end
end

class B
end

method = A.instance_method(:say_hello)
B.class_eval do
  define_method :say_hello, method
end

b = B.new
puts b.say_hello`,
    fixedCode: `class A
  def say_hello
    "Hello from A"
  end
end

class B
end

method = A.instance_method(:say_hello)
B.class_eval do
  define_method :say_hello, method
end

b = B.new
puts b.say_hello`,
    hint: "Actually this works in Ruby!",
    bugLine: 12,
    explanation: "The code is correct - UnboundMethod can be used with define_method."
  },

  {
    id: 679,
    title: "Incorrect Singleton Class Inheritance",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong singleton class method inheritance.",
    buggyCode: `class Parent
  def self.class_method
    "parent class method"
  end
end

class Child < Parent
end

obj = Child.new
# Can't call class_method on instance`,
    fixedCode: `class Parent
  def self.class_method
    "parent class method"
  end
  
  # Make available to instances too
  def class_method
    self.class.class_method
  end
end

class Child < Parent
end

obj = Child.new
puts obj.class_method # Now works`,
    hint: "Class methods aren't inherited by instances.",
    bugLine: 14,
    explanation: "Define instance method that delegates to class method if needed."
  },

  {
    id: 680,
    title: "Incorrect Method Caching",
    difficulty: "Hard",
    language: "Ruby",
    description: "Method cache invalidation issue.",
    buggyCode: `class A
  def call_method
    target.hello
  end
  
  def target
    B.new
  end
end

class B
  def hello
    "Hello from B"
  end
end

class C < B
  def hello
    "Hello from C"
  end
end

a = A.new
puts a.call_method # "Hello from B"

# Monkey patch
class A
  def target
    C.new
  end
end

puts a.call_method # Still "Hello from B" due to inline cache!`,
    fixedCode: `class A
  def call_method
    # Use dynamic dispatch
    target.send(:hello)
  end
  
  def target
    B.new
  end
end

class B
  def hello
    "Hello from B"
  end
end

class C < B
  def hello
    "Hello from C"
  end
end

a = A.new
puts a.call_method

# Monkey patch
class A
  def target
    C.new
  end
end

puts a.call_method # Now "Hello from C"`,
    hint: "Ruby caches method lookups.",
    bugLine: 3,
    explanation: "Use send for dynamic dispatch or clear method cache."
  },

  {
    id: 681,
    title: "Incorrect Autoload",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong autoload usage causing circular dependency.",
    buggyCode: `# a.rb
autoload :B, 'b'

class A
  def initialize
    @b = B.new
  end
end

# b.rb
autoload :A, 'a'

class B
  def initialize
    @a = A.new # Circular!
  end
end`,
    fixedCode: `# a.rb
require_relative 'b'

class A
  def initialize
    @b = B.new
  end
end

# b.rb
class B
  def initialize(a = nil)
    @a = a
  end
end

# Or use lazy initialization
class A
  def b
    @b ||= B.new
  end
end`,
    hint: "Autoload doesn't prevent circular dependencies.",
    bugLine: 11,
    explanation: "Restructure to avoid circular dependencies or use lazy initialization."
  },

  {
    id: 682,
    title: "Incorrect Marshal Version",
    difficulty: "Hard",
    language: "Ruby",
    description: "Marshal format incompatibility between Ruby versions.",
    buggyCode: `# Ruby 3.0
data = Marshal.dump([1, 2, 3])
File.write("data.bin", data)

# Ruby 3.2 trying to load
loaded = Marshal.load(File.read("data.bin"))`,
    fixedCode: `# Use stable serialization format
require 'json'

data = [1, 2, 3].to_json
File.write("data.json", data)

# Load in any Ruby version
loaded = JSON.parse(File.read("data.json"))`,
    hint: "Marshal format changes between Ruby versions.",
    bugLine: 7,
    explanation: "Use JSON or YAML for cross-version serialization."
  },

  {
    id: 683,
    title: "Incorrect Thread Variable",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong thread-local variable usage.",
    buggyCode: `$global_var = "initial"

Thread.new do
  $global_var = "thread value"
  sleep 0.1
  puts $global_var # May be changed by other threads!
end

Thread.new do
  sleep 0.05
  $global_var = "changed"
end

sleep 0.2`,
    fixedCode: `Thread.current[:local_var] = "initial"

Thread.new do
  Thread.current[:local_var] = "thread value"
  sleep 0.1
  puts Thread.current[:local_var] # Isolated per thread
end

Thread.new do
  sleep 0.05
  Thread.current[:local_var] = "changed" # Different thread
end

sleep 0.2`,
    hint: "Use thread-local storage for per-thread data.",
    bugLine: 4,
    explanation: "Use Thread.current[] for thread-local variables instead of globals."
  },

  {
    id: 684,
    title: "Incorrect GC::Profiler",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong garbage collection profiling.",
    buggyCode: `GC::Profiler.enable

# Generate some garbage
1000.times { Object.new }

result = GC::Profiler.result
puts result`,
    fixedCode: `GC::Profiler.enable

# Generate some garbage
1000.times { Object.new }

result = GC::Profiler.report
puts result
GC::Profiler.disable`,
    hint: "Use report to get profiling data.",
    bugLine: 8,
    explanation: "Use report() to get formatted results, result() returns raw data."
  },

  {
    id: 685,
    title: "Incorrect Coverage Measurement",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong code coverage measurement.",
    buggyCode: `require 'coverage'
Coverage.start

# Code to test
def test_method
  puts "testing"
end

test_method

result = Coverage.result
puts result.inspect`,
    fixedCode: `require 'coverage'

Coverage.start(lines: true)

# Code to test
def test_method
  puts "testing"
end

test_method

result = Coverage.result
puts result.inspect`,
    hint: "Coverage needs configuration for line coverage.",
    bugLine: 3,
    explanation: "Specify coverage type like lines: true for detailed coverage."
  },

  {
    id: 686,
    title: "Incorrect RubyVM",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong RubyVM instruction sequence.",
    buggyCode: `code = "1 + 2"
iseq = RubyVM::InstructionSequence.compile(code)
puts iseq.eval`,
    fixedCode: `code = "1 + 2"
iseq = RubyVM::InstructionSequence.compile(code)
puts iseq.eval

# For more control
iseq2 = RubyVM::InstructionSequence.new(code)
puts iseq2.eval`,
    hint: "RubyVM features may be implementation-dependent.",
    bugLine: 3,
    explanation: "The code is actually correct. RubyVM features vary by implementation."
  },

  {
    id: 687,
    title: "Incorrect Method Parameters",
    difficulty: "Hard",
    language: "Ruby",
    description: "Complex method parameter parsing.",
    buggyCode: `def complex_method(a, b = 1, *args, c:, d: 2, **kwargs, &block)
  # Parameter parsing
end

complex_method(1, 2, 3, c: 4, e: 5)`,
    fixedCode: `def complex_method(a, b = 1, *args, c:, d: 2, **kwargs, &block)
  puts "a: #{a}, b: #{b}, args: #{args}, c: #{c}, d: #{d}, kwargs: #{kwargs}"
end

complex_method(1, 2, 3, c: 4, e: 5)`,
    hint: "Ruby 3.0+ has new parameter rules.",
    bugLine: 5,
    explanation: "Actually the code works! Ruby handles complex parameter lists."
  },

  {
    id: 688,
    title: "Incorrect Pattern Matching",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong pattern matching syntax.",
    buggyCode: `case [1, 2, 3]
in [a, b, c]
  puts "Matched: #{a}, #{b}, #{c}"
end`,
    fixedCode: `case [1, 2, 3]
in [a, b, c]
  puts "Matched: #{a}, #{b}, #{c}"
else
  puts "No match"
end`,
    hint: "Pattern matching may raise NoMatchingPatternError.",
    bugLine: 1,
    explanation: "Add else clause or rescue NoMatchingPatternError."
  },

  {
    id: 689,
    title: "Incorrect Data Class",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong Data class usage.",
    buggyCode: `Point = Data.define(:x, :y)

p = Point.new(1, 2)
p.x = 3 # Error!`,
    fixedCode: `Point = Data.define(:x, :y)

p = Point.new(1, 2)
p2 = p.with(x: 3) # Create new instance`,
    hint: "Data objects are immutable.",
    bugLine: 4,
    explanation: "Use with() method to create modified copy of Data object."
  },

  {
    id: 690,
    title: "Incorrect Endless Method",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong endless method definition.",
    buggyCode: `def square(x) = x * x

puts square(5)`,
    fixedCode: `def square(x) = x * x

puts square(5)`,
    hint: "Actually this works in Ruby 3.0+!",
    bugLine: 1,
    explanation: "The code is correct - endless methods are valid in Ruby 3.0+."
  },

  {
    id: 691,
    title: "Incorrect Numbered Parameters",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong numbered parameter usage.",
    buggyCode: `arr = [1, 2, 3]
result = arr.map { _1 * 2 }
puts result.inspect`,
    fixedCode: `arr = [1, 2, 3]
result = arr.map { _1 * 2 }
puts result.inspect`,
    hint: "Numbered parameters work in Ruby 2.7+.",
    bugLine: 2,
    explanation: "The code is correct - _1 is valid numbered parameter."
  },

  {
    id: 692,
    title: "Incorrect RBS Type Checking",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong RBS type signature.",
    buggyCode: `# math.rbs
module Math
  def square: (Integer) -> Integer
end

# math.rb
module Math
  def square(x)
    x * x
  end
end`,
    fixedCode: `# math.rbs
module Math
  def self.square: (Integer) -> Integer
end

# math.rb
module Math
  def self.square(x)
    x * x
  end
end`,
    hint: "RBS needs correct method type (instance vs class).",
    bugLine: 3,
    explanation: "Use self.method_name for class methods in RBS."
  },

  {
    id: 693,
    title: "Incorrect Steep Type Check",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong Steep type annotation.",
    buggyCode: `# Ruby file
def add(x, y)
  x + y
end

# Steepfile
target :lib do
  signature "sig"
  check "lib"
end`,
    fixedCode: `# Ruby file with annotation
# @type method add: (Integer, Integer) -> Integer
def add(x, y)
  x + y
end

# Or use RBS
# sig/add.rbs
def add: (Integer, Integer) -> Integer`,
    hint: "Steep needs type annotations or RBS files.",
    bugLine: 2,
    explanation: "Add type annotations in comments or separate RBS files."
  },

  {
    id: 694,
    title: "Incorrect Sorbet Type",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong Sorbet type signature.",
    buggyCode: `# typed: true

class Calculator
  def add(x, y)
    x + y
  end
end`,
    fixedCode: `# typed: true

class Calculator
  extend T::Sig
  
  sig { params(x: Integer, y: Integer).returns(Integer) }
  def add(x, y)
    x + y
  end
end`,
    hint: "Sorbet needs explicit type signatures.",
    bugLine: 5,
    explanation: "Add extend T::Sig and sig annotations for Sorbet."
  },

  {
    id: 695,
    title: "Incorrect Dry Types",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong dry-types usage.",
    buggyCode: `require 'dry-types'

module Types
  include Dry.Types()
  
  Age = Integer.constrained(gteq: 0)
end

age = Types::Age[25]
puts age`,
    fixedCode: `require 'dry-types'

module Types
  include Dry.Types()
  
  Age = Integer.constrained(gteq: 0)
end

begin
  age = Types::Age[25]
  puts age
rescue Dry::Types::ConstraintError => e
  puts "Invalid age: #{e.message}"
end`,
    hint: "Dry-types validation can raise exceptions.",
    bugLine: 10,
    explanation: "Wrap dry-types validation in rescue block."
  },

  {
    id: 696,
    title: "Incorrect Concurrent Ruby",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong concurrent-ruby usage.",
    buggyCode: `require 'concurrent-ruby'

future = Concurrent::Future.execute do
  sleep 1
  42
end

puts future.value`,
    fixedCode: `require 'concurrent-ruby'

future = Concurrent::Future.execute do
  sleep 1
  42
end

# Wait with timeout
begin
  puts future.value(2) # 2 second timeout
rescue Concurrent::TimeoutError
  puts "Timeout!"
end`,
    hint: "Future.value may block indefinitely.",
    bugLine: 8,
    explanation: "Use timeout parameter with future.value."
  },

  {
    id: 697,
    title: "Incorrect ROM.rb Usage",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong ROM repository usage.",
    buggyCode: `require 'rom'
require 'rom-sql'

rom = ROM.container(:sql, 'sqlite::memory') do |config|
  config.relation(:users) do
    schema(infer: true)
  end
end

users = rom.relations[:users]
users.insert(name: "Alice")`,
    fixedCode: `require 'rom'
require 'rom-sql'

rom = ROM.container(:sql, 'sqlite::memory') do |config|
  config.relation(:users) do
    schema(infer: true)
    auto_struct true
  end
end

users_repo = rom.repositories[:default]
users = rom.relations[:users]
users.insert(name: "Alice")`,
    hint: "ROM has repositories and relations separation.",
    bugLine: 12,
    explanation: "Access repository for database operations."
  },

  {
    id: 698,
    title: "Incorrect Hanami View",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong Hanami view rendering.",
    buggyCode: `module Web
  module Views
    module Home
      class Index
        include Web::View
        
        def render
          "Hello"
        end
      end
    end
  end
end`,
    fixedCode: `module Web
  module Views
    module Home
      class Index
        include Web::View
        
        # Template auto-rendered
        # Or explicit:
        def render
          html.h1 "Hello"
        end
      end
    end
  end
end`,
    hint: "Hanami views auto-render templates.",
    bugLine: 9,
    explanation: "Remove explicit render or use proper Hanami view helpers."
  },

  {
    id: 699,
    title: "Incorrect Trailblazer Operation",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong Trailblazer operation flow.",
    buggyCode: `class CreateUser < Trailblazer::Operation
  step :validate
  step :persist
  
  def validate(ctx, params:, **)
    params[:name].present?
  end
  
  def persist(ctx, params:, **)
    ctx[:user] = User.create(params)
  end
end

result = CreateUser.(name: "Alice")`,
    fixedCode: `class CreateUser < Trailblazer::Operation
  step :validate
  step :persist
  
  def validate(ctx, params:, **)
    if params[:name].present?
      true
    else
      ctx[:errors] = ["Name required"]
      false
    end
  end
  
  def persist(ctx, params:, **)
    ctx[:user] = User.create(params)
  end
end

result = CreateUser.(name: "Alice")`,
    hint: "Trailblazer steps should return boolean.",
    bugLine: 9,
    explanation: "Operation steps must return true/false to control flow."
  },

  {
    id: 700,
    title: "Incorrect Dry Transaction",
    difficulty: "Hard",
    language: "Ruby",
    description: "Wrong dry-transaction error handling.",
    buggyCode: `require 'dry-transaction'

class CreateUser
  include Dry::Transaction
  
  step :validate
  step :persist
  
  def validate(input)
    Success(input)
  end
  
  def persist(input)
    User.create(input)
  end
end`,
    fixedCode: `require 'dry-transaction'

class CreateUser
  include Dry::Transaction
  
  step :validate
  step :persist
  
  def validate(input)
    if input[:name].present?
      Success(input)
    else
      Failure("Name required")
    end
  end
  
  def persist(input)
    user = User.create(input)
    if user.persisted?
      Success(user)
    else
      Failure(user.errors.full_messages)
    end
  end
end`,
    hint: "Dry::Transaction steps must return Success/Failure.",
    bugLine: 13,
    explanation: "Wrap operations in Success() or Failure() monads."
  }
];