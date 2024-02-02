const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.BD_HOST || 'localhost',
        user: process.env.BD_USER || 'root',
        password: process.env.BD_PASSWORD || '',
        database: process.env.BD_NAME || 'deber'
    }
});
module.exports = knex;