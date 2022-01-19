import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BasePath } from "../../utils/BasePathApi";
import FormularioGeneros from "./FomularioGeneros";
import { generoModel } from "./GeneroModel";

toast.configure();
export default function CrearGeneros() {
  
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([])
  


async function crear(genero: generoModel){
  const URL = `${BasePath}/generos`;
  
    await axios.post(URL,genero).then(response =>{
        if(response.data.code === 200){
       toast.success((response.data.message).toString(),{
        position: toast.POSITION.TOP_RIGHT,
        theme:"colored",
        autoClose:1000
        
        }) 
          navigate("/generos");
        }  
    }).catch(err =>{
      setErrores(err.response.data)
      toast.error((err.response.data).toString(),{position:toast.POSITION.TOP_RIGHT,theme:'colored', autoClose:1000})
    })
 
 
}


  return (
    <div>
      <div>
        <h3>Crear generos</h3>
      </div>

      <div>
        <FormularioGeneros 
           model={{nombre:''}}
           onSubmit={async(values,actions) => {
            await  crear(values);
          }}
        
        />
      </div>
    </div>
  );
}
