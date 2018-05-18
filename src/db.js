const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/tasks';

mongoose.connect(mongoDB);
mongoose.Promise = Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
