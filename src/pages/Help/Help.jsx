import React, { lazy, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
//Content
import ContentLayout from "./ContentLayout";

//Pages
const Introduction = lazy(() => import("./Content/Introduction"));
const FAQ = lazy(() => import("./Content/FAQ"));

const navData = [
  {
    id: 1,
    title: "Help Center",

    items: [
      { title: "Getting Started", dest: "" },
      { title: "Pro FAQ", dest: "faq" },
    ],
  }
];

const Help = () => {
  const { pathname } = useLocation();
  const render = (params) => {
    let section = {
      title: "",
      quote: "",
      component: "",
    };
    switch (params) {
      case "/help":
        section.component = <Introduction />;
        section.title = "Introduction";
        section.quote = "Need help?";
        return section;
      case "/help/faq":
        section.component = <FAQ />;
        section.title = "FAQ";
        section.quote = "Where you know all your answers";
        return section;

      default:
        section.component = <Introduction />;
        section.title = "Introduction";
        section.quote = "Need help?";
        return section;
    }
  };
  let contentSection = render(pathname);
  return (
    <>
      <main className="lg:flex lg:flex-row flex flex-col-reverse h-full justify-start relative w-full text-gray-700 top-20 mb-28">
        <nav className="lg:gap-2 lg:basis-1/6 w-full flex flex-col  bg-white px-6 pt-4">
          <Navigation data={navData} />
        </nav>
        <section className="bg-white lg:basis-4/6 block w-full lg:px-48 py-20 px-6">
          <ContentLayout
            title={contentSection.title}
            quote={contentSection.quote}
          >
            {contentSection.component}
          </ContentLayout>
        </section>
        <section className="lg:inline hidden bg-white basis-1/6 px-6"></section>
      </main>
    </>
  );
};

export default Help;
