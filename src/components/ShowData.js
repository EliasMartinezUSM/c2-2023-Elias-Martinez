import React from 'react';

export const Showdata = () => {
    return ( <ul>
        {data.map((dato) => { return ( <li> {dato} </li>)})}
    </ul>

    )
}