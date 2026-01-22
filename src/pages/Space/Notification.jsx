import React from "react";
import { Link } from "react-router-dom";
const Notification = ({}, ref) => {
  return (
    <div
      className="bg-white w-[23rem] rounded-md absolute -left-2.5 bottom-9 shadow-xl"
      ref={ref}
    >
      <div className="head py-4 flex justify-center items-center font-circula text-thDark border-b-[1px]">
        Lates changes
      </div>
      <div className="content py-2 pl-3 pr-4 border-l-4 border-thBrick">
        <Link className="clear-both py-2">
          <span className="bg-blue-500 px-3 py-0.5 rounded-full text-white text-xs text-center">
            🤩 New
          </span>
          <span className="bg-green-500 px-3 py-0.5 rounded-full text-white text-xs text-center ml-[2.5px]">
            🏔️ Spaces
          </span>
          <span className="bg-purple-500 px-3 py-0.5 rounded-full text-white text-xs text-center ml-[2.5px]">
            +2
          </span>
          <span className="font-medium text-[13px] text-thBlack text-center mr-2">
            💬 Room Chat, Group Pomodoro, and New Spaces.
          </span>
          <span className="text-[13px] text-thGray text-center">
            1. Rooms Text Chat Text chat is now part of Rooms! Invite friends to
            your Room and chat while...
          </span>
        </Link>
      </div>
      <div className="foot border-t-[1px] py-2 flex justify-center items-center text-thGray text-sm underline ">
        <Link>ZenZone updates</Link>
      </div>
    </div>
  );
};
const forwardNotic = React.forwardRef(Notification);
export default forwardNotic;
