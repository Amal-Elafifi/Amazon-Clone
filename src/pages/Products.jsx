import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";






function Products(){
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState(null)


    useEffect(() => {
        let isMount = true;

          const fetchData = async () => {
                try {
                      const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=20&page=${currentPage}`)
                      setProducts(response.data)
                      console.log(response.data);
                      
                } catch (error) {
                      console.log(error)
                }

          }
    
          fetchData() 
          return () => {
            isMount = false;
          }    
    }, [currentPage])
    
    
    
    return (
            <div className="category-page flex gap-3 p-6 ">
                <aside>
                    <section className="flex flex-col justify-start gap-6 
                    w-[150px] text-sm ">
                        <div className="delivery ">
                            <h3 >Delivery Day</h3>
                            <label><input type="radio" name="" value='' /> Get It in 2 Days</label>
                        </div>
                        <div>
                            <h3>Customer Reviews</h3>
                            <img className="w-fit" src="/src/assets/images/Star.png" alt="" />
                        </div>
                        <div >
                            <h3>Brands</h3>
                            <label><input type="radio" name="brand" value='' /> Samsung</label>
                            <label><input type="radio" name="brand" value='' /> LG</label>
                            <label><input type="radio" name="brand" value='' /> Haier</label>
                            <label><input type="radio" name="brand" value='' /> Daikin</label>
                            <label><input type="radio" name="brand" value='' /> Godrej</label>
                            <label><input type="radio" name="brand" value='' /> IFB</label>
                            <label><input type="radio" name="brand" value='' /> Panasonic</label>
                        </div>
                        <div className="">
                            <h3>Price</h3>
                            <label><input type="radio" name="price" value='' /> All</label>
                            <label><input type="radio" name="price" value='' /> ₹5900 to ₹10,000</label>
                            <label><input type="radio" name="price" value='' /> ₹10,000 to ₹20,000</label>
                            <label><input type="radio" name="price" value='' /> ₹20,000 to ₹30,000</label>
                            <label><input type="radio" name="price" value='' /> ₹30,000 to ₹45,000</label>
                        </div>
                    </section>
                </aside>
                <section className="grid grid-cols-1 gap-5 overflow-auto
                sm:grid-cols-2 lg:grid-cols-4">
                    {
                        products?.data.map((product, i) => (
                            <Card
                            key= {i}
                            description={product.description} 
                            image={product.images[0]}
                            sold={product.sold}
                            price={product.price}
                            rating={product.ratingsAverage}
                            ratingNum ={product.ratingsQuantity}
                            id={product.id}
                            />
                        ))
                    }
                <div className="flex col-span-full justify-center mt-5 "> 
                    <button onClick={()=>{
                    setProducts(null)
                    if(currentPage<=1)
                    {
                        setCurrentPage(products.metadata.numberOfPages)
                    }
                    else
                    {
                        setCurrentPage(currentPage-1)
                    }
                    }} href="#" className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-white bg-footerbg border border-gray-300 rounded-lg hover:bg-gray-500 hover:text-white active:scale-90 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    </button>
                    <button onClick={()=>{
                    setProducts(null)
                    if(currentPage>=products.metadata.numberOfPages)
                    {
                        setCurrentPage(1)
                    }
                    else
                    {
                        setCurrentPage(currentPage+1)
                    }
                    }}
                    href="#" className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-footerbg border border-gray-300 rounded-lg hover:bg-gray-500 hover:text-white active:scale-90 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    </button>
                </div>
                </section>
            </div>
    )
}

export default Products;