const http = require("http");
const fs = require("fs");

const indexFile = fs.readFileSync("./index.html", "utf-8");
const jsonData = JSON.parse(fs.readFileSync("./data.json"));

const products = jsonData.products;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //console.log(products)

  if (req.url.startsWith("/product")) {
    console.log(req.url.split("/"));

    const id = req.url.split("/")[2];

    const product = products.find((prod) => prod.id === +id);

    console.log(product);

    res.setHeader("Content-type", "text/html");

    let modifiedData = indexFile.replace("**title**", product.title).replace("**url**", product.thumbnail).replace("**price**", product.price).replace("**rating**", product.rating);

    res.end(modifiedData);
    return;
  }

  switch (req.url) {
    case "/": {
      res.setHeader("Content-type", "text/html");
      res.end(indexFile);
      break;
    }
    case "/api": {
      res.setHeader("Content-type", "application/json");
      res.end(JSON.stringify(jsonData));
      break;
    }
    default: {
      res.writeHead(404);
      res.end();
      break;
    }
  }

  console.log("Server Started on port 8080");

  //res.setHeader("Content-type","text/html");
  // res.setHeader("Content-type","application/json");
  // res.end(jsonData);
});

server.listen(8080);