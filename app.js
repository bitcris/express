const express = require('express');
const axios = require('axios');
const { engine } = require('express-handlebars');
const GetHeader = require('./header.js');


const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use((req, res, next) => {
  const customMiddleware = GetHeader(req);
  customMiddleware(req, res, next);
});


app.get('/', (req, res) => {
  const info = '\u001b[32minfo: 400gj4-0g005\u001b[0m'; // Sequência de escape ANSI para texto verde

  console.log('\u001b[34mRequisição recebida\u001b[0m'); // Sequência de escape ANSI para texto azul
  console.log('\u001b[33mDadosH:', req.data1, '\u001b[0m'); // Sequência de escape ANSI para texto amarelo
  console.log(info); // Texto verde

  res.send(info);
});


app.listen(80);
