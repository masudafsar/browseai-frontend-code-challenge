import {PropsWithChildren, ReactNode} from "react";
import styles from './styles.module.scss';
import {CardHeaderIcon} from "../cardHeaderIcon";
import {CardHeaderTitle} from "../cardHeaderTitle";

export interface CardHeaderPropsType {
  icon?: ReactNode;
  title?: string;
  supportingText?: string;
  actions?: ReactNode[];
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
