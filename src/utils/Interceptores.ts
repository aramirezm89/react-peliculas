import axios from "axios";
import { obtenerToken } from "../auth/manejadorJWT";

/*
 Esta funcion permitira mandar el token devuelta al backend con el fin de poder utilizar 
 los endpoints que esten protegidos.
*/

export function configurarInterceptor(){
 axios.interceptors.request.use(
     
    function (config) {
     const token = obtenerToken();
     if(token){
         config.headers.Authorization =`bearer ${token}`
     }
     return config;
 },
  function (err){
      return Promise.reject(err);
  }
 )
}