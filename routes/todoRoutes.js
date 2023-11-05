const express = require("express");
const router = express.Router();
const { 
    getAllTodos,
    createTodo,
    updateTodoById,
    deletedTodoById 
} = require("../controllers/todoCOntroller");


router.get('/all-todos', getAllTodos);
router.post('/new-todo', createTodo);
router.put('/update-todo/:id', updateTodoById);
router.delete('/delete-todo/:id', deletedTodoById);

module.exports = router;