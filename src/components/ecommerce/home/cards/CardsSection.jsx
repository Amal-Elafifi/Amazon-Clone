import CardItem from "./Card";
import CardBody from "./CardBody";
import img11 from "/public/assets/images/card1/11.jpg";
import img12 from "/public/assets/images/card1/12.png";
import img13 from "/public/assets/images/card1/13.avif";
import img14 from "/public/assets/images/card1/14.jpg";
import img21 from "/public/assets/images/card2/21.jpg";
import img22 from "/public/assets/images/card2/22.webp";
import img23 from "/public/assets/images/card2/23.jpg";
import img24 from "/public/assets/images/card2/24.webp";
import img331 from "/public/assets/images/card3/331.jpg";
import img332 from "/public/assets/images/card3/332.jpg";
import img333 from "/public/assets/images/card3/333.jpg";
import img334 from "/public/assets/images/card3/334.webp";
import img41 from "/public/assets/images/card4/41.webp";
import img42 from "/public/assets/images/card4/42.jpg";
import img43 from "/public/assets/images/card4/43.jpeg";
import img44 from "/public/assets/images/card4/44.jpg";
import img51 from "/public/assets/images/card5/51.jpg";
import img52 from "/public/assets/images/card5/52.jpeg";
import img53 from "/public/assets/images/card5/53.jpg";
import img54 from "/public/assets/images/card5/54.jpg";
import img61 from "/public/assets/images/card6/61.jpg";
import img62 from "/public/assets/images/card6/62.webp";
import img63 from "/public/assets/images/card6/63.jpg";
import img64 from "/public/assets/images/card6/64.jpg";
import img71 from "/public/assets/images/card7/711.jpg";
import img72 from "/public/assets/images/card7/72.jpg";
import img73 from "/public/assets/images/card7/733.jpg";
import img74 from "/public/assets/images/card7/744.jpg";
import img81 from "/public/assets/images/card8/82.jpeg";
import img82 from "/public/assets/images/card8/811.jpg";
import img83 from "/public/assets/images/card8/822.jpeg";
import img84 from "/public/assets/images/card8/844.webp";
function CardsSection () {
    const body1 = 
        <>
            <CardBody src={img11} text="Women perfumes and more"/>
            <CardBody src={img12} text="Women cosmotics and more"/>
            <CardBody src={img13} text="Home decor and essentials"/>
            <CardBody src={img14} text="surprises and gifts"/>
        </>;
    const body2 = 
            <>
                <CardBody src={img21} text="refrigerators" />
                <CardBody src={img22} text="Air conditioners"/>
                <CardBody src={img23} text="Microwaves"/>
                <CardBody src={img24} text="Washing machines"/>
            </>;
            const body3 = 
            <>
                <CardBody src={img331} text="Starting 249$ | Boat" />
                <CardBody src={img332} text="Starting 349$ | Bolut"/>
                <CardBody src={img333} text="Starting 649$ | Noise"/>
                <CardBody src={img334} text="Starting 149$ | Zebronic"/>
            </>;
            const body4 = 
            <>
                <CardBody src={img41} text="Up to 70% off | shoes" />
                <CardBody src={img42} text="Up to 60% off"/>
                <CardBody src={img43} text="Starting 249$ | toys & games"/>
                <CardBody src={img44} text="Starting 249$ | Home"/>
            </>;
            const body5 = 
            <>
                <CardBody src={img51} text="Modern decoration" />
                <CardBody src={img52} text="Up to 60% off "/>
                <CardBody src={img53} text="Starting 49$ | walldecor"/>
                <CardBody src={img54} text="flash sale | wooden decors"/>
            </>; 
            const body6 = 
            <>
                <CardBody src={img61} text="Modern sofa & comfortable" />
                <CardBody src={img62} text="Up to 20% off modern salon"/>
                <CardBody src={img63} text="Wide variety of couches"/>
                <CardBody src={img64} text="Order now & get 30% off"/>
            </>;    
            const body7 = 
            <>
                <CardBody src={img71} text="starting 199$ | Bedsheets" />
                <CardBody src={img72} text="Up to 20% off | classic bedwears"/>
                <CardBody src={img73} text="Wide variety of Blankets"/>
                <CardBody src={img74} text="Order now | free delivery"/>
            </>; 
             const body8 = 
             <>
                 <CardBody src={img81} text="starting 199$ |Leather products" />
                 <CardBody src={img82} text="Up to 20% off | shoes and bag"/>
                 <CardBody src={img83} text="All what you dream | only needs click"/>
                 <CardBody src={img84} text="Free delivery for 3 days"/>
             </>; 

    return (
        <div className="flex  flex-wrap gap-5 justify-center sm:mt-[30px] md:mt-[15%]">
            <CardItem 
                title="Revamp your home in style"
                linkText="Explore all"
                body= {body1}
            />
            <CardItem 
                title="Appliances for your home | upto 55% off"
                linkText="See more" 
                body= {body2}
            />
            <CardItem 
                title="Starting 149$ | headphones"
                linkText="See all offers" 
                body= {body3}
            />
            <CardItem 
                title="Starting 99$ | Amazon brands & more"
                linkText="Shop now" 
                body={body4}
            />
            <CardItem 
                title="Automotive essentials | upto 60% off"
                linkText="See more" 
                body={body5}
            />
            <CardItem 
                title="Up to 60% off | styles for women"
                linkText="End of season sale" 
                body={body6}
            />
            <CardItem 
                title="Starting 199$ | Amazon brands & more"
                linkText="See more" 
                body={body7}
            />
            <CardItem 
                title="starting 99$ | Home improvement essentials"
                linkText="Explore more" 
                body={body8}
            />

        </div>
    )
}

export default CardsSection;