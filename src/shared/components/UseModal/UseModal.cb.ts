import { MutableRefObject, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { crearEventoSchema } from '../../validations/crearEventoValidation'

export interface IProps {
  open: boolean
  setOpen: () => void
  cancelButtonRef: MutableRefObject<any>
}

export const useModal = (props: IProps) => {
  const [price, setPrice] = useState({ value: '', formatedValue: '' })
  const [codigos, setCodigos] = useState<string[]>([])
  const [tickets, setTickets] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(crearEventoSchema) })
  type Props = InferType<typeof crearEventoSchema>

  const currencyFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    const valueWithRegex = value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    setPrice({ value: valueWithRegex, formatedValue: value })
    console.log(price)
  }

  const handleAddCodigo = () => {
    setCodigos([...codigos, ''])
  }

  const handleRemoveCodigos = (index: number) => {
    setCodigos(codigos.filter((_, i) => i !== index))
  }

  const handleChangeCodigos = (index: number, value: string) => {
    const newCodigos = [...codigos]
    newCodigos[index] = value
    setCodigos(newCodigos)
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
    console.log(data)
  }

  return {
    currencyFormat,
    handleAddCodigo,
    handleRemoveCodigos,
    handleChangeCodigos,
    handleChangeTickets,
    handleAddTicket,
    handleRemoveTickets,
    price,
    codigos,
    tickets,
    errors,
    register,
    handleSubmit,
    handleOnCrearEvento,
  }
}
