const produtosModel = require('../models/produtosModel');
module.exports = {

    formulario: (req, res) => {
        res.sendFile('formProd.html', { root: './views' });
    },

    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    camisetas: (req, res) => {
        res.sendFile('camisetas.html', { root: './views' });
    },

    cadastrar: (req, res) => {
        const {produto, id, preco, descricao, quantidade} = req.body;
        const mensagemCad = produtosModel.gerarMensagemCadProd(produto, id, preco, descricao, quantidade);
        res.send(`<h4>${mensagemCad}</h4>`);
      }
};