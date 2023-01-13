import categories from '../categories';
import { useNavigate, Outlet } from "react-router-dom";
import React, { useState } from 'react';

export default function Layout() {
    const [favItems, setFavItems] = useState([]);
    const navigate = useNavigate();
    function createDropdownCategories() {
        return Object.keys(categories).map((key) => {
            return <a key={key} onClick={() => { navigate(`/${key}`) }}>{categories[key].name}</a>
        })
    }

    function removeFavorite(product) {
        setFavItems(prevItems => {
            return prevItems.filter((item) => { return item.name !== product.name })
        })
    }

    function createDropdownFavorites() {
        return Object.values(favItems).map(item => {
            return (
                <div className='favoriteTab'>
                    <img className='favoriteImg' src={item.image_link} onClick={() => { window.open(item.website_link) }}></img>
                    <div className='favoritesName' key={item.name}>{item.name}</div>
                    <span onClick={()=>{removeFavorite(item)}} class="material-symbols-outlined">Delete</span>
                </div>)
        })
    }

    return (
        <>
            <header>
                <h2 onClick={() => { navigate("/home") }}>MAKEUP</h2>
                <nav>
                    <div className="dropdown">
                        <button className="dropbtn">Products</button>
                        <div className="dropdown-content">
                            {createDropdownCategories()}
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Favorites</button>
                        <div className="dropdown-content favorites">
                            {createDropdownFavorites()}
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <section>
                    <div id="mainIMG"></div>
                </section>
                <Outlet context={[favItems, setFavItems]} />
            </main>
            <footer>
                <h2><small>MAKEUP</small></h2>
                <p><small>Made as a practice by Dorotea Grđan</small></p>
            </footer>
        </>
    )
}