const { mssql, poolPromise } = require("../config/db");

const read = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM users");

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).send({ message: "Interval Error Server", error: error });
  }
};

const create = async (req, res) => {
  const { userId, name, birthOfYear, phone, email, address } = req.body;
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("userId", mssql.Int, userId)
      .input("name", mssql.VarChar, name)
      .input("birthOfYear", mssql.DateTime, birthOfYear)
      .input("phone", mssql.VarChar, phone)
      .input("email", mssql.VarChar, email)
      .input("address", mssql.VarChar, address).query(`
        INSERT INTO users (userId, name, birthOfYear, phone, email, address)
        OUTPUT INSERTED.*
        VALUES (@userId, @name, @birthOfYear, @phone, @email, @address)
      `);

    res.status(200).json({
      message: "User created successfully",
      user: result.recordset[0],
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const userControllers = {
  read,
  create,
};

module.exports = {
  userControllers,
};
