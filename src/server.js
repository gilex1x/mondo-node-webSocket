//dependencies and modules
const express = require("express");
const app = express();
const server = require('http').Server(app);
const bodyParser = require("body-parser");
const { socket, connect } = require('./socket')
const { router } = require("./components/network/routes");

//const
const port = 3000;

//middlewares
app.use(bodyParser.json());
connect(server);

//router
router(app);

app.use('/app', express.static('public'))

server.listen(port, () => {
    console.info(`runing on ${port}`);
});
