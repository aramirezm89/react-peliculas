import * as yup from "yup";

export default function configurarValidaciones() {
  yup.addMethod(yup.string, "primeraLetraMayuscula", function () {
    return this.test(
      "primeraLetraMayuscula",
      "La primera letra debe ser mayúscula.",
      function (valor) {
        if (valor && valor.length > 0) {
          const primeraLetra = valor.substring(0, 1);
          return primeraLetra === primeraLetra.toUpperCase();
        }

        return true;
      }
    );
  });
}
