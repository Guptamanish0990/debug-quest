export const LEVELS_JAVA = [
  // ========== EASY (1-30) ==========
  {
    id: 1,
    title: "Missing Main Method",
    difficulty: "Easy",
    language: "Java",
    description: "Program won't run because the main method is incorrect.",
    buggyCode: `public class Main {
    public void main(String[] args) {
        System.out.println("Hello");
    }
}`,
    fixedCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`,
    hint: "Check the exact signature of the Java entry point.",
    bugLine: 2,
    explanation: "The main method must be public static void main(String[] args)."
  },
  {
    id: 2,
    title: "String Comparison with ==",
    difficulty: "Easy",
    language: "Java",
    description: "Using == to compare String values.",
    buggyCode: `String a = "hello";
String b = new String("hello");
if (a == b) {
    System.out.println("Equal");
}`,
    fixedCode: `String a = "hello";
String b = new String("hello");
if (a.equals(b)) {
    System.out.println("Equal");
}`,
    hint: "In Java, == compares references for objects.",
    bugLine: 3,
    explanation: "Use .equals() to compare String values."
  },
  {
    id: 3,
    title: "NullPointerException",
    difficulty: "Easy",
    language: "Java",
    description: "Calling a method on a null reference.",
    buggyCode: `String name = null;
System.out.println(name.length());`,
    fixedCode: `String name = null;
if (name != null) {
    System.out.println(name.length());
}`,
    hint: "Always check for null before using an object.",
    bugLine: 2,
    explanation: "Calling length() on null throws NullPointerException."
  },
  {
    id: 4,
    title: "Missing Semicolon",
    difficulty: "Easy",
    language: "Java",
    description: "Statement missing terminating semicolon.",
    buggyCode: `System.out.println("Hello")`,
    fixedCode: `System.out.println("Hello");`,
    hint: "All statements must end with a semicolon.",
    bugLine: 1,
    explanation: "Java requires semicolon at the end of statements."
  },
  {
    id: 5,
    title: "Variable Not Initialized",
    difficulty: "Easy",
    language: "Java",
    description: "Using local variable without initialization.",
    buggyCode: `public void printNumber() {
    int number;
    System.out.println(number);
}`,
    fixedCode: `public void printNumber() {
    int number = 0;
    System.out.println(number);
}`,
    hint: "Local variables must be initialized before use.",
    bugLine: 3,
    explanation: "Local variables don't have default values."
  },
  {
    id: 6,
    title: "Wrong Case in System.out.println",
    difficulty: "Easy",
    language: "Java",
    description: "Case-sensitive method name.",
    buggyCode: `System.Out.Println("Hello");`,
    fixedCode: `System.out.println("Hello");`,
    hint: "Java is case-sensitive.",
    bugLine: 1,
    explanation: "Correct method name is System.out.println (lowercase)."
  },
  {
    id: 7,
    title: "Missing Import",
    difficulty: "Easy",
    language: "Java",
    description: "Using class without importing.",
    buggyCode: `public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
    }
}`,
    fixedCode: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
    }
}`,
    hint: "Import required classes from packages.",
    bugLine: 3,
    explanation: "ArrayList is in java.util package."
  },
  {
    id: 8,
    title: "Array Declaration Wrong",
    difficulty: "Easy",
    language: "Java",
    description: "Wrong syntax for array declaration.",
    buggyCode: `int numbers[] = new int[5];
numbers = {1, 2, 3, 4, 5};`,
    fixedCode: `int[] numbers = {1, 2, 3, 4, 5};`,
    hint: "Arrays can be initialized directly.",
    bugLine: 2,
    explanation: "Array initializer can only be used in declaration."
  },
  {
    id: 9,
    title: "Comparing Different Types",
    difficulty: "Easy",
    language: "Java",
    description: "Comparing int with String.",
    buggyCode: `int age = 25;
String input = "25";
if (age == input) {
    System.out.println("Equal");
}`,
    fixedCode: `int age = 25;
String input = "25";
if (age == Integer.parseInt(input)) {
    System.out.println("Equal");
}`,
    hint: "Convert String to int before comparison.",
    bugLine: 3,
    explanation: "Cannot compare int with String directly."
  },
  {
    id: 10,
    title: "Missing Break in Switch",
    difficulty: "Easy",
    language: "Java",
    description: "Switch case falls through.",
    buggyCode: `int day = 1;
switch(day) {
    case 1: System.out.println("Monday");
    case 2: System.out.println("Tuesday");
            break;
}`,
    fixedCode: `int day = 1;
switch(day) {
    case 1: System.out.println("Monday");
            break;
    case 2: System.out.println("Tuesday");
            break;
}`,
    hint: "Add break to prevent fall-through.",
    bugLine: 4,
    explanation: "Without break, execution continues to next case."
  },
  {
    id: 11,
    title: "Infinite For Loop",
    difficulty: "Easy",
    language: "Java",
    description: "Loop condition always true.",
    buggyCode: `for (int i = 0; i < 10; i--) {
    System.out.println(i);
}`,
    fixedCode: `for (int i = 0; i < 10; i++) {
    System.out.println(i);
}`,
    hint: "Check loop increment/decrement.",
    bugLine: 1,
    explanation: "i-- makes i smaller, loop never ends."
  },
  {
    id: 12,
    title: "Wrong Method Name",
    difficulty: "Easy",
    language: "Java",
    description: "Method name misspelled.",
    buggyCode: `public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.Add(5, 3));
    }
}`,
    fixedCode: `public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 3));
    }
}`,
    hint: "Java method names are case-sensitive.",
    bugLine: 8,
    explanation: "Add vs add - different methods."
  },
  {
    id: 13,
    title: "Division by Zero",
    difficulty: "Easy",
    language: "Java",
    description: "Runtime exception from division.",
    buggyCode: `int result = 10 / 0;`,
    fixedCode: `int result = 0;
int divisor = 0;
if (divisor != 0) {
    result = 10 / divisor;
}`,
    hint: "Check denominator before division.",
    bugLine: 1,
    explanation: "Division by zero throws ArithmeticException."
  },
  {
    id: 14,
    title: "Missing Parentheses",
    difficulty: "Easy",
    language: "Java",
    description: "Missing parentheses in method call.",
    buggyCode: `System.out.println;`,
    fixedCode: `System.out.println("Hello");`,
    hint: "Method calls need parentheses.",
    bugLine: 1,
    explanation: "println is a method, requires parentheses."
  },
  {
    id: 15,
    title: "Wrong Escape Sequence",
    difficulty: "Easy",
    language: "Java",
    description: "Invalid escape character.",
    buggyCode: `System.out.println("Path: C:\new\file.txt");`,
    fixedCode: `System.out.println("Path: C:\\new\\file.txt");`,
    hint: "Use double backslash for file paths.",
    bugLine: 1,
    explanation: "Backslash is escape character in strings."
  },
  {
    id: 16,
    title: "Comparing Boolean with ==",
    difficulty: "Easy",
    language: "Java",
    description: "Redundant boolean comparison.",
    buggyCode: `boolean flag = true;
if (flag == true) {
    System.out.println("Yes");
}`,
    fixedCode: `boolean flag = true;
if (flag) {
    System.out.println("Yes");
}`,
    hint: "Boolean variables can be used directly in conditions.",
    bugLine: 2,
    explanation: "flag == true is redundant, use flag directly."
  },
  {
    id: 17,
    title: "Missing Return Type",
    difficulty: "Easy",
    language: "Java",
    description: "Method missing return type.",
    buggyCode: `public getNumber() {
    return 42;
}`,
    fixedCode: `public int getNumber() {
    return 42;
}`,
    hint: "All methods must declare return type.",
    bugLine: 1,
    explanation: "Missing int return type declaration."
  },
  {
    id: 18,
    title: "String Concatenation Issue",
    difficulty: "Easy",
    language: "Java",
    description: "Unexpected string concatenation order.",
    buggyCode: `System.out.println("Sum: " + 5 + 3);`,
    fixedCode: `System.out.println("Sum: " + (5 + 3));`,
    hint: "Use parentheses to control evaluation order.",
    bugLine: 1,
    explanation: "Without parentheses, 5 + 3 becomes string concatenation."
  },
  {
    id: 19,
    title: "Wrong Package Declaration",
    difficulty: "Easy",
    language: "Java",
    description: "Package statement in wrong place.",
    buggyCode: `import java.util.Scanner;
package com.example;

public class Main {
    // ...
}`,
    fixedCode: `package com.example;
import java.util.Scanner;

public class Main {
    // ...
}`,
    hint: "Package must be first statement (after comments).",
    bugLine: 1,
    explanation: "Package declaration must come before imports."
  },
  {
    id: 20,
    title: "Using Reserved Word as Variable",
    difficulty: "Easy",
    language: "Java",
    description: "Using Java keyword as identifier.",
    buggyCode: `int class = 5;`,
    fixedCode: `int className = 5;`,
    hint: "Avoid Java reserved words.",
    bugLine: 1,
    explanation: "'class' is a reserved keyword in Java."
  },
  {
    id: 21,
    title: "Missing Class Definition",
    difficulty: "Easy",
    language: "Java",
    description: "Code outside of class.",
    buggyCode: `System.out.println("Hello");`,
    fixedCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}`,
    hint: "All Java code must be inside a class.",
    bugLine: 1,
    explanation: "Executable code must be inside a method in a class."
  },
  {
    id: 22,
    title: "Wrong Array Access",
    difficulty: "Easy",
    language: "Java",
    description: "Trying to access array like method.",
    buggyCode: `int[] numbers = {1, 2, 3};
