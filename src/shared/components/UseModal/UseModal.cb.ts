import { MutableRefObject, useState } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { InferType } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { crearEventoSchema } from '../../validations/crearEventoValidation'
import Swal from 'sweetalert2'
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
interface ImagePreview {
  id: number
  image: File
  previewURL: string
}

type Props = InferType<typeof crearEventoSchema>

export const useModal = (props: IProps) => {
  let today = new Date()
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset()) // Obtener la fecha actual en formato "YYYY-MM-DD"
  const [codigos, setCodigos] = useState([])
  const [tickets, setTickets] = useState<string[]>([])
  const [images, setImages] = useState<ImagePreview[]>([])
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [startDateInput, setStartDateInput] = useState<string>(
    today.toISOString().slice(0, 16)
  )
  const [creatingEvent, setCreatingEvent] = useState<boolean>(false)

  const defaultCodigosValues: CodesProps = {
    InfluencerCode: '',
    InfluencerDiscount: 0,
  }

  const tagsCategories = [
    'Teatro',
    'Cine',
    'Danza',
    'Comedia',
    'Circo',
    'Poesía',
    'Música',
  ]

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<Props>({
    resolver: yupResolver(crearEventoSchema),
    defaultValues: {
      Categories: [],
    },
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
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages: ImagePreview[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const previewURL = URL.createObjectURL(file)
        const id = Date.now() + i

        newImages.push({ id, image: file, previewURL })
      }

      setImages((prevImages) => [...prevImages, ...newImages])
    }
  }
  const handleRemoveImage = (id: number) => {
    const updatedImages = images.filter((image) => image.id !== id)
    setImages([...updatedImages])
  }
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.dataTransfer.setData('text/plain', String(index))
    setDraggedIndex(index)
  }

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault()

    if (draggedIndex === null) {
      return
    }

    const updatedImages = [...images]
    const draggedImage = updatedImages[draggedIndex]

    updatedImages.splice(draggedIndex, 1)
    updatedImages.splice(index, 0, draggedImage)

    setImages(updatedImages)
    setDraggedIndex(index)
  }

  const handleDrop = () => {
    setDraggedIndex(null)
  }
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        'rounded-md bg-green-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-green-500 mr-2',
      cancelButton:
        'rounded-md bg-red-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-500 ml-2',
    },
    buttonsStyling: false,
  })
  // Obtener paremtros del formulario de Creación de evento.
  const handleOnCrearEvento = async (
    data: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    data.EndDate = data.EndDate.toISOString()
    data.StartDate = data.StartDate.toISOString()
    const imageFileList = images.map((image) => image.image)
    data.Imagenes = imageFileList
    if (data.Tickets.length === 0) {
      swalWithBootstrapButtons
        .fire({
          title: 'Desea crear el evento sin tickets?',
          text: 'Se creara un evento sin tipos de tickets ni precios, por ende se entenderá que el evento es de entrada liberada.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, crear evento!',
          cancelButtonText: 'No, lo voy a corregir',
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log(data)
            swalWithBootstrapButtons.fire(
              'Evento creado!',
              'El evento ha sido creado con éxito.',
              'success'
            )
          }
        })
    } else {
      console.log(data)
      Swal.fire({
        title: 'Evento creado!',
        text: 'El evento ha sido creado con éxito.',
        icon: 'success',
      })
    }

    // setCreatingEvent(true)
    // console.log('Creando evento...')

    // await axios.post('http://localhost:3000/events', data).then((res) => {
    //   console.log(res.data)
    //   setCreatingEvent(false)
    // })
    // setCreatingEvent(false)

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
    images,
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
    handleFileChange,
    handleRemoveImage,
    Controller,
    creatingEvent,
    tagsCategories,
    handleDragStart,
    handleDragOver,
    handleDrop,
    draggedIndex,
  }
}
