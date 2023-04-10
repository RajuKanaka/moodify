import SingleComp from "./SingleComp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseSharpIcon from "@mui/icons-material/PauseSharp";
import Popup from "./Popup";
import { useAppContext } from "../Hooks/Context";
const Audios = () => {
  const {
    musicArray,
    message,
    setMessage,
    ShowPopUp,
    setShowPopUp,
    isPlay,
    setIsPlay,
    PauseAll,
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
        }
      });
    }
  };
  return (
    <div className="a-grid">
      {musicArray &&
        musicArray.map((e, id) => {
          return <SingleComp id={id} e={e} key={id} />;
        })}
      <div onClick={HandlePlay} className="a-play">
        {isPlay ? <PauseSharpIcon /> : <PlayArrowIcon />}
      </div>
      {ShowPopUp ? <Popup /> : null}
    </div>
  );
};

export default Audios;
