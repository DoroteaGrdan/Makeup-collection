import "./Card.css"
import heart from "../heart/heart.png"
import heartFull from "../heart/heartFull.png"
import React, { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";

export default function Card(props) {
    const [isFavorite, setFavorite] = useState(false)
    const [favItems, setFavItems] = useOutletContext();

    function settingFavorites(product){
        let condition=!isFavorite;
        setFavorite(condition);
        if(condition){
            props.setFavItems(prevItems=>{
                return [...prevItems,
                product];
            })
        } else {
            props.setFavItems(prevItems=>{
                return prevItems.filter((item) => {return item.name !== product.name})
            })
        }
        
    }

    const even = (item) => item === props.product;

    return (
        <div className="card">
            <img className="product" src={props.product.image_link} />
            <h3>{props.product.name}</h3>
            <div className="cardFooter">
                <img className="heart" src={favItems.some(even) ? heartFull : heart}
                    onClick={() => {
                        settingFavorites(props.product)
                    }} />
                <p className="desc">{props.product.price}$</p>
            </div>
        </div>
    )
}