import React, { useState } from 'react';




export default function Navitem(props) {
       
        const [open, setOpen] = useState(false);
        return (
            <li >
                <a 
                    href='#'
                    className="icon-button" 
                    onClick={()=> {
                        setOpen(!open)
                        if(props.name=== 'Home'){window.location.href='/'; }  //conditional links for icons
                    }}   
                >   
                    
                    {props.icon}
                    
                </a>

                { open && props.children}
            </li>
        )
}


