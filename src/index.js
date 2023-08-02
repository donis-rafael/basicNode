require('dotenv').config();

const app = require("./app/app");

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
