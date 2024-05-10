## TypeScript

# The significance of union and intersection types in Typescript.

Union and intersection are important features in TypeScript that allow developers to create complex type compositions, enhance code safety, and code readability.

## Union Types

union type allows a variable or parameter to hold values of multiple types. This means that a variable declared with a union type can store values that belong to any of the specified types. For example:

```typescript
let x: string | number;
x = "Hello would";
x = 22;
```

Another example

```typescript
type Y = string | boolean | number;
let a: Y = "string";
let b: Y = true;
let c: Y = 22;
```

Union types are particularly useful when dealing with scenarios where a value's type may vary. Union types provide a robust way to Handle such variability ensuring type safety without sacrificing flexibility.

## Intersection Types

While union types emphasize flexibility, intersection types focus on composition. Intersection types allow developers to combine multiple types into a single type that has all the properties of each constituent type. Here is an example:

```typescript
type A = {
  age: number;
};

type B = {
  name: string;
};

type AB = A & B;

const obj: AB = {
  age: 22,
  name: "Safin khan",
};
```

In this example, AB is an intersection type combining the types of A and B. This enables obj to have both  age and name properties.

