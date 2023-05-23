import React, { useState } from "react";
import { InfoUsuario } from "./components/form/General/InfoUsuario";
import { Cedula } from "./components/form/Cedula/Cedula";
import "./styles.css"
import { DatosPersonales } from "./DatosPersonales";
import { Outlet } from "react-router-dom";

export const RegistroUsuarios = () =>{
    
   
    return(
        <>  
           
            <DatosPersonales to="/2">

       
           <div className="form-2">
           <InfoUsuario titulo="Nombres *" />     
           <InfoUsuario titulo="Apellidos: *" /> 
           </div>

           

           <InfoUsuario titulo="Sexo *" /> 

           <Cedula />

           <InfoUsuario titulo="Fecha de nacimiento" />

           <div className="form-2">
           <InfoUsuario titulo="Estado de nacimiento *" />
           <InfoUsuario titulo="Ciudad de nacimiento *" />
           </div>
           
           <div className="form-2">         
            <InfoUsuario titulo="Email *" />
           <InfoUsuario titulo="Web" />
           </div>  

           
           
            </DatosPersonales>
          
        </>
    )
}