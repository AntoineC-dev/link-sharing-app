import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { firebaseAuth } from './firebase';
import { useStore } from './stores';

function Root() {
  const setUser = useStore((store) => store.setUser);
  React.useEffect(() => {
    const listen = onAuthStateChanged(firebaseAuth.auth, (user) => {
      if (user) {
        console.log('AuthState: user');
        setUser(user);
      } else {
        console.log('AuthState: null');
        setUser(null);
      }
    });
    return () => listen();
  }, [setUser]);
  return <Outlet />;
}

export default Root;
