import React from 'react';
import c from './MainCard.module.css';
import {NavLink} from "react-router-dom";

export const MainCard = props => {

    const result = props.additional ? c.little : c.normal;
    console.log(props.additional);

    return (
        <div className={c.card}>
            <div className={c.cardVacuum}>
                <div className={`${c.cardRect} + ${result}`}>
                    <NavLink to={props.goTo} onClick={props.onClick} >
                        <div className={c.cardRectVacuum}>
                            <div>{props.title}</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

