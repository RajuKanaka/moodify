import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Volume = ({ ele, id }) => {
  const Volume = localStorage.getItem(`${ele.name}`);
  const SavedVolume = localStorage.getItem(`${id}`);
  const [volume, setVolume] = useState(
    Volume !== null ? Volume * 100 : SavedVolume !== null ? SavedVolume : 50
  );
  const isMuted = volume === 0;
  const handleVolumeChange = (event, value) => {
    setVolume(value);
    ele.audio.volume = volume / 100;
    localStorage.setItem(id, value);
  };

  const handleMuteButtonClick = () => {
    setVolume(0);
    ele.audio.volume = 0;
  };

  const handleMaxVolumeButtonClick = () => {
    setVolume(100);
    ele.audio.volume = 1;
  };
  return (
    <div className="volume-slider">
      <IconButton color="inherit" onClick={handleMuteButtonClick}>
        {isMuted ? <VolumeOffIcon /> : <VolumeDownIcon />}
      </IconButton>
      <Slider
        value={volume}
        step={1}
        onChange={handleVolumeChange}
        aria-labelledby="volume-slider"
      />
      <IconButton color="inherit" onClick={handleMaxVolumeButtonClick}>
        <VolumeUpIcon />
      </IconButton>
    </div>
  );
};

export default Volume;
