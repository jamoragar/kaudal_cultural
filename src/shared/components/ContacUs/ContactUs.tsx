import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormDataContactUs } from '../types/FormDataContactUs'
import { contactUsSchema } from '../../validations/contactUsValidation'

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataContactUs>({ resolver: yupResolver(contactUsSchema) })

  const onSubmit = (data: FormDataContactUs) => {
    console.log(data)
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-wrap">
        <div className="px-4 py-10 lg:w-1/2">
          <div className="mb-10 text-black">
            <h2 className="mb-4 text-4xl font-bold">Información de Contacto</h2>
            <p className="mb-4">
              Dirección: Libertador Bernardo O'Higgins 655, Punta Arenas
            </p>
            <p className="mb-4">Teléfono: +56 9 5908 8155</p>
            <p className="mb-4">
              Correo Electrónico: contato@kaudalcultural.cl
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/KaudalCultural"
                className="text-black hover:text-gray-500"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="facebook"
                >
                  <path
                    fill="#1976D2"
                    d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
                  ></path>
                  <path
                    fill="#FAFAFA"
                    fillRule="evenodd"
                    d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kaudalcultural/"
                className="text-black hover:text-gray-500"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="instagram"
                >
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  ></path>
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  ></path>
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#FFC107"></stop>
                    <stop offset=".507" stopColor="#F44336"></stop>
                    <stop offset=".99" stopColor="#9C27B0"></stop>
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 py-10 lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-black">
            Formulario de Contacto
          </h1>
          <form
            className="rounded-lg bg-white p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register('name')}
                className="w-full rounded border border-gray-500 px-4 py-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register('email')}
                className="w-full rounded border border-gray-500 px-4 py-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                {...register('message')}
                className="w-full rounded border border-gray-500 px-4 py-2"
                rows={4}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:bg-blue-700"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
