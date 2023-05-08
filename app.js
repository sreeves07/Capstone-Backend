//Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userController = require('./controllers/UserController');
const app = express();

//Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

//Routes
app.use('/user', userController);
app.get('/', (req, res) => {
  res.send('Find your roommate!');
});

app.get('*', (req, res) => {
  res.status(404).send({ error: 'Page not found!' });
});

//Export
module.exports = app;
