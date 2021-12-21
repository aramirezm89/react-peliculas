export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface typeMovies{
    enCartelera?: pelicula[]
    proximosEstrenos?:pelicula[]
}