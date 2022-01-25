import axios from "axios";
import { BasePath } from "../utils/BasePathApi";


export default function obternerEntidad(controlador:string,pagina:number,recordsPorPagina:number){
    const URL = `${BasePath}${controlador}`;
   return axios
      .get(URL, { params: { pagina, recordsPorPagina } })
      .then((response) => {
        /**
         * la constante totalDeRegistros almacena el numero de registros de la tabla Generos que proviene
         * en los headers enviados desde el back-end, en la cabecera que lleva por nombre cantidadTotalRegistros.
         *
         * La logica para obtener el valor se encuentra en el metodo Get() en la funcion InsertarParametrosEnCabecera del back-end.
         */
        
        return response
        
      })
      .catch((err) => {
          console.log(err)
      });
}