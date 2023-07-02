import { Todo, Notification } from './types';

export const TODO_ACTIONS = {
  START_LOADING: 'todos/START_LOADING',
  FAILED_LOADING: 'todos/FAILED_LOADING',
  SET_TODOS: 'todos/SUCCESS_LOADING',
  ADD_TODO: 'todos/ADD_TODO',
  DELETE_TODO: 'todos/DELETE_TODO',
  TOGGLE_TODO: 'todos/TOGGLE_TODO',
  ADD_NOTIFICATION: 'todos/ADD_NOTIFICATION',
  DELETE_NOTIFICATION: 'todos/REMOVE_NOTIFICATION',
  SET_SEARCH_TERM: 'todos/SET_SEARCH_TERM',
  HIDE_COMPLETED: 'todos/HIDE_COMPLETED',
};

const startedLoadingTodos = () => ({
  type: TODO_ACTIONS.START_LOADING,
});

const failedLoadingTodos = () => ({
  type: TODO_ACTIONS.FAILED_LOADING,
});

const setTodos = (todos: Todo[]) => {
  return {
    type: TODO_ACTIONS.SET_TODOS,
    payload: todos,
  };
};

const addTodo = (todo: Todo) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload: todo,
});

const deleteTodo = (id: number) => ({
  type: TODO_ACTIONS.DELETE_TODO,
  payload: id,
});

const toggleTodo = (id: number) => ({
  type: TODO_ACTIONS.TOGGLE_TODO,
  payload: id,
});

const addNotification = (notification: Notification) => ({
  type: TODO_ACTIONS.ADD_NOTIFICATION,
  payload: notification,
});

const removeNotification = () => ({
  type: TODO_ACTIONS.DELETE_NOTIFICATION,
});

const setSearchTerm = (searchTerm: string) => ({
  type: TODO_ACTIONS.SET_SEARCH_TERM,
  payload: searchTerm,
});

const hideCompleted = () => ({
  type: TODO_ACTIONS.HIDE_COMPLETED,
});

export default {
  startedLoadingTodos,
  failedLoadingTodos,
  setTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  addNotification,
  removeNotification,
  setSearchTerm,
  hideCompleted,
};
