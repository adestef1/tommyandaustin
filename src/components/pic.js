import React from "react";

export default function Pic(props) {
    return (
        <div className="gal_item">
            <div><img className="gal_pic" src={props.image} alt={props.capt}></img></div>
            <div className="gal_cap">{props.capt}</div>
        </div>
    )
}