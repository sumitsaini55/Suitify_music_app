import React from 'react';

const SongItem = ({ song, index, onPlay, isPlaying }) => (
  <div className="songItem" onClick={() => onPlay(index)}>
    <img src={song.cover} alt="cover" />
    <span className="songName">{song.name}</span>
    <span className="songlistplay">
      <i className={`far fa-${isPlaying ? 'pause' : 'play'}-circle`}></i>
    </span>
  </div>
);

export default SongItem;
