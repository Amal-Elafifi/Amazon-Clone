import { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import axios from "axios";
import Loading from "../components/feedback/Loading";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";




function Categories() {
    
    const [products, setProducts] = useState([])
    const filter = useRef(null)

    useEffect(() => {
        let isMount = true;

          const fetchData = async () => {
                try {
                      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
                      setProducts(response.data.data)
                      console.log(response.data.data[0].id)
                } catch (error) {
                      console.log(error)
                }

          }
    
          fetchData() 
          return () => {
            isMount = false;
          }    
    }, [])

    function handleFilter () {
        filter.current.classList.toggle('hidden')
    }
    
    
    
    return (
            <div className="category-page md:gap-3 flex flex-col md:flex-row p-6 ">
                <FontAwesomeIcon onClick={handleFilter} icon={faBars} className="text-3xl cursor-pointer md:hidden mb-3"/>
                <aside ref={filter} className="hidden md:block">
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
                sm:grid-cols-2 xl:grid-cols-4">
                    {
                        products.map((product, i) => (
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

                </section>
            </div>
    )
}

export default Categories;