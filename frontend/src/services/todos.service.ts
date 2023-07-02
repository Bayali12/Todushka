import axios from 'axios';
import { Dispatch } from 'redux';
import actions from '../ducks/actions';
import API_URL from './config';

export const fetchTodos = async (dispatch: Dispatch) => {
  dispatch(actions.startedLoadingTodos());
  try {
    const response = await axios.get(API_URL);
    dispatch(actions.setTodos(response.data));
  } catch (error) {
    dispatch(actions.failedLoadingTodos());
  }
};

export const AddTodo = async (todo: string, dispatch: Dispatch) => {
  try {
    const response = await axios.post(API_URL, { text: todo });
    dispatch(actions.addTodo(response.data));
    dispatch(
      actions.addNotification({
        message: `Задача добавлена в ваш список дел`,
        kind: 'success',
      }),
    );
  } catch (error) {
    dispatch(
      actions.addNotification({
        message: `Не удалось добавить задачу`,
        kind: 'error',
      }),
    );
  }
};

export const deleteTodo = async (id: number, dispatch: Dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(actions.deleteTodo(id));
    dispatch(
      actions.addNotification({
        message: `Задача удалена из вашего списка дел`,
        kind: 'success',
      }),
    );
  } catch (error) {
    dispatch(
      actions.addNotification({
        message: `Произошла ошибка при удалении задачу`,
        kind: 'error',
      }),
    );
  }
};

export const toggleTodo = async (id: number, dispatch: Dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`);
    dispatch(actions.toggleTodo(id));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
