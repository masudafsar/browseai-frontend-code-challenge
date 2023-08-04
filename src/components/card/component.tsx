import {PropsWithChildren} from "react";
import classNames from "classnames";
import {CardHeader} from "../cardHeader";
import {CardBody} from "../cardBody";

import styles from './styles.module.scss'

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
