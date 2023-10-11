import { Outlet } from 'react-router-dom';
import styles from './Auth.module.css';

function Auth() {
  return (
    <div className={styles.container}>
      <h1>Auth</h1>
      <Outlet />
    </div>
  );
}

export default Auth;
