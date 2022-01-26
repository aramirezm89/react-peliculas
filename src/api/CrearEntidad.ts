import axios from "axios";
import { toast } from "react-toastify";
import { BasePath } from "../utils/BasePathApi";

export default async function crearEntidad(entidad: any,controlador: string){
    const URL = `${BasePath}/${controlador}`;
    
     return await axios.post(URL,entidad).then(response =>{
          if(response.data.code === 200){
         toast.success((response.data.message).toString(),{
          position: toast.POSITION.TOP_RIGHT,
          theme:"colored",
          autoClose:1500
          
          }) 
           return response.data;
          }else{
          
           return toast.error((response.data.message).toString(),{position:toast.POSITION.TOP_RIGHT,theme:'colored', autoClose:2000})
         
          } 
      }).catch(err =>{
       
        console.log(err)
      })
   
   
  }
  