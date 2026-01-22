import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Lazy } from "swiper";

//import swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

const CollectionLayout = ({ title, description, imgData }) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl text-gray-700">{title}</h1>
      <h2 className="text-gray-500 font-normal text-sm mb-4">{description}</h2>
      <section>
        <Swiper
          // install Swiper modules

          breakpoints={{
            300: {
              // width: 576,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          lazy={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            enabled: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Lazy]}
          className="mySwiper"
        >
          {imgData.map(({ id, name, title, desc }) => (
            <SwiperSlide key={id} className="text-center">
              <div className="rounded-lg w-fit h-[9rem] mb-2">
                <img
                  data-src={name}
                  alt={id}
                  className="w-[15rem] rounded-lg swiper-lazy object-cover"
                />
              </div>
              <div className="text-left space-y-2">
                <h2 className="text-base font-bold text-black max-w-[15rem]">
                  {title}
                </h2>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>

              <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default CollectionLayout;
