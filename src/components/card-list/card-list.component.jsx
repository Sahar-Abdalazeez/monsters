import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css';
export const CardList =({monsters})=>(
    //i can do pass {monsters}
    // i can keep props an do this const {monsters}= this.props but instead of doing the destructring here we ca put ({monsters}) instead of props 
<div className='card-list'>
    {monsters?.map((monster,index)=>(
        <Card  key={monster.id}  monster={monster}/>

    ))}
</div>
)



