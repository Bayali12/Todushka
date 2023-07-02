import styles from './styles.module.scss';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: () => void;
};

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={styles.checkmark}></div>
      <div className={styles.body}>{label}</div>
    </label>
  );
};
