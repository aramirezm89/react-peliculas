import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from "../../utils/Button";
import FormGroupText from "../../utils/FormGroupText";
import { generoModel } from "./GeneroModel";
export default function FormularioGeneros(props:FormularioGenerosProps){
    const {model,onSubmit} = props;
return(
    <Formik
    initialValues={model}
    onSubmit={onSubmit}
    validationSchema={yup.object({
      nombre: yup.string().required('Este campo es requerido.').min(2,"Minimo de caracteres 2").max(50,'campo no permite mas de 50 caracteres')
      .matches(/^[a-z-A-Z_ ]+$/,'Campo no puede contener numeros.' ).primeraLetraMayuscula()
      
    })}
  
  >
   {(formikProps)=>(
      <Form>
      <FormGroupText label="Nombre" campo="nombre" placeholder="Ingrese nombre del genero" />
       <Button type="submit" disabled={formikProps.isSubmitting}>Guardar</Button>
       <Link className="btn btn-secondary" to="/generos">
         Cancelar
       </Link>
     </Form>
   )}
  </Formik>
)
}

interface FormularioGenerosProps{
    model:generoModel;
    onSubmit(values: generoModel,accion:FormikHelpers<generoModel>): void;
}