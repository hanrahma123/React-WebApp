import React, {useState} from 'react'
import {ReactComponent as CogIcon } from '../icons/cog.svg'
import {ReactComponent as ChrevronIcon } from '../icons/chevron.svg'
import {ReactComponent as ArrowIcon } from '../icons/arrow.svg'
import {ReactComponent as LoginIcon} from '../icons/login.svg'
import {CSSTransition} from 'react-transition-group'

export default function Dropdown() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight,setMenuHeight] = useState(null);

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props){
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span 
                    className="icon-button" 
                    
                >{props.leftIcon}</span>
                {props.children}
                <RightIcon
                    rightIcon={props.rightIcon}
                />
                
                
            </a>
        )
    }
    function RightIcon(props){
        if(props.rightIcon){
            return (
                <span className="icon-r">{props.rightIcon}</span>
            )
        }
        else
            return null;
    }

    return (
        <div className="dropdown" style={{ height: menuHeight}}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames = "menu-primary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <div onClick={()=> {window.location.href='/login'; }} >
                        <DropdownItem
                            leftIcon= {<LoginIcon/>}
                            
                        >LogIn</DropdownItem>
                    </div>
                    <DropdownItem
                        leftIcon = {<CogIcon/>}
                        rightIcon = {<CogIcon/>}
                        goToMenu = "settings"
                    >Menu</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={200}
                classNames = "menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu= "main">Back</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}> Settings</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>}>Settings</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}
