import { createRoot } from 'react-dom/client'
import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from 'react-router-dom';
import router from './Routes'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
