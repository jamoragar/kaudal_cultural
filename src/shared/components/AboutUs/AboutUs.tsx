import React from 'react'

interface AboutUsProps {
  backgroundImage: string
  title: string
  description: string
}

const AboutUs: React.FC<AboutUsProps> = ({
  backgroundImage,
  title,
  description,
}) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cambia el valor de transparencia según tus preferencias
  }
  return (
    <section
      className=" relative mt-8 flex h-screen max-h-96 flex-col items-center justify-center bg-cover bg-[center_top_-25rem] bg-no-repeat text-white"
      style={sectionStyle}
    >
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-brightness-50">
        <h1 className="mb-8 text-center text-4xl font-bold">{title}</h1>
        <p className="px-16 text-center text-lg ">{description}</p>
      </div>
    </section>
  )
}

export default AboutUs
