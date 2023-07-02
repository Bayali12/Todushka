import { useEffect } from 'react';

import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { fetchTodos } from './services/todos.service';

import './App.css';
import { useDispatch } from 'react-redux';
import { RootState } from './ducks/types';
import { useSelector } from 'react-redux';
import { Notifications } from './components/Notifications';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    fetchTodos(dispatch);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <AddTodo />
        <TodoList todos={todos} />
        <Notifications />
      </div>
    </>
  );
}

export default App;
