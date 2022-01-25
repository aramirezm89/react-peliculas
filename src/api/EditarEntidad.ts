import axios from "axios";
import { toast } from "react-toastify";
import { BasePath } from "../utils/BasePathApi";
import { useNavigate } from "react-router-dom"

export default function editarEntidad(entidad:any,id:string|undefined,controlador:string){
    const URL = `${BasePath}${controlador}${id}`;
   return axios.put(URL,entidad).then((response ) =>{
        if(response.data.code === 200){
          toast.success((response.data.message).toString(),{
           position: toast.POSITION.TOP_RIGHT,
           theme:"colored",
           autoClose:1500
           
           }) 
            return response.data
           } else{
            return toast.error((response.data.message).toString(),{position:toast.POSITION.TOP_RIGHT,theme:'colored', autoClose:1000})
           } 
       }).catch(err =>{
       console.log(err)
       })

}



