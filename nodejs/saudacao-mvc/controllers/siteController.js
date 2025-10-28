const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, idade, apelido } = req.body;
    const idadeNum = Number(idade);

    if (!nome || !apelido || isNaN(idadeNum)) {
      return res.status(400).send('<h1>Dados inválidos. Verifique nome, idade e apelido.</h1>');
    }

    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idadeNum, apelido);
    res.send(`<h1>${mensagem}</h1>`);
  }
};