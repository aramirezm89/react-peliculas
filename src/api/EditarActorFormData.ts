import axios from "axios";
import { toast } from "react-toastify";
import { actores } from "../peliculas/actores/ActoresModel";
import { BasePath } from "../utils/BasePathApi";
import { convertirActorFormData } from "./ConvertirActorFormData";


/**
 * Esta funcion manda la peticion al back-end transformando los datos del formulario a FORM-DATA
 * gracias a la funcion convertirActorFormData()
 *
 *
 */
export async function editarActorFormData(actor: actores,id: string) {
  const formData = convertirActorFormData(actor);
  return await axios({
    method: "put",
    url: `${BasePath}/actores/${id}`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      if (response.data.code === 200) {
        toast.success(response.data.message.toString(), {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          autoClose: 1500,
        });
        return response.data;
      } else {
         return toast.error(response.data.message.toString(), {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
          autoClose: 1500,
        });
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
}