import React from 'react'
import ReactDOM from 'react-dom/client'
import { RegistroUsuarios } from './Usuarios/RegistroUsuarios'
import './styles.css';
import { DatosBancarios } from './Usuarios/DatosBancarios';
import { DatosEconomicos } from './Usuarios/DatosEconomicos';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { DatosPersonales } from './Usuarios/DatosPersonales';

const router = createBrowserRouter([
  {
    path:"/",
    children:[
      {
        path:"",
        element: <RegistroUsuarios />
      },
      {
        path:"2",
        element: <DatosEconomicos />,
      },
      {
        path:"3",
        element: <DatosBancarios />,
      },
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
