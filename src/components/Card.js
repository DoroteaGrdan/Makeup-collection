import "./Card.css"
import heart from "../heart/heart.png"
import heartFull from "../heart/heartFull.png"
import React, { useState } from 'react';

export default function Card(props) {
    const [isFavorite, setFavorite] = useState(false)
    const [favItems, setFavItems] = useState([])
    function settingFavorites(product){
        setFavorite(prevValue => { return !prevValue });
        if(!isFavorite){
            setFavItems(prevItems=>{
                return prevItems.push(product)
            })
        } else {
            setFavItems(prevItems=>{
                return prevItems.filter((name) => {return name !== product.name})
            })
        }
        console.log(favItems)
        
    }

    return (
        <div className="card">
            <img className="product" src={props.product.image_link} />
            <h3>{props.product.name}</h3>
            <div className="cardFooter">
                <img className="heart" src={!isFavorite ? heart : heartFull}
                    onClick={() => {
                        settingFavorites(props.product)
                    }} />
                <p className="desc">{props.product.price}$</p>
            </div>
        </div>
    )
}