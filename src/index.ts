import express from "express";

const app = express();
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {

//Enabling CORS
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
next();
});

app.get('/', (_, res) => {
    res.send("api form Giandomenico Mancuso");
});

app.use( '/weather', require('./routes/weather'));

app.listen(3000, () => console.log("listening on http://localhost:3000"));