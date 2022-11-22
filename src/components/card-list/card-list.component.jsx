import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css';
export const CardList = ({ monsters }) => {
    //i can do pass {monsters}
    // i can keep props an do this const {monsters}= this.props but instead of doing the destructring here we ca put ({monsters}) instead of props 

    return monsters.length ?
        <div className='card-list'>

            {monsters?.map((monster, _index) => (
                <Card key={monster.id} monster={monster} />

            ))
            }

        </div>
        :
        <h1 className="notfound">Nothing found</h1>
}




