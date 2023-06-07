const express = require("express");
const router = express.Router();
const TodoModel = require('../model/todos');
let todo = new TodoModel();
const {getResult } = require("../controller/getTodos");

router.get('/',  async (req, res) => {
    const query = await getResult();
    res.status(200).send(query);
})

router.post('/', (req, res) => {
    res.send(req.body);
});


module.exports = router;

