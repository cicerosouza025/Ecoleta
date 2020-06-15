import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Request Param: parametros que vem na propria rota que identificam um recurso
//Query Param: parametros que vem na propria rota geralmente opcioans para filtros


app.listen(3333);
