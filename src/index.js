import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import Layout from './Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
