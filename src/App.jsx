import React, { useState } from 'react';
import songs from './data/songs';
import Navbar from './components/Navbar';
import SongItem from './components/SongItem';
import Player from './components/Player';
import './index.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [search, setSearch] = useState("");

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );

  const handlePlay = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  return (
    <>
      <Navbar onSearch={setSearch} />
      <div className="container">
        <h1>🎧 Motivational Tracks</h1>
        <div className="songList">
          {filteredSongs.map((song, index) => (
            <SongItem
              key={index}
              index={index}
              song={song}
              onPlay={handlePlay}
              isPlaying={index === currentIndex && isPlaying}
            />
          ))}
        </div>
      </div>
      <Player
        currentSong={songs[currentIndex]}
        setCurrentIndex={setCurrentIndex}
        songs={songs}
        currentIndex={currentIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </>
  );
}

export default App;
