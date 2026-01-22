import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import axios from "axios";

import { GrRefresh } from "react-icons/gr";
import PlayAudio from "./PlayAudio";
import Youtube from "./Youtube";
import Track from "./Track";
//base api url
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
const clientId = "3391d647cb654818800fd295ffd04401";
const redirectUri = `${window.location.origin}/zenzonespace`;
const authEndpoint = "https://accounts.spotify.com/authorize?";
const scope = [
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "user-follow-read",
  "user-follow-modify",
];
const loginAccess = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
  "%20"
)}&response_type=token`;
const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};
const Media = ({ setcontrolState, controlState }) => {
  const nodeRef = useRef(null);
  //api state variable
  const [token, setToken] = useState("");
  const [response, setresponse] = useState();
  const [track, settrack] = useState();
  //media mode state
  const [mediaState, setmediaState] = useState("standard");
  const [inputUrl, setinputUrl] = useState();
  //play audio state
  const [tracks, settracks] = useState([]);
  const [currentTrack, setcurrentTrack] = useState({});
  const [trackIndex, settrackIndex] = useState(0);
  //useEffect area
  useLayoutEffect(() => {
    document.body.style = "overflow-y:hidden";
  }, []);
  
  useEffect(() => {
    if (controlState.media.stat !== "true") {
      return;
    }

    let controler = new AbortController();
    const hash = window.location.hash;
    let token = window.sessionStorage.getItem("token");
    
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.sessionStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
      token = _token;
      window.history.replaceState(null, null, window.location.pathname);
    } else if (token) {
      setToken(token);
      setClientToken(token);
    } else {
      window.location.assign(loginAccess);
      return;
    }

    if (token) {
    const getapi = async () => {
        try {
      const data = await apiClient
        .get("playlists/4aFB9we2DxFCIfJN4aClnE", {
          signal: controler.signal,
        })
        .then((res) => {
          setresponse(res.data);
          settracks(res.data.tracks.items);
        });
        } catch (error) {
          console.error("Error fetching playlist:", error);
        }
    };
    getapi();
    }

    return () => {
      controler?.abort();
    };
  }, [controlState.media.stat]);
  useEffect(() => {
    setcurrentTrack(tracks[trackIndex]?.track);
  }, [trackIndex, tracks]);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  //play
  const getTrack = async (id, tag) => {
    if (tag == 1) {
      await apiClient.get("playlists/" + id).then((res) => {
        setresponse(res.data);
        settracks(res.data.tracks.items);
      });
    }
    if (tag == 2) {
      await apiClient.get("albums/" + id).then((res) => {
        setresponse(res.data);
        console.log(res.data.tracks.items[0].preview_url);
        settracks(res.data.tracks.items);
      });
    }
    if (tag == 3) {
      await apiClient.get("tracks/" + id).then((res) => {
        settrack(res.data);
      });
    }
  };
  const doRequest = (e) => {
    if (e.keyCode === 13) {
      const keyWord = e.currentTarget.value.split("//")[1].split(".")[1];
      if (keyWord == "youtube") {
        setmediaState("youtube");
        setinputUrl(e.currentTarget.value.replace("/watch?v=", "/embed/"));
      }
      if (keyWord == "spotify") {
        const categ = e.currentTarget.value.split("/")[3];
        if (categ == "playlist") {
          setmediaState("standard");
          settrackIndex(0);
          getTrack(e.currentTarget.value.split("playlist/")[1], 1);
        }
        if (categ == "album") {
          setmediaState("standard");
          settrackIndex(0);
          getTrack(e.currentTarget.value.split("album/")[1], 2);
        }
        if (categ == "track") {
          setmediaState("spotify");
          getTrack(e.currentTarget.value.split("track/")[1], 3);
        }
      }
    }
  };
  return (
    <div
      className={`${controlState.media.stat === "true" ? "block" : "hidden"}`}
    >
      <div className="absolute top-1/2 left-1/2 rounded-xl">
        <Draggable handle="#handle" nodeRef={nodeRef}>
          <div ref={nodeRef} className="">
            {!token ? (
              <div>media </div>
            ) : (
              // <button onClick={logout}>Logout</button>
              <div className="box glass absolute left-1/2 top-40 cursor-grab rounded-xl w-[25rem]">
                <div
                  id="handle"
                  className="border-b-[1px] flex justify-between px-6 "
                >
                  <p className="text-base font-circula text-thDark py-4">
                    Media
                  </p>
                  <div
                    className="text-2xl font-circulaBold text-thDark cursor-default"
                    onClick={() => {
                      setcontrolState({
                        ...controlState,
                        media: { stat: "false", num: 0 },
                      });
                    }}
                  >
                    _
                  </div>
                </div>
                <div className="content">
                  <div>
                    {mediaState == "standard" && (
                      <PlayAudio
                        response={response}
                        currentTrack={currentTrack}
                        trackIndex={trackIndex}
                        settrackIndex={settrackIndex}
                        trackList={tracks}
                      />
                    )}
                    {mediaState == "youtube" && (
                      <Youtube youtubeUrl={inputUrl} />
                    )}
                    {mediaState == "spotify" && <Track response={track} />}
                    <div className="bg-thNone h-[4rem] overflow-y-hidden flex items-end py-3 px-3 group rounded-bl-xl rounded-br-xl">
                      <div className="will-change-transform translate-y-12 group-hover:translate-y-0 duration-300 flex items-center gap-x-3">
                        <input
                          type="text"
                          spellCheck="false"
                          className="glass_item border-[1px] border-gray-300 rounded-full flex-1 w-[15rem] pl-1 py-[1px]"
                          placeholder="Enter YouTube, Spotify, or Apple Music URL here"
                          onKeyDown={(e) => doRequest(e)}
                        />
                        <p className="font-circula cursor-pointer text-thDark">
                          Save
                        </p>
                        <GrRefresh
                          size={20}
                          className="text-thDark cursor-pointer"
                          onClick={() => setmediaState("standard")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Media;
