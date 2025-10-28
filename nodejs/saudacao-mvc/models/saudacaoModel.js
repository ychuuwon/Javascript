module.exports = {
  gerarMensagemPersonalizada: (nome, idade, apelido) => {
    let faixaEtaria;

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

      return `Olá, ${nome}, para os íntimos, ${apelido}! Você tem ${idade} anos, logo, você é um(a) ${faixaEtaria}.`;
  }
};
