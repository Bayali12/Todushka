import { RootState } from './types';
import { TODO_ACTIONS } from './actions';

const initialState: RootState = {
  isLoading: false,
  todos: [],
  notifications: [],
  searchTerm: '',
  hideCompleted: false,
};

const todoReducers = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case TODO_ACTIONS.SET_TODOS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };

    case TODO_ACTIONS.START_LOADING:
      return { ...state, isLoading: true };

    case TODO_ACTIONS.FAILED_LOADING:
      return { ...state, isLoading: false };
    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TODO_ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((obj) =>
          obj.id === action.payload ? { ...obj, completed: !obj.completed } : obj,
        ),
      };
    case TODO_ACTIONS.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case TODO_ACTIONS.DELETE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.slice(1),
      };
    case TODO_ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case TODO_ACTIONS.HIDE_COMPLETED:
      return {
        ...state,
        hideCompleted: !state.hideCompleted,
      };

    default:
      return state;
  }
};

export default todoReducers;
