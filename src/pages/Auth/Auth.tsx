import { Navigate, Outlet } from 'react-router-dom';
import styles from './Auth.module.css';
import Logo from '../../assets/logo-devlinks-large.svg?react';
import { useStore } from '../../stores';

function Auth() {
  const user = useStore((store) => store.user);
  return user ? (
    <Navigate to={'/app'} />
  ) : (
    <main className={styles.container}>
      <Logo className={styles.logo} />
      <Outlet />
    </main>
  );
}

export default Auth;
