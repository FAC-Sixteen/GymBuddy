const express = require('express');
const controllers = require('./controller/index');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
	"hbs",
	handlebars({
		extname: "hbs",
		layoutsDir: path.join(__dirname, "views", "layouts"),
		partialsDir: path.join(__dirname, "views", "partials"),
		defaultLayout: "main"
	})
);

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;