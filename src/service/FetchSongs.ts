import {Song} from '../util/type';

async function fetchSong(): Promise<Song[]> {
    const API = 'https://examples.devmastery.pl/songs-api/songs'
    const response: Response = await fetch(API);
    return response.json();
}

export default fetchSong;
