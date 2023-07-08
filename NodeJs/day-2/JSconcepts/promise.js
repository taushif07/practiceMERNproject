import fetch from 'node-fetch';
console.log("Start");

const p1 = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve("1")
    // reject("1");
  },1000);
});

const p2 = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve("2");
    // reject("2");
  },3000);
});

p1.then((data) => {
  console.log(`Data1 is ${data}`);
  return p2;
}, ((err) => console.log("err is",err))).then((data) => {
  console.log(`Data2 is ${data}`);
}).catch((err) => {
  console.log(`err is ${err}`)
}).finally(() => {
  console.log(`finally Completed`);
});

Promise.all([p1,p2]).then( data => {
  console.log(`All data are ${data}`);
});

// fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
//   return  res.json();
// }).then((data) => {
//   console.log(data);
// });

const posts = fetch(`https://jsonplaceholder.typicode.com/posts`);
const users = fetch(`https://jsonplaceholder.typicode.com/users`);

Promise.all([posts,users]).then(([postRes,userRes]) => {
  return Promise.all([postRes.json(),userRes.json()]);
}).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log("Error is", err);
});

Promise.any([p1,p2]).then((data) => {
  console.log("Any data", data);
}).catch((err) => {
  console.log(`Any Error ${err}`);
});

const p3 = Promise.resolve("2");
const p4 = Promise.reject("3");

p3.then((data) => {
  console.log(`p3 ${data}`);
}).catch((err) => {
  console.log(`p3 err is ${err}`);
});

p4.then((data) => {
  console.log(`p4 ${data}`);
}).catch((err) => {
  console.log(`p4 err is ${err}`);
});

console.log("End");