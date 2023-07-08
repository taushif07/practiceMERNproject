import fetch from "node-fetch";
console.log("Start");

const p1 = new Promise((resolve, reject) => {
  return reject(1);
});

async function myFunction1() {
  return 3;
}

async function myFunction2() {
  let x = await p1;
  return x;
}

myFunction1()
  .then((data) => {
    console.log(
      "async function implicitly returns a promise that's why .then method is called upon myFunction and gives the value =",
      data
    );
  })
  .catch((err) => {
    console.log("Error of myFunction1 is", err);
  });

myFunction2()
  .then((data) => {
    console.log(
      "here async function explicitly returns a promise who's value is =",
      data
    );
  })
  .catch((err) => console.log("Error of myFunction2 is", err));

async function jsonData() {
  try {
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users`);

    const postData = await postsRes.json();
    const userData = await usersRes.json();

    return [postData, userData];
  } catch (err) {
    console.log(`jsonData api error is ${err}`);
  }
}

jsonData().then((data) => {
  console.log(data);
});

console.log("End");
