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
  res.sendFile(path.dirname(path.dirname(__dirname)) + "/public/index.html");
});

server.use(router);

// HEROKU 
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`JSON Server is running - http://localhost:${port}`);
});

//xtoni

//server.use(cors());
//server.use(express.static("public"));