export const LEVELS_CPP = [
  // ========== EASY (1-30) ==========
  {
    id: 1,
    title: "Missing Include",
    difficulty: "Easy",
    language: "C++",
    description: "Using cout without including the correct header.",
    buggyCode: `int main() {
    std::cout << "Hello";
    return 0;
}`,
    fixedCode: `#include <iostream>

int main() {
    std::cout << "Hello";
    return 0;
}`,
    hint: "Standard IO requires a specific header.",
    bugLine: 1,
    explanation: "#include <iostream> is required for std::cout."
  },
  {
    id: 2,
    title: "Using Namespace Issue",
    difficulty: "Easy",
    language: "C++",
    description: "Forgetting std:: prefix or using namespace.",
    buggyCode: `#include <iostream>

int main() {
    cout << "Hi";
    return 0;
}`,
    fixedCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hi";
    return 0;
}`,
    hint: "Either use std::cout or using namespace std.",
    bugLine: 4,
    explanation: "cout is in the std namespace."
  },
  {
    id: 3,
    title: "Uninitialized Variable",
    difficulty: "Easy",
    language: "C++",
    description: "Using variable before assigning a value.",
    buggyCode: `int main() {
    int x;
    std::cout << x;
    return 0;
}`,
    fixedCode: `int main() {
    int x = 0;
    std::cout << x;
    return 0;
}`,
    hint: "Always initialize local variables.",
    bugLine: 3,
    explanation: "Reading uninitialized variable is undefined behavior."
  },
  {
    id: 4,
    title: "Missing Semicolon",
    difficulty: "Easy",
    language: "C++",
    description: "Statement missing terminating semicolon.",
    buggyCode: `int main() {
    std::cout << "Hello"
    return 0;
}`,
    fixedCode: `int main() {
    std::cout << "Hello";
    return 0;
}`,
    hint: "Statements in C++ end with semicolons.",
    bugLine: 2,
    explanation: "Missing semicolon after cout statement."
  },
  {
    id: 5,
    title: "Wrong Header for printf",
    difficulty: "Easy",
    language: "C++",
    description: "Using C-style printf without C header.",
    buggyCode: `int main() {
    printf("Hello");
    return 0;
}`,
    fixedCode: `#include <cstdio>

int main() {
    printf("Hello");
    return 0;
}`,
    hint: "printf requires <cstdio> or <stdio.h>.",
    bugLine: 2,
    explanation: "printf is a C function, needs C standard library header."
  },
  {
    id: 6,
    title: "Integer Division",
    difficulty: "Easy",
    language: "C++",
    description: "Dividing integers gives integer result.",
    buggyCode: `int a = 5, b = 2;
double result = a / b;`,
    fixedCode: `int a = 5, b = 2;
double result = static_cast<double>(a) / b;`,
    hint: "Cast to double before division.",
    bugLine: 2,
    explanation: "Integer division truncates fractional part."
  },
  {
    id: 7,
    title: "Comparing Floating Point",
    difficulty: "Easy",
    language: "C++",
    description: "Direct comparison of floating point numbers.",
    buggyCode: `double a = 0.1 + 0.2;
double b = 0.3;
if (a == b) {
    std::cout << "Equal";
}`,
    fixedCode: `double a = 0.1 + 0.2;
double b = 0.3;
if (abs(a - b) < 0.00001) {
    std::cout << "Equal";
}`,
    hint: "Use epsilon for floating point comparison.",
    bugLine: 3,
    explanation: "Floating point arithmetic has precision errors."
  },
  {
    id: 8,
    title: "Array Size Mismatch",
    difficulty: "Easy",
    language: "C++",
    description: "Array initialization with wrong size.",
    buggyCode: `int arr[3] = {1, 2, 3, 4};`,
    fixedCode: `int arr[4] = {1, 2, 3, 4};`,
    hint: "Array size must match initializer count.",
    bugLine: 1,
    explanation: "Initializer has 4 elements but array size is 3."
  },
  {
    id: 9,
    title: "Missing Return Type",
    difficulty: "Easy",
    language: "C++",
    description: "Function missing return type.",
    buggyCode: `add(int a, int b) {
    return a + b;
}`,
    fixedCode: `int add(int a, int b) {
    return a + b;
}`,
    hint: "All functions must have a return type.",
    bugLine: 1,
    explanation: "Function declaration needs return type before name."
  },
  {
    id: 10,
    title: "Scope of Loop Variable",
    difficulty: "Easy",
    language: "C++",
    description: "Loop variable used outside loop (pre-C++17).",
    buggyCode: `for (int i = 0; i < 5; i++) {
    // do something
}
std::cout << i;`,
    fixedCode: `int i;
for (i = 0; i < 5; i++) {
    // do something
}
std::cout << i;`,
    hint: "Declare loop variable outside if needed later.",
    bugLine: 4,
    explanation: "Loop variable i is out of scope after for loop."
  },
  {
    id: 11,
    title: "Wrong Operator Precedence",
    difficulty: "Easy",
    language: "C++",
    description: "Bit shift vs comparison precedence.",
    buggyCode: `int result = 5 << 1 + 2;`,
    fixedCode: `int result = (5 << 1) + 2;`,
    hint: "Addition has higher precedence than shift.",
    bugLine: 1,
    explanation: "+ has higher precedence than <<, so 1+2=3 then 5<<3."
  },
  {
    id: 12,
    title: "Missing Braces",
    difficulty: "Easy",
    language: "C++",
    description: "Missing braces in multi-line if statement.",
    buggyCode: `if (x > 0)
    std::cout << "Positive";
    std::cout << "Number";`,
    fixedCode: `if (x > 0) {
    std::cout << "Positive";
    std::cout << "Number";
}`,
    hint: "Use braces for multi-line if blocks.",
    bugLine: 2,
    explanation: "Without braces, only first line is in if block."
  },
  {
    id: 13,
    title: "Infinite Loop with cin",
    difficulty: "Easy",
    language: "C++",
    description: "cin in loop without exit condition.",
    buggyCode: `int value;
while (true) {
    std::cin >> value;
}`,
    fixedCode: `int value;
while (std::cin >> value) {
    // Process value
}`,
    hint: "Check stream state in loop condition.",
    bugLine: 3,
    explanation: "Loop continues even on input failure."
  },
  {
    id: 14,
    title: "String vs Character",
    difficulty: "Easy",
    language: "C++",
    description: "Confusing string literal with character.",
    buggyCode: `char c = "A";`,
    fixedCode: `char c = 'A';`,
    hint: "Characters use single quotes.",
    bugLine: 1,
    explanation: "\"A\" is string literal, 'A' is character."
  },
  {
    id: 15,
    title: "Wrong Switch Case Syntax",
    difficulty: "Easy",
    language: "C++",
    description: "Missing break in switch case.",
    buggyCode: `int x = 1;
switch(x) {
    case 1: std::cout << "One";
    case 2: std::cout << "Two"; break;
}`,
    fixedCode: `int x = 1;
switch(x) {
    case 1: std::cout << "One"; break;
    case 2: std::cout << "Two"; break;
}`,
    hint: "Each case usually needs break.",
    bugLine: 4,
    explanation: "Without break, execution falls through to next case."
  },
  {
    id: 16,
    title: "Division by Zero",
    difficulty: "Easy",
    language: "C++",
    description: "Runtime error from division.",
    buggyCode: `int a = 10 / 0;`,
    fixedCode: `int a = 0;
int divisor = 0;
if (divisor != 0) {
    a = 10 / divisor;
}`,
    hint: "Check divisor before division.",
    bugLine: 1,
    explanation: "Division by zero is undefined behavior."
  },
  {
    id: 17,
    title: "Missing Main Function",
    difficulty: "Easy",
    language: "C++",
    description: "Program without main function.",
    buggyCode: `void hello() {
    std::cout << "Hello";
}`,
    fixedCode: `#include <iostream>

void hello() {
    std::cout << "Hello";
}

int main() {
    hello();
    return 0;
}`,
    hint: "Every C++ program needs main().",
    bugLine: 1,
    explanation: "main() is the program entry point."
  },
  {
    id: 18,
    title: "Wrong Comparison Operator",
    difficulty: "Easy",
    language: "C++",
    description: "Using = instead of == in condition.",
    buggyCode: `if (x = 5) {
    std::cout << "x is 5";
}`,
    fixedCode: `if (x == 5) {
    std::cout << "x is 5";
}`,
    hint: "Use == for comparison, = for assignment.",
    bugLine: 1,
    explanation: "= is assignment, == is comparison."
  },
  {
    id: 19,
    title: "Including .cpp File",
    difficulty: "Easy",
    language: "C++",
    description: "Including implementation file instead of header.",
    buggyCode: `#include "myclass.cpp"`,
    fixedCode: `#include "myclass.h"`,
    hint: "Include header files, not source files.",
    bugLine: 1,
    explanation: "Include .h files, .cpp files get compiled separately."
  },
  {
    id: 20,
    title: "Missing Namespace Qualifier",
    difficulty: "Easy",
    language: "C++",
    description: "Using endl without std::.",
    buggyCode: `std::cout << "Hello" << endl;`,
    fixedCode: `std::cout << "Hello" << std::endl;`,
    hint: "endl is also in std namespace.",
    bugLine: 1,
    explanation: "endl needs std:: prefix like cout."
  },
  {
    id: 21,
    title: "Array as Pointer",
    difficulty: "Easy",
    language: "C++",
    description: "Taking sizeof on array parameter.",
    buggyCode: `void printSize(int arr[]) {
    std::cout << sizeof(arr);
}`,
    fixedCode: `void printSize(int arr[], int size) {
    std::cout << size;
}`,
    hint: "Array parameters decay to pointers.",
    bugLine: 2,
    explanation: "sizeof(arr) gives pointer size, not array size."
  },
  {
    id: 22,
    title: "Wrong Escape Sequence",
    difficulty: "Easy",
    language: "C++",
    description: "Invalid escape character.",
    buggyCode: `std::cout << "Path: C:\new\file.txt";`,
    fixedCode: `std::cout << "Path: C:\\new\\file.txt";`,
    hint: "Use double backslash in strings.",
    bugLine: 1,
    explanation: "Backslash starts escape sequences."
  },
  {
    id: 23,
    title: "Missing Return in main",
    difficulty: "Easy",
    language: "C++",
    description: "main() missing return statement.",
    buggyCode: `int main() {
    std::cout << "Hello";
}`,
    fixedCode: `int main() {
    std::cout << "Hello";
    return 0;
}`,
    hint: "main should return int.",
    bugLine: 1,
    explanation: "main() must return int (0 for success)."
  },
  {
    id: 24,
    title: "Using Deleted Pointer",
    difficulty: "Easy",
    language: "C++",
    description: "Deleting pointer twice.",
    buggyCode: `int* p = new int(5);
delete p;
delete p;`,
    fixedCode: `int* p = new int(5);
delete p;
p = nullptr;`,
    hint: "Set pointer to nullptr after delete.",
    bugLine: 3,
    explanation: "Double deletion is undefined behavior."
  },
  {
    id: 25,
    title: "Wrong Cast",
    difficulty: "Easy",
    language: "C++",
    description: "C-style cast for unrelated types.",
    buggyCode: `int* p = (int*)malloc(sizeof(int));`,
    fixedCode: `int* p = static_cast<int*>(malloc(sizeof(int)));`,
    hint: "Use C++ style casts.",
    bugLine: 1,
    explanation: "C-style cast bypasses type safety checks."
  },
  {
    id: 26,
    title: "Missing Default Case",
    difficulty: "Easy",
    language: "C++",
    description: "Switch without default handling.",
    buggyCode: `int x = 3;
switch(x) {
    case 1: break;
    case 2: break;
}`,
    fixedCode: `int x = 3;
switch(x) {
    case 1: break;
    case 2: break;
    default: break;
}`,
    hint: "Add default case for unexpected values.",
    bugLine: 1,
    explanation: "No case matches value 3."
  },
  {
    id: 27,
    title: "Incorrect Function Signature",
    difficulty: "Easy",
    language: "C++",
    description: "Function declaration/definition mismatch.",
    buggyCode: `// header
void process(int x);

// cpp
void process(double x) { }`,
    fixedCode: `// header
void process(int x);

// cpp
void process(int x) { }`,
    hint: "Declaration and definition must match.",
    bugLine: 5,
    explanation: "Parameter types differ between declaration and definition."
  },
  {
    id: 28,
    title: "Using auto Wrongly",
    difficulty: "Easy",
    language: "C++",
    description: "auto deducing wrong type.",
    buggyCode: `auto x = {1, 2, 3};`,
    fixedCode: `std::initializer_list<int> x = {1, 2, 3};`,
    hint: "auto with initializer list creates special type.",
    bugLine: 1,
    explanation: "auto deduces std::initializer_list, not array."
  },
  {
    id: 29,
    title: "Wrong Order of Operations",
    difficulty: "Easy",
    language: "C++",
    description: "Operator precedence confusion.",
    buggyCode: `int result = 2 + 3 * 4; // Expecting 20`,
    fixedCode: `int result = (2 + 3) * 4;`,
    hint: "Use parentheses to clarify intent.",
    bugLine: 1,
    explanation: "* has higher precedence than +, so 3*4=12 then +2=14."
  },
  {
    id: 30,
    title: "Missing Type in Template",
    difficulty: "Easy",
    language: "C++",
    description: "Template type deduction failure.",
    buggyCode: `std::vector v = {1, 2, 3}; // C++17 needed`,
    fixedCode: `std::vector<int> v = {1, 2, 3};`,
    hint: "Specify template type argument.",
    bugLine: 1,
    explanation: "Need C++17 for template argument deduction."

  // ========== MEDIUM (31-60) ==========
  },
  {
    id: 31,
    title: "Off-by-One in Loop",
    difficulty: "Medium",
    language: "C++",
    description: "Accessing past the end of an array.",
    buggyCode: `int arr[3] = {1,2,3};
for (int i = 0; i <= 3; i++) {
    std::cout << arr[i];
}`,
    fixedCode: `int arr[3] = {1,2,3};
for (int i = 0; i < 3; i++) {
    std::cout << arr[i];
}`,
    hint: "Last valid index is size - 1.",
    bugLine: 2,
    explanation: "Loop condition should be i < 3."
  },
  {
    id: 32,
    title: "Const Reference Issue",
    difficulty: "Medium",
    language: "C++",
    description: "Trying to modify a const reference.",
    buggyCode: `void print(const int& x) {
    x = 10;
}

int main() {
    int a = 5;
    print(a);
}`,
    fixedCode: `void print(const int& x) {
    std::cout << x;
}

int main() {
    int a = 5;
    print(a);
}`,
    hint: "const references cannot be modified.",
    bugLine: 2,
    explanation: "Assignment to const reference is not allowed."
  },
  {
    id: 33,
    title: "Memory Leak",
    difficulty: "Medium",
    language: "C++",
    description: "Dynamically allocated memory is never freed.",
    buggyCode: `int* ptr = new int(5);
std::cout << *ptr;`,
    fixedCode: `int* ptr = new int(5);
std::cout << *ptr;
delete ptr;`,
    hint: "Use delete for every new.",
    bugLine: 1,
    explanation: "Memory allocated with new must be freed with delete."
  },
  {
    id: 34,
    title: "Shallow Copy Problem",
    difficulty: "Medium",
    language: "C++",
    description: "Default copy copies pointer, not data.",
    buggyCode: `class String {
    char* data;
public:
    String(const char* str) {
        data = new char[strlen(str) + 1];
        strcpy(data, str);
    }
    ~String() { delete[] data; }
};`,
    fixedCode: `class String {
    char* data;
public:
    String(const char* str) {
        data = new char[strlen(str) + 1];
        strcpy(data, str);
    }
    String(const String& other) {
        data = new char[strlen(other.data) + 1];
        strcpy(data, other.data);
    }
    ~String() { delete[] data; }
};`,
    hint: "Define copy constructor for deep copy.",
    bugLine: 1,
    explanation: "Default copy does shallow copy, causing double delete."
  },
  {
    id: 35,
    title: "Iterator Invalidation",
    difficulty: "Medium",
    language: "C++",
    description: "Using iterator after container modification.",
    buggyCode: `std::vector<int> v = {1, 2, 3};
auto it = v.begin();
v.push_back(4);
std::cout << *it;`,
    fixedCode: `std::vector<int> v = {1, 2, 3};
auto it = v.begin();
std::cout << *it;
v.push_back(4);`,
    hint: "Re-acquire iterator after container modification.",
    bugLine: 4,
    explanation: "push_back may invalidate iterators."
  },
  {
    id: 36,
    title: "Multiple Definition",
    difficulty: "Medium",
    language: "C++",
    description: "Defining variable in header.",
    buggyCode: `// header.h
int globalVar = 42;`,
    fixedCode: `// header.h
extern int globalVar;

// source.cpp
int globalVar = 42;`,
    hint: "Use extern in headers.",
    bugLine: 2,
    explanation: "Variable definition in header causes multiple definitions."
  },
  {
    id: 37,
    title: "Returning Local Reference",
    difficulty: "Medium",
    language: "C++",
    description: "Returning reference to local variable.",
    buggyCode: `int& getNumber() {
    int x = 42;
    return x;
}`,
    fixedCode: `int getNumber() {
    int x = 42;
    return x;
}`,
    hint: "Don't return reference/pointer to local.",
    bugLine: 3,
    explanation: "Local variable destroyed when function returns."
  },
  {
    id: 38,
    title: "Slicing Problem",
    difficulty: "Medium",
    language: "C++",
    description: "Object slicing when copying derived to base.",
    buggyCode: `class Base { };
class Derived : public Base { };

Base b = Derived(); // slicing`,
    fixedCode: `Base* b = new Derived();
delete b;`,
    hint: "Use pointers/references for polymorphism.",
    bugLine: 4,
    explanation: "Copying Derived to Base slices off Derived part."
  },
  {
    id: 39,
    title: "Static Order Fiasco",
    difficulty: "Medium",
    language: "C++",
    description: "Static initialization order problem.",
    buggyCode: `// file1.cpp
int global = getValue();

// file2.cpp
int getValue() { return 42; }`,
    fixedCode: `// file1.cpp
int& global() {
    static int value = getValue();
    return value;
}`,
    hint: "Use function-local static.",
    bugLine: 2,
    explanation: "Initialization order of globals across files is undefined."
  },
  {
    id: 40,
    title: "Exception Safety",
    difficulty: "Medium",
    language: "C++",
    description: "Memory leak on exception.",
    buggyCode: `void process() {
    int* p = new int(5);
    mayThrow();
    delete p;
}`,
    fixedCode: `void process() {
    std::unique_ptr<int> p = std::make_unique<int>(5);
    mayThrow();
}`,
    hint: "Use RAII for exception safety.",
    bugLine: 3,
    explanation: "If mayThrow() throws, p is never deleted."
  },
  {
    id: 41,
    title: "Virtual Function Call in Constructor",
    difficulty: "Medium",
    language: "C++",
    description: "Calling virtual function in constructor.",
    buggyCode: `class Base {
public:
    Base() { init(); }
    virtual void init() = 0;
};`,
    fixedCode: `class Base {
public:
    Base() { }
    void initialize() { init(); }
    virtual void init() = 0;
};`,
    hint: "Don't call virtual functions in constructor.",
    bugLine: 3,
    explanation: "Virtual mechanism not fully set up in constructor."
  },
  {
    id: 42,
    title: "Move After Move",
    difficulty: "Medium",
    language: "C++",
    description: "Using object after std::move.",
    buggyCode: `std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = std::move(v1);
v1.push_back(4);`,
    fixedCode: `std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = std::move(v1);
// v1 is in valid but unspecified state`,
    hint: "Don't use moved-from object.",
    bugLine: 3,
    explanation: "Object after move is in valid but unspecified state."
  },
  {
    id: 43,
    title: "Integer Overflow",
    difficulty: "Medium",
    language: "C++",
    description: "Arithmetic causing overflow.",
    buggyCode: `int x = INT_MAX;
x += 1;`,
    fixedCode: `long long x = INT_MAX;
x += 1;`,
    hint: "Use larger type or check boundaries.",
    bugLine: 2,
    explanation: "Signed integer overflow is undefined behavior."
  },
  {
    id: 44,
    title: "Race Condition",
    difficulty: "Medium",
    language: "C++",
    description: "Data race in multi-threading.",
    buggyCode: `int counter = 0;

void increment() {
    counter++;
}

// Called from multiple threads`,
    fixedCode: `std::atomic<int> counter = 0;

void increment() {
    counter++;
}`,
    hint: "Use atomic or mutex for shared data.",
    bugLine: 4,
    explanation: "counter++ is not atomic operation."
  },
  {
    id: 45,
    title: "Aliasing Violation",
    difficulty: "Medium",
    language: "C++",
    description: "Type punning through pointers.",
    buggyCode: `float f = 1.0;
int i = *(int*)&f;`,
    fixedCode: `float f = 1.0;
int i;
memcpy(&i, &f, sizeof(int));`,
    hint: "Use memcpy for type punning.",
    bugLine: 2,
    explanation: "Breaking strict aliasing rule."
  },
  {
    id: 46,
    title: "Template Specialization Order",
    difficulty: "Medium",
    language: "C++",
    description: "Specialization after instantiation.",
    buggyCode: `template<typename T>
void f(T) { }

void test() {
    f(5); // Uses primary template
}

template<>
void f(int) { } // Specialization`,
    fixedCode: `template<typename T>
void f(T) { }

template<>
void f(int) { } // Specialization first

void test() {
    f(5); // Uses specialization
}`,
    hint: "Declare specialization before use.",
    bugLine: 8,
    explanation: "Specialization must appear before first use."
  },
  {
    id: 47,
    title: "Lambda Capture by Reference",
    difficulty: "Medium",
    language: "C++",
    description: "Lambda capturing local by reference.",
    buggyCode: `auto makeLambda() {
    int x = 42;
    return [&]() { return x; };
}`,
    fixedCode: `auto makeLambda() {
    int x = 42;
    return [=]() { return x; };
}`,
    hint: "Capture by value for escaping lambdas.",
    bugLine: 3,
    explanation: "Lambda returns reference to destroyed local."
  },
  {
    id: 48,
    title: "String View Lifetime",
    difficulty: "Medium",
    language: "C++",
    description: "String view outliving referenced string.",
    buggyCode: `std::string_view getView() {
    std::string s = "hello";
    return s;
}`,
    fixedCode: `std::string getString() {
    std::string s = "hello";
    return s;
}`,
    hint: "String view doesn't own data.",
    bugLine: 3,
    explanation: "String view refers to destroyed string."
  },
  {
    id: 49,
    title: "Shared_ptr Circular Reference",
    difficulty: "Medium",
    language: "C++",
    description: "Circular reference prevents deletion.",
    buggyCode: `struct Node {
    std::shared_ptr<Node> next;
};

auto a = std::make_shared<Node>();
auto b = std::make_shared<Node>();
a->next = b;
b->next = a;`,
    fixedCode: `struct Node {
    std::weak_ptr<Node> next;
};

auto a = std::make_shared<Node>();
auto b = std::make_shared<Node>();
a->next = b;
b->next = a;`,
    hint: "Use weak_ptr for back references.",
    bugLine: 1,
    explanation: "Circular shared_ptr references cause memory leak."
  },
  {
    id: 50,
    title: "Forward Declaration Issue",
    difficulty: "Medium",
    language: "C++",
    description: "Using incomplete type.",
    buggyCode: `class Incomplete;

void useSize() {
    sizeof(Incomplete); // Error
}`,
    fixedCode: `class Incomplete;

void useSize() {
    // Can't use sizeof on incomplete type
}`,
    hint: "Type must be complete for sizeof.",
    bugLine: 4,
    explanation: "Cannot use sizeof on forward-declared type."
  },
  {
    id: 51,
    title: "Namespace Pollution",
    difficulty: "Medium",
    language: "C++",
    description: "Using namespace in header.",
    buggyCode: `// header.h
using namespace std;`,
    fixedCode: `// header.h
// No using namespace in headers`,
    hint: "Avoid using namespace in headers.",
    bugLine: 2,
    explanation: "Pollutes namespace for all includers."
  },
  {
    id: 52,
    title: "Non-const Reference Binding",
    difficulty: "Medium",
    language: "C++",
    description: "Cannot bind temporary to non-const ref.",
    buggyCode: `void modify(int& x) { x++; }

modify(5);`,
    fixedCode: `void modify(int& x) { x++; }

int x = 5;
modify(x);`,
    hint: "Temporaries can't bind to non-const references.",
    bugLine: 3,
    explanation: "Literal 5 is temporary, can't bind to non-const ref."
  },
  {
    id: 53,
    title: "Buffer Overflow",
    difficulty: "Medium",
    language: "C++",
    description: "Writing past array bounds.",
    buggyCode: `char buffer[10];
strcpy(buffer, "Hello World");`,
    fixedCode: `char buffer[20];
strncpy(buffer, "Hello World", sizeof(buffer)-1);
buffer[sizeof(buffer)-1] = '\\0';`,
    hint: "Use bounds-checked functions.",
    bugLine: 2,
    explanation: "String longer than buffer size."
  },
  {
    id: 54,
    title: "Move Constructor noexcept",
    difficulty: "Medium",
    language: "C++",
    description: "Move constructor not noexcept.",
    buggyCode: `class Resource {
    int* data;
public:
    Resource(Resource&& other) {
        data = other.data;
        other.data = nullptr;
    }
};`,
    fixedCode: `class Resource {
    int* data;
public:
    Resource(Resource&& other) noexcept {
        data = other.data;
        other.data = nullptr;
    }
};`,
    hint: "Mark move operations as noexcept.",
    bugLine: 4,
    explanation: "Standard library optimizes for noexcept moves."
  },
  {
    id: 55,
    title: "ADL Surprise",
    difficulty: "Medium",
    language: "C++",
    description: "Argument-dependent lookup issue.",
    buggyCode: `namespace N {
    class C {};
    void swap(C&, C&) { }
}

void test() {
    N::C a, b;
    swap(a, b); // Calls std::swap?
}`,
    fixedCode: `namespace N {
    class C {};
    void swap(C&, C&) { }
}

void test() {
    N::C a, b;
    using std::swap;
    swap(a, b); // Calls N::swap
}`,
    hint: "Use using std::swap then unqualified swap.",
    bugLine: 10,
    explanation: "ADL finds N::swap but might find std::swap too."
  },
  {
    id: 56,
    title: "Floating Point Exception",
    difficulty: "Medium",
    language: "C++",
    description: "Floating point operation causing exception.",
    buggyCode: `double x = 0.0;
double y = 1.0 / x;`,
    fixedCode: `double x = 0.0;
if (x != 0.0) {
    double y = 1.0 / x;
}`,
    hint: "Check for division by zero.",
    bugLine: 2,
    explanation: "Division by zero with floating point may produce inf."
  },
  {
    id: 57,
    title: "Template Non-Type Parameter",
    difficulty: "Medium",
    language: "C++",
    description: "Using auto in template parameter.",
    buggyCode: `template<auto N>
void f() { }

f<"invalid">();`,
    fixedCode: `template<int N>
void f() { }

f<42>();`,
    hint: "Non-type template parameters have restrictions.",
    bugLine: 1,
    explanation: "String literal can't be template non-type parameter."
  },
  {
    id: 58,
    title: "Exception in Destructor",
    difficulty: "Medium",
    language: "C++",
    description: "Throwing from destructor.",
    buggyCode: `~MyClass() {
    if (error) throw std::runtime_error("error");
}`,
    fixedCode: `~MyClass() noexcept(false) {
    if (error) {
        try { /* handle */ }
        catch (...) { /* log */ }
    }
}`,
    hint: "Destructors should not throw.",
    bugLine: 2,
    explanation: "Throwing from destructor during stack unwinding terminates."
  },
  {
    id: 59,
    title: "SFINAE vs Static Assert",
    difficulty: "Medium",
    language: "C++",
    description: "Using static_assert in template.",
    buggyCode: `template<typename T>
void process(T t) {
    static_assert(std::is_integral_v<T>);
}`,
    fixedCode: `template<typename T, typename = std::enable_if_t<std::is_integral_v<T>>>
void process(T t) { }`,
    hint: "Use SFINAE, not static_assert.",
    bugLine: 3,
    explanation: "static_assert fails hard, SFINAE removes from overload set."
  },
  {
    id: 60,
    title: "Volatile Misunderstanding",
    difficulty: "Medium",
    language: "C++",
    description: "Using volatile for threading.",
    buggyCode: `volatile int flag = 0;

void thread1() {
    while (!flag) { } // Spin
}

void thread2() {
    flag = 1;
}`,
    fixedCode: `std::atomic<int> flag = 0;

void thread1() {
    while (!flag.load()) { } // Spin
}

void thread2() {
    flag.store(1);
}`,
    hint: "volatile is for hardware, not threading.",
    bugLine: 1,
    explanation: "volatile doesn't guarantee atomicity or ordering."

  // ========== HARD (61-90) ==========
  },
  {
    id: 61,
    title: "Dangling Pointer",
    difficulty: "Hard",
    language: "C++",
    description: "Using pointer after freeing memory.",
    buggyCode: `int* p = new int(10);
delete p;
std::cout << *p;`,
    fixedCode: `int* p = new int(10);
std::cout << *p;
delete p;
p = nullptr;`,
    hint: "Never access freed memory.",
    bugLine: 3,
    explanation: "Dereferencing a freed pointer is undefined behavior."
  },
  {
    id: 62,
    title: "Missing Virtual Destructor",
    difficulty: "Hard",
    language: "C++",
    description: "Deleting derived object via base pointer leaks.",
    buggyCode: `class Base {
public:
    ~Base() {}
};

class Derived : public Base {
public:
    ~Derived() {}
};`,
    fixedCode: `class Base {
public:
    virtual ~Base() {}
};

class Derived : public Base {
public:
    ~Derived() {}
};`,
    hint: "Base classes with virtual methods need virtual destructors.",
    bugLine: 3,
    explanation: "Without virtual destructor, Derived cleanup might not run."
  },
  {
    id: 63,
    title: "Copy vs Reference",
    difficulty: "Hard",
    language: "C++",
    description: "Passing by value instead of reference causes bugs.",
    buggyCode: `void increment(int x) {
    x++;
}

int main() {
    int a = 5;
    increment(a);
    std::cout << a;
}`,
    fixedCode: `void increment(int& x) {
    x++;
}

int main() {
    int a = 5;
    increment(a);
    std::cout << a;
}`,
    hint: "Decide if function should modify original variable.",
    bugLine: 1,
    explanation: "Pass by value copies; pass by reference modifies original."
  },
  {
    id: 64,
    title: "Missing Return Statement",
    difficulty: "Hard",
    language: "C++",
    description: "Non-void function doesn't return a value.",
    buggyCode: `int add(int a, int b) {
    int c = a + b;
}

int main() {
    std::cout << add(2,3);
}`,
    fixedCode: `int add(int a, int b) {
    int c = a + b;
    return c;
}

int main() {
    std::cout << add(2,3);
}`,
    hint: "All paths must return a value for non-void functions.",
    bugLine: 1,
    explanation: "Undefined behavior when a non-void function doesn't return."
  },
  {
    id: 65,
    title: "Rule of Three/Five Violation",
    difficulty: "Hard",
    language: "C++",
    description: "Missing copy/move operations.",
    buggyCode: `class Buffer {
    int* data;
    size_t size;
public:
    Buffer(size_t sz) : data(new int[sz]), size(sz) {}
    ~Buffer() { delete[] data; }
};`,
    fixedCode: `class Buffer {
    int* data;
    size_t size;
public:
    Buffer(size_t sz) : data(new int[sz]), size(sz) {}
    ~Buffer() { delete[] data; }
    
    // Rule of Five
    Buffer(const Buffer& other) : data(new int[other.size]), size(other.size) {
        std::copy(other.data, other.data + size, data);
    }
    Buffer& operator=(const Buffer& other) {
        if (this != &other) {
            delete[] data;
            data = new int[other.size];
            size = other.size;
            std::copy(other.data, other.data + size, data);
        }
        return *this;
    }
    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
    }
    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
            other.size = 0;
        }
        return *this;
    }
};`,
    hint: "Follow Rule of Three/Five.",
    bugLine: 1,
    explanation: "Missing copy/move operations for resource-managing class."
  },
  {
    id: 66,
    title: "Exception in Constructor",
    difficulty: "Hard",
    language: "C++",
    description: "Constructor throws after resource acquisition.",
    buggyCode: `class Resource {
    int* data;
    File* file;
public:
    Resource() : data(new int[100]) {
        file = new File("test.txt"); // Might throw
    }
    ~Resource() {
        delete[] data;
        delete file;
    }
};`,
    fixedCode: `class Resource {
    std::unique_ptr<int[]> data;
    std::unique_ptr<File> file;
public:
    Resource() : data(std::make_unique<int[]>(100)) {
        file = std::make_unique<File>("test.txt");
    }
};`,
    hint: "Use RAII members.",
    bugLine: 5,
    explanation: "If new File throws, data is leaked."
  },
  {
    id: 67,
    title: "ODR Violation",
    difficulty: "Hard",
    language: "C++",
    description: "One Definition Rule violation.",
    buggyCode: `// file1.cpp
inline int global = 42;

// file2.cpp
inline int global = 43;`,
    fixedCode: `// header.h
inline int global = 42;`,
    hint: "Inline variables must have same definition everywhere.",
    bugLine: 2,
    explanation: "Different definitions of inline variable violate ODR."
  },
  {
    id: 68,
    title: "Thread Safety Static Local",
    difficulty: "Hard",
    language: "C++",
    description: "Static local initialization not thread-safe pre-C++11.",
    buggyCode: `// Pre-C++11
Singleton& getInstance() {
    static Singleton instance;
    return instance;
}`,
    fixedCode: `// C++11 or later
Singleton& getInstance() {
    static Singleton instance;
    return instance;
}

// Pre-C++11: use double-checked locking`,
    hint: "C++11 guarantees thread-safe static initialization.",
    bugLine: 3,
    explanation: "Pre-C++11, static local initialization not thread-safe."
  },
  {
    id: 69,
    title: "Coroutine Lifetime",
    difficulty: "Hard",
    language: "C++",
    description: "Coroutine referencing destroyed locals.",
    buggyCode: `generator<int> makeNumbers() {
    int local = 42;
    co_yield local;
    // local destroyed after suspension
}`,
    fixedCode: `generator<int> makeNumbers() {
    int local = 42;
    co_yield local + 0; // Copy value
}`,
    hint: "Coroutine suspension may extend lifetime issues.",
    bugLine: 3,
    explanation: "Coroutine may resume after locals are destroyed."
  },
  {
    id: 70,
    title: "Non-Trivial Type in Union",
    difficulty: "Hard",
    language: "C++",
    description: "Union with non-trivial types.",
    buggyCode: `union U {
    std::string s;
    int i;
};`,
    fixedCode: `union U {
    std::string s;
    int i;
    
    U() : i(0) {}
    ~U() { /* manual destruction needed */ }
};`,
    hint: "Unions with non-trivial types need special handling.",
    bugLine: 2,
    explanation: "Union doesn't know which member is active."
  },
  {
    id: 71,
    title: "ABI Compatibility",
    difficulty: "Hard",
    language: "C++",
    description: "Changing inline function definition.",
    buggyCode: `// v1.h
inline int process(int x) { return x * 2; }

// v2.h
inline int process(int x) { return x * 3; }`,
    fixedCode: `// Use different function name or version`,
    hint: "Inline functions are part of ABI.",
    bugLine: 4,
    explanation: "Changing inline function breaks ABI compatibility."
  },
  {
    id: 72,
    title: "Pointer to Member Complexity",
    difficulty: "Hard",
    language: "C++",
    description: "Pointer to member function issues.",
    buggyCode: `class Base {
public:
    virtual void foo() {}
};

class Derived : public Base {
public:
    void foo() override {}
};

void (Base::*ptr)() = &Derived::foo;`,
    fixedCode: `void (Derived::*ptr)() = &Derived::foo;`,
    hint: "Pointer to member types must match exactly.",
    bugLine: 11,
    explanation: "Cannot point to Derived member with Base pointer-to-member."
  },
  {
    id: 73,
    title: "Template Metaprogramming Recursion",
    difficulty: "Hard",
    language: "C++",
    description: "Infinite template recursion.",
    buggyCode: `template<int N>
struct Factorial {
    static const int value = N * Factorial<N - 1>::value;
};

template<>
struct Factorial<0> {
    static const int value = 1;
};

int x = Factorial<-1>::value;`,
    fixedCode: `template<int N>
struct Factorial {
    static_assert(N >= 0, "N must be non-negative");
    static const int value = N * Factorial<N - 1>::value;
};`,
    hint: "Add static_assert for termination condition.",
    bugLine: 1,
    explanation: "Factorial<-1> causes infinite template recursion."
  },
  {
    id: 74,
    title: "Floating Point Non-Determinism",
    difficulty: "Hard",
    language: "C++",
    description: "Floating point results vary across platforms.",
    buggyCode: `double x = 0.1;
double y = 0.2;
double z = 0.3;
bool equal = (x + y == z);`,
    fixedCode: `bool equal = std::abs((x + y) - z) < std::numeric_limits<double>::epsilon();`,
    hint: "Floating point is not exact.",
    bugLine: 4,
    explanation: "0.1 + 0.2 != 0.3 exactly in binary floating point."
  },
  {
    id: 75,
    title: "Move-Only Type Copy Attempt",
    difficulty: "Hard",
    language: "C++",
    description: "Trying to copy move-only type.",
    buggyCode: `std::unique_ptr<int> p1 = std::make_unique<int>(5);
std::unique_ptr<int> p2 = p1;`,
    fixedCode: `std::unique_ptr<int> p1 = std::make_unique<int>(5);
std::unique_ptr<int> p2 = std::move(p1);`,
    hint: "Move-only types can't be copied.",
    bugLine: 2,
    explanation: "unique_ptr copy constructor is deleted."
  },
  {
    id: 76,
    title: "Template Template Parameter",
    difficulty: "Hard",
    language: "C++",
    description: "Template template parameter matching.",
    buggyCode: `template<template<typename> class Container>
void process(Container<int>& c) { }

std::vector<int> v;
process(v);`,
    fixedCode: `template<template<typename...> class Container>
void process(Container<int>& c) { }`,
    hint: "Template template parameters need exact match.",
    bugLine: 1,
    explanation: "std::vector has more template parameters than expected."
  },
  {
    id: 77,
    title: "Signal Handler Safety",
    difficulty: "Hard",
    language: "C++",
    description: "Non-async-signal-safe function in signal handler.",
    buggyCode: `void handler(int) {
    std::cout << "Signal received"; // Unsafe
}`,
    fixedCode: `volatile sig_atomic_t flag = 0;

void handler(int) {
    flag = 1; // Async-signal-safe
}`,
    hint: "Only async-signal-safe functions in signal handlers.",
    bugLine: 2,
    explanation: "cout is not async-signal-safe."
  },
  {
    id: 78,
    title: "constexpr Function Restrictions",
    difficulty: "Hard",
    language: "C++",
    description: "constexpr function with disallowed operations.",
    buggyCode: `constexpr int compute() {
    static int counter = 0; // Not allowed
    return ++counter;
}`,
    fixedCode: `constexpr int compute(int input) {
    return input + 1;
}`,
    hint: "constexpr functions have restrictions.",
    bugLine: 2,
    explanation: "static variables not allowed in constexpr functions."
  },
  {
    id: 79,
    title: "Variadic Template Expansion",
    difficulty: "Hard",
    language: "C++",
    description: "Wrong pack expansion pattern.",
    buggyCode: `template<typename... Ts>
void print(Ts... args) {
    std::cout << args...; // Wrong
}`,
    fixedCode: `template<typename... Ts>
void print(Ts... args) {
    (std::cout << ... << args); // Fold expression
}`,
    hint: "Use fold expressions or helper function.",
    bugLine: 3,
    explanation: "args... expands to comma-separated list, not << separated."
  },
  {
    id: 80,
    title: "Alignment Requirements",
    difficulty: "Hard",
    language: "C++",
    description: "Misaligned memory access.",
    buggyCode: `char buffer[100];
int* p = reinterpret_cast<int*>(&buffer[1]);
*p = 42;`,
    fixedCode: `alignas(int) char buffer[100];
int* p = reinterpret_cast<int*>(buffer);`,
    hint: "Respect type alignment requirements.",
    bugLine: 3,
    explanation: "int requires alignment, buffer[1] may be misaligned."
  },
  {
    id: 81,
    title: "Forwarding Reference Collision",
    difficulty: "Hard",
    language: "C++",
    description: "Forwarding reference matches too much.",
    buggyCode: `template<typename T>
void process(T&& value) {
    // Perfect forwarding
}

class Widget { };

void process(Widget& w); // Overload

Widget w;
process(w); // Calls template, not overload`,
    fixedCode: `template<typename T>
void process(T&& value) {
    // Perfect forwarding
}

class Widget { };

void process(Widget& w); // Overload

template<typename T>
void process(T&& value) {
    // Use type traits to constrain
    if constexpr (std::is_same_v<std::decay_t<T>, Widget>) {
        // Handle Widget specially
    }
}`,
    hint: "Forwarding references are greedy.",
    bugLine: 11,
    explanation: "T&& matches lvalues better than Widget& overload."
  },
  {
    id: 82,
    title: "Coroutine Promise Type",
    difficulty: "Hard",
    language: "C++",
    description: "Missing promise_type definition.",
    buggyCode: `struct MyGenerator {
    // Missing promise_type
};

MyGenerator generate() {
    co_yield 1;
}`,
    fixedCode: `struct MyGenerator {
    struct promise_type {
        // Required members
        MyGenerator get_return_object() { return {}; }
        std::suspend_always initial_suspend() { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() { std::terminate(); }
        std::suspend_always yield_value(int) { return {}; }
    };
};`,
    hint: "Coroutine return type needs promise_type.",
    bugLine: 1,
    explanation: "Coroutine return type must have nested promise_type."
  },
  {
    id: 83,
    title: "CTAD Issue",
    difficulty: "Hard",
    language: "C++",
    description: "Class Template Argument Deduction failure.",
    buggyCode: `template<typename T>
struct Wrapper {
    Wrapper(T) {}
};

Wrapper w{5}; // CTAD works
Wrapper w2{"hello"}; // CTAD deduces const char*`,
    fixedCode: `template<typename T>
struct Wrapper {
    Wrapper(T) {}
};

template<typename CharT>
Wrapper(const CharT*) -> Wrapper<std::string>;

Wrapper w{5};
Wrapper w2{"hello"}; // Now deduces Wrapper<std::string>`,
    hint: "Provide deduction guides when needed.",
    bugLine: 8,
    explanation: "CTAD deduces const char*, not std::string."
  },
  {
    id: 84,
    title: "Memory Ordering",
    difficulty: "Hard",
    language: "C++",
    description: "Wrong memory ordering for atomic operations.",
    buggyCode: `std::atomic<int> data{0};
std::atomic<bool> ready{false};

// Thread 1
data.store(42, std::memory_order_relaxed);
ready.store(true, std::memory_order_relaxed);

// Thread 2
while (!ready.load(std::memory_order_relaxed)) {}
int value = data.load(std::memory_order_relaxed);`,
    fixedCode: `// Thread 1
data.store(42, std::memory_order_release);
ready.store(true, std::memory_order_release);

// Thread 2
while (!ready.load(std::memory_order_acquire)) {}
int value = data.load(std::memory_order_acquire);`,
    hint: "Use acquire-release ordering for synchronization.",
    bugLine: 6,
    explanation: "Relaxed ordering doesn't guarantee visibility ordering."
  },
  {
    id: 85,
    title: "Source Location Default Argument",
    difficulty: "Hard",
    language: "C++",
    description: "Default argument evaluation time.",
    buggyCode: `void log(const char* msg,
          const std::source_location& loc = 
               std::source_location::current()) {
    std::cout << loc.file_name();
}

void inner() {
    log("test"); // Shows log's location, not inner's
}`,
    fixedCode: `void log(const char* msg,
          const std::source_location& loc = 
               std::source_location::current()) {
    std::cout << loc.file_name();
}

#define LOG(msg) log(msg, std::source_location::current())

void inner() {
    LOG("test"); // Shows inner's location
}`,
    hint: "Default arguments evaluated at call site.",
    bugLine: 3,
    explanation: "source_location::current() captures where default argument appears."
  },
  {
    id: 86,
    title: "Three-Way Comparison Issue",
    difficulty: "Hard",
    language: "C++",
    description: "Spaceship operator with floating point.",
    buggyCode: `struct Point {
    double x, y;
    
    auto operator<=>(const Point&) const = default;
};

Point a{0.1, 0.2};
Point b{0.1, 0.2};
bool equal = (a == b); // Might be false`,
    fixedCode: `struct Point {
    double x, y;
    
    bool operator==(const Point& other) const {
        return std::abs(x - other.x) < epsilon &&
               std::abs(y - other.y) < epsilon;
    }
    
    auto operator<=>(const Point&) const = default;
};`,
    hint: "Override == for floating point members.",
    bugLine: 5,
    explanation: "Default <=> uses exact comparison for floating point."
  },
  {
    id: 87,
    title: "Module Interface Partition",
    difficulty: "Hard",
    language: "C++",
    description: "Module partition visibility.",
    buggyCode: `// module.cppm
export module MyModule;

export import :Partition; // Error: partition not defined yet

module :Partition;
export void foo() {}`,
    fixedCode: `// module.cppm
export module MyModule;

module :Partition;
export void foo() {}

export import :Partition;`,
    hint: "Define partitions before exporting them.",
    bugLine: 4,
    explanation: "Cannot export import partition before it's defined."
  },
  {
    id: 88,
    title: "Coroutine Heap Allocation",
    difficulty: "Hard",
    language: "C++",
    description: "Coroutine state allocation overhead.",
    buggyCode: `generator<int> makeSequence() {
    for (int i = 0; i < 1000000; ++i) {
        co_yield i; // Each yield may allocate
    }
}`,
    fixedCode: `// Consider alternative designs for high-frequency coroutines
// Or use custom allocator for coroutine state`,
    hint: "Coroutines have allocation overhead.",
    bugLine: 3,
    explanation: "Coroutine state may be heap-allocated on first suspension."
  },
  {
    id: 89,
    title: "Structured Binding with Inheritance",
    difficulty: "Hard",
    language: "C++",
    description: "Structured binding doesn't work with inheritance.",
    buggyCode: `struct Base { int x; };
struct Derived : Base { int y; };

Derived d{1, 2};
auto [a, b] = d; // Only gets x`,
    fixedCode: `struct Derived {
    int x, y;
};

Derived d{1, 2};
auto [a, b] = d; // Gets both x and y`,
    hint: "Structured binding works on all public members.",
    bugLine: 6,
    explanation: "Structured binding doesn't traverse inheritance hierarchy."
  },
  {
    id: 90,
    title: "NTTP with Floating Point (C++20)",
    difficulty: "Hard",
    language: "C++",
    description: "Non-type template parameter with floating point.",
    buggyCode: `template<double Value>
struct Widget {
    static constexpr double value = Value;
};

Widget<3.14> w;`,
    fixedCode: `template<auto Value>
struct Widget {
    static constexpr auto value = Value;
};

Widget<3.14> w;`,
    hint: "C++20 allows floating point NTTPs.",
    bugLine: 1,
    explanation: "double as NTTP requires C++20, auto deduction works."
  }
];