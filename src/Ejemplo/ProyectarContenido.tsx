import { ReactElement } from "react";

export default function ProyectarContenido(props: ProyectarContenidosProps) {
  const { children } = props;
  return (
    <>
      <h3>Parte superior</h3>
      {children}
      <h3>Parte Inferior</h3>
    </>
  );
}

interface ProyectarContenidosProps {
  children: ReactElement;

}