System.out.println(numbers(0));`,
    fixedCode: `int[] numbers = {1, 2, 3};
System.out.println(numbers[0]);`,
    hint: "Arrays use square brackets, not parentheses.",
    bugLine: 2,
    explanation: "Array elements are accessed with [index] not (index)."
  },
  {
    id: 23,
    title: "Printing Object Reference",
    difficulty: "Easy",
    language: "Java",
    description: "Printing object shows hashcode.",
    buggyCode: `Person p = new Person("John");
System.out.println(p);`,
    fixedCode: `Person p = new Person("John");
System.out.println(p.getName());`,
    hint: "Override toString() or call specific method.",
    bugLine: 2,
    explanation: "Without toString(), prints object reference."
  },
  {
    id: 24,
    title: "Missing Cast",
    difficulty: "Easy",
    language: "Java",
    description: "Narrowing conversion needs explicit cast.",
    buggyCode: `double d = 10.5;
int i = d;`,
    fixedCode: `double d = 10.5;
int i = (int) d;`,
    hint: "Add explicit cast for double to int.",
    bugLine: 2,
    explanation: "Narrowing conversion requires explicit cast."
  },
  {
    id: 25,
    title: "Wrong Constructor Call",
    difficulty: "Easy",
    language: "Java",
    description: "Missing 'new' keyword.",
    buggyCode: `String s = String("hello");`,
    fixedCode: `String s = new String("hello");`,
    hint: "Object creation requires 'new' keyword.",
    bugLine: 1,
    explanation: "Must use new keyword to create objects (except literals)."
  },
  {
    id: 26,
    title: "Incorrect Modifier Order",
    difficulty: "Easy",
    language: "Java",
    description: "Wrong order of access modifiers.",
    buggyCode: `static public void main(String[] args) { }`,
    fixedCode: `public static void main(String[] args) { }`,
    hint: "Conventional order: public/private then static.",
    bugLine: 1,
    explanation: "Standard convention is public static, not static public."
  },
  {
    id: 27,
    title: "Unreachable Code",
    difficulty: "Easy",
    language: "Java",
    description: "Code after return statement.",
    buggyCode: `public int getNumber() {
    return 5;
    System.out.println("Done");
}`,
    fixedCode: `public int getNumber() {
    System.out.println("Done");
    return 5;
}`,
    hint: "Return statement ends method execution.",
    bugLine: 3,
    explanation: "Code after return is unreachable."
  },
  {
    id: 28,
    title: "Missing Default Case",
    difficulty: "Easy",
    language: "Java",
    description: "Switch without default case.",
    buggyCode: `int day = 7;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
}`,
    fixedCode: `int day = 7;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Invalid"); break;
}`,
    hint: "Add default case for unexpected values.",
    bugLine: 1,
    explanation: "Without default, nothing happens for unmatched values."
  },
  {
    id: 29,
    title: "Wrong Scanner Usage",
    difficulty: "Easy",
    language: "Java",
    description: "Scanner not closed properly.",
    buggyCode: `Scanner scanner = new Scanner(System.in);
