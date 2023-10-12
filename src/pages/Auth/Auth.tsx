import { Outlet } from 'react-router-dom';
import styles from './Auth.module.css';
import Logo from '../../assets/logo-devlinks-large.svg?react';

function Auth() {
  return (
    <main className={styles.container}>
      <Logo className={styles.logo} />
      <Outlet />
    </main>
  );
}

export default Auth;
