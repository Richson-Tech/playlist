import React from "react";

const PlayList = ({ songs, setCurrentSongs }) => {
  return (
    <div className="p-4">
      {songs.map((songs, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-2 border-b border-gray-200 cursor-pointer"
          onClick={() => setCurrentSongs(song)}
        >
          <div>
            <p className="font-bold">{song.title}</p>
            <p className="text-sm text-gray-500">{song.artist}</p>
              </div>
            <p className="text-sm text-gray-500">{song.duration}</p>
              
        </div>
      ))}
    </div>
  );
};

export default PlayList;
