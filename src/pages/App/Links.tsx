import { Button, LinkForm, LinksPlaceholder, Title } from '../../components';
import { useLinkStore } from '../../stores';
import styles from './Links.module.css';

function Links() {
  const links = useLinkStore((store) => store.links);
  const createLink = useLinkStore((store) => store.createLink);
  const saveLinks = useLinkStore((store) => store.saveLinks);
  const shouldSave = useLinkStore((store) => store.shouldSave);
  const handleNewLink = () => createLink();

  return (
    <div aria-labelledby="customize-your-links" className={styles.container}>
      <Title
        title="Customize your links"
        text="Add/edit/remove links below and then share all your profiles with the world!"
        titleProps={{ id: 'customize-your-links' }}
      />
      <Button variant="outlined" onClick={handleNewLink} className={styles.newLinkBtn}>
        + Add new link
      </Button>
      <div className={styles.inner}>
        {links.length === 0 ? (
          <LinksPlaceholder />
        ) : (
          links.map((props, index) => <LinkForm key={props.uid} index={index} {...props} />)
        )}
      </div>
      <Button className={styles.saveBtn} aria-disabled={!shouldSave} onClick={saveLinks}>
        Save
      </Button>
    </div>
  );
}

export default Links;
