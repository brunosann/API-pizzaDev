const db = require("./poolDb");
const bcrypt = require("bcrypt");

exports.register = async ({ name, email, passwd, address, tel }, res) => {
  const addUser = async () => {
    const hashPassword = await bcrypt.hash(passwd, 10);

    await db.pool.query(
      "INSERT INTO users (name, email, password, address, tel) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashPassword, address, tel],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.json({ msg: "conect failed" });
        }
        return res.json({ msg: "user added" });
      },
    );
  };

  await db.pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ msg: "conect failed" });
      } else if (result.length > 0) {
        return res.json({ msg: "registered email" });
      }
      addUser();
    },
  );
};
