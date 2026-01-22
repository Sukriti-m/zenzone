import React, { useRef, useState, useEffect } from "react";

import { MdVolumeUp, MdVolumeOff } from "react-icons/md";

const SoundSettings = ({ src, soundState }) => {
  const [isDisabled, setDisabled] = useState(true);
  const [volume, setvolume] = useState(0);
  const speakerState = useRef();
  const [passVolume, setpassVolume] = useState(0);
  useEffect(() => {
    speakerState && speakerState.current && speakerState.current.play();
  }, []);
  useEffect(() => {
    if (soundState === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [soundState]);
  useEffect(() => {
    speakerState.current.volume = volume / 100;
  }, [volume]);
  const handleVolume = (e) => {
    setvolume(e.target.value);
  };
  const handleVolumeoff = () => {
    if (volume > 0) {
      setpassVolume(volume);
      setvolume(0);
    } else {
      setvolume(passVolume);
    }
  };
  return (
    <div>
      <div className="w-0">
        <video
          src={src}
          loop
          autoPlay
          controls
          ref={speakerState}
          muted={isDisabled}
        ></video>
      </div>
      <div className="flex items-center pl-6 pr-20">
        {isDisabled === false ? (
          volume > 0 ? (
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
          )
        ) : (
          <MdVolumeOff className="text-thGray" size={25} />
        )}
        <input
          type="range"
          className="h-[1.5px] flex-1 ml-3"
          onChange={(e) => {
            handleVolume(e);
          }}
          value={volume}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default SoundSettings;
