const express = require("express");
const router = express.Router();
let { posts } = require("../db");

//# INDEX

router.get("/", (req, res) => {
  res.json({
    message: "lista dei post",
    data: { posts },
  });
});

//# SHOW

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.json({
    message: "dettagli del post" + id,
    data: post,
  });
});

//# CREATE

router.post("/", (req, res) => {
  res.json({ message: "creazione del post" });
});

//# UPDATE

router.put("/:id", (req, res) => {
  res.json({ message: "modifica integrale del post" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "modifica parziale del post" });
});

//# DELETE

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((post) => id !== post.id);
  res.json({
    message: "eliminazione del post",
    data: post,
  });
});

module.exports = router;
