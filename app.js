const express = require("express");
const app = express();

app.set("view engine", "ejs");

const testVar = "abc123";

app.get("/", (req, res) => {
  res.render("home", { testVar: testVar });
});

app.listen(3000, (req, res) => {
  console.log("Server running on 3000, sir!");
});
