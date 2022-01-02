import FormularioActores from "./FormularioActores";

export default function CrearActores(){
    return(
        <div>
            <h3>Crear Actores</h3>
            <FormularioActores
            model={{nombre:'',fechaNacimiento:undefined}} 
            onSubmit={async(values,actions) => {
               await  new Promise(result => setTimeout(result,2000))
                console.log(values)
                actions.resetForm();
            }}
            />
        </div>
    )
}