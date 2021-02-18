// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

//express i cors
const express = require("express");
const cors = require("cors");

server.use(express.static("server/public"))

server.use(middlewares);

server.get("/", function (req, res) {
    console.log('xxxxxxxx')
  res.sendFile(path.dirname(path.dirname(__dirname)) + "/public/index.html");
});


server.use(router);

// HEROKU !!!  xtoni
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running - http://localhost:${port}`);
});

//server.use(cors());
//server.use(express.static("public"));

