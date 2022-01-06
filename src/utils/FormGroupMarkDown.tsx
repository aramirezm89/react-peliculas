import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import "./FormGroupMarkDown.css";
export default function FormGroupMArkDown(props: formGroupMarkDownProps) {
  const { campo, label } = props;
  const { values } = useFormikContext<any>();
  return (
    <div className="form-group form-markdown mt-3">
      <div>
        <label htmlFor={campo}>{label}</label>
        <div>
          <Field name={campo} as="textarea" className="form-textarea" />
        </div>
      </div>
      <div>
        <label>{label}(preview):</label>
        <div className="markdown-container form-group">
          <ReactMarkdown>{values[campo]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

interface formGroupMarkDownProps {
  campo: string;
  label: string;
}
