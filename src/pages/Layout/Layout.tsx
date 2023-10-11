import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className={styles.container}>
      <h1>Link Sharing App</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
