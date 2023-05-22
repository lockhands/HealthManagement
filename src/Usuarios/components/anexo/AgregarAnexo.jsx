

export const AgregarAnexo = ({titulo}) =>{
    return(
        <>
            <label>{titulo}</label>
            <button>{`Agregar ${titulo}`}</button>
        </>
    )
}