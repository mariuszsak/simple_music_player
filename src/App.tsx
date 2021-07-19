import React, {useEffect, useState} from 'react';
import './App.scss';
import {Song} from './util/type';
import fetchSongs from './service/FetchSongs';
import Loader from './components/Loader';
import Player from './components/Player';
import Error from './components/Error';

const App = () => {
    const [allSongs, setAllSongs] = useState<Song[]>([]);
    const [isListLoaded, setIsListLoaded] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        fetchSongs().then((result: Song[]) => {
            setAllSongs(result);
            setIsListLoaded(true)
        }).catch(error => {
            setHasError(true);
            console.error(error);
        });
    }, [])

    return (
        <>
            {hasError && <Error/>}
            {isListLoaded ? <Player songs={allSongs}/> : <Loader/>}
        </>
    );
}

export default App;
