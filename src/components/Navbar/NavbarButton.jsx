import React from 'react';
import c from './NavbarButton.module.css';


export const NavbarButton = props => {

    return (
        <div className={c.navbarButtonContainer} onClick={props.onClick}>
            <div className={c.navbarButton}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
}



