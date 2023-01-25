const express = require("express")
const {
    addTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
} = require("../controllers/todoControllers")

const router = express.Router()
// Set routes
router.post("/todo", addTodo)
router.get("/todo", getAllTodos)
router.get("/todo/:id", getTodo) // didn't use this one but it's here for completeness
router.put("/todo/:id", updateTodo) // :id is a placeholder for the id of the todo
router.delete("/todo/:id", deleteTodo)

module.exports = {
    routes: router,
}
