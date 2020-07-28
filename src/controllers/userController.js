const { register } = require("../models/register");
const { login } = require("../models/login");

exports.login = (req, res) => {
  const { email, passwd } = req.body;
  login(res, email, passwd);
};

exports.register = (req, res) => {
  register(req.body, res);
};
