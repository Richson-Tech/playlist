import React, { useRef } from "react";
import Hawler from "react-howler";

const Player = ({ currentSong, isPlaying, setIsplaying }) => {
    const playerRef = useRef(null);
    const handlePlayPause = (){
        setIsplaying(!isPlaying)
    }

  return <div>Player</div>;
};

export default Player;
