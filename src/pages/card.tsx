import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  github?: string;
}

const Card: React.FC<CardProps> = ( { title, description, github } ) => {
  return (
    <div className="bg-[#eceff4] transition-all flex hover:-translate-y-2 hover:-translate-x-2 rounded-3xl shadow-lg w-64 h-96">
      <div className="grid grid-rows-5 p-5 items-center">
        <div className="justify-center items-center text-4xl font-bold">
          <h1>{title}</h1>
        </div>
        <div className="row-span-3">
          <p>{description}</p>
        </div>
        <div className="">
          <a href={github}>github</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
