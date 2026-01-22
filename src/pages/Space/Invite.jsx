import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Invite = ({ css }) => {
  return (
    <div
      className="glass fixed left-[22.5rem] top-3 py-1 rounded-lg transition ease-in-out delay-150 duration-300 will-change-transform"
      style={{
        transform: `translate3d(${css.cx}rem,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex items-center">
        <p className="font-circula text-xl text-thDark flex items-center px-3 border-r-[1px] cursor-pointer">
          <Link to="/">
            <BiArrowBack size={20} />
          </Link>
Back        </p>
        <div className="flex px-3 items-center text-white gap-x-3">
          <p className="font-circula py-[2px] px-2 rounded-md hover:bg-[#f4f4f45b] hover:text-thDark cursor-pointer">
            My Room
          </p>
          <span className="bg-blue-600 py-[2px] px-2 ml-2 text-white rounded-md font-circula cursor-pointer">
            Invite
          </span>
          <BsCameraVideoFill
            size={25}
            className="hover:text-thDark hover:scale-125 duration-200 ease-in cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Invite;
