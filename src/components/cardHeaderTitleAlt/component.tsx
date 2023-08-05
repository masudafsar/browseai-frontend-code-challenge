import styles from './styles.module.scss';

export interface CardHeaderTitleAltPropsType {
  title: string;
}

export function CardHeaderTitleAlt({title}: CardHeaderTitleAltPropsType) {
  return (
    <div className={styles.CardHeaderTitleAlt_Root}>
      <p className={styles.CardHeaderTitleAlt_Title}>
        {title}
      </p>
    </div>
  );
}
