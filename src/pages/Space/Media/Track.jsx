import React, { useRef, useState, useEffect } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
const Track = ({ response }) => {
  //audio variable
  var audioSrc = response?.preview_url;
  const audioRef = useRef(new Audio(audioSrc));
  const [barTrack, setbarTrack] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const [length, setlength] = useState(0);
  const intervalRef = useRef();
  const { duration } = audioRef.current;
  const currentPercentage = duration
    ? Math.round((barTrack / duration) * 100)
    : 0;
  // background variable
  const canvasRef = useRef(null);
  const [bgRBG, setbgRBG] = useState();
  useEffect(() => {
    if (!response || !response.album || !response.album.images || !response.album.images[0]) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = response.album.images[0].url;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    img.addEventListener("load", () => {
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(65, 65, 1, 1);
      setbgRBG(`rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`);
    });
  }, [response]);
  useEffect(() => {
    setlength(currentPercentage);
  }, [currentPercentage]);
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!audioRef.current.ended) {
        setbarTrack(audioRef.current.currentTime);
      } else {
        setisPlaying(false);
        setbarTrack(0);
      }
    }, [1000]);
  };
  const handlePlay = () => {
    if (audioRef.current.src) {
      audioRef.current.play();
      startTimer();
      setisPlaying(true);
    } else {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      setisPlaying(true);
      startTimer();
    }
  };
  const handlePause = () => {
    audioRef.current.pause();
    setisPlaying(false);
  };
  const twoDigit = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  return (
    <div
      className={`py-8 pl-4`}
      style={{
        backgroundImage: `linear-gradient(11deg, rgba(39,39,46,1) 0%, ${bgRBG} 67%)`,
      }}
    >
      <div className="flex gap-x-2 items-center">
        <canvas
          id="canvas"
          width="100"
          height="100"
          className="border-2 hidden"
          ref={canvasRef}
        ></canvas>
        <img
          src={response && response.album.images[0].url}
          alt=""
          className="w-[7.5rem] h-[7.5rem] rounded-lg shadow-md"
        />
        <div>
          <div>
            <h3 className="text-white text-2xl font-bold text-ellipsis">
              {response && response.name}
            </h3>
            <p className="w-[12.5rem] text-ellipsis overflow-x-hidden whitespace-nowrap text-base font-medium text-gray-100">
              {response && response.artists[0]?.name}
              {", "}
              {response && response.artists[1]?.name}
              {", "}
              {response && response.artists[2]?.name}
            </p>
          </div>
          <div className="flex pt-5 items-center gap-x-3 text-white">
            <div className="progress w-20 h-1 rounded-full bg-thWhitetrans relative">
              <div
                className={`absolute bg-white z-30 rounded-full h-1 duration-300 ease-in`}
                style={{ width: `${length}%` }}
              ></div>
            </div>
            <p className="ml-2 font-circula min-w-[47px]">
              00:{twoDigit(parseInt(barTrack))}
            </p>
            <FiMoreHorizontal size={20} className=" ml-2" />
            {isPlaying ? (
              <FaPauseCircle size={35} onClick={handlePause} />
            ) : (
              <FaPlayCircle size={35} className="" onClick={handlePlay} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
