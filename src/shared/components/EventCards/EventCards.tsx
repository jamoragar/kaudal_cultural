import React from "react";

interface CardProps {
  date: string;
  title: string;
  content: string;
  img_url: string;
}

const Card: React.FC<CardProps> = ({ date, title, content, img_url }) => {
  return (
    <div className="p-1 md:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-100 overflow-hidden relative">
        <img className="w-full h-64 object-cover " src={img_url} alt={title} />
        <div className="flex flex-row justify-between items-center p-2 absolute bottom-0 left-0 right-0">
              {/* <div className="inline-block px-3 py-1 mr-2">
                {date}
              </div> */}
              <div className="inline-block px-2 mr-2 bg-gray-900 bg-opacity-60 rounded-md">
                <div className="inline-block text-gray-900 text-white font-bold text-xl">{title}</div>
                <p className="text-gray-700 text-white text-sm">{content}</p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-700 text-white text-xs font-bold py-2 px-4 rounded-full float-right">
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
