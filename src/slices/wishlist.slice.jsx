import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let toastId
export const getWishlist = createAsyncThunk("wishlist/getWishlist",async(_,{getState})=>{
    const token = getState().userReducer.token;
    const options = {
        url:"https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "GET",
        headers:{
            token:token
        }
    }
    try {
        let {data} = await axios.request(options)
        return data;
    } catch (error) {
    }
})
export const addProductToWishlist = createAsyncThunk("wishlist/addProductToWishlist",async(productId,{getState})=>{
    toastId = toast.loading("Adding Product to your Wishlist ...")
    const token = getState().userReducer.token;
    const options = {
        url:"https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "POST",
        headers:{
            token:token
        },
        data:{
            productId,
        }
    }
    try {
        let {data} = await axios.request(options)
        if(data.status == "success")
            {
                toast.success(data.message)
            }
        return data;
    } catch (error) {
        toast.error(error.response.data.message)
    }finally{
        toast.dismiss(toastId)
    }
})
export const removeProductFromWishlist = createAsyncThunk("wishlist/removeProductFromWishlist",async(productId,{getState})=>{
    toastId = toast.loading("Deleting Product ...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        method: "DELETE",
        headers:{
            token:token
        }
    }
    try {
        let {data} = await axios.request(options)
        console.log(data);
        
        if(data.status == "success")
            {
                toast.success(data.message)
            }
        return data;
    } catch (error) {
        toast.error('Failed to remove product')
    }finally{
        toast.dismiss(toastId)
    }
})
const wishlist = createSlice({
    name:"wishlist",
    initialState:{
        wishlistInfo:null,
        isLoading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getWishlist.fulfilled,(state,action)=>{
            state.isLoading=false
            state.wishlistInfo=action.payload            
        })
        builder.addCase(getWishlist.pending,(state,action)=>{
            state.isLoading=true
        })
    },
})

export const wishlistReducer = wishlist.reducer