const express = require('express');
const controllers = require('./controller/index');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(controllers);

module.exports = app;