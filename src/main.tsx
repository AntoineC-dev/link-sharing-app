import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccount, Layout, Links, Login, Preview, Profile } from './pages';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'links', element: <Links /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/create-account', element: <CreateAccount /> },
  { path: '/preview', element: <Preview /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
