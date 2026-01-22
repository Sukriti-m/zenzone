import React, { useEffect, useRef, useState } from "react";
const AnimatedArticles = ({
  scrollCheck, // no longer used for visibility, kept for compatibility
  yMin,
  yMax,
  ymblMin,
  ymblMax,
  title,
  content,
  reverse,
  mousePos,
  imgSrc,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // 20% of the section in view
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  let Y = isVisible ? 0 : 60;
  let X = mousePos.x / 100;
  let Opacity = isVisible ? 1 : 0;
  let Scale = isVisible ? 1 : 0.9;

  if (X > 7) {
    X = 5;
  }
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-4 lg:gap-y-0 mx-auto w-[90%] items-center lgjustify-items-center md:gap-x-32"
    >
      <div
        className={`content max-w-[30rem] h-fit mt-40 lg:mt-0 ${reverse?.col2} ${
          reverse?.col2 ? "lg:ml-auto lg:mr-8" : ""
        }`}
      >
        <h2
          className="font-bold w-full lg:mx-auto text-3xl lg:text-6xl pb-6 text-thBlack will-change-transform transition-all ease-out duration-700"
          style={{
            transform: `translate3d(0px,${Y}px, 0px) scale3d(${Scale}, ${Scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${Opacity}`,
          }}
        >
          {title}
        </h2>
        <p
          className="font-normal text-[21px] text-gray-500 py-4 leading-relaxed will-change-transform transition-all ease-out duration-1000"
          style={{
            transform: `translate3d(0px,${Y}px, 0px) scale3d(${Scale}, ${Scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: `${Opacity}`,
          }}
        >
          {content}
        </p>
      </div>
      <div className={`relative rounded-xl ${reverse?.col1} ${reverse?.row1}`}>
        <div className="gif_tag w-[320px] lg:w-full ">
          <img
            src={imgSrc[1]}
            alt=""
            className={`absolute min-w-[21rem] will-change-transform transition duration-500 ${reverse?.hidden}`}
            style={{
              transform: `translate3d(${X * -1}rem,${
                (mousePos.y / 100) * -1
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
          <img
            src={imgSrc[2]}
            alt=""
            className={`absolute min-w-[21rem] will-change-transform transition duration-500 ${reverse?.hidden}`}
            style={{
              transform: `translate3d(${X - 3}rem,${
                (mousePos.y / 100) * -1 - 3
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
          <img
            src={imgSrc[0]}
            alt=""
            className="w-[36rem] lg:h-[39rem] will-change-transform transition duration-500"
            style={{
              transform: `translate3d(${X}rem,${
                mousePos.y / 100
              }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedArticles;
