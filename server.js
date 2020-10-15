const express = require("express");
const path = require("path");

const app = express();

const PORT = 8002;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/tedit.html");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
