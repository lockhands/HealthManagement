import React from 'react'
import ReactDOM from 'react-dom/client'
import { RegistroUsuarios } from './Usuarios/RegistroUsuarios'
import './styles.css';
import { DatosBancarios } from './Usuarios/DatosBancarios';
import { DatosEconomicos } from './Usuarios/DatosEconomicos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DatosEconomicos />
  </React.StrictMode>,
)
