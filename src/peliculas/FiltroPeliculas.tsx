import { Field, Form, Formik } from "formik";
import Button from "../utils/Button";
import { generoModelConId } from "./generos/GeneroModel";

export default function FiltroPeliculas() {
  const valorInicial: filtroPeliculasForm = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const generos: generoModelConId[] = [
    { id: 1, nombre: "acción" },
    { id: 2, nombre: "comedia" },
    { id: 3, nombre: "terror" },
  ];

  return (
    <div>
      <h3>Filtro Peliculas</h3>
      <Formik
        initialValues={valorInicial}
        onSubmit={(valores) => console.log(valores)}
      >
        {(formikProps) => (
          <Form>
            <div className="form-inline">
              <div className="form-group mt-2">
                <div className="form-group mb-2">
                  <label htmlFor="titulo" className="sr-only">
                    Titulo
                  </label>
                  <Field
                    name="titulo"
                    className="form-control"
                    placeholder="Título de la pelicula"
                  />
                </div>

                <div className="form-group mx-sm-3 mb-2">
                  <Field as="select" className="form-control" name="generoId">
                    <option value="0">--Seleccione un género</option>
                    {generos.map((genero) => (
                      <option key={genero.id} value={genero.id}>
                        {genero.nombre}
                      </option>
                    ))}
                  </Field>
                </div>
                  
                <div className="form-group mx-sm-3 mb-2">
                    <Field type="checkbox" className="form-check-input" name="proximosEstrenos" id="proximosEstrenos" ></Field>
                    <label className="form-check-label" htmlFor="proximosEstrenos">Proximos Estrenos</label>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <Field type="checkbox" className="form-check-input" name="enCines" id="enCines" ></Field>
                    <label className="form-check-label" htmlFor="enCines">En Cines</label>
                </div>
                <Button 
                 className="form-group mx-sm-2 mb-2 btn btn-primary" 
                 onClick={() => formikProps.submitForm()} 
                 >Filtrar</Button>

                 <Button 
                 className="form-group mx-sm-2 mb-2 btn btn-danger"
                 onClick={() => formikProps.resetForm()}
                 >
                 Limpiar
                 </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

interface filtroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
}
