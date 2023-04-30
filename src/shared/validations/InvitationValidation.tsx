import * as yup from "yup";

export const invitatinSchema = yup.object().shape({
  names: yup.string().required("Es necesario que ingrese su nombre"),
  lastNames: yup.string().required("Es necesario que ingrese su apellido"),
  email: yup
    .string()
    .email("Corrobore que sea un e-mail válido")
    .required("Este campo es requerido"),
  confirmEmail: yup
    .string()
    .email("Corrobore que sea un e-mail válido")
    .oneOf(
      [yup.ref("email")],
      "El e-mail ingresado no coincide con el anterior"
    )
    .required("Este campo es requerido"),
  cellPhone: yup.string(),
  numberOfTickets: yup
    .number()
    .typeError("Debe ingresar un número menor a 5.")
    .min(1, "Debe elegir al menos 1 ticket")
    .max(5, "La cantidad máxima por persona es de 5 tickets")
    .required("Ingrese la cantidad de tickets que necesita"),
});
