import React from "react";

const Button = ({ Content }) => {
  return (
    <div className="py-3 px-8 bg-[#4f94ff] w-fit text-white font-medium rounded-md lg:mt-6">
      {Content}
    </div>
  );
};

export default Button;
