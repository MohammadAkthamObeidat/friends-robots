import React, {Component} from 'react'
import Card from './Card.js'

const CardList = ({robots}) =>{
    
    const cardComponent = robots.map((item, i) =>{
       return <Card id= {robots[i].id } name={robots[i].name} email= {robots[i].email} />
    })
    
        return(
            <div>
                {cardComponent}
            </div>
        );
    }
export default CardList;