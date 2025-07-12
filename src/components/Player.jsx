import React, { useEffect, useRef, useState } from 'react';

const Player = ({ currentSong, setCurrentIndex, songs, currentIndex, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error(err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100 || 0);
  };

  const handleSeek = (e) => {
    const percent = e.target.value;
    audioRef.current.currentTime = (percent / 100) * audioRef.current.duration;
    setProgress(percent);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % songs.length;
    setCurrentIndex(next);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prev);
    setIsPlaying(true);
  };

  return (
    <div className="player">
      <input type="range" value={progress} onChange={handleSeek} />
      <div className="controls">
        <i className="fa-solid fa-step-backward" onClick={handlePrev}></i>
        <i className={`fa-regular fa-circle-${isPlaying ? 'pause' : 'play'}`} onClick={() => setIsPlaying(!isPlaying)}></i>
        <i className="fa-solid fa-step-forward" onClick={handleNext}></i>
      </div>
      <div className="nowPlaying">
        {isPlaying && <img src="/playing.gif" alt="playing" width="30" />}
        <span>{currentSong.name}</span>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />
    </div>
  );
};

export default Player;
