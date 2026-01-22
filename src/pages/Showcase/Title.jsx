import React from "react";

const Title = ({ className = "", title, content }) => {
  return (
    <div>
      <div
        className={`flex justify-center items-center flex-wrap ${className}`}
      >
        <h2 className="text-xl lg:text-2xl font-bold w-full text-center mb-10">
          {title}
        </h2>
        <p className="text-base lg:text-lg font-medium text-thGray text-center">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Title;
