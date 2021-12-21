import React from 'react';
import { pelicula } from "./PeliculasModelD";
import css from './PeliculaIndividual.module.css';
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
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: pelicula
}