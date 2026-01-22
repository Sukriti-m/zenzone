import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
//import icon
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
//import sound
import timerAudio1 from "../../../assets/sounds/timerAudio1.mp3";

//setting status for counting time
const status = {
  stop: "stop",
  start: "start",
};
const Timer = ({ setcontrolState, controlState }) => {
  const nodeRef = useRef(null);
  //variable
  //sound variable
  const bellState = useRef();
  const [bellVolume, setbellVolume] = useState(50);
  const [psVolume, setpsVolume] = useState(0);
  // setting variable
  const [checkbox, setcheckbox] = useState({
    transition: "on",
    hide: "off",
  });
  const [setting, setsetting] = useState(true);
  const [mode, setmode] = useState(1);
  // counting time variable
  const [time, settime] = useState({
    pomodoro: 10,
    short: 5,
    long: 10,
  });
  const [count, setcount] = useState(0);
  const [secondRemain, setsecondRemain] = useState(time.pomodoro * 60);
  const [state, setstate] = useState(status.stop);
  const secondDisplay = secondRemain % 60;
  const minutesRemain = (secondRemain - secondDisplay) / 60;
  const minuteDisplay = minutesRemain % 60;
  //Function
  const handleMode = (mod) => {
    if (mod === 1) {
      setmode(1);
      setsecondRemain(time.pomodoro * 60);
    }
    if (mod === 2) {
      setmode(2);
      setsecondRemain(time.short * 60);
    }
    if (mod === 3) {
      setmode(3);
      setsecondRemain(time.long * 60);
    }
  };
  // config volume
  const handleVolume = (e) => {
    setbellVolume(e.target.value);
  };
  const handleVolumeoff = () => {
    if (bellVolume > 0) {
      setpsVolume(bellVolume);
      setbellVolume(0);
    } else {
      setbellVolume(psVolume);
    }
  };
  useEffect(() => {
    bellState.current.volume = bellVolume / 100;
  }, [bellVolume]);

  //config countdown time
  useInterval(
    () => {
      if (secondRemain > 0) {
        setsecondRemain(secondRemain - 1);
        if (secondRemain > 5) return;
        bellState.current.play();
      } else {
        setstate(status.stop);
        if (mode === 1) {
          setcount(count + 1);
          if (checkbox.transition === "on") handleMode(2);
          else handleMode(mode);
        } else {
          if (checkbox.transition === "on") handleMode(1);
          else handleMode(mode);
        }
      }
    },
    state === status.start ? 1000 : null
  );
  return (
    <div
      className={`${controlState.timer.stat === "true" ? "block" : "hidden"}`}
    >
      <div className="w-0 absolute left-96 top-1">
        <video src={timerAudio1} controls ref={bellState} />
      </div>
      <Draggable handle="#handle" nodeRef={nodeRef}>
        <div
          className="box glass absolute left-1/2 top-40 cursor-grab rounded-lg "
          ref={nodeRef}
        >
          <div id="handle" className="border-b-[1px] flex justify-between px-6">
            <div className="flex justify-center items-center py-4 pr-32">
              <select
                name="team"
                id=""
                className="bg-thNone font-medium text-thDark"
              >
                <option value="Personal">Personal</option>
                <option value="Group">Group</option>
              </select>
              <div
                className={`flex text-thBrick ml-3 ${
                  checkbox.hide === "on" ? "opacity-0" : "opacity-1"
                }`}
              >
                <AiOutlineCheckCircle
                  className={`${count > 0 ? "text-green-500" : ""}`}
                  size={25}
                />
              </div>
            </div>
            <div
              className="text-2xl font-circulaBold text-thDark cursor-default"
              onClick={() => {
                setcontrolState({
                  ...controlState,
                  timer: { stat: "false", num: 0 },
                });
              }}
            >
              _
            </div>
          </div>
          <div className="content px-6 pt-2 text-thDark flex justify-between items-center cursor-default">
            <div>
              <h1 className="text-[52px] font-circula ">
                {twoDigits(minuteDisplay)}:{twoDigits(secondDisplay)}
              </h1>
            </div>
            <div className="flex h-fit justify-center items-center text-thDark">
              {state === status.stop ? (
                <button
                  className="border-[1px] border-thDark px-9 py-2 font-circula rounded-xl mr-4 min-w-[117px]"
                  onClick={() => setstate(status.start)}
                >
                  Start
                </button>
              ) : (
                <button
                  className="border-[1px] border-thDark px-9 py-2 font-circula rounded-xl mr-4 min-w-[117px]"
                  onClick={() => setstate(status.stop)}
                >
                  Pause
                </button>
              )}

              <GrRefresh
                size={19}
                className="-rotate-90 text-thDark cursor-pointer"
                onClick={() => {
                  handleMode(mode);
                  setstate(status.stop);
                }}
              />
            </div>
          </div>
          <div className="flex justify-around items-center  pb-5 font-circula text-thDark text-base cursor-pointer">
            <p
              className={`${mode === 1 && "border-b-2 border-thBrick"}`}
              onClick={() => handleMode(1)}
            >
              Pomodoro
            </p>
            <p
              className={`${mode === 2 && "border-b-2 border-thBrick"}`}
              onClick={() => handleMode(2)}
            >
              Short Break
            </p>
            <p
              className={`${mode === 3 && "border-b-2 border-thBrick"}`}
              onClick={() => handleMode(3)}
            >
              Long Break
            </p>
            <MdSettings
              onClick={() => {
                setting ? setsetting(false) : setsetting(true);
              }}
            />
          </div>
          <div
            className={`setting cursor-default ${
              setting ? "hidden" : "block"
            } `}
          >
            <div className="border-t-[1px] border-b-[1px] px-6 flex flex-col gap-y-3 py-3 font-circula text-thDark">
              <label htmlFor="" className="flex items-center gap-x-2 ">
                <input
                  type="checkbox"
                  name=""
                  id="check1"
                  className="w-5 h-5 accent-thDark"
                  onChange={(e) => {
                    if (e.target.checked)
                      setcheckbox({ ...checkbox, transition: "on" });
                    else {
                      setcheckbox({ ...checkbox, transition: "off" });
                    }
                  }}
                />
                Auto-transition Timer
              </label>
              <label htmlFor="check2" className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  name=""
                  id="check2"
                  className="w-5 h-5"
                  onChange={(e) => {
                    if (e.target.checked)
                      setcheckbox({ ...checkbox, hide: "on" });
                    else {
                      setcheckbox({ ...checkbox, hide: "off" });
                    }
                  }}
                />
                Hide Pomodoro Count
              </label>
            </div>
            <div className="settime py-5 flex justify-around">
              <div className="flex flex-col">
                <span className="font-circula text-thDark text-base">
                  Pomodoro
                </span>
                <input
                  type="number"
                  name=""
                  id=""
                  maxLength={3}
                  minLength={1}
                  min={1}
                  value={time.pomodoro}
                  onChange={(e) => {
                    setsecondRemain(e.target.value * 60);
                    settime({ ...time, pomodoro: e.target.value });
                    setmode(1);
                  }}
                  className="w-24 h-7 border-[1px] pl-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-circula text-thDark text-base">
                  Short Break
                </span>
                <input
                  type="number"
                  name=""
                  id=""
                  maxLength={3}
                  minLength={1}
                  min={1}
                  value={time.short}
                  onChange={(e) => {
                    setsecondRemain(e.target.value * 60);
                    settime({ ...time, short: e.target.value });
                    setmode(2);
                  }}
                  className="w-24 h-7 border-[1px] pl-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-circula text-thDark text-base">
                  Long Break
                </span>
                <input
                  type="number"
                  name=""
                  id=""
                  maxLength={3}
                  minLength={1}
                  min={1}
                  value={time.long}
                  onChange={(e) => {
                    setsecondRemain(e.target.value * 60);
                    settime({ ...time, long: e.target.value });
                    setmode(3);
                  }}
                  className="w-24 h-7 border-[1px] pl-2"
                />
              </div>
            </div>
            <div className="setsound">
              <div className="flex font-circula text-thDark px-6 justify-between pb-5">
                <p className="">Timer Sound</p>
                <select
                  name="sound"
                  id="sound"
                  className="h-7 w-56 bg-gray-100 rounded-none"
                >
                  <option value="1">Twinker</option>
                </select>
              </div>
              <div className="sound_setting px-6 pb-5">
                <div className="flex items-center cursor-pointer">
                  {bellVolume > 0 ? (
                    <MdVolumeUp
                      className="text-thDark"
                      size={25}
                      onClick={handleVolumeoff}
                    />
                  ) : (
                    <MdVolumeOff
                      className="text-thDark"
                      size={25}
                      onClick={handleVolumeoff}
                    />
                  )}
                  <input
                    type="range"
                    className="h-[1.8px] w-56 ml-3"
                    onChange={(e) => {
                      handleVolume(e);
                    }}
                    value={bellVolume}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};
//custom hook
function useInterval(callback, delay) {
  const saveCallback = useRef();
  //get latest callback
  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);
  //set interval
  useEffect(() => {
    function runned() {
      saveCallback.current();
    }
    if (delay !== null) {
      let timeId = setInterval(runned, delay);
      return () => clearInterval(timeId);
    }
  }, [delay]);
}
const twoDigits = (num) => String(num).padStart(2, "0");
export default Timer;
