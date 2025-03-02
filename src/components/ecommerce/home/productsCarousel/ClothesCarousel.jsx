import ProductsCarousel from "./ProductsCarousel";
import cc21 from "/public/assets/images/clothes/cc21.png";
import cc6 from "/public/assets/images/clothes/cc6.png";
import cc19 from "/public/assets/images/clothes/cc19.png";
import cc8 from "/public/assets/images/clothes/cc8.png";
import cc9 from "/public/assets/images/clothes/cc9.png";
import cc10 from "/public/assets/images/clothes/cc10.png";
import cc5 from "/public/assets/images/clothes/cc5.png";
import cc12 from "/public/assets/images/clothes/cc12.png";
import cc7 from "/public/assets/images/clothes/cc7.png";
import cc14 from "/public/assets/images/clothes/cc14.png";
import cc15 from "/public/assets/images/clothes/cc15.png";
import cc17 from "/public/assets/images/clothes/cc17.png";

function ClothesCarousel () {
    return(
        <ProductsCarousel 
            img1={<img src={cc21}/>}
            img2={<img src={cc6}/>}
            img3={<img src={cc19}/>}
            img4={<img src={cc8}/>}
            img5={<img src={cc9}/>}
            img6={<img src={cc10}/>}
            img7={<img src={cc5}/>}
            img8={<img src={cc12}/>}
            img9={<img src={cc7}/>}
            img10={<img src={cc14}/>}
            img11={<img src={cc15}/>}
            img12={<img src={cc17}/>}

        />        
    )
}

export default ClothesCarousel;