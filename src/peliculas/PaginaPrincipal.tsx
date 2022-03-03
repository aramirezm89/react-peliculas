import axios from "axios";
import React, { useEffect, useState } from "react";
import { typeMovies } from "../peliculas/PeliculasModelD";
import { BasePath } from "../utils/BasePathApi";
import ListadoPeliculas from "./ListadoPeliculas";
import AlertaContext from  "../utils/AlertContext";
export default function PaginaPrincipal() {
  const [peliculas, setPeliculas] = useState<typeMovies>({});
 
  useEffect(() => {
   cargarDatos();
  }, [])
  

  function cargarDatos(){
    const URL = `${BasePath}/peliculas`
    axios.get(URL).then(response =>{
      setPeliculas(response.data)
    })
  }

  return (
    <>
       <AlertaContext.Provider value={() => cargarDatos()}>
        <div>
          <h3>En Cartelera</h3>
          <ListadoPeliculas peliculas={peliculas.enCines} />
        </div>

        <div>
          <h3>Proximos Estrenos </h3>
          <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </div>
       </AlertaContext.Provider>
    </>
  );

}