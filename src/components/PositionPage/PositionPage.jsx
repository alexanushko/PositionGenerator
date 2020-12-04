import React, {useEffect, useState} from 'react';
import c from './PositionPage.module.css';
import {NavLink, withRouter} from 'react-router-dom';
import {dataBase} from '../../dataBase/dataBase';
import {MainBody} from "../MainBody/MainBody";
import {ReturnButton} from "../Buttons/ReturnButton";


const PositionPage = props => {

    let positionNumber = props.match.params.positionNumber;

    const [position, setPosition] = useState({
            id: 1,
            title: "Поза V",
            src: 'https://cdn-1.brodude.ru/Stp1SGgbGcd-VGY-YzY_jGkfnqQFpGfz3RnDIiScmCA/rs:fill:247:356:0/g:ce/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzA1LzEwMC1wb3otaXota2FtYXN1dHJ5LTA3OTU2NTkwODIuanBn',
            description: 'Позиция требует акробатических способностей! Женщина садится на край стола, мужчина встает напротив нее и чуть сгибает ноги, чтобы находиться в положении, наиболее удобном для проникновения. Потом женщина обнимает мужчину руками за шею и закидывает ноги ему на плечи. Затем она отклоняется назад, а тебе остается двигаться по привычной схеме, держа ее за зад.'
        }
    );

    const giveMeCurrentPosition = (posNumber) => {
        const currentPosition = dataBase.filter(pos => pos.id === +posNumber);
        setPosition(currentPosition[0]);
    };

    useEffect(() => {
        giveMeCurrentPosition(positionNumber);
    }, []);

    if (positionNumber === undefined) return <h1 className={c.awfulError}>Произошла ужасная ошибка :(</h1>
    return (
        <MainBody>
            <div className={c.container}>
                <div className={c.positionNameContainer}>
                    <ReturnButton goTo='/positionGenerator'/>
                    <h1>{position.title}</h1>
                </div>
                <div className={c.positionImageContainer}>
                    <div className={c.imageBlock}>
                        <img src={position.src} alt="position"/>
                    </div>
                </div>
                <div className={c.positionDescriptionContainer}>
                    {position.description}
                </div>
            </div>
        </MainBody>
    );
}

export default withRouter(PositionPage);

