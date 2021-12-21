import React,{useEffect,useState} from "react";
import "./App.css";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import {typeMovies} from "./peliculas/PeliculasModelD";
import Button from "./utils/Button";

function App() {

  const [peliculas, setPeliculas] =  useState<typeMovies>({})
  useEffect(() => {
    const timerId = setTimeout(() =>{
      setPeliculas({enCartelera: [
        {
          id: 1,
          titulo: "Spiderman 2",
          poster: "https://m.media-amazon.com/images/I/51hacb4+CFL._AC_.jpg",
        },
        {
          id: 2,
          titulo: "Resident Evil Welcome to Racconn City ",
          poster:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwtL01rIBBO0-TJ664EiFdAfxmlfaXyg_yvsni7jMdzK123Li",
        },
        {
          id: 3,
          titulo: "The Matrix Resurretions",
          poster:
            "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/HMDWDOHQ2FFVRCLNHFLHR4NEJQ.jpeg",
        },
      ],
      proximosEstrenos:[
        {
          id: 4,
          titulo: "The Batman",
          poster:
            "https://media.vandal.net/i/620x926/11-2021/202111101637211_2.jpg",
        },
        {
          id: 5,
          titulo: "Sonic 2",
          poster: "https://img.ecartelera.com/noticias/fotos/67200/67267/1.jpg",
        },
      ]
     })
    },2500)
    return () => clearTimeout(timerId);
   
  })


  return (
    <>
    <div className="container" > 
      <div>
        <Button>soy boton</Button>
          <h3>En Cartelera</h3>
          <ListadoPeliculas peliculas={peliculas.enCartelera} />
        </div>

      <div>
        <h3>Proximos Estrenos </h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
     
    </div>
    
    </>
  );
}

export default App;
