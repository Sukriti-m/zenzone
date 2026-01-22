import React, { useRef, useState, useEffect } from "react";
//import icon
import { FaSpotify } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import Circle from "./Circle";

const PlayAudio = ({
  response,
  currentTrack,
  trackIndex,
  settrackIndex,
  trackList,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  let audioSrc;
  if (trackList[trackIndex]?.track?.preview_url) {
    audioSrc = trackList[trackIndex]?.track.preview_url;
  } else {
    audioSrc = trackList[trackIndex]?.preview_url;
  }
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  // background variable
  const img = new Image();
  const canvasRef = useRef(null);
  const [bgRBG, setbgRBG] = useState();
  img.crossOrigin = "anonymous";
  img.src = response && response.images[0].url;
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    img.addEventListener("load", () => {
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(41, 65, 1, 1);
      setbgRBG(`rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`);
    });
  }, [response]);

  //count time to progress
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setTrackProgress(0);
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    if (checkSrc(audioRef.current.src)) {
      handleNext();
    }
    if (isReady.current && isPlaying) {
      audioRef.current.play();
      startTimer();
    }
  }, [trackIndex]);
  const checkSrc = (src) => {
    const stringUrl = src.split("null")[0] + "null";
    if (src === stringUrl) return true;
    return false;
  };
  const handlePlay = () => {
    if (audioRef.current.src && checkSrc(audioRef.current.src)) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
        isReady.current = true;
      } else {
        clearInterval(intervalRef.current);
        handleNext();
      }
    } else {
      if (!isPlaying) {
        audioRef.current = new Audio(audioSrc);
        if (audioRef.current.src === "" || checkSrc(audioRef.current.src)) {
          handleNext();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(true);
        startTimer();
        isReady.current = true;
      } else {
        clearInterval(intervalRef.current);
        handleNext();
      }
    }
  };
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handleNext = () => {
    if (trackIndex < trackList.length - 1) {
      settrackIndex(trackIndex + 1);
    } else {
      settrackIndex(0);
    }
  };
  const handlePrev = () => {
    if (trackIndex - 1 < 0) {
      settrackIndex(trackList.length - 1);
    } else {
      settrackIndex(trackIndex - 1);
    }
  };
  return (
    <div className="spotify_area py-2" style={{ background: `${bgRBG}` }}>
      <div className="flex">
        <canvas
          id="canvas"
          width="100"
          height="100"
          className="border-2 hidden"
          ref={canvasRef}
        ></canvas>
        <img
          src={response && response.images[0].url}
          alt=""
          className="w-[5.125rem] h-[5.125rem] ml-3 rounded-lg drop-shadow-xl"
        />
        <ul className="tracks pr-4 ml-4 w-[13rem] h-[5.063rem] text-white text-sm overflow-y-auto">
          {response &&
            response.tracks.items.map((item, index) => (
              <li
                key={index}
                className={`text-ellipsis overflow-x-hidden whitespace-nowrap py-1 flex items-center pl-2 ${
                  trackIndex === index && "bg-[#bdbcff]"
                }`}
              >
                <span className="mr-2 font-medium text-base text-gray-100 opacity-70">
                  {index + 1}
                </span>
                <span className="font-circula text-ellipsis overflow-x-hidden whitespace-nowrap">
                  {item?.track?.name} · {item?.track?.artists[0]?.name}
                  {item?.name} · {item?.artists?.[0]?.name}
                </span>
              </li>
            ))}
        </ul>
        <div className="text-white px-3">
          <FaSpotify size={25} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="tit px-3 pt-3 ">
          <p className="text-white font-circula">ZenZone Lofi · ZenZone</p>
          <p className="bg-gray-300 font-medium w-fit text-sm py-[1px] px-1 rounded-sm">
            Preview
          </p>
        </div>
        <div className="control flex items-center text-gray-100 px-3 mt-5">
          <BiSkipPrevious size={44} onClick={handlePrev} />
          <BiSkipNext size={45} onClick={handleNext} />
          <FiMoreHorizontal size={20} className="mr-3" />
          <div className="grid place-items-center">
            <Circle duration={duration} trackProgress={trackProgress} />
            {isPlaying ? (
              <FaPauseCircle
                size={35}
                className="text-white cursor-pointer absolute"
                onClick={handlePause}
              />
            ) : (
              <FaPlayCircle
                size={35}
                className="text-white cursor-pointer absolute"
                onClick={handlePlay}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayAudio;

