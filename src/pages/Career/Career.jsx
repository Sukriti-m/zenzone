import React from "react";
import Article from "./Article";
import Images from "../../assets/images";
const jobs = [
  {
    title: "Senior Full-stack Software Engineer",
    embed:
      "https://www.ycombinator.com/companies/ZenZone/jobs/fmIYUz2-senior-full-stack-software-engineer",
    style: true,
  },
  {
    title: "Senior Full-stack Software Engineer",
    embed:
      "https://www.ycombinator.com/companies/ZenZone/jobs/fmIYUz2-senior-full-stack-software-engineer",
    style: false,
  },
];

const values = [
  {
    title: "Team Player",
    desc: "You love to co-create and build on top of each other ideas",
    img: Images.book3d,
  },
  {
    title: "Team Player",
    desc: "You love to co-create and build on top of each other ideas",
    img: Images.heart,
  },
  {
    title: "Team Player",
    desc: "You love to co-create and build on top of each other ideas",
    img: Images.gen,
  },
];

const sections = [
  {
    list: [
      {
        desc: "ZenZone is building modular productivity/focus software for people like you! Our mission is to prevent focus drift by making it simple to manage your productivity, so you can spend more time getting your actual work done.",
      },
    ],
    img: Images.girl,
    reverse: false,
    listStyle: false,
  },
  {
    title: "Who are we",
    img: Images.chart3d,
    list: [
      {
        desc: "Our founding team met while working on another startup idea at UP. We went through Y Combinator Winter 2022 and raised our seed round right after. ",
      },
      {
        desc: "We have an office in Seattle and are hybrid. Team members can work in Seattle at our office or remotely elsewhere. ",
      },
    ],
    reverse: false,
    listStyle: false,
  },
  {
    title: "Investor",
    desc: "ZenZone has raised an over-subbed Seed Round from top tier Venture Capital funds and angels.",
    img: Images.chart3d,
    list: [
      {
        desc: "Y Combinator",
        embed: "https://www.ycombinator.com/",
      },
      {
        desc: "University of Washington Jones & Fosters",
        embed: "https://foster.uw.edu/",
      },
      {
        desc: "To be announced…",
      },
    ],
    reverse: true,
    listStyle: true,
  },
];

const Career = () => {
  return (
    <main className="h-full relative w-full text-gray-700 top-20 mb-28 lg:px-80 px-16 py-28 space-y-32">
      <h1 className="text-5xl font-semibold tracking-wide">Careers</h1>
      <section>
        {sections.map((section, index) => (
          <Article
            key={index}
            title={section?.title}
            img={section.img}
            list={section?.list}
            desc={section?.desc}
            reverse={section.reverse}
            listStyle={section.listStyle}
          />
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="font-semibold tracking-normal">Open roles</h2>
        <p>
          If you don’t see a role you fit in but you’re still extremely
          interested in working with us, please reach out!
        </p>

        <ul className="grid grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <li
              key={index}
              className={`${
                job.style
                  ? "bg-transparent text-black hover:text-gray-500 border border-gray-400"
                  : "bg-blue-400 text-white hover:text-gray-600"
              } flex justify-center items-center h-36 rounded-3xl tracking-wide`}
            >
              <a
                href={job?.embed}
                className=" font-bold text-xl tracking-wide max-w-xs px-10 "
              >
                {job?.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-5">
        <h2 className="font-semibold tracking-normal">Core Values</h2>
        <p>
          Join a team of makers. We are story tellers, indie hackers, and
          problem solvers.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index}>
              <img
                src={value.img}
                alt={value.title}
                className="pb-5 w-[144px] h-[144px]"
              />
              <h3 className="font-bold tracking-wide text-2xl pb-5">
                {value.title}
              </h3>
              <p className="text-gray-400  ">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-5">
        <p className="mb-11">
          Our team has learned our craft in various high-growth environments
        </p>
        <div className="grid grid-cols-4 gap-12">
          <img src={Images.logo3} alt="Google" className="-mt-5" />
          <img
            src="https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fa69ccb39-7a82-470d-a51b-7802a3361525.png&w=1920&q=80"
            alt="Tiktok"
            className="py-3"
          />
          <img
            src="https://philosophical-crayfish.super.site/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F66e82836-0ba1-4402-bf8e-1414f8a6f1f8%2Fimages%2Fea4f06fa-ffad-4dc6-a237-2ac43a1bde0a.png&w=1920&q=80"
            alt="Tableau"
            className="py-3"
          />
          <img src={Images.logo4} alt="Vimeo" />
        </div>
      </section>
    </main>
  );
};

export default Career;
