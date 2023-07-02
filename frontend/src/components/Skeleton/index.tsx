import styles from './styles.module.scss';

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.strip}></div>
    </div>
  );
};
