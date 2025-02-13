import React, { useState, useRef, useEffect } from "react";

export const App = () => {
  const urlBase = "https://playground.4geeks.com/sound/songs";

  const [canciones, setCanciones] = useState([]);
  const audioRef = useRef(null);

  const getData = async () => {
    try {
      const response = await fetch(urlBase);
      const data = await response.json();
      setCanciones(data.songs);
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const playSong = (url) => {
    if (audioRef.current) {
      audioRef.current.src = `https://playground.4geeks.com${url}`;
      audioRef.current.play();
    }
  };

  return (
    <div>
      <h2>Reproductor</h2>
      <ul>
        {canciones.map((cancion, index) => (
          <li key={index}>
            {cancion.name}
            <button onClick={() => playSong(cancion.url)}>Reproducir</button>
          </li>
        ))}
      </ul>
      <div className="audio-container">
        <audio ref={audioRef} controls></audio>
      </div>
    </div>
  );
};
