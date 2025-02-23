import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from "yup";
import { getCartProducts } from '../slices/cart.slice';
import { handleCashOrder, handleOnlinePayment } from '../slices/orders.slice';

export default function Checkout() {
    const [paymentMethod,setPaymentMethod] = useState(null)
    const dispatch = useDispatch()
    const cartInfo = useSelector(store=>store.cartReducer.cartInfo)
    let validationSchema = yup.object({
        shippingAddress:yup.object(
        {
          details: yup
            .string()
            .required("Address is required")
            .min(5, "Too Short!"),
          phone: yup
            .string()
            .required("Phone is required.")
            .matches(/^01[0-2|5][0-9]{8}$/, "Invalid phone number format."),
          city: yup
          .string()
          .required("City is required.")
          .min(3, "Too Short!")
          .max(12, "Too Long!"),
        }),
        });
    const formik = useFormik({
        initialValues:{
            shippingAddress:{
                details:"",
                phone:"",
                city:"",
            }
        },
        onSubmit:(values)=>{
            if(paymentMethod=="cash"){
                dispatch(handleCashOrder({cartId:cartInfo?.cartId,values:values}))
            }
            else{
                dispatch(handleOnlinePayment({cartId:cartInfo?.cartId,values:values}))
            }
        },
        validationSchema: validationSchema,
    })
    useEffect(()=>{
        dispatch(getCartProducts())
    },[])
  return (
    <>
      <form
      className="mx-auto text-center w-full lg:w-3/5 p-10"
      onSubmit={formik.handleSubmit}
    >
      <h3 className=" text-left text-2xl md:text-3xl lg:text-4xl my-3 text-[red]">
      <i className="fa-solid fa-cash-register"></i> Checkout Now
      </h3>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="shippingAddress.details"
          id="floating_name"
          value={formik.values.shippingAddress.details}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer  focus:border-[red]"
          placeholder=" "
        />
        {formik.errors.shippingAddress?.details && formik.touched.shippingAddress?.details ? (
          <p className="text-red-600">
            <i className="fa-solid fa-circle-exclamation mr-2"></i>
            {formik.errors.shippingAddress.details}
          </p>
        ) : null}
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  peer-focus:text-[red] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          name="shippingAddress.phone"
          id="floating_phone"
          value={formik.values.shippingAddress.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer  focus:border-[red]"
          placeholder=" "
        />
                {formik.errors.shippingAddress?.phone && formik.touched.shippingAddress?.phone ? (
          <p className="text-red-600">
            <i className="fa-solid fa-circle-exclamation mr-2"></i>
            {formik.errors.shippingAddress.phone}
          </p>
        ) : null}
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  peer-focus:text-[red] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="shippingAddress.city"
          id="floating_password"
          value={formik.values.shippingAddress.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer  focus:border-[red]"
          placeholder=" "
        />
                {formik.errors.shippingAddress?.city && formik.touched.shippingAddress?.city ? (
          <p className="text-red-600">
            <i className="fa-solid fa-circle-exclamation mr-2"></i>
            {formik.errors.shippingAddress.city}
          </p>
        ) : null}
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  peer-focus:text-[red] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          City
        </label>
      </div>
      <div className='flex justify-between gap-2 items-center'>
      <button
      onClick={()=>{setPaymentMethod("cash")}}
        type="submit"
        className="text-white bg-[red]  font-bold px-5 py-2.5  rounded-lg text-base  text-center active:scale-95"
      >Pay On Delivery <i className="fa-solid fa-truck"></i> 
      </button>
      <button
      onClick={()=>{setPaymentMethod("online")}}
        type="submit"
        className="text-white bg-[red] font-bold px-5 py-2.5 rounded-lg text-base  text-center active:scale-95"
      >Pay Online <i className="fa-brands fa-cc-visa"></i>
      </button>
      </div>
    </form>
    </>
  )
}
