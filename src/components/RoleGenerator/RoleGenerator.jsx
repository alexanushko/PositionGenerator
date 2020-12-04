import React from 'react';
import c from './RoleGenerator.module.css';
import {ReturnButton} from "../Buttons/ReturnButton";


export const RoleGenerator = () => {
    return (
        <div className={c.container}>
            <ReturnButton goTo='/'/>
            <div>Генератор Ролей</div>
            <p>Приложение в начале разработки, на данный момент активен раздел Генератор Поз</p>
        </div>
    );
}

