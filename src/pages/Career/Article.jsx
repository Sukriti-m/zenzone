import React from "react";

const Article = ({ title, desc, img, list, reverse, listStyle }) => {
  return (
    <section className="mb-36">
      <div
        className={`flex gap-14 ${reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="basis-1/2 w-1/2 space-y-5 pt-8">
          <h2 className="text-5xl tracking-wide">{title}</h2>
          <p>{desc}</p>
          <ul className={`space-y-3 ${listStyle && "list-disc pl-8"}`}>
            {list.map((item) => (
              <li>
                {item?.embed ? (
                  <a
                    className="hover:text-gray-600 text-gray-400"
                    href={item?.embed}
                  >
                    {item.desc}
                  </a>
                ) : (
                  <span>{item.desc}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <img className="basis-1/2 w-1/2" src={img} alt={title} />
      </div>
    </section>
  );
};

export default Article;
