const db = require("../db_connections")

const returnMatchedUsers = (age, gender, experience) => {
  return db
    .query(
      "SELECT * FROM users LEFT JOIN users_goals ON users.users_id = users_goals.users_id WHERE (users.age, users.gender, users.experience) = ($1, $2, $3)",
      [age, gender, experience]
    )
    .then(response => {
      console.log('returnMatchedUsers: ',response)
      console.log('args: ', age, gender, experience)
      
      return response.rows;
    })
    .catch(err => console.log(err));
};

//add goals param
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
  returnMatchedUsers,
  returnUserAndAllGoals,
  returnUserAndAllTimes
};
