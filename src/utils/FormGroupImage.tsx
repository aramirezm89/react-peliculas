import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupImage(props: formGroupImage) {
  const { campo, label, imageUrl } = props;
  const [imagenArchivo, setImagenArchivo] = useState("");
  const [imagenUrl,setImagenUrL ]= useState(imageUrl);
  const { values } = useFormikContext<any>();
  const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archivo = e.currentTarget.files[0];
      values[campo] = archivo;
      setImagenUrL('');
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      })
        .then((valor: string) => setImagenArchivo(valor))
        .catch((error) => console.log(error));
        
    }
  };
  return (
    <div>
      <label htmlFor={campo}>{label}</label>
      <div >
        <input type="file" accept=".jpg,.jpeg,.png" onChange={ManejarOnChange}/>
      </div>
      {imagenArchivo ? (
        <div className=" mt-3">
          <img
            src={imagenArchivo}
            alt="Imagen seleccionada."
            style={{ width: "450px"}}
          ></img>
        </div>
      ) : null}
       {imagenUrl ? (
        <div className=" mt-3">
          <img
            src={imageUrl}
            alt="Imagen seleccionada."
            style={{ width: "450px"}}
          ></img>
        </div>
      ) : null}
    </div>
  );
}

interface formGroupImage {
  campo: string;
  label: string;
  imageUrl: string;
}

FormGroupImage.defaultProps ={
imageUrl:''
}
