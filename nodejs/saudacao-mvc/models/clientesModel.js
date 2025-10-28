module.exports = {
  verificarLogin: (login, senha) => {
    let acesso;

    if (login === "JoaozinhoGamerHD" && senha === "Joao123") {
      acesso = "Aceito";
    } else {
      acesso = "Negado";
    }

      return `Olá, ${login}, seu acesso foi: ${acesso}.`;
  }
};