import { Navigate, Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { useStore } from '../../stores';

function App() {
  const user = useStore((store) => store.user);
  const logout = useStore((store) => store.logout);
  return user ? (
    <div className={styles.container}>
      <h1>Link Sharing App</h1>
      <button onClick={logout}>LOGOUT</button>
      <Outlet />
    </div>
  ) : (
    <Navigate to={'/auth'} replace={true} />
  );
}

export default App;
