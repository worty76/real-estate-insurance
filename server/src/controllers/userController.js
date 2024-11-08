const { sql, poolPromise } = require("../config/db");

const read = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM users");

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).send({ message: "Interval Error Server", error: error });
  }
};

const userControllers = {
  read,
};

module.exports = {
  userControllers,
};
