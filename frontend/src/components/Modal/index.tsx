import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import styles from './styles.module.scss';

type ModalProps = {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ show, onClose, onConfirm, title, children }: ModalProps) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h4 className={styles.title}>{title}</h4>
          </div>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>
            <button onClick={onClose} className={classNames(styles.button, styles.close)}>
              Нет
            </button>
            <button onClick={onConfirm} className={classNames(styles.button, styles.confirm)}>
              Да
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')!,
  );
};

export default Modal;
