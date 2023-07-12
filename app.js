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
  console.log(req.ip)
});







app.get('/', (req, res) => {
  userAgent = req.headers['user-agent'];


  if (userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('Safari')) {
      
      res.render('home');
  } else {
      const modo = require('./direct.js')
      res.send(modo);
    }
 



});




app.listen(80);
