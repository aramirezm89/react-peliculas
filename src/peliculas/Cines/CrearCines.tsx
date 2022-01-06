import FormularioCines from "./FormulariosCines";

export default function CrearCines() {
  return (
    <div>
      <h3>Crear Cines</h3>
      <FormularioCines model={{nombre:''}} onSubmit={async (values,actions) =>{
        await new Promise(resolve => {setTimeout(resolve,2000)})
        console.log(values);
        actions.resetForm();
      }} />
    </div>
  );
}
