const express = require("express");
const router = express.Router();
const getController = require("./controllers/getPizzaController");
const buyController = require("./controllers/buyPizzaController");
const addController = require("./controllers/addPizzaController");
const userController = require("./controllers/userController");
const { upload } = require("./middleware/upload");

router.get("/", getController.getAll);
router.get("/:id", getController.get);
router.post("/buy", buyController.buy);
router.post("/add", upload, addController.add);
router.post("/user/login", userController.login);
router.post("/user/register", userController.register);

module.exports = router;
