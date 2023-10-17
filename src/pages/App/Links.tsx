import { LinksPlaceholder, Title } from '../../components';
import styles from './Links.module.css';

function Links() {
  const handleNewLink = () => alert('Add new link');
  const handleSave = () => alert('Save');
  return (
    <>
      <div className={styles.container}>
        <Title
          title="Customize your links"
          text="Add/edit/remove links below and then share all your profiles with the world!"
        />
        <button onClick={handleNewLink} className={styles.newLinkBtn}>
          + Add new link
        </button>
        <LinksPlaceholder />
      </div>
      <button onClick={handleSave} className={styles.saveBtn} aria-disabled="true">
        Save
      </button>
    </>
  );
}

export default Links;
