import { useContext, useState } from "react";
import React from "react";
import soundArray from "../Assests/musicArray";

const appContext = React.createContext({});
const Context = ({ children }) => {
  const [musicArray, setMusicArray] = useState(soundArray);
  const [ShowPopUp, setShowPopUp] = useState(false);
  const [message, setMessage] = useState("");
  const [shuffle, setShuffle] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  const PauseAll = () => {
    musicArray.forEach((element) => {
      if (element.isPlaying === true) {
        element.isPlaying = false;
      }
    });
  };

  const isAllPaused = () => {
    return musicArray.some((element) => {
      return element.isPlaying;
    })
  };

  return (
    <appContext.Provider
      value={{
        isAllPaused,
        PauseAll,
        musicArray,
        setMusicArray,
        ShowPopUp,
        setShowPopUp,
        message,
        setMessage,
        shuffle,
        setShuffle,
        isPlay,
        setIsPlay,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default Context;
export const useAppContext = () => useContext(appContext);
