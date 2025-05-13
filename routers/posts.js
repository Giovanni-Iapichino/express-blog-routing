const express = require("express");
const router = express.Router();

//# INDEX

router.get("/", (req, res) => {
  res.json({ message: "lista dei post" });
});

//# SHOW

router.get("/:id", (req, res) => {
  res.json({ message: "dettagli del post" });
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
  res.json({ message: "eliminazione del post" });
});

module.exports = router;
