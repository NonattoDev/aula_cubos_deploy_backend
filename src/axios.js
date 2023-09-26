const axios = require("axios");

module.exports = instanciaAxios = axios.create({
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
