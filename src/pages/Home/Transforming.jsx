import React from "react";
import Images from "../../assets/images";
const Transforming = ({ scrollPosition }) => {
  return (
    <div className="item flex justify-center relative z-10">
      <img loading="lazy" src={Images.lap} alt="" className="relative " />
      <img
        loading="lazy"
        src={Images.face}
        alt=""
        className="absolute will-change-transform"
        style={{
          transform: `translate3d(${
            -scrollPosition / 100
          }%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      />
      <img
        loading="lazy"
        src={Images.list}
        alt=""
        className="absolute will-change-transform"
        style={{
          transform: `translate3d(${
            scrollPosition / 100
          }%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
};

export default Transforming;
