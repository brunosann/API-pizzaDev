const { result } = require("../models/getAll");
const { resultPizza } = require("../models/getPizza");

exports.getAll = async (req, res) => {
  await result(res);
};

exports.get = (req, res) => {
  const { id } = req.params;
  resultPizza(res, id);
};
