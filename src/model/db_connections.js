const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

let connectionString =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;
console.log(connectionString);
if (!connectionString) throw new Error("Database url must be set");

module.exports = new Pool({
  connectionString,
  max: 2,
  ssl: !connectionString.includes("localhost")
});
