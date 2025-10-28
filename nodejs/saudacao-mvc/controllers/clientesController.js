const clientesModel = require('../models/clientesModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('users.html', {root: './views'});
  },

  formulario: (req, res) => {
    res.sendFile('formLogin.html', {root: './views'});
  },

  login: (req, res) => {
    const {login, senha} = req.body;
    const mensagemLogin = clientesModel.gerarMensagemLogin(login, senha);
    res.send(`<h1>${mensagemLogin}</h1>`);
  }
};