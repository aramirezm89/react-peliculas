import { ReactElement } from "react";

export default function ProyectarContenido(props:ProyectarContenido2Props){
    const{parteInferior,parteMedia,parteSuperior} = props;
    return(
        <>
         <hr />
           {parteSuperior? parteSuperior : <h3>Contenido por defecto  </h3>}
           <hr />
           {parteMedia}
           <hr/>
           {parteInferior}
        </>
    )
}

interface ProyectarContenido2Props{
    parteSuperior? : ReactElement;
    parteMedia : ReactElement;
    parteInferior : ReactElement;
}

ProyectarContenido.defaultProps = {
 parteMedia:"Valor por defecto parte media usando defaultProps."
}
