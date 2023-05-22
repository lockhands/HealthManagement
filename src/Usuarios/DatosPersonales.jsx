import React from "react";
import './styles.css';
import { Button } from "./components/buttons/Button";

export const DatosPersonales = ({children}) => {
    return(
        <div className="form-1">

            <h1>Registrar</h1>
            
            <div className="form-3">

           
                {children}
            </div>

            <div className="form-4">
            <Button titulo="SIGUIENTE" />
            </div>
        </div>
    )
}