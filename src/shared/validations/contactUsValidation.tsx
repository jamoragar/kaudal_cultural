import * as yup from 'yup'

export const contactUsSchema = yup.object().shape({
  name: yup.string().required('Es necesario que ingrese su nombre'),
  email: yup
    .string()
    .email('Corrobore que sea un e-mail válido')
    .required('Este campo es requerido'),
  message: yup
    .string()
    .required('Debe ingresar un mensaje a enviar.')
    .max(350, 'El mensaje no debe superar los 350 caracteres.'),
})
