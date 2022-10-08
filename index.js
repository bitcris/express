const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const mysql = require('mysql');
var favicon = require('serve-favicon')


const connection = mysql.createConnection({
  host: 'host',
  user: 'user',
  password: 'pass',
  database: 'database'
})


const port = 80;
var path = require('path');
const app = express();





app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.get('/', (req, res) => {
  
  console.log(`NOVO ACESSO\nIP: ${req.rawHeaders[1]}`);
  res.render('index', {alerta: 'ONLINE'});



const db = fs.readFile('database2.json', (err, data) => {
  if(err){throw err};
  datax = JSON.parse(data);
  const pos = datax.filter((item) => {return item.username === 'mike'});
  console.log(pos);
  datax.push({"username":"tuco","email":"tuco@salamanca.com","password":"1234","name":"Tuco Salamanca"});


  let dados = JSON.stringify(datax, null, 2);
  fs.writeFile('database2.json', dados, (err) => {
    if(err){throw err};
    console.log("DADOS SALVOS");
  })
})
})










app.listen(port, () => {
  console.log(`Servidor ativo na porta ${port}`)
})


//https.createServer({
//  key: fs.readFileSync('SSL/key.pem'),
//  cert: fs.readFileSync('SSL/cert.pem')
//},app).listen(443);

