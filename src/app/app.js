const express = require('express');
var logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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