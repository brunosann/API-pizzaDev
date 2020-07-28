const { register } = require("../models/register");

exports.login = (req, res) => {};

exports.register = (req, res) => {
  register(req.body, res);
};
