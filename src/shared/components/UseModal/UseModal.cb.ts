import { MutableRefObject, useState } from 'react'
import {
  useForm,
  useFieldArray,
  Controller,
  useFormState,
} from 'react-hook-form'
import { InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { crearEventoSchema } from '../../validations/crearEventoValidation'
import axios from 'axios'

export interface IProps {
  open: boolean
  setOpen: () => void
  cancelButtonRef: MutableRefObject<any>
}

export interface CodesProps {
  InfluencerCode: string
  InfluencerDiscount: number
}

type Props = InferType<typeof crearEventoSchema>

export const useModal = (props: IProps) => {
  let today = new Date()
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset()) // Obtener la fecha actual en formato "YYYY-MM-DD"
  const [codigos, setCodigos] = useState([])
  const [tickets, setTickets] = useState<string[]>([])
  const [preview, setPreview] = useState<File | null>(null)
  const [startDateInput, setStartDateInput] = useState<string>(
    today.toISOString().slice(0, 16)
  )
  const [creatingEvent, setCreatingEvent] = useState<boolean>(false)

  const defaultCodigosValues: CodesProps = {
    InfluencerCode: '',
    InfluencerDiscount: 0,
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<Props>({
    resolver: yupResolver(crearEventoSchema),
  })
  // Definimos el formulario dinamico de Códigos de Influencers
  const {
    fields: CodigosFields,
    append: AddCodigo,
    remove: RemoveCodigo,
  } = useFieldArray({
    control,
    name: 'Codes',
  })

  // Definimos el formulario dinámico de Tipos de Tickets
  const {
    fields: TipoTicketsFields,
    append: AddTipoTicket,
    remove: RemoveTipoTicket,
  } = useFieldArray({
    control,
    name: 'Tickets',
  })

  const currencyFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    return value
  }
  // Con esta función inicialiamos la fecha del día de hoy para ser mostrada en el input StartDate
  const handleStartDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateInput(event.target.value)
  }

  const handleAddCodigo = () => {
    setCodigos([...codigos, defaultCodigosValues])
  }

  const handleRemoveCodigos = (index: number) => {
    const { Codes } = getValues()
    console.log(Codes)
    setCodigos(codigos.filter((_, i) => i !== index))
  }

  const handleChangeTickets = (index: number, value: string) => {
    const newTickets = [...tickets]
    newTickets[index] = value
    setTickets(newTickets)
  }
  const handleAddTicket = () => {
    setTickets([...tickets, ''])
  }

  const handleRemoveTickets = (index: number) => {
    setTickets(tickets.filter((_, i) => i !== index))
  }

  // Previsualizar la imagen que se esta subiendo
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setPreview(e.target.files[0])
  }

  // Obtener paremtros del formulario de Creación de evento.
  const handleOnCrearEvento = async (
    data: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    data.EndDate = data.EndDate.toISOString()
    data.StartDate = data.StartDate.toISOString()
    console.log(data)

    setCreatingEvent(true)
    console.log('Creando evento...')

    await axios.post('http://localhost:3000/events', data).then((res) => {
      console.log(res.data)
      setCreatingEvent(false)
    })
    setCreatingEvent(false)

    // reset()
  }

  return {
    currencyFormat,
    handleAddCodigo,
    handleRemoveCodigos,
    handleChangeTickets,
    handleAddTicket,
    handleRemoveTickets,
    handleStartDateInput,
    startDateInput,
    codigos,
    tickets,
    preview,
    errors,
    isSubmitting,
    control,
    CodigosFields,
    AddCodigo,
    RemoveCodigo,
    TipoTicketsFields,
    AddTipoTicket,
    RemoveTipoTicket,
    register,
    handleSubmit,
    handleOnCrearEvento,
    handlePreview,
    Controller,
    creatingEvent,
  }
}
