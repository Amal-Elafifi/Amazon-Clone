import CardsSection from "../components/ecommerce/home/cards/CardsSection";
import Landing from "../components/ecommerce/home/Landing";
import ClothesCarousel from './../components/ecommerce/home/productsCarousel/ClothesCarousel';

function Home() {
    return (
        <div className="bg-[#575757]">
            <Landing/>
             <CardsSection/>
            <div className="mt-[60px]">
                <ClothesCarousel/>
            </div>
        </div>
    )
}

export default Home;