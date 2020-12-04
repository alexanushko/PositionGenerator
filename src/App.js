import React from 'react';
import './App.css';
import {HomePage} from "./components/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import {PositionGenerator} from "./components/PositionGenerator/PositionGenerator";
import {Anime} from "./components/PositionGenerator/Anime";
import PositionPage from "./components/PositionPage/PositionPage";
import {Other} from "./components/Other/Other";
import {RoleGenerator} from "./components/RoleGenerator/RoleGenerator";
import {IdeaGenerator} from "./components/IdeaGenerator/IdeaGenerator";
import {PositionBase} from "./components/PositionBase/PositionBase";


const App = () => {


    return (
        <div className='app'>
            <Switch>
                <Route exact path='/' render={() => <HomePage/>}/>
                <Route path='/home' render={() => <HomePage/>}/>
                <Route path='/positionPage/:positionNumber?' render={() => <PositionPage/>}/>
                <Route path='/positionGenerator' render={() => <PositionGenerator/>}/>
                <Route path='/roleGenerator' render={() => <RoleGenerator/>}/>
                <Route path='/ideaGenerator' render={() => <IdeaGenerator/>}/>
                <Route path='/other' render={() => <Other/>}/>
                <Route path='/positionBase' render={() => <PositionBase/>}/>
                <Route path='/anime' render={() => <Anime/>} />
            </Switch>
        </div>
    );
}


export default App;


////  "homepage": "https://ToCareTheCarrot.github.io/for_Nadia", для пэкэдж джексон