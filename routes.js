const express = require("express");
const router = express.Router();
let todos = [
    { id: 1, titulo: "Comprar pan", descripcion: "🍞🍞🍞", completado: false },
    { id: 2, titulo: "Tomar café", descripcion: "☕️☕️☕️", completado: false },
    { id: 3, titulo: "Estudiar NodeJS", descripcion: "📚📚📚", completado: false },
    { id: 4, titulo: "Estudiar Express", descripcion: "🤓🤓🤓", completado: false },
    { id: 5, titulo: "Estudiar MySQL", descripcion: "🤯🤯🤯", completado: false },
]

router.get('/', (req, res) => {
    res.status(200).send(todos)
})

router.post('/', (req, res) => {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});

module.exports = router;

