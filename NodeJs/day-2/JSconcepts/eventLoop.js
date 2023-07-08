import { readFile } from "node:fs";

const lib = () => {
  const first = () => {
    setTimeout(() => {
      console.log("Timer1");
    }, 100);

    console.log("first");

    second();
  };

  const second = () => {
    setImmediate(() => console.log("Immediate"));
    setTimeout(() => {
      console.log("timer2");
    }, 0);

    console.log("second");

    third();
  };

  const third = () => {
    process.nextTick(() => {
      console.log("nextTick");
    });

    console.log("third");
  };

  readFile("./doc.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(`error is ${err}`);
    }
    console.log(data);
  });

  first();
};

lib();

// Since, JavaScript is a single threaded but node provide us some internal api's like libUV throw which we can use multi-threaded in event loop. This is a core concept of Node js (that is event loop), which help us to run code in non-blocking manner.

// here, the output will look like as below:--
//  first
// second
// third
// nextTick
// Immediate (this is because in this we use readfile I/O which lies directly in poll of the event loop)
// timer2
// Hello World
// Timer1 (this comes at last because it is delayed by 100 milli seconds);
