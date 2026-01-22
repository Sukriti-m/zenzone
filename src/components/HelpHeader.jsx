import React, { useState } from "react";

const listData = ["abc", "xyz"];

const HelpHeader = () => {
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const found = listData.filter((data) =>
    data.toLowerCase().includes(searchInput)
  );

  return (
    <>
      <header>
        <div
          className={`fixed w-full bg-[#f8f8f8] h-20 text-gray-700 z-30 mb-10 `}
        >
          <div className="flex flex-row justify-between items-center mx-auto px-6 h-full">
            <h1 className="text-gray-700 font-medium tracking-tight text-2xl">
              Help
            </h1>

            <span className="cursor-pointer" onClick={() => setSearch(true)}>
              Search
            </span>
          </div>
        </div>
      </header>
      {/* Search Section */}

      {search && (
        <div className="fixed z-30 inset-0 justify-center items-center   ">
          <div
            onClick={() => {
              setSearch(false);
            }}
            className="absolute bg-black inset-0 bg-opacity-70 flex flex-col"
          ></div>
          <div
            className={` bg-main-color absolute lg:inset-x-96  sm:inset-0 mobile:inset-0 rounded-sm  px-4 space-y-5 pt-5 z-50`}
          >
            <div className="flex justify-center items-center">
              <span
                className="ml-3  cursor-pointer p-2 hover:bg-mixed-gray hover:bg-opacity-60 hover:rounded-full text-white"
                onClick={() => {
                  setSearch(false);
                }}
              >
                Close
              </span>
            </div>
            <div className="w-full md:h-screen sm:h-screen ">
              <div
                className={`${
                  found.length === 0 && "rounded-b-md"
                } flex bg-white rounded-md  border-b-2 rounded-b-none`}
              >
                <input
                  type="text"
                  className={`basis-5/6 border-gray-400  w-full font-bold py-4 pl-2 rounded-t-md bg-mixed-blue placeholder-mixed-gray outline-none  focus:outline-mixed-black focus:outline-offset-2 focus:outline-1`}
                  placeholder="🔍 Search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <span
                  onClick={() => setSearchInput("")}
                  className="cursor-pointer basis-1/6 flex justify-center items-center"
                >
                  Clear
                </span>
              </div>
              <div className="bg-white border-t-0 rounded-b-md">
                <ul>
                  {found === 0 ? (
                    <div className="pt-12 w-full">
                      <span>Can't find this item</span>
                    </div>
                  ) : (
                    found.map((item) => (
                      <li className="border border-b-1 pl-2 py-4 border-gray-200 last:rounded-b-md">
                        {item}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpHeader;
