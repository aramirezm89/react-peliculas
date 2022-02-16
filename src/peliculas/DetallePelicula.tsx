import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasePath } from "../utils/BasePathApi";
import {peliculaDetalle} from "./PeliculasModelD"
import  "./PeliculaDetalle.css";
import { generoModelConId } from "./generos/GeneroModel";
import Button from "../utils/Button";
import moment from "moment";
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

export default function DetallePelicula(){
  var fecha =  moment.locale('es')
const {id} = useParams()
const [pelicula,setPelicula] = useState<peliculaDetalle>()
const [generos,setGeneros] = useState<generoModelConId[]>()

useEffect(() => {
    detallePelicula(); 
    detallePeliculaGeneros();
  


},[])

async function  detallePelicula(){
  const  URL = `${BasePath}/peliculas/${id}`;
  await axios.get(URL).then(response =>{
    setPelicula(response.data)

  })
}

 function detallePeliculaGeneros(){
    const URL  = `${BasePath}/peliculas/generos/${id}`;
    axios.get(URL).then(response => {
     setGeneros(response.data);
    })
}
return(
<div className="container mt-lg-5 ">
    <div className="row col-lg-12">
        <div className="col-lg-4">
            <img className="" src={pelicula?.poster} alt="poster pelicula" style={{width:"250px",height:"300px"}} />
        </div>
        <div className="col-lg-8 mt-5">
         
                <h4>{pelicula?.titulo}</h4>
                <p className="font-weight-light">{pelicula?.resumen}</p>
               
                {generos?.map((genero) => (
                      <Button key={genero.id}>
                        {genero.nombre}
                      </Button>
                    ))}
                    <br></br>
               < label className="mt-2">{moment(pelicula?.fechaLanzamiento).format("LL")}</label>
        </div>
    </div>
</div>
)
}