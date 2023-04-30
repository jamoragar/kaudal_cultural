import React from "react";
import {
  RiSearchLine,
  RiMapPinRangeLine,
  RiFilter3Line,
  RiArrowDownSLine,
} from "react-icons/ri";

const Asistentes = () => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Asistentes a eventos</h1>
      </div>
      {/* criteria */}
      <div className="mb-6 grid grid-cols-1 items-center gap-4 md:grid-cols-4">
        <form className="col-span-1 md:col-span-2">
          <div className="relative w-full">
            <RiSearchLine className="absolute left-2 top-3 text-orange-600" />
            <input
              type="text"
              className="w-full bg-white py-2 pl-8 pr-4  outline-none"
              placeholder="Buscar"
            />
          </div>
        </form>
        <form className="col-span-1">
          <div className="relative w-full">
            <RiMapPinRangeLine className="absolute left-2 top-3 text-orange-600" />
            <select
              className="w-full bg-white py-[10px] pl-8 pr-4  outline-none"
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
              className="w-full bg-white py-2 pl-8 pr-4  outline-none"
              placeholder="Filtros"
            />
            <span className="absolute right-2 top-[7px] rounded-full bg-orange-600 py-1 px-[9px] text-sm text-white">
              4
            </span>
          </div>
        </form>
      </div>
      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-500">
          Se encontraron <span className="font-bold text-orange-600">264</span>{" "}
          asistentes!
        </p>
        <p className="flex items-center gap-2">
          Ordenar por:{" "}
          <span className="font-bold text-orange-600 hover:cursor-pointer">
            Nombre
          </span>
          <RiArrowDownSLine />
        </p>
      </div>
    </>
  );
};

export default Asistentes;
