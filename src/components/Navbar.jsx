import React from "react";
import logo from "../Assests/images/music icons.png";
import SaveIcon from "@mui/icons-material/Save";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import Popup from "./Popup";
import { useAppContext } from "../Hooks/Context";
const Navbar = () => {
  const {
    PauseAll,
    musicArray,
    shuffle,
    setShuffle,
    ShowPopUp,
    setShowPopUp,
    setMessage,
  } = useAppContext();
  const HandleShuffle = () => {
    if (shuffle) {
      setShuffle(false);
      PauseAll();
    } else {
      setShuffle(true);
      PauseAll();
      for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * 18);
        if (musicArray[index].isPlaying === true) {
          if (index !== 0) {
            index -= 1;
          } else {
            index += 1;
          }
        }
        musicArray[index].isPlaying = true;
      }
    }
  };
  return (
    <div className="navbar">
      <nav className="n-nav">
        <ul className="n-ul">
          <li className="n-list n-logo">
            <img src={logo} alt="" className="n-img" />
            <span className="n-logoName">OODIFY</span>
          </li>
          <li style={{ cursor: "pointer" }} className="n-list n-toggle">
            {shuffle ? (
              <ShuffleOnIcon onClick={HandleShuffle} />
            ) : (
              <ShuffleIcon onClick={HandleShuffle} />
            )}
            <SaveIcon
              onClick={() => {
                setShowPopUp(true);
                setMessage("SAVED!");
                setTimeout(() => {
                  setShowPopUp(false)
                }, 1500)
                musicArray.forEach((Element) => {
                  if (Element.isPlaying === true) {
                    localStorage.setItem(
                      `${Element.name}`,
                      Element.audio.volume
                    );
                  } else {
                    if (localStorage.getItem(`${Element.name}`) !== null) {
                      localStorage.removeItem(`${Element.name}`);
                    }
                  }
                });
              }}
            />
          </li>
        </ul>
      </nav>
      {ShowPopUp ? <Popup /> : null}
    </div>
  );
};
export default Navbar;
