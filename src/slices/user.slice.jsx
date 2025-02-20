import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let toastId;
export const signUp = createAsyncThunk("user/signUp",async(values)=>{
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/auth/signup`,
        method: 'POST',
        data: values,
    }    
    toastId = toast.loading("Signing up...")
    try {
        const { data } = await axios.request(options);
        if(data.message ==="success"){
         toast.success("Signed up successfully")
         setTimeout(()=>{
             window.location.href= '/login'
         },1500)
        }
        return data;
    }
    finally{
        toast.dismiss(toastId)
    }
})
export const logIn = createAsyncThunk("user/logIn",async(values)=>{
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/auth/signin`,
        method: 'POST',
        data: values,
    }    
    toastId = toast.loading("Logging in...")
    try {
        const { data } = await axios.request(options);
        if(data.message ==="success"){
         toast.success("Welcome back")
         setTimeout(()=>{
            window.location.href= '/'
        },1500)
        }
        return data;
    }
    finally{
        toast.dismiss(toastId)
    }
})
const user = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
    id: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase( signUp.fulfilled, (state, action) => {
    }),
    builder.addCase( logIn.fulfilled, (state, action) => {
        state.token=action.payload.token
        localStorage.setItem("token",action.payload.token)
    })
},

});
export const userReducer = user.reducer;
