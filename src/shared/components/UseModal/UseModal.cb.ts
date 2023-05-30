import { MutableRefObject, useState } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { crearEventoSchema } from '../../validations/crearEventoValidation'

export interface IProps {
  open: boolean
  setOpen: () => void
  cancelButtonRef: MutableRefObject<any>
}

export interface CodesProps {
  InfluencerCode: string
  InfluencerDiscount: number
}

export const useModal = (props: IProps) => {
  const today = new Date().toISOString().substr(0, 10) // Obtener la fecha actual en formato "YYYY-MM-DD"
  const [price, setPrice] = useState({ value: '', formatedValue: '' })
  const [codigos, setCodigos] = useState([])
  const [tickets, setTickets] = useState<string[]>([])
  const [preview, setPreview] = useState<File | null>(null)
  const [startDateInput, setStartDateInput] = useState<string>(today)

  const defaultCodigosValues: CodesProps = {
    InfluencerCode: '',
    InfluencerDiscount: 0,
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Props>({
    resolver: yupResolver(crearEventoSchema),
  })
  type Props = InferType<typeof crearEventoSchema>
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'Codes',
  })

  const currencyFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    const valueWithRegex = value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    setPrice({ value: valueWithRegex, formatedValue: value })
  }

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

  const handleChangeCodigos = (index: number, value: string) => {
    // const newCodigos = [...codigos]
    // newCodigos[index] = value
    // setCodigos(newCodigos)
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

  // Obtener paremtros del formulario de Creación de evento.
  const handleOnCrearEvento = (data: any) => {
    data.EndDate = data.EndDate.toLocaleDateString()
    data.StartDate = data.StartDate.toLocaleDateString()
    console.log(data)
  }

  // Previsualizar la imagen que se esta subiendo
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setPreview(e.target.files[0])
  }

  return {
    currencyFormat,
    handleAddCodigo,
    handleRemoveCodigos,
    handleChangeCodigos,
    handleChangeTickets,
    handleAddTicket,
    handleRemoveTickets,
    handleStartDateInput,
    startDateInput,
    price,
    codigos,
    tickets,
    preview,
    errors,
    fields,
    control,
    append,
    remove,
    register,
    handleSubmit,
    handleOnCrearEvento,
    handlePreview,
    Controller,
  }
}
