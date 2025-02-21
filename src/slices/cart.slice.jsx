import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let toastId;
export const getCartProducts = createAsyncThunk("cart/getCartProducts",async(_,{getState})=>{
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart`,
        method: "GET",
        headers: {
            token,
        }
    }
    try {
        const {data} = await axios.request(options)
        return data.data
    }
    finally{
    }
})
export const addProductToCart = createAsyncThunk("cart/addProductToCart",async(productId,{getState})=>{
    toastId = toast.loading("Adding Product to your Cart ...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart`,
        method: "POST",
        headers: {
            token,
        },
        data:{
            productId,
        }
    }
    try {
        const {data} = await axios.request(options)
        console.log(data);
        if(data.status === "success")
            {
                //hna hn3ml call le el cart tany 34an el update
                getCartProducts()
                toast.success(data.message)
            }
            return data
    } catch (error) {
        toast.dismiss(toastId)
        toast.error(error.response.data.message)
    }
    finally{
        toast.dismiss(toastId)
    }
})
export const deleteCartProduct = createAsyncThunk("cart/deleteCartProduct",async(productId,{getState})=>{
    toastId = toast.loading("Deleting Product ...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        method: "DELETE",
        headers: {
            token,
        }
    }
    try {
        const {data} = await axios.request(options)
        if(data.status === "success")
            {
                //hna hn3ml call le el cart tany 34an el update
                getCartProducts()
                toast.dismiss(toastId)
                toast.success("Deleted Successfully")
            }
            return data.data
    }
    finally{
        toast.dismiss(toastId)
    }
})
export const deleteAllCart = createAsyncThunk("cart/deleteAllCart",async(_,{getState})=>{
    toastId = toast.loading("Deleting Cart ...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart`,
        method: "DELETE",
        headers: {
            token,
        }
    }
    try {
        const {data} = await axios.request(options)
        console.log(data);
        
        if(data.message === "success")
            {
                //hna hn3ml call le el cart tany 34an el update
                getCartProducts()
                toast.dismiss(toastId)
                toast.success("Deleted Successfully")
            }
            return data
    }
    finally{
        toast.dismiss(toastId)
    }
})
export const updateProductCount = createAsyncThunk("cart/updateProductCount",async({productId,count},{getState})=>{
    toastId = toast.loading("Updating ...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        method: "PUT",
        headers: {
            token,
        },
        data:{
            count
        }   
    }
    try {
        const {data} = await axios.request(options)
        if(data.status === "success")
            {
                //hna hn3ml call le el cart tany 34an el update
                toast.dismiss(toastId)
                toast.success("Updated Successfully")
            }
            return data.data
    }
    finally{
        toast.dismiss(toastId)
    }
})
const cart = createSlice({
    name: "cart",
    initialState: {
        cartInfo: null,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartProducts.fulfilled,(state,action)=>{  
            state.cartInfo = action.payload;
            state.isLoading= false;
        }),
        builder.addCase(getCartProducts.pending,(state,action)=>{  
            state.isLoading= true;
        }),
        builder.addCase(deleteCartProduct.pending,(state,action)=>{            
            state.cartInfo = action.payload;
            state.isLoading= false;
        })
        builder.addCase(deleteCartProduct.fulfilled,(state,action)=>{
            state.isLoading= true;
        })
        builder.addCase(deleteAllCart.fulfilled,(state,action)=>{
            state.isLoading = false
            state.cartInfo = null
        })
        builder.addCase(deleteAllCart.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(updateProductCount.fulfilled,(state,action)=>{      
            state.cartInfo = action.payload
        })

    },
})

export const cartReducer = cart.reducer