String input = scanner.nextLine();`,
    fixedCode: `Scanner scanner = new Scanner(System.in);
String input = scanner.nextLine();
scanner.close();`,
    hint: "Close resources to prevent leaks.",
    bugLine: 2,
    explanation: "Scanner should be closed to release resources."
  },
  {
    id: 30,
    title: "Missing throws Declaration",
    difficulty: "Easy",
    language: "Java",
    description: "Unhandled exception.",
    buggyCode: `public void readFile() {
    FileReader fr = new FileReader("file.txt");
}`,
    fixedCode: `public void readFile() throws IOException {
    FileReader fr = new FileReader("file.txt");
}`,
    hint: "Add throws clause or try-catch.",
    bugLine: 2,
    explanation: "FileReader constructor throws IOException."

  // ========== MEDIUM (31-60) ==========
  },
  {
    id: 31,
    title: "Array Index Out of Bounds",
    difficulty: "Medium",
    language: "Java",
    description: "Index is one too high.",
    buggyCode: `int[] nums = {1, 2, 3};
System.out.println(nums[3]);`,
    fixedCode: `int[] nums = {1, 2, 3};
System.out.println(nums[2]);`,
    hint: "Java arrays are 0-based.",
    bugLine: 2,
    explanation: "Valid indices are 0, 1, 2 for an array of length 3."
  },
  {
    id: 32,
    title: "Infinite While Loop",
    difficulty: "Medium",
    language: "Java",
    description: "Condition never changes inside the loop.",
    buggyCode: `int i = 0;
while (i < 5) {
    System.out.println(i);
}`,
    fixedCode: `int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}`,
    hint: "Loop variables must be updated.",
    bugLine: 2,
    explanation: "Missing i++ makes the condition always true."
  },
  {
    id: 33,
    title: "Wrong Constructor Name",
    difficulty: "Medium",
    language: "Java",
    description: "Method looks like a constructor but has a return type.",
    buggyCode: `class Person {
    public void Person() {
        System.out.println("Created");
    }
}`,
    fixedCode: `class Person {
    public Person() {
        System.out.println("Created");
    }
}`,
    hint: "Constructors must have no return type.",
    bugLine: 2,
    explanation: "Having void makes it a method, not a constructor."
  },
  {
    id: 34,
    title: "Concurrent Modification",
    difficulty: "Medium",
    language: "Java",
    description: "Modifying collection while iterating.",
    buggyCode: `List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
for (String s : list) {
    if (s.equals("A")) {
        list.remove(s);
    }
}`,
    fixedCode: `List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.equals("A")) {
        it.remove();
    }
}`,
    hint: "Use Iterator.remove() during iteration.",
    bugLine: 4,
    explanation: "Enhanced for-loop doesn't allow modification."
  },
  {
    id: 35,
    title: "Integer Caching Issue",
    difficulty: "Medium",
    language: "Java",
    description: "Integer cache causes unexpected == behavior.",
    buggyCode: `Integer a = 127;
