export interface actores{
    nombre:string,
    fechaNacimiento?: Date;
    imagen?: File;
    imagenURL?:string;
    biografia?:string;
}

export interface actoresWhithId{
    id:number,
    nombre:string,
    fechaNacimiento?: Date
    imagen?: File;
    imagenURL?:string;
    biografia?:string;
}