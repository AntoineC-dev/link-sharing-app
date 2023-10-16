import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useStore } from '../../stores';
import LogoSmall from '../../assets/logo-devlinks-small.svg?react';
import LogoLarge from '../../assets/logo-devlinks-large.svg?react';
import IconLinks from '../../assets/icon-links-header.svg?react';
import IconPreview from '../../assets/icon-preview-header.svg?react';
import IconProfile from '../../assets/icon-profile-details-header.svg?react';
import IconLogout from '../../assets/icon-signout.svg?react';

function Navbar() {
  const logout = useStore((store) => store.logout);
  return (
    <header className={styles.container}>
      <LogoSmall className={styles.logo} data-screen="small" />
      <LogoLarge className={styles.logo} data-screen="large" />
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
      <div className={styles.actions}>
        <Link to={'/preview'} className={styles.link} aria-label="Preview">
          <IconPreview />
          <span>Preview</span>
        </Link>
        <button onClick={logout} className={styles.logout} aria-label="Logout">
          <IconLogout />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
