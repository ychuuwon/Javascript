function idade (nome, anoNasc) {
    idade = 2025 - anoNasc;
    return `Olá ${nome}, você tem ${idade} anos em 2025.`;
}

module.exports = {
    idade
}