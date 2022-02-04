import { useNavigate, useParams } from "react-router-dom";
import FormularioCines from "./FormulariosCines";
import {cineModelConId}  from "./CinesModelo"
import { useEffect, useState } from "react";
import { BasePath } from "../../utils/BasePathApi";
import axios, { AxiosResponse } from "axios";
import Loading from "../../utils/Loading";
import EditarEntidad from "../../api/EditarEntidad";


export default function EditarCines() {

  const {id} = useParams();
  const [cine, setCine] = useState<cineModelConId>();
  const navigate = useNavigate();
  
  useEffect(() => {
    getCine();
  })


  function getCine(){
    const URL = `${BasePath}/cines/${id}`

    axios.get(URL).then((response : AxiosResponse<cineModelConId>) => {
      setCine(response.data);
    })
 }
    return (
      <div>
        <h3>Editar Cines</h3>
       {cine? <FormularioCines 
       model={{nombre:cine.nombre,latitud:cine.latitud,longitud: cine.longitud }} 
       onSubmit={async (values,actions)=>{
        EditarEntidad(values,id,"cines").then(result =>{
          if(result.code === 200){
            navigate("/cines")
          }
        })
        }} />:<Loading/>}
      </div>
    );
  }
  
