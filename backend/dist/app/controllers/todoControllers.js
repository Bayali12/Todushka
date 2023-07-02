"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleTodo = exports.removeTodo = exports.getAllTodos = exports.newTodo = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const todoModel_1 = __importDefault(require("../models/todoModel"));
exports.newTodo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.create({ text: req.body.text, completed: req.body.completed });
    res.json({ id: todo._id, text: todo.text, completed: todo.completed, createdAt: todo.createdAt });
}));
exports.getAllTodos = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todoModel_1.default.find();
    const filtredTodos = todos.map((item) => ({
        id: item._id,
        text: item.text,
        completed: item.completed,
        createdAt: item.createdAt,
    }));
    res.json(filtredTodos);
}));
exports.removeTodo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.findById(req.params.id);
    if (!todo) {
        res.status(404);
        throw new Error('Todo not found');
    }
    todo.deleteOne();
    res.json({ message: 'Todo has been successfully removed' });
}));
exports.toggleTodo = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.findById(req.params.id);
    const updatedTodo = yield todoModel_1.default.findByIdAndUpdate(req.params.id, {
        completed: !(todo === null || todo === void 0 ? void 0 : todo.completed),
    }, { new: true });
    res.json({ updatedTodo });
}));
