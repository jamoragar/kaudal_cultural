import React, { useState } from 'react'
import Card from './EventCards'

interface CardData {
  date: string
  img: string
  title: string
  content: string
  time: string
}

interface CardListProps {
  cards: CardData[]
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [cardsPerPage] = useState<number>(6)

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

  const pageNumbers: Array<any> = []
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setCurrentPage(Number((event.target as HTMLAnchorElement).id))
  }

  const renderCards = () => {
    return currentCards.map((card: CardData, index: number) => {
      return (
        <Card
          key={index}
          img_url={card.img}
          date={card.date}
          title={card.title}
          content={card.content}
          time={card.time}
        />
      )
    })
  }

  const renderPageNumbers = () => {
    return pageNumbers.map((number) => {
      return (
        <li key={number} className="inline-block">
          <a
            className={`mx-1 rounded bg-gray-200 py-2 px-4 font-bold text-gray-800 hover:bg-gray-300 ${
              currentPage === number ? 'bg-gray-300' : ''
            }`}
            href="/"
            id={number.toString()}
            onClick={handleClick}
          >
            {number}
          </a>
        </li>
      )
    })
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">{renderCards()}</div>
      <ul className="my-2 flex list-none rounded pl-0">
        {renderPageNumbers()}
      </ul>
    </div>
  )
}

export default CardList
