import './styles.css'

export const AgregarAnexo = ({titulo}) =>{
    return(
        <>
          
            <label className=''>{titulo}</label>
            <button>{`Agregar ${titulo}`}</button>
           
        </>
    )
}