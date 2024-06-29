### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
1. Callbacks - Functions passed as arguments to other functions, called after the completion of an asynchronous operation.
2. Promises - Objects representing the eventual completion or failure of an asynchronous operation.
3. Async/Await - Syntactic sugar built on Promises, allowing asynchronous code to be written in a more synchronous style.

- What is a Promise?
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?
Async Function returns a Promise implicitly, allowing the use of await within the function to pause execution until a Promise is resolved.
Regular Function executes synchronously and does not return a Promise unless explicitly done so.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment for executing JavaScript code server-side, providing core modules for file system access, networking, and more.
Express.js is a web application framework built on top of Node.js, simplifying the creation of web servers and APIs by providing routing, middleware, and other tools.

- What is the error-first callback pattern?
An error-first callback is a standard pattern where the first argument of the callback function is an error object, and subsequent arguments are the results of the operation. This helps in handling errors in asynchronous code.

- What is middleware?
Middleware are functions in Express.js that have access to the request and response objects, and the next function in the application’s request-response cycle. They can execute code, modify the request and response objects, end the request-response cycle, and call the next middleware in the stack.

- What does the `next` function do?
The next function in Express.js is used to pass control to the next middleware function in the stack. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

First, lack of error handling for the API requests and also, the order of returned results does not match the order of the names in the return array, which can be confusing.