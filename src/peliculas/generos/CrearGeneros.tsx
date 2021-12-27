import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../utils/Button";

export default function CrearGeneros() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h3>Crear generos</h3>
      </div>

      <div>
        <Formik
          initialValues={{
            nombre: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <Field name="nombre" className="form-control" placeholder="Nombre del genero" />
            </div>
            <Button type="submit">Guardar</Button>
            <Link className="btn btn-secondary" to="/generos">
              Cancelar
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
