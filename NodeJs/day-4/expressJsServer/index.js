const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const server = express();

//body-parser
server.use(express.json());

//urlencoded
server.use(express.urlencoded({extended:true}));

// server.use(morgan("dev"));

server.use(express.static("public"));

const indexFileData = fs.readFileSync("index.html","utf-8");
const jsonFileData = JSON.parse(fs.readFileSync("data.json","utf-8"));

const productsData = jsonFileData.products;

server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get('User-Agent')
  );
  next();
});

const auth = (req, res, next) => {
    // console.log(req.query);
  
    // if (req.body.password == '123') {
    //   next();
    // } else {
    //   res.sendStatus(401);
    // }
    next()
   
  };
  
  // API - Endpoint - Route
  server.get('/product/:id', auth, (req, res) => {
    console.log(req.params)
    res.json({ type: 'GET' });
  });
  server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' });
  });
  server.put('/', (req, res) => {
    res.json({ type: 'PUT' });
  });
  server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
  });
  server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
  });
  

// server.get("/demo",auth, (req,res) => {
//     // res.send("Hello World");
//     res.sendFile(`${__dirname}/data.json`);
//     // res.sendFile(`${__dirname}/index.html`);
//     // res.json(productsData);
// });


server.listen(8080, () => {
    console.log("Server started in port 8080");
});
