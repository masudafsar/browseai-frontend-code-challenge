import styles from './styles.module.scss';

export interface ButtonPropsType {
  title: string;
  onClick?: () => void;
}

export const Button = ({title, onClick}: ButtonPropsType) => {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
