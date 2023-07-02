import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Notification } from '../Notification';
import { RootState } from '../../ducks/types';
import actions from '../../ducks/actions';

import styles from './styles.module.scss';

export const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (notifications.length > 0) {
        dispatch(actions.removeNotification());
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [notifications]);

  return ReactDOM.createPortal(
    <div className={styles.notifications}>
      {notifications.map((notification, index) => (
        <Notification key={index} message={notification.message} kind={notification.kind} />
      ))}
    </div>,
    document.getElementById('root')!,
  );
};
