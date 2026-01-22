import React, { useState } from "react";
import { BsChatDots, BsPaperclip } from "react-icons/bs";
import { IoIosChatbubbles, IoMdSearch } from "react-icons/io";
import { CgSmileMouthOpen } from "react-icons/cg";
import Avatar from "./Avatar";
import Images from "../../../assets/images";
const BoxChat = () => {
  const [isVisble, setisVisble] = useState("hidden");
  return (
    <div className="">
      <div
        className="glass text-white w-14 h-14 rounded-full grid place-items-center fixed right-24 bottom-3"
        onClick={() => {
          isVisble === "hidden" ? setisVisble("block") : setisVisble("hidden");
        }}
      >
        <div size={28} className="text-xl cursor-pointer">
          ?
        </div>
      </div>
      <div
        className={`h-[490px] w-80 bg-white fixed right-20 bottom-20 rounded-xl overflow-x-hidden ${isVisble}`}
      >
        <div className="bluechat bg-blue-600 h-[150px] before:bg-box">
          <div className="py-3 flex items-center justify-center gap-x-4">
            <span className="flex text-white font-circula bg-blue-700 w-fit py-1 px-4 rounded-lg gap-x-1 items-center">
              <span>
                <IoIosChatbubbles size={17} />
              </span>
              <span>Chat</span>
            </span>
            <span className="flex text-gray-400 font-circula w-fit py-1 px-4 rounded-lg gap-x-1 items-center">
              <IoMdSearch size={20} />
              <span>Helpdesk</span>
            </span>
          </div>
          <span className="text-white font-medium grid place-items-center">
            Chat With Support
          </span>
          <span className="text-gray-400 text-sm flex justify-center items-center gap-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Support is online </span>
          </span>
        </div>
        <div className="chat_area px-3 py-5">
          <div className="admin flex gap-x-2">
            <div>
              <span className="text-sm text-gray-400">ZenZone</span>
              <div className="bg-blue-600 text-white px-2 py-2 rounded-md w-fit">
                Hello how can i help you?
              </div>
            </div>
          </div>
          <span className="font-medium text-xs grid place-items-center py-5">
            Monday, 20 March
          </span>
          <div className="user">
            <div className="bg-gray-400 text-white px-2 py-2 rounded-md w-fit float-right">
              Nothing
            </div>
          </div>
          <div className="clear-right py-3 mb-0 absolute  bottom-0">
            <input
              type="text"
              className="outline-none border-none pl-3"
              placeholder="Compose your message..."
            />
            <div className="pt-3 flex gap-x-1 text-gray-400">
              <CgSmileMouthOpen size={20} />
              <BsPaperclip size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxChat;
