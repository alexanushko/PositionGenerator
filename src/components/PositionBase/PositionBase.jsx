import React from 'react';
import c from './PositionBase.module.css';
import {ReturnButton} from "../Buttons/ReturnButton";


export const PositionBase = () => {
    return (
        <div className={c.container}>
            <ReturnButton goTo='/'/>
            <div>База Поз</div>
            <p>Приложение в начале разработки, на данный момент активен раздел Генератор Поз</p>
        </div>
    );
}


