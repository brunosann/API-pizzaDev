const db = require("./poolDb");

exports.result = async (res) => {
  await db.pool.query("SELECT * FROM pizzas", (err, results) => {
    if (err) {
      console.log(err);
      return res.json({ error: "Conect failed" });
    }
    return res.json(results);
  });
};
