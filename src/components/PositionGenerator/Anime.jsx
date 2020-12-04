import React from 'react';
import c from './Anime.module.css';


export const Anime = () => {

    return (
        <>
            <div className={c.animeCardRect}>
                Генератор поз
            </div>
            <div className={c.animeContainer}>
                <div className={c.animeCard}>
                    <div className={c.animeCardVacuum}>
                    </div>
                </div>
            </div>
        </>
    );
}




