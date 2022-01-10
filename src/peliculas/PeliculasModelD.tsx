export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface peliculasCreacion{
    titulo:string;
    enCines:boolean;
    trailer: string;
    fechaLanzamiento?:Date;
    poster?:File;
    posterURL?: string;
    generosIds?:number[];
}

export interface typeMovies{
    enCartelera?: pelicula[]
    proximosEstrenos?:pelicula[]
}