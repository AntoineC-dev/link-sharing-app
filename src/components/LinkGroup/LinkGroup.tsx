import { TLink } from '../../types';
import styles from './LinkGroup.module.css';
import IconDragAndDrop from '../../assets/icon-drag-and-drop.svg?react';
import { useLinkStore } from '../../stores';

interface LinkGroupProps extends TLink {
  index: number;
}

function LinkGroup({ index, site, uid, url }: LinkGroupProps) {
  const deleteLink = useLinkStore((store) => store.deleteLink);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <IconDragAndDrop />
        <span>{`Link #${index + 1}`}</span>
        <button onClick={() => deleteLink(uid)}>Remove</button>
      </div>
      <p>{site}</p>
      <p>{url}</p>
    </div>
  );
}

export default LinkGroup;
