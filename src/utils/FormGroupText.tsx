import { ErrorMessage, Field } from "formik";

export default function   FormGroupText(props: FormGroupTextProps) {
  const { campo, label, placeholder,type} = props;
  return (
    <>
      <div className="form-group">
        {label ? <label htmlFor={campo}>{label}</label> : null}
        <Field
          name={campo}
          className="form-control"
          placeholder={placeholder}
          type={type}
        />
        <ErrorMessage name={campo}>
          {(mensaje) => <div className="text-danger">{mensaje}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}

interface FormGroupTextProps {
  campo: string;
  placeholder?: string;
  label?: string;
  type: string;
}

FormGroupText.defaultProps = {
  type: 'text'
}