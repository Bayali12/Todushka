import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddTodo as AddTodoService } from '../../services/todos.service';
import plus from '../../assets/plus.svg';

import styles from './styles.module.scss';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    AddTodoService(todo, dispatch);
    setTodo('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добавить задачу</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="button" className={styles.addButton} onClick={handleSubmit}>
          <img src={plus} alt="plus" />
        </button>
      </form>
    </div>
  );
};
