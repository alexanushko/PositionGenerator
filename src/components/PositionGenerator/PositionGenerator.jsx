import React, {useEffect, useState} from 'react';
import {Dot} from "../MainCard/Dot";
import {GreyCard} from "./GreyCard";
import shadows from './shadows.jpg';
import shadows2 from './shadows2.jpg';
import {Anime} from "./Anime";
import {MainBody} from "../MainBody/MainBody";
import {MainCard} from "../MainCard/MainCard";


export const PositionGenerator = () => {

    const [positionNumber, setState] = useState(1);

    useEffect(() => {
        generateRandomNumber();
    },[])

    const randomInteger = (min, max) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    const generateRandomNumber = () => {
        const res = randomInteger(1,10);
        setState(res);
    }

    return (
        <>
            <Anime/>
            <MainBody name={'Генератор Поз'} isAnimation={true}>
                <Dot alter={true}/>
                <GreyCard image={shadows}/>
                <MainCard
                    title='Старт'
                    onClick={() => {generateRandomNumber()}}
                    goTo={`/positionPage/${positionNumber}`}
                    additional={true}/>
                <GreyCard image={shadows2}/>
                <Dot alter={true}/>
            </MainBody>
        </>
    );
}








