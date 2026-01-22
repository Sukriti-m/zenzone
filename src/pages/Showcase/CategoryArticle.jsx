import React from "react";
import Images from "../../assets/images";
const CategoryArticle = ({ tittle, img }) => {
  return (
    <div className="flex items-end justify-center w-[150px] lg:w-[250px] h-[155px] lg:h-[250px] relative cursor-pointer">
      {img}
      <div className="w-full h-full absolute bg-black-before rounded-xl"></div>
      <p className="text-white text-lg lg:text-2xl font-medium absolute pb-1 lg:pb-6">
        {tittle}
      </p>
    </div>
  );
};

export default CategoryArticle;
