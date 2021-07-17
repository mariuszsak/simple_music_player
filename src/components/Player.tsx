import React, {useState} from 'react';
import PlayerHeader from './PlayerHeader';
import {ISongs} from '../util/type';
import PlayerContainer from './PlayerContainer';
import Controls from './Controls';
import './Player.css'

const Player = ({songs}: ISongs) => {

    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
    const currentSong = songs[currentSongIndex];

    const handlePreviousSong = () => {
        const newIndex = (currentSongIndex - 1) % songs.length;
        currentSongIndex ? setCurrentSongIndex(newIndex) : setCurrentSongIndex(songs.length - 1);
    };

    const handleNextSong = () => {
        const newIndex = (currentSongIndex + 1) % songs.length;
        newIndex ? setCurrentSongIndex(newIndex) : setCurrentSongIndex(0);
    };

    const handleCurrentSong = (value: any) => {
        const index = songs.findIndex(element => element.audioUrl === value);
        setCurrentSongIndex(index);
    }

    return (
        <div className='App'>
            <div className='container'>
                <PlayerHeader/>
                <PlayerContainer
                    songs={songs}
                    currentSong={currentSong}
                    onCurrentSongChange={handleCurrentSong}
                />
                <Controls
                    onPreviousSong={handlePreviousSong}
                    onNextSong={handleNextSong}
                    currentSong={currentSong}
                />
            </div>
        </div>
    );
};

export default Player;