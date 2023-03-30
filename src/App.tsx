import React from "react";
import logo from "./logo.svg";
import Navbar from "./shared/components/Navbar/Navbar";
import Herosection from "./shared/components/Herosection/Herosection";
import Carousel from "./shared/components/Carousel/Carousel";
import CardList from './shared/components/EventCards/CardList';
import "./App.css";


const months = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEPT','OCT','NOV','DIC'];
const cards = [
  {
    date: '27/03/2023',
    title: 'Título de la tarjeta 1',
    content: 'Contenido de la tarjeta 1',
    img: `${process.env.PUBLIC_URL}/img/1.jpg`
  },
  {
    date: '26/03/2023',
    title: 'Título de la tarjeta 2',
    content: 'Contenido de la tarjeta 2',
    img: `${process.env.PUBLIC_URL}/img/2.jpg`
  },
  {
    date: '26/03/2023',
    title: 'Título de la tarjeta 2',
    content: 'Contenido de la tarjeta 2',
    img: `${process.env.PUBLIC_URL}/img/3.jpg`
  },
  {
    date: '26/03/2023',
    title: 'Título de la tarjeta 2',
    content: 'Contenido de la tarjeta 2',
    img: `${process.env.PUBLIC_URL}/img/4.jpg`
  },
  {
    date: '26/03/2023',
    title: 'Título de la tarjeta 2',
    content: 'Contenido de la tarjeta 2',
    img: `${process.env.PUBLIC_URL}/img/5.jpg`
  },
  {
    date: '26/03/2023',
    title: 'Título de la tarjeta 2',
    content: 'Contenido de la tarjeta 2',
    img: `${process.env.PUBLIC_URL}/img/1.jpg`
  },
  {
    date: '26/03/2023',
    title: 'Título de la tarjeta 2',
    content: 'Contenido de la tarjeta 2',
    img: `${process.env.PUBLIC_URL}/img/2.jpg`
  }
];

function App() {
  return (
    <div className="App">
      <div className="bg-cover bg-hero-pattern from-orange-600 to-purple-700">
        <Navbar />
        <Herosection />
      </div>
      <Carousel year={2023} months={months} />
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
