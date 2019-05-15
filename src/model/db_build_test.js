const fs = require("fs");
const dbConnection = require("./db_connections");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const buildTestDb = cb => {
  dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    cb(null, res);
  });
  console.log("TEST DATABSE BUILD");
};

module.exports = buildTestDb;
