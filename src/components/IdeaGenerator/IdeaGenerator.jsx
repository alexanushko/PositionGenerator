import React from 'react';
import c from './IdeaGenerator.module.css';
import {ReturnButton} from "../Buttons/ReturnButton";


export const IdeaGenerator = () => {
    return (
        <div className={c.container}>
            <ReturnButton goTo='/'/>
            <div>Генератор Идей</div>
            <p>Приложение в начале разработки, на данный момент активен раздел Генератор Поз</p>
        </div>
    );
}

