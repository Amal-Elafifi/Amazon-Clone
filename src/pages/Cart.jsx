import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import empty from '/empty_cart.svg'
import { Link } from 'react-router-dom'
import { deleteAllCart, getCartProducts } from '../slices/cart.slice'
import { ShoppingBag, ShoppingCart, Trash2 } from 'lucide-react'
import CartItemCard from '../components/CartItemCard'

export default function Cart() {
    const isLoading = useSelector(store=>store.cartReducer.isLoading)
    const dispatch = useDispatch()    
    const cartInfo = useSelector(store=>store.cartReducer.cartInfo)    
   useEffect(()=>{
    dispatch(getCartProducts())
    window.scrollTo(0,0)
  },[])
  if(isLoading){
   return <h3>Loading..............</h3>
  }
  return (
    <>
      <section className='my-6'>
        {cartInfo?.numOfCartItems == 0 ?  <div className='text-center '>
          <img src={empty} className='mx-auto w-1/3' alt="emptyCart" />
          <p className='text-center text-3xl font-extrabold my-4 '>Your Cart Is Empty</p>
          <Link to="/" className=''>
          <button className='bg-[red] text-white font-bold px-5 py-3 rounded-lg active:scale-90 transition-all duration-300'>Continue Shopping</button>
          </Link>
        </div>: 
       <>
        <div className='text-center  mt-6 flex items-center  justify-center gap-3 relative before:absolute before:bottom-0 before:left-[50%] before:w-24 before:rounded-lg before:h-1 before:top-full before:-translate-x-1/2 before:bg-[red]'>
        <i className='fa-brands fa-opencart text-2xl'></i>
        <h2 className='font-bold text-2xl'>Your Cart</h2>
      </div>
      <div className='flex items-center justify-around mt-5 '>
      <p className='text-[red] font-semibold my-3'>Total Price : <span className='font-thin text-slate-600 '>EGP {cartInfo?.data?.totalCartPrice}</span></p>
      <button onClick={()=>{
        dispatch(deleteAllCart())
        setTimeout(()=>{
            dispatch(getCartProducts())
        },500)
      }} className='font-semibold active:scale-95 text-lg  bg-red-500 text-white px-3 py-[6px] rounded-lg'><i className="fa-solid fa-trash-can"></i> Clear Cart</button>
      </div>
        <div className='mt-4 '>
          {cartInfo?.data?.products?.map((product)=><CartItemCard key={product._id} productInfo={product}/>)}
        </div>
        <Link to="/checkout" className='bg-[red] mt-5 w-fit mx-auto text-white font-bold px-4 py-3 rounded-lg hover:text-white border border-[red] active:scale-90 flex justify-center items-center'><span className='mr-2'>Checkout</span><ShoppingBag/></Link>
        </>}
        </section>
    </>
  )
}