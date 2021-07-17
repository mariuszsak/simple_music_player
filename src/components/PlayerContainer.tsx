import React from 'react';
import '../App.scss';
import {ISongList, Song} from '../util/type';
import Cover from './Cover';
import './PlayerContainer.css';

const PlayerContainer = ({songs, currentSong, onCurrentSongChange}: ISongList) => {

    const handleClick = (e: any) => {
        onCurrentSongChange(e);
    }

    return (
        <div className='playerContainer'>
            <div className='songContainer'>
                {songs.map((element: Song) =>
                    <div
                        key={element.title}
                        className='songItem'
                        onClick={() => handleClick(element.audioUrl)}
                    >
                        <div
                            className={currentSong.audioUrl === element.audioUrl
                                ?
                                'songTitle--selected noSelect'
                                :
                                'songTitle noSelect'}
                        >
                            {element.title}
                        </div>
                        <div
                            className={currentSong.audioUrl === element.audioUrl
                                ?
                                'songArtist--selected noSelect'
                                :
                                'songArtist noSelect'}
                        >
                            by {element.artist}
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