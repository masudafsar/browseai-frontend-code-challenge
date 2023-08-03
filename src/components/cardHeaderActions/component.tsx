import styles from './styles.module.scss';
import {PropsWithChildren} from "react";

export interface CardHeaderActionsPropsType {
}

export function CardHeaderActions({children}: PropsWithChildren<CardHeaderActionsPropsType>) {
  return (
    <div className={styles.CardHeaderActions_Root}>
      {children}
    </div>
  );
}
