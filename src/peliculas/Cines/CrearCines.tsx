import { useNavigate } from "react-router-dom";
import crearEntidad from "../../api/CrearEntidad";
import FormularioCines from "./FormulariosCines";

export default function CrearCines() {
  const navigate = useNavigate()
  return (
    <div>
      <h3>Crear Cines</h3>
      <FormularioCines model={{nombre:'',latitud:-33.44031213710141,longitud:-70.65431192208075}} onSubmit={async (values,actions) =>{
       await crearEntidad(values,"cines").then(result =>{
          if(result.code ===200){
            navigate("/cines")
          }
        })
      }} />
    </div>
  );
}


