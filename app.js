const express = require("express");
const app = express();
const port = 3000;

const posts = require("./db");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Server del mio blog" });
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Server attivo su http://localhost: ` + port);
});
