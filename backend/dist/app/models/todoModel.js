"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: { type: Boolean, required: true, default: false },
}, { timestamps: true });
const Todo = (0, mongoose_1.model)('Todo', todoSchema);
exports.default = Todo;
