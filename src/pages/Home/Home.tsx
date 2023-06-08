import React from 'react'
// Componentes
import Herosection from '../../shared/components/Herosection/Herosection'
import Navbar from '../../shared/components/Navbar/Navbar'
import Carousel from '../../shared/components/Carousel/Carousel'
import CardList from '../../shared/components/EventCards/CardList'
import AboutUs from '../../shared/components/AboutUs/AboutUs'
import ContactUs from '../../shared/components/ContacUs/ContactUs'
import Footer from '../../shared/components/Footer/Footer'
// Assets
import backgroundImage from '../../assets/img/kaudal_landing.jpeg'
import { parseDate } from '../../shared/functions/parseDate'

const Home = () => {
  const months = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEPT',
    'OCT',
    'NOV',
    'DIC',
  ]
  const cards = [
    {
      date: '09/06/2023',
      parseDate: parseDate('09/06/2023'),
      time: '19:00',
      title: 'Evento de prueba 1',
      content:
        'Contenido de la tarjeta número 1. Para ver como se ve el texto.',
      img: `${process.env.PUBLIC_URL}/img/1.jpg`,
    },
    {
      date: '10/06/2023',
      parseDate: parseDate('10/06/2023'),
      time: '19:00',
      title: 'Evento de prueba 2',
      content: 'Contenido de la tarjeta 2 Contenido de la tarjeta 2.',
      img: `${process.env.PUBLIC_URL}/img/2.jpg`,
    },
    {
      date: '27/06/2023',
      parseDate: parseDate('27/06/2023'),
      time: '19:00',
      title: 'Evento de prueba 3',
      content:
        'Contenido de la tarjeta número 3. Para ver como se ve el texto.',
      img: `${process.env.PUBLIC_URL}/img/3.jpg`,
    },
    {
      date: '01/07/2023',
      parseDate: parseDate('01/07/2023'),
      time: '19:00',
      title: 'Evento de prueba 4',
      content:
        'Contenido de la tarjeta número 4. Para ver como se ve el texto.',
      img: `${process.env.PUBLIC_URL}/img/4.jpg`,
    },
    {
      date: '08/07/2023',
      parseDate: parseDate('08/07/2023'),
      time: '19:00',
      title: 'Evento de prueba 5',
      content:
        'Contenido de la tarjeta número 5. Para ver como se ve el texto.',
      img: `${process.env.PUBLIC_URL}/img/5.jpg`,
    },
    {
      date: '11/07/2023',
      parseDate: parseDate('11/07/2023'),
      time: '19:00',
      title: 'Evento de prueba 6',
      content:
        'Contenido de la tarjeta número 6. Para ver como se ve el texto.',
      img: `${process.env.PUBLIC_URL}/img/1.jpg`,
    },
    {
      date: '22/07/2023',
      parseDate: parseDate('22/07/2023'),
      time: '19:00',
      title: 'Evento de prueba 7',
      content:
        'Contenido de la tarjeta número 7. Para ver como se ve el texto.',
      img: `${process.env.PUBLIC_URL}/img/2.jpg`,
    },
  ]

  const today = new Date()
  const eventoMasCercano = cards.reduce((cercano, actual) => {
    const nearestDiff = Math.abs(cercano.parseDate.getTime() - today.getTime())
    const currentDiff = Math.abs(actual.parseDate.getTime() - today.getTime())
    return currentDiff < nearestDiff ? actual : cercano
  })

  return (
    <>
      <div
        className="bg-cover"
        style={{
          backgroundImage: `linear-gradient(to top left, rgba(233, 87, 29, 0.8), rgba(90, 34, 139, 0.8)), url(${eventoMasCercano.img})`,
        }}
      >
        <Navbar />
        <Herosection events={cards} />
      </div>
      <Carousel year={2023} months={months} />
      <CardList cards={cards} />
      <AboutUs
        backgroundImage={backgroundImage}
        title="Cooperativa de Trabajo Kaudal"
        description="Radicada principalmente en la Región de Magallanes y Antártica Chilena, dedicada a la creación, formación y gestión en el ámbito artístico-cultural.
        Sus socixs somos trabajadoras y trabajadores con vasta trayectoria y experiencia en diversas organizaciones y espacios culturales, donde hemos formado parte de proyectos y equipos de trabajo multidisciplinares, colaborando con diversos agentes artísticos a nivel local, nacional e internacional, en redes de asociatividad autogestionadas y sostenidas en el tiempo.
        Desde los inicios de Kaudal hemos reconocido la necesidad de las comunidades de contar con infraestructura cultural independiente, administrada y gestionada por personas y organizaciones verdaderamente conocedoras de esta actividad.
        Soñamos con una ciudad cultural y creativa, con una oferta permanente de actividades artísticas de excelencia que contribuyan a un desarrollo cultural real, profesionalizando al sector artístico y garantizando una mejor calidad de vida para lxs habitantes del territorio austral.
        "
      />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
