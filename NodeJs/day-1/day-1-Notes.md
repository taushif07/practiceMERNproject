Assignment 1 : If we delete node_modules. How to run our application again successfully ?

solution 1 :-- If we delete node_modules and we want to run our application then we have to run command "npm install" to install all the dependencies required by our application to run successfully.

<<<<--------------------------------------------------->>>>

Assignment 2 : How to use command line arguments in Node JS .Like node index.js 3 2 - how can I get 3 and 2 to be used in my programs. [ Hint : search for command line arguments in node ]

solution 2 :-- To use command line argument  in Node JS we have to use `process.argv`.
 forexample :- If we type `node index.js 3 2` and to get 3 and 2 in our application from the command line we have use process.argv which is an array where it returns node filename argument1 argument2 ... 
 i.e., we can get 3 and 2 by writting :-
       const value = process.argv.slice(2);
       console.log(value.join(" "));


<<<<<<<<<------------------------------------->>>>>>>>>


Assignment 3 : Explore the os module in Node Js from their documentation. What all info you can access from it about your operating system ?

solution 3 :-- The os module in Node.js provides operating system-related utility methods and properties. It can be accessed using const os = require('os').

Some of the information you can access about your operating system using the os module includes:

The operating system CPU architecture using os.arch()
The operating system’s constants for process signals, error codes, etc. using os.constants
Information about the computer’s CPUs using os.cpus()
The endianness of the CPU using os.endianness()
The end-of-line marker for the current operating system using os.EOL
The number of free memory of the system using os.freemem()
The hostname of the operating system using os.hostname()
An array containing the load averages (1, 5, and 15 minutes) using os.loadavg()
The network interfaces that have a network address using os.networkInterfaces()
Information about the operating system’s platform using os.platform()
Information about the operating system’s release using os.release()
The operating system’s default directory for temporary files using os.tmpdir()
The number of total memory of the system using os.totalmem()
The name of the operating system using os.type()
The uptime of the operating system (in seconds) using os.uptime()
Information about the current user using os.userInfo()


<<<<<<<<<------------------------------------->>>>>>>>>


Assignment 4 : Explore about Asynchronous nature of JS as a single threaded language and how it is achieved using Event Loop. Video are given below in related videos sections.

solution 4 :-- 



<<<<<<<<<<<<<<<<<--------------------->>>>>>>>>>>>>>>>>


Assignment 5 [Challenge] : Can you run a system command from Node JS javascript file e.g. ls dir commands ? and can you store its output in a text file ?


solution 5:-- Yes, you can run system commands from a Node.js JavaScript file using the `child_process` module. This module provides the ability to spawn child processes and interact with other programs via their standard streams.

One way to run a system command is by using the `exec()` function from the `child_process` module. This function creates a new shell and executes the given command. The output from the execution is buffered and is available for use in a callback².

For example, to run the `ls` command and store its output in a text file, you can do something like this:
```javascript
const { exec } = require('child_process');

exec('ls > output.txt', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```
This code uses the `exec()` function to run the `ls` command and redirect its output to a file named `output.txt`. The callback function receives any error, standard output, or standard error produced by the command.


<<<<<<<<<------------------------------------->>>>>>>>>