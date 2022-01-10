import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "../../utils/Button";
import { coordenada } from "../../utils/CoordenadasModel";
import FormGroupText from "../../utils/FormGroupText";
import FormularioMapa from "../../utils/FormularioMapa";
import { cine } from "./CinesModelo";

export default function FormularioCines(props: formularioCinesProps) {
  const { model, onSubmit } = props;

  function transformarCoordenadas():coordenada[] | undefined {
  if(model.latitud && model.longitud){
    const respuesta : coordenada = {latitud : model.latitud, longitud : model.longitud}
    return [respuesta];
  }
  return undefined;
  }

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
         <div style={{marginTop:"10px",marginBottom:"15px"}}>
              <FormularioMapa campoLat="latitud" campoLng="longitud" coordenadas={transformarCoordenadas()} />
         </div>
          <Button type="submit" disabled={formikProps.isSubmitting}>Guardar</Button>
          <Link className="btn btn-secondary" to="/">Cancelar</Link>
        </Form>
      )}
    </Formik>
  );
}

interface formularioCinesProps {
  model: cine;
  onSubmit(valores: cine, actions: FormikHelpers<cine>): void;
}


