import Section from "../components/Section";
export default function Lipstick() {

    return (
        <Section isProduct={true} link="https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick" />
    )
}