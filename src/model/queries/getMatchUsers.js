//User can choose :
// Gender
// age
// time
// location
// goals

const db = require("../db_connections");

const getData = () => {
  return db
    .query("SELECT * FROM users")
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnMatchedUsers = gender => {
  return db
    .query("SELECT * FROM users.age")
    .then(response => {
      console.log(response.rows);
    })
    .catch(err => console.log(err));
};

returnMatchedUsers();

module.exports = {
  getData
};
