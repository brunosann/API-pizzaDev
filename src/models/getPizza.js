const db = require("./poolDb");

exports.resultPizza = async (res, id) => {
  await db.pool.query("SELECT * FROM pizzas WHERE id=?", [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.json({ error: "conect failed" });
    }
    return res.json({ results });
  });
};
