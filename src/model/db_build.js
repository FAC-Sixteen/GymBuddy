const fs = require("fs");
const dbConnection = require("./db_connections");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) reject(err);

      resolve(true);
    });
  });

module.exports = runDbBuild;
