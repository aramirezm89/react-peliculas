import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearPeliculaFormData } from "../api/CrearPeliculaFormData";
import { BasePath } from "../utils/BasePathApi";
import Loading from "../utils/Loading";
import { cineModelConId } from "./Cines/CinesModelo";
import FormularioPeliculas from "./FormularioPeliculas";
import { generoModelConId } from "./generos/GeneroModel";

export default function CrearPeliculas() {

  const [generosNoSeleccionados,setGenerosNoSeleccionados] = useState<generoModelConId[]>([]);
  const [cinesNoSeleccionados,setCinesNoSeleccionados] = useState<cineModelConId[]>([]);
  const [cargado, setCargado] = useState(false);
  
  const navigate = useNavigate()
 
  useEffect(() => {
    const URL = `${BasePath}/peliculas/postget`
    axios.get(URL).then(response =>{
      setGenerosNoSeleccionados(response.data.generos)
      setCinesNoSeleccionados(response.data.cines)
      setCargado(true)  
    })
  },[])



  return (
    <div>
      <h3>Crear Peliculas</h3>
      {cargado ?
      <FormularioPeliculas
      actoresSeleccionados={[]}
      generosSeleccionados={[]}
      generosNoSeleccionados={generosNoSeleccionados}
      cinesSeleccionados={[]}
      cinesNoSeleccionados={cinesNoSeleccionados}
        model={{ titulo: "", enCines: false, trailer: "" }}
        onSubmit={async (values, actions) => {
          crearPeliculaFormData(values).then(result =>{
            if(result.code === 200){
              navigate("/");
            }
          })
          
          console.log(values);
        
        }}
      />:<Loading />}
    </div>
  );
}
