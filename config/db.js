const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "JobPlatform",
});
db.getConnection(() => {
  console.log("connect to db successfully");
});
module.exports = db;
