import styles from './LinksPlaceholder.module.css';
import IllustrationEmpty from '../../assets/illustration-empty.svg?react';

function LinksPlaceholder() {
  return (
    <div className={styles.container}>
      <IllustrationEmpty className={styles.illustration} />
      <h2 className={styles.title}>Let’s get you started</h2>
      <p className={styles.text}>
        Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
        We’re here to help you share your profiles with everyone!
      </p>
    </div>
  );
}

export default LinksPlaceholder;
