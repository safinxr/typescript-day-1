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




# How to handle asynchronous operations using async/await over callback/promise TypeScript.

Using async/await in TypeScript is a cleaner and more readable way to handle asynchronous operations compared to callbacks or raw promises. Here's a basic guide on how to handle asynchronous operations using async/await in TypeScript:

#### Define an Async Function:

Start by defining an async function. This function will contain the asynchronous operations you want to perform.

```typescript
async function fetchData() {
    // Asynchronous operations will go here
}
```
#### Await Promises:

Inside the async function, you can await promises using the await keyword. This allows you to pause the execution of the function until the promise is resolved or rejected.

```typescript
async function fetchData() {
    const data = await fetchDataFromServer(); // Assuming fetchDataFromServer returns a Promise
    console.log(data);
}
```
#### Handle Errors:

You can use try-catch blocks to handle errors that might occur during asynchronous operations.

```typescript
async function fetchData() {
    try {
        const data = await fetchDataFromServer(); // Assuming fetchDataFromServer returns a Promise
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
```
#### Async Function Invocation:

To call an async function, you can use the await keyword if you're inside another async function, or use .then() and .catch() if you're not.

```typescript
// Inside another async function
async function main() {
    await fetchData();
}

// Outside an async function
fetchData().then(() => {
    console.log('Data fetched successfully');
}).catch((error) => {
    console.error('An error occurred:', error);
});
```
#### Async/Await with Promise.all:

If you need to perform multiple asynchronous operations concurrently, you can use Promise.all along with async/await.


```typescript
async function fetchMultipleData() {
    try {
        const [data1, data2] = await Promise.all([
            fetchDataFromServer1(),
            fetchDataFromServer2()
        ]);
        console.log('Data 1:', data1);
        console.log('Data 2:', data2);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
```

By following these steps, you can effectively handle asynchronous operations using async/await in TypeScript, making your code more readable and maintainable.


