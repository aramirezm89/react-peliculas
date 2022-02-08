import { actorPelicula } from "./actores/ActoresModel";
import { cineModelConId } from "./Cines/CinesModelo";
import { generoModelConId } from "./generos/GeneroModel";

export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculasCreacion{
    titulo:string;
    enCines:boolean;
    trailer: string;
    resumen?:string 
    fechaLanzamiento?:Date;
    poster?:File;
    posterURL?: string;
    generosIds?:number[];
    cinesIds?:number[];
    actores?:actorPelicula[];
}

export interface typeMovies{
    enCartelera?: pelicula[]
    proximosEstrenos?:pelicula[]
}

export interface peliculasPostGet{
    generos : generoModelConId[];
    cines : cineModelConId[];
}