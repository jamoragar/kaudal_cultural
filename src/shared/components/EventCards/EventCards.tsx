import React from "react";

interface CardProps {
  date: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ date, title, content }) => {
  return (
    <div className="p-1 md:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-100 overflow-hidden relative">
        <div className="p-6">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
        <div className="px-6 pb-2 absolute top-0 left-0">
          <span className="inline-block bg-gray-200 px-1 py-1 text-sm font-semibold text-gray-700 mr-2">
            26 <br />
            MAY <br />
            2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
