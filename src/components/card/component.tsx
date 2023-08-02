import {PropsWithChildren} from "react";
import {CardHeader} from "../cardHeader";
import styles from './styles.module.scss'

export interface CardPropsType {
}

export function Card({children}: PropsWithChildren<CardPropsType>) {
  return (
    <div className={styles.Card_Root}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
