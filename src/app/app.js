const express = require('express');
var logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Methods",
        "GET, HEAD, OPTIONS, POST, PUT, DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

var routes_auth = require('../rotes/authRoutes');
var routes_admin = require('../rotes/adminRoutes');
var routes_app = require('../rotes/appRoutes');
var routes_informes = require('../rotes/informesRoutes');
var routes_consultas = require('../rotes/consultasRoutes');

app.get('/', (req, res) => {
    res.status(200).send('is working');
});
app.use('/api/auth', routes_auth);
app.use('/api/admin', routes_admin);
app.use('/api/app-movil', routes_app);
app.use('/api/informes', routes_informes);
app.use('/api/consultas', routes_consultas);

module.exports = app;