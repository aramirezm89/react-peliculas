import { Field } from "formik";

export default function FormGroupCheckBox(props: formGroupCheckBoxProps){
    const {campo,label} = props;
    return(
    <div className="formGroup form-check">
        <Field type="checkbox" className="form-check-input" id={campo} name={campo}></Field>
        <label htmlFor={campo}>{label}</label>
    </div>
)
}

interface formGroupCheckBoxProps{
    campo: string;
    label: string;
}