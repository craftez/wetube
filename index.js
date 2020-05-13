const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi")
})

app.listen(1234, () => {
  console.log("Listening on: http://localhost:1234")
});
