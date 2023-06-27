import * as yup from 'yup'

export const crearEventoSchema = yup.object().shape({
  // Nombres de entradas
  Imagenes: yup.mixed().required('La imagen de portada es requerida.'),
  EventName: yup.string().required('Debe ingresar el nombre del evento.'),
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
  Categories: yup
    .array()
    .min(1, 'Seleccione al menos una categoría')
    .required('Es requerido seleccionar al menos'),
  Address: yup.string().required('Debe ingresar la dirección del evento.'),
  City: yup
    .string()
    .required('Debe ingresar la ciudad donde se realizara el evento.'),
  Region: yup.string(),
  Codes: yup.array().of(
    yup.object().shape({
      InfluencerCode: yup
        .string()
        .required('Debe ingresar el nombre del código.'),
      InfluencerDiscount: yup
        .number()
        .typeError(
          'Debe ingresar un valor para aplicar el porcentaje de descuento.'
        )
        .max(100, 'El descuento no puede superar al 100%.')
        .positive('El valor ingresado no puede ser un número negativo o 0.'),
    })
  ),
  Tickets: yup.array().of(
    yup.object({
      TipoTicket: yup
        .string()
        .required('Debe ingresar el nombre del tipo de ticket.'),
      CantidadTicketTipo: yup
        .number()
        .min(
          1,
          'Debe ingresar al menos 1 cupo para el evento con este tipo de ticket.'
        )
        .required('Debe ingresar una cantidad para este tipo de tickets.'),
      PrecioTicket: yup
        .number()
        .min(1, 'El valor del ticket no puede ser $0.')
        .required('Debe ingresar un precio para el tipo de ticket.')
        // .test(
        //   'Cantidad',
        //   'La cantidad de tickets por tipo, no puede ser mayor a la capacidad total del evento.',
        //   function (value) {
        //     const { from } = this
        //     const FullCapacity = Number(from[1].value.FullCapacity)
        //     return value <= FullCapacity ? true : false
        //   }
        // )
        .typeError(
          'Debe ingresar una cantidad de tickets, menor o igual a la capacidad del evento.'
        ),
    })
  ),
})
