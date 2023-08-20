require('dotenv').config();
const cors = require('cors');

const app = require("./app/app");

const options = {
    origin: 'http://localhost:3000',
}
app.use(cors(options))

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
