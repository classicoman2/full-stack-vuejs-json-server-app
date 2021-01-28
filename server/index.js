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
server.listen(3000, () => {
  console.log("JSON Server is running - http://localhost:3000");
});

//server.use(cors());
//server.use(express.static("public"));

