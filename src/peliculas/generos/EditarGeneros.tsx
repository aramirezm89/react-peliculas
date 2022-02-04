import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import FormularioGeneros from "./FomularioGeneros";
import { BasePath } from "../../utils/BasePathApi";
import axios, { AxiosResponse } from "axios";
import { generoModel, generoModelConId} from "./GeneroModel";
import { toast } from "react-toastify";
import editarEntidad from "../../api/EditarEntidad";
import Loading from "../../utils/Loading";
export default function EditarGeneros(){
    
    const {id} =  useParams();
    const [genero, setGenero] = useState<generoModelConId>()
    const navigate = useNavigate();
    
  
    useEffect(() => {
      getGenero();
    })
    function getGenero(){
    const URL = `${BasePath}/generos/${id}`
    axios.get(URL).then(reponse =>{
      setGenero(reponse.data);
    })
    }
    return(
        <div>
          {genero?
          <>
                  <h3>Editar Generos</h3>
        <FormularioGeneros 
           model={{nombre:genero.nombre}}
           onSubmit={(values,actions) => {
         
           editarEntidad(values,id,"generos").then(result =>{
             if(result.code===200){
               navigate("/generos")
             }
           })
            
          }}
        
        />
        </>:<Loading />}
      </div>
    )
}