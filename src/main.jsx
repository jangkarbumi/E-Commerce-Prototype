import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { ProductProvider } from './context/ProdContext.jsx';

import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },

  {
    path: '*',
    Component: NotFoundPage
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
);