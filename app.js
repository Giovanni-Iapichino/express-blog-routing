const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

const { posts } = require("./db");

app.use(express.static("public"));

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server attivo su http://localhost: ` + port);
});
