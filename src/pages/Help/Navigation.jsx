import React from "react";
import { NavLink, useHref } from "react-router-dom";

const Navigation = ({ data }) => {
  const currentPath = useHref();
  const path =
    currentPath.split("/")[2] === undefined ? "" : currentPath.split("/")[2];

  return (
    <>
      {data.map((sec) => (
        <section className="space-y-3 mb-7" key={sec.id}>
          <h1 className="font-bold text-black">{sec.title}</h1>
          <ul className="list-none space-y-3">
            {sec.items.map((element, index) => (
              <li
                className={`px-2 py-2.5 rounded-md cursor-pointer transition-colors border-l-4 ${
                  path === element.dest
                    ? "bg-gray-100 text-black border-gray-500"
                    : "text-gray-500 border-transparent hover:bg-gray-100"
                }`}
                key={index}
              >
                <NavLink className="font-semibold" to={element.dest}>
                  {element.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default Navigation;
