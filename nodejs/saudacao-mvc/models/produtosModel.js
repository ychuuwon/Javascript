module.exports = {
     gerarMensagemCadProd: (produto, id, preco, descricao, quantidade) => {
        return `O produto: "${produto}" de ID: "${id}", cuja a descrição é "${descricao}", foi cadastrado com o preço de R$: ${preco} e sua quantidade é ${quantidade} `;
     }
};