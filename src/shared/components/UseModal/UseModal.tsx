import React, { Fragment, MutableRefObject, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RiAlertLine } from 'react-icons/ri'

interface Props {
  open: boolean
  setOpen: () => void
  cancelButtonRef: MutableRefObject<any>
}

const UseModal: React.FC<Props> = ({ open, setOpen, cancelButtonRef }): any => {
  const [price, setPrice] = useState({ value: '', formatedValue: '' })
  const [codigos, setCodigos] = useState<string[]>([])
  const [tickets, setTickets] = useState<string[]>([])

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
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <form className="p-4">
                  <div className="space-y-12">
                    <div>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Foto de Portada
                          </label>
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 hover:text-orange-500"
                                >
                                  <span>Subir archivo</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">o suelte acá la imagen</p>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG o JPEG hasta 5MB.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Información del Evento
                      </h2>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="event-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Nombre del Evento
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="event-name"
                              id="event-name"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="summary"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Sumario
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="summary"
                              id="summary"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="start-date"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Fecha de Inicio
                          </label>
                          <div className="mt-2">
                            <input
                              type="date"
                              name="start-date"
                              id="start-date"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="end-date"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Fecha de termino
                          </label>
                          <div className="mt-2">
                            <input
                              type="date"
                              name="end-date"
                              id="end-date"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Descripción
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              defaultValue={''}
                            />
                          </div>
                          <p className="mt-3 text-sm leading-6 text-gray-600">
                            Escriba la descripción del evento.
                          </p>
                        </div>
                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Dirección
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Ciudad
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="city"
                              id="city"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Región
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="region"
                              id="region"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Capacidad
                          </label>
                          <div className="mt-2">
                            <input
                              type="number"
                              name="capacity"
                              id="capacity"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="tickets-types"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Precio ($)
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="tickets-types"
                              id="tickets-types"
                              value={price.formatedValue}
                              onChange={(e) => currencyFormat(e)}
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        {/* <div className="sm:col-span-2">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Precio ($)
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="price"
                              id="price"
                              value={price.formatedValue}
                              onChange={(e) => currencyFormat(e)}
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="discount"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Descuento (%)
                          </label>
                          <div className="mt-2">
                            <input
                              type="number"
                              name="discount"
                              id="discount"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleAddCodigo()}
                      className="my-8 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Agregar Código
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddTicket()}
                      className="my-8 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Tipo de Ticket
                    </button>
                  </div>
                  {codigos.map((input, index) => (
                    <div
                      key={index}
                      className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-7"
                    >
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="code-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Nombre de Código
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="code-name"
                            id="code-name"
                            value={input}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            onChange={(e) =>
                              handleChangeCodigos(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="code-discount"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          % de Descuento
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="code-discount"
                            id="code-discount"
                            value={input}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            onChange={(e) =>
                              handleChangeCodigos(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-8 sm:col-span-1">
                        <button
                          type="button"
                          onClick={() => handleRemoveCodigos(index)}
                          className="mb-2 rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                  {tickets.map((input, index) => (
                    <div
                      key={index}
                      className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-7"
                    >
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="ticket-type"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Tipo de Ticket
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="ticket-type"
                            id="ticket-type"
                            value={input}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            onChange={(e) =>
                              handleChangeTickets(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="ticket-numbers"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cantidad de Tickets
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="ticket-numbers"
                            id="ticket-numbers"
                            value={input}
                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                            onChange={(e) =>
                              handleChangeTickets(index, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="mt-8 sm:col-span-1">
                        <button
                          type="button"
                          onClick={() => handleRemoveTickets(index)}
                          className="mb-2 rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      onClick={() => setOpen()}
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      Crear Evento!
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default UseModal
