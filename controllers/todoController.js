const Todo = require('../models/todoModel');

//get all todos
// PUBLIC
// GET
const getAllTodos = async(req,res) => {
    try {
        const todo = await Todo.find();
        res.status(200).json(todo);
    } catch (error) {
        console.log(error)
    }
}

//create todo
// PUBLIC
// POST
const createTodo = async(req,res) => {
    try {
        const newTodo = new Todo(req.body);
    
        const savedTodo = await newTodo.save();
    
        res.status(200).json(savedTodo);
        console.log(savedTodo)
      } catch (error) {
        console.log(error);
      }
    };


//update todo
// PRIVAT
// PUT
const updateTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedTodo);
    } catch (error) {
        console.log(error)
    }
}

//delete todo
// PRIVATE
// DELETE
const deletedTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.status(200).json("Todo deleted successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodoById,
    deletedTodoById
}