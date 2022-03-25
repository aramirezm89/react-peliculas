import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasePath } from "../utils/BasePathApi";
import { peliculaDetalle } from "./PeliculasModelD";
import "./PeliculaDetalle.css";
import { generoModelConId } from "./generos/GeneroModel";
import Button from "../utils/Button";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
import Rating from "../utils/Rating";
import { toast } from "react-toastify";
moment.locale("es");

export default function DetallePelicula() {
  var fecha = moment.locale("es");
  const { id } = useParams();
  const [pelicula, setPelicula] = useState<peliculaDetalle>();
  const [generos, setGeneros] = useState<generoModelConId[]>();

  useEffect(() => {
    detallePelicula();
    detallePeliculaGeneros();

  }, [pelicula]);

  async function detallePelicula() {
    const URL = `${BasePath}/peliculas/${id}`;
    await axios.get(URL).then((response) => {
      setPelicula(response.data);

    });
  }

  async function detallePeliculaGeneros() {
    const URL = `${BasePath}/peliculas/generos/${id}`;
   await axios.get(URL).then((response) => {
      setGeneros(response.data);
    });
  }

  function generarURLYoutubeEMbebido(url: any) {
    if (!url) {
      return "";
    }
    var video_id = url.split("v=")[1];
    var posicionAmpersand = video_id.indexOf("&");
    if (posicionAmpersand !== -1) {
      video_id = video_id.substring(0, posicionAmpersand);
    }

    return `https://www.youtube.com/embed/${video_id}`;
  }

  async function onVote(voto:number){
    const URL = `${BasePath}/rating`
    await axios.post(URL,{peliculaId:id, puntuacion : voto}).then(response =>{
      if(response.data.code === 200){
        toast.success((response.data.message).toString(),{
          position: toast.POSITION.TOP_RIGHT,
          theme:"colored",
          autoClose:1500
          
          }) 
      }
    }) 


    

  }

  return (
    pelicula?
    <div className="container mt-lg-4 ">
      <div className="row col-12 ">
        <h1 className="ml-3 mb-4">{pelicula.titulo}</h1>
      </div>
      <div className="row col-12">
          <label className="col-12">  Voto Promedio: {pelicula.promedioVoto} </label>
        </div>
      <div className="row col-12">
          <label className="col-12">
            Tu voto:{" "}
            <span>
              <Rating
                maximoValor={5}
                valorSeleccionado={pelicula.votoUsuario!}
                onChange={(voto) => onVote(voto)}
              />
            </span>
          </label>
        </div>
      <div className="row col-lg-12 mt-3">
        <div className="col-lg-4">
          <img
            className=""
            src={pelicula?.poster}
            alt="poster pelicula"
            style={{ width: "250px", height: "316px" }}
          />
        </div>
        <div>
          <iframe
            title="youtube-trailer"
            width="560"
            height="315"
            src={generarURLYoutubeEMbebido(pelicula.trailer)}
            frameBorder={0}
            allow="accelerometer:autoplay;encrypted-media;gyroscope;picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-lg-8 mt-5">
          <p className="font-weight-light">{pelicula.resumen}</p>

          {generos?.map((genero) => (
            <Button key={genero.id}>{genero.nombre}</Button>
          ))}
          <br></br>
          <label className="mt-1">
            {moment(pelicula.fechaLanzamiento).format("LL")}
          </label>
        </div>
      </div>
    </div> : null
  );
}
