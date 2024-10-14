import { useState, useEffect } from "react";
import PlayList from "../components/PlayList";
import Player from "../components/Player";

export default function Home() {
  const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSongs] = useState(null);
    const [isPlaying, setIsplaying] = useState(false);


    useEffect(() => {
        const fetchSongs = async () => {
            const res = await fetch('/api/songs');
            const { data } = await res.json()
            setSongs(data)
        }
        fetchSongs();
    }, [])
    
    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="p-2 text-2xl font-bold text-center">Music PLayer</h1>
            <PlayList songs={songs} setCurrentSongs={setCurrentSongs}/>
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsplaying={setIsplaying}/>
        </div>
    )
}
