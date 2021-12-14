
import  React, {useState} from 'react';
import AppCss  from '../App.module.css';
import "../App.css";

function EjemploCSS(){
const subtitulo = "Este es un subtitulo";
const duplicar = (numero : number) => numero *2;
const [checkeo,setCheckeo] = useState(false);
const cuadradoAzul = {
    backgroundColor: 'green',
    width: '50px',
    height:'50px',
    marginLeft : '1rem'
  }


    return(
    <>
    <h1>Soy Ejemplo Css</h1>
    <h2 className={AppCss.rojo}>{subtitulo.toUpperCase()}</h2>
    <h3 className="rojo">El doble de 3 es: {duplicar(3)}</h3>
    <div className="cuadradoRojo"></div>
    <div style={cuadradoAzul}></div>
    <input id="checkbox" type="checkbox" checked={checkeo} onChange={(e) => setCheckeo(!checkeo)}  /> CheckBox   
    </>


    )
}

export default EjemploCSS;