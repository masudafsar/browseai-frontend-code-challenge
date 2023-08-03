import {PropsWithChildren} from "react";
import styles from './styles.module.scss';
import {CardHeaderIcon} from "../cardHeaderIcon";
import {CardHeaderTitle} from "../cardHeaderTitle";
import {CardHeaderActions} from "../cardHeaderActions";

export interface CardHeaderPropsType {
}

export function CardHeader({children}: PropsWithChildren<CardHeaderPropsType>) {
  return (
    <div className={styles.CardHeader_Root}>
      {children}
    </div>
  )
}

CardHeader.Icon = CardHeaderIcon;
CardHeader.Title = CardHeaderTitle;
CardHeader.Actions = CardHeaderActions;
