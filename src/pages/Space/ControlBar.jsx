import React, { useRef, useState } from "react";
//import icon
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineCalendar, AiOutlineCheckCircle } from "react-icons/ai";
import { MdAlarm } from "react-icons/md";
import { BsMusicPlayer, BsPencilSquare } from "react-icons/bs";
import { RiSoundModuleLine, RiListCheck2 } from "react-icons/ri";
import { GiCrystalBall } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { HiShieldCheck } from "react-icons/hi";
import Images from "../../assets/images";
//import component
import Timer from "./Timer/Timer";
import Note from "./Note";
import Media from "./Media/Media";
import Sound from "./Sound/Sound";

// Generic Modal Component
const Modal = ({ setcontrolState, controlState, type, title, icon }) => {
  const handleClose = () => {
    setcontrolState({
      ...controlState,
      [type]: { stat: "false", num: 0 },
    });
  };
  const isOpen = controlState[type]?.stat === "true";
  
  if (!isOpen) return null;

  return (
    <div>
      <div
        className="overlay absolute z-20 top-0 left-0 w-full h-full bg-black opacity-80"
        onClick={handleClose}
      />
      <div className="bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 rounded-lg px-8">
        <div className="head flex items-center">
          <div className="flex justify-center items-center py-6 w-[31.5rem]">
            {icon}
            <p className="font-circulaTit text-2xl ml-2">{title}</p>
          </div>
          <GrFormClose
            size={27}
            className="ml-6 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="flex justify-center py-6">
          <div className="w-[15.75rem] h-[12.35rem] overflow-y-hidden rounded-md">
            <img
              src={Images.ig5}
              alt=""
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            {[
              "Multiple calendars",
              "Multiple to-do lists",
              "Unlimited video chat",
              "Unlimited sounds",
              "Notes",
              "Pro spaces by ZenZone",
              "Productivity Reports",
              "Priority Support",
            ].map((item) => (
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
const ControlBar = ({ css, onToggleSidebar }) => {
  const [isActive, setisActive] = useState(1);
  const [controlState, setcontrolState] = useState({
    timer: { stat: "false", num: 0 },
    text: 0,
    media: { stat: "false", num: 0 },
    note1: { stat: "false", num: 0 },
    sound: { stat: "false", num: 0 },
    calendar: { stat: "false", num: 0 },
    todo: { stat: "false", num: 0 },
    fortune: { stat: "false", num: 0 },
  });
  const handleclick = (e) => {
    setisActive(e.currentTarget.id);
    return isActive;
  };
  const handleSpaceClick = (e) => {
    if (onToggleSidebar) {
      onToggleSidebar();
    }
    handleclick(e);
  };
  const handleOntime = (e) => {
    controlState.timer.stat == "false"
      ? setcontrolState({
          ...controlState,
          timer: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          timer: { stat: "false", num: 0 },
        });
  };
  const handlenote = (e) => {
    controlState.note1.stat === "false"
      ? setcontrolState({
          ...controlState,
          note1: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          note1: { stat: "false", num: 0 },
        });
  };
  const handleMedia = (e) => {
    controlState.media.stat === "false"
      ? setcontrolState({
          ...controlState,
          media: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          media: { stat: "false", num: 0 },
        });
  };
  const handleSound = (e) => {
    controlState.sound.stat === "false"
      ? setcontrolState({
          ...controlState,
          sound: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          sound: { stat: "false", num: 0 },
        });
  };
  const handleCalendar = (e) => {
    controlState.calendar.stat === "false"
      ? setcontrolState({
          ...controlState,
          calendar: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          calendar: { stat: "false", num: 0 },
        });
  };
  const handleTodo = (e) => {
    controlState.todo.stat === "false"
      ? setcontrolState({
          ...controlState,
          todo: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          todo: { stat: "false", num: 0 },
        });
  };
  const handleFortune = (e) => {
    controlState.fortune.stat === "false"
      ? setcontrolState({
          ...controlState,
          fortune: { stat: "true", num: parseInt(e.currentTarget.id) },
        })
      : setcontrolState({
          ...controlState,
          fortune: { stat: "false", num: 0 },
        });
  };
  const controlsItem = [
    {
      id: 1,
      icon: <HiOutlinePhotograph size={21} />,
      label: "Space",
      func: handleSpaceClick,
    },
    {
      id: 2,
      icon: <AiOutlineCalendar size={21} />,
      label: "Calendar",
      func: handleCalendar,
    },
    {
      id: 3,
      icon: (
        <MdAlarm
          size={21}
          className={`${controlState.timer.stat === "true" && "active"}`}
        />
      ),
      num: controlState.timer.num,
      label: "Timer",
      func: handleOntime,
    },
    {
      id: 4,
      icon: (
        <BsMusicPlayer
          size={21}
          className={`${controlState.media.stat === "true" && "active"}`}
        />
      ),
      label: "Media",
      num: controlState.media.num,
      func: handleMedia,
    },
    {
      id: 5,
      icon: (
        <RiSoundModuleLine
          size={21}
          className={`${controlState.sound.stat === "true" && "active"}`}
        />
      ),
      label: "Sound",
      num: controlState.sound.num,
      func: handleSound,
    },
    {
      id: 6,
      icon: <RiListCheck2 size={21} />,
      label: "Todo",
      func: handleTodo,
    },
    {
      id: 7,
      icon: (
        <BsPencilSquare
          size={21}
          className={`${controlState.note1.stat === "true" && "active"}`}
        />
      ),
      num: controlState.note1.num,
      label: "Note",
      func: handlenote,
    },
    {
      id: 8,
      icon: <GiCrystalBall size={21} />,
      label: "Fortune",
      func: handleFortune,
    },
    // { 
    //   id: 9,
    //   icon: <p className="text-2xl text-gray-300 ">+</p>,
    //   label: "",
    //   func: handleclick,
    // },
  ];

  return (
    <>
      <div
        className="glass fixed left-[22.5rem] top-48 pt-3 rounded-lg transition ease-in-out delay-150 duration-300 will-change-transform"
        style={{
          transform: `translate3d(${css.cx}rem,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-thDark  flex flex-col gap-y-2 px-2">
          {controlsItem.map(({ id, icon, num, label, func }) => (
            <div
              key={id}
              id={id}
              className={`flex justify-center items-center flex-col cursor-pointer   ${
                isActive == id && "active"
              }`}
              onClick={(e) => func(e)}
            >
              {icon}
              <p
                className={`text-[11px] font-circula ${num === id && "active"}`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Timer setcontrolState={setcontrolState} controlState={controlState} />
      <Note setcontrolState={setcontrolState} controlState={controlState} />
      <Media setcontrolState={setcontrolState} controlState={controlState} />
      <Sound setcontrolState={setcontrolState} controlState={controlState} />
      <Modal
        setcontrolState={setcontrolState}
        controlState={controlState}
        type="calendar"
        title="Manage your calendar effortlessly"
        icon={<AiOutlineCalendar size={40} className="text-blue-500" />}
      />
      <Modal
        setcontrolState={setcontrolState}
        controlState={controlState}
        type="todo"
        title="Organize your tasks effortlessly"
        icon={<RiListCheck2 size={40} className="text-blue-500" />}
      />
      <Modal
        setcontrolState={setcontrolState}
        controlState={controlState}
        type="fortune"
        title="Discover your fortune"
        icon={<GiCrystalBall size={40} className="text-blue-500" />}
      />
    </>
  );
};

export default ControlBar;
