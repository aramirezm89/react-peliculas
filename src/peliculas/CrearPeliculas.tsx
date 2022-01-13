import { cineModelConId } from "./Cines/CinesModelo";
import FormularioPeliculas from "./FormularioPeliculas";
import { generoModelConId } from "./generos/GeneroModel";

export default function CrearPeliculas() {
  const generos: generoModelConId[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Terror" },
    { id: 3, nombre: "Comedia" },
    { id: 4, nombre: "Drama" },
  ];

  const cines: cineModelConId[] = [
    {id:1,nombre:'Cinemark'},
    {id:2,nombre:'Cine Hoyts'},
    {id:3,nombre:'CinePlanet'},
  ]

  return (
    <div>
      <h3>Crear Peliculas</h3>
      <FormularioPeliculas
      actoresSeleccionados={[]}
      generosSeleccionados={[]}
      generosNoSeleccionados={generos}
      cinesSeleccionados={[]}
      cinesNoSeleccionados={cines}
        model={{ titulo: "", enCines: false, trailer: "" }}
        onSubmit={async (values, actions) => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log(values);
          actions.resetForm();
        }}
      />
    </div>
  );
}
