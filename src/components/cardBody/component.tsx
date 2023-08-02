import {PropsWithChildren} from "react";
import styles from './styles.module.scss';

export interface CardBodyPropsType {
}

export function CardBody({children}: PropsWithChildren<CardBodyPropsType>) {
  return (
    <div className={styles.CardBody_Root}>
      {children}
    </div>
  )
}
