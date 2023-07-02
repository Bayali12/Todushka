"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./app/config/db");
const todoRoutes_1 = __importDefault(require("./app/routes/todoRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 8081;
app.use('/api/todo', todoRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
(0, db_1.connectDB)(process.env.MONGODB_URL || '');
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
