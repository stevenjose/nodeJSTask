const connect = require('../core/conecction');
const crypto = require('crypto')
async function getResult(){
    return new Promise((resolve,reject)=> {  // se retorna una promesa para las operaciones que no son una tramsaccion
        connect.query('select * from tasks', (error,rows)=> {
            return error? reject(error): resolve(rows);
        })
    })
}

async function createTask(task){
    return new Promise((resolve,reject)=> {
        connect.query('insert into tasks (uuid,titulo, descripcion, completado) value(?,?,?,?)',
            [task.uuid,task.titulo, task.descripcion, task.completado], (error,rows)=> {
                return error? resolve({code:500,"error": error.code, "message": error.sqlMessage}): resolve(rows);
        })
    })
}

async function findById(uuid){
    return new Promise((resolve,reject)=> {
        connect.query('select * from todos.tasks where uuid = ?',[uuid], (error,rows)=> {
                return error? resolve({code:500,"error": error.code, "message": error.sqlMessage}): resolve(rows);
            })
    })
}

module.exports = { getResult, createTask, findById  };
