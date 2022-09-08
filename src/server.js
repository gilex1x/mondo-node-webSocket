//dependencies and modules
const express = require("express");
const bodyParser = require("body-parser");
const {router} = require("./components/network/routes");

//const
const app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json());
router(app);

//router

app.listen(port);
console.log(`runing on ${port}`);
