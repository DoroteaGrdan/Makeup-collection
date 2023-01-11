import categories from '../categories';
import { useNavigate } from "react-router-dom";

export default function Layout(props){
    const navigate = useNavigate();
    function createDropdown() {
        return Object.keys(categories).map((key) => {
            return <a key={key} onClick={()=>{navigate(`/${key}`)}}>{categories[key].name}</a>
        })
    }
    return(
        <>
        <header>
                <h2 onClick={()=>{navigate("/home")}}>MAKEUP</h2>
                <nav>
                    <div className="dropdown">
                        <button className="dropbtn">Products</button>
                        <div className="dropdown-content">
                            {createDropdown()}
                        </div>
                    </div>
                    <h4>Favorites</h4>
                </nav>
            </header>
            <main>
                <section>
                    <div id="mainIMG"></div>
                </section>
                {props.children}
                </main>
            <footer>
                <h2><small>MAKEUP</small></h2>
                <p><small>Made as a practice by Dorotea Grđan</small></p>
            </footer>
        </>
    )
}