import React, {useEffect, useState} from 'react';
import './App.scss';
import {Song} from './util/type';
import fetchSong from './service/FetchSong';
import Loader from './components/Loader';
import Player from './components/Player';

const App = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [isListLoaded, setIsListLoaded] = useState<boolean>(false);

    useEffect((): void => {
        fetchSong().then((result: Song[]) => {
            setSongs(result);
            setIsListLoaded(true)
        });
    }, [])

    return (
        isListLoaded ? <Player songs={songs}/> : <Loader/>
    );
}

export default App;
