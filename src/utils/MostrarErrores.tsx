export default function MostrarErrores(props: mostrarErroresProps){
    return(
        <>
           {props.errores? 
           <ul style={{color: 'red'}}>
             {props.errores.map((error,indice) => <li key={indice}>{error}</li> )}
           </ul>
            :null}
        </>
    )

}

interface mostrarErroresProps{
    errores?:string[];
}