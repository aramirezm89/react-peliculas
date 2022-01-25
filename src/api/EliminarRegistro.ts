import axios from "axios";
import { BasePath } from "../utils/BasePathApi";

export default function eliminarRegistro(id: number,controlador:string) {
    const URL = `${BasePath}${controlador}${id}`;
    return  axios
      .delete(URL)
      .then((response) => {
        if (response.data.code === 200) {
          return response.data;
        } else {
          return response.data;
        }
      })
      .catch((err) => {
       console.log(err);
      });
  }