import { Formik, FormikHelpers, Form } from "formik";
import { actores } from "./ActoresModel";
import * as yup from "yup";
import FormGroupText from "../../utils/FormGroupText";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
import FormGroupDate from "../../utils/FormGroupDate";
import FormGroupImage from "../../utils/FormGroupImage";
import FormGroupMarkDown from "../../utils/FormGroupMarkDown";
export default function FormularioActores(props: FormularioActoresProps) {
  const { model, onSubmit } = props;
  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={yup.object({
        nombre: yup
          .string()
          .required("Este campo es requerido.")
          .min(2, "Minimo de caracteres 2")
          .max(50, "campo no permite más de 50 caracteres")
          .matches(/^[a-zA-Z_ ]+$/, "Campo no puede contener numeros.")
          .primeraLetraMayuscula(),
        fechaNacimiento: yup
          .date()
          .required("Este campo es requerido.")
          .nullable(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText
            label="Nombre"
            campo="nombre"
            placeholder="Nombre del actor"
          />
          <FormGroupDate label="Fecha nacimiento" campo="fechaNacimiento" />
          <FormGroupImage
            campo="foto"
            label="Foto"
            imageUrl={model.imagenURL}
          />
          <FormGroupMarkDown campo="biografia" label="Bíografia" />
          <Button type="submit" disabled={formikProps.isValidating}>
            Guardar
          </Button>
          <Link className="btn btn-secondary" to="/actores">
            Cancelar
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface FormularioActoresProps {
  model: actores;
  onSubmit(valores: actores, acciones: FormikHelpers<actores>): void;
}
