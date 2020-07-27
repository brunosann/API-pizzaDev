const express = require("express");
require("dotenv").config({ path: "variables.env" });
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Serve run port: ${process.env.PORT}`);
});
