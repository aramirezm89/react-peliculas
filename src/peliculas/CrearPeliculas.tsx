import FormularioPeliculas from "./FormularioPeliculas";
import { generoModelConId } from "./generos/GeneroModel";

export default function CrearPeliculas() {
  const generos: generoModelConId[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Terror" },
    { id: 3, nombre: "Comedia" },
    { id: 4, nombre: "Drama" },
  ];

  return (
    <div>
      <h3>Crear Peliculas</h3>
      <FormularioPeliculas
      generosSeleccionados={[]}
      generosNoSeleccionados={generos}
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
