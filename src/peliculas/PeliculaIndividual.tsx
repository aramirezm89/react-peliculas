import React from 'react';
import { pelicula } from "./PeliculasModelD";
import css from './PeliculaIndividual.module.css';
import { Link } from 'react-router-dom';
import Button from '../utils/Button';
export default function Peliculaindividual(props : peliculaIndividualProps ){
    const {id,titulo,poster} = props.pelicula;
    
    const construirLink  = () => `/pelicula/${id}`;
    return (
        <div className={css.div} >
            <a href={construirLink()}>
                <img src={poster} alt="Poster" />
            </a>
            <p className="mt-3">
                <a href={construirLink()}>{titulo}</a>
            </p> 
            <div>
                <Link className="mr-2  btn btn-info " to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                <Button className="btn btn-danger">Borrar</Button>
            </div>
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: pelicula
}