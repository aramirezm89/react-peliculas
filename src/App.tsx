import React, { useState } from "react";
import logo from "./logo.svg";
import MostrarTexto from "./Ejemplo/MostrarTexto";
import "./App.css";
import ProyectarContenido from "./Ejemplo/ProyectarContenido";
import EjemploReloj from "./Ejemplo/EjemploReloj";
import ProyectarContenido2 from "./Ejemplo/ProyectarContenido2";
import ContenidoDinamico from "./Ejemplo/ContenidoDinamico";
import FormularioTexto from "./Ejemplo/FormularioTexto";
import EjemploUseEffect from "./Ejemplo/EjemploUseEffect";

function App() {
  const [numero, setNumero] = useState(0);
  const [texto, setTexto] = useState("");
  const [numeros,setNumeros] = useState({
    num1:0,
    num2:0
  });
 
  const [checked, setChecked] = useState(true);
  const imagenUrl = "https://i.blogs.es/594843/chrome/1366_2000.jpg";

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  };

const suma = (numero1:number,numero2:number) => {
   let result: number = numero1 + numero2
   return result
}
  const cuadrado = <div style={{backgroundColor:'red',width:'50px',height:'50px',marginLeft:'1rem'}}></div>
  const calificaciones = [
    {nombre:'Antonio',calificacion:7},
    {nombre:'Claudia',calificacion:4},
    {nombre:'Angelo',calificacion:1},
  
  ]

  return (
    <>
      <h1>Soy APP.tsx</h1>

    <div>
      <input type="checkbox" 
       onChange={(e) => setChecked(e.currentTarget.checked)}
       checked={checked}
      />Mostrar componente useEffect
    </div>
    {checked ? <EjemploUseEffect/> : null}
   

     {calificaciones.map(val => <ContenidoDinamico key={val.nombre} {...val} />)}
      <ProyectarContenido 
       children={<p>Proyectando Contenido</p>}
      />
     
      
      <ProyectarContenido2 
      parteSuperior={<h4>este es un mensaje del componente padre</h4>}
      
      parteInferior = {cuadrado}
      />
      <button
        onClick={() => setNumero(numero + 1)}
        onMouseEnter={() => console.log("Entrando")}
      >
        click
      </button>
      <button onClick={() => setNumero(0)}>reset</button>
      <label id="contador">{numero.toString()}</label>
      <br></br>
      <FormularioTexto manejarKeyUp={(e : string) => manejarKeyUp(e)} />
    
      <MostrarTexto texto={texto} />
      <br />
      <img
        style={{
          borderStyle: "dotted",
          borderRadius: "10px",
          borderColor: "rgb(236, 63, 26)",
          width: "25%",
          marginLeft: "16px",
        }}
        src={imagenUrl}
        alt="imagen google"
      ></img>

      <input type="text" name="num1" onChange={(e)  => {
        setNumeros(({...numeros,num1:parseInt(e.target.value)}))
        
        }}/>

<input type="text" name="num2" onChange={(e)  => {
      setNumeros(({...numeros,num2:parseInt(e.target.value)}))
        
        }}/>

        {<div>{numeros.num1 && numeros.num2? suma(numeros.num1,numeros.num2): "resultado"}</div>}
    </>
  );
}


export default App;
