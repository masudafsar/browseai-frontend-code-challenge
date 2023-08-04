import {PropsWithChildren} from "react";
import {CardHeader} from "../cardHeader";
import styles from './styles.module.scss'
import {CardBody} from "../cardBody";
import * as classNames from "classnames";

export interface CardPropsType {
  fillHeight?: boolean;
}

export function Card({children, fillHeight}: PropsWithChildren<CardPropsType>) {
  return (
    <div className={classNames(styles.Card_Root, fillHeight && styles.Card_FillHeight)}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
