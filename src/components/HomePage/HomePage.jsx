import React, {useState} from 'react';
import {MainCard} from "../MainCard/MainCard";
import {Dot} from "../MainCard/Dot"
import {MainBody} from "../MainBody/MainBody";


export const HomePage = () => {

    return (
        <MainBody isAnimation={false} name={'Nadia Sex Project'}>
            <Dot/>
            <MainCard title='Генератор поз' goTo='/positionGenerator'/>
            <Dot/>
            <MainCard title='Генератор ролей' goTo='/roleGenerator'/>
            <Dot/>
            <MainCard title='Генератор идей' goTo='/ideaGenerator'/>
            <Dot/>
        </MainBody>
    );
}



