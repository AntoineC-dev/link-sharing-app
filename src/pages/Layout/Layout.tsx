import { firebaseAuth } from '../../firebase';
import styles from './Layout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await firebaseAuth.logout();
    navigate('/auth/login', { replace: true });
  };
  return (
    <div className={styles.container}>
      <h1>Link Sharing App</h1>
      <button onClick={handleLogout}>LOGOUT</button>
      <Outlet />
    </div>
  );
}

export default Layout;
