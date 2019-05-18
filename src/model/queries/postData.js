const dbConnection = require('../db_connections.js');

const postUserGoals = (users_id, goal) => {
       
    const query = `
        INSERT INTO users_goals 
        VALUES
        ($1, $2)
    `   
        return dbConnection.query(query, [users_id, goal])
}

const postUserLocation = (users_id, latitude, longitude) => {
    const query = `
    INSERT INTO users_location
    VALUES
    ($1, $2, $3)
    `

    return dbConnection.query(query, [users_id, latitude, longitude])
}

const postUserData = (users_name, age, gender, location, experience, photo) => {
    const query = `
        INSERT INTO users
        (users_name, age, gender, location, experience, photo)
        VALUES
        ($1, $2, $3, $4, $5, $6)
        RETURNING
        users_id    
    `;
    return dbConnection.query(query, [users_name, age, gender, location, experience, photo])
    .then(response => response.rows[0].users_id)
    .catch(err => console.log(err))
}

module.exports = {
    postUserData,
    postUserGoals,
    postUserLocation
};