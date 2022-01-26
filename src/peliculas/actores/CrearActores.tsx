import FormularioActores from "./FormularioActores";
import crearEntidad from "../../api/CrearEntidad"
import { crearActorFormData } from "../../api/CrearActorFormData";
import { useNavigate } from "react-router-dom";
export default function CrearActores(){
    const navigate = useNavigate()
    return(
        <div>
            <h3>Crear Actores</h3>
            <FormularioActores
            model={{nombre:'',fechaNacimiento:undefined}} 
            onSubmit={(values,actions) => {
             crearActorFormData(values).then(result =>{
                if(result.code === 200){
                  navigate("/actores")
                }
              })
             
              console.log(values)
              
            
            }}
            />
        </div>
    )
}