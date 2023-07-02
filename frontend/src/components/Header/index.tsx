import logo from '../../assets/Logo.svg';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <h1 className={styles.title}>Todushka</h1>
    </div>
  );
};
