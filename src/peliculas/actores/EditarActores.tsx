import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <div>
            <h3>Editar Actores</h3>
            <FormularioActores
            model={{nombre:'Henry Cavil',fechaNacimiento: new Date('1987-06-01T00:00:00')}} 
            onSubmit={async(values,actions) => {
               await  new Promise(result => setTimeout(result,2000))
                console.log(values)
                
            }}
            />
        </div>
    )
}