import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../utils/Button";
import FormGroupText from "../../utils/FormGroupText";

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
            nombre: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={yup.object({
            nombre: yup.string().required('Este campo es requerido.').max(50,'campo no permite mas de 50 caracteres').matches(/^[a-zA-Z_ ]+$/,'Campo no puede contener numeros.' )
          })}
        >
          <Form>
           <FormGroupText label="Nombre" campo="nombre" placeholder="Ingrese nombre del genero" />
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
