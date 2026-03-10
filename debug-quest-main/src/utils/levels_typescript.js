export const LEVELS_TYPESCRIPT = [
  // ============ EASY (1-30) ============
  {
    id: 701,
    title: "Implicit Any",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Function parameter type is not defined.",
    buggyCode: "function greet(name) {\n  return \"Hello \" + name;\n}",
    fixedCode: "function greet(name: string): string {\n  return \"Hello \" + name;\n}",
    hint: "Enable noImplicitAny and fix all any types.",
    bugLine: 1,
    explanation: "name was inferred as any; it should be string."
  },

  {
    id: 702,
    title: "Mismatched Return Type",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Declared return type doesn't match actual value.",
    buggyCode: "function add(a: number, b: number): string {\n  return a + b;\n}",
    fixedCode: "function add(a: number, b: number): number {\n  return a + b;\n}",
    hint: "Check that return type matches the operation.",
    bugLine: 1,
    explanation: "Adding two numbers returns number, not string."
  },

  {
    id: 703,
    title: "Missing Type Annotation",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Variable declared without type.",
    buggyCode: "let score = 100;\nscore = \"perfect\";",
    fixedCode: "let score: number = 100;\n// score = \"perfect\"; // This would cause error",
    hint: "Initialize variables with explicit types.",
    bugLine: 2,
    explanation: "score inferred as number, cannot assign string."
  },

  {
    id: 704,
    title: "Array Type Missing",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Array elements should have consistent types.",
    buggyCode: "const numbers = [1, 2, 3];\nnumbers.push(\"four\");",
    fixedCode: "const numbers: number[] = [1, 2, 3];\n// numbers.push(\"four\"); // Error",
    hint: "Define array type explicitly.",
    bugLine: 2,
    explanation: "Array inferred as number[], cannot push string."
  },

  {
    id: 705,
    title: "Any Type Overuse",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Using 'any' instead of proper type.",
    buggyCode: "function process(data: any) {\n  return data.length;\n}",
    fixedCode: "function process(data: string | any[]) {\n  return data.length;\n}",
    hint: "Replace 'any' with specific types.",
    bugLine: 1,
    explanation: "any bypasses type checking; use union types."
  },

  {
    id: 706,
    title: "Void Return Expected",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Function should not return a value.",
    buggyCode: "function logMessage(msg: string): void {\n  return msg;\n}",
    fixedCode: "function logMessage(msg: string): void {\n  console.log(msg);\n}",
    hint: "void functions cannot return values.",
    bugLine: 2,
    explanation: "void return type prohibits returning values."
  },

  {
    id: 707,
    title: "Boolean Type Issue",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Condition expects boolean.",
    buggyCode: "let isReady = 1;\nif (isReady) {\n  console.log(\"Ready\");\n}",
    fixedCode: "let isReady: boolean = true;\nif (isReady) {\n  console.log(\"Ready\");\n}",
    hint: "Use boolean type for conditions.",
    bugLine: 2,
    explanation: "TypeScript expects boolean in condition."
  },

  {
    id: 708,
    title: "String Concatenation Type",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Can't add string to number implicitly.",
    buggyCode: "let age = 25;\nlet message = \"Age: \" + age;",
    fixedCode: "let age: number = 25;\nlet message: string = \"Age: \" + age.toString();",
    hint: "Convert number to string explicitly.",
    bugLine: 2,
    explanation: "Implicit conversion is okay, but explicit is better."
  },

  {
    id: 709,
    title: "Object Property Missing",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Accessing undefined property.",
    buggyCode: "const user = { name: \"John\" };\nconsole.log(user.age);",
    fixedCode: "const user = { name: \"John\", age: 25 };\nconsole.log(user.age);",
    hint: "Define all properties in type.",
    bugLine: 2,
    explanation: "Property 'age' doesn't exist on user object."
  },

  {
    id: 710,
    title: "Function Parameter Count",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Wrong number of arguments.",
    buggyCode: "function multiply(a: number, b: number): number {\n  return a * b;\n}\nmultiply(5);",
    fixedCode: "function multiply(a: number, b: number = 1): number {\n  return a * b;\n}\nmultiply(5);",
    hint: "Make parameter optional or provide default.",
    bugLine: 4,
    explanation: "Expected 2 arguments, got 1."
  },

  {
    id: 711,
    title: "Type Literal Assignment",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Assigning wrong value to literal type.",
    buggyCode: "let status: \"active\" | \"inactive\" = \"pending\";",
    fixedCode: "let status: \"active\" | \"inactive\" = \"active\";",
    hint: "Only allowed values can be assigned.",
    bugLine: 1,
    explanation: "\"pending\" is not in the union type."
  },

  {
    id: 712,
    title: "Const Assertion",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Mutable array assigned to readonly.",
    buggyCode: "const colors = [\"red\", \"green\", \"blue\"] as const;\ncolors.push(\"yellow\");",
    fixedCode: "const colors = [\"red\", \"green\", \"blue\"];\ncolors.push(\"yellow\");",
    hint: "as const makes array readonly.",
    bugLine: 2,
    explanation: "Cannot push to readonly array."
  },

  {
    id: 713,
    title: "Type Alias Usage",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Type alias not used correctly.",
    buggyCode: "type User = { name: string };\nconst user = { name: \"John\", age: 25 };",
    fixedCode: "type User = { name: string; age: number };\nconst user: User = { name: \"John\", age: 25 };",
    hint: "Update type alias to match object.",
    bugLine: 2,
    explanation: "Object has extra property not in type."
  },

  {
    id: 714,
    title: "Union Type Method",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Calling method not common to union.",
    buggyCode: "let value: string | number;\nconsole.log(value.toUpperCase());",
    fixedCode: "let value: string | number;\nif (typeof value === \"string\") {\n  console.log(value.toUpperCase());\n}",
    hint: "Use type guard before method call.",
    bugLine: 2,
    explanation: "toUpperCase doesn't exist on number."
  },

  {
    id: 715,
    title: "Optional Parameter Order",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Required parameter after optional.",
    buggyCode: "function greet(greeting?: string, name: string) {\n  return greeting + \" \" + name;\n}",
    fixedCode: "function greet(name: string, greeting?: string) {\n  return greeting ? greeting + \" \" + name : name;\n}",
    hint: "Required parameters must come first.",
    bugLine: 1,
    explanation: "Required parameter cannot follow optional."
  },

  {
    id: 716,
    title: "Interface Property",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Missing required interface property.",
    buggyCode: "interface Person {\n  name: string;\n  age: number;\n}\nconst person: Person = { name: \"John\" };",
    fixedCode: "interface Person {\n  name: string;\n  age: number;\n}\nconst person: Person = { name: \"John\", age: 25 };",
    hint: "All required properties must be present.",
    bugLine: 5,
    explanation: "Missing required property 'age'."
  },

  {
    id: 717,
    title: "Typeof Operator",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Using wrong type with typeof.",
    buggyCode: "let value = \"hello\";\nif (typeof value === \"number\") {\n  console.log(value.toFixed(2));\n}",
    fixedCode: "let value = \"hello\";\nif (typeof value === \"string\") {\n  console.log(value.toUpperCase());\n}",
    hint: "Check actual type of variable.",
    bugLine: 2,
    explanation: "value is string, not number."
  },

  {
    id: 718,
    title: "Array Method Type",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Wrong callback type for array method.",
    buggyCode: "const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num.toUpperCase());",
    fixedCode: "const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);",
    hint: "Map callback should return appropriate type.",
    bugLine: 2,
    explanation: "toUpperCase doesn't exist on numbers."
  },

  {
    id: 719,
    title: "Enum Value Assignment",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Wrong enum value assignment.",
    buggyCode: "enum Color { Red, Green, Blue }\nlet myColor: Color = \"Red\";",
    fixedCode: "enum Color { Red, Green, Blue }\nlet myColor: Color = Color.Red;",
    hint: "Use enum member, not string.",
    bugLine: 2,
    explanation: "Enum type expects enum member."
  },

  {
    id: 720,
    title: "Template Literal Type",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Wrong template literal usage.",
    buggyCode: "let id: `user-${string}` = \"user123\";",
    fixedCode: "let id: `user-${string}` = \"user-123\";",
    hint: "Must match exact pattern.",
    bugLine: 1,
    explanation: "Missing 'user-' prefix."
  },

  {
    id: 721,
    title: "Never Type Function",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Function that never returns.",
    buggyCode: "function error(msg: string): void {\n  throw new Error(msg);\n}",
    fixedCode: "function error(msg: string): never {\n  throw new Error(msg);\n}",
    hint: "Use never for functions that never return.",
    bugLine: 1,
    explanation: "void is for functions that return nothing."
  },

  {
    id: 722,
    title: "Readonly Array",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Modifying readonly array.",
    buggyCode: "const numbers: readonly number[] = [1, 2, 3];\nnumbers[0] = 10;",
    fixedCode: "const numbers: readonly number[] = [1, 2, 3];\n// numbers[0] = 10; // Not allowed\nconst newNumbers = [10, ...numbers.slice(1)];",
    hint: "Create new array instead of modifying.",
    bugLine: 2,
    explanation: "Cannot modify readonly array elements."
  },

  {
    id: 723,
    title: "Type Inference Error",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Type inference too strict.",
    buggyCode: "const config = {\n  apiUrl: \"https://api.example.com\",\n  timeout: 5000\n};\nconfig.apiUrl = \"https://new.api.com\";",
    fixedCode: "let config = {\n  apiUrl: \"https://api.example.com\",\n  timeout: 5000\n};\nconfig.apiUrl = \"https://new.api.com\";",
    hint: "Use let instead of const for mutable objects.",
    bugLine: 4,
    explanation: "const inference makes properties readonly."
  },

  {
    id: 724,
    title: "Function Type Assignment",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Assigning wrong function type.",
    buggyCode: "type MathFunc = (x: number) => number;\nconst square: MathFunc = (x: string) => x.length;",
    fixedCode: "type MathFunc = (x: number) => number;\nconst square: MathFunc = (x: number) => x * x;",
    hint: "Function signature must match type.",
    bugLine: 2,
    explanation: "Parameter and return types don't match."
  },

  {
    id: 725,
    title: "Index Signature",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Accessing dynamic property without index signature.",
    buggyCode: "const obj = { a: 1, b: 2 };\nconsole.log(obj[\"c\"]);",
    fixedCode: "interface MyObject {\n  [key: string]: number;\n  a: number;\n  b: number;\n}\nconst obj: MyObject = { a: 1, b: 2 };\nconsole.log(obj[\"c\"] || 0);",
    hint: "Add index signature for dynamic properties.",
    bugLine: 2,
    explanation: "Property 'c' doesn't exist on type."
  },

  {
    id: 726,
    title: "Tuple Type",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Wrong tuple assignment.",
    buggyCode: "let point: [number, number] = [10, 20, 30];",
    fixedCode: "let point: [number, number] = [10, 20];",
    hint: "Tuple has fixed length.",
    bugLine: 1,
    explanation: "Tuple expects exactly 2 elements."
  },

  {
    id: 727,
    title: "Class Property Init",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Class property not initialized.",
    buggyCode: "class User {\n  name: string;\n  constructor() {}\n}",
    fixedCode: "class User {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}",
    hint: "Initialize properties in constructor.",
    bugLine: 2,
    explanation: "Property 'name' has no initializer."
  },

  {
    id: 728,
    title: "Generic Array",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Generic type not specified.",
    buggyCode: "function firstElement(arr: any[]) {\n  return arr[0];\n}",
    fixedCode: "function firstElement<T>(arr: T[]): T {\n  return arr[0];\n}",
    hint: "Use generics for type-safe functions.",
    bugLine: 1,
    explanation: "any loses type information."
  },

  {
    id: 729,
    title: "String Enum",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Wrong string enum usage.",
    buggyCode: "enum Status {\n  Active = \"active\",\n  Inactive = \"inactive\"\n}\nlet s: Status = \"active\";",
    fixedCode: "enum Status {\n  Active = \"active\",\n  Inactive = \"inactive\"\n}\nlet s: Status = Status.Active;",
    hint: "String enums still require enum member access.",
    bugLine: 5,
    explanation: "Cannot assign string directly to enum type."
  },

  {
    id: 730,
    title: "Type Predicate",
    difficulty: "Easy",
    language: "TypeScript",
    description: "Missing type predicate in guard.",
    buggyCode: "function isString(value: any) {\n  return typeof value === \"string\";\n}",
    fixedCode: "function isString(value: any): value is string {\n  return typeof value === \"string\";\n}",
    hint: "Add type predicate for type narrowing.",
    bugLine: 1,
    explanation: "Without predicate, TypeScript doesn't narrow type."
  },

  // ============ MEDIUM (31-60) ============
  {
    id: 731,
    title: "Optional Property Access",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Accessing possibly undefined property.",
    buggyCode: "type User = { name: string; age?: number };\nconst u: User = { name: \"Tom\" };\nconsole.log(u.age.toFixed(0));",
    fixedCode: "type User = { name: string; age?: number };\nconst u: User = { name: \"Tom\" };\nif (u.age !== undefined) {\n  console.log(u.age.toFixed(0));\n}",
    hint: "Optional properties must be checked before usage.",
    bugLine: 3,
    explanation: "age can be undefined; cannot call toFixed on undefined."
  },

  {
    id: 732,
    title: "Enum Misuse",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Using wrong enum member.",
    buggyCode: "enum Role {\n  User,\n  Admin\n}\n\nlet r: Role = \"Admin\";",
    fixedCode: "enum Role {\n  User,\n  Admin\n}\n\nlet r: Role = Role.Admin;",
    hint: "Enums are not plain strings by default.",
    bugLine: 5,
    explanation: "Role type expects Role.Admin, not 'Admin'."
  },

  {
    id: 733,
    title: "Generic Function Typo",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Generic type not applied correctly.",
    buggyCode: "function wrap<T>(value): T[] {\n  return [value];\n}",
    fixedCode: "function wrap<T>(value: T): T[] {\n  return [value];\n}",
    hint: "Generic type parameters must be used in arguments.",
    bugLine: 1,
    explanation: "value should be of type T, not any."
  },

  {
    id: 734,
    title: "Overload Signature",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Wrong function overload implementation.",
    buggyCode: "function process(x: string): string;\nfunction process(x: number): number;\nfunction process(x: any) {\n  return x;\n}",
    fixedCode: "function process(x: string): string;\nfunction process(x: number): number;\nfunction process(x: string | number) {\n  return x;\n}",
    hint: "Implementation signature must be compatible.",
    bugLine: 3,
    explanation: "any is too loose; use union type."
  },

  {
    id: 735,
    title: "Mapped Types",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Wrong mapped type usage.",
    buggyCode: "type ReadonlyUser = { [K in keyof User]: User[K] };\nconst user: ReadonlyUser = { name: \"John\", age: 30 };\nuser.age = 31;",
    fixedCode: "type ReadonlyUser = { readonly [K in keyof User]: User[K] };\nconst user: ReadonlyUser = { name: \"John\", age: 30 };\n// user.age = 31; // Not allowed",
    hint: "Add readonly modifier in mapped type.",
    bugLine: 3,
    explanation: "Mapped type should make properties readonly."
  },

  {
    id: 736,
    title: "Conditional Types",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Conditional type misuse.",
    buggyCode: "type IsString<T> = T extends string ? boolean : number;\nlet x: IsString<\"hello\"> = true;",
    fixedCode: "type IsString<T> = T extends string ? true : false;\nlet x: IsString<\"hello\"> = true;",
    hint: "Conditional types must match exactly.",
    bugLine: 2,
    explanation: "Type should be true/false, not boolean."
  },

  {
    id: 737,
    title: "Infer Keyword",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Infer used incorrectly.",
    buggyCode: "type First<T extends any[]> = T[0];",
    fixedCode: "type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;",
    hint: "Use infer to extract type from tuple.",
    bugLine: 1,
    explanation: "Need infer to get first element type."
  },

  {
    id: 738,
    title: "Utility Type - Partial",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Partial not used correctly.",
    buggyCode: "interface User {\n  name: string;\n  age: number;\n}\nconst update: User = { name: \"John\" };",
    fixedCode: "interface User {\n  name: string;\n  age: number;\n}\nconst update: Partial<User> = { name: \"John\" };",
    hint: "Use Partial for optional updates.",
    bugLine: 4,
    explanation: "All properties required without Partial."
  },

  {
    id: 739,
    title: "Utility Type - Pick",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Wrong Pick usage.",
    buggyCode: "interface User {\n  name: string;\n  age: number;\n  email: string;\n}\ntype UserName = Pick<User>;",
    fixedCode: "interface User {\n  name: string;\n  age: number;\n  email: string;\n}\ntype UserName = Pick<User, \"name\">;",
    hint: "Pick requires property keys.",
    bugLine: 6,
    explanation: "Pick needs which properties to pick."
  },

  {
    id: 740,
    title: "Utility Type - Omit",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Omit used incorrectly.",
    buggyCode: "interface User {\n  name: string;\n  age: number;\n  password: string;\n}\ntype PublicUser = Omit<User>;",
    fixedCode: "interface User {\n  name: string;\n  age: number;\n  password: string;\n}\ntype PublicUser = Omit<User, \"password\">;",
    hint: "Omit requires keys to omit.",
    bugLine: 6,
    explanation: "Omit needs which properties to exclude."
  },

  {
    id: 741,
    title: "keyof Operator",
    difficulty: "Medium",
    language: "TypeScript",
    description: "keyof not used properly.",
    buggyCode: "interface User {\n  name: string;\n  age: number;\n}\nfunction getValue(user: User, key: string) {\n  return user[key];\n}",
    fixedCode: "interface User {\n  name: string;\n  age: number;\n}\nfunction getValue(user: User, key: keyof User) {\n  return user[key];\n}",
    hint: "Use keyof for type-safe property access.",
    bugLine: 4,
    explanation: "string too broad; use keyof User."
  },

  {
    id: 742,
    title: "Type Guard Function",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Missing return type annotation.",
    buggyCode: "function isAdmin(user: User) {\n  return user.role === \"admin\";\n}",
    fixedCode: "function isAdmin(user: User): user is AdminUser {\n  return user.role === \"admin\";\n}",
    hint: "Type guard needs 'is' syntax.",
    bugLine: 1,
    explanation: "Without type predicate, TypeScript doesn't narrow."
  },

  {
    id: 743,
    title: "Discriminated Union",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Missing discriminator check.",
    buggyCode: "type Shape = { kind: \"circle\"; radius: number } | { kind: \"square\"; size: number };\nfunction area(s: Shape) {\n  return s.radius * s.radius * Math.PI;\n}",
    fixedCode: "type Shape = { kind: \"circle\"; radius: number } | { kind: \"square\"; size: number };\nfunction area(s: Shape) {\n  if (s.kind === \"circle\") {\n    return s.radius * s.radius * Math.PI;\n  }\n  return s.size * s.size;\n}",
    hint: "Check discriminator property first.",
    bugLine: 3,
    explanation: "radius might not exist on square."
  },

  {
    id: 744,
    title: "Generic Constraints",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Missing generic constraint.",
    buggyCode: "function getLength<T>(obj: T): number {\n  return obj.length;\n}",
    fixedCode: "function getLength<T extends { length: number }>(obj: T): number {\n  return obj.length;\n}",
    hint: "Add constraint for required properties.",
    bugLine: 1,
    explanation: "Not all types have length property."
  },

  {
    id: 745,
    title: "Intersection Types",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Intersection creates incompatible type.",
    buggyCode: "type A = { x: string };\ntype B = { x: number };\ntype C = A & B;\nconst c: C = { x: \"hello\" };",
    fixedCode: "type A = { x: string };\ntype B = { y: number };\ntype C = A & B;\nconst c: C = { x: \"hello\", y: 42 };",
    hint: "Intersection merges properties.",
    bugLine: 4,
    explanation: "x cannot be both string and number."
  },

  {
    id: 746,
    title: "Generic Default",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Generic default not working.",
    buggyCode: "function createArray<T>(length: number): T[] {\n  return new Array(length);\n}",
    fixedCode: "function createArray<T = any>(length: number): T[] {\n  return new Array(length);\n}",
    hint: "Add default type parameter.",
    bugLine: 1,
    explanation: "T cannot be inferred without default."
  },

  {
    id: 747,
    title: "Readonly Tuple",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Modifying readonly tuple.",
    buggyCode: "const point: readonly [number, number] = [10, 20];\npoint[0] = 15;",
    fixedCode: "const point: readonly [number, number] = [10, 20];\n// point[0] = 15; // Not allowed\nconst newPoint: [number, number] = [15, point[1]];",
    hint: "Create new tuple instead of modifying.",
    bugLine: 2,
    explanation: "Cannot modify readonly tuple elements."
  },

  {
    id: 748,
    title: "Type Assertion vs Guard",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Using assertion instead of guard.",
    buggyCode: "const value: unknown = \"hello\";\nconst length = (value as string).length;",
    fixedCode: "const value: unknown = \"hello\";\nif (typeof value === \"string\") {\n  const length = value.length;\n}",
    hint: "Use type guards for safety.",
    bugLine: 2,
    explanation: "Assertion bypasses type checking."
  },

  {
    id: 749,
    title: "Function This Type",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Missing this parameter type.",
    buggyCode: "function clickHandler() {\n  console.log(this.textContent);\n}",
    fixedCode: "function clickHandler(this: HTMLElement) {\n  console.log(this.textContent);\n}",
    hint: "Add this parameter for context.",
    bugLine: 1,
    explanation: "this type not specified."
  },

  {
    id: 750,
    title: "Namespace Conflict",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Namespace and interface conflict.",
    buggyCode: "namespace MyLib {\n  export function helper() {}\n}\ninterface MyLib {\n  version: string;\n}",
    fixedCode: "namespace MyLib {\n  export function helper() {}\n  export interface MyLib {\n    version: string;\n  }\n}",
    hint: "Declare interface inside namespace.",
    bugLine: 5,
    explanation: "Cannot merge namespace with interface."
  },

  {
    id: 751,
    title: "Module Augmentation",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Wrong module augmentation syntax.",
    buggyCode: "import { Request } from \"express\";\ndeclare module \"express\" {\n  interface Request {\n    user?: any;\n  }\n}",
    fixedCode: "import { Request } from \"express\";\ndeclare module \"express\" {\n  export interface Request {\n    user?: any;\n  }\n}",
    hint: "Use export in module augmentation.",
    bugLine: 3,
    explanation: "Need export keyword in augmentation."
  },

  {
    id: 752,
    title: "Decorator Factory",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Decorator not returning function.",
    buggyCode: "function log(target: any) {\n  console.log(target);\n}\n\n@log\nclass MyClass {}",
    fixedCode: "function log(message: string) {\n  return function(target: any) {\n    console.log(message, target);\n  };\n}\n\n@log(\"Creating class\")\nclass MyClass {}",
    hint: "Decorator factories return decorator function.",
    bugLine: 1,
    explanation: "Decorator factories need to return function."
  },

  {
    id: 753,
    title: "Mixin Pattern",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Mixin implementation wrong.",
    buggyCode: "function Timestamped(Base) {\n  return class extends Base {\n    timestamp = Date.now();\n  };\n}",
    fixedCode: "type Constructor<T = {}> = new (...args: any[]) => T;\n\nfunction Timestamped<TBase extends Constructor>(Base: TBase) {\n  return class extends Base {\n    timestamp = Date.now();\n  };\n}",
    hint: "Define constructor type for mixins.",
    bugLine: 1,
    explanation: "Need type for Base constructor."
  },

  {
    id: 754,
    title: "Conditional Generic",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Conditional generic constraint.",
    buggyCode: "type Box<T> = { value: T };\ntype Unbox<T> = T extends Box<infer U> ? U : never;",
    fixedCode: "type Box<T> = { value: T };\ntype Unbox<T> = T extends Box<infer U> ? U : never;\n\n// Example usage:\ntype StringBox = Box<string>;\ntype Unboxed = Unbox<StringBox>; // string",
    hint: "Add example for clarity.",
    bugLine: 2,
    explanation: "Code is correct but needs example."
  },

  {
    id: 755,
    title: "Template Literal Types",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Template literal type pattern.",
    buggyCode: "type EventName = \"click\" | \"scroll\";\ntype HandlerName = `on${EventName}`;",
    fixedCode: "type EventName = \"click\" | \"scroll\";\ntype HandlerName = `on${EventName}`;\n\n// Result: \"onclick\" | \"onscroll\"\nconst handler: HandlerName = \"onclick\";",
    hint: "Template literal types generate union.",
    bugLine: 2,
    explanation: "Type is correct but needs example."
  },

  {
    id: 756,
    title: "Branded Types",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Creating branded type incorrectly.",
    buggyCode: "type UserId = string;\nfunction getUser(id: UserId) {}",
    fixedCode: "type UserId = string & { readonly __brand: unique symbol };\nfunction getUser(id: UserId) {}\n\n// Create branded value\nconst id = \"123\" as UserId;\ngetUser(id);",
    hint: "Use intersection with unique symbol.",
    bugLine: 1,
    explanation: "Plain string alias doesn't prevent misuse."
  },

  {
    id: 757,
    title: "Assertion Functions",
    difficulty: "Medium",
    language: "TypeScript",
    description: "asserts keyword missing.",
    buggyCode: "function assert(condition: any) {\n  if (!condition) throw new Error();\n}",
    fixedCode: "function assert(condition: any): asserts condition {\n  if (!condition) throw new Error();\n}",
    hint: "Use asserts for assertion functions.",
    bugLine: 1,
    explanation: "Without asserts, type isn't narrowed."
  },

  {
    id: 758,
    title: "Utility Type - Awaited",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Unwrapping promise incorrectly.",
    buggyCode: "type Response = Promise<string>;\ntype Data = string;",
    fixedCode: "type Response = Promise<string>;\ntype Data = Awaited<Response>; // string",
    hint: "Use Awaited utility type.",
    bugLine: 2,
    explanation: "Awaited unwraps Promise types."
  },

  {
    id: 759,
    title: "Satisfies Operator",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Missing satisfies operator.",
    buggyCode: "const colors = {\n  red: \"#ff0000\",\n  green: \"#00ff00\",\n  blue: \"#0000ff\"\n} as const;",
    fixedCode: "const colors = {\n  red: \"#ff0000\",\n  green: \"#00ff00\",\n  blue: \"#0000ff\"\n} as const satisfies Record<string, string>;",
    hint: "Use satisfies for type checking without widening.",
    bugLine: 5,
    explanation: "satisfies checks type without changing inference."
  },

  {
    id: 760,
    title: "Generic Recursive Type",
    difficulty: "Medium",
    language: "TypeScript",
    description: "Recursive type definition.",
    buggyCode: "type TreeNode = {\n  value: number;\n  children: TreeNode[];\n};",
    fixedCode: "type TreeNode<T> = {\n  value: T;\n  children: TreeNode<T>[];\n};\n\n// Usage\nconst tree: TreeNode<number> = {\n  value: 1,\n  children: [{ value: 2, children: [] }]\n};",
    hint: "Make type generic for flexibility.",
    bugLine: 1,
    explanation: "Generic allows different value types."
  },

  // ============ HARD (61-90) ============
  {
    id: 761,
    title: "Never Reached Case",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Exhaustiveness checking in switch.",
    buggyCode: "type Shape = \"circle\" | \"square\";\n\nfunction area(s: Shape): number {\n  switch (s) {\n    case \"circle\":\n      return 1;\n  }\n}",
    fixedCode: "type Shape = \"circle\" | \"square\";\n\nfunction area(s: Shape): number {\n  switch (s) {\n    case \"circle\":\n      return 1;\n    case \"square\":\n      return 2;\n    default:\n      const _exhaustive: never = s;\n      return _exhaustive;\n  }\n}",
    hint: "Make sure all union members are handled.",
    bugLine: 4,
    explanation: "square case missing; default never check enforces exhaustiveness."
  },

  {
    id: 762,
    title: "Incorrect Interface Implementation",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Class doesn't fully implement interface.",
    buggyCode: "interface Logger {\n  log(message: string): void;\n}\n\nclass ConsoleLogger implements Logger {\n  log(message) {\n    console.log(message);\n  }\n}",
    fixedCode: "interface Logger {\n  log(message: string): void;\n}\n\nclass ConsoleLogger implements Logger {\n  log(message: string): void {\n    console.log(message);\n  }\n}",
    hint: "Implementations must match the interface types exactly.",
    bugLine: 6,
    explanation: "message missing type annotation, causing mismatch."
  },

  {
    id: 763,
    title: "Any Instead of Unknown",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Prefer unknown over any for safer typing.",
    buggyCode: "function parse(json: string): any {\n  return JSON.parse(json);\n}",
    fixedCode: "function parse(json: string): unknown {\n  return JSON.parse(json);\n}",
    hint: "unknown forces you to check the type before using.",
    bugLine: 1,
    explanation: "any disables type safety; unknown is safer."
  },

  {
    id: 764,
    title: "Type Assertion Misuse",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Asserting wrong type causes runtime error.",
    buggyCode: "const value: unknown = \"hello\";\nconsole.log((value as number).toFixed(2));",
    fixedCode: "const value: unknown = \"hello\";\nif (typeof value === \"number\") {\n  console.log(value.toFixed(2));\n}",
    hint: "Avoid lying using 'as'. Check types first.",
    bugLine: 2,
    explanation: "value is actually a string, not number."
  },

  {
    id: 765,
    title: "Readonly Property Reassignment",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Trying to reassign a readonly property.",
    buggyCode: "interface Config {\n  readonly apiKey: string;\n}\n\nconst config: Config = { apiKey: \"123\" };\nconfig.apiKey = \"456\";",
    fixedCode: "interface Config {\n  readonly apiKey: string;\n}\n\nconst config: Config = { apiKey: \"123\" };\n// create new config if needed:\nconst newConfig: Config = { apiKey: \"456\" };",
    hint: "readonly means you must create a new object instead.",
    bugLine: 5,
    explanation: "Cannot assign to readonly property apiKey."
  },

  {
    id: 766,
    title: "Circular Reference",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Circular type definition.",
    buggyCode: "type LinkedList = {\n  value: number;\n  next: LinkedList;\n};\n\nconst list: LinkedList = {\n  value: 1,\n  next: null\n};",
    fixedCode: "type LinkedList = {\n  value: number;\n  next: LinkedList | null;\n};\n\nconst list: LinkedList = {\n  value: 1,\n  next: null\n};",
    hint: "Add null to break circular reference.",
    bugLine: 7,
    explanation: "next cannot be null in original type."
  },

  {
    id: 767,
    title: "Complex Generic Inference",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Generic inference fails with complex types.",
    buggyCode: "function merge<T, U>(a: T, b: U): T & U {\n  return { ...a, ...b };\n}",
    fixedCode: "function merge<T extends object, U extends object>(\n  a: T,\n  b: U\n): T & U {\n  return { ...a, ...b } as T & U;\n}",
    hint: "Add constraints and type assertion.",
    bugLine: 1,
    explanation: "Need constraints and assertion for type safety."
  },

  {
    id: 768,
    title: "Conditional Type Distributivity",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Conditional type doesn't distribute as expected.",
    buggyCode: "type ToArray<T> = T extends any ? T[] : never;\ntype Test = ToArray<string | number>;",
    fixedCode: "type ToArray<T> = T extends any ? T[] : never;\ntype Test = ToArray<string | number>; // (string | number)[]\n\n// To get string[] | number[]:\ntype ToArrayDistributed<T> = T extends any ? T[] : never;\ntype Test2 = ToArrayDistributed<string | number>; // string[] | number[]",
    hint: "Conditional types distribute over unions.",
    bugLine: 2,
    explanation: "Need to understand distributivity."
  },

  {
    id: 769,
    title: "Mapped Type Modifiers",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Adding/removing modifiers incorrectly.",
    buggyCode: "type Mutable<T> = {\n  -readonly [K in keyof T]: T[K];\n};\n\ninterface ReadonlyPoint {\n  readonly x: number;\n  readonly y: number;\n}\n\nconst p: Mutable<ReadonlyPoint> = { x: 1, y: 2 };\np.x = 3;",
    fixedCode: "type Mutable<T> = {\n  -readonly [K in keyof T]: T[K];\n};\n\ninterface ReadonlyPoint {\n  readonly x: number;\n  readonly y: number;\n}\n\nconst p: Mutable<ReadonlyPoint> = { x: 1, y: 2 };\np.x = 3; // Now allowed",
    hint: "Use - modifier to remove readonly.",
    bugLine: 11,
    explanation: "Code is correct; misunderstanding of - modifier."
  },

  {
    id: 770,
    title: "Template Literal Inference",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Inferring from template literal types.",
    buggyCode: "type Route = `/api/${string}`;\ntype ExtractApi<T> = T extends `/api/${infer Endpoint}` ? Endpoint : never;",
    fixedCode: "type Route = `/api/${string}`;\ntype ExtractApi<T> = T extends `/api/${infer Endpoint}` ? Endpoint : never;\n\n// Example\ntype UsersEndpoint = ExtractApi<`/api/users`>; // \"users\"",
    hint: "Template literal types can be deconstructed.",
    bugLine: 2,
    explanation: "Need example to show inference."
  },

  {
    id: 771,
    title: "Recursive Conditional Types",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Deep recursive type transformation.",
    buggyCode: "type DeepReadonly<T> = {\n  readonly [K in keyof T]: T[K];\n};",
    fixedCode: "type DeepReadonly<T> = T extends object\n  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }\n  : T;\n\n// Makes all properties recursively readonly",
    hint: "Need recursive conditional type.",
    bugLine: 1,
    explanation: "Original only makes top-level readonly."
  },

  {
    id: 772,
    title: "Type-Level Programming",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Implementing arithmetic at type level.",
    buggyCode: "type Add<A extends number, B extends number> = number;",
    fixedCode: "type Length<T extends any[]> = T[\"length\"];\ntype BuildArray<N extends number, T extends any[] = []> =\n  T[\"length\"] extends N ? T : BuildArray<N, [...T, any]>;\ntype Add<A extends number, B extends number> = \n  Length<[...BuildArray<A>, ...BuildArray<B>]>;\n\n// Example: Add<2, 3> // 5",
    hint: "Use tuple lengths for number arithmetic.",
    bugLine: 1,
    explanation: "Need tuple manipulation for type-level math."
  },

  {
    id: 773,
    title: "Branded Types Safety",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Ensuring branded type safety.",
    buggyCode: "type Email = string;\nfunction sendEmail(email: Email) {}",
    fixedCode: "declare const __brand: unique symbol;\ntype Brand<T, B> = T & { [__brand]: B };\ntype Email = Brand<string, \"Email\">;\n\nfunction createEmail(str: string): Email {\n  // Add validation logic\n  if (!str.includes(\"@\")) throw new Error(\"Invalid email\");\n  return str as Email;\n}\n\nfunction sendEmail(email: Email) {}\n\n// Usage\nconst email = createEmail(\"test@example.com\");\nsendEmail(email);",
    hint: "Use factory function to create branded types.",
    bugLine: 1,
    explanation: "Need factory function to ensure validity."
  },

  {
    id: 774,
    title: "Complex Union Reduction",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Reducing complex union types.",
    buggyCode: "type A = { kind: \"a\"; x: number };\ntype B = { kind: \"b\"; y: string };\ntype Union = A | B;\ntype Kind = Union[\"kind\"];",
    fixedCode: "type A = { kind: \"a\"; x: number };\ntype B = { kind: \"b\"; y: string };\ntype Union = A | B;\ntype Kind = Union[\"kind\"]; // \"a\" | \"b\"\n\ntype ExtractByKind<T, K> = T extends { kind: K } ? T : never;\ntype AOnly = ExtractByKind<Union, \"a\">; // A",
    hint: "Use conditional types to filter unions.",
    bugLine: 4,
    explanation: "Add example of extracting from union."
  },

  {
    id: 775,
    title: "Variance Annotations",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Missing variance annotations in generic.",
    buggyCode: "interface Box<T> {\n  value: T;\n  get: () => T;\n  set: (value: T) => void;\n}",
    fixedCode: "interface Box<T> {\n  readonly value: T;\n  get: () => T;\n  set: (value: T) => void;\n}\n\n// For better variance control:\ninterface ReadonlyBox<out T> {\n  readonly value: T;\n  get: () => T;\n}\n\ninterface WriteonlyBox<in T> {\n  set: (value: T) => void;\n}",
    hint: "Use in/out modifiers for variance (TypeScript 4.7+).",
    bugLine: 1,
    explanation: "Original interface has both co/contravariant positions."
  },

  {
    id: 776,
    title: "Type Predicate Overload",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Overloading type predicate functions.",
    buggyCode: "function isStringOrNumber(x: any): boolean {\n  return typeof x === \"string\" || typeof x === \"number\";\n}",
    fixedCode: "function isStringOrNumber(x: any): x is string | number {\n  return typeof x === \"string\" || typeof x === \"number\";\n}\n\n// For better type narrowing:\nfunction isString(x: any): x is string {\n  return typeof x === \"string\";\n}\n\nfunction isNumber(x: any): x is number {\n  return typeof x === \"number\";\n}",
    hint: "Use union type predicates.",
    bugLine: 1,
    explanation: "Need type predicate for union narrowing."
  },

  {
    id: 777,
    title: "Decorator Metadata",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Adding metadata with decorators.",
    buggyCode: "function Log(target: any, key: string) {\n  console.log(key);\n}",
    fixedCode: "const METADATA_KEY = Symbol(\"metadata\");\n\nfunction Log(target: any, key: string) {\n  const metadata = Reflect.getMetadata(METADATA_KEY, target) || [];\n  metadata.push(key);\n  Reflect.defineMetadata(METADATA_KEY, metadata, target);\n}\n\n// Need reflect-metadata polyfill",
    hint: "Use Reflect.metadata for decorator metadata.",
    bugLine: 1,
    explanation: "Need Reflect.metadata for proper metadata."
  },

  {
    id: 778,
    title: "Module Type Augmentation",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Globally augmenting module types.",
    buggyCode: "// In global.d.ts\ndeclare global {\n  interface Window {\n    myApp: any;\n  }\n}",
    fixedCode: "// In global.d.ts\ndeclare global {\n  interface Window {\n    myApp: {\n      version: string;\n      init: () => void;\n    };\n  }\n}\n\n// Ensure file is included in tsconfig",
    hint: "Use declare global for global augmentations.",
    bugLine: 3,
    explanation: "Add proper typing, not just any."
  },

  {
    id: 779,
    title: "Conditional Type Inference",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Complex conditional type with inference.",
    buggyCode: "type Unpromisify<T> = T extends Promise<infer U> ? U : T;",
    fixedCode: "type Unpromisify<T> = T extends Promise<infer U> ? U : T;\n\n// For nested promises:\ntype DeepUnpromisify<T> = T extends Promise<infer U>\n  ? DeepUnpromisify<U>\n  : T;\n\n// Example\ntype Nested = Promise<Promise<string>>;\ntype Unwrapped = DeepUnpromisify<Nested>; // string",
    hint: "Make recursive for nested promises.",
    bugLine: 1,
    explanation: "Add recursive version for nested promises."
  },

  {
    id: 780,
    title: "Template Literal Manipulation",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Advanced template literal type manipulation.",
    buggyCode: "type Path = \"/users/:id\";",
    fixedCode: "type Path = \"/users/:id\";\ntype ExtractParams<T> = T extends `${string}/:${infer Param}/${infer Rest}`\n  ? Param | ExtractParams<`/${Rest}`>\n  : T extends `${string}/:${infer Param}`\n  ? Param\n  : never;\n\ntype Params = ExtractParams<\"/users/:id/posts/:postId\">; // \"id\" | \"postId\"",
    hint: "Use recursive conditional types with template literals.",
    bugLine: 1,
    explanation: "Show extraction of multiple parameters."
  },

  {
    id: 781,
    title: "Utility Type Creation",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Creating custom utility type.",
    buggyCode: "type Optional<T> = {\n  [K in keyof T]?: T[K];\n};",
    fixedCode: "type Optional<T> = {\n  [K in keyof T]?: T[K];\n};\n\n// More advanced: DeepOptional\ntype DeepOptional<T> = T extends object\n  ? { [K in keyof T]?: DeepOptional<T[K]> }\n  : T;\n\n// And Required version:\ntype DeepRequired<T> = T extends object\n  ? { [K in keyof T]-?: DeepRequired<T[K]> }\n  : T;",
    hint: "Create deep versions of utility types.",
    bugLine: 1,
    explanation: "Show deep variants of utility types."
  },

  {
    id: 782,
    title: "Type Guard Composition",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Composing multiple type guards.",
    buggyCode: "function isPerson(obj: any) {\n  return obj && typeof obj.name === \"string\";\n}",
    fixedCode: "function hasName(obj: any): obj is { name: string } {\n  return obj && typeof obj.name === \"string\";\n}\n\nfunction hasAge(obj: any): obj is { age: number } {\n  return obj && typeof obj.age === \"number\";\n}\n\nfunction isPerson(obj: any): obj is { name: string; age: number } {\n  return hasName(obj) && hasAge(obj);\n}\n\n// Type guards can be composed",
    hint: "Build complex guards from simple ones.",
    bugLine: 1,
    explanation: "Compose simple guards into complex ones."
  },

  {
    id: 783,
    title: "Generic Contextual Typing",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Contextual typing with generics.",
    buggyCode: "function createFactory<T>() {\n  return function(value: T) {\n    return { value };\n  };\n}",
    fixedCode: "function createFactory<T>() {\n  return function<U extends T>(value: U) {\n    return { value };\n  };\n}\n\n// Usage\nconst stringFactory = createFactory<string>();\nconst result = stringFactory(\"hello\"); // OK\n// stringFactory(123); // Error",
    hint: "Add inner generic for better inference.",
    bugLine: 2,
    explanation: "Inner generic allows better type inference."
  },

  {
    id: 784,
    title: "Mapped Type with Remapping",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Key remapping in mapped types.",
    buggyCode: "type Getters<T> = {\n  [K in keyof T]: () => T[K];\n};",
    fixedCode: "type Getters<T> = {\n  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];\n};\n\n// Example\ninterface User {\n  name: string;\n  age: number;\n}\n\ntype UserGetters = Getters<User>;\n// { getName: () => string; getAge: () => number }",
    hint: "Use as clause for key remapping.",
    bugLine: 1,
    explanation: "Key remapping transforms property names."
  },

  {
    id: 785,
    title: "Recursive Type Patterns",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Pattern matching with recursive types.",
    buggyCode: "type JSONValue = string | number | boolean | null;",
    fixedCode: "type JSONValue =\n  | string\n  | number\n  | boolean\n  | null\n  | JSONValue[]\n  | { [key: string]: JSONValue };\n\n// Fully typed JSON parse/stringify\nfunction safeParse(json: string): JSONValue {\n  return JSON.parse(json);\n}",
    hint: "Recursive type definition for JSON.",
    bugLine: 1,
    explanation: "JSON values can be arrays/objects of same type."
  },

  {
    id: 786,
    title: "Type-Safe Event Emitter",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Creating type-safe event system.",
    buggyCode: "class EventEmitter {\n  events: Record<string, Function[]> = {};\n  on(event: string, handler: Function) {}\n  emit(event: string, ...args: any[]) {}\n}",
    fixedCode: "type EventMap = Record<string, any>;\n\nclass TypedEventEmitter<T extends EventMap> {\n  private events: { [K in keyof T]?: ((data: T[K]) => void)[] } = {};\n\n  on<K extends keyof T>(event: K, handler: (data: T[K]) => void) {\n    const handlers = this.events[event] || [];\n    handlers.push(handler);\n    this.events[event] = handlers;\n  }\n\n  emit<K extends keyof T>(event: K, data: T[K]) {\n    const handlers = this.events[event];\n    handlers?.forEach(h => h(data));\n  }\n}\n\n// Usage\ntype MyEvents = {\n  click: { x: number; y: number };\n  hover: { element: string };\n};\n\nconst emitter = new TypedEventEmitter<MyEvents>();",
    hint: "Use generic to type event names and data.",
    bugLine: 1,
    explanation: "Create fully type-safe event emitter."
  },

  {
    id: 787,
    title: "Advanced Conditional Types",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Complex conditional type logic.",
    buggyCode: "type IsNever<T> = T extends never ? true : false;",
    fixedCode: "type IsNever<T> = [T] extends [never] ? true : false;\n\n// Testing\ntype Test1 = IsNever<never>; // true\ntype Test2 = IsNever<string>; // false\n\n// Why [T]? Because never distributes in conditional types",
    hint: "Wrap in tuple to prevent distribution.",
    bugLine: 1,
    explanation: "need [T] to properly check for never."
  },

  {
    id: 788,
    title: "Type-Level Validation",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Validating types at compile time.",
    buggyCode: "type PositiveNumber = number;",
    fixedCode: "type PositiveNumber = number & { __positive: true };\n\nfunction makePositive(n: number): PositiveNumber {\n  if (n <= 0) throw new Error(\"Must be positive\");\n  return n as PositiveNumber;\n}\n\nfunction addPositive(a: PositiveNumber, b: PositiveNumber): PositiveNumber {\n  return (a + b) as PositiveNumber;\n}\n\n// Runtime validation with compile-time types",
    hint: "Use branded types with validation.",
    bugLine: 1,
    explanation: "Combine runtime validation with type safety."
  },

  {
    id: 789,
    title: "Template Literal Union",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Generating union from template literal.",
    buggyCode: "type Direction = \"up\" | \"down\";\ntype Action = \"move\" | \"jump\";",
    fixedCode: "type Direction = \"up\" | \"down\";\ntype Action = \"move\" | \"jump\";\ntype Command = `${Action}-${Direction}`;\n\n// Result: \"move-up\" | \"move-down\" | \"jump-up\" | \"jump-down\"\n\n// Utility to extract parts\ntype ExtractAction<C extends Command> = C extends `${infer A}-${string}` ? A : never;\ntype ExtractDirection<C extends Command> = C extends `${string}-${infer D}` ? D : never;",
    hint: "Template literals generate union combinations.",
    bugLine: 3,
    explanation: "Show extraction utilities for generated union."
  },

  {
    id: 790,
    title: "Complex Generic Defaults",
    difficulty: "Hard",
    language: "TypeScript",
    description: "Nested generic defaults with constraints.",
    buggyCode: "function useState<T>(initial: T) {\n  return [initial, () => {}];\n}",
    fixedCode: "function useState<T = string>(\n  initial: T\n): [T, (value: T | ((prev: T) => T)) => void] {\n  let state = initial;\n  const setState = (value: T | ((prev: T) => T)) => {\n    state = typeof value === \"function\" ? (value as Function)(state) : value;\n  };\n  return [state, setState];\n}\n\n// With better typing for function case\ntype SetStateAction<T> = T | ((prev: T) => T);",
    hint: "Add proper return types with function overload.",
    bugLine: 1,
    explanation: "Add proper React-like useState typing."
  }
];