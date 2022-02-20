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


function generarURLYoutubeEMbebido(url:any){
  if(!url){
    return ''
  }
  var video_id = url.split('v=')[1];
  var posicionAmpersand = video_id.indexOf('&');
  if(posicionAmpersand !== -1){
    video_id = video_id.substring(0, posicionAmpersand)
  }

  return `https://www.youtube.com/embed/${video_id}`
}

return(
<div className="container mt-lg-5 ">
  <div className="row col-12 ">
  <h1 className="ml-3 mb-4">{pelicula?.titulo}</h1>
  </div>
    <div className="row col-lg-12">
        <div className="col-lg-4">
            <img className="" src={pelicula?.poster} alt="poster pelicula" style={{width:"250px",height:"316px"}} />
        </div>
        <div>
        <iframe 
            title="youtube-trailer"
            width="560"
            height="315"
            src={generarURLYoutubeEMbebido(pelicula?.trailer)}
            frameBorder={0}
            allow="accelerometer:autoplay;encrypted-media;gyroscope;picture-in-picture"
            allowFullScreen
            >
              
            </iframe>
        </div>
        <div className="col-lg-8 mt-5">
         
            
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