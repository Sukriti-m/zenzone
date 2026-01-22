import React from "react";

const Avatar = ({ src }) => {
  return (
    <div className="rounded-full border-2 border-blue-600 w-9 h-9 relative z-20 -ml-2">
      <img src={src} alt="" className="object-cover" />
    </div>
  );
};

export default Avatar;

