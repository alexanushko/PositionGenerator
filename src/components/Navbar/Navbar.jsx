import React, {useState} from 'react';
import c from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


export const Navbar = props => {

    return (
        <nav className={props.isActive ? c.activeNavbar : c.hiddenNavbar}>
            <div className={c.navVacuum}>
                <ul>
                    <NavLink to='/'>
                        <li><div>Главная</div></li>
                        <li></li>
                    </NavLink>
                    <NavLink to='/positionBase'>
                        <li><div>Посмотреть базу</div></li>
                        <li></li>
                    </NavLink>
                    <NavLink to='/positionGenerator'>
                        <li><div>Генератор поз</div></li>
                        <li></li>
                    </NavLink>
                    <NavLink to='/roleGenerator'>
                        <li><div>Генератор ролей</div></li>
                        <li></li>
                    </NavLink>
                    <NavLink to='/ideaGenerator'>
                        <li><div>генератор идей</div></li>
                        <li></li>
                    </NavLink>
                    <NavLink to='/other'>
                        <li><div>Прочее</div></li>
                        <li></li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}



