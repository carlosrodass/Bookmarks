const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api", require("./routes"));

//Controlando rutas indefinidas
app.get("*", function (req, res) {
    res.send("Undefined route request");
})

//Puerto
app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);

});