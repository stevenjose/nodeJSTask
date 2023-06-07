const express = require("express");
const router = express.Router();
const TodoModel = require('./model/todos');
let todo = new TodoModel();
const {getResult, result } = require("./getTodos");

router.get('/',  async (req, res) => {
    const query = await getResult();
    res.status(200).send(query);
})

router.post('/', (req, res) => {
    todo.addTodo(req.body.id, req.body.titulo,  req.body.descripcion, req.body.completado);
    res.send(req.body);
});


module.exports = router;

