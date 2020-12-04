import React from 'react';
import c from './ReturnButton.module.css';
import {NavLink} from "react-router-dom";


export const ReturnButton = props => {
    return (
        <NavLink to={props.goTo} className={c.goHomeLink}>
            Return
        </NavLink>
    );
}
