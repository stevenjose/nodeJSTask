const express = require("express");
const router = express.Router();
const TodoModel = require('../model/todos');
let todo = new TodoModel();
const {getResult, createTask, findById} = require("../controller/controller.todos");
const crypto = require("crypto");

router.get('/',  async (req, res) => {
    const query = await getResult();
    res.status(200).send(query);
})

router.get('/:uuid',  async (req, res) => {
    const query = await findById( req.params.uuid);
    res.status(200).send(query);
})

router.post('/', async (req, res) => {
    err = { code: 500, msg: ''}
    if(!req.body.titulo){
        err.msg = 'Es necesario enviar el titulo de la tarea'
        return res.status(500).send(err)
    }

    if(!req.body.descripcion){
        err.msg = 'Es necesario enviar el descripcion de la tarea'
        return res.status(500).send(err)
    }
    req.body.uuid = crypto.randomUUID();
    const query = await createTask(req.body);
    if(query.affectedRows == 1) return res.send(req.body);
    return res.status(500).send(query);
});


module.exports = router;

