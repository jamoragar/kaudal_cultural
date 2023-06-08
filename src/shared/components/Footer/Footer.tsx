import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4">
        <div className="w-full lg:w-1/3">
          <span className="text-xl font-bold">
            Cooperativa de Trabajo Kaudal Cultural®
          </span>
        </div>
        <div className="mt-4 w-full lg:mt-0 lg:w-1/2">
          <div className="flex justify-end">
            <span className="mr-4">
              &copy; Desarrollado con ❤️ por Javier Moraga
            </span>
            <span className="mx-4 border-r border-gray-500"></span>
            <a href="#" className="mr-4">
              Términos y Condiciones
            </a>
            <span className="mx-4 border-r border-gray-500"></span>
            <a href="#" className="mr-4">
              Política de Reembolso
            </a>
            <span className="mx-4 border-r border-gray-500"></span>
            <a href="#" className="mr-4">
              <svg
                className="inline-block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12 L3 12"></path>
                <path d="M15 6 L21 12 15 18"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
