require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error');
const app = express();

const itemRoute = require('./src/routes/item.route');
const usuarioRoute = require('./src/routes/usuario.route');
const entradaRoute = require('./src/routes/entrada.route');
const saidaRoute = require('./src/routes/saida.route');
const handleError = require('./src/middlewares/handleError');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/usuarios', usuarioRoute);
app.use('/api/itens', itemRoute);
app.use('/api/entradas', entradaRoute);
app.use('/api/saidas', saidaRoute);
app.use(handle404Error);
app.use(handleError);
app.listen(process.env.PORTA, () => { console.log('rodando') })