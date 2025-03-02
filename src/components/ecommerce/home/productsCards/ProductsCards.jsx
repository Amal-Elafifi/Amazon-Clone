import { Fragment } from "react";
import CardItem from "../cards/Card";
import CardBody from "../cards/CardBody";
import Card from 'react-bootstrap/Card';
import cactus from "/public/assets/images/productCards/cactus.png";
import car from "/public/assets/images/productCards/car.png";
import uno from "/public/assets/images/productCards/uno.png";
import ipad from "/public/assets/images/productCards/ipad.png";
import face from "/public/assets/images/productCards/face.png";
import bell from "/public/assets/images/productCards/bell.png";
import jars from "/public/assets/images/productCards/jars.png";
import toaster from "/public/assets/images/productCards/toaster.png";
import cream from "/public/assets/images/productCards/cream.png";
import ceta from "/public/assets/images/productCards/ceta.png";
import gel from "/public/assets/images/productCards/gel.webp";
import soap from "/public/assets/images/productCards/soap.png";
import dress from "/public/assets/images/productCards/dress.jpg";
import top from "/public/assets/images/productCards/top.avif";
import kurta from "/public/assets/images/productCards/kurta.png";
import sare from "/public/assets/images/productCards/sare.avif";
function ProductsCards () {

    const productCard1 = 
        <>
            <div className=" flex items-center justify-center flex-col">
                <CardBody src={cactus} text=""/>
                <p className="text-[12px] font-bold">Storio Reachargeable Toys talking Cactus Baby Toys for Kids Dancing Kids Cactus Toys...</p>
            </div>
            <div>
                <p className="font-bold py-3 text-[22px]">₹319</p>
                <div className="flex justify-center items-center gap-2">
                    <CardBody src={cactus} text=""/>
                    <CardBody src={car} text=""/>
                    <CardBody src={uno} text=""/>
                    <CardBody src={ipad} text=""/>
                </div>
            </div>
       
        </>;
    const productCard2 = 
        <>
            <CardBody src={face} text="" />
            <CardBody src={bell} text="" />
            <CardBody src={jars} text="" />
            <CardBody src={toaster} text="" />
        </>;
    const productCard3 = 
        <>
            <CardBody src={cream} text="" />
            <CardBody src={ceta} text="" />
            <CardBody src={gel} text="" />
            <CardBody src={soap} text="" />
            
        </>
    const productCard4 = 
        <div className="flex justify-center items-center flex-wrap gap-[7px] max-w-[78%]">
            <CardBody src={dress} text="Dresses" />
            <CardBody src={top} text="Tops" />
            <CardBody src={kurta} text="Kurta & sets" />
            <CardBody src={sare} text="Sarees" />
        </div>



    return(
        <div className="p-[30px] flex justify-center items-center gap-5 flex-wrap">
            <CardItem 
                title="Best Sellers in Toys and Games"
                body={productCard1}
            />
            <CardItem 
                title="Customers' Most-Loved Products"
                body={productCard2} linkText="Explore more"
            />
            <CardItem 
                title="Best Sellers in Beauty"
                body={productCard3}
            />
            <CardItem 
                title="Latest Styles | Dresses , Kurta & more | 50% - ...." 
                body={productCard4} linkText="See more"
            />
       </div>
    )
}

export default ProductsCards;