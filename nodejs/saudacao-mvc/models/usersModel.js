module.exports = {

  gerarMensagemLogin: (login, senha) => {
    let acesso;

    if (login === "JoaozinhoGamerHD" && senha === "Joao1234") {
      acesso = "Aceito";
    } else {
      acesso = "Negado";
    }

      return `Olá, ${login}, seu acesso foi: ${acesso}.`;
  }
};