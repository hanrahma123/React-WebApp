import React from 'react';
import Button from './button';

export default function Buttons(props) {
    
    return (
        
        props.buttons.map( (buttons) => (
                   
            <Button
                //props
                buttons={buttons}
                click= {props.click}
            />
        
        ))
    )
}
