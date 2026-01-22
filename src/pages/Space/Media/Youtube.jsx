import React from "react";

const Youtube = ({ youtubeUrl }) => {
  console.log(youtubeUrl);
  return (
    <div className="">
      <iframe
        src={youtubeUrl}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Youtube;
