"use client"; //next js. Decoupling the client and server code
import { useMusicPlayer } from "../hooks/useMusicPlayer";

import { SkipStartFill, SkipEndFill, PlayFill } from "react-bootstrap-icons";

const PlayerControls = () => {
  //todo: add music player
  const music = useMusicPlayer();

  return (
    <div>
      <div>
        <p>{music.currentTrackName}</p>
      </div>
      <button onClick={() => music.playPreviousTrack}>
        <SkipStartFill />
      </button>
      <button onClick={() => music.togglePlay}>
        {music.isPlaying ? <PauseFill /> : <PlayFill />}
      </button>
      <button>
        <SkipEndFill />
      </button>
    </div>
  );
};

export default PlayerControls;
