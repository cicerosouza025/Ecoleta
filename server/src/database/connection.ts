import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'databse.sqlite'),
    },

});

export default connection;

//Migrations = historico do banco de dados
