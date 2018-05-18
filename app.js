const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./src/db.js');

const tasksRouter = require('./src/routes/tasks.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/tasks', tasksRouter);

app.set('views', __dirname + '/src/views');

// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/src/static'));

app.listen(3000, () => {
    console.log(`Server listening on port ${PORT}`);
});
