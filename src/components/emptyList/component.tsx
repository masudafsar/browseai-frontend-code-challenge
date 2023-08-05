import styles from './styles.module.scss';
import {Button} from "../button";
import {ArrowLeftIcon} from "../../icons";
import {useNavigate} from "react-router-dom";

export interface EmptyListPropsType {
}

export function EmptyList({}: EmptyListPropsType) {
  const navigate = useNavigate();

  return (
    <div className={styles.EmptyList_Root}>
      <p className={styles.EmptyList_HelpNote}>
        The search case list is empty.
      </p>
      <Button
        title="Upload New CSV"
        variant='outline'
        color="primary"
        size='lg'
        iconLeading={<ArrowLeftIcon/>}
        onClick={() => navigate('/')}
      />
    </div>
  );
}
