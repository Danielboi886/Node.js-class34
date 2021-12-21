const express = require("express");
const app = express();
const fs = require("fs");

app.post("/blogs", express.json(), (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end("ok");
});

// YOUR CODE GOES IN HERE
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
