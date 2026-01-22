import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import savingSound from "../../assets/sounds/savingSound.mp3";
import unsavingSound from "../../assets/sounds/unsavingSound.mp3";
import rainlight from "../../assets/sounds/rainlight.mp3";
//import swiper css
import "swiper/css";
//import components
import Shuffle from "./Shuffle";
SwiperCore.use([Navigation]);
const SideBar = ({ css, onBackgroundChange }) => {
  const save = new Audio(savingSound);
  const unSave = new Audio(unsavingSound);
  const speakerState = useRef();
  const notifiRef = useRef();
  const [volume, setvolume] = useState(0);
  const [passVolume, setpassVolume] = useState(0);
  const [checkHeart, setcheckHeart] = useState(false);
  const [spaceName, setSpaceName] = useState("ZenZone Space");
  const [time, settime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const handleVolume = (e) => {
    setvolume(e.target.value);
  };
  const handleSave = () => {
    if (checkHeart === false) {
      save.play();
      setcheckHeart(true);
    } else {
      unSave.play();
      setcheckHeart(false);
    }
  };
  const handleVolumeoff = () => {
    if (volume > 0) {
      setpassVolume(volume);
      setvolume(0);
    } else {
      setvolume(passVolume);
    }
  };
  //Slide Volume
  useEffect(() => {
    speakerState.current.volume = volume / 100;
  }, [volume]);
  //Get time and update by ms
  useEffect(() => {
    const updatetime = setInterval(() => {
      settime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => {
      clearInterval(updatetime);
    };
  }, []);
  useEffect(() => {
    const listener = (e) => {
      if (!notifiRef.current || notifiRef.current.contains(e.target)) {
        return;
      }
      // Notification handling can be added here when needed
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [notifiRef]);
  return (
    <div
      className={`w-[21rem] ml-3 fixed top-0 h-full pt-[10px] pb-[10px] rounded-md py-3 transition ease-in-out delay-150 duration-300`}
      style={{
        transform: `translate3d(${css.tx}rem,0px, 0px) scale3d(${css.sx}, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="glass rounded-md py-3 h-full">
        {/* <div className="Advertise bg-[#e9006b] px-2 py-2 rounded-md mx-3">
          <div className="text-xs text-white font-medium flex justify-center py-3">
            <span className="text-xl">💗</span>
            Co-work with us this Valentine’s day! Join the room →
          </div>
        </div> */}
        <div className="flex mt-3 justify-between mx-3">
          <Link to="/explore">
            <div className="bg-gray-100 rounded-md px-2 py-1 text-base text-thDark font-medium">
              Explore 🔎{" "}
            </div>
          </Link>
          <div className="text-base text-thDark font-circula">{time}</div>
        </div>
        <div className="Shuffle flex flex-col-reverse mx-3 mb-8">
          <Shuffle
            onBackgroundChange={(image, name) => {
              if (onBackgroundChange) {
                onBackgroundChange(image);
              }
              if (name) {
                setSpaceName(name);
              }
            }}
          />
        </div>
        <div className="glass mt-3 pb-4 mb-8">
          <div className="flex py-4 pr-2 pl-8 justify-between">
            <div>
              <h3 className="text-base font-circula text-gray-600">
                {spaceName}
              </h3>
            </div>
            <div className="flex h-fit justify-center">
              <div className="glass px-2 py-2 rounded-md mr-1">
                {checkHeart ? (
                  <BsHeartFill
                    className="text-red-400 cursor-pointer"
                    size={22}
                    onClick={handleSave}
                  />
                ) : (
                  <BsHeart
                    className="text-red-400 cursor-pointer"
                    size={22}
                    onClick={handleSave}
                  />
                )}
              </div>
              {/* <div className="glass px-2 py-2 rounded-md mr-1">
                <RiMenuAddLine size={22} />
              </div> */}
            </div>
          </div>
          <div className="flex justify-center items-center pr-7 pl-8 py-2">
            <div>
              {volume > 0 ? (
                <MdVolumeUp
                  className="text-thDark cursor-pointer"
                  size={25}
                  onClick={handleVolumeoff}
                />
              ) : (
                <MdVolumeOff
                  className="text-thDark cursor-pointer"
                  size={25}
                  onClick={handleVolumeoff}
                />
              )}
            </div>
            <div className="w-0">
              <video
                src={rainlight}
                autoPlay
                controls
                loop
                ref={speakerState}
              ></video>
            </div>
            <input
              type="range"
              className="h-[2px] flex-1 ml-3"
              onChange={(e) => {
                handleVolume(e);
              }}
              value={volume}
            />
          </div>
        </div>
        {/* <div className="flex absolute bottom-[10px]">
          <FaqButton conTent={"Showcase"} />
          <FaqButton conTent={"FAQ"} />
          <div
            className="border-[1px] w-fit px-3 py-2 rounded-md ml-2 flex justify-center items-center cursor-pointer"
            onClick={onOffnotifi}
          >
            <p className="bg-gray-300 font-circula py-[5px] px-[5px] rounded-full"></p>
          </div>
        </div> */}
        {/* <div>{checkNotifi && <Notification ref={notifiRef} />}</div> */}
      </div>
    </div>
  );
};

export default SideBar;
