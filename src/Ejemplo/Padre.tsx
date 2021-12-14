import React,{useContext} from "react";
import ValorContext from "../ValorContext";
import Hijo from "./Hijo";


export default function Padre() {
    const valor =  useContext(ValorContext)
    return(
  
        <>
            <h3>Componente Padre, el valor del UseContext es: {valor} </h3>
            <Hijo/>
        </>
    )
}
