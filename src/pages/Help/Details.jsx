import React from "react";
import { useLocation } from "react-router-dom";

const detailsData = [
  {
    path: "mac",
    guide: [
      {
        title: `Drag ZenZone to your "Applications." Click on ZenZone icon in the dock, then sign in or sign up`,

        img: "https://help.ZenZone.io/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F698a2729-5713-4992-a8cf-7a9ee9ec4f05%2Fimages%2F83b500c7-820d-4680-8e46-65fbfd142fad.png&w=1920&q=80",
      },
      {
        title: "Connect your calendar in the menubar",
        steps: [
          "Once opened, connect your Google Calendar or Outlook Calendar",
          "More instruction on how to connect calendar here",
        ],
        img: "https://help.ZenZone.io/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F698a2729-5713-4992-a8cf-7a9ee9ec4f05%2Fimages%2F55adcd80-0da0-4128-935d-d55f09dff2a2.png&w=1920&q=80",
      },
    ],
  },
];

const Details = () => {
  const { pathname } = useLocation();
  let data = detailsData.find(
    (detail) => detail.path === pathname.substring(19)
  );
  console.log(data);
  return (
    <>
      <main className="h-full  px-80 py-24 relative w-full text-gray-700 top-20 mb-28 bg-white ">
        <section>
          {data ? (
            <>
              <h1 className="font-bold text-4xl mb-5">{`${data.path
                .charAt(0)
                .toUpperCase()}${data.path.substring(1)}`}</h1>
              <section className="space-y-5">
                {data.guide.map((detail, index) => (
                  <>
                    <h2 className="text-2xl font-bold">{`Step ${index + 1} - ${
                      detail.title
                    }`}</h2>
                    <ul className="list-disc pl-6">
                      {detail.steps &&
                        detail?.steps.map((step) => <li>{step}</li>)}
                    </ul>
                    <img src={detail?.img} alt={`step-${index}`} />
                  </>
                ))}
              </section>
            </>
          ) : (
            <div>This doesn't have any content</div>
          )}
        </section>
      </main>
    </>
  );
};

export default Details;
