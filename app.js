const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session')

const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
    console.log(req.rawHeaders[1]);
});

app.get('/login', (req, res) => {
    res.render('login');
    console.log(req.rawHeaders[1]);
});

app.listen(3000);