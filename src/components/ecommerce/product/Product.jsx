import axios from "axios";
import { useEffect, useState } from "react";
import { MapPinned} from "lucide-react";
import RatingStars from "../../RatingStars";
function Product () {
    const [productInfo, setProductInfo] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [choosenImg, setChoosenImg] = useState(0)
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
            <div className="sm:grid lg:grid-cols-10 xl:grid-cols-12 h-[640px] font-sans m-5 flex flex-col md:grid-cols-6">
                {/* images array */}
                <div className="sm:overflow-y-scroll sm:h-[90%] sm:col-span-1 flex flex-row sm:flex-col  scroll-smooth h-80 w-[80px]">
                    {productInfo.images.map((image,i) => (
                        <img key={i} src={image} alt="product image"  className={` h-20 w-auto p-1 rounded-lg ${i==choosenImg ? "border border-blue-600" : "border-0"}`} onClick={()=>{setChoosenImg(i);}}/>
                    ))}
                </div>
                {/* main product image */}
                <img src={productInfo.images[choosenImg]} alt="product main image" className="sm:h-[500px]  m-5 rounded-lg sm:col-span-4 col-span-4 h-[400px]" />
                {/* product details */}
                <div className="col-span-5 mr-1/2 flex flex-col justify-around h-3/4 mb-5">
                    <p className="text-[#1F8394] font-inika">Brand: {productInfo.brand.name}</p>
                    <p className=" text-[#5C5C5C]">{productInfo.title}</p>
                    <hr className="w-3/4"/>
                    {/* product price */}
                    <p><span className="text-xs align-top ">SAR</span><span className="text-[31.32px]">{productInfo.price}</span><span className="text-xs align-top ">14</span></p>                <p>All price include VAT.</p>
                    <div>
                    <span className="text-[#5C5C5C] mr-1">Sign in to redeem.</span>
                    <span className="bg-[#71ED58]">Extra 20%</span>
                    <span>off with meem credit cards.</span>
                    <p>Enter code MEEM20 at checkout. Discount by Amazon.</p>
                    </div>
                    <img src="/src/assets/images/PayAdv.png" alt="payment advantages" className="m-2 sm:w-1/2 w-3/4"/>
                    {/* product description */}
                    <p className="font-bold">About this item</p>
                    <p className="ml-2">{productInfo.description}</p>
                    </div>
                {/* payment box */}
                <div className="border border-black rounded p-4 flex flex-col justify-between h-[80%] col-span-2 sm:w-60 ml-auto w-80 md:w-96 md:h-[500px] xl:w-60"> 
                    <p><span className="text-xs align-top ">SAR</span><span className="text-[31.32px]">{productInfo.price}</span><span className="text-xs align-top ">14</span></p>
                    <p>SAR96 delivery <b>6-9 October</b>.</p>
                    <p className="text-[#1F8394]">Details</p>
                    <div className="flex ">
                    <MapPinned />
                    <span className="text-[#1F8394] ml-2">Delivery to Riyadh - Update Location</span>
                    </div>
                    <p className="text-[#B12704]">Usually ships within 4 to 5 days</p>
                    <p className="text-xl text-center">
                        <button onClick={()=>{if(quantity > 1) setQuantity(quantity-1);}} className="bg-[#1F8394] rounded-full w-8 text-white mr-5 hover:brightness-125">-</button>
                        Quantity: {quantity} 
                        <button onClick={()=>{setQuantity(quantity+1);}} className="bg-[#1F8394] rounded-full w-8 text-white ml-5 hover:brightness-125">+</button></p>
                    <button className="rounded-full bg-[#FFD814] w-full h-[26.900775909423828px] my-2 hover:brightness-125">Add to Cart</button>
                    <button className="rounded-full bg-[#FFA41C] w-full h-[31.79073715209961px] my-1 hover:brightness-150">Buy Now</button>
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                        <span className="font-medium">Ships from</span>
                        <span>Monatik LLC</span>
                        <span className="font-medium">Sold by</span>
                        <span className="text-[#1F8394]">Monatik LLC</span>
                        <span className="font-medium">Payment</span>
                        <span className="text-[#1F8394]">Secure transaction</span>
                    </div>
                    <hr className="my-2"/>
                        <button className="p-2 border rounded-xl w-full hover:bg-slate-400 hover:text-white">Add to List</button>
                </div>
            </div>
            {/* product reviews */}
            <div className="">
                <h2 className="text-xl font-medium">Customer Reviews</h2>
                <div className="flex gap-2">
                    <RatingStars number={4}/>
                    <span>4.1 out of 5</span>
                </div> 
                <div className="flex gap-2">
                    <p>5 Star</p>
                    <div className=" bg-gray-200 rounded h-4 dark:bg-gray-700 w-40 mt-2">
                    <div className="bg-[#DE7921] h-4 rounded w-[45%]" ></div>
                    </div>
                    <p className="mt-1">45%</p>
                </div>
                {/* باقي ال review cards و الresponsiveness بتاعة النص اللي تحت */}
                {/* و ال rountaing */}
            </div>
        </>
    )
}

export default Product;