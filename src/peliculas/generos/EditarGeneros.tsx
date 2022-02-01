import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import FormularioGeneros from "./FomularioGeneros";
import { BasePath } from "../../utils/BasePathApi";
import axios, { AxiosResponse } from "axios";
import { generoModel, generoModelConId} from "./GeneroModel";
import { toast } from "react-toastify";
import editarEntidad from "../../api/EditarEntidad";
export default function EditarGeneros(){
    
    const {id} =  useParams();
    const {nombre} = useParams();

    const navigate = useNavigate();

  function editarGenero(genero : generoModel){
    
    const URL = `${BasePath}/generos/${id}`;
     axios.put(URL,genero).then((response ) =>{
      if(response.data.code === 200){
        toast.success((response.data.message).toString(),{
         position: toast.POSITION.TOP_RIGHT,
         theme:"colored",
         autoClose:1000
         
         }) 
           navigate("/generos");
         }  
     }).catch(err =>{
       toast.error((err.response.data).toString(),{position:toast.POSITION.TOP_RIGHT,theme:'colored', autoClose:1000})
     })

    } 
    return(
        <div>
            <h3>Editar Generos</h3>
        <FormularioGeneros 
           model={{nombre:nombre}}
           onSubmit={(values,actions) => {
         
           editarEntidad(values,id,"generos").then(result =>{
             if(result.code===200){
               navigate("/generos")
             }
           })
            
          }}
        
        />
      </div>
    )
}