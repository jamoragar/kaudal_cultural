import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IProps, useModal } from './UseModal.cb'
import { SpinnerComponent } from '../icons/Spinner'

const ModalEventos: React.FC<IProps> = (
  { open, setOpen, cancelButtonRef },
  props: IProps
): React.ReactElement => {
  const method = useModal(props)

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
                <form
                  className="p-4"
                  onSubmit={method.handleSubmit(method.handleOnCrearEvento)}
                >
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
                          <div className="mt-2 flex flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="mb-4">
                              <img
                                className="max-w-sm"
                                src={
                                  method.preview === null
                                    ? ''
                                    : URL.createObjectURL(method.preview)
                                }
                                alt=""
                              />
                            </div>
                            <div className="text-center">
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 hover:text-orange-500"
                                >
                                  <span>Subir archivo</span>
                                  <input
                                    id="file-upload"
                                    type="file"
                                    className="sr-only"
                                    {...method.register('ImagenPortada')}
                                    onChange={method.handlePreview}
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
                              id="event-name"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('EventName')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.EventName?.message}
                            </span>
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
                              id="summary"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('Sumary')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.Sumary?.message}
                            </span>
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
                              type="datetime-local"
                              id="start-date"
                              value={method.startDateInput}
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('StartDate')}
                              onChange={method.handleStartDateInput}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.StartDate?.message}
                            </span>
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
                              type="datetime-local"
                              id="end-date"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('EndDate')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.EndDate?.message}
                            </span>
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
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              defaultValue={''}
                              {...method.register('Description')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.Description?.message}
                            </span>
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
                              id="address"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('Address')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.Address?.message}
                            </span>
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
                              id="city"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('City')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.City?.message}
                            </span>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Región
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              id="region"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                              {...method.register('Region')}
                            />
                            <span className="text-xs italic text-red-500">
                              {method.errors?.Region?.message}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => method.AddCodigo({})}
                      className="my-8 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Agregar Código
                    </button>
                  </div>

                  {/* Arreglo de códigos de influencers */}

                  {method.CodigosFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-7"
                    >
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="code-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Nombre de Código {index + 1}
                        </label>
                        <div className="mt-2">
                          <method.Controller
                            control={method.control}
                            name={`Codes.${index}.InfluencerCode`}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                {...field}
                              />
                            )}
                          />
                          {method.errors.Codes &&
                            method.errors.Codes[index] &&
                            method.errors.Codes[index].InfluencerCode && (
                              <span className="text-xs italic text-red-500">
                                {
                                  method.errors.Codes[index].InfluencerCode
                                    .message
                                }
                              </span>
                            )}
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
                          <method.Controller
                            control={method.control}
                            name={`Codes.${index}.InfluencerDiscount`}
                            defaultValue={0}
                            render={({ field }) => (
                              <input
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                {...field}
                              />
                            )}
                          />
                          {method.errors.Codes &&
                            method.errors.Codes[index] &&
                            method.errors.Codes[index].InfluencerDiscount && (
                              <span className="text-xs italic text-red-500">
                                {
                                  method.errors.Codes[index].InfluencerDiscount
                                    .message
                                }
                              </span>
                            )}
                        </div>
                      </div>
                      <div className="mt-8 sm:col-span-1">
                        <button
                          type="button"
                          onClick={() => method.RemoveCodigo(index)}
                          className="mb-2 rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => method.AddTipoTicket({})}
                      className="my-8 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Tipo de Ticket
                    </button>
                  </div>

                  {/* Arreglo de tipos de tickets, cantidades y valor */}
                  {method.TipoTicketsFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-7"
                    >
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="ticket-type"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Tipo de Ticket {index + 1}
                        </label>
                        <div className="mt-2">
                          <method.Controller
                            control={method.control}
                            name={`Tickets.${index}.TipoTicket`}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                {...field}
                              />
                            )}
                          />
                          {method.errors.Tickets &&
                            method.errors.Tickets[index] &&
                            method.errors.Tickets[index].TipoTicket && (
                              <span className="text-xs italic text-red-500">
                                {
                                  method.errors.Tickets[index].TipoTicket
                                    .message
                                }
                              </span>
                            )}
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
                          <method.Controller
                            control={method.control}
                            name={`Tickets.${index}.CantidadTicketTipo`}
                            defaultValue={0}
                            render={({ field }) => (
                              <input
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                {...field}
                              />
                            )}
                          />
                          {method.errors.Tickets &&
                            method.errors.Tickets[index] &&
                            method.errors.Tickets[index].CantidadTicketTipo && (
                              <span className="text-xs italic text-red-500">
                                {
                                  method.errors.Tickets[index]
                                    .CantidadTicketTipo.message
                                }
                              </span>
                            )}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="tickets-types"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Precio ($)
                        </label>
                        <div className="mt-2">
                          <method.Controller
                            control={method.control}
                            name={`Tickets.${index}.PrecioTicket`}
                            defaultValue={0}
                            render={({ field }) => (
                              <input
                                type="number"
                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(method.currencyFormat(e))
                                }
                              />
                            )}
                          />
                          {method.errors.Tickets &&
                            method.errors.Tickets[index] &&
                            method.errors.Tickets[index].PrecioTicket && (
                              <span className="text-xs italic text-red-500">
                                {
                                  method.errors.Tickets[index].PrecioTicket
                                    .message
                                }
                              </span>
                            )}
                        </div>
                      </div>
                      <div className="mt-8 sm:col-span-1">
                        <button
                          type="button"
                          onClick={() => method.RemoveTipoTicket(index)}
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
                      type="submit"
                      disabled={method.isSubmitting}
                      className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      {method.creatingEvent ? (
                        <SpinnerComponent />
                      ) : (
                        'Crear Evento'
                      )}
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

export default ModalEventos
