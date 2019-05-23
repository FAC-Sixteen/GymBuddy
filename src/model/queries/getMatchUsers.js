const db = require("../db_connections");

const getData = () => {
  return db
    .query("SELECT * FROM users")
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnMatchedUsers = (age, gender, location, experience) => {
  return db
    .query(
      "SELECT * FROM users WHERE (age, gender, location, experience) = ($1, $2, $3, $4)",
      [age, gender, location, experience]
    )
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnUserAndAllGoals = userID => {
  return db
    .query("SELECT * FROM users_goals WHERE (users_id) = ($1)", [userID])
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnUserAndAllTimes = userID => {
  return db
    .query("SELECT * FROM users_time WHERE (users_id) = ($1)", [userID])
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

module.exports = {
  getData,
  returnMatchedUsers,
  returnUserAndAllGoals,
  returnUserAndAllTimes
};
