const express = require('express');
const path = require('path'); //evita tratar de caminhos longos
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// users
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

// produtos
const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);

//nova rota: clientes
/*const clientesRoutes = require('./routes/clientes');
app.use('/clientes', clientesRoutes);*/

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
