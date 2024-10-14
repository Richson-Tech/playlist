import React, { useRef } from "react";
import Hawler from "react-howler";

const Player = ({ currentSong, isPlaying, setIsplaying }) => {
  const playerRef = useRef(null);
  const handlePlayPause = () => {
    setIsplaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 w-full p-4 bg-gray-500 text-white">
      {currentSong ? (
        <>
          <Howler
            src={currentSong.url}
            playing={isPlaying}
            ref={playerRef}
            onEnd={() => setIsplaying(false)}
          />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{currentSong.title}</p>
              <p className="text-sm text-gray-400">{currentSong.artist}</p>
            </div>
            <button
              className="px-4 py-2 font-bold text-white bg-green-500 rounded-full"
              onClick={handlePlayPause}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">Select a song to play</p>
      )}
    </div>
  );
};

export default Player;
