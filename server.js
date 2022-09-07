//dependencies and modules
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const defaultResponses = require("./src/network/responses");
//const
const app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json());
app.use(router);

//router
router.get("/", (req, res) => {
  res.header({
    "custom-header": "Valor personalizado",
  });
  defaultResponses.success(req, res);
});

router.get("/message", (req, res) => {
  res.header({
    "custom-header": "Valor personalizado",
  });
  res.send("Hola");
});

router.post("/message", (req, res) => {
  console.log(req.body.message);
  res.status(200).send({
    message: `El mensaje: ${req.body.message}, ha sido creado con exito`,
  });
});

app.listen(port);
console.log(`runing on ${port}`);
