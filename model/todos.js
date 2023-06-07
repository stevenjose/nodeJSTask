class Todos {
    todos = [];
    constructor(id, titulo, descripcion, completado) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
    }


    addTodo(id, titulo, descripcion, completado){
       this.todos.push(new Todos(id, descripcion, completado));
    }

}

module.exports = Todos;