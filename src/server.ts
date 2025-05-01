import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config(); // Importando as variaveis de ambiente

const server = express();

server.set('view engine', 'mustache'); // Setando engine que renderizará as views
server.set('views', path.join(__dirname, 'views')); // Setando o caminho da pasta onde estarão as views
server.engine('mustache', mustache()); // Setando engine que renderizará as views

server.use(express.static(path.join(__dirname, '../public'))); // Setando a pasta de arquivos staticos
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
})
// Rotas
server.listen(process.env.PORT);