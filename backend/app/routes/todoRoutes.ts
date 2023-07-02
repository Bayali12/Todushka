import { Router } from 'express';
import { getAllTodos, newTodo, removeTodo, toggleTodo } from '../controllers/todoControllers';

const router = Router();
router.post('/', newTodo);
router.get('/', getAllTodos);
router.delete('/:id', removeTodo);
router.put('/:id', toggleTodo);

export default router;
