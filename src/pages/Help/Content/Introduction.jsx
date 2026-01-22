import React from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    emoji: "👋",
    header: "ZenZone Basics",
    list: [
      { title: "The Basics", dest: "the-basics" },
      { title: "Setting Up Your Environment", dest: "environment" },
    ],
  },
  {
    id: 2,
    emoji: "💻",
    header: "ZenZone Application",
    list: [
      { title: "Mac Desktop App", dest: "mac" },
      { title: "Windows Desktop App", dest: "desktop" },
    ],
  },
];

export const Card = ({ emoji, header, list }) => {
  return (
    <div>
      <div className="flex justify-center items-center lg:h-28 h-56 bg-gray-200 rounded-md mb-12">
        <span className="lg:text-4xl text-8xl">{emoji}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-5">{header}</h2>
      <ul className="list-disc pl-7">
        {list.map((item, index) => (
          <Link to={`introduction/${item.dest}`}>
            <li key={index}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Introduction = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-2 gap-4 border-b-2 pb-7">
        {data.map((card) => (
          <Card
            key={card.id}
            emoji={card.emoji}
            header={card.header}
            list={card.list}
          />
        ))}
      </section>
      <section></section>
    </div>
  );
};

export default Introduction;
