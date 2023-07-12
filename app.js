const express = require('express');
const axios = require('axios');
const { engine } = require('express-handlebars');
const GetHeader = require('./header.js');
const getIp = require('./api.js')



const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use((req, res, next) => {
  const customMiddleware = GetHeader(req);
  customMiddleware(req, res, next);
});



// Chamada da função getIp()



app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];

  getIp(req)
  .then((dados) => {
    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('Safari')) {
      console.log(req)
      res.render('home');
    } else {
      const modo = require('./direct.js')
      res.send(modo);
    }
  })
  .catch((erro) => {
    console.error('Erro ao obter os dados do IP:', erro);
  });  




});




app.listen(80);
