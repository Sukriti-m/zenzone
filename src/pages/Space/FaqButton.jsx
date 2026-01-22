import React from "react";
import { Link } from "react-router-dom";
const FaqButton = ({ conTent }) => {
  return (
    <Link>
      <div className="border-[1px] w-fit px-2 py-2 rounded-md ml-2">
        <p className="text-thDark font-circula">{conTent}</p>
      </div>
    </Link>
  );
};

export default FaqButton;
