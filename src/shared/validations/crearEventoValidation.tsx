import * as yup from 'yup'

export const crearEventoSchema = yup.object({
  // Nombres de entradas
  ImagenPortada: yup.mixed().required('La imagen de portada es requerida.'),
  EventName: yup.string().required('Debe ingresar el mnombre del evento.'),
  Sumary: yup.string().required('Debe ingresar una reseña del evento.'),
  StartDate: yup.date().required('Debe ingresar una fecha de inicio.'),
  EndDate: yup
    .date()
    .typeError(
      'Si ingreso una fecha de inicio debe ingresar una fecha de termino para el evento.'
    )
    .when(
      'StartDate',
      (StartDate, schema) =>
        StartDate &&
        schema.min(
          StartDate,
          'La fecha de termino no puede ser antes de la fecha de inicio.'
        )
    ),
  Description: yup
    .string()
    .required('Debe ingresar una descripción del evento.')
    .max(300, 'La descripción no debe superar los 300 caracteres.'),
  Address: yup.string().required('Debe ingresar la dirección del evento.'),
  City: yup.string(),
  Region: yup.string(),
  FullCapacity: yup
    .number()
    .required('Debe ingresar la capacidad total del evento.'),
  InfluencerCode: yup.string(),
  InfluencerDiscount: yup.number().when('InfluencerCode', {
    is: (IncluencerCode: String) => IncluencerCode && IncluencerCode.length > 0,
    then: (schema) =>
      schema.required(
        'Si ingreso un código de Influencer debe ingresar un código de descuento.'
      ),
    otherwise: (schema) => schema,
  }),
})
