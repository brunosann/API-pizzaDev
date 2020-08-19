const express = require("express");
require("dotenv").config({ path: "variables.env" });
const cors = require("cors");
const router = require("./src/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/uploads"));
app.use("/", router);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Serve run port: ${process.env.PORT}`);
});
