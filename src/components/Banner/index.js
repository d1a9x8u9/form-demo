import React from 'react';
import './style.css'

const banner = (props) => {
    return (
        <div className="Banner">
            <a href={props.logoLink}><img src={props.logo} alt="logo" width="200px" /></a>
            <h2 className="Title">{props.title}</h2>
        </div>
    )
}

export default banner;

