export interface actores{
    nombre:string,
    fechaNacimiento?: Date;
    foto?: File;
    imagenURL?:string;
    biografia?:string;
}

export interface actoresWhithId{
    id:number,
    nombre:string,
    fechaNacimiento?: Date
    foto?: File;
    imagenURL?:string;
    biografia?:string;
}

export interface actorPelicula{
    id:number;
    nombre:string;
    personaje:string;
    foto: string;
}

export interface actorDTO{
    id:number,
    nombre:string,
    biografia?:string,
    fechaNacimiento?: Date
    foto?: File;
}