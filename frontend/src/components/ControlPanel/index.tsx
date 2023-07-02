import { useSelector } from 'react-redux';
import { Search } from '../Search';

import styles from './styles.module.scss';
import { RootState } from '../../ducks/types';
import { useDispatch } from 'react-redux';
import actions from '../../ducks/actions';
import { Checkbox } from '../Checkbox';

export const ControlPanel = () => {
  const dispatch = useDispatch();
  const { searchTerm, hideCompleted } = useSelector((state: RootState) => state);

  const onChangeSearchValue = (searchTerm: string) => {
    dispatch(actions.setSearchTerm(searchTerm));
  };

  const onChangeHideCompleted = () => {
    dispatch(actions.hideCompleted());
  };

  return (
    <div className={styles.container}>
      <Search value={searchTerm} onChange={onChangeSearchValue} />
      <Checkbox
        label="Скрыть выполненные"
        checked={hideCompleted}
        onChange={onChangeHideCompleted}
      />
    </div>
  );
};
