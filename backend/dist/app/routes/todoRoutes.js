"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoControllers_1 = require("../controllers/todoControllers");
const router = (0, express_1.Router)();
router.post('/', todoControllers_1.newTodo);
router.get('/', todoControllers_1.getAllTodos);
router.delete('/:id', todoControllers_1.removeTodo);
router.put('/:id', todoControllers_1.toggleTodo);
exports.default = router;
