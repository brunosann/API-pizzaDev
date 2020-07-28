const db = require("./poolDb");

exports.addPizza = async (req, res) => {
  const { name, size_p, size_m, size_g, description } = req.body;
  const img = req.file.filename;
  console.log(img);
  console.log(req.body);
  await db.pool.query(
    "INSERT INTO pizzas (name, img, size_p, size_m, size_g, description) VALUES (?, ?, ?, ?, ?, ?)",
    [name, img, size_p, size_m, size_g, description],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.json({ error: "conect failed" });
      }
      res.json({ msg: "success" });
    },
  );
};
