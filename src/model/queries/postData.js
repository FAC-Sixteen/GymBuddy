const dbConnection = require('../db_connections.js');

const postUserGoals = (users_id,goal) => {
    
    
    const query = `
        INSERT INTO users_goals 
        VALUES
        ($1, $2)
    `   
        return dbConnection.query(query, [users_id, goal])
        .catch(err => console.log(err))

}



const postUserData = (users_name, age, gender, location, experience, photo, goals) => {
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
    .then(value => postUserGoals(value, goal))
    // .then(value => {
    //     console.log(value)
    //     goals.forEach(element => {
    //         console.log(element)
    //         postUserGoals(value, element) 
    //     })
    // })
}


module.exports = {
    postUserData
};