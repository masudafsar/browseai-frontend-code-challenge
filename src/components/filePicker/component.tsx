import {forwardRef, InputHTMLAttributes} from "react";
import {UploadCloudIcon} from "../../icons";
import styles from './styles.module.scss';
import * as classNames from "classnames";

export interface FilePickerPropsType extends InputHTMLAttributes<HTMLInputElement> {
}

export const FilePicker = forwardRef<HTMLInputElement, FilePickerPropsType>((props, ref) => (
  <div className={classNames(styles.FilePicker_Root, props.disabled && styles.FilePicker_Disabled)}>
    <label className={styles.FilePicker_Picker}>

      <div className={styles.FilePicker_UploadIcon}>
        <UploadCloudIcon/>
      </div>

      <p className={styles.FilePicker_HelpNote}>
        <span>Click to upload</span>
        {' '}
        or drag and drop
      </p>

      <input
        {...props}
        ref={ref}
        type="file"
        className="hidden"
      />
    </label>
  </div>
));
