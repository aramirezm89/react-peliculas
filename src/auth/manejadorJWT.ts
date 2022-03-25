import { claim, respuestaAutenticacion } from "./auth.model.t";

const llaveToken = "token";
const llaveExpiracion = "token-expiracion";


//guarda el token generado al realizar el login o registro.

export function guardarTokenLocalstorage(autenticacion:respuestaAutenticacion){
    localStorage.setItem(llaveToken, autenticacion.token);
    localStorage.setItem(llaveExpiracion, autenticacion.expiracion.toString());
}

//obtiene el token desde el localStorage

export function obtenerToken(){
  return localStorage.getItem(llaveToken);

}



//obtiene el claim de acuerdo al token guardado en el localStorage

export function obtenerClaim() : claim[]{

    const token = localStorage.getItem(llaveToken); // obtiene el token guardado en el localStorage

    if(!token){  //si el token no existe retorna un arreglo vacio.
        return [];
    }

    //si el token existe tomamo la expiarcion del token desde el localStorage
    const expiracion = localStorage.getItem(llaveExpiracion)!;   
    const expiracionFecha = new Date(expiracion)

    /*si la fecha de expiracion es menor a la fecha actual, el token expiro por lo que se retorna un arreglo vacio.
      y mediante la funcion logout deslogeamos al usuario.
    */

    if(expiracionFecha <=new Date()){
        logout();
        return [];
    }

    /*dataToken contiene el resultado de, primero buscar la parte del token que contiene los claims.
      El token se encuentra dividido por puntos por lo cual utilizo split() para dividir el token y
      con el index[1] accedo a la segunda pocision del token la cual contiene los claims (en este caso los claims son cual
        tanto el nombre de usuario (email) y la expiracion), y a esto le aplicamos
      la funcion atob() con el fin de decodificarlos.
    */
    const dataToken = JSON.parse(atob(token.split(".")[1]));

    const respuesta : claim[] = [];


    //se recorren las propiedades del dataToken y gaurdamos los valores en el array respuesta[]

    for(const propiedad in dataToken){
      
     respuesta.push({nombre: propiedad,value: dataToken[propiedad]})
    }

  
    return respuesta;
}

export function  logout(){
    localStorage.removeItem(llaveToken);
    localStorage.removeItem(llaveExpiracion);
}