import React, { useState, useEffect, useRef } from 'react';
import Volume from './Volume';
import gifer from '../Assests/images/animated-background.gif';
import { useAppContext } from '../Hooks/Context';
const AudioItem = ({ e, id }) => {
  const firstUpdate = useRef(false);
  const { musicArray, setIsPlay } = useAppContext();
  const curElement = musicArray.filter((ele) => {
    return ele.name === e.name;
  })[0];
  const [curElementState, setCurElementState] = useState(curElement);

  useEffect(() => {
    if (!firstUpdate) {
      firstUpdate.current = true;
      return;
    }
    setCurElementState(curElement);
  }, [curElementState, curElement]);

  async function playAud() {
    await curElement.audio.play();
    curElement.audio.loop = true;
  }
  function pauseAud() {
    curElement.audio.pause();
  }

  function handleClick() {
    if (!curElementState.isPlaying) {
      playAud();
      setIsPlay(true);
      setCurElementState({ ...curElementState, isPlaying: true });
      musicArray.find((ele) => ele.name === e.name).isPlaying = true;
    } else {
      pauseAud();
      setCurElementState({ ...curElementState, isPlaying: false });
      musicArray.find((ele) => ele.name === e.name).isPlaying = false;

      if (
        musicArray.some((element) => {
          return element.isPlaying;
        }) === false
      ) {
        setIsPlay(false);
      }
    }

  }
  curElementState.isPlaying ? playAud() : pauseAud();
  return (
    <div className="a-gridItem" id="box">
      <div
        style={{
          backgroundImage: `url(${curElementState.isPlaying ? gifer : ''})`,
          backgroundSize: 'cover',
        }}
        className="a-itemLogo"
        onClick={handleClick}
      >
        <img
          style={
            curElementState.isPlaying
              ? {
                paddingTop: '70px',
              }
              : null
          }
          className="a-icon"
          src={curElement.icon}
          alt=""
        />
        <h3
          style={
            curElementState.isPlaying
              ? {
                paddingTop: '20px',
              }
              : null
          }
          className="a-name"
        >
          {e.name.charAt(0).toUpperCase() + e.name.slice(1)}
        </h3>
      </div>
      {curElementState.isPlaying ? <Volume id={id} ele={curElement} /> : null}
    </div>
  );
};
export default AudioItem;
