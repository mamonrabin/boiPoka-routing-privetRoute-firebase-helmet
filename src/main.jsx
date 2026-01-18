import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './Components/Routers/Routers.jsx';
import App from './App.jsx'
import AuthProvider from './Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
