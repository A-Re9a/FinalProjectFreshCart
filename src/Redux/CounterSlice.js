import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}
const conterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter++;
        },
        decrement:(state)=>{
            state.counter--;
        },
        incrementByAmount:(state,{payload})=>{
            state.counter+=payload;
        }
    }
});

export const counterReducer=conterSlice.reducer;
export const {increment,decrement,incrementByAmount}=conterSlice.actions;