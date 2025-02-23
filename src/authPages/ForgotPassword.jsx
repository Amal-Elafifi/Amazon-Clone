import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { forgetPassword } from '../slices/user.slice'
export default function ForgotPassword() {

    const dispatch = useDispatch()
    let validationSchema = yup.object({
        email:yup.string().required('Email is required.').email('Invalid email format.'),
      })
    let formik = useFormik({
        initialValues:{
          email:'',
        },
        onSubmit:(values)=>{
            dispatch(forgetPassword(values))
        },
        validationSchema:validationSchema
      })
  return (
    <>
     <form className="mx-auto w-full text-center lg:w-3/5 p-10"  onSubmit={formik.handleSubmit}>
      <h3 className=' text-left text-2xl md:text-3xl lg:text-4xl my-3 text-[red]'> <i className="fa-regular fa-circle-user mr-3"></i>Reset now</h3>  
      <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer  focus:border-[red]" placeholder=" " />
          {formik.errors.email && formik.touched.email ? <p className='text-red-600'><i className="fa-solid fa-circle-exclamation mr-2"></i>{formik.errors.email}</p> :null}
          <label htmlFor="floating_email" className="peer-focus:font-medium left-0 absolute text-sm text-gray-500  peer-focus:text-[red] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>  
      <button type="submit" className="text-white bg-[red] font-medium rounded-lg text-lg px-5 py-2.5 text-center active:scale-90">Send Code</button>
    </form> 
    </>
  )
}
