import { Formik, FormikHelpers, Form } from "formik";
import { cine } from "./CinesModelo";
import * as yup from "yup";
import FormGroupText from "../../utils/FormGroupText";
import Button from "../../utils/Button";

export default function FormularioCines(props: formularioCinesProps) {
  const { model, onSubmit } = props;

  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={yup.object({
        nombre: yup
          .string()
          .required('Este campo es requerido.')
          .primeraLetraMayuscula()
          .min(3,'Minimo 3 caracteres')
          .max(50,'Campo no permite más de 50 caracteres')
          
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText
            campo="nombre"
            label="Nombre"
            placeholder="Nombre del cine."
          />
          <Button type="submit" disabled={formikProps.isSubmitting}>Guardar</Button>
        </Form>
      )}
    </Formik>
  );
}

interface formularioCinesProps {
  model: cine;
  onSubmit(valores: cine, actions: FormikHelpers<cine>): void;
}
