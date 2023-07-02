import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import Todo from '../models/todoModel';

export const newTodo = asyncHandler(async (req: Request, res: Response) => {
  const todo = await Todo.create({ text: req.body.text, completed: req.body.completed });
  res.json({ id: todo._id, text: todo.text, completed: todo.completed, createdAt: todo.createdAt });
});

export const getAllTodos = asyncHandler(async (req: Request, res: Response) => {
  const todos = await Todo.find();
  const filtredTodos = todos.map((item) => ({
    id: item._id,
    text: item.text,
    completed: item.completed,
    createdAt: item.createdAt,
  }));
  res.json(filtredTodos);
});

export const removeTodo = asyncHandler(async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }
  todo.deleteOne();
  res.json({ message: 'Todo has been successfully removed' });
});

export const toggleTodo = asyncHandler(async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.id);

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      completed: !todo?.completed,
    },
    { new: true },
  );
  res.json({ updatedTodo });
});
