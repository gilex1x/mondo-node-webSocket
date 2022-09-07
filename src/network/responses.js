const success = (req, res, message, statusCode) => {
  //foo
  res
    .status(statusCode ? statusCode : 200)
    .send(message ? message : "response default message");
};
const error = (req, res, message, statusCode) => {
  //foo
  res
    .status(statusCode ? statusCode : 500)
    .send(message ? message : "error  default message");
};

module.exports = {
  success,
  error,
};
