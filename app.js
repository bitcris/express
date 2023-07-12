const express = require('express');
const axios = require('axios');
const { engine } = require('express-handlebars');

const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

async function getIPDetails(ip) {
  try {
    const response = await axios.get(`https://freeipapi.com/api/json/${ip}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

app.get('/', async (req, res) => {
  const userAgent = req.headers['user-agent'];
  const cleanedText = userAgent.replace('user-agent = ', '');
  const items = cleanedText.split(' ');
  const hasMozilla = items.some(item => item.includes('Mozilla'));

  const clientIP = '186.249.86.64'; //req.ip
  const ip = clientIP.split(':').pop();
  


  const parseUserAgent = require('./parser.js');
  const text = cleanedText;
  const result = parseUserAgent(text);
  console.log(result);
  
  


  try {
    const dados = await getIPDetails(ip);
    console.log(dados);

    if (hasMozilla) {
      res.render('home', { ip, dados, result });
      
    } else {
      const acceptHeader = req.headers['accept'];
      const isBrowserRequest = acceptHeader && acceptHeader.includes('text/html');

      if (isBrowserRequest) {
        res.json(dados);
      } else {
        res.send(dados);
      }
    }
  } catch (error) {
    console.error(error);
    res.render('error'); // Renderiza uma página de erro, se necessário
  }
});

app.listen(80);
