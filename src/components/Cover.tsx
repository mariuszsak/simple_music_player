import React from 'react';
import {ISong} from '../util/type';
import './Cover.css';

const Cover = ({song}: ISong) => {
    return (
        <img className='image' src={song.coverUrl} alt=''/>
    );
};

export default Cover;