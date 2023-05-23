import { DatosPersonales } from "./DatosPersonales"
import { AgregarAnexo } from "./components/anexo/AgregarAnexo"
import { Button } from "./components/buttons/Button"

export const DatosBancarios = () => {
    return(
        <>
        <DatosPersonales to="3">

            <h1>Datos Generales</h1>

            <AgregarAnexo titulo="Cuentas bancarias"/>
            <AgregarAnexo titulo="Documentos anexos" />
            <AgregarAnexo titulo="Observaciones" />

          
        </DatosPersonales>
        </>
    )
}