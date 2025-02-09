import React, { useState, useRef } from "react";

export const App = () => {
  const urlBase = "https://playground.4geeks.com";
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const songsData = [
    { id: 1, name: "Mario Castle", url: "/sound/files/mario/songs/castle.mp3" },
    {
      id: 2,
      name: "Mario Star",
      url: "/sound/files/mario/songs/hurry-starman.mp3",
    },
    {
      id: 3,
      name: "Mario Overworld",
      url: "/sound/files/mario/songs/overworld.mp3",
    },
    {
      id: 4,
      name: "Mario Stage 1",
      url: "/sound/files/mario/songs/stage1.mp3",
    },
    {
      id: 5,
      name: "Mario Stage 2",
      url: "/sound/files/mario/songs/stage2.mp3",
    },
    {
      id: 6,
      name: "Zelda Castle",
      url: "/sound/files/videogame/songs/zelda_castle.mp3",
    },
  ];

  const playSong = (songUrl) => {
    setCurrentSong(songUrl);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div>
      <h2>Reproductor</h2>
      <ul>
        {songsData.map((song) => (
          <li key={song.id}>
            <button onClick={() => playSong(urlBase + song.url)}>
              ▶ {song.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="audio-container">
        <audio ref={audioRef} controls>
          {currentSong && <source src={currentSong} type="audio/mp3" />}
        </audio>
      </div>
    </div>
  );
};
