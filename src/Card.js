import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.product.image_link}/>
            <h3>{props.product.name}</h3>
            <p className="desc">{props.product.price}$</p>
        </div>
    )
}