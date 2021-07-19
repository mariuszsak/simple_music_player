import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBackward,
    faForward,
    faPlay,
    faPause,
    faStepBackward,
    faStepForward,
    faStop,
    faVolumeDown,
    faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import {ISongControls, Song} from '../util/type';
import './Controls.css';


const Controls = ({
                      currentSong,
                      onPreviousSong,
                      onNextSong
                  }: ISongControls) => {

    const showControls = false;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [source, setSource] = useState<Song>(currentSong);
    const [currentVolume, setCurrentVolume] = useState<number>(80);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);


    useEffect(() => {
        if (currentSong !== source) {
            updateCurrentSong(currentSong);
        }
    }, [currentSong, source]);

    const updateCurrentSong = (source: Song) => {
        setSource(source);
        audioRef.current!.play().then(_ => {
            audioRef.current!.pause();
            audioRef.current!.load();
            audioRef.current!.play().then();
        });
    }

    const play = () => {
        audioRef.current!.play().then(_ => {
            audioRef.current!.play().then();
            setIsPlaying(true);
        });
    }

    const pause = () => {
        audioRef.current!.play().then(_ => {
            setIsPlaying(false);
            audioRef.current!.pause();
        });
    }

    const handlePlayClick = () => {
        isPlaying ? pause() : play();
    }

    const handleStopClick = () => {
        audioRef.current!.pause();
        audioRef.current!.currentTime = 0;
        setIsPlaying(false);
    }

    const handleStepBackward = () => {
        onPreviousSong();
    }

    const handleStepForward = () => {
        onNextSong();
    }

    const handleBackward = () => {
        audioRef.current!.currentTime -= 5;
    }

    const handleForward = () => {
        audioRef.current!.currentTime += 5;
    }

    const handleVolumeDown = () => {
        setCurrentVolume(currentVolume > 0 ? currentVolume - 10 : 0);
        audioRef.current!.volume = currentVolume / 100;
    }

    const handleVolumeUp = () => {
        setCurrentVolume(currentVolume < 100 ? currentVolume + 10 : 100);
        audioRef.current!.volume = currentVolume / 100;
    }

    return (
        <div className='controlsContainer'>
            <audio ref={audioRef} controls={showControls}>
                <source src={currentSong.audioUrl}/>
            </audio>
            <div className='button noSelect tooltip' onClick={handlePlayClick}>
                {
                    isPlaying
                        ?
                        <FontAwesomeIcon color='#68a4c4' icon={faPause}/>
                        :
                        <FontAwesomeIcon color='#68a4c4' icon={faPlay}/>
                }
                <div className='tooltipText'>play/pause</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleStopClick}>
                <FontAwesomeIcon color='#68a4c4' icon={faStop}/>
                <div className='tooltipText'>stop</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleStepBackward}>
                <FontAwesomeIcon color='#68a4c4' icon={faStepBackward}/>
                <div className='tooltipText'>prev</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleStepForward}>
                <FontAwesomeIcon color='#68a4c4' icon={faStepForward}/>
                <div className='tooltipText'>next</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleBackward}>
                <FontAwesomeIcon color='#68a4c4' icon={faBackward}/>
                <div className='tooltipText tooltip'>-5sec</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleForward}>
                <FontAwesomeIcon color='#68a4c4' icon={faForward}/>
                <div className='tooltipText'>+5sec</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleVolumeDown}>
                <FontAwesomeIcon color='#68a4c4' icon={faVolumeDown}/>
                <div className='tooltipText'>vol -</div>
            </div>
            <div className='button noSelect tooltip' onClick={handleVolumeUp}>
                <FontAwesomeIcon color='#68a4c4' icon={faVolumeUp}/>
                <div className='tooltipText'>vol +</div>
            </div>
        </div>
    );
}

export default Controls;