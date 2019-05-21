const dbConnection = require('../db_connections.js');

const insertUserGoals = (users_id, goal) => {
       
    const query = `
        INSERT INTO users_goals 
        VALUES
        ($1, $2)
    `   
        return dbConnection.query(query, [users_id, goal])
}

const insertUserData = (users_name, age, gender, location, experience, photo, bio) => {
    const query = `
        INSERT INTO users
        (users_name, age, gender, location, experience, photo, bio)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7)
        RETURNING
        users_id    
    `;
    return dbConnection.query(query, [users_name, age, gender, location, experience, photo, bio])
    .then(response => response.rows[0].users_id)
    .catch(err => console.log(err))
}

module.exports = {
    insertUserData,
    insertUserGoals
};