import React from "react";

const Circle = ({ duration, trackProgress }) => {
  const strokeDasharray = 2 * Math.PI * (45 / 2) - 10;
  const currentPercentage = duration
    ? Math.round((trackProgress / duration) * 100)
    : 0;
  return (
    <svg width={50} height={50} className="rotate-[-78deg]">
      <g>
        <circle
          r={45 / 2}
          cx="50%"
          cy="50%"
          fill="transparent"
          stroke={"#ffffffa3"}
          strokeWidth={"0.2rem"}
          strokeLinecap="round"
        ></circle>
        <circle
          r={45 / 2}
          cx="50%"
          cy="50%"
          fill="transparent"
          stroke={"#ffff"}
          strokeWidth={"0.2rem"}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={
            currentPercentage
              ? ((100 - currentPercentage) * strokeDasharray) / 100
              : 0
          }
          strokeLinecap="round"
          className="duration-300 ease-in"
        ></circle>
      </g>
    </svg>
  );
};

export default Circle;
