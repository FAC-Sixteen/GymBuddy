const dbConnection = require('../db_connections.js');

const getAllUsers = () => {
    return dbConnection.query('SELECT * FROM users')
    .then(response => {return response.rows})
    .catch(err => console.log(err))
}

const getUser = (name) => {
    const query = `
        SELECT * FROM users WHERE users_name = '${name}'
        `

    return dbConnection.query(query)
        .then(response => {return response.rows[0]})
        .catch(err => console.log(err))
}

const getUserGoals = () => {
    return dbConnection.query(`SELECT * FROM users_goals`)
    .then(response => {return response.rows})
    .catch(err => console.log(err))
}

module.exports = {
    getAllUsers,
    getUser,
    getUserGoals
};