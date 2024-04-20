import AudioItem from "./AudioItem";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseSharpIcon from "@mui/icons-material/PauseSharp";
import Popup from "./Popup";
import { useAppContext } from "../Hooks/Context";
const Audios = () => {
  const {
    musicArray,
    setMessage,
    ShowPopUp,
    setShowPopUp,
    isPlay,
    setIsPlay,
    PauseAll,
    isAllPaused
  } = useAppContext();

  const HandlePlay = () => {
    if (isPlay) {
      setIsPlay(false);
      PauseAll();
    } else {
      PauseAll();
      musicArray.forEach((ele) => {
        const Volume = localStorage.getItem(`${ele.name}`);
        if (Volume !== null) {
          ele.isPlaying = true;
          ele.audio.volume = Volume;
          setIsPlay(true);
          setMessage("Playing from saved!");
          setShowPopUp(true);
          setTimeout(() => {
            setShowPopUp(false)
          }, 1500)
        }
      });
    }
  };
  return (
    <div className="a-grid">
      {musicArray &&
        musicArray.map((e, id) => {
          return <AudioItem id={id} e={e} key={id} />;
        })}
      <div onClick={HandlePlay} className="a-play">
        {isAllPaused() ? <PauseSharpIcon /> : <PlayArrowIcon />}
      </div>
      {ShowPopUp ? <Popup /> : null}
    </div>
  );
};

export default Audios;
