import { Navigate, Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { useStore } from '../../stores';
import { Navbar } from '../../components';

function App() {
  const user = useStore((store) => store.user);
  return user ? (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to={'/auth'} replace={true} />
  );
}

export default App;
