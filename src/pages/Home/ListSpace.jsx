import React from "react";
import { Link } from "react-router-dom";

const ListSpace = ({ Space_filter, onLinkClick }) => {
  return (
    <div>
      <div className="lg:px-20 px-5">
        {Space_filter.map(({ SpaceName, author, imgtag, id }) => (
          <Link key={id} to={`/zenzonespace?space=${id}`} onClick={onLinkClick}>
            <div className="flex mb-6 cursor-pointer">
              <div className="w-fit "> {imgtag}</div>
              <div className="ml-5 leading-5">
                <p className="text-lg lg:text-xl font-medium lg:font-semibold w-52 lg:w-56 lg:mt-3">
                  {SpaceName}
                </p>
                <span className="text-gray-500 lg:text-base lg:font-medium">
                  {author}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-white pt-10 pb-16 px-14 rounded-2xl shadow-lg w-[24.875rem] h-[19.75rem] fixed top-40 right-0 mr-14 hidden lg:block">
        <h1 className="text-2xl font-bold mt-5 mb-2 max-w-[14rem]">
          Can't find what you are looking for?
        </h1>
        <p className="text-sm text-thBlack font-medium max-w-[14rem]">
          Submit your own content for a chance to be featured on ZenZone.
        </p>
        <Link to="/showcase" onClick={onLinkClick}>
          <div className="flex bg-[#455bff] items-center justify-center py-3 rounded-2xl mt-4 ">
            <p className=" text-white text-center text-sm font-medium ">
              Showcase
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ListSpace;
