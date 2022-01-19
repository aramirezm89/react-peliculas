import { ReactElement } from "react";
import Loading from "./Loading";

export default function ListadoGenerico(props:ListadoGenericoProps){
    const {listado,children,cargandoUI,listadoVacioUI} = props;

    if(!listado){
        if(cargandoUI){
            return cargandoUI
        }else{
            return <Loading/>
        }
    }else if(listado.length ===0){
        if(listadoVacioUI){
            return listadoVacioUI
        }else{
            return <h3>No hay contenido que mostrar.</h3>
        }
    }else{
        return children
    }
}

interface ListadoGenericoProps{
    listado:any;
    children:ReactElement;
    cargandoUI?:ReactElement 
    listadoVacioUI?: ReactElement
}