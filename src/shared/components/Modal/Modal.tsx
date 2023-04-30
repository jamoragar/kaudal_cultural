import React from "react";
import Form from "../Form/Form";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col w-4/5 h-full overflow-x-hidden overflow-y-auto">
        <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
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
                    <div className="mt-8 text-justify-center">
                      <span className="text-2xl">
                        "TRIBUTO CIRCO Vol. 1 - Charly García" <br />
                        Evento privado.
                      </span>
                      <ul className="mt-4">
                        <li className="text-left py-2">
                          <span className="font-medium">Descripción: </span>
                          Espectáculo escénico que reúne la música en vivo de
                          Piso 9 y el talento de lxs artistas circenses de Circo
                          del Sur.
                        </li>
                        <li className="text-left py-2">
                          <span className="font-medium">Fecha: </span>Sábado 01
                          de Abril.
                        </li>
                        <li className="text-left py-2">
                          <span className="font-medium">Hora: </span>20.00hrs.
                        </li>
                        <li className="text-left py-2">
                          <span className="font-medium">Ubicación: </span>
                          O’Higgins #655 (Espacio de Artes Escénicas Circo del
                          Sur).
                        </li>
                        <li className="text-left py-2">
                          <span className="font-medium">Tipo de Entrada: </span>
                          No aplica.
                        </li>
                        <li className="text-left py-2">
                          <span className="font-medium">
                            Valor del Ticket:{" "}
                          </span>
                          $0
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
  );
};

export default Modal;
