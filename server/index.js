const express = require("express");
const sql = require("mssql");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;
var config = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
  },
};

sql.connect(config, (err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Successful!");
});

app.use("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Localhost is running at http://localhost:${PORT}`);
});
