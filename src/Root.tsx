import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { firebaseAuth } from './firebase';
import { useStore } from './stores';
import { Toaster } from 'react-hot-toast';

function Root() {
  const setUser = useStore((store) => store.setUser);
  React.useEffect(() => {
    const listen = onAuthStateChanged(firebaseAuth.auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => listen();
  }, [setUser]);
  return (
    <>
      <Outlet />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            color: 'hsl(var(--clr-neutral-200))',
            fontSize: 'var(--fs-base)',
            fontWeight: 'var(--fw-semibold)',
            backgroundColor: 'hsl(var(--clr-neutral-500))',
          },
        }}
      />
    </>
  );
}

export default Root;
