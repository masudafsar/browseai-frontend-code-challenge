import styles from './styles.module.scss';

export interface CardHeaderTitlePropsType {
  title: string;
  supportingText?: string;
}

export function CardHeaderTitle({title, supportingText}: CardHeaderTitlePropsType) {
  return (
    <div className={styles.CardHeaderTitle_Root}>
      <h1 className={styles.CardHeaderTitle_Title}>
        {title}
      </h1>
      {supportingText ?
        <p className={styles.CardHeaderTitle_SupportingText}>
          {supportingText}
        </p> : undefined}
    </div>
  );
}
