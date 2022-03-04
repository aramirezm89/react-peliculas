import { ReactElement, useState } from "react";

export default function Autorizado(props:autorizadoProps){
    const [estaAutorizado, setEstaAutorizado] = useState(false);
    return(
        <>
            {estaAutorizado?props.autorizado:props.noAutorizado}
        </>
    )
}

interface autorizadoProps{
    autorizado: ReactElement;
    noAutorizado?: ReactElement;
    rol?: string;
}