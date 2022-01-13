import { actorPelicula } from "./actores/ActoresModel";
import { cineModelConId } from "./Cines/CinesModelo";
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

      const cinesNoseleccionados : cineModelConId[] = [
        {id:1,nombre:'Cinemark'},
        {id:3,nombre:'CinePlanet'}
      ]

      const cinesSeleccionados: cineModelConId[] = [
        {id:2,nombre:'Cine Hoyts'}
      ]

      const actoresSeleccionados : actorPelicula[] = [
        {
          id: 2,
          nombre: "Alfredo Castro",
          personaje: "",
          foto: "https://www.goldenglobes.com/sites/default/files/styles/homepage_carousel/public/2021-12/alfredo_castro_gettyimages-1321798183.jpg?h=3437b6b3&itok=0brEz6-M",
        }
      ]
    return(
        <div>
            <h3>Editar Peliculas</h3>
            <FormularioPeliculas
            actoresSeleccionados={actoresSeleccionados}
             cinesSeleccionados={cinesSeleccionados}
             cinesNoSeleccionados={cinesNoseleccionados}
            generosSeleccionados={generosSeleccionados}
            generosNoSeleccionados={generosNoSeleccionados}
             model={{titulo:'The Batman',enCines:true,trailer:'url',
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