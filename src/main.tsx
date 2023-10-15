import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App, Auth, CreateAccount, Links, Login, Preview, Profile } from './pages';
import './index.css';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'app',
        element: <App />,
        children: [
          { index: true, element: <Links /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
      {
        path: 'auth',
        element: <Auth />,
        children: [
          { index: true, element: <Login /> },
          { path: 'create-account', element: <CreateAccount /> },
        ],
      },
      { path: 'preview', element: <Preview /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