Integer b = 127;
Integer c = 128;
Integer d = 128;
System.out.println(a == b); // true
System.out.println(c == d); // false`,
    fixedCode: `Integer a = 127;
Integer b = 127;
Integer c = 128;
Integer d = 128;
System.out.println(a.equals(b)); // true
System.out.println(c.equals(d)); // true`,
    hint: "Use equals() for Integer objects.",
    bugLine: 5,
    explanation: "Integer cache only works for -128 to 127."
  },
  {
    id: 36,
    title: "Mutable Date Object",
    difficulty: "Medium",
    language: "Java",
    description: "Date objects are mutable.",
    buggyCode: `Date start = new Date();
scheduleTask(start);
// start might have been modified`,
    fixedCode: `Date start = new Date();
Date scheduleDate = new Date(start.getTime());
scheduleTask(scheduleDate);`,
    hint: "Create defensive copies of mutable objects.",
    bugLine: 2,
    explanation: "Date is mutable, can be changed by called method."
  },
  {
    id: 37,
    title: "String Immutability Misunderstanding",
    difficulty: "Medium",
    language: "Java",
    description: "Trying to modify String.",
    buggyCode: `String s = "hello";
s.toUpperCase();
System.out.println(s); // still "hello"`,
    fixedCode: `String s = "hello";
s = s.toUpperCase();
System.out.println(s); // "HELLO"`,
    hint: "String methods return new strings.",
    bugLine: 2,
    explanation: "Strings are immutable; toUpperCase() returns new string."
  },
  {
    id: 38,
    title: "Resource Leak",
    difficulty: "Medium",
    language: "Java",
    description: "File not closed in exception case.",
    buggyCode: `FileInputStream fis = null;
try {
    fis = new FileInputStream("file.txt");
    // read file
} catch (IOException e) {
    e.printStackTrace();
}`,
    fixedCode: `try (FileInputStream fis = new FileInputStream("file.txt")) {
    // read file
} catch (IOException e) {
    e.printStackTrace();
}`,
    hint: "Use try-with-resources.",
    bugLine: 1,
    explanation: "FileInputStream may not be closed on exception."
  },
  {
    id: 39,
    title: "Wrong equals/hashCode Contract",
    difficulty: "Medium",
    language: "Java",
    description: "Overriding equals but not hashCode.",
    buggyCode: `class Person {
    String name;
    
    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Person)) return false;
        Person p = (Person) o;
        return this.name.equals(p.name);
    }
}`,
    fixedCode: `class Person {
    String name;
    
    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Person)) return false;
        Person p = (Person) o;
        return this.name.equals(p.name);
    }
    
    @Override
    public int hashCode() {
        return name != null ? name.hashCode() : 0;
    }
}`,
    hint: "Override hashCode when overriding equals.",
    bugLine: 1,
    explanation: "Equal objects must have equal hashCodes."
  },
  {
    id: 40,
    title: "Static Method Hiding",
    difficulty: "Medium",
    language: "Java",
    description: "Static method trying to override.",
    buggyCode: `class Parent {
    public static void print() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    @Override
    public static void print() {
        System.out.println("Child");
    }
}`,
    fixedCode: `class Parent {
    public static void print() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    public static void print() {
        System.out.println("Child");
    }
}`,
    hint: "Static methods cannot be overridden, only hidden.",
    bugLine: 7,
    explanation: "Remove @Override annotation for static methods."
  },
  {
    id: 41,
    title: "Wrong Generic Type",
    difficulty: "Medium",
    language: "Java",
    description: "Raw type usage with generics.",
    buggyCode: `List list = new ArrayList();
list.add("Hello");
list.add(123); // No compile error`,
    fixedCode: `List<String> list = new ArrayList<>();
list.add("Hello");
// list.add(123); // Compile error`,
    hint: "Use generic types for type safety.",
    bugLine: 1,
    explanation: "Raw types bypass generic type checking."
  },
  {
    id: 42,
    title: "Float/Double Comparison",
    difficulty: "Medium",
    language: "Java",
    description: "Direct comparison of floating-point numbers.",
    buggyCode: `double a = 0.1 + 0.2;
double b = 0.3;
if (a == b) {
    System.out.println("Equal");
}`,
    fixedCode: `double a = 0.1 + 0.2;
double b = 0.3;
if (Math.abs(a - b) < 0.00001) {
    System.out.println("Equal");
}`,
    hint: "Use epsilon for floating-point comparison.",
    bugLine: 3,
    explanation: "Floating-point arithmetic has precision errors."
  },
  {
    id: 43,
    title: "ClassCastException",
    difficulty: "Medium",
    language: "Java",
    description: "Wrong type casting.",
    buggyCode: `Object obj = "Hello";
Integer num = (Integer) obj;`,
    fixedCode: `Object obj = "Hello";
if (obj instanceof Integer) {
    Integer num = (Integer) obj;
}`,
    hint: "Check type with instanceof before casting.",
    bugLine: 2,
    explanation: "Cannot cast String to Integer."
  },
  {
    id: 44,
    title: "Deadlock Scenario",
    difficulty: "Medium",
    language: "Java",
    description: "Threads acquiring locks in different order.",
    buggyCode: `// Thread 1
synchronized (lockA) {
    synchronized (lockB) {
        // ...
    }
}

// Thread 2
synchronized (lockB) {
    synchronized (lockA) {
        // ...
    }
}`,
    fixedCode: `// Both threads use same order
synchronized (lockA) {
    synchronized (lockB) {
        // ...
    }
}`,
    hint: "Always acquire locks in same order.",
    bugLine: 1,
    explanation: "Different lock orders can cause deadlock."
  },
  {
    id: 45,
    title: "StringBuffer vs StringBuilder",
    difficulty: "Medium",
    language: "Java",
    description: "Using StringBuffer in single thread.",
    buggyCode: `StringBuffer sb = new StringBuffer();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}`,
    fixedCode: `StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}`,
    hint: "Use StringBuilder for single-threaded operations.",
    bugLine: 1,
    explanation: "StringBuffer is synchronized, slower than StringBuilder."
  },
  {
    id: 46,
    title: "Clone Method Issue",
    difficulty: "Medium",
    language: "Java",
    description: "Shallow copy causing shared references.",
    buggyCode: `class Employee implements Cloneable {
    String name;
    Date hireDate;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}`,
    fixedCode: `class Employee implements Cloneable {
    String name;
    Date hireDate;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Employee cloned = (Employee) super.clone();
        cloned.hireDate = (Date) hireDate.clone();
        return cloned;
    }
}`,
    hint: "Override clone() for deep copy.",
    bugLine: 6,
    explanation: "Default clone() does shallow copy."
  },
  {
    id: 47,
    title: "Infinite Recursion",
    difficulty: "Medium",
    language: "Java",
    description: "toString() causing StackOverflowError.",
    buggyCode: `class Node {
    Node next;
    
    @Override
    public String toString() {
        return "Node: " + this;
    }
}`,
    fixedCode: `class Node {
    Node next;
    
    @Override
    public String toString() {
        return "Node: " + (next != null ? next.toString() : "null");
    }
}`,
    hint: "Don't use 'this' in toString() directly.",
    bugLine: 4,
    explanation: "this.toString() calls itself infinitely."
  },
  {
    id: 48,
    title: "Calendar Month Issue",
    difficulty: "Medium",
    language: "Java",
    description: "Calendar months are 0-based.",
    buggyCode: `Calendar cal = Calendar.getInstance();
cal.set(2023, 1, 1); // January 1, 2023?`,
    fixedCode: `Calendar cal = Calendar.getInstance();
cal.set(2023, Calendar.JANUARY, 1);`,
    hint: "Use Calendar constants for months.",
    bugLine: 2,
    explanation: "January is 0, February is 1 in Calendar."
  },
  {
    id: 49,
    title: "Comparator Violates Contract",
    difficulty: "Medium",
    language: "Java",
    description: "Comparator not transitive.",
    buggyCode: `Comparator<Integer> comp = (a, b) -> {
    if (a == 2 || b == 2) return 0;
    return a.compareTo(b);
};`,
    fixedCode: `Comparator<Integer> comp = (a, b) -> {
    return a.compareTo(b);
};`,
    hint: "Comparator must be transitive.",
    bugLine: 1,
    explanation: "Comparator contract requires transitivity."
  },
  {
    id: 50,
    title: "Wrong Exception Handling",
    difficulty: "Medium",
    language: "Java",
    description: "Catching Exception instead of specific one.",
    buggyCode: `try {
    FileReader fr = new FileReader("file.txt");
} catch (Exception e) {
    // Too broad
}`,
    fixedCode: `try {
    FileReader fr = new FileReader("file.txt");
} catch (FileNotFoundException e) {
    // Specific handling
}`,
    hint: "Catch specific exceptions.",
    bugLine: 3,
    explanation: "Catching Exception hides other possible issues."
  },
  {
    id: 51,
    title: "Volatile Misuse",
    difficulty: "Medium",
    language: "Java",
    description: "volatile doesn't guarantee atomicity.",
    buggyCode: `class Counter {
    private volatile int count = 0;
    
    public void increment() {
        count++; // Not atomic
    }
}`,
    fixedCode: `class Counter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet();
    }
}`,
    hint: "Use AtomicInteger for atomic operations.",
    bugLine: 4,
    explanation: "count++ is read-modify-write, not atomic with volatile."
  },
  {
    id: 52,
    title: "Static Initialization Order",
    difficulty: "Medium",
    language: "Java",
    description: "Static field initialization order issue.",
    buggyCode: `class Test {
    static int x = 5;
    static int y = x * 2;
    static int x = 10; // Re-declaration
}`,
    fixedCode: `class Test {
    static int x = 5;
    static int y = x * 2;
}`,
    hint: "Static fields initialized in declaration order.",
    bugLine: 4,
    explanation: "Cannot re-declare static field."
  },
  {
    id: 53,
    title: "Wrong BigDecimal Usage",
    difficulty: "Medium",
    language: "Java",
    description: "Using double constructor for BigDecimal.",
    buggyCode: `BigDecimal bd = new BigDecimal(0.1);`,
    fixedCode: `BigDecimal bd = new BigDecimal("0.1");`,
    hint: "Use String constructor for exact values.",
    bugLine: 1,
    explanation: "double constructor already has precision error."
  },
  {
    id: 54,
    title: "Iterator Invocation Order",
    difficulty: "Medium",
    language: "Java",
    description: "Calling next() without hasNext().",
    buggyCode: `List<String> list = Arrays.asList("A", "B");
Iterator<String> it = list.iterator();
System.out.println(it.next());
System.out.println(it.next());
System.out.println(it.next()); // Error`,
    fixedCode: `List<String> list = Arrays.asList("A", "B");
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}`,
    hint: "Always check hasNext() before next().",
    bugLine: 5,
    explanation: "No more elements after second next()."
  },
  {
    id: 55,
    title: "Auto-boxing Null",
    difficulty: "Medium",
    language: "Java",
    description: "Null auto-unboxing to primitive.",
    buggyCode: `Integer value = null;
int num = value;`,
    fixedCode: `Integer value = null;
if (value != null) {
    int num = value;
}`,
    hint: "Check for null before unboxing.",
    bugLine: 2,
    explanation: "Auto-unboxing null throws NullPointerException."
  },
  {
    id: 56,
    title: "Wrong finally Usage",
    difficulty: "Medium",
    language: "Java",
    description: "Return in finally overrides try return.",
    buggyCode: `public int getNumber() {
    try {
        return 1;
    } finally {
        return 2;
    }
}`,
    fixedCode: `public int getNumber() {
    try {
        return 1;
    } finally {
        // Cleanup, no return
    }
}`,
    hint: "Avoid return in finally block.",
    bugLine: 5,
    explanation: "Finally return overrides try return."
  },
  {
    id: 57,
    title: "Resource Leak in Loop",
    difficulty: "Medium",
    language: "Java",
    description: "Multiple resources not closed properly.",
    buggyCode: `for (int i = 0; i < 10; i++) {
    FileWriter fw = new FileWriter("file" + i + ".txt");
    fw.write("data");
}`,
    fixedCode: `for (int i = 0; i < 10; i++) {
    try (FileWriter fw = new FileWriter("file" + i + ".txt")) {
        fw.write("data");
    }
}`,
    hint: "Use try-with-resources in loop.",
    bugLine: 2,
    explanation: "FileWriter not closed in each iteration."
  },
  {
    id: 58,
    title: "Immutable Collection Modification",
    difficulty: "Medium",
    language: "Java",
    description: "Trying to modify unmodifiable list.",
    buggyCode: `List<String> list = Arrays.asList("A", "B");
list.add("C");`,
    fixedCode: `List<String> list = new ArrayList<>(Arrays.asList("A", "B"));
list.add("C");`,
    hint: "Arrays.asList() returns fixed-size list.",
    bugLine: 2,
    explanation: "List from Arrays.asList() cannot be modified."
  },
  {
    id: 59,
    title: "Wrong Map Iteration",
    difficulty: "Medium",
    language: "Java",
    description: "Iterating over entrySet incorrectly.",
    buggyCode: `Map<String, Integer> map = new HashMap<>();
for (String key : map) {
    System.out.println(key);
}`,
    fixedCode: `Map<String, Integer> map = new HashMap<>();
for (String key : map.keySet()) {
    System.out.println(key);
}`,
    hint: "Use keySet(), values(), or entrySet().",
    bugLine: 2,
    explanation: "Cannot iterate Map directly."
  },
  {
    id: 60,
    title: "Stack Overflow in equals",
    difficulty: "Medium",
    language: "Java",
    description: "Circular reference in equals().",
    buggyCode: `class Node {
    Node next;
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Node)) return false;
        Node other = (Node) obj;
        return this.equals(other.next); // Infinite recursion
    }
}`,
    fixedCode: `class Node {
    Node next;
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Node)) return false;
        Node other = (Node) obj;
        return Objects.equals(this.next, other.next);
    }
}`,
    hint: "Compare fields directly, not recursively.",
    bugLine: 7,
    explanation: "this.equals(other.next) causes infinite recursion."

  // ========== HARD (61-90) ==========
  },
  {
    id: 61,
    title: "Integer Division Issue",
    difficulty: "Hard",
    language: "Java",
    description: "Division loses precision unintentionally.",
    buggyCode: `int a = 5;
int b = 2;
double result = a / b;
System.out.println(result);`,
    fixedCode: `int a = 5;
int b = 2;
double result = (double) a / b;
System.out.println(result);`,
    hint: "Casting affects how division is performed.",
    bugLine: 3,
    explanation: "a / b is integer division; cast to double first."
  },
  {
    id: 62,
    title: "Missing Override Annotation",
    difficulty: "Hard",
    language: "Java",
    description: "Method signature doesn't actually override.",
    buggyCode: `class Animal {
    public void speak() {
        System.out.println("...");
    }
}

class Dog extends Animal {
    public void Speak() {
        System.out.println("Woof");
    }
}`,
    fixedCode: `class Animal {
    public void speak() {
        System.out.println("...");
    }
}

class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("Woof");
    }
}`,
    hint: "Java is case-sensitive, and @Override can help.",
    bugLine: 7,
    explanation: "Speak vs speak — method not actually overridden."
  },
  {
    id: 63,
    title: "Static Context Error",
    difficulty: "Hard",
    language: "Java",
    description: "Trying to access instance field from static context.",
    buggyCode: `class Counter {
    int count = 0;

    public static void increment() {
        count++;
    }
}`,
    fixedCode: `class Counter {
    int count = 0;

    public void increment() {
        count++;
    }
}`,
    hint: "Static methods cannot access instance fields directly.",
    bugLine: 4,
    explanation: "count is non-static; accessed from a static method."
  },
  {
    id: 64,
    title: "Missing Return in Non-void Method",
    difficulty: "Hard",
    language: "Java",
    description: "Compiler error because a path has no return value.",
    buggyCode: `int max(int a, int b) {
    if (a > b) {
        return a;
    }
}`,
    fixedCode: `int max(int a, int b) {
    if (a > b) {
        return a;
    }
    return b;
}`,
    hint: "All code paths must return a value.",
    bugLine: 1,
    explanation: "Method int max must return an int in all branches."
  },
  {
    id: 65,
    title: "Memory Leak with Listeners",
    difficulty: "Hard",
    language: "Java",
    description: "Listeners preventing garbage collection.",
    buggyCode: `class EventSource {
    private List<EventListener> listeners = new ArrayList<>();
    
    public void addListener(EventListener listener) {
        listeners.add(listener);
    }
}`,
    fixedCode: `class EventSource {
    private List<EventListener> listeners = new ArrayList<>();
    
    public void addListener(EventListener listener) {
        listeners.add(listener);
    }
    
    public void removeListener(EventListener listener) {
        listeners.remove(listener);
    }
}`,
    hint: "Provide way to remove listeners.",
    bugLine: 4,
    explanation: "Listeners hold references, prevent GC."
  },
  {
    id: 66,
    title: "ThreadLocal Memory Leak",
    difficulty: "Hard",
    language: "Java",
    description: "ThreadLocal not removed in web apps.",
    buggyCode: `private static ThreadLocal<User> userHolder = new ThreadLocal<>();

public void setUser(User user) {
    userHolder.set(user);
}`,
    fixedCode: `private static ThreadLocal<User> userHolder = new ThreadLocal<>();

public void setUser(User user) {
    userHolder.set(user);
}

public void clearUser() {
    userHolder.remove();
}`,
    hint: "Always remove ThreadLocal values.",
    bugLine: 3,
    explanation: "ThreadLocal values persist in thread pools."
  },
  {
    id: 67,
    title: "Race Condition with Lazy Init",
    difficulty: "Hard",
    language: "Java",
    description: "Double-checked locking broken in old Java.",
    buggyCode: `class Singleton {
    private static Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`,
    fixedCode: `class Singleton {
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`,
    hint: "Add volatile for proper visibility.",
    bugLine: 2,
    explanation: "Without volatile, partially constructed object visible."
  },
  {
    id: 68,
    title: "Serialization with Inner Class",
    difficulty: "Hard",
    language: "Java",
    description: "Non-static inner class serialization issue.",
    buggyCode: `class Outer {
    class Inner implements Serializable {
        // Has implicit reference to Outer
    }
}`,
    fixedCode: `class Outer {
    static class Inner implements Serializable {
        // No implicit reference to Outer
    }
}`,
    hint: "Make inner class static for serialization.",
    bugLine: 2,
    explanation: "Non-static inner class has implicit outer reference."
  },
  {
    id: 69,
    title: "Reflection Breaking Encapsulation",
    difficulty: "Hard",
    language: "Java",
    description: "Accessing private fields via reflection.",
    buggyCode: `Field field = MyClass.class.getDeclaredField("secret");
field.setAccessible(true);
field.set(obj, "hacked");`,
    fixedCode: `// Use proper encapsulation
// Provide public methods for needed operations`,
    hint: "Security manager or module system can restrict.",
    bugLine: 2,
    explanation: "Reflection can bypass access controls."
  },
  {
    id: 70,
    title: "ClassLoader Memory Leak",
    difficulty: "Hard",
    language: "Java",
    description: "Custom ClassLoader preventing class unloading.",
    buggyCode: `class PluginClassLoader extends URLClassLoader {
    // Loads classes but never releases
}`,
    fixedCode: `class PluginClassLoader extends URLClassLoader {
    // Implement close() method
    @Override
    public void close() throws IOException {
        super.close();
    }
}`,
    hint: "Implement close() for ClassLoader.",
    bugLine: 1,
    explanation: "ClassLoader holds references to loaded classes."
  },
  {
    id: 71,
    title: "ForkJoinPool Common Pool Issue",
    difficulty: "Hard",
    language: "Java",
    description: "Blocking common pool causing deadlock.",
    buggyCode: `CompletableFuture.supplyAsync(() -> {
    // Blocking operation
    Thread.sleep(1000);
    return result;
});`,
    fixedCode: `CompletableFuture.supplyAsync(() -> {
    // Blocking operation
    Thread.sleep(1000);
    return result;
}, Executors.newCachedThreadPool());`,
    hint: "Use separate executor for blocking tasks.",
    bugLine: 1,
    explanation: "Common ForkJoinPool not for blocking operations."
  },
  {
    id: 72,
    title: "Time Zone Issue with SimpleDateFormat",
    difficulty: "Hard",
    language: "Java",
    description: "SimpleDateFormat not thread-safe.",
    buggyCode: `private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

public String formatDate(Date date) {
    return sdf.format(date); // Thread unsafe
}`,
    fixedCode: `private static ThreadLocal<SimpleDateFormat> sdf = 
    ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd"));

public String formatDate(Date date) {
    return sdf.get().format(date);
}`,
    hint: "Use ThreadLocal or DateTimeFormatter.",
    bugLine: 3,
    explanation: "SimpleDateFormat has mutable internal state."
  },
  {
    id: 73,
    title: "WeakReference Premature Collection",
    difficulty: "Hard",
    language: "Java",
    description: "WeakReference collected too early.",
    buggyCode: `WeakReference<byte[]> ref = new WeakReference<>(new byte[1024]);
// GC may collect immediately`,
    fixedCode: `// Keep strong reference if needed longer
byte[] data = new byte[1024];
WeakReference<byte[]> ref = new WeakReference<>(data);
// Use data while needed
data = null; // Allow collection when done`,
    hint: "Maintain strong reference while needed.",
    bugLine: 1,
    explanation: "WeakReference may be collected on next GC."
  },
  {
    id: 74,
    title: "Finalizer Memory Leak",
    difficulty: "Hard",
    language: "Java",
    description: "Finalizer preventing timely collection.",
    buggyCode: `protected void finalize() {
    // Heavy cleanup
    cleanup();
}`,
    fixedCode: `// Use AutoCloseable instead
@Override
public void close() {
    cleanup();
}`,
    hint: "Avoid finalize(), use try-with-resources.",
    bugLine: 1,
    explanation: "Finalizer delays garbage collection."
  },
  {
    id: 75,
    title: "Reflective Operation Exception",
    difficulty: "Hard",
    language: "Java",
    description: "Module system preventing reflection.",
    buggyCode: `Class<?> clazz = Class.forName("com.internal.Secret");
clazz.getDeclaredMethod("doSomething").invoke(obj);`,
    fixedCode: `// Update module-info.java with opens/requires
// Or use MethodHandles.Lookup`,
    hint: "Module system restricts deep reflection.",
    bugLine: 2,
    explanation: "Java 9+ module system enforces encapsulation."
  },
  {
    id: 76,
    title: "String Deduplication Overhead",
    difficulty: "Hard",
    language: "Java",
    description: "Creating too many duplicate strings.",
    buggyCode: `for (int i = 0; i < 1000000; i++) {
    String s = new String("constant");
}`,
    fixedCode: `String constant = "constant";
for (int i = 0; i < 1000000; i++) {
    String s = constant;
}`,
    hint: "Avoid unnecessary String objects.",
    bugLine: 2,
    explanation: "Each new String() creates new object."
  },
  {
    id: 77,
    title: "Incorrect CompletableFuture Exception Handling",
    difficulty: "Hard",
    language: "Java",
    description: "Exception lost in CompletableFuture chain.",
    buggyCode: `CompletableFuture.supplyAsync(() -> {
    throw new RuntimeException("error");
}).thenAccept(result -> {
    System.out.println(result);
});`,
    fixedCode: `CompletableFuture.supplyAsync(() -> {
    throw new RuntimeException("error");
}).thenAccept(result -> {
    System.out.println(result);
}).exceptionally(ex -> {
    System.out.println("Error: " + ex.getMessage());
    return null;
});`,
    hint: "Handle exceptions in async chains.",
    bugLine: 1,
    explanation: "Exception in supplyAsync not handled."
  },
  {
    id: 78,
    title: "Java Module Cyclic Dependency",
    difficulty: "Hard",
    language: "Java",
    description: "Circular module dependencies.",
    buggyCode: `// module-a
requires module-b;

// module-b
requires module-a;`,
    fixedCode: `// Refactor to remove cycle
// Create module-c with shared code`,
    hint: "Break cyclic dependencies.",
    bugLine: 1,
    explanation: "Java modules cannot have circular dependencies."
  },
  {
    id: 79,
    title: "Stream Closed Early",
    difficulty: "Hard",
    language: "Java",
    description: "Using stream after terminal operation.",
    buggyCode: `Stream<String> stream = list.stream();
stream.count();
stream.forEach(System.out::println);`,
    fixedCode: `Stream<String> stream = list.stream();
long count = stream.count();

stream = list.stream(); // New stream
stream.forEach(System.out::println);`,
    hint: "Terminal operation closes stream.",
    bugLine: 3,
    explanation: "Cannot use stream after terminal operation."
  },
  {
    id: 80,
    title: "Varargs Heap Pollution",
    difficulty: "Hard",
    language: "Java",
    description: "Unsafe varargs with generics.",
    buggyCode: `@SafeVarargs
public static <T> List<T> asList(T... elements) {
    List<T> list = new ArrayList<>();
    for (T element : elements) {
        list.add(element);
    }
    return list;
}`,
    fixedCode: `@SafeVarargs
public static <T> List<T> asList(T... elements) {
    List<T> list = new ArrayList<>();
    Collections.addAll(list, elements);
    return list;
}`,
    hint: "Use Collections.addAll for varargs.",
    bugLine: 5,
    explanation: "Iterating varargs array may cause heap pollution."
  },
  {
    id: 81,
    title: "Method Reference Null Pointer",
    difficulty: "Hard",
    language: "Java",
    description: "Method reference on null object.",
    buggyCode: `String str = null;
Supplier<Integer> supplier = str::length;`,
    fixedCode: `String str = null;
Supplier<Integer> supplier = () -> 
    str != null ? str.length() : 0;`,
    hint: "Check null before method reference.",
    bugLine: 2,
    explanation: "Method reference captures null reference."
  },
  {
    id: 82,
    title: "Record Serialization Issue",
    difficulty: "Hard",
    language: "Java",
    description: "Record with non-serializable component.",
    buggyCode: `record Person(String name, Thread thread) 
    implements Serializable { }`,
    fixedCode: `record Person(String name, String threadName) 
    implements Serializable { }`,
    hint: "All record components must be serializable.",
    bugLine: 1,
    explanation: "Thread is not Serializable."
  },
  {
    id: 83,
    title: "Sealed Class Exhaustiveness",
    difficulty: "Hard",
    language: "Java",
    description: "Switch not covering all sealed types.",
    buggyCode: `sealed interface Shape permits Circle, Square { }
record Circle() implements Shape { }
record Square() implements Shape { }

String describe(Shape s) {
    return switch(s) {
        case Circle c -> "Circle";
        // Missing Square case
    };
}`,
    fixedCode: `String describe(Shape s) {
    return switch(s) {
        case Circle c -> "Circle";
        case Square sq -> "Square";
    };
}`,
    hint: "Switch must cover all permitted types.",
    bugLine: 7,
    explanation: "Exhaustive switch required for sealed hierarchy."
  },
  {
    id: 84,
    title: "Pattern Matching Scope",
    difficulty: "Hard",
    language: "Java",
    description: "Variable reuse in pattern matching.",
    buggyCode: `Object obj = "test";
if (obj instanceof String s) {
    // s in scope
}
String s = "another"; // Error`,
    fixedCode: `Object obj = "test";
if (obj instanceof String str) {
    // str in scope
}
String s = "another"; // OK`,
    hint: "Pattern variable shadows existing variable.",
    bugLine: 5,
    explanation: "Pattern variable 's' still in scope."
  },
  {
    id: 85,
    title: "Virtual Thread Pinning",
    difficulty: "Hard",
    language: "Java",
    description: "Synchronized blocks pin virtual threads.",
    buggyCode: `try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> {
        synchronized(lock) { // Pins thread
            Thread.sleep(1000);
        }
    });
}`,
    fixedCode: `try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> {
        Lock lock = new ReentrantLock();
        lock.lock();
        try {
            Thread.sleep(1000);
        } finally {
            lock.unlock();
        }
    });
}`,
    hint: "Use ReentrantLock instead of synchronized.",
    bugLine: 4,
    explanation: "synchronized pins virtual threads to carrier."
  },
  {
    id: 86,
    title: "Foreign Function Memory Leak",
    difficulty: "Hard",
    language: "Java",
    description: "Native memory not released in FFM API.",
    buggyCode: `MemorySegment segment = Arena.global().allocate(100);
// Never closed`,
    fixedCode: `try (Arena arena = Arena.ofConfined()) {
    MemorySegment segment = arena.allocate(100);
    // Automatically closed
}`,
    hint: "Use try-with-resources with Arena.",
    bugLine: 1,
    explanation: "Memory segments must be explicitly closed."
  },
  {
    id: 87,
    title: "Scoped Value Inheritance",
    difficulty: "Hard",
    language: "Java",
    description: "ScopedValue not inherited by child threads.",
    buggyCode: `private static final ScopedValue<String> USER = ScopedValue.newInstance();

ScopedValue.where(USER, "Alice").run(() -> {
    new Thread(() -> {
        System.out.println(USER.get()); // Error
    }).start();
});`,
    fixedCode: `ScopedValue.where(USER, "Alice").run(() -> {
    Thread.Builder.OfVirtual builder = Thread.ofVirtual();
    builder.start(() -> {
        System.out.println(USER.get()); // Works
    });
});`,
    hint: "Use structured concurrency.",
    bugLine: 6,
    explanation: "ScopedValue not inherited by platform threads."
  },
  {
    id: 88,
    title: "Vector API Misalignment",
    difficulty: "Hard",
    language: "Java",
    description: "Memory alignment issues with Vector API.",
    buggyCode: `float[] array = new float[17]; // Not multiple of vector length
FloatVector vector = FloatVector.fromArray(FloatVector.SPECIES_256, array, 0);`,
    fixedCode: `float[] array = new float[32]; // Multiple of vector length
FloatVector vector = FloatVector.fromArray(FloatVector.SPECIES_256, array, 0);`,
    hint: "Ensure array length matches vector species.",
    bugLine: 2,
    explanation: "Array length should be multiple of vector lanes."
  },
  {
    id: 89,
    title: "String Template Injection",
    difficulty: "Hard",
    language: "Java",
    description: "SQL injection with String templates.",
    buggyCode: `String name = userInput;
String query = STR."SELECT * FROM users WHERE name = \{name}";`,
    fixedCode: `String name = userInput;
String query = "SELECT * FROM users WHERE name = ?";
// Use PreparedStatement`,
    hint: "Don't embed user input in SQL.",
    bugLine: 2,
    explanation: "String templates don't prevent SQL injection."
  },
  {
    id: 90,
    title: "Sequenced Collection Modification",
    difficulty: "Hard",
    language: "Java",
    description: "Concurrent modification of sequenced view.",
    buggyCode: `List<Integer> list = new ArrayList<>(List.of(1, 2, 3));
SequencedCollection<Integer> seq = list.reversed();
list.add(4);
System.out.println(seq); // May not reflect change`,
    fixedCode: `List<Integer> list = new ArrayList<>(List.of(1, 2, 3));
SequencedCollection<Integer> seq = list.reversed();
// Use list for modifications, seq is view
list.add(4);
System.out.println(list.reversed()); // Fresh view`,
    hint: "Reversed() returns view, not snapshot.",
    bugLine: 4,
    explanation: "Sequenced view reflects backing collection state."
  }
];