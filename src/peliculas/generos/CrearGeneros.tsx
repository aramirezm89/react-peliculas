import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BasePath } from "../../utils/BasePathApi";
import FormularioGeneros from "./FomularioGeneros";
import { generoModel } from "./GeneroModel";
import crearEntidad from "../../api/CrearEntidad";
toast.configure();
export default function CrearGeneros() {
  
  const navigate = useNavigate();

  

/**
 * function crear(genero: generoModel){
  const URL = `${BasePath}/generos`;
  
     axios.post(URL,genero).then(response =>{
        if(response.data.code === 200){
       toast.success((response.data.message).toString(),{
        position: toast.POSITION.TOP_RIGHT,
        theme:"colored",
        autoClose:1000
        
        }) 
          navigate("/generos");
        }else{
          toast.error((response.data.message).toString(),{position:toast.POSITION.TOP_RIGHT,theme:'colored', autoClose:2000})
        } 
    }).catch(err =>{
     
     console.log(err)
    })
 
 
}
 * 
 */
 


  return (
    <div>
      <div>
        <h3>Crear generos</h3>
      </div>

      <div>
        <FormularioGeneros 
           model={{nombre:''}}
           onSubmit={async(values,actions) => {
            crearEntidad(values,"genero").then(result =>{
              if(result.code === 200){
                navigate("/generos")
              }
            })
          }}
        
        />
      </div>
    </div>
  );
}
