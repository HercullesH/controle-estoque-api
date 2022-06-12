require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const itemRoute = require('./src/routes/item.route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/itens', itemRoute);

app.listen(process.env.PORTA, () => { console.log('rodando') })