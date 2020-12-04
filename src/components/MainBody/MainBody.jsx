import React, {useState} from 'react';
import c from './MainBody.module.css';
import {Navbar} from "../Navbar/Navbar";
import {NavbarButton} from "../Navbar/NavbarButton";


export const MainBody = (props) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`${c.gradientBorder} + ${props.isAnimation ? c.animationPlus : ''}`}>
            <div className={c.mainContainer}>
                <div className={c.appNameContainer}>
                    <div className={c.appName}>{props.name}</div>
                </div>
                <div className={c.contentContainer}>
                    {props.children}
                </div>
                <NavbarButton onClick={() => setIsActive(!isActive)} />
                <Navbar isActive={isActive}/>
            </div>
        </div>
    );
}








