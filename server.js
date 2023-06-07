const todo = require('./routes');
const express = require('express')
const app = express();
const port = 3000;

app.use('/api/v1/todos', todo);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

