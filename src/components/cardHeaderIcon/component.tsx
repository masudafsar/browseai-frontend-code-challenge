import {ReactNode} from "react";
import styles from './styles.module.scss';

export interface CardHeaderIconPropsType {
  icon: ReactNode;
}

export function CardHeaderIcon({icon}: CardHeaderIconPropsType) {
  return (
    <div className={styles.CardHeaderIcon_Root}>
      {icon}
    </div>
  );
}
