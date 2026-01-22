import React from "react";

const ContentLayout = ({ children, title, quote }) => {
  return (
    <main className="space-y-5">
      <h1 className="font-bold lg:text-5xl text-3xl">{title}</h1>
      <div className="border-gray-400 border border-opacity-40 rounded py-2 px-3">
        {quote}
      </div>
      <section>{children}</section>
    </main>
  );
};

export default ContentLayout;
