import { actorPelicula } from "./actores/ActoresModel";
import { cineModelConId } from "./Cines/CinesModelo";
import { generoModel, generoModelConId } from "./generos/GeneroModel";

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
    enCines?: pelicula[]
    proximosEstrenos?:pelicula[]
}

export interface peliculasPostGet{
    generos : generoModelConId[];
    cines : cineModelConId[];
}

export interface peliculaDetalle{
    id:number;
    titulo:string;
    enCines:boolean;
    trailer: string;
    resumen?:string 
    fechaLanzamiento?:Date;
    poster?: string;
    generosIds?:number[];
    cinesIds?:number[];
    actores?:actorPelicula[];
}

export interface peliculasPutGetDTO{
    pelicula: pelicula,
    generosSeleccionados: generoModelConId[],
    generosNoSeleccionados: generoModelConId[],
    cinesSeleccionados : cineModelConId[],
    cinesNoSeleccionados : cineModelConId[],
    actores: actorPelicula[];



}