# Async-Await-in-javascript

Async/await is a relatively new feature in JavaScript that was introduced in ECMAScript 2017 (ES8) to simplify the process of writing asynchronous code. It allows you to write asynchronous code in a synchronous way, making your code more readable and easier to understand.

Async functions are defined using the async keyword, and they always return a Promise. Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved.

Here's an example of an async function that fetches data from an API using the fetch function:

//code
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
//

In this example, the fetch function returns a Promise that resolves to a response object. The await keyword is used to pause the execution of the function until the Promise is resolved, and the response.json() method is called to extract the JSON data from the response object.

Async/await is particularly useful when you need to perform a series of asynchronous tasks in a specific order. Here's an example of an async function that performs two asynchronous tasks in sequence:


// code
async function doTasks() {
  const result1 = await doTask1();
  const result2 = await doTask2(result1);
  return result2;
}

In this example, the doTask1 function is called first, and the await keyword is used to pause the execution of the function until the Promise returned by doTask1 is resolved. Once the Promise is resolved, the result1 variable is set to the resolved value, and the doTask2 function is called with result1 as its argument. Again, the await keyword is used to pause the execution of the function until the Promise returned by doTask2 is resolved.

Async/await is a powerful feature that can simplify the process of writing asynchronous code in JavaScript, but it's important to keep in mind that it's still based on Promises and can be subject to the same issues, such as callback hell or race conditions.                      by The Gps
