import React from 'react'
import logo from './logo.svg'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import ClientsByEvent from './pages/ClientsByEvent/ClientsByEvent'
import Carousel from './shared/components/Carousel/Carousel'
import CardList from './shared/components/EventCards/CardList'
import './App.css'
import Eventos from './pages/Dashboard/Eventos/Eventos'
import Asistentes from './pages/Dashboard/Asistentes/Asistentes'
import PuntoVenta from './pages/Dashboard/PuntoVenta/PuntoVenta'
import Ventas from './pages/Dashboard/Ventas/Ventas'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administracion/:uid/*" element={<Dashboard />}>
          <Route path="" element={<Eventos />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="asistentes" element={<Asistentes />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="pos" element={<PuntoVenta />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Carousel year={2023} months={months} />
      <CardList cards={cards}/> */}
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nada que ver por acá</h2>
      <p>
        <Link to="/">Ir a la página de inicio.</Link>
      </p>
    </div>
  )
}

export default App
