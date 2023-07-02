import styles from './styles.module.scss';

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        placeholder="Поиск..."
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
