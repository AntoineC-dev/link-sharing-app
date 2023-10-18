import { LinkGroup, LinksPlaceholder, Title } from '../../components';
import { useLinkStore } from '../../stores';
import styles from './Links.module.css';

function Links() {
  const links = useLinkStore((store) => store.links);
  const createLink = useLinkStore((store) => store.createLink);
  const handleNewLink = () => createLink();
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
        {links.length === 0 ? (
          <LinksPlaceholder />
        ) : (
          links.map((props, index) => <LinkGroup key={props.uid} index={index} {...props} />)
        )}
      </div>
      <button onClick={handleSave} className={styles.saveBtn} aria-disabled={links.length === 0}>
        Save
      </button>
    </>
  );
}

export default Links;
