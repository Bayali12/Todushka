import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modal';
import DateComponent from '../DateComponent';
import { Checkbox } from '../Checkbox';
import { Todo } from '../../ducks/types';
import { deleteTodo, toggleTodo } from '../../services/todos.service';
import deleteBtn from '../../assets/delete.svg';

import styles from './styles.module.scss';

type TodoItmeProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItmeProps) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const onConfirm = (id: number) => {
    deleteTodo(id, dispatch);
    setShow(false);
  };

  const onToggle = () => {
    toggleTodo(todo.id, dispatch);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoWrapper}>
        <Checkbox label={todo.text} checked={todo.completed} onChange={onToggle} />
        <button className={styles.deleteButton} onClick={() => setShow(true)}>
          <img src={deleteBtn} alt="delete" />
        </button>
        <br />
        <Modal
          title="Удаление задачи"
          onClose={() => setShow(false)}
          onConfirm={() => onConfirm(todo.id)}
          show={show}>
          <p>Вы уверены что хотите удалить задачу?</p>
        </Modal>
      </div>
      <div className={styles.createdDate}>
        Создано: <DateComponent date={todo.createdAt} />
      </div>
    </div>
  );
};
