var express = require("express");
var app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// app()
//   .get("/", (req, res) => res.render("index"))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  })
  .get(
    "/now",
    function (req, res, next) {
      req.time = new Date().toString();
      next();
    },
    function (req, res) {
      res.send({ time: req.time });
    }
  )
  .get("/:word/echo", (req, res) => {
    res.send({ echo: req.params.word });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
