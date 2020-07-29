const db = require("./poolDb");
const bcrypt = require("bcrypt");
const { generatorJWT } = require("../middleware/auth");

exports.login = async (res, email, passwd) => {
  await db.pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ msg: "conect failed" });
      }
      if (result.length > 0) {
        const dbPassword = result[0].password;
        bcrypt.compare(passwd, dbPassword, (err, verif) => {
          if (verif) {
            const user = {
              id: result[0].id,
              email: result[0].email,
            };
            return res.json({
              token: generatorJWT(user),
              name: result[0].name,
            });
          } else {
            return res.json({ msg: "error" });
          }
        });
      } else {
        return res.json({ msg: "not registered" });
      }
    },
  );
};
