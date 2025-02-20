import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    isLoading:true,
}
export  const getAllProducts=createAsyncThunk("products/getAllProducts",async()=>{
const {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products')
return data.data;
})
const productSlice=createSlice({
    name:"products",
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
        state.products=action.payload;
        state.isLoading=false;
    }).addCase(getAllProducts.pending,(state)=>{
        console.log("...Loading");
        if(state.products.length===0){
        state.isLoading=true;
        } 
    }).addCase(getAllProducts.rejected,(state)=>{
        console.log("Error");
        state.isLoading=false;
    })
    }
});

export const productsReducer=productSlice.reducer;
