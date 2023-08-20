require('dotenv').config();
const cors = require('cors');

const app = require("./app/app");

const options = {
    origin: '',
}
const allowlist = ['http://localhost:3000', 'http://190.148.50.160:3000'];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;

    let isDomainAllowed = whitelist.indexOf(req.header('Origin')) !== -1;
    let isExtensionAllowed = req.path.endsWith('.jpg');

    if (isDomainAllowed && isExtensionAllowed) {
        // Enable CORS for this request
        corsOptions = { origin: true }
    } else {
        // Disable CORS for this request
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}


app.use(cors(corsOptionsDelegate))

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
