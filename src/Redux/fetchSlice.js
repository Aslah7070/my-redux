import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
 export const fetchSlice=createSlice({
    name:"fetch",
    initialState:{
        datas:[],
    cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart=state.datas.filter((item,index)=>index===action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchh.fulfilled,(state,action)=>{
            state.datas=action.payload
        })
       
        
    }
})

 export const fetchh=createAsyncThunk(
    "fetch/products",
    async ()=>{
       const responce= await axios.get("https://jsonplaceholder.typicode.com/posts");
        const result = await responce.data;
        console.log(result);
        
        return result;
    }
)

export default fetchSlice.reducer;
export const {addToCart}=fetchSlice.actions
