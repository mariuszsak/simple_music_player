import {Song} from '../util/type';
import {songsApi} from "../endpoints";

async function fetchSongs(): Promise<Song[]> {

    const response: Response = await fetch(songsApi);
    return response.json();
}

export default fetchSongs;
