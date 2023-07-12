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
  const dadosH = req.data1;
  //console.log(dadosH)
  res.render(`home`);
});


app.listen(80);
