import React, { useEffect, useRef, useState } from "react";
import "animate.css";
// import { Player, ControlBar } from "video-react";

// import Images from "../../assets/images";
import videoposter from "../../assets/images/videoposter.mp4";

const Articles = ({ Scrollcheck, width }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  let y = isVisible ? 0 : 60;
  let opacity = isVisible ? 1 : 0;
  let scale = isVisible ? 1 : 0.9;
  let css = "";
  if (width < 400) {
    css = "row-[1] mt-40";
  }
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-18 gap-y-4 lg:gap-y-0 mx-auto w-[90%] items-center justify-items-center"
    >
      <div className="set_overflowvideo relative w-[24rem] h-[15rem] lg:w-[38rem] lg:h-[27rem] overflow-hidden rounded-xl">
        <div className="video_tag absolute w-[19rem] h-[14rem] lg:w-[53rem] lg:h-[27rem] top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-10 ">
          <video autoPlay loop muted className="object-cover min-w-full h-full">
            <source src={videoposter} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={`content max-w-md h-fit ${css}`}>
        <h2
          className="font-bold w-1/2 lg:w-full mx-auto lg:text-6xl pb-6 text-thBlack will-change-transform transition-all ease-out duration-700 text-3xl"
          style={{
            transform: `translate3d(0px,${y}px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${opacity}`,
          }}
        >
          Deep focus experiences
        </h2>
        <p
          className="font-normal lg:text-[21px] lg:text-gray-500 lg:leading-relaxed py-4 will-change-transform transition-all ease-out duration-1000 text-sm text-black leading-6"
          style={{
            transform: `translate3d(0px,${y}px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${opacity}`,
          }}
        >
          Immersive virtual experiences and pomodoro timer to get things done
        </p>
      </div>
    </div>
  );
};

export default Articles;
