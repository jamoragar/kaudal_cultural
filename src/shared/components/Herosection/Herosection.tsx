import React, { useState } from 'react'
import Countdown from '../Countdown/Countdown'
import Modal from '../Modal/Modal'

function Herosection({ events }) {
  const today = new Date()

  const eventoMasCercano = events.reduce((cercano, actual) => {
    const nearestDiff = Math.abs(cercano.parseDate.getTime() - today.getTime())
    const currentDiff = Math.abs(actual.parseDate.getTime() - today.getTime())
    return currentDiff < nearestDiff ? actual : cercano
  })

  const dateToCountdown = eventoMasCercano.date.split('/')
  const formatedDateToCountdown =
    dateToCountdown[1] + '/' + dateToCountdown[0] + '/' + dateToCountdown[2]

  const [showModal, setShowModal] = useState(false)

  return (
    <section>
      <div>
        <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12 ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white dark:text-white md:text-5xl lg:text-6xl">
            {eventoMasCercano.title}
          </h1>
          {/* <h2 className="mb-4 text-2xl font-extrabold italic leading-none tracking-tight text-white dark:text-white md:text-5xl lg:text-6xl">
            Charly García
          </h2> */}
          <div className="flex items-center justify-center">
            {/* MM/DD/YYYY HH:mm:SS */}
            <Countdown
              date={`${formatedDateToCountdown} ${eventoMasCercano.time}:00`}
            />
          </div>
          <p className="mb-8 text-lg font-normal text-white dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            {eventoMasCercano.content}
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
            <a
              href="#"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 py-3 px-5 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Ver evento
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            {/* <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Ver Video
          </a> */}
          </div>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        content={eventoMasCercano}
        onClose={() => setShowModal(false)}
      />
    </section>
  )
}

export default Herosection
