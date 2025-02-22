import axios from "axios";
import { useEffect, useState } from "react";
 
function Product () {
    const [productInfo, setProductInfo] = useState(null);
    const getProduct =async() =>{
        const productdata = (await axios.get("https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b")).data.data;
        setProductInfo(productdata);
        console.log(productdata);
    }
    useEffect(() => {
      getProduct();
    }, [])
    if (!productInfo) return (<>loading</>);
    return(
        <>
            {/* images array */}
                <div>
                    {productInfo.images.map((image,i) => (
                        <img key={i} src={image} alt="product image" />
                    ))}
                </div>
            {/* main product image */}
                <img src={productInfo.images[0]} alt="product main image" />
            {/* product details */}
                <p>Brand: {productInfo.brand.name}</p>
                <p>{productInfo.title}</p>
                <hr/>
                {/* product price */}
                    <p>${productInfo.price}</p>
                    <img src="PayAdv.png" alt="payment advantages"/>
                {/* product description */}
                <p>About this item</p>
                <p>{productInfo.description}</p>
            {/* payment box */}
            <div>
                <p>${productInfo.price}</p>
                <p>location icon</p>
                <p>Delivery to Riyadh - Update Location</p>
                <p>Usually ships within 4 to 5 days</p>
                <>quantity list</>
                <button>Add to Cart</button>
                <button>Buy Now</button>

            </div>

                

        </>
    )
}

export default Product;