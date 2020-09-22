import React, { Component } from 'react';
import NavItemLeft from './navitemleft';

import {ReactComponent as HomeIcon} from '../icons/home.svg';
import {ReactComponent as BurgerIcon} from '../icons/meat.svg';
import {ReactComponent as InfoIcon} from '../icons/info.svg';


export class navbar_left extends Component {
    render() {
        return (
            <nav className="navbarleft">
                <ul className="navbarleftnav">
                    <li className="navbarleftItem">
                        <a
                            href="#"
                            className= "nav-link"
                        >
                            <NavItemLeft
                                // className="navbarleftItem"
                                icon = {<BurgerIcon/>}
                            ></NavItemLeft>
                            <span className="link-text">Home</span>
                        </a>
                    </li>
                    <li className="navbarleftItem">
                    <a
                            href="#"
                            className= "nav-link"
                        >
                            <NavItemLeft
                                // className="navbarleftItem"
                                icon = {<HomeIcon/>}
                            ></NavItemLeft>
                            <span className="link-text">Home</span>
                        </a>
                    </li>
                    <li className="navbarleftItem">
                    <a
                            href="#"
                            className= "nav-link"
                        >
                            <NavItemLeft
                                // className="navbarleftItem"
                                icon = {<InfoIcon/>}
                            ></NavItemLeft>
                            <span className="link-text">About</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default navbar_left
