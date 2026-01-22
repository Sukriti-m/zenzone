import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const WorkArticle = ({ tit, descr, img, url, textBtn, css }) => {
  return (
    <div
      className={`lg:px-24 flex flex-wrap items-center justify-center gap-x-36 ${css}`}
    >
      <div className="lg:min-w-[31.25rem] lg:max-w-[38.25rem]">
        <div className="ml-3 pr-20 ">
          <h1 className="text-2xl font-solata font-medium lg:text-4xl lg:font-black text-thBlack">
            {tit}
          </h1>
          <p className="lg:min-w-[31.25rem] text-thBlack mt-2 text-sm lg:text-2xl font-normal font-solata">
            {descr}
          </p>
        </div>
        <div className="flex justify-center lg:ml-3 lg:justify-start mt-5 mb-8">
          <Link to={url}>
            <Button Content={textBtn} />
          </Link>
        </div>
      </div>
      <div className="img w-fit flex justify-center ">{img}</div>
    </div>
  );
};

export default WorkArticle;
