const connect = require('../core/conecction');

async function getResult(){
    return new Promise((resolve,reject)=> {  // se retorna una promesa para las operaciones que no son una tramsaccion
        connect.query('select * from tasks', (error,rows)=> {
            return error? reject(error): resolve(rows);
        })
    })
}

module.exports = { getResult };
