const express = require('express');
var logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var routes_auth = require('../routes/authRoutes');
var routes_admin = require('../routes/adminRoutes');
var routes_app = require('../routes/appRoutes');
var routes_informes = require('../routes/informesRoutes');
var routes_consultas = require('../routes/consultasRoutes');
var routes_indicadores = require('../routes/indicadoresRoutes');

app.get('/', (req, res) => {
    res.status(200).send('is working');
});
app.use('/api/auth', routes_auth);
app.use('/api/admin', routes_admin);
app.use('/api/app-movil', routes_app);
app.use('/api/informes', routes_informes);
app.use('/api/consultas', routes_consultas);
app.use('/api/indicadores', routes_indicadores);

module.exports = app;