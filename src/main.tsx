import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth, CreateAccount, Layout, Links, Login, Preview, Profile } from './pages';
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'app',
        element: <Layout />,
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
