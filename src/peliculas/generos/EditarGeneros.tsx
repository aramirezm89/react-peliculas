import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FormularioGeneros from "./FomularioGeneros";
import { BasePath } from "../../utils/BasePathApi";
import axios, { AxiosResponse } from "axios";
import { generoModel, generoModelConId} from "./GeneroModel";
export default function EditarGeneros(){
    
    const {id} =  useParams();
    const [generoBD,setGeneroBD] = useState<string>("")
  console.log(id);

  useEffect(() => {
    const URL = `${BasePath}/generos/${id}`;
     axios.get(URL).then((response : AxiosResponse<generoModelConId>) =>{
      setGeneroBD(response.data.nombre);
      console.log(response.data.nombre);
    } ).catch(error =>{
      console.log(error);
    })
  },[])
    
    return(
        <div>
            <h3>Editar Generos</h3>
        <FormularioGeneros 
           model={{nombre:generoBD}}
           onSubmit={async(values,actions) => {
            await new Promise(result =>setTimeout(result,2000))
            console.log(values)
            actions.resetForm();
          }}
        
        />
      </div>
    )
}