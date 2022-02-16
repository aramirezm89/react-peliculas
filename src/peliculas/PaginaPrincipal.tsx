import axios from "axios";
import React, { useEffect, useState } from "react";
import { typeMovies } from "../peliculas/PeliculasModelD";
import { BasePath } from "../utils/BasePathApi";
import ListadoPeliculas from "./ListadoPeliculas";
export default function PaginaPrincipal() {
  const [peliculas, setPeliculas] = useState<typeMovies>({});
 
  useEffect(() => {
    const URL = `${BasePath}/peliculas`
    axios.get(URL).then(response =>{
      setPeliculas(response.data)
    })
  }, [])
  


  return (
    <>
      <div>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCines} />
      </div>

      <div>
        <h3>Proximos Estrenos </h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );

}