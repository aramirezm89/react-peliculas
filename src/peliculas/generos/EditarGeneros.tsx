import { useParams } from "react-router-dom"
import FormularioGeneros from "./FomularioGeneros";

export default function EditarGeneros(){
    
    const {id} =  useParams();

    
    return(
        <div>
            <h3>Editar Generos</h3>
        <FormularioGeneros 
           model={{nombre:''}}
           onSubmit={async(values,actions) => {
            await new Promise(result =>setTimeout(result,2000))
            console.log(values)
            actions.resetForm();
          }}
        
        />
      </div>
    )
}