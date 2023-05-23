import './styles.css'

export const Button = ({titulo,route}) =>{
    return(
        <>
        <button className="button" onClick={route}>
            {titulo}
        </button>
        </>
    )
}