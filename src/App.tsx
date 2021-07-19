import React, {useEffect, useState} from 'react';
import './App.scss';
import {Song} from './util/type';
import fetchSong from './service/FetchSong';
import Loader from './components/Loader';
import Player from './components/Player';

const App = () => {
    const [allSongs, setAllSongs] = useState<Song[]>([]);
    const [isListLoaded, setIsListLoaded] = useState<boolean>(false);

    useEffect((): void => {
        fetchSong().then((result: Song[]) => {
            setAllSongs(result);
            setIsListLoaded(true)
        });
    }, [])

    return (
        isListLoaded ? <Player songs={allSongs}/> : <Loader/>
    );
}

export default App;
