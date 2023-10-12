const express = require("express");
const app = express();

let envio = require("../controllers/correoControler");
app.post("/envio", envio.mailSent);
module.exports = app;
