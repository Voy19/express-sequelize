require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');

sequelize.sync().then(() => console.log('DB is ready to use'));

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/users', require('./routes/users'));

app.use((_, res) => res.status(404).send('Route not found'));

app.listen(PORT, process.env.HOST, () => console.log(`Server has been started on ${PORT}`));
