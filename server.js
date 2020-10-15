const express = require("express");
const child = require("child_process");
const fs = require("fs");

const app = express();

const PORT = 8002;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/tedit.html");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

const watcher = fs.watch("public/statechart.js");

let currentChild = child.fork("public/statechart.js");

watcher.on("change", () => {
  if (currentChild) {
    currentChild.kill();
  }
  currentChild = child.fork("server.js");
});
