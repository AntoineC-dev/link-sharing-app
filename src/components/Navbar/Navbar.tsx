import styles from './Navbar.module.css';
import LogoSmall from '../../assets/logo-devlinks-small.svg?react';
import IconLinks from '../../assets/icon-links-header.svg?react';
import IconPreview from '../../assets/icon-preview-header.svg?react';
import IconProfile from '../../assets/icon-profile-details-header.svg?react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className={styles.container}>
      <LogoSmall className={styles.logo} />
      <nav className={styles.nav}>
        <NavLink to={'/app'} className={styles.navLink} aria-label="Links" end>
          <IconLinks />
          <span>Links</span>
        </NavLink>
        <NavLink to={'/app/profile'} className={styles.navLink} aria-label="Profile Details">
          <IconProfile />
          <span>Profile Details</span>
        </NavLink>
      </nav>
      <Link to={'/preview'} className={styles.link} aria-label="Preview">
        <IconPreview />
        <span>Preview</span>
      </Link>
    </header>
  );
}

export default Navbar;
