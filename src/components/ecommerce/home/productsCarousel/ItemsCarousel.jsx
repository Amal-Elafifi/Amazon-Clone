import ProductsCarousel from "./ProductsCarousel";
import bottles from "/public/assets/images/items/bottles.png";
import jars from "/public/assets/images/items/jars.png";
import rack from "/public/assets/images/items/rack.png";
import kettle from "/public/assets/images/items/kettle.png";
import chopper1 from "/public/assets/images/items/chopper1.png";
import airfryer from "/public/assets/images/items/airfryer.png";
import blender from "/public/assets/images/items/blender.png";
import machine from "/public/assets/images/items/machine.png";
import mixer from "/public/assets/images/items/mixer.png";
import chopper from "/public/assets/images/items/chopper.png";
import processor from "/public/assets/images/items/processor.png";
import org from "/public/assets/images/items/org.png";

function ItemsCarousel () {
    return (
        <>
        <ProductsCarousel 
            img1={<img src={bottles} className="max-w-[90%]"/>}
            img2={<img src={rack} className="max-w-[90%]"/>}
            img3={<img src={jars} className="max-w-[90%]"/>}
            img4={<img src={kettle} className="max-w-[90%]"/>}
            img5={<img src={chopper1} className="max-w-[90%]"/>}
            img6={<img src={airfryer} className="max-w-[90%]"/>}
            img7={<img src={blender} className="max-w-[90%]"/>}
            img8={<img src={machine} className="max-w-[90%]"/>}
            img9={<img src={mixer} className="max-w-[90%]"/>}
            img10={<img src={chopper} className="max-w-[90%]"/>}
            img11={<img src={processor} className="max-w-[90%]"/>}
            img12={<img src={org} className="max-w-[90%]"/>}
        />
    </>
    )
}

export default ItemsCarousel;