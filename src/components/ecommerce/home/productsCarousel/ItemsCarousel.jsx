import ProductsCarousel from "./ProductsCarousel";

function ItemsCarousel () {
    return (
        <>
        <ProductsCarousel 
            img1={<img src="/public/assets/images/items/bottles.png" className="max-w-[90%]"/>}
            img2={<img src="/public/assets/images/items/rack.png" className="max-w-[90%]"/>}
            img3={<img src="/public/assets/images/items/jars.png" className="max-w-[90%]"/>}
            img4={<img src="/public/assets/images/items/kettle.png" className="max-w-[90%]"/>}
            img5={<img src="/public/assets/images/items/chopper1.png" className="max-w-[90%]"/>}
            img6={<img src="/public/assets/images/items/airfryer.png" className="max-w-[90%]"/>}
            img7={<img src="/public/assets/images/items/blender.png" className="max-w-[90%]"/>}
            img8={<img src="/public/assets/images/items/machine.png" className="max-w-[90%]"/>}
            img9={<img src="/public/assets/images/items/mixer.png" className="max-w-[90%]"/>}
            img10={<img src="/public/assets/images/items/chopper.png" className="max-w-[90%]"/>}
            img11={<img src="/public/assets/images/items/processor.png" className="max-w-[90%]"/>}
            img12={<img src="/public/assets/images/items/org.png" className="max-w-[90%]"/>}
        />
    </>
    )
}

export default ItemsCarousel;