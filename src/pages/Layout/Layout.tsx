import { firebaseAuth } from '../../firebase';
import { useStore } from '../../stores';
import styles from './Layout.module.css';
import { Navigate, Outlet } from 'react-router-dom';

function Layout() {
  const user = useStore((store) => store.user);
  return user ? (
    <div className={styles.container}>
      <h1>Link Sharing App</h1>
      <button onClick={firebaseAuth.logout}>LOGOUT</button>
      <Outlet />
    </div>
  ) : (
    <Navigate to={'/auth'} replace={true} />
  );
}

export default Layout;
