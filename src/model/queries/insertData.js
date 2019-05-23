const dbConnection = require("../db_connections.js");

const insertUserGoals = (users_id, goal_id) => {
  const query = `
        INSERT INTO users_goals 
        VALUES
        ($1, $2)
    `;
  return dbConnection.query(query, [users_id, goal_id]);
};

const insertUserLocation = (users_id, latitude, longitude) => {
  const query = `
        INSERT INTO users_location 
        VALUES
        ($1, $2, $3)
    `;
  return dbConnection.query(query, [users_id, latitude, longitude]);
};

const insertUserData = (users_name, age, gender, experience, bio) => {
  const query = `
        INSERT INTO users
        (users_name, age, gender, experience, bio)
        VALUES
        ($1, $2, $3, $4, $5)
        RETURNING
        users_id    
    `;
  return dbConnection
    .query(query, [users_name, age, gender, experience, bio])
    .then(response => response.rows[0].users_id)
    .catch(err => console.log(err));
};

module.exports = {
  insertUserData,
  insertUserGoals,
  insertUserLocation
};
