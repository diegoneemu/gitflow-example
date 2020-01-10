import express from "express";

const server = express();

server.get("/message", (_, res) => {
  res.send("Hello ts-node!!!");
});

export default server;
