import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaTimesCircle, FaSearch, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ListSpace from "../pages/Home/ListSpace";
import Images from "../assets/images";

const Header = () => {
  const [checkMenu, setcheckMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const typingTimeout = useRef(null);

  const Spaces = [
    {
      SpaceName: "The Georgia Aquarium",
      author: "[LIVE]",
      imgtag: (
        <img
          src={Images.aquarium}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 1,
    },
    {
      SpaceName: "Code with me",
      author: "Yaroslav Shuraev",
      imgtag: (
        <img
          src={Images.cody}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 2,
    },
    {
      SpaceName: "Shanghai, China",
      author: "",
      imgtag: (
        <img
          src={Images.shanghai}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 3,
    },
    {
      SpaceName: "a train ride of peace and quiet",
      author: "Chill with Taiki",
      imgtag: (
        <img
          src={Images.train}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 4,
    },
    {
      SpaceName: "City and Sea view, Wong Chuk Hang, Hong Kong",
      author: "alieslife_",
      imgtag: (
        <img
          src={Images.Hongkong}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 5,
    },
    {
      SpaceName: "Side Streets",
      author: "The Jazz Hop Cafe",
      imgtag: (
        <img
          src={Images.japanstreet}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 6,
    },
    {
      SpaceName: "space in my heart ⛅chill lofi mix",
      author: "billow",
      imgtag: (
        <img
          src={Images.lofi}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 7,
    },
    {
      SpaceName: "Our Blue Sky",
      author: "SagiTori",
      imgtag: (
        <img
          src={Images.bluesky}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 8,
    },
    {
      SpaceName: "Cozy room ambience ASMR🌙",
      author: "RainRider Ambience",
      imgtag: (
        <img
          src={Images.cozyroom}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 9,
    },
    {
      SpaceName: "Fujisan. 🗻 japan lofi vibes",
      author: "The Jazz Hop Cafe",
      imgtag: (
        <img
          src={Images.fuji}
          alt=""
          className="w-20 h-full object-cover rounded-md max-w-[21rem] lg:max-h-44 lg:w-auto"
        />
      ),
      id: 10,
    },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(() => {
      setSearch(value);
    }, 300);
  };

  const Keys = ["SpaceName", "author"];
  const Space_filter = Spaces.filter((Space) =>
    Keys.some((key) => Space[key].toLowerCase().includes(search.toLowerCase()))
  );

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
        setSearch("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const menu = [
    {
      id: 1,
      name: "Explore",
    },
    {
      id: 2,
      name: "Usecases",
    },
    {
      id: 3,
      name: "Help",
    },
  ];

  return (
    <div>
      <div className="fixed w-full bg-[#f8f8f8] h-20 text-gray-700 z-30 mb-10">
        <div className="flex flex-row justify-between items-center mx-auto px-6 h-full">
          <div className="flex w-1/2 items-center ">
            <Link to="/">
              <h1 className="text-gray-700 font-medium tracking-widest text-2xl cursor-pointer">
                ZenZone
              </h1>
            </Link>
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 pl-4 pr-4 py-3 ml-3 bg-white border border-gray-200 rounded-3xl cursor-pointer hover:border-gray-300 transition-colors shadow-sm"
            >
              <FaSearch className="text-gray-400 text-sm" />
              <span className="text-sm text-gray-500">Search a space</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              <li className="p-4">
                <a
                  href="https://github.com/Sukriti-m/zenzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-thOrange duration-200"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={20} />
                </a>
              </li>
              {menu.map(({ id, name }) => (
                <li
                  key={id}
                  className="p-4 text-sm font-medium text-gray-700 hover:text-thOrange duration-200"
                >
                  <Link
                    className="cursor-pointer"
                    to={name === "Usecases" ? "/howzenzonework" : `/${name.toLowerCase()}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setcheckMenu(!checkMenu)}
            className="block lg:hidden text-gray-700"
          >
            {checkMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      <div
        className={` ${
          checkMenu ? "top-20 rounded-2xl opacity-95" : "top-[-100%]"
        }  w-full bg-[#f8f8f8] text-gray-700 absolute z-10 left-0 h-fit lg:hidden py-12 flex justify-center text-center duration-500 `}
      >
        <ul>
          <li className="p-4 flex justify-center">
            <a
              href="https://github.com/Sukriti-m/zenzone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-thBlue duration-200"
              aria-label="GitHub Repository"
            >
              <FaGithub size={24} />
            </a>
          </li>
          {menu.map(({ id, name }) => (
            <li
              key={id}
              className="p-4 text-sm font-medium uppercase hover:text-thBlue duration-200"
            >
              <Link
                className="cursor-pointer"
                to={name === "Usecases" ? "/howzenzonework" : `/${name.toLowerCase()}`}
              >
                {name}
              </Link>
            </li>
          ))}
          <div className="py-3 px-8 bg-black text-white rounded-[10rem] text-sm font-medium cursor-pointer">
            Go to app
          </div>
        </ul>
      </div>

      {/* Search Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
              setSearch("");
            }
          }}
        >
          <div className="bg-white w-full max-w-6xl mt-20 mb-20 rounded-2xl shadow-2xl relative min-h-[500px]">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSearch("");
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <FaTimesCircle size={28} />
            </button>

            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl z-40">
              <div className="flex items-center">
                <h1 className="text-gray-700 font-medium tracking-widest text-2xl">
                  ZenZone
                </h1>
                <input
                  type="text"
                  placeholder="Try-Pet, Hawaii,..."
                  onChange={handleSearchChange}
                  autoFocus
                  className="pl-3 pr-24 py-3 ml-3 focus:outline-none text-sm text-thBlack rounded-2xl bg-gray-100 lg:w-[52rem] font-semibold"
                />
              </div>
            </div>

            {/* Modal Content - ListSpace */}
            <div className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-250px)]">
              <div className="pt-8">
                <ListSpace 
                  Space_filter={Space_filter.length > 0 ? Space_filter : Spaces}
                  onLinkClick={() => {
                    setIsModalOpen(false);
                    setSearch("");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
