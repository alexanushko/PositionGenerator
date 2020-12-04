import React from 'react';
import c from './MainCard.module.css';

export const Dot = props => {
    return (
        <div className={props.alter ? c.dotAlt : c.dot}>
            <div className={c.dotVacuum}></div>
        </div>
    );
}

