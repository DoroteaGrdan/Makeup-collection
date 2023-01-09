import './App.css';
import Card from "./Card.js";
import React, { useState, useEffect } from 'react';

function App() {
  const [products,setProducts] = useState([]);
  const [pageNum,setPageNum] = useState(1);
  const maxPageNum=Math.ceil(products.length/10);
  useEffect(()=>{
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then((response) => response.json())
    .then((data) => setProducts(data));
  },[])

  function makeCard(){
    return products.slice(0,10).map((product)=>{
      return <Card product={product}/>
    })
  }
  
  function makePageNumBtn(){
    const arrOfNums=[]
    for(let i=1;i<=maxPageNum;i++){
      arrOfNums.push(i);
    }
    return arrOfNums.map((num)=>{
      return <button className="pageNum">{num}</button>
    })
  }

  return (
    <div className="App">
      <header>
        <h2>MAYBELLINE</h2>
      </header>
      <main>
        <section>
          <div id="mainIMG"></div>
        </section>
        <section id="cards">
          {makeCard()}
        </section>
        <section id="pageButtons">
          {makePageNumBtn()}
        </section>
      </main>
      <footer>
        <h2><small>MAYBELLINE</small></h2>
        <p><small>Made as a practice by Dorotea Grđan</small></p>
      </footer>
    </div>
  );
}

export default App;
