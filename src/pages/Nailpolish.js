import Section from "../components/Section";
import Layout from "../components/Layout";
export default function Home() {

    return (
        <div className="App">
            <Layout>
                <Section isProduct={true} link="https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish" />
            </Layout>
        </div>
    )
}