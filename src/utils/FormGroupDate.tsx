import { ErrorMessage, useFormikContext } from "formik";
export default function FormGroupDate(props:formGroupDateProps){
    const {values, validateForm,touched,errors}  = useFormikContext<any>();
    const {campo,label} = props;
    return(
        <div className="form-group">
            <label htmlFor={campo}>{label}</label>
            <input type="date" className="form-control" 
            id={campo}
            name={campo}
            defaultValue={values[campo]?.toLocaleDateString('en-CA')}
            onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
                const fecha = new Date(e.currentTarget.value + 'T00:00:00');
                values[campo] = fecha;
                validateForm();
            }}
            
            />
            {touched[campo] && errors[campo]?
             <ErrorMessage name={campo}>
            {(mensaje) => <div className="text-danger">{mensaje}</div>}
             </ErrorMessage> : null}   
             

           
        </div>
    )
}

interface formGroupDateProps{
    campo:string;
    label:string;
}