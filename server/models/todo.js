// defining an the Todo "blueprint" so we can predictably create multiple instances of the same object.
class Todo {
    constructor(id, created, title, status) {
        this.id = id
        this.created = created
        this.title = title
        this.status = status
    }
}

module.exports = Todo
