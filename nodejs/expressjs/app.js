import express from "express"; 

const app = express();
const PORT = 3000;

//Middleware
app.use ((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    next();
});


//Roteamento básico
app.get("/", (req, res) => {
    res.status(200).send("<h1>Página Inicial!</p>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Página Sobre</p>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Fale conosco</p>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Fotos</p>");
}); 

//rota para lidar com páginas não encontradas
app.use((req, res) => {
    res.status(404).send("<h1>404 - Página Não Encontrada</h1>");
}); 

//inicia o servidor para ouvir porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});