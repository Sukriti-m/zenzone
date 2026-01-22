import React from "react";
import { BsChatDots } from "react-icons/bs";

const ChatBox = () => {
  return (
    <div>
      <div className="glass text-white w-14 h-14 rounded-full grid place-items-center fixed right-5 bottom-3">
        <div className="text-xl cursor-pointer">
          <BsChatDots size={28} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;