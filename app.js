const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Handling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers',"*");
    next();
});

//Routes to handle incoming requests
app.use('/products', productRoutes);


module.exports = app;