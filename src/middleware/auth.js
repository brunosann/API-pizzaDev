const jwt = require("jsonwebtoken");

exports.generatorJWT = (user) => {
  const secret = process.env.SECRET;
  const options = {
    expiresIn: "2d",
  };
  const token = jwt.sign(user, secret, options);
  return token;
};

exports.authorization = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).json({ error: "not authorized" });

  const headerToken = req.headers.authorization.split(" ")[1];

  try {
    const user = jwt.verify(headerToken, process.env.SECRET);
    req.user = {
      id: user.id,
      email: user.email,
    };
    return next();
  } catch (error) {}
  return res.status(401).json({ error: "not authorized" });
};
