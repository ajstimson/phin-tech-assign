"use strict"

const firebase = require("../db")
const Todo = require("../models/todo")
const firestore = firebase.firestore()

//adds new todos to the firestore database
const addTodo = async (req, res, next) => {
    try {
        await firestore.collection("todos").doc().set(req.body)
        res.send("Record saved successfuly")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//gets all todos from the firestore database
const getAllTodos = async (req, res, next) => {
    try {
        const Todos = await firestore.collection("todos")
        const data = await Todos.get()
        const TodosArray = []
        //if there are no todos in the database, return a 204 status code so we can handle it on the client side without an error
        if (data.empty) {
            res.status(204).send("No records found")
        } else {
            data.forEach((doc) => {
                //create a new todo object for each todo in the database and push it to the TodosArray
                const todo = new Todo(
                    doc.id,
                    doc.data().created,
                    doc.data().title,
                    doc.data().status
                )
                TodosArray.push(todo)
            })
            res.send(TodosArray)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}
//get a todo item by id from the firestore database
const getTodo = async (req, res, next) => {
    try {
        const id = req.params.id
        const Todo = await firestore.collection("todos").doc(id)
        const data = await Todo.get()
        if (!data.exists) {
            res.status(404).send("Todo with the given ID not found")
        } else {
            res.send(data.data())
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//edit a todo item by id from the firestore database
const updateTodo = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const Todo = await firestore.collection("todos").doc(id)
        await Todo.update(data)
        res.send("Todo record updated successfuly")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//delete a todo item by id from the firestore database
const deleteTodo = async (req, res, next) => {
    try {
        const id = req.params.id
        await firestore.collection("todos").doc(id).delete()
        res.send("Record deleted successfuly")
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
}
