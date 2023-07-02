import { useSelector } from 'react-redux';

import { RootState, Todo } from '../../ducks/types';
import { Skeleton } from '../Skeleton';
import { TodoItem } from '../TodoItem';
import { ControlPanel } from '../ControlPanel';

import styles from './styles.module.scss';

type TodoList = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoList) => {
  const { isLoading, searchTerm, hideCompleted } = useSelector((state: RootState) => state);

  const filtredTodos = todos.filter(
    (todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLocaleLowerCase()) &&
      (!todo.completed || !hideCompleted),
  );
  const skeletons = [...new Array(10)].map((_, index) => (
    <div key={index} className={styles.skeletonWrapper}>
      <Skeleton />
    </div>
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список задач</h1>
      {!isLoading ? (
        !todos.length ? (
          <p className={styles.emptyList}>
            <span className={styles.smile}>🙂</span>
            УПС... Похоже у вас нет дел. Не пора ли чем-то заняться.
          </p>
        ) : (
          <div className={styles.taskList}>
            <ControlPanel />
            {filtredTodos.length ? (
              filtredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <p className={styles.emptyList}>
                <span className={styles.smile}>🙂</span>
                По вашему запросу ничего не найдено.
              </p>
            )}
          </div>
        )
      ) : (
        <div className={styles.taskList}>{skeletons}</div>
      )}
    </div>
  );
};
