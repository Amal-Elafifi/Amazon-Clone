import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCartProduct, getCartProducts, updateProductCount } from '../slices/cart.slice'

export default function CartItemCard({productInfo}) {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const{count,price,product} = productInfo
    const{title,imageCover,id} = product
  return (
    <>
       <div className='container w-11/12  mx-auto my-5'>
    <div className='cart-item flex items-center border rounded-xl p-3 '>
       <img src={imageCover} onClick={
        ()=>{
            //h3ml navigate le el details bta3t el product
        //   navigate(`/`)
        }
       } className='w-2/6 md:w-1/6 mr-2 border-[1px] my-2 rounded-md border-[--main-color] cursor-pointer' alt="" />
       <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-5 w-full'>
       <div>
        <h2 onClick={
        ()=>{
            //h3ml navigate le el details bta3t el product
        //   navigate(`/`)
        }
       }
         className='text-2xl font-bold cursor-pointer line-clamp-3'>{title}</h2>
        <p className='text-[--main-color] font-semibold my-3'>Price : <span className='font-thin text-slate-600 '>EGP {price}</span></p>
        <button onClick={()=>{
            dispatch(deleteCartProduct(id))
          }
            } className='font-semibold active:scale-95 hover:scale-110 duration-300 transition-all'><i className="fa-solid fa-trash-can text-[--main-color]"></i> Remove</button>
       </div>
       <div className='flex items-center gap-5'>
        <span onClick={()=>{
            dispatch(updateProductCount({productId:id,count: count+1}))

        }} className='w-8 h-8 flex justify-center items-center rounded-lg border-2 hover:scale-110 duration-300 transition-all border-[--main-color] cursor-pointer active:scale-90'><i className="fa-solid fa-plus text-[--main-color]"></i></span>
        <p>{count}</p>
        <span onClick={()=>{
            dispatch(updateProductCount({productId:id,count: count-1}))
        }} className='w-8 h-8 flex justify-center items-center rounded-lg border-2 hover:scale-110 duration-300 transition-all border-[--main-color] cursor-pointer active:scale-90'><i className="fa-solid fa-minus text-[--main-color]"></i></span>
       </div>
       </div>
      </div>
   </div>
    </>
  )
}