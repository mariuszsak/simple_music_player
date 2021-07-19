import React from 'react';
import '../App.scss';
import {ISongList, Song} from '../util/type';
import Cover from './Cover';
import './PlayerContainer.css';

const PlayerContainer = ({songs, currentSong, onCurrentSongChange}: ISongList) => {

    const handleClick = (audioUrl: string) => {
        onCurrentSongChange(audioUrl);
    }

    return (
        <div className='playerContainer'>
            <div className='songContainer'>
                {songs.map((song: Song) =>
                    <div
                        key={song.title}
                        className='songItem'
                        onClick={()=>handleClick(song.audioUrl)}
                    >
                        <div
                            className={currentSong.audioUrl === song.audioUrl
                                ?
                                'songTitle--selected noSelect'
                                :
                                'songTitle noSelect'}
                        >
                            {song.title}
                        </div>
                        <div
                            className={currentSong.audioUrl === song.audioUrl
                                ?
                                'songArtist--selected noSelect'
                                :
                                'songArtist noSelect'}
                        >
                            by {song.artist}
                        </div>
                    </div>
                )}
            </div>
            <div className='coverContainer'>
                {currentSong !== undefined ? <Cover song={currentSong}/> : null}
            </div>
        </div>

    );
};

export default PlayerContainer;