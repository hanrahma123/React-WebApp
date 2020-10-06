import React from 'react'

export default function dbEntry(props) {   //function no state
    return (
        props.entries.map( (entry) => (
            
                <tr>
                    {/* <th>Heading</th> */}
                    <td>{entry.id}</td>
                    <td>{entry.firstName}</td>
                    <td>{entry.lastName}</td>
                </tr>
            

        )

        )
       
    )
}
