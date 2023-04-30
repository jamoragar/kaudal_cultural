import React, { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import {
  RiTeamLine,
  RiCalendarEventLine,
  RiMoneyDollarBoxLine,
  RiFileListLine,
  RiLogoutBoxRLine,
  RiMenu3Fill,
  RiCloseLine,
  RiShieldUserLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Eventos from "./Eventos/Eventos";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const { uid } = useParams();

  return (
    <>
      <div className="grid-col-1 grid min-h-screen lg:grid-cols-6">
        <div
          className={`fixed top-0 z-50 w-[70%] md:w-[40%] lg:static lg:w-full ${
            sidebar ? "-left-0" : "-left-full"
          } col-span-1 h-full w-full overflow-y-scroll bg-white p-4 transition-all`}
        >
          {/* Logo */}
          <div className="p-4 text-center">
            <h1 className="font-bold uppercase tracking-[2px]">
              Administración
            </h1>
          </div>
          {/* Menu */}
          <div className="flex h-full flex-col justify-between">
            <nav>
              <ul>
                <li>
                  <Link
                    to={`/administracion/${uid}/eventos`}
                    className="flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <RiCalendarEventLine />
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/administracion/${uid}/asistentes`}
                    className="flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <RiTeamLine />
                    Asistentes
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/administracion/${uid}/ventas`}
                    className="flex items-center gap-4 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <RiMoneyDollarBoxLine />
                    Ventas
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    to={`/administracion/${uid}/pos`}
                    className="flex items-center gap-2 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <RiFileListLine />
                    Venta Presencial
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="fixed bottom-0 flex flex-col gap-4">
              <Link
                to="#"
                className="flex items-center gap-2 rounded-lg p-4 font-semibold text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <RiLogoutBoxRLine />
                Cerrar Sesión
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={() => setSidebar(!sidebar)}
          className="fixed bottom-4 right-4 z-40 block rounded-full bg-orange-400 p-2 text-2xl text-white lg:hidden"
        >
          {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
        <div className="col-span-5">
          {/* Header */}
          <header className="flex w-full flex-col items-center justify-between gap-4 p-4 md:flex-row md:px-8 lg:px-12">
            {/* Search */}
            {/* <form className="w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
          <div className="relative w-full">
            <RiSearchLine className="absolute left-2 top-3" />
            <input
              type="text"
              className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
              placeholder="Buscar"
            />
          </div>
        </form> */}
            {/* Notifications */}
            <nav className="flex w-full justify-center md:w-[60%] md:justify-end lg:w-[100%]">
              <ul className="flex items-center gap-2">
                <li>
                  <a href="#">
                    <RiShieldUserLine />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    Kaudal Cultural <RiArrowDownSLine />
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="bg-gray-100 p-4 md:p-8 lg:p-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
