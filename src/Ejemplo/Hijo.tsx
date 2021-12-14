import React,{useContext} from "react";
import ValorContext from "../ValorContext";


export default function Hijo() {
    const valor =  useContext(ValorContext)
    return(
  
        <>
            <h3>Componente Hijo, el valor del UseContext es: {valor} </h3>

        </>
    )
}
