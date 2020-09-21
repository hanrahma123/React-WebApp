import React from 'react';
import Navitem from './navitem';
import Dropdown from './dropdown';
import {ReactComponent as PlusIcon} from '../icons/plus.svg'
import {ReactComponent as BellIcon} from '../icons/bell.svg'
import {ReactComponent as MsgIcon} from '../icons/messenger.svg'
import {ReactComponent as CaretIcon} from '../icons/caret.svg'
import {ReactComponent as Home} from '../icons/home.svg'
import {ReactComponent as UserIcon} from '../icons/user.svg'



export default function Navbar() {
    return (
        <nav className="navbar">
            
            <ul className="navbar-nav">
                <div className="koolaMoola">
                    <button 
                        className="koolaButton"
                        onClick={ ()=> window.location.href='/'}
                    >KoolaMoola</button>
                </div>
                
                <Navitem
                    //props
                    icon= {<PlusIcon/>}
                    // icon= "😊"
                />
                <Navitem
                    //props
                    icon= {<BellIcon/>}
                    
                />
                <Navitem
                    //props
                    icon= {<Home/>}
                    name="Home"
                />
                <Navitem
                    //props
                    icon= {<UserIcon/>}
                >
                    {/*Dropdown */}
                    <Dropdown/>
                </Navitem>
            </ul>
        </nav>
    )
}
