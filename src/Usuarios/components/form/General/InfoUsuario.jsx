import './styles.css'

export const InfoUsuario = ({titulo}) =>{
    return(
        <>
            <div className='form'>
             
            <label>{titulo}</label>
            <input type="form" required/>

               
            </div>
        </>
    )
}