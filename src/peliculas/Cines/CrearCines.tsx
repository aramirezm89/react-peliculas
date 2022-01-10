import FormularioCines from "./FormulariosCines";

export default function CrearCines() {
  return (
    <div>
      <h3>Crear Cines</h3>
      <FormularioCines model={{nombre:'',latitud:-33.44031213710141,longitud:-70.65431192208075}} onSubmit={async (values,actions) =>{
        await new Promise(resolve => {setTimeout(resolve,2000)})
        console.log(values);
        actions.resetForm();
      }} />
    </div>
  );
}


