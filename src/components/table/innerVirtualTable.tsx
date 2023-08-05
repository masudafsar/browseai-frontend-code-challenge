import {forwardRef, HTMLProps, useContext} from "react";
import {TableContext} from "../../contexts";
import styles from "./styles.module.scss";

export const InnerVirtualTable = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function Inner(
    {
      children,
      ...props
    },
    ref
  ) {
    const {header, footer, top} = useContext(TableContext);

    return (
      <div ref={ref} {...props} data-testid='inner-virtual-table'>
        <table className={styles.Table_Table} style={{top}}>
          {header ? <thead className={styles.Table_TableHeader}>
          {header}
          </thead> : undefined}
          <tbody className={styles.Table_TableBody}>
          {children}
          </tbody>
          {footer ? <tfoot className={styles.Table_TableFooter}>
          {footer}
          </tfoot> : undefined}
        </table>
      </div>
    );
  }
);