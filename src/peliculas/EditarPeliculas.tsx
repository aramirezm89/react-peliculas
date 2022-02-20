import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { convertirPeliculaFormData } from "../api/ConvertirEntidadFormData";
import { BasePath } from "../utils/BasePathApi";
import Loading from "../utils/Loading";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculasCreacion, peliculasPutGetDTO } from "./PeliculasModelD";

export default function EditarPeliculas(){

  const [pelicula, setPelicula] = useState<peliculasCreacion>();
  const [peliculaPutGet,setPeliculaPutGet] = useState<peliculasPutGetDTO>();
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const URL = `${BasePath}/peliculas/PutGet/${id}`
    axios.get(URL).then(response =>{
      const modelo: peliculasCreacion = {
        titulo:response.data.pelicula.titulo,
        enCines : response.data.pelicula.enCines,
        trailer : response.data.pelicula.trailer,
        posterURL : response.data.pelicula.poster,
        resumen : response.data.pelicula.resumen,
        fechaLanzamiento : new Date(response.data.pelicula.fechaLanzamiento),

      }
      setPelicula(modelo);
      setPeliculaPutGet(response.data)
    })
  },[id])

  async function editar(peliculaEditar : peliculasCreacion){
  
      const formData = convertirPeliculaFormData(peliculaEditar);
       return await axios({
        method : 'PUT',
        url:`${BasePath}/peliculas/${id}`,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
        
      }).then((response) => {
        if (response.data.code === 200) {
          toast.success(response.data.message.toString(), {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
            autoClose: 1500,
          });
          navigate( `/peliculas/detalle/${id}}`)
        } else {
           return toast.error(response.data.message.toString(), {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored",
            autoClose: 1500,
          });
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  }


    return(
        <div>
            <h3>Editar Peliculas</h3>
            {pelicula && peliculaPutGet ? 
               <FormularioPeliculas
               actoresSeleccionados={peliculaPutGet.actores}
                cinesSeleccionados={peliculaPutGet.cinesSeleccionados}
                cinesNoSeleccionados={peliculaPutGet.cinesNoSeleccionados}
               generosSeleccionados={peliculaPutGet.generosSeleccionados}
               generosNoSeleccionados={peliculaPutGet.generosNoSeleccionados}
                model={pelicula}
               onSubmit={async (values,actions) => {
                   await editar(values)
               }}
               />
               : <Loading/>
          }
        </div>
    )
}