import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  github?: string;
}

const Card: React.FC<CardProps> = ( { title, description, github } ) => {
  return (
    <button className="bg-[#eceff4] transition-all flex hover:-translate-y-2 hover:-translate-x-2 rounded-3xl shadow-lg w-64 h-96">
      <div className="grid grid-rows-5 p-5">
        <div className="text-3xl font-bold">
          <h1>{title}</h1>
        </div>
        <div className="row-span-3 py-5">
          <p>{description}</p>
        </div>
        <div className="">
          <a href={github}>github</a>
        </div>
      </div>
    </button>
  );
}

export default Card;
