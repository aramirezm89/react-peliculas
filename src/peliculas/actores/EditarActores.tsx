import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <div>
      <h3>Editar Actores</h3>
      <FormularioActores
        model={{
          nombre: "Henry Cavil",
          fechaNacimiento: new Date("1987-06-01T00:00:00"),
          imagenURL:
            "https://www.hola.com/imagenes/actualidad/20210412187645/henry-cavill-presenta-a-su-novia-natalie-viscuso/0-939-940/henry-cavill-cordon-t.jpg",
          biografia: `# Henry Cavill \n  actor nacido el **05 de mayo de 1983**`,
        }}
        onSubmit={async (values, actions) => {
          await new Promise((result) => setTimeout(result, 2000));
          console.log(values);
        }}
      />
    </div>
  );
}
