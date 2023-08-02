import {ChangeEventHandler} from "react";
import {UploadCloudIcon} from "../../icons/uploadCloudIcon";
import styles from './styles.module.scss';

export interface FilePickerPropsType {
  onPickFile: ChangeEventHandler<HTMLInputElement>;
}

export function FilePicker({onPickFile}: FilePickerPropsType) {
  return (
    <div className={styles.FilePicker_Root}>
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
          type="file"
          onChange={onPickFile}
          className="hidden"
          accept=".csv"
        />
      </label>
    </div>
  )
}
