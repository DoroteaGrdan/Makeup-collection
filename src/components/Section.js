import './Section.css';
import Card from "./Card.js";
import React, { useState, useEffect } from 'react';

export default function Section(props) {
    const [products, setProducts] = useState([]);
    const [pageNum, setPageNum] = useState(0);

    const maxPageNum = Math.ceil(products.length / 20);

    useEffect(() => {
        fetch(props.link)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [])

    function makeCard() {
        const startIndex = pageNum * 20;
        return products.slice(startIndex, startIndex + 20).map((product) => {
            return <Card product={product} key={product.id}/>
        })
    }

    function makePageNumBtn() {
        const arrOfNums = []
        for (let i = 1; i <= maxPageNum; i++) {
            arrOfNums.push(i);
        }
        return arrOfNums.map((num) => {
            return <button key={num} className={`pageNum ${pageNum === num - 1 ? "active" : ""}`} onClick={() => setPageNum(num - 1)}>{num}</button>
        })
    }

    return (
        <>
            <section className='brandHeader'>
                <h3>{!props.isProduct ? products[0]?.brand.toUpperCase() : products[0]?.product_type.toUpperCase()}</h3>
            </section>
            <section className="cards">
                {makeCard()}
            </section>
            <section className="pageButtons">
                {products.length<20 ? "" : makePageNumBtn()}
            </section>
        </>
    )
}