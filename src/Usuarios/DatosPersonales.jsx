import React from "react";
import './styles.css';
import { Button } from "./components/buttons/Button";
import { useNavigate } from "react-router-dom";

export const DatosPersonales = ({children,to}) => {

    const navigate = useNavigate();
    return(
        <div className="form-1">

            <h1>Registrar</h1>
            
            <div className="form-5">
                <Button titulo="Volver" route={() => navigate(-1)} />
            </div>

            <div className="form-3">

           
                {children}
            </div>

            <div className="form-4">

            <Button titulo="SIGUIENTE" route={() => navigate(`${to}`)}/>
            </div>
        </div>
    )
}