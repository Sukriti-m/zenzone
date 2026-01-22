import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { MdVolumeUp, MdVolumeOff, MdVolumeDown } from "react-icons/md";
import SoundSettings from "./SoundSettings";
import rainlight from "../../../assets/sounds/rainlight.mp3";
import soundList from "../../../assets/sounds";
const Sound = ({ controlState, setcontrolState }) => {
  const nodeRef = useRef(null);
  const [soundState, setsoundState] = useState(1);
  const sounds = [
    {
      name: "Rain",
      src: soundList.rain,
    },
    {
      name: "Cafe Shop",
      src: soundList.cafe,
    },
    {
      name: "Delta Waves",
      src: soundList.deltawave,
    },
    {
      name: "Fireplace",
      src: soundList.fireplace,
    },
    {
      name: "Ocean",
      src: soundList.ocean,
    },
    {
      name: "Theta Waves",
      src: soundList.thetawave,
    },
  ];
  return (
    <div
      className={`${controlState.sound.stat === "true" ? "block" : "hidden"}`}
    >
      <div className="absolute top-1/2 left-1/2 ">
        <Draggable handle="#handle" nodeRef={nodeRef}>
          <div ref={nodeRef} className="glass rounded-lg cursor-grab w-[25rem]">
            <div id="handle" className="head flex justify-between px-6">
              <div className="flex items-center py-4">
                <p className="text-base font-circula text-thDark mr-4">
                  SoundBoard
                </p>
                {soundState === 0 ? (
                  <MdVolumeOff
                    size={25}
                    className="cursor-pointer"
                    onClick={() => setsoundState(1)}
                  />
                ) : (
                  <MdVolumeUp
                    size={25}
                    className="cursor-pointer"
                    onClick={() => setsoundState(0)}
                  />
                )}
              </div>
              <div
                className="text-2xl font-circulaBold text-thDark cursor-default"
                onClick={() => {
                  setcontrolState({
                    ...controlState,
                    sound: { stat: "false", num: 0 },
                  });
                }}
              >
                _
              </div>
            </div>
            <div className="sound_area h-[29rem] border-t-[1px] py-2 overflow-y-auto scrollbar-hide">
              {sounds.map(({ src, name }, index) => (
                <div key={index} className="mb-1">
                  <p className="font-circula text-thDark pl-6 mb-0.5">{name}</p>
                  <SoundSettings soundState={soundState} src={src} />
                </div>
              ))}
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Sound;
