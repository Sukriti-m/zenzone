import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images";
import Articles from "./Articles";
import AnimatedArticles from "./AnimatedArticles";
import Slide from "../../components/Slide";
import Transforming from "./Transforming";

const listData = [
  {
    yMin: 2400,
    yMax: 2840,
    ymblMin: 900,
    ymblMax: 1200,
    src: [Images.agif],
    title: "One-click to task and calendar",
    content:
      "Quick access to your simple task management without leaving your flow",
    reverse: { hidden: "hidden" },
  },
  {
    yMin: 3900,
    yMax: 4450,
    ymblMin: 2400,
    ymblMax: 2900,
    src: [Images.time, Images.circlebg, Images.chart],
    title: "Feel connected with others",
    content:
      "Improve morale by experiencing digital spaces with your team or friends",
    reverse: { col1: "lg:col-[1]", col2: "col-[2]", row1: "lg:row-[1]" },
  },
];

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollCheck, setScrollCheck] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({});
  const [bannerCheck, setBannerCheck] = useState(false);
  //get window with for switch col
  const [width, setWidth] = useState(window.innerWidth);
  const handleMouseMove = (event) => {
    // 👇 Get mouse position relative to element
    const localX = event.clientX - event.target.offsetLeft;
    const localY = event.clientY - event.target.offsetTop;
    setLocalMousePos({ x: localX, y: localY });
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    scrollCheck ? setScrollCheck(false) : setScrollCheck(true);
  };
  // console.log(scrollPosition);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  //get window with for switch col
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, [width]);
  useLayoutEffect(() => {
    document.body.style = "overflow-y:auto";
  }, []);
  return (
    <div className="relative top-40 py-5 z-0">
      <div className="thumb mx-auto lg:w-1/2 h-[23rem] flex items-center">
        <div className="circle absolute rounded-[650px] opacity-[.97] blur-3xl mx-auto bg-circle-pattern w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] backdrop-blur-sm"></div>
        <div className="Tittile w-full lg:w-1/2 absolute flex items-center flex-wrap justify-center">
          <h2 className="font-extrabold text-thBlack text-center font-Circularstd text-4xl lg:text-[56px] lg:leading-[64px]">
            Your space to focus and get things done
          </h2>
          <p className="text-[20px] text-center">
            Meet the new standard for modern task management
          </p>
          <div className="btn-area w-full mb-10 mt-5 flex flex-wrap items-center justify-center">
            <Link to="/zenzonespace">
              <div className="btn1 lg:ml-6 px-5 py-3 bg-white w-fit rounded-lg text-black border-2 border-thBlack hover:border-white text-lg font-medium cursor-pointer">
              Start Zenning
            </div>
            </Link>
          </div>
          <div className="flex  ">
            <Link className="cursor-pointer">
              <div
                className={`uppercase font-bold cursor-pointer ${
                  bannerCheck ? "" : "border-b-2 border-black"
                }`}
                onClick={() => {
                  setBannerCheck(false);
                }}
              >
                with ZenZone
              </div>
            </Link>

            <span className="ml-10 cursor-pointer">
              <div
                className={`uppercase font-bold cursor-pointer ${
                  bannerCheck ? "border-b-2 border-black" : ""
                }`}
                onClick={() => {
                  setBannerCheck(true);
                }}
              >
                without ZenZone
              </div>
            </span>
          </div>
        </div>
      </div>
      {bannerCheck ? (
        <img
          src={Images.without}
          className="relative z-10 mx-auto"
          alt="banner"
        />
      ) : (
        <Transforming scrollPosition={scrollPosition} />
      )}
      <div className="py-20 hidden lg:block">
        <p className="text-4xl font-bold text-thBlack text-center">
          How it works
        </p>
        <p className="text-[20px] text-center text-gray-500 pt-7">
          The only screen you need to get all your work done
        </p>
      </div>
      <div className="lg:pb-20">
        <Articles Scrollcheck={scrollPosition} width={width} />
      </div>
      {listData.map((data, index) => (
        <div key={index} className={index === 0 ? "lg:pt-20" : "lg:pt-40"}>
          <AnimatedArticles
            scrollCheck={scrollPosition}
            yMin={data.yMin}
            yMax={data.yMax}
            ymblMin={data.ymblMin}
            ymblMax={data.ymblMax}
            mousePos={localMousePos}
            imgSrc={data.src}
            title={data.title}
            content={data.content}
            reverse={data.reverse}
            width={width}
          />
        </div>
      ))}
      <div className="pt-40 pb-16">
        <p className="text-3xl lg:text-4xl font-bold text-thBlack text-center">
          How others use ZenZone
        </p>
      </div>
      <div className="pb-40 overflow-x-hidden">
        <Slide width={width} />
      </div>
    </div>
  );
};

export default Home;
