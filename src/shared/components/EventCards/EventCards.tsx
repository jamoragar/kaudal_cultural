import React from 'react'
import { numberToMonth } from '../../functions/numberToMonth'

interface CardProps {
  date: string
  title: string
  content: string
  img_url: string
  time: string
}

const Card: React.FC<CardProps> = ({ date, title, content, img_url, time }) => {
  const splitedDate = date.split('/')
  const day = splitedDate[0]
  const month = splitedDate[1]
  const monthNumber = numberToMonth(parseInt(month))

  return (
    <div className="p-1 md:w-1/2 lg:w-1/3">
      <div className="relative h-full overflow-hidden border-2 border-gray-100">
        <img
          className="h-full w-full object-cover "
          src={img_url}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-row items-center justify-between p-2">
          {/* <div className="inline-block px-3 py-1 mr-2">
                {date}
              </div> */}
          <div
            className="mr-2 inline-block max-w-[60%] rounded-md bg-gray-900 bg-opacity-60 px-2"
            title={content}
          >
            <div className="inline-block text-xl font-bold text-white">
              {title}
            </div>
            <p className="truncate text-sm text-white">{content}</p>
          </div>
          <button className="float-right rounded-full bg-orange-500 py-2 px-4 text-xs font-bold text-white hover:bg-orange-700">
            Comprar Tickets
          </button>
        </div>
        {/* <div className="p-6 absolute bottom-0 left-0 right-0 ">
          <div className="text-gray-900 text-white font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-white text-base">{content}</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white text-xs font-bold py-2 px-4 rounded-full mt-4 float-right">
            Comprar Tickets
          </button>
        </div> */}
        <div className="absolute top-0 left-0 px-6 pb-2">
          <span className="mr-2 inline-block bg-gray-200 px-1 py-1 text-sm font-semibold text-gray-700">
            <h2>{day}</h2> <br />
            {monthNumber} <br />
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
