// import {sub} from "./subtract.js";
const add = require("./add.js");
const sub = require("./subtract.js");

const  fs = require("fs");

const express = require("express");

const app = express();


const t1 = performance.now();

// const txt = fs.readFileSync("demo.md","utf-8");

// console.log(txt);



fs.readFile("demo.md","utf-8", (err, txt) => {
    console.log(txt);
});

const t2 = performance.now();

console.log(add.add(5,6));
// console.log(sub(6,9));

console.log(sub.sub(8,7));

console.log(t2-t1);

let value = process.argv.slice(2);
console.log(value.join(" "));

app.listen(3000);