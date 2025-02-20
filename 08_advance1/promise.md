# JavaScript Promises: A Complete Guide

## 📌 What is a Promise in JavaScript?
A **Promise** in JavaScript represents a value that may be available **now, later, or never**. It is used to handle **asynchronous operations** and avoids callback hell.

### 🎯 How Promises Work
A Promise has three possible **states**:

| State         | Description                                   |
|--------------|---------------------------------------------|
| **Pending**   | Initial state – The Promise is still working. |
| **Fulfilled** | The operation completed successfully.       |
| **Rejected**  | The operation failed with an error.         |

## 🛠️ Creating a Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data received successfully!");
    } else {
        reject("Error: Data not received.");
    }
});
```

## 🔍 Using a Promise
A Promise is handled using **`.then()`, `.catch()`, and `.finally()`**.

```javascript
myPromise
    .then((result) => console.log(result))  // If resolved
    .catch((error) => console.error(error)) // If rejected
    .finally(() => console.log("Process completed."));
```

## 🔗 Chaining Promises
```javascript
const getUser = new Promise((resolve) => {
    setTimeout(() => resolve("User data fetched"), 1000);
});

getUser
    .then((data) => {
        console.log(data);
        return "Processing user data";
    })
    .then((process) => console.log(process))
    .catch((error) => console.error(error));
```

## 📚 Advanced Promise Methods

### 1️⃣ `Promise.all()`
Waits for **all** promises to resolve; fails if any one rejects.
```javascript
const p1 = Promise.resolve(10);
const p2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then(console.log); // Output: [10, 20, 30]
```

### 2️⃣ `Promise.allSettled()`
Waits for **all** promises to settle (resolve or reject).
```javascript
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");

Promise.allSettled([p1, p2]).then(console.log);
// Output: [{ status: "fulfilled", value: "Success" }, { status: "rejected", reason: "Failed" }]
```

### 3️⃣ `Promise.race()`
Returns the **first** promise that settles (either resolve or reject).
```javascript
const fast = new Promise((resolve) => setTimeout(resolve, 500, "Fast!"));
const slow = new Promise((resolve) => setTimeout(resolve, 1000, "Slow!"));

Promise.race([fast, slow]).then(console.log);  // Output: "Fast!"
```

### 4️⃣ `Promise.any()`
Returns the **first fulfilled** promise (ignores rejections).
```javascript
const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("First success");

Promise.any([p1, p2]).then(console.log);  // Output: "First success"
```

## 🏆 Summary of Promise Methods

| Method               | Behavior |
|----------------------|------------------------------------------|
| `Promise.all()`      | Fails if one fails, returns all resolved values. |
| `Promise.allSettled()` | Waits for all, returns status of each. |
| `Promise.race()`     | Returns the first settled (success or failure). |
| `Promise.any()`      | Returns the first fulfilled, ignores rejections. |

## 📘 Practice Exercise
Write a Promise that:
1. Resolves after 3 seconds with `"Task Completed"`.
2. If an error occurs, logs `"Task Failed"`.
