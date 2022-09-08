//functions and logic messgaes

const createMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("falta user o message");
      reject("Datos incorrectos");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    console.log(fullMessage);
    resolve(fullMessage);
  });
};
const editMessage = () => {};

module.exports = { createMessage, editMessage };
