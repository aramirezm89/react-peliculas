import FormularioActores from "./FormularioActores";
import crearEntidad from "../../api/CrearEntidad"
export default function CrearActores(){
    return(
        <div>
            <h3>Crear Actores</h3>
            <FormularioActores
            model={{nombre:'',fechaNacimiento:undefined}} 
            onSubmit={async(values,actions) => {
             crearEntidad(values,"actores")
              console.log(values)
            
            }}
            />
        </div>
    )
}