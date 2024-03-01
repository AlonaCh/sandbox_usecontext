import PlayerControls from "../components/PlayerControls";
import TrackList from "../components/TrackList";
import sinisterMusic from "../assets/sinister.mp3";
import stompingMusic from "../assets/stomp.mp3";
import underwaterMusic from "../assets/underwater.mp3";
import { useState } from "react";
import { MusicContext } from "../contexts/MusicContext";

const Home = () => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Sinister music",
        file: sinisterMusic,
      },
      {
        name: "Stomping music",
        file: stompingMusic,
      },
      {
        name: "Underwater music",
        file: underwaterMusic,
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  });

  return (
    <div>
      <MusicContext.Provider value={[state, setState]}>
        <PlayerControls />
        <TrackList />
      </MusicContext.Provider>
    </div>
  );
};

export default Home;
