const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
require('./hbs/helpers');

const port = process.env.PORT || 5000;

//Express HBS 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'bRayan'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {

    });
});

app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});