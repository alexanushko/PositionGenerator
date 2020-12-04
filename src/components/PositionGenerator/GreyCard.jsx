import React from 'react';
import c from './GreyCard.module.css';


export const GreyCard = (props) => {

    return (
        <div className={c.greyCard}>
            <div className={c.cardShadows}>
                <img className={c.cardShadowsImg} src={props.image} alt="shadows"/>
            </div>
        </div>
    );
}

