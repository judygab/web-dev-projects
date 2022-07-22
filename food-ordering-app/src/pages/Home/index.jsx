import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { ProductsPreview } from "../../components/ProductsPreview";

const Home = () => {
    return (
        <>
            <Banner />
            <ProductsPreview />
            <About />
        </>
    )
}

export default Home;