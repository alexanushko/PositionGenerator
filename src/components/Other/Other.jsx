import React from 'react';
import c from './Other.module.css';
import {ReturnButton} from "../Buttons/ReturnButton";


export const Other = () => {
    return (
        <div className={c.container}>
            <ReturnButton goTo='/'/>
            <div>Прочее</div>
            <p>Приложение в начале разработки, на данный момент активен раздел Генератор Поз</p>
        </div>
    );
}

