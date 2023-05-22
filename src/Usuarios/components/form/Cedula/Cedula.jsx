import { useState } from 'react';
import './styles.css'

export const Cedula = () => {

    const [tipo,setTipo] =useState('');

    const handleTipo = (e) =>{
        setTipo(e.target.value);
    }

    return(
        <>
            <div className="form">

            <label>Cédula / RIF *</label>

            <div className="cedula-form">

            <select className="cedula-select" onChange={handleTipo}>
                <option value="V">V</option>
                <option value="E">E</option>
                <option value="P">P</option>
                <option value="X">X</option>
                <option value="R">R</option>
            </select>

            <input className="cedula-input" type="form" />

            { tipo == 'R' &&   <input className="cedula-input" type="form" />   }

            </div>

            </div>
        </>
    )
}