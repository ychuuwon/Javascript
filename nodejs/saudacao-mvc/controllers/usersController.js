const usersModel = require('../models/usersModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('users.html', {root: './views'});
  },

  formulario: (req, res) => {
    res.sendFile('formLogin.html', {root: './views'});
  },

  login: (req, res) => {
    const {login, senha} = req.body;
    const mensagemLogin = usersModel.gerarMensagemLogin(login, senha);
    res.send(`<h1>${mensagemLogin}</h1>`);
  }
};