import FormularioCines from "./FormulariosCines";

export default function EditarCines() {
    return (
      <div>
        <h3>Editar Cines</h3>
        <FormularioCines model={{nombre:'CinePlanet'}} onSubmit={async (values,actions)=>{
        await new Promise(resolve => {setTimeout(resolve,2000)})
          console.log(values);
          actions.resetForm();
        }} />
      </div>
    );
  }
  