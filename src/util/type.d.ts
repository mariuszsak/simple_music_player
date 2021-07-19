import {MouseEventHandler} from "react";

export type Song = {
    audioUrl: string;
    coverUrl: string;
    artist: string;
    title: string;
}

export interface ISongControls {
    onPreviousSong: () => void;
    onNextSong: () => void;
    currentSong: Song;
}

export interface ISong {
    song: Song;
}

export interface ISongList {
    songs: Song[];
    currentSong: Song;
    onCurrentSongChange: (data: string) => void;
}

export interface ISongs {
    songs: Song[];
}