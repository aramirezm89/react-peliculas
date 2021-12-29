import { useNavigate } from "react-router-dom";
import FormularioGeneros from "./FomularioGeneros";

export default function CrearGeneros() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>
        <h3>Crear generos</h3>
      </div>

      <div>
        <FormularioGeneros 
           model={{nombre:''}}
           onSubmit={async(values,actions) => {
            await new Promise(result =>setTimeout(result,2000))
            console.log(values)
            actions.resetForm();
          }}
        
        />
      </div>
    </div>
  );
}
