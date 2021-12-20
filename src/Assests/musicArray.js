import bird from "./Audio/birds.wav";
import campfire from "./Audio/campfire.wav";
import clock from "./Audio/clock.mp3";
import DesertWind from "./Audio/Desert-wind.wav";
import farm from "./Audio/farm.wav";
import footsteps from "./Audio/footsteps.mp3";
import forest from "./Audio/forest.wav";
import keyboard from "./Audio/keyboard.wav";
import mountain from "./Audio/mountain.wav";
import night from "./Audio/night.wav";
import rain from "./Audio/rain.mp3";
import River from "./Audio/River.wav";
import rowing from "./Audio/rowing.mp3";
import seaWaves from "./Audio/sea waves.wav";
import thunder from "./Audio/thunder.wav";
import Train from "./Audio/Train.wav";
import wind from "./Audio/wind.wav";
import windchime from "./Audio/windchime.mp3";

import birdIcon from "./images/bird.png";
import campfireIcon from "./images/campfire.png";
import clockIcon from "./images/clock.png";
import DesertWindIcon from "./images/desert.png";
import farmIcon from "./images/farm.png";
import footstepsIcon from "./images/footstep.png";
import forestIcon from "./images/forest.png";
import keyboardIcon from "./images/keyboard.png";
import mountainIcon from "./images/mountain.png";
import nightIcon from "./images/night.png";
import rainIcon from "./images/rain.png";
import RiverIcon from "./images/river.png";
import rowingIcon from "./images/rowing.png";
import seaWavesIcon from "./images/waves.png";
import thunderIcon from "./images/thunder.png";
import TrainIcon from "./images/train.png";
import windIcon from "./images/wind.png";
import windchimeIcon from "./images/windchime.png";

const soundArray = [
  {
    name: "birds",
    audio: new Audio(bird),
    icon: birdIcon,
    isPlaying: false,
  },
  {
    name: "campfire",
    audio: new Audio(campfire),
    icon: campfireIcon,
    isPlaying: false,
  },
  {
    name: "clock",
    audio: new Audio(clock),
    icon: clockIcon,
    isPlaying: false,
  },
  {
    name: "Desert-wind",
    audio: new Audio(DesertWind),
    icon: DesertWindIcon,
    isPlaying: false,
  },
  {
    name: "farm",
    audio: new Audio(farm),
    icon: farmIcon,
    isPlaying: false,
  },
  {
    name: "footsteps",
    audio: new Audio(footsteps),
    icon: footstepsIcon,
    isPlaying: false,
  },
  {
    name: "forest",
    audio: new Audio(forest),
    icon: forestIcon,
    isPlaying: false,
  },
  {
    name: "keyboard",
    audio: new Audio(keyboard),
    icon: keyboardIcon,
    isPlaying: false,
  },
  {
    name: "mountain",
    audio: new Audio(mountain),
    icon: mountainIcon,
    isPlaying: false,
  },
  {
    name: "night",
    audio: new Audio(night),
    icon: nightIcon,
    isPlaying: false,
  },
  {
    name: "rain",
    audio: new Audio(rain),
    icon: rainIcon,
    isPlaying: false,
  },
  {
    name: "River",
    audio: new Audio(River),
    icon: RiverIcon,
    isPlaying: false,
  },
  {
    name: "rowing",
    audio: new Audio(rowing),
    icon: rowingIcon,
    isPlaying: false,
  },
  {
    name: "sea waves",
    audio: new Audio(seaWaves),
    icon: seaWavesIcon,
    isPlaying: false,
  },
  {
    name: "thunder",
    audio: new Audio(thunder),
    icon: thunderIcon,
    isPlaying: false,
  },
  {
    name: "Train",
    audio: new Audio(Train),
    icon: TrainIcon,
    isPlaying: false,
  },
  {
    name: "wind",
    audio: new Audio(wind),
    icon: windIcon,
    isPlaying: false,
  },
  {
    name: "windchime",
    audio: new Audio(windchime),
    icon: windchimeIcon,
    isPlaying: false,
  },
];

export default soundArray;
