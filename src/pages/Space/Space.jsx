import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "./SideBar";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import Backgrounds from "../../assets/video4k";
import Images from "../../assets/images";
import ControlBar from "./ControlBar";
import Invite from "./Invite";
import BoxChat from "./BoxChat/BoxChat";
import ChatBox from "./BoxChat/ChatBox";

const Space = () => {
  const [searchParams] = useSearchParams();
  const spaceId = searchParams.get("space");
  const [checkInout, setcheckInout] = useState(true);
  const [css, setcss] = useState({});

  // Map space IDs to their corresponding images
  const spaceImageMap = {
    1: Images.aquarium,
    2: Images.cody,
    3: Images.shanghai,
    4: Images.train,
    5: Images.Hongkong,
    6: Images.japanstreet,
    7: Images.lofi,
    8: Images.bluesky,
    9: Images.cozyroom,
    10: Images.fuji,
  };
  
  // Video backgrounds
  const videoBackgrounds = [
    Backgrounds.narutoCloudyField,
    Backgrounds.cyberpunkBar,
    Backgrounds.pixelLofiCity,
    Backgrounds.powerPolesPurple,
    Backgrounds.quietNightRainy,
    Backgrounds.cafe,
    Backgrounds.library,
    Backgrounds.sukunaVsJogo,
    Backgrounds.litRoomBooks,
    Backgrounds.convenienceStoreRain,
    Backgrounds.summerVillageCoastal,
    Backgrounds.girlSittingHill,
    Backgrounds.girlStudyingCat,
    Backgrounds.shinobuButterfly,
    Backgrounds.fireplaceRoom,
    Backgrounds.sakuraGarden,
    Backgrounds.window,
  ];

  // Image backgrounds (GIFs and images)
  const imageBackgrounds = [
    // GIFs
    Backgrounds.lfgbg,
    Backgrounds.lofibg,
    // Images from video4k
    Backgrounds.manstudy,
    Backgrounds.toriiGate,
    Backgrounds.cat,
    Backgrounds.studying,
    // Images from images folder
    Images.aquarium,
    Images.cody,
    Images.shanghai,
    Images.train,
    Images.Hongkong,
    Images.japanstreet,
    Images.lofi,
    Images.bluesky,
    Images.cozyroom,
    Images.fuji,
  ];

  // All available backgrounds
  const allBackgrounds = [...videoBackgrounds, ...imageBackgrounds];
  
  // Initial background: selected space image if provided, otherwise random
  const getInitialBackground = () => {
    const id = spaceId ? parseInt(spaceId, 10) : null;
    if (id && spaceImageMap[id]) {
      return spaceImageMap[id];
    }
    return allBackgrounds[Math.floor(Math.random() * allBackgrounds.length)];
  };

  const [background, setBackground] = useState(getInitialBackground);
  const [backgroundKey, setBackgroundKey] = useState(0);
  const videoRef = useRef(null);

  const handleBackgroundChange = (image) => {
    if (image) {
      setBackground(image);
      setBackgroundKey(prev => prev + 1);
    }
  };

  // Force video reload when background changes
  useEffect(() => {
    if (videoRef.current && isVideo(background)) {
      videoRef.current.load();
    }
  }, [background]);

  // Check if background is a video file
  const isVideo = (src) => {
    return videoBackgrounds.includes(src);
  };
  const inout_transform = () => {
    if (checkInout) {
      setcheckInout(false);
      setcss({
        x: "-22",
        sx: "0",
        tx: "-12",
        cx: "-22",
      });
      console.log(checkInout);
    } else {
      setcheckInout(true);
      setcss({
        x: "0",
        sx: "1",
        tx: "0",
        cx: "0",
      });
      console.log(checkInout);
    }
  };
  return (
    <div className="w-screen h-screen overflow-y-hidden">
      <div className="w-screen h-screen">
        {isVideo(background) ? (
          <video
            key={backgroundKey}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-screen h-screen object-cover"
          >
            <source src={background} type="video/mp4" />
          </video>
        ) : (
          <img key={backgroundKey} src={background} alt="" className="w-screen h-screen object-cover" />
        )}
      </div>
      <div className="box">
        <div
          className={`in_out absolute top-20 left-72 cursor-pointer text-thDark round glass py-3 pl-16 pr-2 rounded-tr-md rounded-br-md will-change-transform transition ease-in-out delay-150 duration-300`}
          style={{
            transform: `translate3d(${css.x}rem,0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
          }}
          onClick={inout_transform}
        >
          {checkInout ? (
            <GoTriangleLeft size={20} />
          ) : (
            <GoTriangleRight size={20} />
          )}
        </div>
        <ControlBar css={css} onToggleSidebar={inout_transform} />
        <SideBar css={css} onBackgroundChange={handleBackgroundChange} />
        <Invite css={css} />
        <BoxChat />
        <ChatBox />
      </div>
    </div>
  );
};

export default Space;
