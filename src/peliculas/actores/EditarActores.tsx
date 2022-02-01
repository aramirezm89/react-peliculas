import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editarActorFormData } from "../../api/EditarActorFormData";
import editarEntidad from "../../api/EditarEntidad";
import { BasePath } from "../../utils/BasePathApi";
import Loading from "../../utils/Loading";
import { actorDTO } from "./ActoresModel";
import FormularioActores from "./FormularioActores";



export default function EditarActores() {

  const {id} =  useParams();
  const navigate = useNavigate();
  const [actor,setActor] = useState<actorDTO>()

  
  useEffect(() => {
    getActores();
  })


  function getActores() {
    const URL = `${BasePath}/actores/${id}`;
    axios.get(URL).then((response  : AxiosResponse<actorDTO>) =>{
      setActor(response.data)
    })
    
  }

  return (
    <div>
      <h3>Editar Actores</h3>
     {actor ?  <FormularioActores
        model={{
          nombre:actor.nombre,
          fechaNacimiento: new Date( actor.fechaNacimiento? actor.fechaNacimiento.toString():''),
          foto:
           actor.foto,
           imagenURL:actor.foto?.toString(),
          biografia:actor.biografia,
        }}
        onSubmit={ (values, actions) => {
         editarActorFormData(values,id ? id :'').then(result =>{
          if(result.code ===200){
            navigate("/actores")
          }
         })

          console.log(values);
        }}
      />:<Loading />}
    </div>
  );
}
