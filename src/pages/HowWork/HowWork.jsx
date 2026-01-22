import React from "react";
import Genres from "../../components/Genres";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import videoposter from "../../assets/images/videoposter.mp4";
import WorkArticle from "./WorkArticle";
import Images from "../../assets/images";
import Slide from "../../components/Slide";
import SpaceSlide from "./SpaceSlide";

const TYPED_STRINGS = [
  "Study With Other",
  "Cafe In MexiCo",
  "Tokyo Views",
  "Beaches In Hawaii",
];

const HowWork = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = TYPED_STRINGS[currentIndex];
    let timeout;

    if (!isDeleting && typedText === currentString) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      // Finished deleting, move to next string
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % TYPED_STRINGS.length);
    } else if (isDeleting) {
      // Deleting characters
      timeout = setTimeout(() => {
        setTypedText(currentString.substring(0, typedText.length - 1));
      }, 100);
    } else {
      // Typing characters
      timeout = setTimeout(() => {
        setTypedText(currentString.substring(0, typedText.length + 1));
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting]);

  const Articles = [
    {
      id: 1,
      tit: "Unlock your brain w/ advanced space backgrounds & music",
      descr:
        "Explore over 500+ spaces based on your mood! From the top of the Himalayas to a Library in NYC, ZenZone creators want to help you focus.",
      img: (
        <img
          src={Images.cody}
          alt=""
          className="w-[21.875rem] h-[14.375rem] rounded-xl lg:w-[37.5rem] lg:h-[25rem]"
        />
      ),
      textBtn: "Explore spaces",
      url: "/",
    },
    {
      id: 2,
      tit: "Build your productivity dashboard",
      descr:
        "Drag & drop productivity tools - Pomodoro, Todo list, Spotify, notes, and more to get you in the flow.",
      img: (
        <img
          src={Images.bluesky}
          alt=""
          className="w-[21.875rem] h-[14.375rem] rounded-xl lg:w-[37.5rem] lg:h-[25rem]"
        />
      ),
      textBtn: "Try it out",
      url: "/space",
      css: "flex-row-reverse",
    },
    {
      id: 3,
      tit: "Track your daily focus",
      descr:
        "Cut off 2 hours of work time per day by building a habit in 7 days using the daily streak.",
      img: (
        <img
          src={Images.train}
          alt=""
          className="w-[21.875rem] h-[14.375rem] rounded-xl lg:w-[37.5rem] lg:h-[25rem]"
        />
      ),
      textBtn: "Try it out",
      url: "/",
    },
    {
      id: 4,
      tit: "Co-work with others with video chat",
      descr:
        "Achieve maximum accountability by inviting your friends or colleagues to your room!",
      img: (
        <img
          src={Images.cozyroom}
          alt=""
          className="w-[21.875rem] h-[14.375rem] rounded-xl lg:w-[37.5rem] lg:h-[25rem]"
        />
      ),
      textBtn: "Try it out",
      url: "/space",
      css: "flex-row-reverse",
    },
  ];
  const Slide1 = [
    {
      id: 1,
      Tit: "Cozy room ASMR🌙",
      Des: "Explore over fish based on your mood!",
      Img: (
        <img
          src={Images.cozyroom}
          alt=""
          className="h-[15.625rem] min-w-[15.625rem] max-w-[15.625rem] lg:h-[9.375rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
      Tit2: "Side Streets",
      Des2: "The Jazz Hop Cafe",
      Img2: (
        <img
          src={Images.japanstreet}
          alt=""
          className="h-[15.625rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
    },
    {
      id: 2,
      Tit: "Side Streets",
      Des: "The Jazz Hop Cafe",
      Img: (
        <img
          src={Images.japanstreet}
          alt=""
          className="h-[15.625rem] lg:h-[9.375rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
      Tit2: "Shanghai, China",
      Des2: "Cut off 2 hours of work.",
      Img2: (
        <img
          src={Images.shanghai}
          alt=""
          className="h-[15.625rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
    },
    {
      id: 3,
      Tit: "Shanghai, China",
      Des: "Cut off 2 hours of work.",
      Img: (
        <img
          src={Images.shanghai}
          alt=""
          className="h-[15.625rem] lg:h-[9.375rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
      Tit2: "⛅chill lofi mix",
      Des2: "billow",
      Img2: (
        <img
          src={Images.lofi}
          alt=""
          className="h-[15.625rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
    },
    {
      id: 4,
      Tit: "⛅chill lofi mix",
      Des: "billow",
      Img: (
        <img
          src={Images.lofi}
          alt=""
          className="h-[15.625rem] lg:h-[9.375rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
      Tit2: "Fujisan. 🗻 japan",
      Des2: "RainRider Ambience",
      Img2: (
        <img
          src={Images.fuji}
          alt=""
          className="h-[15.625rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
    },
    {
      id: 5,
      Tit: "Fujisan. 🗻 japan",
      Des: "RainRider Ambience",
      Img: (
        <img
          src={Images.fuji}
          alt=""
          className="h-[15.625rem] lg:h-[9.375rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
      Tit2: "Cozy room ASMR🌙",
      Des2: "Explore over fish based on your mood!",
      Img2: (
        <img
          src={Images.cozyroom}
          alt=""
          className="h-[15.625rem] min-w-[15.625rem] max-w-[15.625rem] rounded-3xl swiper-lazy object-cover pb-2"
        />
      ),
    },
  ];
  return (
    <div className="pt-20">
      <div className="pt-14 flex flex-col items-center justify-center lg:mb-14">
        <p className="mb-4 text-xl font-medium text-thGray hidden lg:block">
          All-in-one Workspace for deepwork with
        </p>
        <div className="hidden lg:block">
          <span className="text-6xl font-bold">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <Link to="/zenzonespace">
          <Button Content={"Try it out"} />
        </Link>
      </div>
      <div className="video mb-32 flex items-center justify-center">
        <div className="set_overflowvideo relative w-[24rem] h-[15rem] lg:w-[50rem] lg:h-[25rem] overflow-hidden rounded-xl">
          <div className="video_tag absolute w-[19rem] h-[14rem] lg:w-[53rem] lg:h-[27rem] top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-10 ">
            <video
              autoPlay
              loop
              muted
              className="object-cover min-w-full h-full"
            >
              <source src={videoposter} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mb-32">
        <h3 className="mb-4 text-3xl font-bold hidden lg:block">
          Use ZenZone here, there and everywhere
        </h3>
        <p className="mb-4 text-xl font-light font-solata hidden lg:block">
          <strong>
            Feeling stuck at home or in the office, losing focus, and feeling
            burnout?
          </strong>
        </p>
      </div>
      {Articles.map(({ id, tit, descr, img, url, textBtn, css }) => (
        <section key={id} className="mb-32">
          <WorkArticle
            tit={tit}
            descr={descr}
            img={img}
            url={url}
            textBtn={textBtn}
            css={css}
          />
        </section>
      ))}
      <div className="pb-40">
        <Slide />
      </div>
      <div>
        <SpaceSlide slide={Slide1} headTit={"New Space"} />
      </div>
      <div className="pb-10">
        <SpaceSlide
          slide={Slide1}
          headTit={"Community Favs"}
          smallTit={"Hand picked by the ZenZone community weekly"}
        />
      </div>
    </div>
  );
};

export default HowWork;
