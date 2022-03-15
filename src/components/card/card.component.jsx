import React from "react";
import './card.styles.css'
export const Card=({monster})=>{ // here monster we did destructuring immediatly 
    //also instead of monster we can do the destructing ({monster: {name , email, id} })
    const {name,email,id}=monster;//destructuring
    return (
    <div className="card-container">
        <img style={{height:180,width:180}} alt="monster" src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>   
        <p>{email}</p>
    </div>
    )
}