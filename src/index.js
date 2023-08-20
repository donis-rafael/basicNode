require('dotenv').config();
const cors = require('cors');

const app = require("./app/app");

const options = {
    origin: '',
}
const allowlist = ['http://localhost:3000', 'http://190.148.50.160:3000'];

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://190.148.50.160:3000"]
}));

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
