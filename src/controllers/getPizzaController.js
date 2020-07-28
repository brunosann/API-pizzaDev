const { result } = require("../models/getAll");

exports.getAll = async (req, res) => {
  await result(res);

  // res.json([
  //   {
  //     id: 1,
  //     name: "Mussarela",
  //     img: "images/pizza.png",
  //     price: 20.19,
  //     sizes: ["100g", "530g", "860g"],
  //     description:
  //       "Descrição da pizza em mais de uma linha muito legal bem interessante",
  //   },
  // ]);
};

exports.get = (req, res) => {
  const id = req.params.id;
  res.json({ pizzaId: id });
};
