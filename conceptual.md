### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Asynchronous callbacks run after the rest of the code.
Once you are inside the callback, the code executes predictably as per usual, (unless there are more async callbacks in there)

JS code is executed synchronously (in-order).
JS can use special asynchronous callbacks to delay execution of code.
Not all callbacks are async; you’ll have to consult their docs to tell.

- What is a Promise?

Promises in JavaScript are objects
They are native to the language as of ES2015
A promise can be in one of three states:
Pending - It doesn’t yet have a value
Resolved - It has successfully obtained a value
Rejected - It failed to obtain a value for some reason
The only way to access the resolved or rejected value is to chain a method on the end of the promise.

- What are the differences between an async function and a regular function?

An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

- What is the difference between Node.js and Express.js?

Node.js
A JavaScript environment that runs server-side
It uses the Chrome v8 engine, but doesn’t require/use Chrome
Can be used to build any kind of server-side JS
Including building web applications!
or as a general-purpose scripting language

Express.js
Minimalist framework
Very similar to Flask
Most popular in the Node ecosystem

- What is the error-first callback pattern?

Node.js callbacks usually conform to an “error-first” pattern.

The callback function’s first parameter should be listed as error. Node will supply an error object (if something bad happened), otherwise null as arguments.
Then follow the other parameters, if there are any

- What is middleware?

It is code that runs in the middle of the request / response cycle!
In Express, middleware are functions that get access to the req and res objects and can also call the next function.
express.json() is an example of middleware
Our 404 and global error handler are example of middleware

- What does the `next` function do?

If we do not include it, we will not make it to the next route!
Notice here we are not passing anything to next.
If argument are passed to next, Express always treats this as an error.

- What does `RETURNING` do in SQL? When would you use it?

The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING, you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns. So, RETURNING helps avoid another roundtrip to the database, another context switch in a PL/SQL block.

The RETURNING clause can return multiple rows of data, in which case you will use the RETURNING BULK COLLECT INTO form.

You can also call aggregate functions in the RETURNING clause to obtain sums, counts, and so on of columns in multiple rows changed by the DML statement.

Finally, you can also use RETURNING with EXECUTE IMMEDIATE (for dynamically constructed and executed SQL statements).

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

the promise is never resolved because we don't call the function
and we need a .then when we call it
getUsers().then.(msg => console.log(msg));

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}

```
