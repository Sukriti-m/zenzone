import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SpaceSlide = ({ slide, headTit, smallTit }) => {
  return (
    <div className="flex flex-col flex-col-reverse lg:px-32 mb-10">
      <div className="ml-3 lg:px-10">
        <Swiper
          className="mySwiper"
          breakpoints={{
            300: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 4,
            },
          }}
          loop={true}
        >
          {slide.map(({ id, Tit, Des, Img, Tit2, Des2, Img2 }) => (
            <SwiperSlide key={id} className="text-center">
              <div className="flex w-[23.5rem] overflow-x-hidden">
                <div>
                  {Img}
                  <div className="text-left space-y-2">
                    <h2 className="text-lg font-bold text-black">{Tit}</h2>
                    <p className="text-sm text-gray-600">{Des}</p>
                  </div>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                </div>
                <div className="lg:hidden">
                  {Img2}
                  <div className="text-left space-y-2">
                    <h2 className="text-lg font-bold text-black">{Tit2}</h2>
                    <p className="text-sm text-gray-600">{Des2}</p>
                  </div>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-between px-3 py-4">
        <div className="max-w-[13rem] lg:max-w-[26rem]">
          <h1 className="text-xl lg:text-3xl font-medium">{headTit}</h1>
          <p className="text-sm lg:text-lg text-thGray">{smallTit}</p>
        </div>
      </div>
    </div>
  );
};

export default SpaceSlide;
