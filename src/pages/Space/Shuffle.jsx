import React, { useRef, useState, useCallback, useMemo } from "react";
import Images from "../../assets/images";
import Backgrounds from "../../assets/video4k";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
SwiperCore.use([Navigation]);

// Constants moved outside component to avoid recreation on each render
const SPACE_ICONS = [
  { id: 1, icon: Images.beach_icon },
  { id: 2, icon: Images.mountain_icon },
  { id: 3, icon: Images.cf_icon },
  { id: 4, icon: Images.city_icon },
  { id: 5, icon: Images.crystalball_icon },
  { id: 6, icon: Images.art },
  { id: 7, icon: Images.galaxy },
  { id: 8, icon: Images.pet },
  { id: 9, icon: Images.snow },
  { id: 10, icon: Images.mac },
];

const ICON_BACKGROUND_MAP = {
  1: [Backgrounds.summerVillageCoastal, Images.bluesky],
  2: [Backgrounds.narutoCloudyField, Backgrounds.girlSittingHill, Images.fuji],
  3: [Backgrounds.cafe, Backgrounds.cyberpunkBar, Images.lofi, Backgrounds.lofibg, Backgrounds.lfgbg],
  4: [Backgrounds.pixelLofiCity, Backgrounds.quietNightRainy, Backgrounds.convenienceStoreRain, Images.shanghai, Images.Hongkong, Images.japanstreet],
  5: [Backgrounds.shinobuButterfly, Backgrounds.sakuraGarden],
  6: [Backgrounds.sakuraGarden, Backgrounds.toriiGate],
  7: [Backgrounds.sukunaVsJogo],
  8: [Backgrounds.girlStudyingCat, Backgrounds.cat],
  9: [Backgrounds.quietNightRainy, Backgrounds.convenienceStoreRain, Backgrounds.powerPolesPurple],
  10: [Backgrounds.library, Backgrounds.litRoomBooks, Backgrounds.studying, Backgrounds.manstudy, Backgrounds.window, Backgrounds.fireplaceRoom, Images.cody],
};

const ICON_SPACE_NAME_MAP = {
  1: "ZenZone Beach Space",
  2: "ZenZone Mountain Space",
  3: "ZenZone Cafe Space",
  4: "ZenZone City Space",
  5: "ZenZone Dreamy Space",
  6: "ZenZone Art Space",
  7: "ZenZone Galaxy Space",
  8: "ZenZone Pet Space",
  9: "ZenZone Snow Space",
  10: "ZenZone Workspace",
};

const INITIAL_ICON_INDICES = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
};

const Shuffle = ({ onBackgroundChange }) => {
  const [iconIndices, setIconIndices] = useState(INITIAL_ICON_INDICES);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleIconClick = useCallback((id) => {
    const backgrounds = ICON_BACKGROUND_MAP[id];
    const currentIndex = iconIndices[id];
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    
    setIconIndices(prev => ({
      ...prev,
      [id]: nextIndex
    }));
    
    if (onBackgroundChange) {
      onBackgroundChange(backgrounds[nextIndex], ICON_SPACE_NAME_MAP[id]);
    }
  }, [iconIndices, onBackgroundChange]);

  const swiperBreakpoints = useMemo(() => ({
    300: { slidesPerView: 1 },
    768: { slidesPerView: 4.5, slidesPerGroup: 4, slidesPerColumn: 2 },
  }), []);

  return (
    <>
      <div>
        <Swiper
          className="mySwiper"
          breakpoints={swiperBreakpoints}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          spaceBetween={10}
        >
          {SPACE_ICONS.map(({ id, icon }) => (
            <SwiperSlide key={id} className="text-center">
              <div
                className="border-[1px] glass_item flex justify-center items-center rounded-md p-3 cursor-pointer"
                onClick={() => handleIconClick(id)}
              >
                <img src={icon} alt="" className="w-[30px] h-[30px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="text-xs font-medium text-thDark py-2">
        Click an emoji multiple times for more content
      </p>
      <div className="Control mt-3 flex justify-between">
        <div>
          <h1 className="text-xl text-thDark font-medium">Shuffle Spaces</h1>
        </div>
        <div className="btn_area flex">
          <div className="cursor-pointer" ref={navigationPrevRef}>
            <FiChevronLeft className="text-thDark" size={25} />
          </div>
          <div className="cursor-pointer text-thDark" ref={navigationNextRef}>
            <FiChevronRight size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shuffle;
