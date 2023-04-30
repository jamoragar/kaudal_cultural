import React, { useRef, useState } from 'react'
import {
  RiShieldUserLine,
  RiArrowDownSLine,
  RiChatNewLine,
  RiSearchLine,
  RiFilter3Line,
  RiCloseLine,
  RiMapPinRangeLine,
  RiDropboxLine,
} from 'react-icons/ri'
import UseModal from '../../../shared/components/UseModal/UseModal'

const Eventos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Content */}
      {/* Title */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Eventos</h1>
        <div className="flex items-center gap-2 rounded-2xl bg-green-300 p-4 shadow-lg hover:cursor-pointer">
          <RiChatNewLine />
          <button onClick={handleOpenModal}>Crear Evento</button>
        </div>
      </div>
      {/* criteria */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
          <form className="col-span-1 md:col-span-2">
            <div className="relative w-full">
              <RiSearchLine className="absolute left-2 top-3 text-orange-600" />
              <input
                type="text"
                className="bg-white py-2 pl-8 pr-4 outline-none  w-full"
                placeholder="Buscar"
              />
            </div>
          </form>
          <form className="col-span-1">
            <div className="relative w-full">
              <RiMapPinRangeLine className="absolute left-2 top-3 text-orange-600" />
              <select
                className="bg-white py-[10px] pl-8 pr-4 outline-none  w-full"
                placeholder="Buscar"
              >
                <option value="1">Anywhere</option>
              </select>
            </div>
          </form>
          <form className="col-span-1">
            <div className="relative w-full">
              <RiFilter3Line className="absolute left-2 top-3 text-orange-600" />
              <input
                type="text"
                className="bg-white py-2 pl-8 pr-4 outline-none  w-full"
                placeholder="Filtros"
              />
              <span className="absolute text-sm right-2 top-[7px] bg-orange-600 text-white py-1 px-[9px] rounded-full">
                4
              </span>
            </div>
          </form>
        </div> */}
      {/* Tags */}
      {/* <div className="flex items-center flex-wrap gap-4 mb-20">
          <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
            <button className="bg-orange-100 p-1 rounded-full text-orange-600 text-xs">
              <RiCloseLine />
            </button>
            <span className="text-gray-500">Diseño</span>
          </span>
          <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
            <button className="bg-orange-100 p-1 rounded-full text-orange-600 text-xs">
              <RiCloseLine />
            </button>
            <span className="text-gray-500">Arte</span>
          </span>
          <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
            <button className="bg-orange-100 p-1 rounded-full text-orange-600 text-xs">
              <RiCloseLine />
            </button>
            <span className="text-gray-500">Negocios</span>
          </span>
          <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
            <button className="bg-orange-100 p-1 rounded-full text-orange-600 text-xs">
              <RiCloseLine />
            </button>
            <span className="text-gray-500">B2B</span>
          </span>
          <button className="text-gray-400 ml-4">Clear All</button>
        </div> */}
      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-500">
          Se encontraron <span className="font-bold text-orange-600">522</span>{' '}
          eventos!
        </p>
        <p className="flex items-center gap-2">
          Ordenar por:{' '}
          <span className="font-bold text-orange-600 hover:cursor-pointer">
            Fecha
          </span>
          <RiArrowDownSLine />
        </p>
      </div>
      {/* Cards */}
      <a
        href="#"
        className="mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-orange-300 md:flex-row"
      >
        {/* Icon */}
        <div className="flex w-full items-center justify-start md:w-[10%] md:justify-center">
          <RiDropboxLine className="rounded-md bg-orange-100 text-7xl text-orange-600" />
        </div>
        {/* Title */}
        <div className="w-full md:w-[70%]">
          <h1 className="mb-2 flex items-center gap-4 text-xl">
            UX Designer{' '}
            <span className="bg-orange-100 py-1 px-2 text-xs font-bold text-orange-600">
              Remote
            </span>
            <span className="bg-green-100 py-1 px-2 text-xs font-bold text-green-600">
              Sketch
            </span>
          </h1>
          <p className="flex items-center text-gray-500">
            Dropbox ---- Warzawa
          </p>
        </div>
        {/* Date */}
        <div className="flex w-full flex-col items-end md:w-[20%]">
          <h3 className="mb-2 text-xl text-gray-500">8.8 - 13.7k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>
      <a
        href="#"
        className="mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-orange-300 md:flex-row"
      >
        {/* Icon */}
        <div className="flex w-full items-center justify-start md:w-[10%] md:justify-center">
          <RiDropboxLine className="rounded-md bg-orange-100 text-7xl text-orange-600" />
        </div>
        {/* Title */}
        <div className="w-full md:w-[70%]">
          <h1 className="mb-2 flex items-center gap-4 text-xl">
            UX Designer{' '}
            <span className="bg-orange-100 py-1 px-2 text-xs font-bold text-orange-600">
              Remote
            </span>
            <span className="bg-green-100 py-1 px-2 text-xs font-bold text-green-600">
              Sketch
            </span>
          </h1>
          <p className="flex items-center text-gray-500">
            Dropbox ---- Warzawa
          </p>
        </div>
        {/* Date */}
        <div className="flex w-full flex-col items-end md:w-[20%]">
          <h3 className="mb-2 text-xl text-gray-500">8.8 - 13.7k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>
      <a
        href="#"
        className="mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-orange-300 md:flex-row"
      >
        {/* Icon */}
        <div className="flex w-full items-center justify-start md:w-[10%] md:justify-center">
          <RiDropboxLine className="rounded-md bg-orange-100 text-7xl text-orange-600" />
        </div>
        {/* Title */}
        <div className="w-full md:w-[70%]">
          <h1 className="mb-2 flex items-center gap-4 text-xl">
            UX Designer{' '}
            <span className="bg-orange-100 py-1 px-2 text-xs font-bold text-orange-600">
              Remote
            </span>
            <span className="bg-green-100 py-1 px-2 text-xs font-bold text-green-600">
              Sketch
            </span>
          </h1>
          <p className="flex items-center text-gray-500">
            Dropbox ---- Warzawa
          </p>
        </div>
        {/* Date */}
        <div className="flex w-full flex-col items-end md:w-[20%]">
          <h3 className="mb-2 text-xl text-gray-500">8.8 - 13.7k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>
      <a
        href="#"
        className="mb-4 flex w-full flex-col gap-8 rounded-2xl border-2 border-transparent bg-white p-8 drop-shadow-lg transition-all hover:border-orange-300 md:flex-row"
      >
        {/* Icon */}
        <div className="flex w-full items-center justify-start md:w-[10%] md:justify-center">
          <RiDropboxLine className="rounded-md bg-orange-100 text-7xl text-orange-600" />
        </div>
        {/* Title */}
        <div className="w-full md:w-[70%]">
          <h1 className="mb-2 flex items-center gap-4 text-xl">
            UX Designer{' '}
            <span className="bg-orange-100 py-1 px-2 text-xs font-bold text-orange-600">
              Remote
            </span>
            <span className="bg-green-100 py-1 px-2 text-xs font-bold text-green-600">
              Sketch
            </span>
          </h1>
          <p className="flex items-center text-gray-500">
            Dropbox ---- Warzawa
          </p>
        </div>
        {/* Date */}
        <div className="flex w-full flex-col items-end md:w-[20%]">
          <h3 className="mb-2 text-xl text-gray-500">8.8 - 13.7k PLN</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </a>
      {/* Implementar Formulario reactivo con codigo de influencer y % de decto */}
      <UseModal
        open={isModalOpen}
        setOpen={handleCloseModal}
        cancelButtonRef={cancelButtonRef}
      />
    </>
  )
}

export default Eventos
