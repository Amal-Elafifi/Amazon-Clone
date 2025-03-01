import CardItem from "./Card";
import CardBody from "./CardBody";
function CardsSection () {
    const body1 = 
        <>
            <CardBody src="../../../../../public/assets/images/card1/11.jpg" text="Women perfumes and more"/>
            <CardBody src="/public/assets/images/card1/12.png" text="Women cosmotics and more"/>
            <CardBody src="/public/assets/images/card1/13.avif" text="Home decor and essentials"/>
            <CardBody src="/public/assets/images/card1/14.jpg" text="surprises and gifts"/>
        </>;
    const body2 = 
            <>
                <CardBody src="/public/assets/images/card2/21.jpg" text="refrigerators" />
                <CardBody src="/public/assets/images/card2/22.webp" text="Air conditioners"/>
                <CardBody src="/public/assets/images/card2/23.jpg" text="Microwaves"/>
                <CardBody src="/public/assets/images/card2/24.webp" text="Washing machines"/>
            </>;
    
            const body3 = 
            <>
                <CardBody src="/public/assets/images/card3/331.jpg" text="Starting 249$ | Boat" />
                <CardBody src="/public/assets/images/card3/332.jpg" text="Starting 349$ | Bolut"/>
                <CardBody src="/public/assets/images/card3/333.jpg" text="Starting 649$ | Noise"/>
                <CardBody src="/public/assets/images/card3/334.webp" text="Starting 149$ | Zebronic"/>
            </>;
              
            const body4 = 
            <>
                <CardBody src="/public/assets/images/card4/41.webp" text="Up to 70% off | shoes" />
                <CardBody src="/public/assets/images/card4/42.jpg" text="Up to 60% off"/>
                <CardBody src="/public/assets/images/card4/43.jpeg" text="Starting 249$ | toys & games"/>
                <CardBody src="/public/assets/images/card4/44.jpg" text="Starting 249$ | Home"/>
            </>;
            const body5 = 
            <>
                <CardBody src="/public/assets/images/card5/51.jpg" text="Modern decoration" />
                <CardBody src="/public/assets/images/card5/52.jpeg" text="Up to 60% off "/>
                <CardBody src="/public/assets/images/card5/53.jpg" text="Starting 49$ | walldecor"/>
                <CardBody src="/public/assets/images/card5/54.jpg" text="flash sale | wooden decors"/>
            </>; 
            const body6 = 
            <>
                <CardBody src="/public/assets/images/card6/61.jpg" text="Modern sofa & comfortable" />
                <CardBody src="/public/assets/images/card6/62.webp" text="Up to 20% off modern salon"/>
                <CardBody src="/public/assets/images/card6/63.jpg" text="Wide variety of couches"/>
                <CardBody src="/public/assets/images/card6/64.jpg" text="Order now & get 30% off"/>
            </>;    
            const body7 = 
            <>
                <CardBody src="/public/assets/images/card7/711.jpg" text="starting 199$ | Bedsheets" />
                <CardBody src="/public/assets/images/card7/72.jpg" text="Up to 20% off | classic bedwears"/>
                <CardBody src="/public/assets/images/card7/733.jpg" text="Wide variety of Blankets"/>
                <CardBody src="/public/assets/images/card7/744.jpg" text="Order now | free delivery"/>
            </>; 
             const body8 = 
             <>
                 <CardBody src="/public/assets/images/card8/811.jpg" text="starting 199$ |Leather products" />
                 <CardBody src="/public/assets/images/card8/822.jpeg" text="Up to 20% off | shoes and bag"/>
                 <CardBody src="/public/assets/images/card8/82.jpeg" text="All what you dream | only needs click"/>
                 <CardBody src="/public/assets/images/card8/844.webp" text="Free delivery for 3 days"/>
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