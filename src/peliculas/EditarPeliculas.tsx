import FormularioPeliculas from "./FormularioPeliculas";
import { generoModelConId } from "./generos/GeneroModel";

export default function EditarPeliculas(){

    const generosNoSeleccionados: generoModelConId[] = [
        { id: 1, nombre: "Acción" },
        { id: 2, nombre: "Terror" },
       
      ];

      const generosSeleccionados: generoModelConId[] = [
        { id: 3, nombre: "Comedia" },
        { id: 4, nombre: "Drama" },
      ];
    return(
        <div>
            <h3>Editar Peliculas</h3>
            <FormularioPeliculas
            generosSeleccionados={generosSeleccionados}
            generosNoSeleccionados={generosNoSeleccionados}
             model={{titulo:'The Batman',enCines:false,trailer:'url',
            fechaLanzamiento: new Date('2021-03-04T00:00:00')
            }}
            onSubmit={async (values,actions) => {
                await new Promise((resolve) => setTimeout(resolve,2000));
                console.log(values)
                actions.resetForm();
            }}
            />
        </div>
    )
}