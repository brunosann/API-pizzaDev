const { addPizza } = require("../models/addPizza");

exports.add = (req, res) => {
  addPizza(req, res);
};
