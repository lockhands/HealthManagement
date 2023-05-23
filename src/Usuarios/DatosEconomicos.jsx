import { DatosPersonales } from "./DatosPersonales"
import { InfoUsuario } from "./components/form/General/InfoUsuario"

export const DatosEconomicos = () => {
    return(
    <>
        <DatosPersonales to="/3">
            <InfoUsuario titulo="Último balance" />

            <div className="form-2">
            <InfoUsuario titulo="Capacidad Económica" />
            <InfoUsuario titulo="Actividad económica" />
            </div>

            <div className="form-2">
            <InfoUsuario titulo="Profesión" />
            <InfoUsuario titulo="Ocupación" />
            </div>

            <div className="form-2">
            <InfoUsuario titulo="Clasificación" />
            <InfoUsuario titulo="Tipo de contribuyente" />
            </div>
            
        </DatosPersonales>
    </>
    )
}