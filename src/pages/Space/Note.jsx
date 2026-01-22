import React from "react";
import { FaCrown } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import Images from "../../assets/images";
const Note = ({ setcontrolState, controlState }) => {
  const tit = [
    "Multiple calendars",
    "Multiple to-do lists",
    "Unlimited video chat",
    "Unlimited sounds",
    "Notes",
    "Pro spaces by ZenZone",
    "Productivity Reports",
    "Priority Support",
  ];
  const handleClose = () => {
    setcontrolState({
      ...controlState,
      note1: { stat: "false", num: 0 },
    });
  };
  return (
    <div
      className={`${controlState.note1.stat === "true" ? "block" : "hidden"}`}
    >
      <div
        className="overlay absolute z-20 top-0 left-0 w-full h-full bg-black opacity-80"
        onClick={handleClose}
      >
        {" "}
      </div>
      <div className="bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 rounded-lg px-8">
        <div className="head flex items-center">
          <div className=" flex justify-center items-center py-6 w-[31.5rem]">
            <FaCrown className="mr-2" />
            <p className="font-circulaTit text-2xl">
              Jot down notes effortlessly
            </p>
          </div>
          <GrFormClose
            size={27}
            className="ml-6 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className=" flex justify-center py-6">
          <div className="w-[15.75rem] h-[12.35rem] overflow-y-hidden rounded-md">
            <img
              src={Images.ig5}
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            {tit.map((item) => (
              <div key={item} className="flex ml-5 items-center">
                <AiOutlineCheckCircle className="text-blue-500" size={20} />
                <span className="ml-2 font-circula">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-blue-500 flex justify-center items-center font-circula pb-6">
          👉 <span className="cursor-pointer">Learn more about Pro</span>| *Get
          early bird pricing for a limited time*
        </p>
        <div className="flex gap-x-3 justify-around pb-6">
          <div className="px-8 py-4 border-[3px] rounded-xl border-blue-500 w-fit grid place-items-center cursor-pointer">
            <p className="font-circulaBold text-base text-blue-500">
              Yearly Plan
            </p>
            <span className="text-gray-300 line-through">$15.00</span>
            <h3 className="font-circulaTit text-xl">$6 /month</h3>
            <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-full">
              60 day trial
            </button>
          </div>
          <div className="px-8 py-4 border-[3px] rounded-xl border-blue-500 w-fit grid place-items-center cursor-pointer">
            <p className="font-circulaBold text-base text-blue-500">
              Yearly Plan
            </p>
            <span className="text-gray-300 line-through">$15.00</span>
            <h3 className="font-circulaTit text-xl">$6 /month</h3>
            <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-full">
              60 day trial
            </button>
          </div>
          <div className="px-8 py-4 border-[3px] rounded-xl border-blue-500 w-fit grid place-items-center cursor-pointer">
            <p className="font-circulaBold text-base text-blue-500">
              Yearly Plan
            </p>
            <span className="text-gray-300 line-through">$15.00</span>
            <h3 className="font-circulaTit text-xl">$6 /month</h3>
            <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-full">
              60 day trial
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-4 pb-8">
          <HiShieldCheck size={28} className="text-green-500" />
          <p className="font-circula">Guaranteed safe checkout</p>
          <p className="border-[0.5px] border-gray-400 text-gray-400 text-xs flex justify-center items-center pt-1 pb-1.5 px-2 gap-x-2 cursor-pointer">
            Powered by
            <span className="font-bold text-gray-500"> stripe</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-6 pb-8">
          <p className="font-circula text-xl">Feature On:</p>
          <img
            src={Images.logo3}
            alt=""
            className="w-[5.625rem] h-[2.085rem]"
          />
          <img
            src={Images.logo5}
            alt=""
            className="w-[5.625rem] h-[2.085rem]"
          />
          <img
            src={Images.logo4}
            alt=""
            className="w-[5.625rem] h-[2.085rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
