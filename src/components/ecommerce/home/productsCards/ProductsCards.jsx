import { Fragment } from "react";
import CardItem from "../cards/Card";
import CardBody from "../cards/CardBody";
import Card from 'react-bootstrap/Card';



function ProductsCards () {

    const productCard1 = 
        <>
            <div className=" flex items-center justify-center flex-col">
                <CardBody src="/public/assets/images/productCards/cactus.png" text=""/>
                <p className="text-[12px] font-bold">Storio Reachargeable Toys talking Cactus Baby Toys for Kids Dancing Kids Cactus Toys...</p>
            </div>
            <div>
                <p className="font-bold py-3 text-[22px]">₹319</p>
                <div className="flex justify-center items-center gap-2">
                    <CardBody src="/public/assets/images/productCards/cactus.png" text=""/>
                    <CardBody src="/public/assets/images/productCards/car.png" text=""/>
                    <CardBody src="/public/assets/images/productCards/uno.png" text=""/>
                    <CardBody src="/public/assets/images/productCards/ipad.png" text=""/>
                </div>
            </div>
       
        </>;
    const productCard2 = 
        <>
            <CardBody src="/public/assets/images/productCards/face.png" text="" />
            <CardBody src="/public/assets/images/productCards/bell.png" text="" />
            <CardBody src="/public/assets/images/productCards/jars.png" text="" />
            <CardBody src="/public/assets/images/productCards/toaster.png" text="" />
        </>;
    const productCard3 = 
        <>
            <CardBody src="/public/assets/images/productCards/cream.png" text="" />
            <CardBody src="/public/assets/images/productCards/ceta.png" text="" />
            <CardBody src="/public/assets/images/productCards/gel.webp" text="" />
            <CardBody src="/public/assets/images/productCards/soap.png" text="" />
            
        </>
    const productCard4 = 
        <div className="flex justify-center items-center flex-wrap gap-[7px] max-w-[78%]">
            <CardBody src="/public/assets/images/productCards/dress.jpg" text="Dresses" />
            <CardBody src="/public/assets/images/productCards/top.avif" text="Tops" />
            <CardBody src="/public/assets/images/productCards/kurta.png" text="Kurta & sets" />
            <CardBody src="/public/assets/images/productCards/sare.avif" text="Sarees" />
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