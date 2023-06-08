import React from 'react'
import Form from '../Form/Form'

interface ModalProps {
  content: any
  isVisible: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ content, isVisible, onClose }) => {
  console.log(content)
  if (!isVisible) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="flex h-full w-4/5 flex-col overflow-y-auto overflow-x-hidden">
        <button
          onClick={() => onClose()}
          className="place-self-end text-xl text-white"
        >
          X
        </button>
        <div className="bg-white p-2">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
              <div className="col-span-6">
                <section>
                  <div className="container px-4">
                    <div>
                      <span className="text-4xl">Información del Evento</span>
                    </div>
                    <div className="text-justify-center mt-8">
                      <span className="text-2xl">{content.title}</span>
                      <ul className="mt-4">
                        <li className="py-2 text-left">
                          <span className="font-medium">Descripción: </span>
                          {content.content}
                        </li>
                        <li className="py-2 text-left">
                          <span className="font-medium">Fecha: </span>
                          {content.date}
                        </li>
                        <li className="py-2 text-left">
                          <span className="font-medium">Hora: </span>
                          {`${content.time}hrs.`}
                        </li>
                        <li className="py-2 text-left">
                          <span className="font-medium">Ubicación: </span>
                          O’Higgins #655 (Espacio de Artes Escénicas Circo del
                          Sur).
                        </li>
                        <li className="py-2 text-left">
                          <span className="font-medium">Tipo de Entrada: </span>
                          General
                        </li>
                        <li className="py-2 text-left">
                          <span className="font-medium">
                            Valor del Ticket:{' '}
                          </span>
                          $2.000
                        </li>
                        {/* <li className="text-left py-2">
                          <span className="font-medium">Categoría: </span>Música
                          en Vivo, Circo.
                        </li> */}
                        {/* <li className="text-left py-2">
                          <span className="font-medium">
                            Cantidad de Asistentes:
                          </span>
                          100
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-span-6 items-center">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
