const express = require('express');
var logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
/*app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    const allowedOrigins = ['http://localhost:3000', 'http://190.148.50.160:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});*/

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var routes_auth = require('../routes/authRoutes');
var routes_admin = require('../routes/adminRoutes');
var routes_app = require('../routes/appRoutes');
var routes_informes = require('../routes/informesRoutes');
var routes_consultas = require('../routes/consultasRoutes');

app.get('/', (req, res) => {
    res.status(200).send('is working');
});
app.use('/api/auth', routes_auth);
app.use('/api/admin', routes_admin);
app.use('/api/app-movil', routes_app);
app.use('/api/informes', routes_informes);
app.use('/api/consultas', routes_consultas);

module.exports = app;