import Section from "../components/Section";
import categories from '../categories';
import GrabScroll from "../components/GrabScroll";
import { useNavigate } from "react-router-dom";
let timer;
let allowClick = true;
export default function Home() {
    const navigate = useNavigate();

    function handleMouseDown(e) {
        e.preventDefault();
        timer = window.setTimeout(() => {
            allowClick = false;
        }, 200)
    }

    function changePageBasedOnCategory(category) {
        window.clearTimeout(timer);
        if (allowClick) {
            navigate(`/${category}`);
        } else {
            allowClick = true;
        }
    }

    function createCategories() {
        return Object.keys(categories).map((key) => {
            return <div key={key} onClick={() => changePageBasedOnCategory(key)} onMouseDown={handleMouseDown}><div className="category"><img src={categories[key].image} />{categories[key].name}</div></div>
        })
    }

    return (
        <div className="App">
                <GrabScroll>
                    <aside className="categories">
                        {createCategories()}
                    </aside>
                </GrabScroll>
                <Section isProduct={false} link="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline" />
                <Section isProduct={false} link="https://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle" />
                <Section isProduct={false} link="https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx" />
        </div>
    )
}