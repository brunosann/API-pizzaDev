const mysql = require("mysql");

exports.pool = mysql.createPool({
  connectionLimit: 50,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
});
