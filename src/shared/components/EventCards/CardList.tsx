import React, { useState } from "react";
import Card from "./EventCards";

interface CardData {
  date: string;
  title: string;
  content: string;
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(6);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers: Array<any> = [];
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setCurrentPage(Number((event.target as HTMLAnchorElement).id));
  };

  const renderCards = () => {
    return currentCards.map((card: CardData, index: number) => {
      return (
        <Card
          key={index}
          date={card.date}
          title={card.title}
          content={card.content}
        />
      );
    });
  };

  const renderPageNumbers = () => {
    return pageNumbers.map((number) => {
      return (
        <li key={number} className="inline-block">
          <a
            className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 mx-1 rounded ${
              currentPage === number ? "bg-gray-300" : ""
            }`}
            href="/"
            id={number.toString()}
            onClick={handleClick}
          >
            {number}
          </a>
        </li>
      );
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap -mx-4">{renderCards()}</div>
      <ul className="flex pl-0 rounded list-none my-2">
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

export default CardList;
