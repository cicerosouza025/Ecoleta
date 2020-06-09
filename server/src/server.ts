import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Request Param: parametros que vem na propria rota que identificam um recurso
//Query Param: parametros que vem na propria rota geralmente opcioans para filtros


app.listen(3333);
