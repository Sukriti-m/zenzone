import React from "react";
import { Link } from "react-router-dom";
import Genres from "../../components/Genres";
import CategoryArticle from "./CategoryArticle";
import Title from "./Title";
import Images from "../../assets/images";
import submit from "../../assets/images/submit.mp4";
const Showcase = () => {
  const Category = [
    {
      id: 1,
      tittle: "🔮 Lofi",
      src: (
        <img
          src={Images.lofi}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 2,
      tittle: "🏙 City",
      src: (
        <img
          src={Images.Hongkong}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 3,
      tittle: "💻 Code",
      src: (
        <img
          src={Images.cody}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 4,
      tittle: "🎨 Art",
      src: (
        <img
          src={Images.train}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 5,
      tittle: "👾 Games",
      src: (
        <img
          src={Images.fuji}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 6,
      tittle: "👩‍💻Study w/ me",
      src: (
        <img
          src={Images.ig4}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 7,
      tittle: "🏔Nature",
      src: (
        <img
          src={Images.aquarium}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 8,
      tittle: "🧠 Anime",
      src: (
        <img
          src={Images.bluesky}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
    {
      id: 9,
      tittle: "🪟 Window",
      src: (
        <img
          src={Images.cozyroom}
          alt=""
          className="object-cover h-full rounded-xl"
        />
      ),
    },
  ];
  return (
    <div className="pt-20">
      <section>
        <div className="pt-10">
          <Title
            title={"How to submit a space to ZenZone?"}
            content="3 Step"
            className="flex-col-reverse"
          />
        </div>
        <div className="mx-4 lg:mx-auto lg:w-fit bg-white rounded-2xl  px-6 py-6">
          <div>
            <p className="text-lg text-white-500 font-semibold">Perks:</p>
            <ul className="list-disc mx-6 mt-2 text-thBlack lg:font-medium">
              <li>
                You want to help hundreds of thousands of people worldwide stay
                focused
              </li>
              <li>
                You want to drive traffic to your social media from featured
                post!
              </li>
              <li>
                If your content is liked by the community we will add you as a
                verified creator
              </li>
            </ul>
          </div>
          <div className="mt-1 py-3">
            <p className="text-lg text-white-500 font-semibold">
              We will only select spaces that match our content guidelines:
            </p>
            <ul className="list-disc mx-6 mt-2 text-thBlack lg:font-medium">
              <li>
                Add videos that match the category.
              </li>
              <li>Only upload your own original videos</li>
              <li>
                Videos must be 10-20 min in length (max 2GB), HD and horizontal
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-10 mb-10">
          <Title title={"1. Select a category"} />
        </div>
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-6 gap-y-4 lg:gap-y-6 lg:w-fit">
          {Category.map(({ id, tittle, src }) => (
            <Link key={id}>
              <div className="w-fit">
                <CategoryArticle tittle={tittle} img={src} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div className="pt-10 mb-10">
          <Title title={"2. Submit a video in the category"} />
        </div>
        <div className="mx-10 lg:mx-auto lg:w-[41rem] h-[19rem] lg:h-[31.25rem] overflow-hidden rounded-xl">
          <video autoPlay loop muted className="object-cover min-w-full h-full">
            <source src={submit} type="video/mp4" />
          </video>
        </div>
      </section>
      <section>
        <div className="pt-10">
          <Title
            title={"3. ZenZone Team will review your submission"}
            content={
              "If selected, you will receive an email notifying your submission has been accepted in 2 hrs - 2 weeks."
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Showcase;
